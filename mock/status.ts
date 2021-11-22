export default {
  'GET /api/status/500': (req:any, res:any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).send();
  },
  'GET /api/status/403': (req:any, res:any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(403).send();
  },
};
