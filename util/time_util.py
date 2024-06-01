import re, datetime, pytz
import time


def time_generator(beforeHours = 0):
    """
    This generator can help us to generate a specific time(with time zone).
    Also, when we need a specific time(with time zone) before several hours, we can use it with a param.
    :param beforeHours: hours(number)
    :return: format datetime ('%Y-%m-%dT%H:%M:%S%z')
    """
    tz = pytz.timezone('Asia/Shanghai')
    # 生成当前时间的datetime对象
    now1 = datetime.datetime.now(tz)

    if not beforeHours == 0:
        hours = int(beforeHours)
        t = time.time() - hours * 60 * 60
        t = time.strftime('%Y-%m-%dT%H:%M:%S%z', time.localtime(t))
        return t
    else:
        # 打印带时区的日期
        return now1.strftime('%Y-%m-%dT%H:%M:%S%z')


def format_datestr_with_zone(datetime_str: str):
    """
    Datetime format converter(with time zone)
    :param datetime_str: 2022-06-14T15:16:31+00:00
    :return: datetime without time zone
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
