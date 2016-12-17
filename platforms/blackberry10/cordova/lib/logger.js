/*
 *  Copyright 2012 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var level = 'verbose';

module.exports = {
    level: function (value) {
        level = value;
    },
    info: function (msg) {
        if (level === 'verbose') {
            console.log("[INFO]    " + (""+msg).replace(/info: /i, ""));
        }
    },
    error: function (msg) {
        console.error("[ERROR]   " + (""+msg).replace(/error: /i, ""));
    },
    warn: function (msg) {
        if (level !== 'error') {
            console.log("[WARN]    " + (""+msg).replace(/warning: /i, ""));
        }
    },
    log: function (msg) {
        if (level === "verbose") {
            console.log("[INFO]    " + (""+msg).replace(/info: /i, ""));
        }
    }
};
