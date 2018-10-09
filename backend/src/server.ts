import { ServerLoader, ServerSettings } from '@tsed/common';
import '@tsed/typeorm';
import Path = require('path');

const rootDir = Path.resolve(__dirname);

@ServerSettings({
  rootDir: Path.resolve(__dirname),
  acceptMimes: ['application/json'],
  mount: {
    '/rest': `${rootDir}/controllers/*.ts`
  },
  typeorm: [
    {
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      database: 'school',
      username: 'root',
      password: '123456',
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
