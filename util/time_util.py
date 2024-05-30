import re
import datetime

import pytz


def time_generator():
    utc_time = datetime.datetime.utcnow()
    tz = pytz.timezone('Asia/Shanghai')
    shanghai_time = utc_time.replace(tzinfo=pytz.utc).astimezone(tz)
    return shanghai_time


def format_datestr_with_zone(datetime_str: str):
    """
    格式化带时区时间字符串，返回datetime类型时间
    :param datetime_str: 2022-06-14T15:16:31+00:00
    :return: datetime
    """
    format_ = '%Y-%m-%d %H:%M:%S'
    if '.' in datetime_str:
        format_ = format_ + '.%f'
    zone_ = re.search(r'[+-]\d{2}:\d{2}', datetime_str)
    if zone_:
        format_ = format_ + '%z'
    if 'T' in datetime_str:
        format_ = format_.replace(' ', 'T')
    return datetime.datetime.strptime(datetime_str, format_)