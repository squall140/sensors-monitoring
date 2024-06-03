/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 3323.0, "series": [{"data": [[0.0, 15.0], [0.1, 33.0], [0.2, 38.0], [0.3, 44.0], [0.4, 49.0], [0.5, 54.0], [0.6, 58.0], [0.7, 62.0], [0.8, 68.0], [0.9, 72.0], [1.0, 76.0], [1.1, 83.0], [1.2, 87.0], [1.3, 92.0], [1.4, 97.0], [1.5, 102.0], [1.6, 106.0], [1.7, 113.0], [1.8, 117.0], [1.9, 122.0], [2.0, 128.0], [2.1, 133.0], [2.2, 138.0], [2.3, 144.0], [2.4, 149.0], [2.5, 153.0], [2.6, 158.0], [2.7, 162.0], [2.8, 164.0], [2.9, 166.0], [3.0, 167.0], [3.1, 168.0], [3.2, 168.0], [3.3, 169.0], [3.4, 169.0], [3.5, 170.0], [3.6, 170.0], [3.7, 170.0], [3.8, 171.0], [3.9, 171.0], [4.0, 171.0], [4.1, 172.0], [4.2, 172.0], [4.3, 172.0], [4.4, 172.0], [4.5, 173.0], [4.6, 173.0], [4.7, 173.0], [4.8, 173.0], [4.9, 173.0], [5.0, 173.0], [5.1, 174.0], [5.2, 174.0], [5.3, 174.0], [5.4, 174.0], [5.5, 174.0], [5.6, 174.0], [5.7, 175.0], [5.8, 175.0], [5.9, 175.0], [6.0, 175.0], [6.1, 175.0], [6.2, 175.0], [6.3, 175.0], [6.4, 175.0], [6.5, 175.0], [6.6, 176.0], [6.7, 176.0], [6.8, 176.0], [6.9, 176.0], [7.0, 176.0], [7.1, 176.0], [7.2, 176.0], [7.3, 176.0], [7.4, 176.0], [7.5, 176.0], [7.6, 177.0], [7.7, 177.0], [7.8, 177.0], [7.9, 177.0], [8.0, 177.0], [8.1, 177.0], [8.2, 177.0], [8.3, 177.0], [8.4, 177.0], [8.5, 177.0], [8.6, 177.0], [8.7, 177.0], [8.8, 178.0], [8.9, 178.0], [9.0, 178.0], [9.1, 178.0], [9.2, 178.0], [9.3, 178.0], [9.4, 178.0], [9.5, 178.0], [9.6, 178.0], [9.7, 178.0], [9.8, 178.0], [9.9, 178.0], [10.0, 178.0], [10.1, 178.0], [10.2, 179.0], [10.3, 179.0], [10.4, 179.0], [10.5, 179.0], [10.6, 179.0], [10.7, 179.0], [10.8, 179.0], [10.9, 179.0], [11.0, 179.0], [11.1, 179.0], [11.2, 179.0], [11.3, 179.0], [11.4, 179.0], [11.5, 179.0], [11.6, 179.0], [11.7, 179.0], [11.8, 180.0], [11.9, 180.0], [12.0, 180.0], [12.1, 180.0], [12.2, 180.0], [12.3, 180.0], [12.4, 180.0], [12.5, 180.0], [12.6, 180.0], [12.7, 180.0], [12.8, 180.0], [12.9, 180.0], [13.0, 180.0], [13.1, 180.0], [13.2, 180.0], [13.3, 180.0], [13.4, 180.0], [13.5, 180.0], [13.6, 181.0], [13.7, 181.0], [13.8, 181.0], [13.9, 181.0], [14.0, 181.0], [14.1, 181.0], [14.2, 181.0], [14.3, 181.0], [14.4, 181.0], [14.5, 181.0], [14.6, 181.0], [14.7, 181.0], [14.8, 181.0], [14.9, 181.0], [15.0, 181.0], [15.1, 181.0], [15.2, 181.0], [15.3, 181.0], [15.4, 181.0], [15.5, 181.0], [15.6, 182.0], [15.7, 182.0], [15.8, 182.0], [15.9, 182.0], [16.0, 182.0], [16.1, 182.0], [16.2, 182.0], [16.3, 182.0], [16.4, 182.0], [16.5, 182.0], [16.6, 182.0], [16.7, 182.0], [16.8, 182.0], [16.9, 182.0], [17.0, 182.0], [17.1, 182.0], [17.2, 182.0], [17.3, 182.0], [17.4, 182.0], [17.5, 182.0], [17.6, 182.0], [17.7, 182.0], [17.8, 183.0], [17.9, 183.0], [18.0, 183.0], [18.1, 183.0], [18.2, 183.0], [18.3, 183.0], [18.4, 183.0], [18.5, 183.0], [18.6, 183.0], [18.7, 183.0], [18.8, 183.0], [18.9, 183.0], [19.0, 183.0], [19.1, 183.0], [19.2, 183.0], [19.3, 183.0], [19.4, 183.0], [19.5, 183.0], [19.6, 183.0], [19.7, 183.0], [19.8, 183.0], [19.9, 183.0], [20.0, 183.0], [20.1, 184.0], [20.2, 184.0], [20.3, 184.0], [20.4, 184.0], [20.5, 184.0], [20.6, 184.0], [20.7, 184.0], [20.8, 184.0], [20.9, 184.0], [21.0, 184.0], [21.1, 184.0], [21.2, 184.0], [21.3, 184.0], [21.4, 184.0], [21.5, 184.0], [21.6, 184.0], [21.7, 184.0], [21.8, 184.0], [21.9, 184.0], [22.0, 184.0], [22.1, 184.0], [22.2, 184.0], [22.3, 184.0], [22.4, 184.0], [22.5, 184.0], [22.6, 185.0], [22.7, 185.0], [22.8, 185.0], [22.9, 185.0], [23.0, 185.0], [23.1, 185.0], [23.2, 185.0], [23.3, 185.0], [23.4, 185.0], [23.5, 185.0], [23.6, 185.0], [23.7, 185.0], [23.8, 185.0], [23.9, 185.0], [24.0, 185.0], [24.1, 185.0], [24.2, 185.0], [24.3, 185.0], [24.4, 185.0], [24.5, 185.0], [24.6, 185.0], [24.7, 185.0], [24.8, 185.0], [24.9, 185.0], [25.0, 186.0], [25.1, 186.0], [25.2, 186.0], [25.3, 186.0], [25.4, 186.0], [25.5, 186.0], [25.6, 186.0], [25.7, 186.0], [25.8, 186.0], [25.9, 186.0], [26.0, 186.0], [26.1, 186.0], [26.2, 186.0], [26.3, 186.0], [26.4, 186.0], [26.5, 186.0], [26.6, 186.0], [26.7, 186.0], [26.8, 186.0], [26.9, 186.0], [27.0, 186.0], [27.1, 186.0], [27.2, 186.0], [27.3, 186.0], [27.4, 186.0], [27.5, 187.0], [27.6, 187.0], [27.7, 187.0], [27.8, 187.0], [27.9, 187.0], [28.0, 187.0], [28.1, 187.0], [28.2, 187.0], [28.3, 187.0], [28.4, 187.0], [28.5, 187.0], [28.6, 187.0], [28.7, 187.0], [28.8, 187.0], [28.9, 187.0], [29.0, 187.0], [29.1, 187.0], [29.2, 187.0], [29.3, 187.0], [29.4, 187.0], [29.5, 187.0], [29.6, 187.0], [29.7, 187.0], [29.8, 187.0], [29.9, 188.0], [30.0, 188.0], [30.1, 188.0], [30.2, 188.0], [30.3, 188.0], [30.4, 188.0], [30.5, 188.0], [30.6, 188.0], [30.7, 188.0], [30.8, 188.0], [30.9, 188.0], [31.0, 188.0], [31.1, 188.0], [31.2, 188.0], [31.3, 188.0], [31.4, 188.0], [31.5, 188.0], [31.6, 188.0], [31.7, 188.0], [31.8, 188.0], [31.9, 188.0], [32.0, 188.0], [32.1, 188.0], [32.2, 189.0], [32.3, 189.0], [32.4, 189.0], [32.5, 189.0], [32.6, 189.0], [32.7, 189.0], [32.8, 189.0], [32.9, 189.0], [33.0, 189.0], [33.1, 189.0], [33.2, 189.0], [33.3, 189.0], [33.4, 189.0], [33.5, 189.0], [33.6, 189.0], [33.7, 189.0], [33.8, 189.0], [33.9, 189.0], [34.0, 189.0], [34.1, 189.0], [34.2, 189.0], [34.3, 190.0], [34.4, 190.0], [34.5, 190.0], [34.6, 190.0], [34.7, 190.0], [34.8, 190.0], [34.9, 190.0], [35.0, 190.0], [35.1, 190.0], [35.2, 190.0], [35.3, 190.0], [35.4, 190.0], [35.5, 190.0], [35.6, 190.0], [35.7, 190.0], [35.8, 190.0], [35.9, 190.0], [36.0, 190.0], [36.1, 190.0], [36.2, 190.0], [36.3, 191.0], [36.4, 191.0], [36.5, 191.0], [36.6, 191.0], [36.7, 191.0], [36.8, 191.0], [36.9, 191.0], [37.0, 191.0], [37.1, 191.0], [37.2, 191.0], [37.3, 191.0], [37.4, 191.0], [37.5, 191.0], [37.6, 191.0], [37.7, 191.0], [37.8, 191.0], [37.9, 191.0], [38.0, 191.0], [38.1, 191.0], [38.2, 192.0], [38.3, 192.0], [38.4, 192.0], [38.5, 192.0], [38.6, 192.0], [38.7, 192.0], [38.8, 192.0], [38.9, 192.0], [39.0, 192.0], [39.1, 192.0], [39.2, 192.0], [39.3, 192.0], [39.4, 192.0], [39.5, 192.0], [39.6, 192.0], [39.7, 192.0], [39.8, 192.0], [39.9, 193.0], [40.0, 193.0], [40.1, 193.0], [40.2, 193.0], [40.3, 193.0], [40.4, 193.0], [40.5, 193.0], [40.6, 193.0], [40.7, 193.0], [40.8, 193.0], [40.9, 193.0], [41.0, 193.0], [41.1, 193.0], [41.2, 193.0], [41.3, 193.0], [41.4, 193.0], [41.5, 194.0], [41.6, 194.0], [41.7, 194.0], [41.8, 194.0], [41.9, 194.0], [42.0, 194.0], [42.1, 194.0], [42.2, 194.0], [42.3, 194.0], [42.4, 194.0], [42.5, 194.0], [42.6, 194.0], [42.7, 194.0], [42.8, 195.0], [42.9, 195.0], [43.0, 195.0], [43.1, 195.0], [43.2, 195.0], [43.3, 195.0], [43.4, 195.0], [43.5, 195.0], [43.6, 195.0], [43.7, 195.0], [43.8, 195.0], [43.9, 195.0], [44.0, 195.0], [44.1, 196.0], [44.2, 196.0], [44.3, 196.0], [44.4, 196.0], [44.5, 196.0], [44.6, 196.0], [44.7, 196.0], [44.8, 196.0], [44.9, 196.0], [45.0, 196.0], [45.1, 196.0], [45.2, 197.0], [45.3, 197.0], [45.4, 197.0], [45.5, 197.0], [45.6, 197.0], [45.7, 197.0], [45.8, 197.0], [45.9, 197.0], [46.0, 197.0], [46.1, 197.0], [46.2, 198.0], [46.3, 198.0], [46.4, 198.0], [46.5, 198.0], [46.6, 198.0], [46.7, 198.0], [46.8, 198.0], [46.9, 198.0], [47.0, 198.0], [47.1, 198.0], [47.2, 199.0], [47.3, 199.0], [47.4, 199.0], [47.5, 199.0], [47.6, 199.0], [47.7, 199.0], [47.8, 199.0], [47.9, 199.0], [48.0, 199.0], [48.1, 200.0], [48.2, 200.0], [48.3, 200.0], [48.4, 200.0], [48.5, 200.0], [48.6, 200.0], [48.7, 200.0], [48.8, 200.0], [48.9, 200.0], [49.0, 201.0], [49.1, 201.0], [49.2, 201.0], [49.3, 201.0], [49.4, 201.0], [49.5, 201.0], [49.6, 201.0], [49.7, 201.0], [49.8, 202.0], [49.9, 202.0], [50.0, 202.0], [50.1, 202.0], [50.2, 202.0], [50.3, 202.0], [50.4, 202.0], [50.5, 202.0], [50.6, 202.0], [50.7, 203.0], [50.8, 203.0], [50.9, 203.0], [51.0, 203.0], [51.1, 203.0], [51.2, 203.0], [51.3, 203.0], [51.4, 203.0], [51.5, 203.0], [51.6, 204.0], [51.7, 204.0], [51.8, 204.0], [51.9, 204.0], [52.0, 204.0], [52.1, 204.0], [52.2, 204.0], [52.3, 204.0], [52.4, 204.0], [52.5, 204.0], [52.6, 205.0], [52.7, 205.0], [52.8, 205.0], [52.9, 205.0], [53.0, 205.0], [53.1, 205.0], [53.2, 205.0], [53.3, 205.0], [53.4, 205.0], [53.5, 205.0], [53.6, 205.0], [53.7, 206.0], [53.8, 206.0], [53.9, 206.0], [54.0, 206.0], [54.1, 206.0], [54.2, 206.0], [54.3, 206.0], [54.4, 206.0], [54.5, 206.0], [54.6, 206.0], [54.7, 206.0], [54.8, 206.0], [54.9, 207.0], [55.0, 207.0], [55.1, 207.0], [55.2, 207.0], [55.3, 207.0], [55.4, 207.0], [55.5, 207.0], [55.6, 207.0], [55.7, 207.0], [55.8, 207.0], [55.9, 207.0], [56.0, 207.0], [56.1, 207.0], [56.2, 207.0], [56.3, 208.0], [56.4, 208.0], [56.5, 208.0], [56.6, 208.0], [56.7, 208.0], [56.8, 208.0], [56.9, 208.0], [57.0, 208.0], [57.1, 208.0], [57.2, 208.0], [57.3, 208.0], [57.4, 208.0], [57.5, 208.0], [57.6, 208.0], [57.7, 208.0], [57.8, 209.0], [57.9, 209.0], [58.0, 209.0], [58.1, 209.0], [58.2, 209.0], [58.3, 209.0], [58.4, 209.0], [58.5, 209.0], [58.6, 209.0], [58.7, 209.0], [58.8, 209.0], [58.9, 209.0], [59.0, 209.0], [59.1, 209.0], [59.2, 209.0], [59.3, 209.0], [59.4, 210.0], [59.5, 210.0], [59.6, 210.0], [59.7, 210.0], [59.8, 210.0], [59.9, 210.0], [60.0, 210.0], [60.1, 210.0], [60.2, 210.0], [60.3, 210.0], [60.4, 210.0], [60.5, 210.0], [60.6, 210.0], [60.7, 210.0], [60.8, 210.0], [60.9, 210.0], [61.0, 210.0], [61.1, 210.0], [61.2, 211.0], [61.3, 211.0], [61.4, 211.0], [61.5, 211.0], [61.6, 211.0], [61.7, 211.0], [61.8, 211.0], [61.9, 211.0], [62.0, 211.0], [62.1, 211.0], [62.2, 211.0], [62.3, 211.0], [62.4, 211.0], [62.5, 211.0], [62.6, 211.0], [62.7, 211.0], [62.8, 211.0], [62.9, 211.0], [63.0, 211.0], [63.1, 212.0], [63.2, 212.0], [63.3, 212.0], [63.4, 212.0], [63.5, 212.0], [63.6, 212.0], [63.7, 212.0], [63.8, 212.0], [63.9, 212.0], [64.0, 212.0], [64.1, 212.0], [64.2, 212.0], [64.3, 212.0], [64.4, 212.0], [64.5, 212.0], [64.6, 212.0], [64.7, 212.0], [64.8, 212.0], [64.9, 212.0], [65.0, 212.0], [65.1, 213.0], [65.2, 213.0], [65.3, 213.0], [65.4, 213.0], [65.5, 213.0], [65.6, 213.0], [65.7, 213.0], [65.8, 213.0], [65.9, 213.0], [66.0, 213.0], [66.1, 213.0], [66.2, 213.0], [66.3, 213.0], [66.4, 213.0], [66.5, 213.0], [66.6, 213.0], [66.7, 213.0], [66.8, 213.0], [66.9, 213.0], [67.0, 213.0], [67.1, 213.0], [67.2, 213.0], [67.3, 214.0], [67.4, 214.0], [67.5, 214.0], [67.6, 214.0], [67.7, 214.0], [67.8, 214.0], [67.9, 214.0], [68.0, 214.0], [68.1, 214.0], [68.2, 214.0], [68.3, 214.0], [68.4, 214.0], [68.5, 214.0], [68.6, 214.0], [68.7, 214.0], [68.8, 214.0], [68.9, 214.0], [69.0, 214.0], [69.1, 214.0], [69.2, 214.0], [69.3, 214.0], [69.4, 214.0], [69.5, 215.0], [69.6, 215.0], [69.7, 215.0], [69.8, 215.0], [69.9, 215.0], [70.0, 215.0], [70.1, 215.0], [70.2, 215.0], [70.3, 215.0], [70.4, 215.0], [70.5, 215.0], [70.6, 215.0], [70.7, 215.0], [70.8, 215.0], [70.9, 215.0], [71.0, 215.0], [71.1, 215.0], [71.2, 215.0], [71.3, 215.0], [71.4, 215.0], [71.5, 215.0], [71.6, 215.0], [71.7, 216.0], [71.8, 216.0], [71.9, 216.0], [72.0, 216.0], [72.1, 216.0], [72.2, 216.0], [72.3, 216.0], [72.4, 216.0], [72.5, 216.0], [72.6, 216.0], [72.7, 216.0], [72.8, 216.0], [72.9, 216.0], [73.0, 216.0], [73.1, 216.0], [73.2, 216.0], [73.3, 216.0], [73.4, 216.0], [73.5, 216.0], [73.6, 216.0], [73.7, 216.0], [73.8, 216.0], [73.9, 217.0], [74.0, 217.0], [74.1, 217.0], [74.2, 217.0], [74.3, 217.0], [74.4, 217.0], [74.5, 217.0], [74.6, 217.0], [74.7, 217.0], [74.8, 217.0], [74.9, 217.0], [75.0, 217.0], [75.1, 217.0], [75.2, 217.0], [75.3, 217.0], [75.4, 217.0], [75.5, 217.0], [75.6, 217.0], [75.7, 217.0], [75.8, 217.0], [75.9, 217.0], [76.0, 218.0], [76.1, 218.0], [76.2, 218.0], [76.3, 218.0], [76.4, 218.0], [76.5, 218.0], [76.6, 218.0], [76.7, 218.0], [76.8, 218.0], [76.9, 218.0], [77.0, 218.0], [77.1, 218.0], [77.2, 218.0], [77.3, 218.0], [77.4, 218.0], [77.5, 218.0], [77.6, 218.0], [77.7, 218.0], [77.8, 218.0], [77.9, 218.0], [78.0, 219.0], [78.1, 219.0], [78.2, 219.0], [78.3, 219.0], [78.4, 219.0], [78.5, 219.0], [78.6, 219.0], [78.7, 219.0], [78.8, 219.0], [78.9, 219.0], [79.0, 219.0], [79.1, 219.0], [79.2, 219.0], [79.3, 219.0], [79.4, 219.0], [79.5, 219.0], [79.6, 219.0], [79.7, 219.0], [79.8, 220.0], [79.9, 220.0], [80.0, 220.0], [80.1, 220.0], [80.2, 220.0], [80.3, 220.0], [80.4, 220.0], [80.5, 220.0], [80.6, 220.0], [80.7, 220.0], [80.8, 220.0], [80.9, 220.0], [81.0, 220.0], [81.1, 220.0], [81.2, 220.0], [81.3, 220.0], [81.4, 220.0], [81.5, 221.0], [81.6, 221.0], [81.7, 221.0], [81.8, 221.0], [81.9, 221.0], [82.0, 221.0], [82.1, 221.0], [82.2, 221.0], [82.3, 221.0], [82.4, 221.0], [82.5, 221.0], [82.6, 221.0], [82.7, 221.0], [82.8, 221.0], [82.9, 221.0], [83.0, 222.0], [83.1, 222.0], [83.2, 222.0], [83.3, 222.0], [83.4, 222.0], [83.5, 222.0], [83.6, 222.0], [83.7, 222.0], [83.8, 222.0], [83.9, 222.0], [84.0, 222.0], [84.1, 222.0], [84.2, 222.0], [84.3, 222.0], [84.4, 223.0], [84.5, 223.0], [84.6, 223.0], [84.7, 223.0], [84.8, 223.0], [84.9, 223.0], [85.0, 223.0], [85.1, 223.0], [85.2, 223.0], [85.3, 223.0], [85.4, 223.0], [85.5, 223.0], [85.6, 223.0], [85.7, 224.0], [85.8, 224.0], [85.9, 224.0], [86.0, 224.0], [86.1, 224.0], [86.2, 224.0], [86.3, 224.0], [86.4, 224.0], [86.5, 224.0], [86.6, 224.0], [86.7, 224.0], [86.8, 224.0], [86.9, 225.0], [87.0, 225.0], [87.1, 225.0], [87.2, 225.0], [87.3, 225.0], [87.4, 225.0], [87.5, 225.0], [87.6, 225.0], [87.7, 225.0], [87.8, 225.0], [87.9, 226.0], [88.0, 226.0], [88.1, 226.0], [88.2, 226.0], [88.3, 226.0], [88.4, 226.0], [88.5, 226.0], [88.6, 226.0], [88.7, 226.0], [88.8, 226.0], [88.9, 227.0], [89.0, 227.0], [89.1, 227.0], [89.2, 227.0], [89.3, 227.0], [89.4, 227.0], [89.5, 227.0], [89.6, 227.0], [89.7, 227.0], [89.8, 228.0], [89.9, 228.0], [90.0, 228.0], [90.1, 228.0], [90.2, 228.0], [90.3, 228.0], [90.4, 228.0], [90.5, 229.0], [90.6, 229.0], [90.7, 229.0], [90.8, 229.0], [90.9, 229.0], [91.0, 229.0], [91.1, 229.0], [91.2, 230.0], [91.3, 230.0], [91.4, 230.0], [91.5, 230.0], [91.6, 230.0], [91.7, 230.0], [91.8, 230.0], [91.9, 231.0], [92.0, 231.0], [92.1, 231.0], [92.2, 231.0], [92.3, 231.0], [92.4, 232.0], [92.5, 232.0], [92.6, 232.0], [92.7, 232.0], [92.8, 232.0], [92.9, 233.0], [93.0, 233.0], [93.1, 233.0], [93.2, 233.0], [93.3, 233.0], [93.4, 234.0], [93.5, 234.0], [93.6, 234.0], [93.7, 234.0], [93.8, 234.0], [93.9, 235.0], [94.0, 235.0], [94.1, 235.0], [94.2, 235.0], [94.3, 236.0], [94.4, 236.0], [94.5, 236.0], [94.6, 237.0], [94.7, 237.0], [94.8, 237.0], [94.9, 237.0], [95.0, 238.0], [95.1, 238.0], [95.2, 238.0], [95.3, 239.0], [95.4, 239.0], [95.5, 240.0], [95.6, 240.0], [95.7, 240.0], [95.8, 241.0], [95.9, 241.0], [96.0, 242.0], [96.1, 242.0], [96.2, 243.0], [96.3, 243.0], [96.4, 244.0], [96.5, 244.0], [96.6, 245.0], [96.7, 245.0], [96.8, 246.0], [96.9, 246.0], [97.0, 247.0], [97.1, 248.0], [97.2, 249.0], [97.3, 249.0], [97.4, 250.0], [97.5, 251.0], [97.6, 252.0], [97.7, 253.0], [97.8, 255.0], [97.9, 256.0], [98.0, 257.0], [98.1, 259.0], [98.2, 260.0], [98.3, 262.0], [98.4, 264.0], [98.5, 267.0], [98.6, 269.0], [98.7, 273.0], [98.8, 276.0], [98.9, 280.0], [99.0, 285.0], [99.1, 291.0], [99.2, 298.0], [99.3, 306.0], [99.4, 317.0], [99.5, 330.0], [99.6, 353.0], [99.7, 408.0], [99.8, 806.0], [99.9, 1538.0]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 2050450.0, "series": [{"data": [[0.0, 57858.0], [600.0, 601.0], [700.0, 613.0], [800.0, 535.0], [900.0, 547.0], [1000.0, 615.0], [1100.0, 680.0], [1200.0, 509.0], [1300.0, 470.0], [1400.0, 480.0], [1500.0, 609.0], [100.0, 1866660.0], [1600.0, 521.0], [1700.0, 477.0], [1800.0, 447.0], [1900.0, 490.0], [2000.0, 445.0], [2100.0, 415.0], [2200.0, 347.0], [2300.0, 213.0], [2400.0, 58.0], [2500.0, 25.0], [2600.0, 19.0], [2700.0, 31.0], [2800.0, 21.0], [2900.0, 18.0], [3000.0, 17.0], [3100.0, 21.0], [200.0, 2050450.0], [3200.0, 21.0], [3300.0, 7.0], [300.0, 18731.0], [400.0, 1930.0], [500.0, 1183.0]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4197.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3995641.0, "series": [{"data": [[0.0, 3995641.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6226.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4197.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 499.74082109479457, "minX": 1.71740424E12, "maxY": 500.0, "series": [{"data": [[1.7174046E12, 500.0], [1.7174043E12, 500.0], [1.7174052E12, 500.0], [1.7174049E12, 500.0], [1.7174058E12, 500.0], [1.7174055E12, 500.0], [1.71740448E12, 500.0], [1.71740574E12, 500.0], [1.71740472E12, 500.0], [1.71740442E12, 500.0], [1.71740532E12, 500.0], [1.71740502E12, 500.0], [1.71740562E12, 500.0], [1.71740556E12, 500.0], [1.71740526E12, 500.0], [1.71740424E12, 499.74082109479457], [1.71740586E12, 500.0], [1.71740484E12, 500.0], [1.71740454E12, 500.0], [1.71740544E12, 500.0], [1.71740514E12, 500.0], [1.71740508E12, 500.0], [1.71740478E12, 500.0], [1.71740568E12, 500.0], [1.71740538E12, 500.0], [1.71740436E12, 500.0], [1.71740496E12, 500.0], [1.71740466E12, 500.0]], "isOverall": false, "label": " Concurrent request without delay", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740586E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 15.0, "minX": 312.0, "maxY": 204.0785603575097, "series": [{"data": [[313.0, 41.09090909090909], [312.0, 34.0], [314.0, 37.0], [315.0, 42.333333333333336], [317.0, 44.5], [319.0, 51.0], [320.0, 52.0], [335.0, 67.0], [340.0, 91.5], [341.0, 62.25], [342.0, 45.476190476190474], [343.0, 58.5], [345.0, 94.25], [346.0, 114.0], [347.0, 100.5], [357.0, 59.61764705882352], [360.0, 72.0], [362.0, 49.285714285714285], [363.0, 51.5], [364.0, 74.0], [365.0, 92.0], [368.0, 15.0], [369.0, 15.0], [392.0, 45.888888888888886], [437.0, 149.0], [486.0, 43.0], [500.0, 204.0785603575097]], "isOverall": false, "label": "api/sensor/add", "isController": false}, {"data": [[499.9953480523541, 204.0739424033154]], "isOverall": false, "label": "api/sensor/add-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 208521.6, "minX": 1.71740424E12, "maxY": 857069.6333333333, "series": [{"data": [[1.7174046E12, 442522.6], [1.7174043E12, 439776.3], [1.7174052E12, 434747.7], [1.7174049E12, 438555.4], [1.7174058E12, 429600.2], [1.7174055E12, 421677.4], [1.71740448E12, 422295.1], [1.71740574E12, 422274.8], [1.71740472E12, 438964.3], [1.71740442E12, 429925.0], [1.71740532E12, 421413.5], [1.71740502E12, 393086.3], [1.71740562E12, 420096.9], [1.71740556E12, 420969.8], [1.71740526E12, 424417.9], [1.71740424E12, 208521.6], [1.71740586E12, 331490.3], [1.71740484E12, 442012.2], [1.71740454E12, 436145.5], [1.71740544E12, 425142.9], [1.71740514E12, 393672.1], [1.71740508E12, 410573.3], [1.71740478E12, 440655.0], [1.71740568E12, 419516.9], [1.71740538E12, 426349.3], [1.71740436E12, 407197.7], [1.71740496E12, 434167.7], [1.71740466E12, 441817.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7174046E12, 857069.6333333333], [1.7174043E12, 851750.65], [1.7174052E12, 842011.35], [1.7174049E12, 849386.0333333333], [1.7174058E12, 832041.7666666667], [1.7174055E12, 816697.0333333333], [1.71740448E12, 817893.3833333333], [1.71740574E12, 817854.0666666667], [1.71740472E12, 850177.9833333333], [1.71740442E12, 832670.8333333334], [1.71740532E12, 816185.9166666666], [1.71740502E12, 761322.3166666667], [1.71740562E12, 813635.95], [1.71740556E12, 815326.5666666667], [1.71740526E12, 822004.7833333333], [1.71740424E12, 403860.8], [1.71740586E12, 642024.3166666667], [1.71740484E12, 856081.1], [1.71740454E12, 844718.5833333334], [1.71740544E12, 823408.95], [1.71740514E12, 762456.8833333333], [1.71740508E12, 795190.8166666667], [1.71740478E12, 853452.5], [1.71740568E12, 812512.6166666667], [1.71740538E12, 825745.4833333333], [1.71740436E12, 788653.0166666667], [1.71740496E12, 840888.0166666667], [1.71740466E12, 855704.7833333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740586E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 196.67500032766696, "minX": 1.71740424E12, "maxY": 221.35488797243855, "series": [{"data": [[1.7174046E12, 196.67500032766696], [1.7174043E12, 197.78667563485925], [1.7174052E12, 200.08977873833518], [1.7174049E12, 198.33683361326692], [1.7174058E12, 202.54271692611422], [1.7174055E12, 206.2967277828956], [1.71740448E12, 206.01264944821608], [1.71740574E12, 205.97036645331843], [1.71740472E12, 198.13070880706954], [1.71740442E12, 202.30365598650886], [1.71740532E12, 206.44662973540267], [1.71740502E12, 221.35488797243855], [1.71740562E12, 207.0523191197079], [1.71740556E12, 206.5330871715769], [1.71740526E12, 204.89220435801613], [1.71740424E12, 199.75260068981055], [1.71740586E12, 204.17911413999101], [1.71740484E12, 196.79457806820787], [1.71740454E12, 199.3472455866234], [1.71740544E12, 204.5135435638204], [1.71740514E12, 220.95482839652723], [1.71740508E12, 211.86812123438088], [1.71740478E12, 197.45450477130717], [1.71740568E12, 207.37540180145317], [1.71740538E12, 204.03394165300406], [1.71740436E12, 213.53976483658874], [1.71740496E12, 200.2391642676292], [1.71740466E12, 196.84020452770227]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740586E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 196.67483649422394, "minX": 1.71740424E12, "maxY": 221.3546814020234, "series": [{"data": [[1.7174046E12, 196.67483649422394], [1.7174043E12, 197.78656353241388], [1.7174052E12, 200.0896253160151], [1.7174049E12, 198.3366749103983], [1.7174058E12, 202.54260216824798], [1.7174055E12, 206.29654209592465], [1.71740448E12, 206.01251210350262], [1.71740574E12, 205.97026343982418], [1.71740472E12, 198.130636136015], [1.71740442E12, 202.30344013490637], [1.71740532E12, 206.44645769535202], [1.71740502E12, 221.3546814020234], [1.71740562E12, 207.05215344364413], [1.71740556E12, 206.5329907275989], [1.71740526E12, 204.89204720159088], [1.71740424E12, 199.75009735202684], [1.71740586E12, 204.17896541768994], [1.71740484E12, 196.79448621554232], [1.71740454E12, 199.34711925263494], [1.71740544E12, 204.51335256921803], [1.71740514E12, 220.95472526501257], [1.71740508E12, 211.86795171532253], [1.71740478E12, 197.45443237907236], [1.71740568E12, 207.37524972176217], [1.71740538E12, 204.03381921818482], [1.71740436E12, 213.53957966855003], [1.71740496E12, 200.23901731980516], [1.71740466E12, 196.8400404329511]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740586E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0030124304502614787, "minX": 1.71740424E12, "maxY": 0.20249221183800442, "series": [{"data": [[1.7174046E12, 0.003689529077159022], [1.7174043E12, 0.004820405283322432], [1.7174052E12, 0.004369200803132542], [1.7174049E12, 0.003312922381071978], [1.7174058E12, 0.005137101891479577], [1.7174055E12, 0.004229536607842922], [1.71740448E12, 0.004484304932735428], [1.71740574E12, 0.004003790896354679], [1.71740472E12, 0.003805320842720036], [1.71740442E12, 0.0038448566610456035], [1.71740532E12, 0.0030554313044076306], [1.71740502E12, 0.0033862792979556413], [1.71740562E12, 0.0030788134832701987], [1.71740556E12, 0.003919758614513495], [1.71740526E12, 0.005411647340981704], [1.71740424E12, 0.20249221183800442], [1.71740586E12, 0.004487914125994024], [1.71740484E12, 0.0034904013961605984], [1.71740454E12, 0.004308653878120992], [1.71740544E12, 0.0031309472650254], [1.71740514E12, 0.0048250815843948035], [1.71740508E12, 0.004146153683154782], [1.71740478E12, 0.0031457716354063967], [1.71740568E12, 0.0031176336400273626], [1.71740538E12, 0.003387363366141347], [1.71740436E12, 0.004002478402997011], [1.71740496E12, 0.0030124304502614787], [1.71740466E12, 0.003971093067981136]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740586E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 15.0, "minX": 1.71740424E12, "maxY": 3323.0, "series": [{"data": [[1.7174046E12, 2121.0], [1.7174043E12, 2406.0], [1.7174052E12, 2128.0], [1.7174049E12, 2387.0], [1.7174058E12, 2261.0], [1.7174055E12, 2093.0], [1.71740448E12, 2399.0], [1.71740574E12, 2265.0], [1.71740472E12, 2291.0], [1.71740442E12, 2371.0], [1.71740532E12, 1101.0], [1.71740502E12, 3323.0], [1.71740562E12, 2121.0], [1.71740556E12, 2292.0], [1.71740526E12, 2329.0], [1.71740424E12, 2139.0], [1.71740586E12, 2437.0], [1.71740484E12, 2240.0], [1.71740454E12, 2366.0], [1.71740544E12, 1620.0], [1.71740514E12, 2365.0], [1.71740508E12, 2447.0], [1.71740478E12, 1205.0], [1.71740568E12, 2226.0], [1.71740538E12, 2192.0], [1.71740436E12, 2519.0], [1.71740496E12, 2382.0], [1.71740466E12, 1928.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7174046E12, 29.0], [1.7174043E12, 23.0], [1.7174052E12, 39.0], [1.7174049E12, 24.0], [1.7174058E12, 27.0], [1.7174055E12, 25.0], [1.71740448E12, 22.0], [1.71740574E12, 23.0], [1.71740472E12, 26.0], [1.71740442E12, 25.0], [1.71740532E12, 29.0], [1.71740502E12, 30.0], [1.71740562E12, 27.0], [1.71740556E12, 25.0], [1.71740526E12, 29.0], [1.71740424E12, 15.0], [1.71740586E12, 32.0], [1.71740484E12, 23.0], [1.71740454E12, 27.0], [1.71740544E12, 28.0], [1.71740514E12, 33.0], [1.71740508E12, 25.0], [1.71740478E12, 25.0], [1.71740568E12, 28.0], [1.71740538E12, 28.0], [1.71740436E12, 22.0], [1.71740496E12, 26.0], [1.71740466E12, 50.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7174046E12, 217.0], [1.7174043E12, 218.0], [1.7174052E12, 224.0], [1.7174049E12, 217.0], [1.7174058E12, 226.0], [1.7174055E12, 234.0], [1.71740448E12, 219.0], [1.71740574E12, 226.0], [1.71740472E12, 216.0], [1.71740442E12, 241.0], [1.71740532E12, 223.0], [1.71740502E12, 236.0], [1.71740562E12, 233.0], [1.71740556E12, 234.0], [1.71740526E12, 230.0], [1.71740424E12, 224.0], [1.71740586E12, 226.0], [1.71740484E12, 218.0], [1.71740454E12, 218.0], [1.71740544E12, 227.0], [1.71740514E12, 230.0], [1.71740508E12, 270.0], [1.71740478E12, 226.0], [1.71740568E12, 237.0], [1.71740538E12, 222.0], [1.71740436E12, 243.0], [1.71740496E12, 228.0], [1.71740466E12, 219.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7174046E12, 226.0], [1.7174043E12, 229.0], [1.7174052E12, 235.0], [1.7174049E12, 224.0], [1.7174058E12, 244.0], [1.7174055E12, 267.0], [1.71740448E12, 229.0], [1.71740574E12, 256.0], [1.71740472E12, 225.0], [1.71740442E12, 254.0], [1.71740532E12, 266.0], [1.71740502E12, 313.0], [1.71740562E12, 254.0], [1.71740556E12, 269.0], [1.71740526E12, 330.0], [1.71740424E12, 244.0], [1.71740586E12, 265.0], [1.71740484E12, 226.0], [1.71740454E12, 227.0], [1.71740544E12, 247.0], [1.71740514E12, 296.0], [1.71740508E12, 361.0], [1.71740478E12, 280.0], [1.71740568E12, 255.0], [1.71740538E12, 232.0], [1.71740436E12, 297.9900000000016], [1.71740496E12, 242.0], [1.71740466E12, 226.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7174046E12, 193.0], [1.7174043E12, 194.0], [1.7174052E12, 199.0], [1.7174049E12, 195.0], [1.7174058E12, 200.0], [1.7174055E12, 208.0], [1.71740448E12, 197.0], [1.71740574E12, 205.0], [1.71740472E12, 193.0], [1.71740442E12, 208.0], [1.71740532E12, 205.0], [1.71740502E12, 200.0], [1.71740562E12, 209.0], [1.71740556E12, 207.0], [1.71740526E12, 206.0], [1.71740424E12, 198.0], [1.71740586E12, 207.0], [1.71740484E12, 196.0], [1.71740454E12, 196.0], [1.71740544E12, 203.0], [1.71740514E12, 204.0], [1.71740508E12, 220.0], [1.71740478E12, 203.0], [1.71740568E12, 206.0], [1.71740538E12, 197.0], [1.71740436E12, 209.0], [1.71740496E12, 202.0], [1.71740466E12, 199.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7174046E12, 219.0], [1.7174043E12, 222.0], [1.7174052E12, 228.0], [1.7174049E12, 219.0], [1.7174058E12, 233.0], [1.7174055E12, 243.0], [1.71740448E12, 223.0], [1.71740574E12, 232.0], [1.71740472E12, 220.0], [1.71740442E12, 246.0], [1.71740532E12, 232.0], [1.71740502E12, 268.0], [1.71740562E12, 239.0], [1.71740556E12, 242.0], [1.71740526E12, 258.0], [1.71740424E12, 231.0], [1.71740586E12, 230.0], [1.71740484E12, 221.0], [1.71740454E12, 221.0], [1.71740544E12, 232.0], [1.71740514E12, 245.0], [1.71740508E12, 306.0], [1.71740478E12, 247.0], [1.71740568E12, 243.0], [1.71740538E12, 225.0], [1.71740436E12, 250.0], [1.71740496E12, 233.0], [1.71740466E12, 221.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740586E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 49.0, "minX": 706.0, "maxY": 320.0, "series": [{"data": [[706.0, 210.0], [1478.0, 256.0], [1585.0, 320.0], [1572.0, 289.0], [1690.0, 281.0], [1718.0, 248.0], [1694.0, 208.0], [1752.0, 284.5], [1791.0, 217.0], [1793.0, 49.0], [1847.0, 280.0], [1800.0, 265.0], [1792.0, 285.0], [1798.0, 278.0], [1810.0, 281.0], [1905.0, 279.0], [1864.0, 256.0], [1860.0, 263.0], [1870.0, 300.0], [1920.0, 146.0], [1932.0, 269.5], [1980.0, 243.0], [1950.0, 236.0], [1986.0, 224.0], [2034.0, 249.0], [2003.0, 239.0], [2162.0, 217.0], [2160.0, 225.0], [2154.0, 225.0], [2094.0, 234.0], [2088.0, 215.0], [2100.0, 228.0], [2144.0, 222.0], [2166.0, 207.0], [2118.0, 211.0], [2168.0, 226.0], [2132.0, 228.0], [2124.0, 191.0], [2202.0, 226.0], [2186.0, 222.0], [2196.0, 228.0], [2200.0, 226.0], [2276.0, 207.0], [2274.0, 216.0], [2272.0, 214.0], [2280.0, 202.0], [2278.0, 214.0], [2290.0, 228.0], [2292.0, 211.0], [2286.0, 217.0], [2232.0, 223.0], [2230.0, 217.0], [2224.0, 197.0], [2218.0, 224.5], [2220.0, 227.0], [2212.0, 219.0], [2214.0, 216.0], [2236.0, 214.0], [2234.0, 177.0], [2176.0, 218.0], [2238.0, 227.0], [2296.0, 221.0], [2240.0, 217.0], [2246.0, 220.0], [2252.0, 212.0], [2268.0, 215.0], [2262.0, 208.0], [2270.0, 214.0], [2260.0, 212.0], [2302.0, 214.0], [2300.0, 203.0], [2424.0, 201.0], [2306.0, 215.0], [2366.0, 204.0], [2362.0, 194.0], [2364.0, 201.0], [2360.0, 206.0], [2358.0, 209.0], [2356.0, 210.0], [2354.0, 199.0], [2324.0, 212.0], [2320.0, 211.0], [2316.0, 210.0], [2314.0, 206.0], [2312.0, 164.0], [2308.0, 156.0], [2420.0, 198.0], [2418.0, 198.0], [2414.0, 206.0], [2416.0, 201.0], [2368.0, 214.0], [2430.0, 208.0], [2426.0, 196.0], [2422.0, 201.0], [2428.0, 203.0], [2408.0, 206.0], [2406.0, 161.0], [2410.0, 200.0], [2412.0, 206.0], [2372.0, 207.0], [2370.0, 202.0], [2394.0, 213.0], [2398.0, 206.0], [2396.0, 213.0], [2392.0, 207.0], [2380.0, 210.0], [2384.0, 210.0], [2386.0, 206.0], [2390.0, 209.0], [2388.0, 206.0], [2382.0, 208.0], [2374.0, 212.0], [2378.0, 199.0], [2376.0, 206.0], [2348.0, 204.0], [2344.0, 214.0], [2346.0, 206.0], [2338.0, 212.5], [2342.0, 198.0], [2340.0, 213.0], [2336.0, 213.0], [2350.0, 219.0], [2352.0, 218.0], [2332.0, 214.0], [2334.0, 212.0], [2400.0, 205.0], [2404.0, 208.0], [2402.0, 200.0], [2326.0, 208.0], [2328.0, 204.0], [2330.0, 211.0], [2530.0, 193.0], [2462.0, 196.0], [2482.0, 202.0], [2484.0, 196.0], [2476.0, 207.0], [2474.0, 199.0], [2478.0, 202.0], [2480.0, 203.0], [2466.0, 200.0], [2464.0, 200.0], [2470.0, 205.0], [2468.0, 199.0], [2472.0, 203.0], [2526.0, 192.0], [2524.0, 199.0], [2532.0, 195.0], [2536.0, 201.0], [2534.0, 198.0], [2540.0, 196.0], [2538.0, 196.0], [2542.0, 199.0], [2544.0, 191.0], [2438.0, 194.0], [2440.0, 203.0], [2432.0, 201.0], [2436.0, 203.0], [2434.0, 208.0], [2442.0, 201.0], [2460.0, 200.0], [2458.0, 197.0], [2452.0, 200.0], [2454.0, 198.0], [2450.0, 206.0], [2444.0, 203.0], [2446.0, 197.0], [2448.0, 192.0], [2456.0, 205.0], [2528.0, 195.0], [2556.0, 190.0], [2558.0, 197.0], [2496.0, 196.0], [2552.0, 200.0], [2554.0, 195.0], [2550.0, 202.0], [2546.0, 181.0], [2548.0, 203.0], [2494.0, 197.0], [2492.0, 201.0], [2490.0, 194.0], [2486.0, 192.0], [2488.0, 196.0], [2498.0, 201.0], [2500.0, 192.0], [2508.0, 195.0], [2506.0, 205.0], [2520.0, 197.0], [2522.0, 193.0], [2512.0, 198.0], [2514.0, 191.0], [2510.0, 197.0], [2518.0, 200.0], [2516.0, 196.0], [2504.0, 196.0], [2502.0, 200.0], [2574.0, 196.0], [2568.0, 187.0], [2566.0, 205.0], [2596.0, 192.0], [2598.0, 201.0], [2594.0, 201.0], [2592.0, 196.0], [2584.0, 197.0], [2590.0, 189.0], [2586.0, 191.0], [2588.0, 182.0], [2564.0, 201.0], [2562.0, 192.0], [2560.0, 188.0], [2622.0, 60.0], [2618.0, 185.0], [2570.0, 191.0], [2572.0, 193.0], [2576.0, 187.0], [2578.0, 193.0], [2624.0, 196.0], [2658.0, 200.0], [2670.0, 82.0], [2628.0, 199.0], [2652.0, 184.0], [2648.0, 187.0], [2632.0, 185.0], [2630.0, 198.0], [2580.0, 183.0], [2602.0, 189.0], [2600.0, 196.0], [2604.0, 198.0], [2612.0, 178.0], [2608.0, 189.0], [2610.0, 191.0], [2606.0, 189.0], [2690.0, 76.5], [2700.0, 71.0], [2694.0, 171.0], [2698.0, 181.0], [2157.0, 223.0], [2095.0, 233.0], [2119.0, 211.0], [2149.0, 217.0], [2151.0, 225.0], [2067.0, 241.0], [2147.0, 215.0], [2145.0, 227.0], [2069.0, 239.0], [2103.0, 219.0], [2141.0, 232.0], [2165.0, 220.0], [2159.0, 200.0], [2175.0, 227.0], [2133.0, 186.0], [2123.0, 233.0], [2121.0, 236.0], [2201.0, 209.0], [2183.0, 209.0], [2199.0, 223.0], [2187.0, 203.0], [2285.0, 211.0], [2281.0, 208.0], [2279.0, 214.0], [2207.0, 224.0], [2273.0, 210.0], [2283.0, 212.0], [2291.0, 201.0], [2287.0, 221.0], [2233.0, 213.0], [2231.0, 214.0], [2227.0, 230.0], [2219.0, 221.0], [2217.0, 215.0], [2237.0, 221.0], [2247.0, 214.0], [2243.0, 214.0], [2297.0, 211.0], [2255.0, 216.0], [2251.0, 216.0], [2267.0, 199.0], [2259.0, 207.0], [2265.0, 214.0], [2403.0, 200.0], [2367.0, 211.0], [2305.0, 211.0], [2363.0, 211.0], [2365.0, 209.0], [2361.0, 205.0], [2359.0, 201.0], [2357.0, 216.0], [2355.0, 216.0], [2351.0, 216.0], [2349.0, 207.0], [2311.0, 215.0], [2313.0, 218.0], [2321.0, 214.0], [2315.0, 210.0], [2325.0, 216.0], [2309.0, 222.0], [2307.0, 218.0], [2421.0, 203.0], [2423.0, 191.0], [2419.0, 208.0], [2417.0, 209.0], [2415.0, 205.0], [2431.0, 205.0], [2429.0, 207.0], [2425.0, 208.0], [2427.0, 196.0], [2411.0, 201.0], [2413.0, 207.0], [2405.0, 211.0], [2407.0, 205.0], [2409.0, 198.0], [2369.0, 203.0], [2371.0, 212.0], [2395.0, 206.0], [2397.0, 202.0], [2399.0, 212.0], [2381.0, 200.0], [2387.0, 207.0], [2389.0, 201.0], [2385.0, 208.0], [2383.0, 208.0], [2391.0, 201.0], [2393.0, 210.0], [2379.0, 207.0], [2375.0, 207.0], [2377.0, 214.0], [2373.0, 207.0], [2347.0, 199.0], [2343.0, 207.0], [2341.0, 208.0], [2337.0, 197.0], [2339.0, 214.0], [2401.0, 202.0], [2335.0, 208.0], [2333.0, 207.0], [2327.0, 209.0], [2329.0, 217.0], [2331.0, 207.0], [2439.0, 205.0], [2545.0, 197.0], [2495.0, 196.0], [2473.0, 198.0], [2483.0, 204.0], [2481.0, 209.0], [2475.0, 193.0], [2477.0, 202.0], [2479.0, 201.0], [2465.0, 203.0], [2467.0, 193.0], [2469.0, 201.0], [2471.0, 195.0], [2497.0, 195.0], [2485.0, 199.0], [2527.0, 202.0], [2525.0, 198.0], [2531.0, 196.0], [2529.0, 194.0], [2537.0, 196.0], [2535.0, 205.0], [2539.0, 200.0], [2543.0, 193.0], [2541.0, 201.0], [2533.0, 192.0], [2433.0, 203.0], [2437.0, 206.0], [2435.0, 196.0], [2461.0, 201.0], [2457.0, 203.0], [2455.0, 201.0], [2453.0, 206.0], [2451.0, 207.0], [2443.0, 197.0], [2441.0, 204.0], [2445.0, 209.0], [2449.0, 191.0], [2447.0, 200.0], [2459.0, 202.0], [2463.0, 201.0], [2555.0, 193.0], [2557.0, 196.0], [2559.0, 190.0], [2553.0, 191.0], [2551.0, 194.0], [2549.0, 194.0], [2547.0, 192.5], [2493.0, 193.0], [2491.0, 202.0], [2487.0, 196.0], [2489.0, 201.0], [2499.0, 192.0], [2507.0, 199.0], [2521.0, 195.0], [2515.0, 194.0], [2513.0, 198.0], [2511.0, 194.0], [2509.0, 192.0], [2519.0, 205.0], [2517.0, 192.0], [2505.0, 204.0], [2503.0, 195.0], [2501.0, 198.0], [2523.0, 192.0], [2579.0, 188.0], [2591.0, 187.0], [2593.0, 191.0], [2613.0, 196.0], [2589.0, 185.0], [2585.0, 197.0], [2587.0, 192.0], [2561.0, 186.0], [2563.0, 190.0], [2565.0, 192.0], [2567.0, 192.0], [2619.0, 184.0], [2623.0, 190.0], [2617.0, 190.0], [2571.0, 188.0], [2569.0, 191.0], [2573.0, 191.0], [2577.0, 189.0], [2575.0, 191.0], [2627.0, 200.0], [2625.0, 202.0], [2677.0, 64.0], [2663.0, 182.0], [2651.0, 198.5], [2649.0, 186.0], [2631.0, 195.0], [2633.0, 196.0], [2639.0, 185.0], [2635.0, 128.0], [2629.0, 186.0], [2583.0, 190.0], [2581.0, 205.0], [2601.0, 186.0], [2605.0, 192.0], [2611.0, 184.0], [2609.0, 197.0], [2607.0, 191.0], [2599.0, 185.0], [2745.0, 70.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2745.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 49.0, "minX": 706.0, "maxY": 320.0, "series": [{"data": [[706.0, 210.0], [1478.0, 256.0], [1585.0, 320.0], [1572.0, 289.0], [1690.0, 281.0], [1718.0, 248.0], [1694.0, 208.0], [1752.0, 284.5], [1791.0, 217.0], [1793.0, 49.0], [1847.0, 280.0], [1800.0, 265.0], [1792.0, 285.0], [1798.0, 278.0], [1810.0, 281.0], [1905.0, 279.0], [1864.0, 256.0], [1860.0, 263.0], [1870.0, 300.0], [1920.0, 146.0], [1932.0, 269.5], [1980.0, 243.0], [1950.0, 236.0], [1986.0, 224.0], [2034.0, 249.0], [2003.0, 239.0], [2162.0, 217.0], [2160.0, 225.0], [2154.0, 225.0], [2094.0, 234.0], [2088.0, 215.0], [2100.0, 228.0], [2144.0, 222.0], [2166.0, 207.0], [2118.0, 210.5], [2168.0, 226.0], [2132.0, 228.0], [2124.0, 191.0], [2202.0, 226.0], [2186.0, 222.0], [2196.0, 228.0], [2200.0, 226.0], [2276.0, 207.0], [2274.0, 216.0], [2272.0, 214.0], [2280.0, 202.0], [2278.0, 214.0], [2290.0, 228.0], [2292.0, 211.0], [2286.0, 217.0], [2232.0, 223.0], [2230.0, 217.0], [2224.0, 197.0], [2218.0, 224.5], [2220.0, 227.0], [2212.0, 219.0], [2214.0, 216.0], [2236.0, 214.0], [2234.0, 177.0], [2176.0, 218.0], [2238.0, 227.0], [2296.0, 221.0], [2240.0, 217.0], [2246.0, 220.0], [2252.0, 212.0], [2268.0, 215.0], [2262.0, 208.0], [2270.0, 214.0], [2260.0, 212.0], [2302.0, 214.0], [2300.0, 203.0], [2424.0, 201.0], [2306.0, 215.0], [2366.0, 204.0], [2362.0, 194.0], [2364.0, 201.0], [2360.0, 206.0], [2358.0, 209.0], [2356.0, 210.0], [2354.0, 199.0], [2324.0, 212.0], [2320.0, 211.0], [2316.0, 210.0], [2314.0, 206.0], [2312.0, 164.0], [2308.0, 156.0], [2420.0, 198.0], [2418.0, 198.0], [2414.0, 206.0], [2416.0, 201.0], [2368.0, 214.0], [2430.0, 208.0], [2426.0, 196.0], [2422.0, 201.0], [2428.0, 203.0], [2408.0, 206.0], [2406.0, 161.0], [2410.0, 200.0], [2412.0, 206.0], [2372.0, 207.0], [2370.0, 202.0], [2394.0, 213.0], [2398.0, 206.0], [2396.0, 213.0], [2392.0, 207.0], [2380.0, 210.0], [2384.0, 210.0], [2386.0, 206.0], [2390.0, 209.0], [2388.0, 206.0], [2382.0, 208.0], [2374.0, 212.0], [2378.0, 199.0], [2376.0, 206.0], [2348.0, 204.0], [2344.0, 214.0], [2346.0, 206.0], [2338.0, 212.5], [2342.0, 198.0], [2340.0, 213.0], [2336.0, 213.0], [2350.0, 219.0], [2352.0, 218.0], [2332.0, 214.0], [2334.0, 212.0], [2400.0, 205.0], [2404.0, 208.0], [2402.0, 200.0], [2326.0, 208.0], [2328.0, 204.0], [2330.0, 211.0], [2530.0, 193.0], [2462.0, 196.0], [2482.0, 202.0], [2484.0, 196.0], [2476.0, 207.0], [2474.0, 199.0], [2478.0, 202.0], [2480.0, 203.0], [2466.0, 200.0], [2464.0, 200.0], [2470.0, 205.0], [2468.0, 199.0], [2472.0, 203.0], [2526.0, 192.0], [2524.0, 199.0], [2532.0, 195.0], [2536.0, 201.0], [2534.0, 198.0], [2540.0, 196.0], [2538.0, 196.0], [2542.0, 199.0], [2544.0, 191.0], [2438.0, 194.0], [2440.0, 203.0], [2432.0, 201.0], [2436.0, 203.0], [2434.0, 208.0], [2442.0, 201.0], [2460.0, 200.0], [2458.0, 197.0], [2452.0, 200.0], [2454.0, 198.0], [2450.0, 206.0], [2444.0, 203.0], [2446.0, 197.0], [2448.0, 192.0], [2456.0, 205.0], [2528.0, 195.0], [2556.0, 190.0], [2558.0, 197.0], [2496.0, 196.0], [2552.0, 200.0], [2554.0, 195.0], [2550.0, 202.0], [2546.0, 181.0], [2548.0, 203.0], [2494.0, 197.0], [2492.0, 201.0], [2490.0, 194.0], [2486.0, 192.0], [2488.0, 196.0], [2498.0, 201.0], [2500.0, 192.0], [2508.0, 195.0], [2506.0, 205.0], [2520.0, 197.0], [2522.0, 193.0], [2512.0, 198.0], [2514.0, 191.0], [2510.0, 197.0], [2518.0, 200.0], [2516.0, 196.0], [2504.0, 196.0], [2502.0, 200.0], [2574.0, 196.0], [2568.0, 187.0], [2566.0, 205.0], [2596.0, 192.0], [2598.0, 201.0], [2594.0, 201.0], [2592.0, 196.0], [2584.0, 197.0], [2590.0, 189.0], [2586.0, 191.0], [2588.0, 182.0], [2564.0, 201.0], [2562.0, 192.0], [2560.0, 188.0], [2622.0, 60.0], [2618.0, 185.0], [2570.0, 191.0], [2572.0, 193.0], [2576.0, 187.0], [2578.0, 193.0], [2624.0, 196.0], [2658.0, 200.0], [2670.0, 82.0], [2628.0, 199.0], [2652.0, 184.0], [2648.0, 187.0], [2632.0, 185.0], [2630.0, 198.0], [2580.0, 183.0], [2602.0, 189.0], [2600.0, 196.0], [2604.0, 198.0], [2612.0, 178.0], [2608.0, 189.0], [2610.0, 191.0], [2606.0, 189.0], [2690.0, 76.5], [2700.0, 71.0], [2694.0, 171.0], [2698.0, 181.0], [2157.0, 223.0], [2095.0, 233.0], [2119.0, 211.0], [2149.0, 217.0], [2151.0, 225.0], [2067.0, 241.0], [2147.0, 215.0], [2145.0, 227.0], [2069.0, 239.0], [2103.0, 219.0], [2141.0, 232.0], [2165.0, 220.0], [2159.0, 200.0], [2175.0, 227.0], [2133.0, 186.0], [2123.0, 233.0], [2121.0, 236.0], [2201.0, 209.0], [2183.0, 209.0], [2199.0, 223.0], [2187.0, 203.0], [2285.0, 211.0], [2281.0, 208.0], [2279.0, 214.0], [2207.0, 224.0], [2273.0, 210.0], [2283.0, 212.0], [2291.0, 201.0], [2287.0, 221.0], [2233.0, 213.0], [2231.0, 214.0], [2227.0, 230.0], [2219.0, 221.0], [2217.0, 215.0], [2237.0, 221.0], [2247.0, 214.0], [2243.0, 214.0], [2297.0, 211.0], [2255.0, 216.0], [2251.0, 216.0], [2267.0, 199.0], [2259.0, 207.0], [2265.0, 214.0], [2403.0, 200.0], [2367.0, 211.0], [2305.0, 211.0], [2363.0, 211.0], [2365.0, 209.0], [2361.0, 205.0], [2359.0, 201.0], [2357.0, 216.0], [2355.0, 216.0], [2351.0, 216.0], [2349.0, 207.0], [2311.0, 215.0], [2313.0, 218.0], [2321.0, 214.0], [2315.0, 210.0], [2325.0, 216.0], [2309.0, 222.0], [2307.0, 218.0], [2421.0, 203.0], [2423.0, 191.0], [2419.0, 208.0], [2417.0, 209.0], [2415.0, 205.0], [2431.0, 205.0], [2429.0, 207.0], [2425.0, 208.0], [2427.0, 196.0], [2411.0, 201.0], [2413.0, 207.0], [2405.0, 211.0], [2407.0, 205.0], [2409.0, 198.0], [2369.0, 203.0], [2371.0, 212.0], [2395.0, 206.0], [2397.0, 202.0], [2399.0, 212.0], [2381.0, 200.0], [2387.0, 207.0], [2389.0, 201.0], [2385.0, 208.0], [2383.0, 208.0], [2391.0, 201.0], [2393.0, 210.0], [2379.0, 207.0], [2375.0, 207.0], [2377.0, 214.0], [2373.0, 207.0], [2347.0, 199.0], [2343.0, 207.0], [2341.0, 208.0], [2337.0, 197.0], [2339.0, 214.0], [2401.0, 202.0], [2335.0, 208.0], [2333.0, 207.0], [2327.0, 209.0], [2329.0, 217.0], [2331.0, 207.0], [2439.0, 205.0], [2545.0, 197.0], [2495.0, 196.0], [2473.0, 198.0], [2483.0, 204.0], [2481.0, 209.0], [2475.0, 193.0], [2477.0, 202.0], [2479.0, 201.0], [2465.0, 203.0], [2467.0, 193.0], [2469.0, 201.0], [2471.0, 195.0], [2497.0, 195.0], [2485.0, 199.0], [2527.0, 202.0], [2525.0, 198.0], [2531.0, 196.0], [2529.0, 194.0], [2537.0, 196.0], [2535.0, 205.0], [2539.0, 200.0], [2543.0, 193.0], [2541.0, 201.0], [2533.0, 192.0], [2433.0, 203.0], [2437.0, 206.0], [2435.0, 196.0], [2461.0, 201.0], [2457.0, 203.0], [2455.0, 201.0], [2453.0, 206.0], [2451.0, 207.0], [2443.0, 197.0], [2441.0, 204.0], [2445.0, 209.0], [2449.0, 191.0], [2447.0, 200.0], [2459.0, 202.0], [2463.0, 201.0], [2555.0, 193.0], [2557.0, 196.0], [2559.0, 190.0], [2553.0, 191.0], [2551.0, 194.0], [2549.0, 194.0], [2547.0, 192.5], [2493.0, 193.0], [2491.0, 202.0], [2487.0, 196.0], [2489.0, 201.0], [2499.0, 192.0], [2507.0, 199.0], [2521.0, 195.0], [2515.0, 194.0], [2513.0, 198.0], [2511.0, 194.0], [2509.0, 192.0], [2519.0, 205.0], [2517.0, 192.0], [2505.0, 204.0], [2503.0, 195.0], [2501.0, 198.0], [2523.0, 192.0], [2579.0, 188.0], [2591.0, 187.0], [2593.0, 191.0], [2613.0, 196.0], [2589.0, 185.0], [2585.0, 197.0], [2587.0, 192.0], [2561.0, 186.0], [2563.0, 190.0], [2565.0, 192.0], [2567.0, 192.0], [2619.0, 184.0], [2623.0, 190.0], [2617.0, 190.0], [2571.0, 188.0], [2569.0, 191.0], [2573.0, 191.0], [2577.0, 189.0], [2575.0, 191.0], [2627.0, 200.0], [2625.0, 202.0], [2677.0, 64.0], [2663.0, 182.0], [2651.0, 198.5], [2649.0, 186.0], [2631.0, 195.0], [2633.0, 196.0], [2639.0, 185.0], [2635.0, 128.0], [2629.0, 186.0], [2583.0, 190.0], [2581.0, 205.0], [2601.0, 186.0], [2605.0, 192.0], [2611.0, 184.0], [2609.0, 197.0], [2607.0, 191.0], [2599.0, 185.0], [2745.0, 70.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2745.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1206.7333333333333, "minX": 1.71740424E12, "maxY": 2543.233333333333, "series": [{"data": [[1.7174046E12, 2543.233333333333], [1.7174043E12, 2527.45], [1.7174052E12, 2498.55], [1.7174049E12, 2520.4333333333334], [1.7174058E12, 2468.9666666666667], [1.7174055E12, 2423.4333333333334], [1.71740448E12, 2426.983333333333], [1.71740574E12, 2426.866666666667], [1.71740472E12, 2522.75], [1.71740442E12, 2470.8333333333335], [1.71740532E12, 2421.9], [1.71740502E12, 2259.116666666667], [1.71740562E12, 2414.35], [1.71740556E12, 2419.366666666667], [1.71740526E12, 2439.1833333333334], [1.71740424E12, 1206.7333333333333], [1.71740586E12, 1896.7833333333333], [1.71740484E12, 2540.3], [1.71740454E12, 2506.5833333333335], [1.71740544E12, 2443.4333333333334], [1.71740514E12, 2262.483333333333], [1.71740508E12, 2359.633333333333], [1.71740478E12, 2532.5333333333333], [1.71740568E12, 2411.016666666667], [1.71740538E12, 2450.2166666666667], [1.71740436E12, 2340.2166666666667], [1.71740496E12, 2495.2], [1.71740466E12, 2539.1833333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740586E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1198.4, "minX": 1.71740424E12, "maxY": 2543.233333333333, "series": [{"data": [[1.7174046E12, 2543.233333333333], [1.7174043E12, 2527.45], [1.7174052E12, 2498.55], [1.7174049E12, 2520.4333333333334], [1.7174058E12, 2468.9666666666667], [1.7174055E12, 2423.4333333333334], [1.71740448E12, 2426.983333333333], [1.71740574E12, 2426.866666666667], [1.71740472E12, 2522.7833333333333], [1.71740442E12, 2470.8333333333335], [1.71740532E12, 2421.9166666666665], [1.71740502E12, 2259.116666666667], [1.71740562E12, 2414.35], [1.71740556E12, 2419.366666666667], [1.71740526E12, 2439.1833333333334], [1.71740424E12, 1198.4], [1.71740586E12, 1905.1166666666666], [1.71740484E12, 2540.3], [1.71740454E12, 2506.5833333333335], [1.71740544E12, 2443.35], [1.71740514E12, 2262.483333333333], [1.71740508E12, 2359.616666666667], [1.71740478E12, 2532.5], [1.71740568E12, 2411.016666666667], [1.71740538E12, 2450.2833333333333], [1.71740436E12, 2340.2166666666667], [1.71740496E12, 2495.2166666666667], [1.71740466E12, 2539.1833333333334]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740586E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1198.4, "minX": 1.71740424E12, "maxY": 2543.233333333333, "series": [{"data": [[1.7174046E12, 2543.233333333333], [1.7174043E12, 2527.45], [1.7174052E12, 2498.55], [1.7174049E12, 2520.4333333333334], [1.7174058E12, 2468.9666666666667], [1.7174055E12, 2423.4333333333334], [1.71740448E12, 2426.983333333333], [1.71740574E12, 2426.866666666667], [1.71740472E12, 2522.7833333333333], [1.71740442E12, 2470.8333333333335], [1.71740532E12, 2421.9166666666665], [1.71740502E12, 2259.116666666667], [1.71740562E12, 2414.35], [1.71740556E12, 2419.366666666667], [1.71740526E12, 2439.1833333333334], [1.71740424E12, 1198.4], [1.71740586E12, 1905.1166666666666], [1.71740484E12, 2540.3], [1.71740454E12, 2506.5833333333335], [1.71740544E12, 2443.35], [1.71740514E12, 2262.483333333333], [1.71740508E12, 2359.616666666667], [1.71740478E12, 2532.5], [1.71740568E12, 2411.016666666667], [1.71740538E12, 2450.2833333333333], [1.71740436E12, 2340.2166666666667], [1.71740496E12, 2495.2166666666667], [1.71740466E12, 2539.1833333333334]], "isOverall": false, "label": "api/sensor/add-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740586E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1198.4, "minX": 1.71740424E12, "maxY": 2543.233333333333, "series": [{"data": [[1.7174046E12, 2543.233333333333], [1.7174043E12, 2527.45], [1.7174052E12, 2498.55], [1.7174049E12, 2520.4333333333334], [1.7174058E12, 2468.9666666666667], [1.7174055E12, 2423.4333333333334], [1.71740448E12, 2426.983333333333], [1.71740574E12, 2426.866666666667], [1.71740472E12, 2522.7833333333333], [1.71740442E12, 2470.8333333333335], [1.71740532E12, 2421.9166666666665], [1.71740502E12, 2259.116666666667], [1.71740562E12, 2414.35], [1.71740556E12, 2419.366666666667], [1.71740526E12, 2439.1833333333334], [1.71740424E12, 1198.4], [1.71740586E12, 1905.1166666666666], [1.71740484E12, 2540.3], [1.71740454E12, 2506.5833333333335], [1.71740544E12, 2443.35], [1.71740514E12, 2262.483333333333], [1.71740508E12, 2359.616666666667], [1.71740478E12, 2532.5], [1.71740568E12, 2411.016666666667], [1.71740538E12, 2450.2833333333333], [1.71740436E12, 2340.2166666666667], [1.71740496E12, 2495.2166666666667], [1.71740466E12, 2539.1833333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740586E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

