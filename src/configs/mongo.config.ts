import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> => {
  return {
    uri: getMongoUri(configService),
    ...getMongoOptions(),
  };
};

const getMongoUri = (configService: ConfigService) =>
  'mongodb://' +
  configService.get('MONGO_USERNAME') +
  ':' +
  configService.get('MONGO_PASSWORD') +
  '@' +
  configService.get('MONGO_HOST') +
  ':' +
  configService.get('MONGO_PORT') +
  '/' +
  configService.get('MONGO_AUTH_DATABASE');

const getMongoOptions = () => ({
  retryAttempts: 10,
  retryDelay: 3000,
});
