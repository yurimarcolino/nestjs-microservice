"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaConsumerService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let KafkaConsumerService = class KafkaConsumerService extends microservices_1.ServerKafka {
    constructor() {
        super({
            client: {
                clientId: 'notification',
                brokers: ['wealthy-finch-13053-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'd2VhbHRoeS1maW5jaC0xMzA1MyQCSlf37dJM3QN_tEM8CugFM8NAaMDuuPmSvjE',
                    password: 'IpYmfuFTufa_Y6i5FroBcP7dga_-UcfCG7cvRS917qbl6EbU72mUdmMZZFlmgEgPWJ7ZJw==',
                },
                ssl: true,
            },
        });
    }
    async onModuleDestroy() {
        await this.close();
    }
};
KafkaConsumerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], KafkaConsumerService);
exports.KafkaConsumerService = KafkaConsumerService;
//# sourceMappingURL=kafka-consumer.service.js.map