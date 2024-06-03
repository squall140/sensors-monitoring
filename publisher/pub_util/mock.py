import random
import datetime, time, pytz

def mock_sensor_data():
    """
    mock sensor data (0 ~ 150)
    :return: a sensor array
    """
    sensors = []
    for _ in range(2000):
        equipmentId = str("EQ-" +  str(random.randint(10001, 12000)))
        timestamp = str(time_generator())
        value =  round(random.uniform(0, 150), 2)
        sensors.append({'equipmentId': equipmentId, 'timestamp': timestamp, 'value': value})

    return sensors


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

