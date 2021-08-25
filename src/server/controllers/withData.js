import getData, { WithData } from '../../client/pages/WithData';
import { getTemplate, withContent } from '../util';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

const withDataGET = async (request, response, next) => {
  try {
    const axiosRes = await getData();

    const html = renderToString(
      <StaticRouter url={request.url}>
        <WithData serverInitialState={axiosRes.data} />
      </StaticRouter>
    );

    const template = await getTemplate();
    const page = withContent(template, html, axiosRes.data);

    response.send(page);
  } catch (error) {
    next(error);
  }
};

export { withDataGET };
