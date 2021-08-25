import { Home } from '../../client/pages/Home';
import { getTemplate, withContent } from '../util';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

const homeGET = async (request, response, next) => {
  try {
    const html = renderToString(
      <StaticRouter url={request.url}>
        <Home />
      </StaticRouter>
    );

    const template = await getTemplate();
    const page = withContent(template, html);

    response.send(page);
  } catch (error) {
    next(error);
  }
};

export { homeGET };
