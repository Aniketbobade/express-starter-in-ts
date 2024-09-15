import app from './app';
import  Config from './configs';
const port = Config.PORT || 5000;
import db from './database/dbConnect';

app.listen(port, async () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${Config.PORT}`);
  await db;
  /* eslint-enable no-console */
});
