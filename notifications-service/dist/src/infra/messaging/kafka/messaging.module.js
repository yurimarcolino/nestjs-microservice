"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingModule = void 0;
const send_notification_1 = require("../../../application/use-cases/send-notification");
const database_module_1 = require("../../database/database.module");
const common_1 = require("@nestjs/common");
const notifications_controler_1 = require("./controllers/notifications.controler");
const kafka_consumer_service_1 = require("./kafka-consumer.service");
let MessagingModule = class MessagingModule {
};
MessagingModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [kafka_consumer_service_1.KafkaConsumerService, send_notification_1.SendNotification],
        controllers: [notifications_controler_1.NotificationsController],
    })
], MessagingModule);
exports.MessagingModule = MessagingModule;
//# sourceMappingURL=messaging.module.js.map