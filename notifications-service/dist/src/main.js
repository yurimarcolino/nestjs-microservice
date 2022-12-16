"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafka_consumer_service_1 = require("./infra/messaging/kafka/kafka-consumer.service");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const kafkaConsumerService = app.get(kafka_consumer_service_1.KafkaConsumerService);
    app.connectMicroservice({
        strategy: kafkaConsumerService,
    });
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map