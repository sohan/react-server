/*
 * Include a logger in your module with:
 *
 *   var logger = require('triton/core/logging').getLogger(__LOGGING_NAME__);
 *
 * This `logger` has methods for each level specified in logging/common.js.
 *
 * Example:
 *
 *   logger.debug("result: %s", result);
 *
 * It *also* has a `time` method for timing named metrics.  Metric names
 * should be dot-separated and be few in number (i.e. don't include object
 * IDs or other variables with many potential values).
 *
 * Example:
 *
 *   logger.time(`result.${http_status_code}`, time_in_ms);
 *
 */
if (SERVER_SIDE)
	module.exports = require('./logging/server.js');
else
	module.exports = require('./logging/client.js');
