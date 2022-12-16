import { OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
export declare class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor();
    onModuleDestroy(): Promise<void>;
}
