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
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 5132.0, "series": [{"data": [[0.0, 14.0], [0.1, 74.0], [0.2, 87.0], [0.3, 94.0], [0.4, 102.0], [0.5, 108.0], [0.6, 114.0], [0.7, 119.0], [0.8, 123.0], [0.9, 127.0], [1.0, 131.0], [1.1, 136.0], [1.2, 140.0], [1.3, 145.0], [1.4, 150.0], [1.5, 154.0], [1.6, 158.0], [1.7, 163.0], [1.8, 167.0], [1.9, 172.0], [2.0, 177.0], [2.1, 181.0], [2.2, 186.0], [2.3, 191.0], [2.4, 195.0], [2.5, 199.0], [2.6, 205.0], [2.7, 210.0], [2.8, 215.0], [2.9, 220.0], [3.0, 225.0], [3.1, 230.0], [3.2, 235.0], [3.3, 240.0], [3.4, 245.0], [3.5, 250.0], [3.6, 255.0], [3.7, 260.0], [3.8, 264.0], [3.9, 270.0], [4.0, 275.0], [4.1, 281.0], [4.2, 286.0], [4.3, 291.0], [4.4, 296.0], [4.5, 302.0], [4.6, 307.0], [4.7, 311.0], [4.8, 317.0], [4.9, 322.0], [5.0, 327.0], [5.1, 331.0], [5.2, 336.0], [5.3, 340.0], [5.4, 345.0], [5.5, 350.0], [5.6, 354.0], [5.7, 358.0], [5.8, 362.0], [5.9, 365.0], [6.0, 368.0], [6.1, 369.0], [6.2, 371.0], [6.3, 373.0], [6.4, 374.0], [6.5, 375.0], [6.6, 376.0], [6.7, 377.0], [6.8, 378.0], [6.9, 379.0], [7.0, 380.0], [7.1, 380.0], [7.2, 381.0], [7.3, 382.0], [7.4, 382.0], [7.5, 383.0], [7.6, 383.0], [7.7, 384.0], [7.8, 384.0], [7.9, 385.0], [8.0, 385.0], [8.1, 386.0], [8.2, 386.0], [8.3, 387.0], [8.4, 388.0], [8.5, 388.0], [8.6, 389.0], [8.7, 389.0], [8.8, 390.0], [8.9, 390.0], [9.0, 391.0], [9.1, 391.0], [9.2, 392.0], [9.3, 392.0], [9.4, 393.0], [9.5, 393.0], [9.6, 394.0], [9.7, 394.0], [9.8, 395.0], [9.9, 396.0], [10.0, 396.0], [10.1, 397.0], [10.2, 397.0], [10.3, 398.0], [10.4, 399.0], [10.5, 399.0], [10.6, 400.0], [10.7, 401.0], [10.8, 402.0], [10.9, 403.0], [11.0, 403.0], [11.1, 404.0], [11.2, 405.0], [11.3, 406.0], [11.4, 407.0], [11.5, 408.0], [11.6, 409.0], [11.7, 410.0], [11.8, 411.0], [11.9, 412.0], [12.0, 413.0], [12.1, 414.0], [12.2, 415.0], [12.3, 416.0], [12.4, 417.0], [12.5, 418.0], [12.6, 418.0], [12.7, 419.0], [12.8, 420.0], [12.9, 421.0], [13.0, 421.0], [13.1, 422.0], [13.2, 423.0], [13.3, 423.0], [13.4, 424.0], [13.5, 424.0], [13.6, 425.0], [13.7, 425.0], [13.8, 426.0], [13.9, 426.0], [14.0, 426.0], [14.1, 427.0], [14.2, 427.0], [14.3, 427.0], [14.4, 428.0], [14.5, 428.0], [14.6, 428.0], [14.7, 429.0], [14.8, 429.0], [14.9, 429.0], [15.0, 429.0], [15.1, 430.0], [15.2, 430.0], [15.3, 430.0], [15.4, 430.0], [15.5, 431.0], [15.6, 431.0], [15.7, 431.0], [15.8, 431.0], [15.9, 432.0], [16.0, 432.0], [16.1, 432.0], [16.2, 432.0], [16.3, 432.0], [16.4, 432.0], [16.5, 433.0], [16.6, 433.0], [16.7, 433.0], [16.8, 433.0], [16.9, 433.0], [17.0, 433.0], [17.1, 434.0], [17.2, 434.0], [17.3, 434.0], [17.4, 434.0], [17.5, 434.0], [17.6, 434.0], [17.7, 434.0], [17.8, 435.0], [17.9, 435.0], [18.0, 435.0], [18.1, 435.0], [18.2, 435.0], [18.3, 435.0], [18.4, 435.0], [18.5, 436.0], [18.6, 436.0], [18.7, 436.0], [18.8, 436.0], [18.9, 436.0], [19.0, 436.0], [19.1, 436.0], [19.2, 436.0], [19.3, 436.0], [19.4, 437.0], [19.5, 437.0], [19.6, 437.0], [19.7, 437.0], [19.8, 437.0], [19.9, 437.0], [20.0, 437.0], [20.1, 437.0], [20.2, 437.0], [20.3, 437.0], [20.4, 438.0], [20.5, 438.0], [20.6, 438.0], [20.7, 438.0], [20.8, 438.0], [20.9, 438.0], [21.0, 438.0], [21.1, 438.0], [21.2, 438.0], [21.3, 438.0], [21.4, 439.0], [21.5, 439.0], [21.6, 439.0], [21.7, 439.0], [21.8, 439.0], [21.9, 439.0], [22.0, 439.0], [22.1, 439.0], [22.2, 439.0], [22.3, 439.0], [22.4, 439.0], [22.5, 439.0], [22.6, 440.0], [22.7, 440.0], [22.8, 440.0], [22.9, 440.0], [23.0, 440.0], [23.1, 440.0], [23.2, 440.0], [23.3, 440.0], [23.4, 440.0], [23.5, 440.0], [23.6, 440.0], [23.7, 440.0], [23.8, 440.0], [23.9, 440.0], [24.0, 441.0], [24.1, 441.0], [24.2, 441.0], [24.3, 441.0], [24.4, 441.0], [24.5, 441.0], [24.6, 441.0], [24.7, 441.0], [24.8, 441.0], [24.9, 441.0], [25.0, 441.0], [25.1, 441.0], [25.2, 441.0], [25.3, 441.0], [25.4, 442.0], [25.5, 442.0], [25.6, 442.0], [25.7, 442.0], [25.8, 442.0], [25.9, 442.0], [26.0, 442.0], [26.1, 442.0], [26.2, 442.0], [26.3, 442.0], [26.4, 442.0], [26.5, 442.0], [26.6, 442.0], [26.7, 442.0], [26.8, 442.0], [26.9, 442.0], [27.0, 443.0], [27.1, 443.0], [27.2, 443.0], [27.3, 443.0], [27.4, 443.0], [27.5, 443.0], [27.6, 443.0], [27.7, 443.0], [27.8, 443.0], [27.9, 443.0], [28.0, 443.0], [28.1, 443.0], [28.2, 443.0], [28.3, 443.0], [28.4, 443.0], [28.5, 443.0], [28.6, 444.0], [28.7, 444.0], [28.8, 444.0], [28.9, 444.0], [29.0, 444.0], [29.1, 444.0], [29.2, 444.0], [29.3, 444.0], [29.4, 444.0], [29.5, 444.0], [29.6, 444.0], [29.7, 444.0], [29.8, 444.0], [29.9, 444.0], [30.0, 444.0], [30.1, 444.0], [30.2, 444.0], [30.3, 444.0], [30.4, 445.0], [30.5, 445.0], [30.6, 445.0], [30.7, 445.0], [30.8, 445.0], [30.9, 445.0], [31.0, 445.0], [31.1, 445.0], [31.2, 445.0], [31.3, 445.0], [31.4, 445.0], [31.5, 445.0], [31.6, 445.0], [31.7, 445.0], [31.8, 445.0], [31.9, 445.0], [32.0, 445.0], [32.1, 445.0], [32.2, 446.0], [32.3, 446.0], [32.4, 446.0], [32.5, 446.0], [32.6, 446.0], [32.7, 446.0], [32.8, 446.0], [32.9, 446.0], [33.0, 446.0], [33.1, 446.0], [33.2, 446.0], [33.3, 446.0], [33.4, 446.0], [33.5, 446.0], [33.6, 446.0], [33.7, 446.0], [33.8, 446.0], [33.9, 446.0], [34.0, 446.0], [34.1, 446.0], [34.2, 447.0], [34.3, 447.0], [34.4, 447.0], [34.5, 447.0], [34.6, 447.0], [34.7, 447.0], [34.8, 447.0], [34.9, 447.0], [35.0, 447.0], [35.1, 447.0], [35.2, 447.0], [35.3, 447.0], [35.4, 447.0], [35.5, 447.0], [35.6, 447.0], [35.7, 447.0], [35.8, 447.0], [35.9, 447.0], [36.0, 447.0], [36.1, 447.0], [36.2, 448.0], [36.3, 448.0], [36.4, 448.0], [36.5, 448.0], [36.6, 448.0], [36.7, 448.0], [36.8, 448.0], [36.9, 448.0], [37.0, 448.0], [37.1, 448.0], [37.2, 448.0], [37.3, 448.0], [37.4, 448.0], [37.5, 448.0], [37.6, 448.0], [37.7, 448.0], [37.8, 448.0], [37.9, 448.0], [38.0, 448.0], [38.1, 448.0], [38.2, 448.0], [38.3, 449.0], [38.4, 449.0], [38.5, 449.0], [38.6, 449.0], [38.7, 449.0], [38.8, 449.0], [38.9, 449.0], [39.0, 449.0], [39.1, 449.0], [39.2, 449.0], [39.3, 449.0], [39.4, 449.0], [39.5, 449.0], [39.6, 449.0], [39.7, 449.0], [39.8, 449.0], [39.9, 449.0], [40.0, 449.0], [40.1, 449.0], [40.2, 449.0], [40.3, 449.0], [40.4, 450.0], [40.5, 450.0], [40.6, 450.0], [40.7, 450.0], [40.8, 450.0], [40.9, 450.0], [41.0, 450.0], [41.1, 450.0], [41.2, 450.0], [41.3, 450.0], [41.4, 450.0], [41.5, 450.0], [41.6, 450.0], [41.7, 450.0], [41.8, 450.0], [41.9, 450.0], [42.0, 450.0], [42.1, 450.0], [42.2, 450.0], [42.3, 450.0], [42.4, 450.0], [42.5, 450.0], [42.6, 451.0], [42.7, 451.0], [42.8, 451.0], [42.9, 451.0], [43.0, 451.0], [43.1, 451.0], [43.2, 451.0], [43.3, 451.0], [43.4, 451.0], [43.5, 451.0], [43.6, 451.0], [43.7, 451.0], [43.8, 451.0], [43.9, 451.0], [44.0, 451.0], [44.1, 451.0], [44.2, 451.0], [44.3, 451.0], [44.4, 451.0], [44.5, 451.0], [44.6, 451.0], [44.7, 451.0], [44.8, 452.0], [44.9, 452.0], [45.0, 452.0], [45.1, 452.0], [45.2, 452.0], [45.3, 452.0], [45.4, 452.0], [45.5, 452.0], [45.6, 452.0], [45.7, 452.0], [45.8, 452.0], [45.9, 452.0], [46.0, 452.0], [46.1, 452.0], [46.2, 452.0], [46.3, 452.0], [46.4, 452.0], [46.5, 452.0], [46.6, 452.0], [46.7, 452.0], [46.8, 452.0], [46.9, 452.0], [47.0, 453.0], [47.1, 453.0], [47.2, 453.0], [47.3, 453.0], [47.4, 453.0], [47.5, 453.0], [47.6, 453.0], [47.7, 453.0], [47.8, 453.0], [47.9, 453.0], [48.0, 453.0], [48.1, 453.0], [48.2, 453.0], [48.3, 453.0], [48.4, 453.0], [48.5, 453.0], [48.6, 453.0], [48.7, 453.0], [48.8, 453.0], [48.9, 453.0], [49.0, 453.0], [49.1, 454.0], [49.2, 454.0], [49.3, 454.0], [49.4, 454.0], [49.5, 454.0], [49.6, 454.0], [49.7, 454.0], [49.8, 454.0], [49.9, 454.0], [50.0, 454.0], [50.1, 454.0], [50.2, 454.0], [50.3, 454.0], [50.4, 454.0], [50.5, 454.0], [50.6, 454.0], [50.7, 454.0], [50.8, 454.0], [50.9, 454.0], [51.0, 454.0], [51.1, 454.0], [51.2, 455.0], [51.3, 455.0], [51.4, 455.0], [51.5, 455.0], [51.6, 455.0], [51.7, 455.0], [51.8, 455.0], [51.9, 455.0], [52.0, 455.0], [52.1, 455.0], [52.2, 455.0], [52.3, 455.0], [52.4, 455.0], [52.5, 455.0], [52.6, 455.0], [52.7, 455.0], [52.8, 455.0], [52.9, 455.0], [53.0, 455.0], [53.1, 455.0], [53.2, 455.0], [53.3, 456.0], [53.4, 456.0], [53.5, 456.0], [53.6, 456.0], [53.7, 456.0], [53.8, 456.0], [53.9, 456.0], [54.0, 456.0], [54.1, 456.0], [54.2, 456.0], [54.3, 456.0], [54.4, 456.0], [54.5, 456.0], [54.6, 456.0], [54.7, 456.0], [54.8, 456.0], [54.9, 456.0], [55.0, 456.0], [55.1, 456.0], [55.2, 456.0], [55.3, 456.0], [55.4, 457.0], [55.5, 457.0], [55.6, 457.0], [55.7, 457.0], [55.8, 457.0], [55.9, 457.0], [56.0, 457.0], [56.1, 457.0], [56.2, 457.0], [56.3, 457.0], [56.4, 457.0], [56.5, 457.0], [56.6, 457.0], [56.7, 457.0], [56.8, 457.0], [56.9, 457.0], [57.0, 457.0], [57.1, 457.0], [57.2, 457.0], [57.3, 458.0], [57.4, 458.0], [57.5, 458.0], [57.6, 458.0], [57.7, 458.0], [57.8, 458.0], [57.9, 458.0], [58.0, 458.0], [58.1, 458.0], [58.2, 458.0], [58.3, 458.0], [58.4, 458.0], [58.5, 458.0], [58.6, 458.0], [58.7, 458.0], [58.8, 458.0], [58.9, 458.0], [59.0, 458.0], [59.1, 458.0], [59.2, 459.0], [59.3, 459.0], [59.4, 459.0], [59.5, 459.0], [59.6, 459.0], [59.7, 459.0], [59.8, 459.0], [59.9, 459.0], [60.0, 459.0], [60.1, 459.0], [60.2, 459.0], [60.3, 459.0], [60.4, 459.0], [60.5, 459.0], [60.6, 459.0], [60.7, 459.0], [60.8, 459.0], [60.9, 459.0], [61.0, 459.0], [61.1, 460.0], [61.2, 460.0], [61.3, 460.0], [61.4, 460.0], [61.5, 460.0], [61.6, 460.0], [61.7, 460.0], [61.8, 460.0], [61.9, 460.0], [62.0, 460.0], [62.1, 460.0], [62.2, 460.0], [62.3, 460.0], [62.4, 460.0], [62.5, 460.0], [62.6, 460.0], [62.7, 460.0], [62.8, 460.0], [62.9, 461.0], [63.0, 461.0], [63.1, 461.0], [63.2, 461.0], [63.3, 461.0], [63.4, 461.0], [63.5, 461.0], [63.6, 461.0], [63.7, 461.0], [63.8, 461.0], [63.9, 461.0], [64.0, 461.0], [64.1, 461.0], [64.2, 461.0], [64.3, 461.0], [64.4, 461.0], [64.5, 462.0], [64.6, 462.0], [64.7, 462.0], [64.8, 462.0], [64.9, 462.0], [65.0, 462.0], [65.1, 462.0], [65.2, 462.0], [65.3, 462.0], [65.4, 462.0], [65.5, 462.0], [65.6, 462.0], [65.7, 462.0], [65.8, 462.0], [65.9, 462.0], [66.0, 462.0], [66.1, 463.0], [66.2, 463.0], [66.3, 463.0], [66.4, 463.0], [66.5, 463.0], [66.6, 463.0], [66.7, 463.0], [66.8, 463.0], [66.9, 463.0], [67.0, 463.0], [67.1, 463.0], [67.2, 463.0], [67.3, 463.0], [67.4, 463.0], [67.5, 463.0], [67.6, 464.0], [67.7, 464.0], [67.8, 464.0], [67.9, 464.0], [68.0, 464.0], [68.1, 464.0], [68.2, 464.0], [68.3, 464.0], [68.4, 464.0], [68.5, 464.0], [68.6, 464.0], [68.7, 464.0], [68.8, 464.0], [68.9, 464.0], [69.0, 465.0], [69.1, 465.0], [69.2, 465.0], [69.3, 465.0], [69.4, 465.0], [69.5, 465.0], [69.6, 465.0], [69.7, 465.0], [69.8, 465.0], [69.9, 465.0], [70.0, 465.0], [70.1, 465.0], [70.2, 465.0], [70.3, 465.0], [70.4, 466.0], [70.5, 466.0], [70.6, 466.0], [70.7, 466.0], [70.8, 466.0], [70.9, 466.0], [71.0, 466.0], [71.1, 466.0], [71.2, 466.0], [71.3, 466.0], [71.4, 466.0], [71.5, 466.0], [71.6, 466.0], [71.7, 467.0], [71.8, 467.0], [71.9, 467.0], [72.0, 467.0], [72.1, 467.0], [72.2, 467.0], [72.3, 467.0], [72.4, 467.0], [72.5, 467.0], [72.6, 467.0], [72.7, 467.0], [72.8, 467.0], [72.9, 468.0], [73.0, 468.0], [73.1, 468.0], [73.2, 468.0], [73.3, 468.0], [73.4, 468.0], [73.5, 468.0], [73.6, 468.0], [73.7, 468.0], [73.8, 468.0], [73.9, 468.0], [74.0, 469.0], [74.1, 469.0], [74.2, 469.0], [74.3, 469.0], [74.4, 469.0], [74.5, 469.0], [74.6, 469.0], [74.7, 469.0], [74.8, 469.0], [74.9, 469.0], [75.0, 470.0], [75.1, 470.0], [75.2, 470.0], [75.3, 470.0], [75.4, 470.0], [75.5, 470.0], [75.6, 470.0], [75.7, 470.0], [75.8, 470.0], [75.9, 470.0], [76.0, 471.0], [76.1, 471.0], [76.2, 471.0], [76.3, 471.0], [76.4, 471.0], [76.5, 471.0], [76.6, 471.0], [76.7, 471.0], [76.8, 471.0], [76.9, 471.0], [77.0, 472.0], [77.1, 472.0], [77.2, 472.0], [77.3, 472.0], [77.4, 472.0], [77.5, 472.0], [77.6, 472.0], [77.7, 472.0], [77.8, 472.0], [77.9, 473.0], [78.0, 473.0], [78.1, 473.0], [78.2, 473.0], [78.3, 473.0], [78.4, 473.0], [78.5, 473.0], [78.6, 473.0], [78.7, 473.0], [78.8, 474.0], [78.9, 474.0], [79.0, 474.0], [79.1, 474.0], [79.2, 474.0], [79.3, 474.0], [79.4, 474.0], [79.5, 474.0], [79.6, 475.0], [79.7, 475.0], [79.8, 475.0], [79.9, 475.0], [80.0, 475.0], [80.1, 475.0], [80.2, 475.0], [80.3, 475.0], [80.4, 476.0], [80.5, 476.0], [80.6, 476.0], [80.7, 476.0], [80.8, 476.0], [80.9, 476.0], [81.0, 476.0], [81.1, 477.0], [81.2, 477.0], [81.3, 477.0], [81.4, 477.0], [81.5, 477.0], [81.6, 477.0], [81.7, 477.0], [81.8, 477.0], [81.9, 478.0], [82.0, 478.0], [82.1, 478.0], [82.2, 478.0], [82.3, 478.0], [82.4, 478.0], [82.5, 478.0], [82.6, 479.0], [82.7, 479.0], [82.8, 479.0], [82.9, 479.0], [83.0, 479.0], [83.1, 479.0], [83.2, 480.0], [83.3, 480.0], [83.4, 480.0], [83.5, 480.0], [83.6, 480.0], [83.7, 480.0], [83.8, 481.0], [83.9, 481.0], [84.0, 481.0], [84.1, 481.0], [84.2, 481.0], [84.3, 481.0], [84.4, 482.0], [84.5, 482.0], [84.6, 482.0], [84.7, 482.0], [84.8, 482.0], [84.9, 482.0], [85.0, 483.0], [85.1, 483.0], [85.2, 483.0], [85.3, 483.0], [85.4, 483.0], [85.5, 483.0], [85.6, 484.0], [85.7, 484.0], [85.8, 484.0], [85.9, 484.0], [86.0, 484.0], [86.1, 485.0], [86.2, 485.0], [86.3, 485.0], [86.4, 485.0], [86.5, 485.0], [86.6, 485.0], [86.7, 486.0], [86.8, 486.0], [86.9, 486.0], [87.0, 486.0], [87.1, 486.0], [87.2, 487.0], [87.3, 487.0], [87.4, 487.0], [87.5, 487.0], [87.6, 488.0], [87.7, 488.0], [87.8, 488.0], [87.9, 488.0], [88.0, 488.0], [88.1, 489.0], [88.2, 489.0], [88.3, 489.0], [88.4, 489.0], [88.5, 490.0], [88.6, 490.0], [88.7, 490.0], [88.8, 490.0], [88.9, 490.0], [89.0, 491.0], [89.1, 491.0], [89.2, 491.0], [89.3, 492.0], [89.4, 492.0], [89.5, 492.0], [89.6, 492.0], [89.7, 493.0], [89.8, 493.0], [89.9, 493.0], [90.0, 493.0], [90.1, 494.0], [90.2, 494.0], [90.3, 494.0], [90.4, 495.0], [90.5, 495.0], [90.6, 495.0], [90.7, 496.0], [90.8, 496.0], [90.9, 496.0], [91.0, 497.0], [91.1, 497.0], [91.2, 497.0], [91.3, 498.0], [91.4, 498.0], [91.5, 498.0], [91.6, 499.0], [91.7, 499.0], [91.8, 499.0], [91.9, 500.0], [92.0, 500.0], [92.1, 501.0], [92.2, 501.0], [92.3, 501.0], [92.4, 502.0], [92.5, 502.0], [92.6, 503.0], [92.7, 503.0], [92.8, 504.0], [92.9, 504.0], [93.0, 505.0], [93.1, 505.0], [93.2, 505.0], [93.3, 506.0], [93.4, 506.0], [93.5, 507.0], [93.6, 508.0], [93.7, 508.0], [93.8, 509.0], [93.9, 509.0], [94.0, 510.0], [94.1, 511.0], [94.2, 511.0], [94.3, 512.0], [94.4, 513.0], [94.5, 513.0], [94.6, 514.0], [94.7, 515.0], [94.8, 515.0], [94.9, 516.0], [95.0, 517.0], [95.1, 518.0], [95.2, 519.0], [95.3, 520.0], [95.4, 521.0], [95.5, 522.0], [95.6, 523.0], [95.7, 524.0], [95.8, 525.0], [95.9, 526.0], [96.0, 527.0], [96.1, 529.0], [96.2, 530.0], [96.3, 531.0], [96.4, 533.0], [96.5, 534.0], [96.6, 536.0], [96.7, 538.0], [96.8, 540.0], [96.9, 542.0], [97.0, 544.0], [97.1, 546.0], [97.2, 548.0], [97.3, 550.0], [97.4, 553.0], [97.5, 556.0], [97.6, 559.0], [97.7, 562.0], [97.8, 566.0], [97.9, 570.0], [98.0, 574.0], [98.1, 579.0], [98.2, 583.0], [98.3, 588.0], [98.4, 593.0], [98.5, 599.0], [98.6, 606.0], [98.7, 613.0], [98.8, 623.0], [98.9, 633.0], [99.0, 642.0], [99.1, 661.0], [99.2, 701.0], [99.3, 773.0], [99.4, 867.0], [99.5, 1302.0], [99.6, 1939.0], [99.7, 2512.0], [99.8, 3175.0], [99.9, 3879.0], [100.0, 5132.0]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 3212390.0, "series": [{"data": [[0.0, 14474.0], [600.0, 27430.0], [700.0, 5032.0], [800.0, 3633.0], [900.0, 1068.0], [1000.0, 786.0], [1100.0, 723.0], [1200.0, 710.0], [1300.0, 641.0], [1400.0, 630.0], [1500.0, 628.0], [1600.0, 601.0], [1700.0, 626.0], [1800.0, 599.0], [1900.0, 722.0], [2000.0, 1002.0], [2100.0, 582.0], [2200.0, 607.0], [2300.0, 587.0], [2400.0, 613.0], [2500.0, 612.0], [2600.0, 656.0], [2700.0, 596.0], [2800.0, 598.0], [2900.0, 533.0], [3000.0, 577.0], [3100.0, 626.0], [3200.0, 571.0], [3300.0, 548.0], [3400.0, 536.0], [3500.0, 628.0], [3600.0, 561.0], [3700.0, 540.0], [3800.0, 516.0], [3900.0, 588.0], [4000.0, 544.0], [4100.0, 573.0], [4200.0, 515.0], [4300.0, 381.0], [4400.0, 357.0], [4500.0, 316.0], [4600.0, 228.0], [4700.0, 127.0], [4800.0, 118.0], [4900.0, 53.0], [5000.0, 24.0], [5100.0, 6.0], [100.0, 84290.0], [200.0, 77512.0], [300.0, 238525.0], [400.0, 3212390.0], [500.0, 263482.0]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18494.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3637305.0, "series": [{"data": [[0.0, 3637305.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 294022.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18494.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 991.3417922283951, "minX": 1.71740646E12, "maxY": 1000.0, "series": [{"data": [[1.71740832E12, 1000.0], [1.71740652E12, 1000.0], [1.71740682E12, 1000.0], [1.71740712E12, 1000.0], [1.71740742E12, 1000.0], [1.71740772E12, 1000.0], [1.71740802E12, 1000.0], [1.71740814E12, 1000.0], [1.71740766E12, 1000.0], [1.71740796E12, 1000.0], [1.71740664E12, 1000.0], [1.71740694E12, 1000.0], [1.71740826E12, 1000.0], [1.71740724E12, 1000.0], [1.71740754E12, 1000.0], [1.71740784E12, 1000.0], [1.71740718E12, 1000.0], [1.71740748E12, 1000.0], [1.71740778E12, 1000.0], [1.71740808E12, 1000.0], [1.71740646E12, 991.3417922283951], [1.71740676E12, 1000.0], [1.71740706E12, 1000.0], [1.71740736E12, 1000.0], [1.7174067E12, 1000.0], [1.717407E12, 1000.0], [1.7174082E12, 1000.0], [1.7174073E12, 1000.0], [1.7174076E12, 1000.0], [1.7174079E12, 1000.0], [1.71740658E12, 1000.0], [1.71740688E12, 1000.0]], "isOverall": false, "label": " Concurrent request without delay", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740832E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 409.0, "maxY": 458.24427252452494, "series": [{"data": [[531.0, 62.333333333333336], [533.0, 46.5], [549.0, 221.0], [560.0, 224.0], [569.0, 77.5], [570.0, 22.0], [561.0, 162.0], [562.0, 85.4074074074074], [555.0, 69.58823529411765], [558.0, 19.0], [548.0, 34.2], [559.0, 227.0], [563.0, 192.0], [565.0, 230.0], [567.0, 235.0], [584.0, 104.33333333333334], [592.0, 62.125], [593.0, 33.0], [594.0, 33.0], [601.0, 115.66666666666666], [602.0, 38.833333333333336], [625.0, 88.8], [626.0, 41.5], [637.0, 46.714285714285715], [661.0, 60.75], [662.0, 65.75], [663.0, 177.5], [673.0, 126.71428571428571], [691.0, 55.0], [704.0, 65.72727272727273], [721.0, 53.1], [752.0, 343.0], [788.0, 75.88000000000001], [789.0, 162.0], [790.0, 61.0], [826.0, 91.35714285714286], [952.0, 126.51724137931032], [957.0, 132.0909090909091], [978.0, 82.0], [979.0, 84.0], [980.0, 88.71428571428571], [981.0, 127.61111111111109], [982.0, 90.66666666666667], [1000.0, 458.24427252452494], [411.0, 57.0], [413.0, 61.0], [409.0, 51.666666666666664], [419.0, 60.0], [417.0, 55.5], [418.0, 59.0], [423.0, 61.0], [424.0, 62.0], [427.0, 67.0], [428.0, 68.33333333333333], [429.0, 71.0], [430.0, 71.5], [432.0, 73.0], [438.0, 81.0], [444.0, 25.0], [445.0, 49.666666666666664], [447.0, 28.0], [449.0, 45.92857142857143], [450.0, 32.0], [451.0, 50.5], [452.0, 59.00000000000001], [454.0, 30.222222222222218], [458.0, 64.22222222222223], [460.0, 36.0], [465.0, 63.25], [468.0, 52.75], [469.0, 41.0], [470.0, 37.0], [474.0, 164.0], [476.0, 125.0], [477.0, 163.0], [487.0, 178.0], [500.0, 52.4], [508.0, 65.5]], "isOverall": false, "label": "api/sensor/add", "isController": false}, {"data": [[999.9613015374479, 458.2026048775346]], "isOverall": false, "label": "api/sensor/add-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17736.4, "minX": 1.71740646E12, "maxY": 755733.7333333333, "series": [{"data": [[1.71740832E12, 17736.4], [1.71740652E12, 388927.7], [1.71740682E12, 389400.4], [1.71740712E12, 379534.6], [1.71740742E12, 370875.2], [1.71740772E12, 370901.3], [1.71740802E12, 387471.9], [1.71740814E12, 378725.5], [1.71740766E12, 377899.0], [1.71740796E12, 380398.8], [1.71740664E12, 390200.8], [1.71740694E12, 383084.2], [1.71740826E12, 371040.5], [1.71740724E12, 384986.6], [1.71740754E12, 372455.7], [1.71740784E12, 371423.3], [1.71740718E12, 379998.6], [1.71740748E12, 370495.3], [1.71740778E12, 390000.7], [1.71740808E12, 375747.2], [1.71740646E12, 51196.6], [1.71740676E12, 379360.6], [1.71740706E12, 387118.1], [1.71740736E12, 370666.4], [1.7174067E12, 386103.1], [1.717407E12, 369242.5], [1.7174082E12, 382483.9], [1.7174073E12, 375573.2], [1.7174076E12, 370347.4], [1.7174079E12, 379119.9], [1.71740658E12, 387123.9], [1.71740688E12, 384841.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71740832E12, 34351.53333333333], [1.71740652E12, 753268.0166666667], [1.71740682E12, 754183.5333333333], [1.71740712E12, 735075.6333333333], [1.71740742E12, 718304.2666666667], [1.71740772E12, 718354.8166666667], [1.71740802E12, 750448.45], [1.71740814E12, 733508.5833333334], [1.71740766E12, 731907.8333333334], [1.71740796E12, 736749.4], [1.71740664E12, 755733.7333333333], [1.71740694E12, 741950.4333333333], [1.71740826E12, 718624.4166666666], [1.71740724E12, 745634.9666666667], [1.71740754E12, 721365.35], [1.71740784E12, 719365.8166666667], [1.71740718E12, 735974.3], [1.71740748E12, 717568.4833333333], [1.71740778E12, 755346.1833333333], [1.71740808E12, 727740.2666666667], [1.71740646E12, 99156.63333333333], [1.71740676E12, 734738.6333333333], [1.71740706E12, 749763.2166666667], [1.71740736E12, 717899.8666666667], [1.7174067E12, 747797.3833333333], [1.717407E12, 715142.0833333334], [1.7174082E12, 740787.7833333333], [1.7174073E12, 727403.2666666667], [1.7174076E12, 717282.0333333333], [1.7174079E12, 734272.45], [1.71740658E12, 749774.45], [1.71740688E12, 745354.1333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740832E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 431.3352214795506, "minX": 1.71740646E12, "maxY": 475.7122302158265, "series": [{"data": [[1.71740832E12, 475.7122302158265], [1.71740652E12, 447.5336022607798], [1.71740682E12, 446.7766615031702], [1.71740712E12, 456.9905405198841], [1.71740742E12, 470.16917928186706], [1.71740772E12, 469.4180942477145], [1.71740802E12, 449.10700466278894], [1.71740814E12, 460.4540755771651], [1.71740766E12, 462.02629115186085], [1.71740796E12, 457.4963101881545], [1.71740664E12, 445.9926125215522], [1.71740694E12, 454.0578207088673], [1.71740826E12, 469.51669076555936], [1.71740724E12, 451.80710939029876], [1.71740754E12, 465.7813879610418], [1.71740784E12, 466.3872279956585], [1.71740718E12, 459.283666834565], [1.71740748E12, 467.61460428783107], [1.71740778E12, 446.76765836574975], [1.71740808E12, 462.5611879476457], [1.71740646E12, 431.3352214795506], [1.71740676E12, 458.7774703013458], [1.71740706E12, 449.64263722104596], [1.71740736E12, 467.4694795643724], [1.7174067E12, 450.56915704640045], [1.717407E12, 470.97584920478937], [1.7174082E12, 455.07750339295717], [1.7174073E12, 462.9846727615292], [1.7174076E12, 467.20131395549384], [1.7174079E12, 459.37374455943376], [1.71740658E12, 449.241551864921], [1.71740688E12, 452.1792862310071]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740832E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 431.3348249688471, "minX": 1.71740646E12, "maxY": 475.7120667102685, "series": [{"data": [[1.71740832E12, 475.7120667102685], [1.71740652E12, 447.5334382200055], [1.71740682E12, 446.77655724030643], [1.71740712E12, 456.99040298302214], [1.71740742E12, 470.1690698110851], [1.71740772E12, 469.4179691470498], [1.71740802E12, 449.1068774277569], [1.71740814E12, 460.4539836900343], [1.71740766E12, 462.0261683677329], [1.71740796E12, 457.49617296373964], [1.71740664E12, 445.9924787442806], [1.71740694E12, 454.05765416584836], [1.71740826E12, 469.5165188166822], [1.71740724E12, 451.80693613751305], [1.71740754E12, 465.7812478101359], [1.71740784E12, 466.3870406083811], [1.71740718E12, 459.28350657081654], [1.71740748E12, 467.6144086038336], [1.71740778E12, 446.76753195571314], [1.71740808E12, 462.5610104346815], [1.71740646E12, 431.3348249688471], [1.71740676E12, 458.77737092360445], [1.71740706E12, 449.64251736098237], [1.71740736E12, 467.4693230894415], [1.7174067E12, 450.56904438219203], [1.717407E12, 470.97572354211576], [1.7174082E12, 455.07735175258165], [1.7174073E12, 462.9843561787622], [1.7174076E12, 467.2011808372386], [1.7174079E12, 459.37362982001486], [1.71740658E12, 449.24142451550904], [1.71740688E12, 452.17917319749085]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740832E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0067310774302852955, "minX": 1.71740646E12, "maxY": 1.0035685963521035, "series": [{"data": [[1.71740832E12, 0.07880967952910398], [1.71740652E12, 0.012795180183874778], [1.71740682E12, 0.010389049420596349], [1.71740712E12, 0.010414597246206268], [1.71740742E12, 0.009617790566745913], [1.71740772E12, 0.01066483185688483], [1.71740802E12, 0.008696888729221407], [1.71740814E12, 0.009035567977334442], [1.71740766E12, 0.009945514542245482], [1.71740796E12, 0.009369377611075678], [1.71740664E12, 0.010679885843391374], [1.71740694E12, 0.008811639843146798], [1.71740826E12, 0.008730313806713809], [1.71740724E12, 0.00906940657155341], [1.71740754E12, 0.007926311773453864], [1.71740784E12, 0.007206602278316889], [1.71740718E12, 0.0067310774302852955], [1.71740748E12, 0.0094867600209773], [1.71740778E12, 0.009384085720871745], [1.71740808E12, 0.00875216102741427], [1.71740646E12, 1.0035685963521035], [1.71740676E12, 0.010771018392526765], [1.71740706E12, 0.007940729198660594], [1.71740736E12, 0.008261876447393148], [1.7174067E12, 0.0101548006219064], [1.717407E12, 0.007916748478303546], [1.7174082E12, 0.008393294462851827], [1.7174073E12, 0.007412669487599228], [1.7174076E12, 0.00878580489561954], [1.7174079E12, 0.00771048947839464], [1.71740658E12, 0.010307811013476496], [1.71740688E12, 0.009637991319025804]], "isOverall": false, "label": "api/sensor/add", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740832E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.71740646E12, "maxY": 5132.0, "series": [{"data": [[1.71740832E12, 3859.0], [1.71740652E12, 4969.0], [1.71740682E12, 4720.0], [1.71740712E12, 4970.0], [1.71740742E12, 4457.0], [1.71740772E12, 4540.0], [1.71740802E12, 4268.0], [1.71740814E12, 4763.0], [1.71740766E12, 4893.0], [1.71740796E12, 3681.0], [1.71740664E12, 4735.0], [1.71740694E12, 4375.0], [1.71740826E12, 4291.0], [1.71740724E12, 4410.0], [1.71740754E12, 4364.0], [1.71740784E12, 4132.0], [1.71740718E12, 5132.0], [1.71740748E12, 4209.0], [1.71740778E12, 4236.0], [1.71740808E12, 4272.0], [1.71740646E12, 4998.0], [1.71740676E12, 4598.0], [1.71740706E12, 4681.0], [1.71740736E12, 4206.0], [1.7174067E12, 4619.0], [1.717407E12, 4664.0], [1.7174082E12, 4302.0], [1.7174073E12, 2068.0], [1.7174076E12, 4609.0], [1.7174079E12, 4645.0], [1.71740658E12, 4641.0], [1.71740688E12, 4825.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71740832E12, 182.0], [1.71740652E12, 39.0], [1.71740682E12, 64.0], [1.71740712E12, 61.0], [1.71740742E12, 87.0], [1.71740772E12, 71.0], [1.71740802E12, 96.0], [1.71740814E12, 72.0], [1.71740766E12, 66.0], [1.71740796E12, 76.0], [1.71740664E12, 40.0], [1.71740694E12, 69.0], [1.71740826E12, 94.0], [1.71740724E12, 74.0], [1.71740754E12, 89.0], [1.71740784E12, 90.0], [1.71740718E12, 89.0], [1.71740748E12, 66.0], [1.71740778E12, 99.0], [1.71740808E12, 94.0], [1.71740646E12, 14.0], [1.71740676E12, 56.0], [1.71740706E12, 74.0], [1.71740736E12, 75.0], [1.7174067E12, 57.0], [1.717407E12, 53.0], [1.7174082E12, 71.0], [1.7174073E12, 90.0], [1.7174076E12, 76.0], [1.7174079E12, 98.0], [1.71740658E12, 43.0], [1.71740688E12, 61.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71740832E12, 390.0], [1.71740652E12, 468.0], [1.71740682E12, 565.0], [1.71740712E12, 466.0], [1.71740742E12, 526.0], [1.71740772E12, 481.0], [1.71740802E12, 474.0], [1.71740814E12, 494.0], [1.71740766E12, 502.0], [1.71740796E12, 470.0], [1.71740664E12, 460.0], [1.71740694E12, 476.0], [1.71740826E12, 489.0], [1.71740724E12, 470.0], [1.71740754E12, 494.0], [1.71740784E12, 508.0], [1.71740718E12, 476.0], [1.71740748E12, 477.0], [1.71740778E12, 482.0], [1.71740808E12, 508.0], [1.71740646E12, 502.5], [1.71740676E12, 473.0], [1.71740706E12, 478.0], [1.71740736E12, 494.0], [1.7174067E12, 456.0], [1.717407E12, 483.0], [1.7174082E12, 476.0], [1.7174073E12, 487.0], [1.7174076E12, 801.0], [1.7174079E12, 529.0], [1.71740658E12, 477.0], [1.71740688E12, 495.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71740832E12, 3535.3199999999997], [1.71740652E12, 3984.0], [1.71740682E12, 3691.870000000021], [1.71740712E12, 3913.980000000003], [1.71740742E12, 3010.980000000003], [1.71740772E12, 2143.9600000000064], [1.71740802E12, 1127.8600000000224], [1.71740814E12, 856.9900000000016], [1.71740766E12, 2258.900000000016], [1.71740796E12, 1383.900000000016], [1.71740664E12, 3708.9600000000064], [1.71740694E12, 3506.0], [1.71740826E12, 637.0], [1.71740724E12, 3402.9900000000016], [1.71740754E12, 2621.9100000000144], [1.71740784E12, 1689.9900000000016], [1.71740718E12, 3422.0], [1.71740748E12, 2831.980000000003], [1.71740778E12, 1910.9900000000016], [1.71740808E12, 954.9900000000016], [1.71740646E12, 4126.500000000007], [1.71740676E12, 3661.9900000000016], [1.71740706E12, 3643.8600000000224], [1.71740736E12, 3098.980000000003], [1.7174067E12, 3658.9900000000016], [1.717407E12, 3620.930000000011], [1.7174082E12, 756.9800000000032], [1.7174073E12, 2036.0], [1.7174076E12, 2418.980000000003], [1.7174079E12, 1435.9900000000016], [1.71740658E12, 3696.950000000008], [1.71740688E12, 3830.9100000000144]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71740832E12, 304.0], [1.71740652E12, 404.0], [1.71740682E12, 423.0], [1.71740712E12, 431.0], [1.71740742E12, 434.0], [1.71740772E12, 445.0], [1.71740802E12, 446.0], [1.71740814E12, 475.0], [1.71740766E12, 453.0], [1.71740796E12, 443.0], [1.71740664E12, 408.0], [1.71740694E12, 428.0], [1.71740826E12, 468.0], [1.71740724E12, 412.0], [1.71740754E12, 455.0], [1.71740784E12, 461.0], [1.71740718E12, 417.0], [1.71740748E12, 447.0], [1.71740778E12, 449.0], [1.71740808E12, 471.0], [1.71740646E12, 360.0], [1.71740676E12, 404.0], [1.71740706E12, 430.0], [1.71740736E12, 444.0], [1.7174067E12, 402.0], [1.717407E12, 419.0], [1.7174082E12, 451.0], [1.7174073E12, 452.5], [1.7174076E12, 453.0], [1.7174079E12, 458.0], [1.71740658E12, 400.0], [1.71740688E12, 412.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71740832E12, 2294.7999999999956], [1.71740652E12, 486.0], [1.71740682E12, 587.0], [1.71740712E12, 782.0], [1.71740742E12, 547.9500000000007], [1.71740772E12, 500.0], [1.71740802E12, 489.0], [1.71740814E12, 500.0], [1.71740766E12, 515.0], [1.71740796E12, 500.0], [1.71740664E12, 479.0], [1.71740694E12, 504.0], [1.71740826E12, 494.0], [1.71740724E12, 511.9500000000007], [1.71740754E12, 517.0], [1.71740784E12, 516.0], [1.71740718E12, 494.9500000000007], [1.71740748E12, 495.0], [1.71740778E12, 494.9500000000007], [1.71740808E12, 517.0], [1.71740646E12, 646.25], [1.71740676E12, 512.0], [1.71740706E12, 506.0], [1.71740736E12, 505.0], [1.7174067E12, 477.0], [1.717407E12, 528.9500000000007], [1.7174082E12, 484.0], [1.7174073E12, 542.0], [1.7174076E12, 825.0], [1.7174079E12, 622.0], [1.71740658E12, 495.0], [1.71740688E12, 515.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740832E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 56.0, "minX": 1135.0, "maxY": 810.0, "series": [{"data": [[1135.0, 752.0], [1245.0, 746.0], [1250.0, 810.0], [1398.0, 675.0], [1378.0, 474.0], [1443.0, 624.0], [1526.0, 629.0], [1522.0, 469.0], [1540.0, 562.0], [1555.0, 447.0], [1593.0, 317.0], [1640.0, 455.0], [1652.0, 640.0], [1725.0, 601.0], [1688.0, 490.0], [1727.0, 501.0], [1697.0, 574.0], [1718.0, 472.5], [1666.0, 361.0], [1765.0, 535.0], [1785.0, 610.0], [1753.0, 595.0], [1757.0, 582.0], [1736.0, 521.0], [1794.0, 588.0], [1802.0, 544.0], [1808.0, 547.0], [1853.0, 512.0], [1835.0, 512.0], [1838.0, 558.0], [1843.0, 471.0], [1850.0, 539.0], [1809.0, 568.0], [1792.0, 509.0], [1796.0, 564.0], [1810.0, 586.0], [1822.0, 496.0], [1859.0, 464.0], [1898.0, 557.5], [1900.0, 56.0], [1915.0, 458.0], [1884.0, 452.0], [1864.0, 570.0], [1892.0, 534.0], [1888.0, 510.0], [1903.0, 498.0], [1872.0, 476.0], [1878.0, 536.0], [1875.0, 571.0], [1880.0, 616.0], [1975.0, 499.0], [1946.0, 535.0], [1944.0, 528.5], [1942.0, 493.0], [1941.0, 458.0], [1938.0, 508.0], [1950.0, 466.0], [1949.0, 501.0], [1948.0, 510.0], [1947.0, 463.0], [1962.0, 504.0], [1961.0, 499.0], [1964.0, 498.0], [1958.0, 555.0], [1921.0, 459.0], [1952.0, 474.0], [1976.0, 457.0], [1983.0, 484.0], [1978.0, 509.0], [1930.0, 513.0], [1924.0, 525.0], [1971.0, 504.0], [1970.0, 508.0], [1968.0, 546.0], [1969.0, 536.0], [1933.0, 528.0], [1956.0, 537.0], [1966.0, 498.5], [1965.0, 472.0], [2032.0, 490.0], [2043.0, 482.0], [2040.0, 460.0], [2039.0, 475.0], [2042.0, 473.0], [2007.0, 468.0], [2011.0, 441.0], [2009.0, 483.0], [2013.0, 482.0], [2012.0, 488.0], [2015.0, 490.0], [2038.0, 484.0], [2034.0, 493.0], [2037.0, 488.0], [2033.0, 458.0], [1995.0, 502.0], [1993.0, 498.0], [1992.0, 528.0], [1991.0, 477.0], [1987.0, 499.0], [1989.0, 491.0], [1986.0, 485.0], [1999.0, 488.0], [1996.0, 489.0], [1997.0, 459.0], [2020.0, 472.0], [2019.0, 492.0], [2047.0, 476.0], [2016.0, 489.0], [2017.0, 491.0], [2045.0, 483.0], [2046.0, 487.0], [2026.0, 504.0], [2024.0, 476.0], [2023.0, 500.0], [2025.0, 506.0], [2029.0, 490.0], [2030.0, 465.0], [2027.0, 453.0], [2021.0, 462.0], [2044.0, 478.0], [2001.0, 484.0], [2000.0, 491.0], [2002.0, 490.0], [2006.0, 495.0], [2005.0, 487.0], [2003.0, 482.0], [2004.0, 455.0], [2148.0, 461.0], [2168.0, 462.0], [2048.0, 449.0], [2166.0, 462.0], [2164.0, 464.0], [2162.0, 455.0], [2156.0, 463.0], [2158.0, 460.0], [2152.0, 462.0], [2150.0, 461.0], [2154.0, 461.0], [2146.0, 460.0], [2094.0, 479.0], [2090.0, 455.0], [2092.0, 474.0], [2088.0, 474.0], [2086.0, 473.0], [2084.0, 473.0], [2082.0, 478.0], [2080.0, 461.0], [2100.0, 481.0], [2098.0, 479.0], [2096.0, 466.0], [2102.0, 461.0], [2108.0, 477.0], [2110.0, 478.0], [2106.0, 470.0], [2104.0, 474.0], [2160.0, 471.0], [2126.0, 458.0], [2124.0, 458.0], [2172.0, 458.0], [2174.0, 459.0], [2114.0, 475.0], [2112.0, 468.0], [2118.0, 472.0], [2116.0, 460.0], [2120.0, 461.0], [2122.0, 470.0], [2170.0, 459.0], [2140.0, 457.0], [2142.0, 455.0], [2138.0, 473.0], [2134.0, 466.0], [2136.0, 472.0], [2130.0, 475.0], [2128.0, 476.0], [2132.0, 471.0], [2050.0, 473.0], [2054.0, 471.0], [2052.0, 472.0], [2068.0, 485.0], [2066.0, 477.0], [2064.0, 490.0], [2060.0, 469.0], [2056.0, 489.0], [2058.0, 488.0], [2062.0, 445.5], [2074.0, 465.0], [2076.0, 498.0], [2070.0, 477.0], [2072.0, 488.0], [2144.0, 464.0], [2206.0, 457.0], [2290.0, 442.0], [2280.0, 440.0], [2216.0, 457.0], [2214.0, 455.0], [2208.0, 452.0], [2210.0, 455.0], [2212.0, 455.0], [2218.0, 455.0], [2220.0, 453.0], [2222.0, 453.0], [2224.0, 450.0], [2194.0, 458.0], [2196.0, 460.0], [2192.0, 455.0], [2232.0, 456.0], [2230.0, 451.0], [2238.0, 451.0], [2234.0, 451.0], [2236.0, 446.0], [2228.0, 448.0], [2226.0, 453.0], [2178.0, 453.0], [2180.0, 460.0], [2182.0, 446.0], [2188.0, 453.0], [2186.0, 458.0], [2184.0, 454.0], [2176.0, 459.0], [2190.0, 453.0], [2262.0, 448.0], [2264.0, 447.0], [2266.0, 445.0], [2268.0, 447.0], [2270.0, 443.0], [2258.0, 447.0], [2260.0, 443.0], [2254.0, 451.0], [2252.0, 450.0], [2256.0, 452.0], [2292.0, 435.0], [2294.0, 447.0], [2296.0, 446.0], [2286.0, 443.0], [2288.0, 439.0], [2282.0, 442.0], [2284.0, 444.0], [2278.0, 446.0], [2200.0, 456.0], [2204.0, 458.0], [2202.0, 455.0], [2198.0, 459.0], [2274.0, 445.0], [2276.0, 446.0], [2272.0, 447.0], [2246.0, 452.0], [2244.0, 451.0], [2250.0, 451.0], [2248.0, 451.0], [2302.0, 440.0], [2240.0, 452.0], [2242.0, 453.0], [2300.0, 440.0], [2298.0, 442.0], [2406.0, 126.0], [2310.0, 440.0], [2364.0, 417.0], [2362.0, 421.0], [2308.0, 446.0], [2304.0, 446.0], [2306.0, 443.0], [2402.0, 467.0], [2400.0, 425.0], [2388.0, 412.0], [2386.0, 429.0], [2382.0, 183.0], [2376.0, 367.0], [2368.0, 113.0], [2370.0, 196.0], [2420.0, 228.0], [2416.0, 148.0], [2418.0, 426.0], [2412.0, 308.0], [2410.0, 193.0], [2350.0, 224.0], [2348.0, 430.0], [2344.0, 431.5], [2342.0, 435.0], [2346.0, 399.0], [2340.0, 386.0], [2336.0, 435.0], [2354.0, 430.0], [2356.0, 211.0], [2360.0, 433.0], [2316.0, 443.0], [2314.0, 437.0], [2312.0, 162.0], [2328.0, 441.0], [2326.0, 442.0], [2332.0, 440.0], [2318.0, 416.0], [2322.0, 440.0], [2334.0, 346.0], [2542.0, 100.0], [2440.0, 418.0], [2514.0, 116.0], [2504.0, 446.0], [2558.0, 474.0], [2442.0, 378.0], [2454.0, 255.0], [2470.0, 204.0], [2464.0, 188.0], [2488.0, 144.0], [2482.0, 446.0], [2434.0, 129.0], [2151.0, 459.0], [2167.0, 454.0], [2165.0, 457.0], [2163.0, 462.0], [2161.0, 464.0], [2155.0, 465.0], [2157.0, 452.0], [2159.0, 469.0], [2149.0, 456.0], [2153.0, 456.0], [2147.0, 463.0], [2091.0, 474.0], [2093.0, 456.0], [2095.0, 465.0], [2089.0, 473.0], [2085.0, 473.0], [2087.0, 460.0], [2081.0, 470.0], [2083.0, 476.0], [2097.0, 452.0], [2103.0, 480.0], [2105.0, 470.0], [2109.0, 472.0], [2111.0, 460.0], [2101.0, 461.0], [2099.0, 478.0], [2125.0, 468.0], [2123.0, 463.0], [2173.0, 465.0], [2117.0, 474.0], [2113.0, 482.0], [2115.0, 473.0], [2119.0, 473.0], [2175.0, 466.0], [2121.0, 472.0], [2169.0, 461.0], [2171.0, 467.0], [2127.0, 465.0], [2137.0, 468.0], [2143.0, 462.0], [2141.0, 454.0], [2139.0, 453.0], [2135.0, 452.0], [2129.0, 466.0], [2133.0, 465.0], [2131.0, 465.0], [2051.0, 481.0], [2057.0, 481.0], [2053.0, 489.0], [2055.0, 500.0], [2067.0, 489.0], [2059.0, 492.0], [2065.0, 482.0], [2061.0, 464.0], [2063.0, 466.0], [2049.0, 462.0], [2071.0, 479.0], [2069.0, 469.0], [2077.0, 457.0], [2075.0, 462.0], [2073.0, 479.0], [2079.0, 472.0], [2145.0, 460.0], [2191.0, 461.0], [2251.0, 449.0], [2217.0, 454.0], [2213.0, 452.0], [2215.0, 455.0], [2209.0, 456.0], [2211.0, 459.0], [2221.0, 451.0], [2219.0, 454.0], [2223.0, 457.0], [2225.0, 455.0], [2193.0, 456.0], [2195.0, 454.0], [2231.0, 454.0], [2237.0, 451.0], [2239.0, 450.0], [2233.0, 453.0], [2235.0, 452.0], [2227.0, 451.0], [2229.0, 453.0], [2183.0, 460.0], [2177.0, 457.0], [2179.0, 461.0], [2181.0, 462.0], [2187.0, 461.0], [2189.0, 456.0], [2185.0, 465.0], [2263.0, 448.0], [2265.0, 451.0], [2267.0, 450.0], [2271.0, 445.0], [2269.0, 449.0], [2259.0, 448.0], [2261.0, 448.0], [2257.0, 450.0], [2253.0, 451.0], [2255.0, 441.0], [2293.0, 445.0], [2291.0, 444.0], [2289.0, 445.0], [2295.0, 443.0], [2297.0, 441.0], [2287.0, 437.0], [2285.0, 452.0], [2283.0, 444.0], [2281.0, 447.0], [2197.0, 455.0], [2279.0, 445.0], [2277.0, 444.0], [2207.0, 456.0], [2201.0, 457.0], [2205.0, 460.0], [2203.0, 458.0], [2199.0, 459.0], [2275.0, 448.0], [2273.0, 445.0], [2243.0, 445.0], [2245.0, 447.0], [2247.0, 448.0], [2249.0, 452.0], [2303.0, 444.0], [2241.0, 453.0], [2301.0, 444.0], [2299.0, 441.0], [2317.0, 436.0], [2361.0, 419.0], [2355.0, 451.0], [2307.0, 440.0], [2365.0, 275.0], [2363.0, 431.0], [2305.0, 445.0], [2367.0, 429.0], [2335.0, 435.0], [2389.0, 414.0], [2387.0, 290.0], [2385.0, 203.0], [2417.0, 196.0], [2411.0, 155.0], [2407.0, 422.0], [2415.0, 211.0], [2339.0, 439.0], [2337.0, 428.0], [2351.0, 429.0], [2347.0, 448.0], [2345.0, 303.0], [2349.0, 421.0], [2313.0, 438.0], [2311.0, 443.0], [2315.0, 444.0], [2323.0, 438.0], [2333.0, 440.0], [2331.0, 401.0], [2329.0, 289.0], [2327.0, 436.0], [2325.0, 437.0], [2319.0, 439.0], [2321.0, 441.0], [2505.0, 441.0], [2485.0, 120.0], [2483.0, 159.0], [2439.0, 158.0], [2433.0, 145.0], [2557.0, 474.0], [2435.0, 455.0], [2563.0, 428.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2563.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 56.0, "minX": 1135.0, "maxY": 810.0, "series": [{"data": [[1135.0, 752.0], [1245.0, 746.0], [1250.0, 810.0], [1398.0, 675.0], [1378.0, 474.0], [1443.0, 624.0], [1526.0, 629.0], [1522.0, 469.0], [1540.0, 562.0], [1555.0, 447.0], [1593.0, 317.0], [1640.0, 455.0], [1652.0, 640.0], [1725.0, 601.0], [1688.0, 490.0], [1727.0, 501.0], [1697.0, 574.0], [1718.0, 472.5], [1666.0, 361.0], [1765.0, 535.0], [1785.0, 610.0], [1753.0, 595.0], [1757.0, 582.0], [1736.0, 521.0], [1794.0, 588.0], [1802.0, 544.0], [1808.0, 547.0], [1853.0, 512.0], [1835.0, 512.0], [1838.0, 558.0], [1843.0, 471.0], [1850.0, 539.0], [1809.0, 568.0], [1792.0, 509.0], [1796.0, 564.0], [1810.0, 586.0], [1822.0, 496.0], [1859.0, 464.0], [1898.0, 557.5], [1900.0, 56.0], [1915.0, 458.0], [1884.0, 452.0], [1864.0, 570.0], [1892.0, 534.0], [1888.0, 510.0], [1903.0, 498.0], [1872.0, 476.0], [1878.0, 536.0], [1875.0, 571.0], [1880.0, 616.0], [1975.0, 499.0], [1946.0, 535.0], [1944.0, 528.5], [1942.0, 493.0], [1941.0, 458.0], [1938.0, 508.0], [1950.0, 466.0], [1949.0, 501.0], [1948.0, 510.0], [1947.0, 463.0], [1962.0, 504.0], [1961.0, 499.0], [1964.0, 498.0], [1958.0, 555.0], [1921.0, 459.0], [1952.0, 474.0], [1976.0, 457.0], [1983.0, 484.0], [1978.0, 509.0], [1930.0, 513.0], [1924.0, 525.0], [1971.0, 504.0], [1970.0, 508.0], [1968.0, 546.0], [1969.0, 536.0], [1933.0, 528.0], [1956.0, 537.0], [1966.0, 498.5], [1965.0, 472.0], [2032.0, 490.0], [2043.0, 482.0], [2040.0, 460.0], [2039.0, 475.0], [2042.0, 473.0], [2007.0, 468.0], [2011.0, 441.0], [2009.0, 483.0], [2013.0, 482.0], [2012.0, 488.0], [2015.0, 490.0], [2038.0, 484.0], [2034.0, 493.0], [2037.0, 488.0], [2033.0, 458.0], [1995.0, 502.0], [1993.0, 498.0], [1992.0, 528.0], [1991.0, 477.0], [1987.0, 499.0], [1989.0, 491.0], [1986.0, 485.0], [1999.0, 488.0], [1996.0, 489.0], [1997.0, 459.0], [2020.0, 472.0], [2019.0, 492.0], [2047.0, 476.0], [2016.0, 489.0], [2017.0, 491.0], [2045.0, 483.0], [2046.0, 487.0], [2026.0, 504.0], [2024.0, 476.0], [2023.0, 500.0], [2025.0, 506.0], [2029.0, 490.0], [2030.0, 465.0], [2027.0, 453.0], [2021.0, 462.0], [2044.0, 478.0], [2001.0, 484.0], [2000.0, 491.0], [2002.0, 490.0], [2006.0, 495.0], [2005.0, 487.0], [2003.0, 482.0], [2004.0, 455.0], [2148.0, 461.0], [2168.0, 462.0], [2048.0, 449.0], [2166.0, 462.0], [2164.0, 464.0], [2162.0, 455.0], [2156.0, 463.0], [2158.0, 460.0], [2152.0, 462.0], [2150.0, 461.0], [2154.0, 461.0], [2146.0, 460.0], [2094.0, 479.0], [2090.0, 455.0], [2092.0, 474.0], [2088.0, 474.0], [2086.0, 473.0], [2084.0, 473.0], [2082.0, 478.0], [2080.0, 461.0], [2100.0, 481.0], [2098.0, 479.0], [2096.0, 466.0], [2102.0, 461.0], [2108.0, 477.0], [2110.0, 478.0], [2106.0, 470.0], [2104.0, 474.0], [2160.0, 471.0], [2126.0, 458.0], [2124.0, 458.0], [2172.0, 458.0], [2174.0, 459.0], [2114.0, 475.0], [2112.0, 468.0], [2118.0, 472.0], [2116.0, 460.0], [2120.0, 461.0], [2122.0, 470.0], [2170.0, 459.0], [2140.0, 457.0], [2142.0, 455.0], [2138.0, 473.0], [2134.0, 466.0], [2136.0, 472.0], [2130.0, 475.0], [2128.0, 476.0], [2132.0, 471.0], [2050.0, 473.0], [2054.0, 471.0], [2052.0, 472.0], [2068.0, 485.0], [2066.0, 477.0], [2064.0, 490.0], [2060.0, 469.0], [2056.0, 489.0], [2058.0, 488.0], [2062.0, 445.5], [2074.0, 465.0], [2076.0, 498.0], [2070.0, 477.0], [2072.0, 488.0], [2144.0, 464.0], [2206.0, 457.0], [2290.0, 442.0], [2280.0, 440.0], [2216.0, 457.0], [2214.0, 455.0], [2208.0, 452.0], [2210.0, 455.0], [2212.0, 455.0], [2218.0, 455.0], [2220.0, 453.0], [2222.0, 453.0], [2224.0, 450.0], [2194.0, 458.0], [2196.0, 460.0], [2192.0, 455.0], [2232.0, 456.0], [2230.0, 451.0], [2238.0, 451.0], [2234.0, 451.0], [2236.0, 446.0], [2228.0, 448.0], [2226.0, 453.0], [2178.0, 453.0], [2180.0, 460.0], [2182.0, 446.0], [2188.0, 453.0], [2186.0, 458.0], [2184.0, 454.0], [2176.0, 459.0], [2190.0, 453.0], [2262.0, 448.0], [2264.0, 447.0], [2266.0, 445.0], [2268.0, 447.0], [2270.0, 443.0], [2258.0, 447.0], [2260.0, 443.0], [2254.0, 451.0], [2252.0, 450.0], [2256.0, 452.0], [2292.0, 435.0], [2294.0, 447.0], [2296.0, 446.0], [2286.0, 443.0], [2288.0, 439.0], [2282.0, 442.0], [2284.0, 444.0], [2278.0, 446.0], [2200.0, 456.0], [2204.0, 458.0], [2202.0, 455.0], [2198.0, 459.0], [2274.0, 445.0], [2276.0, 446.0], [2272.0, 447.0], [2246.0, 452.0], [2244.0, 451.0], [2250.0, 451.0], [2248.0, 451.0], [2302.0, 440.0], [2240.0, 452.0], [2242.0, 453.0], [2300.0, 440.0], [2298.0, 442.0], [2406.0, 126.0], [2310.0, 440.0], [2364.0, 417.0], [2362.0, 421.0], [2308.0, 446.0], [2304.0, 446.0], [2306.0, 443.0], [2402.0, 467.0], [2400.0, 425.0], [2388.0, 412.0], [2386.0, 429.0], [2382.0, 183.0], [2376.0, 367.0], [2368.0, 113.0], [2370.0, 196.0], [2420.0, 228.0], [2416.0, 148.0], [2418.0, 426.0], [2412.0, 308.0], [2410.0, 193.0], [2350.0, 224.0], [2348.0, 430.0], [2344.0, 431.5], [2342.0, 435.0], [2346.0, 399.0], [2340.0, 386.0], [2336.0, 435.0], [2354.0, 430.0], [2356.0, 211.0], [2360.0, 433.0], [2316.0, 443.0], [2314.0, 437.0], [2312.0, 162.0], [2328.0, 441.0], [2326.0, 442.0], [2332.0, 440.0], [2318.0, 416.0], [2322.0, 440.0], [2334.0, 346.0], [2542.0, 100.0], [2440.0, 418.0], [2514.0, 116.0], [2504.0, 446.0], [2558.0, 474.0], [2442.0, 378.0], [2454.0, 255.0], [2470.0, 204.0], [2464.0, 188.0], [2488.0, 144.0], [2482.0, 446.0], [2434.0, 129.0], [2151.0, 459.0], [2167.0, 454.0], [2165.0, 457.0], [2163.0, 462.0], [2161.0, 464.0], [2155.0, 465.0], [2157.0, 452.0], [2159.0, 469.0], [2149.0, 456.0], [2153.0, 456.0], [2147.0, 463.0], [2091.0, 474.0], [2093.0, 456.0], [2095.0, 465.0], [2089.0, 473.0], [2085.0, 473.0], [2087.0, 460.0], [2081.0, 470.0], [2083.0, 476.0], [2097.0, 452.0], [2103.0, 480.0], [2105.0, 470.0], [2109.0, 472.0], [2111.0, 460.0], [2101.0, 461.0], [2099.0, 478.0], [2125.0, 468.0], [2123.0, 463.0], [2173.0, 465.0], [2117.0, 474.0], [2113.0, 482.0], [2115.0, 473.0], [2119.0, 473.0], [2175.0, 466.0], [2121.0, 472.0], [2169.0, 461.0], [2171.0, 467.0], [2127.0, 465.0], [2137.0, 468.0], [2143.0, 462.0], [2141.0, 454.0], [2139.0, 453.0], [2135.0, 452.0], [2129.0, 466.0], [2133.0, 465.0], [2131.0, 465.0], [2051.0, 481.0], [2057.0, 481.0], [2053.0, 489.0], [2055.0, 500.0], [2067.0, 489.0], [2059.0, 492.0], [2065.0, 482.0], [2061.0, 464.0], [2063.0, 466.0], [2049.0, 462.0], [2071.0, 479.0], [2069.0, 469.0], [2077.0, 457.0], [2075.0, 462.0], [2073.0, 479.0], [2079.0, 472.0], [2145.0, 460.0], [2191.0, 461.0], [2251.0, 449.0], [2217.0, 454.0], [2213.0, 452.0], [2215.0, 455.0], [2209.0, 456.0], [2211.0, 459.0], [2221.0, 451.0], [2219.0, 454.0], [2223.0, 457.0], [2225.0, 455.0], [2193.0, 456.0], [2195.0, 454.0], [2231.0, 454.0], [2237.0, 451.0], [2239.0, 450.0], [2233.0, 453.0], [2235.0, 452.0], [2227.0, 451.0], [2229.0, 453.0], [2183.0, 460.0], [2177.0, 457.0], [2179.0, 461.0], [2181.0, 462.0], [2187.0, 461.0], [2189.0, 456.0], [2185.0, 465.0], [2263.0, 448.0], [2265.0, 451.0], [2267.0, 450.0], [2271.0, 445.0], [2269.0, 449.0], [2259.0, 448.0], [2261.0, 448.0], [2257.0, 450.0], [2253.0, 451.0], [2255.0, 441.0], [2293.0, 445.0], [2291.0, 444.0], [2289.0, 445.0], [2295.0, 443.0], [2297.0, 441.0], [2287.0, 437.0], [2285.0, 452.0], [2283.0, 444.0], [2281.0, 447.0], [2197.0, 455.0], [2279.0, 445.0], [2277.0, 444.0], [2207.0, 456.0], [2201.0, 457.0], [2205.0, 460.0], [2203.0, 458.0], [2199.0, 459.0], [2275.0, 448.0], [2273.0, 445.0], [2243.0, 445.0], [2245.0, 447.0], [2247.0, 448.0], [2249.0, 452.0], [2303.0, 444.0], [2241.0, 453.0], [2301.0, 444.0], [2299.0, 441.0], [2317.0, 436.0], [2361.0, 419.0], [2355.0, 451.0], [2307.0, 440.0], [2365.0, 275.0], [2363.0, 431.0], [2305.0, 445.0], [2367.0, 429.0], [2335.0, 435.0], [2389.0, 414.0], [2387.0, 290.0], [2385.0, 203.0], [2417.0, 196.0], [2411.0, 155.0], [2407.0, 422.0], [2415.0, 211.0], [2339.0, 439.0], [2337.0, 428.0], [2351.0, 429.0], [2347.0, 448.0], [2345.0, 303.0], [2349.0, 421.0], [2313.0, 438.0], [2311.0, 443.0], [2315.0, 444.0], [2323.0, 438.0], [2333.0, 440.0], [2331.0, 401.0], [2329.0, 289.0], [2327.0, 436.0], [2325.0, 437.0], [2319.0, 439.0], [2321.0, 441.0], [2505.0, 441.0], [2485.0, 120.0], [2483.0, 159.0], [2439.0, 158.0], [2433.0, 145.0], [2557.0, 474.0], [2435.0, 455.0], [2563.0, 428.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2563.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 87.0, "minX": 1.71740646E12, "maxY": 2242.55, "series": [{"data": [[1.71740832E12, 87.0], [1.71740652E12, 2235.2166666666667], [1.71740682E12, 2237.9333333333334], [1.71740712E12, 2181.266666666667], [1.71740742E12, 2131.4666666666667], [1.71740772E12, 2131.5666666666666], [1.71740802E12, 2226.85], [1.71740814E12, 2176.5833333333335], [1.71740766E12, 2171.8333333333335], [1.71740796E12, 2186.2], [1.71740664E12, 2242.55], [1.71740694E12, 2201.5666666666666], [1.71740826E12, 2130.7166666666667], [1.71740724E12, 2212.5666666666666], [1.71740754E12, 2140.5833333333335], [1.71740784E12, 2134.616666666667], [1.71740718E12, 2183.9], [1.71740748E12, 2129.25], [1.71740778E12, 2241.4333333333334], [1.71740808E12, 2159.4666666666667], [1.71740646E12, 310.9], [1.71740676E12, 2180.233333333333], [1.71740706E12, 2224.7833333333333], [1.71740736E12, 2130.266666666667], [1.7174067E12, 2218.983333333333], [1.717407E12, 2122.15], [1.7174082E12, 2198.15], [1.7174073E12, 2158.4666666666667], [1.7174076E12, 2128.4333333333334], [1.7174079E12, 2178.85], [1.71740658E12, 2224.8333333333335], [1.71740688E12, 2211.733333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740832E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 101.93333333333334, "minX": 1.71740646E12, "maxY": 2242.5333333333333, "series": [{"data": [[1.71740832E12, 101.93333333333334], [1.71740652E12, 2235.2166666666667], [1.71740682E12, 2237.9333333333334], [1.71740712E12, 2181.233333333333], [1.71740742E12, 2131.4666666666667], [1.71740772E12, 2131.616666666667], [1.71740802E12, 2226.85], [1.71740814E12, 2176.5833333333335], [1.71740766E12, 2171.8333333333335], [1.71740796E12, 2186.2], [1.71740664E12, 2242.5333333333333], [1.71740694E12, 2201.633333333333], [1.71740826E12, 2132.4166666666665], [1.71740724E12, 2212.5666666666666], [1.71740754E12, 2140.55], [1.71740784E12, 2134.616666666667], [1.71740718E12, 2183.9], [1.71740748E12, 2129.2833333333333], [1.71740778E12, 2241.383333333333], [1.71740808E12, 2159.4666666666667], [1.71740646E12, 294.23333333333335], [1.71740676E12, 2180.233333333333], [1.71740706E12, 2224.8166666666666], [1.71740736E12, 2130.266666666667], [1.7174067E12, 2218.983333333333], [1.717407E12, 2122.0833333333335], [1.7174082E12, 2198.1833333333334], [1.7174073E12, 2158.4666666666667], [1.7174076E12, 2128.4333333333334], [1.7174079E12, 2178.85], [1.71740658E12, 2224.85], [1.71740688E12, 2211.733333333333]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71740832E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 101.93333333333334, "minX": 1.71740646E12, "maxY": 2242.5333333333333, "series": [{"data": [[1.71740832E12, 101.93333333333334], [1.71740652E12, 2235.2166666666667], [1.71740682E12, 2237.9333333333334], [1.71740712E12, 2181.233333333333], [1.71740742E12, 2131.4666666666667], [1.71740772E12, 2131.616666666667], [1.71740802E12, 2226.85], [1.71740814E12, 2176.5833333333335], [1.71740766E12, 2171.8333333333335], [1.71740796E12, 2186.2], [1.71740664E12, 2242.5333333333333], [1.71740694E12, 2201.633333333333], [1.71740826E12, 2132.4166666666665], [1.71740724E12, 2212.5666666666666], [1.71740754E12, 2140.55], [1.71740784E12, 2134.616666666667], [1.71740718E12, 2183.9], [1.71740748E12, 2129.2833333333333], [1.71740778E12, 2241.383333333333], [1.71740808E12, 2159.4666666666667], [1.71740646E12, 294.23333333333335], [1.71740676E12, 2180.233333333333], [1.71740706E12, 2224.8166666666666], [1.71740736E12, 2130.266666666667], [1.7174067E12, 2218.983333333333], [1.717407E12, 2122.0833333333335], [1.7174082E12, 2198.1833333333334], [1.7174073E12, 2158.4666666666667], [1.7174076E12, 2128.4333333333334], [1.7174079E12, 2178.85], [1.71740658E12, 2224.85], [1.71740688E12, 2211.733333333333]], "isOverall": false, "label": "api/sensor/add-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740832E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 101.93333333333334, "minX": 1.71740646E12, "maxY": 2242.5333333333333, "series": [{"data": [[1.71740832E12, 101.93333333333334], [1.71740652E12, 2235.2166666666667], [1.71740682E12, 2237.9333333333334], [1.71740712E12, 2181.233333333333], [1.71740742E12, 2131.4666666666667], [1.71740772E12, 2131.616666666667], [1.71740802E12, 2226.85], [1.71740814E12, 2176.5833333333335], [1.71740766E12, 2171.8333333333335], [1.71740796E12, 2186.2], [1.71740664E12, 2242.5333333333333], [1.71740694E12, 2201.633333333333], [1.71740826E12, 2132.4166666666665], [1.71740724E12, 2212.5666666666666], [1.71740754E12, 2140.55], [1.71740784E12, 2134.616666666667], [1.71740718E12, 2183.9], [1.71740748E12, 2129.2833333333333], [1.71740778E12, 2241.383333333333], [1.71740808E12, 2159.4666666666667], [1.71740646E12, 294.23333333333335], [1.71740676E12, 2180.233333333333], [1.71740706E12, 2224.8166666666666], [1.71740736E12, 2130.266666666667], [1.7174067E12, 2218.983333333333], [1.717407E12, 2122.0833333333335], [1.7174082E12, 2198.1833333333334], [1.7174073E12, 2158.4666666666667], [1.7174076E12, 2128.4333333333334], [1.7174079E12, 2178.85], [1.71740658E12, 2224.85], [1.71740688E12, 2211.733333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71740832E12, "title": "Total Transactions Per Second"}},
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

