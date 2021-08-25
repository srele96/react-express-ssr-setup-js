import { NotFound } from '../../client/pages/NotFound';
import { getTemplate, withContent } from '../util';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';

const notFound = async (request, response, next) => {
  try {
    const content = renderToString(
      <StaticRouter url={request.url}>
        <NotFound />
      </StaticRouter>
    );

    const template = await getTemplate();
    const page = withContent(template, content);
    
    response.status(404);
    response.send(page);
  } catch (error) {
    console.log('notFound', error);
    next(error);
  }
};

export { notFound };
