import { Controller, Get, Inject, Query, HttpStatus } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { generateParseIntPipe } from 'src/utils';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserBookignCount } from './vo/UserBooingCount.vo';
import { MeetingRoomUsedCount } from './vo/MeetingRoomUsedCount.vo';

@ApiTags('统计管理')
@Controller('statistic')
export class StatisticController {
  @Inject(StatisticService)
  private statisticService: StatisticService;

  @ApiBearerAuth()
  @ApiQuery({
      name: 'startTime',
      type: String,
      description: '开始时间'
  })
  @ApiQuery({
      name: 'endTime',
      type: String,
      description: '结束时间'
  })
  @ApiResponse({
      status: HttpStatus.OK,
      type: UserBookignCount
  })
  @Get('userBookingCount')
  async userBookignCount(
    @Query('startTime') startTime: string,
    @Query('endTime') endTime,
  ) {
    return this.statisticService.userBookingCount(startTime, endTime);
  }

  @ApiBearerAuth()
  @ApiQuery({
      name: 'startTime',
      type: String,
      description: '开始时间'
  })
  @ApiQuery({
      name: 'endTime',
      type: String,
      description: '结束时间'
  })
  @ApiResponse({
      status: HttpStatus.OK,
      type: MeetingRoomUsedCount
  })
  @Get('meetingRoomUsedCount')
  async meetingRoomUsedCount(
    @Query('startTime') startTime: string,
    @Query('endTime') endTime,
  ) {
    return this.statisticService.meetingRoomUsedCount(startTime, endTime);
  }
}
