from dateutil.parser import isoparse
from util.time_util import time_generator

def test_time_generator():
    """
    the time_generator should generate a specific time string with time zone
    format: '2024-06-02T15:38:41+0800'
     """
    # time_string = '2024-06-02T15:38:41+0800'
    time_string = time_generator()
    bool_isValid = isoparse(time_string)
    print("new time string: {}".format(time_string))




