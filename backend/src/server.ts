import { ServerLoader, ServerSettings } from '@tsed/common';
import '@tsed/typeorm';
import '@tsed/swagger';
import '@tsed/ajv';
import Path = require('path');
import { NotFoundMiddleware } from './system/NotFoundMiddleware';

const rootDir = Path.resolve(__dirname);
require('dotenv').config();

@ServerSettings({
  rootDir: Path.resolve(__dirname),
  acceptMimes: ['application/json'],
  mount: {
    '/rest': `${rootDir}/controllers/*.ts`
  },
  swagger: [
    {
      path: '/api-docs',
      doc: 'api-v1'
    }
  ],
  ajv: {
    errorFormat: error =>
      `At ${error.modelName}${error.dataPath}, value '${error.data}' ${
        error.message
      }`,
    options: { verbose: true }
  },
  typeorm: [
    {
      name: process.env.NAME_DB_DEFAULT,
      type: process.env.TYPE_DB,
      host: process.env.HOST_DB,
      database: process.env.DATABASE,
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD_DB,
      synchronize: true,
      logging: true,
      entities: [`${__dirname}/entity/*{.ts,.js}`],
      migrations: [`${__dirname}/migrations/*{.ts,.js}`],
      cli: {
        migrationsDir: `${__dirname}/migrations`
      }
    }
  ]
})
export class Server extends ServerLoader {
  public $afterRoutesInit() {
    this.use(NotFoundMiddleware);
  }

  $onMountingMiddlewares(): void | Promise<any> {
    const cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compress = require('compression'),
      methodOverride = require('method-override');

    this.use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      );

    return null;
  }
  public $onReady() {
    console.log('Server started...');
  }

  public $onServerInitError(err) {
    console.error(err);
  }
}

new Server().start();
