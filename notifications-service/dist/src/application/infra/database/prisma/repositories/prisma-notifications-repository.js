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
exports.PrismaNotificationRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_notification_mapper_1 = require("../mappers/prisma-notification-mapper");
let PrismaNotificationRepository = class PrismaNotificationRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(notification) {
        const raw = prisma_notification_mapper_1.PrismaNotificationMapper.toPrisma(notification);
        await this.prisma.notification.create({
            data: raw,
        });
    }
    async findById(notificationId) {
        const notification = await this.prisma.notification.findUnique({
            where: {
                id: notificationId,
            },
        });
        if (!notification)
            return null;
        return prisma_notification_mapper_1.PrismaNotificationMapper.toDomain(notification);
    }
    async findManyByRecipientId(recipientId) {
        const notifications = await this.prisma.notification.findMany({
            where: {
                recipientId,
            },
        });
        return notifications.map((notification) => {
            return prisma_notification_mapper_1.PrismaNotificationMapper.toDomain(notification);
        });
    }
    async countManyByRecipientId(recipientId) {
        const count = await this.prisma.notification.count({
            where: {
                recipientId,
            },
        });
        return count;
    }
    async save(notification) {
        const raw = prisma_notification_mapper_1.PrismaNotificationMapper.toPrisma(notification);
        await this.prisma.notification.update({
            where: {
                id: raw.id,
            },
            data: raw,
        });
    }
};
PrismaNotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaNotificationRepository);
exports.PrismaNotificationRepository = PrismaNotificationRepository;
//# sourceMappingURL=prisma-notifications-repository.js.map