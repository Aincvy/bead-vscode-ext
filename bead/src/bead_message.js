/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bead = (function() {

    /**
     * Namespace bead.
     * @exports bead
     * @namespace
     */
    var bead = {};

    bead.msg = (function() {

        /**
         * Namespace msg.
         * @memberof bead
         * @namespace
         */
        var msg = {};

        /**
         * MessageType enum.
         * @name bead.msg.MessageType
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} PingPong=1 PingPong value
         * @property {number} TextCompletion=2 TextCompletion value
         * @property {number} FileEdit=3 FileEdit value
         * @property {number} InitProject=4 InitProject value
         * @property {number} OpenFile=5 OpenFile value
         */
        msg.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "PingPong"] = 1;
            values[valuesById[2] = "TextCompletion"] = 2;
            values[valuesById[3] = "FileEdit"] = 3;
            values[valuesById[4] = "InitProject"] = 4;
            values[valuesById[5] = "OpenFile"] = 5;
            return values;
        })();

        msg.BeadSingleMessage = (function() {

            /**
             * Properties of a BeadSingleMessage.
             * @memberof bead.msg
             * @interface IBeadSingleMessage
             * @property {bead.msg.MessageType|null} [type] BeadSingleMessage type
             * @property {number|null} [id] BeadSingleMessage id
             * @property {Uint8Array|null} [msg] BeadSingleMessage msg
             */

            /**
             * Constructs a new BeadSingleMessage.
             * @memberof bead.msg
             * @classdesc Represents a BeadSingleMessage.
             * @implements IBeadSingleMessage
             * @constructor
             * @param {bead.msg.IBeadSingleMessage=} [properties] Properties to set
             */
            function BeadSingleMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BeadSingleMessage type.
             * @member {bead.msg.MessageType} type
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             */
            BeadSingleMessage.prototype.type = 0;

            /**
             * BeadSingleMessage id.
             * @member {number} id
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             */
            BeadSingleMessage.prototype.id = 0;

            /**
             * BeadSingleMessage msg.
             * @member {Uint8Array} msg
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             */
            BeadSingleMessage.prototype.msg = $util.newBuffer([]);

            /**
             * Creates a new BeadSingleMessage instance using the specified properties.
             * @function create
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.IBeadSingleMessage=} [properties] Properties to set
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage instance
             */
            BeadSingleMessage.create = function create(properties) {
                return new BeadSingleMessage(properties);
            };

            /**
             * Encodes the specified BeadSingleMessage message. Does not implicitly {@link bead.msg.BeadSingleMessage.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.IBeadSingleMessage} message BeadSingleMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeadSingleMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msg);
                return writer;
            };

            /**
             * Encodes the specified BeadSingleMessage message, length delimited. Does not implicitly {@link bead.msg.BeadSingleMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.IBeadSingleMessage} message BeadSingleMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BeadSingleMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BeadSingleMessage message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeadSingleMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.BeadSingleMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.int32();
                            break;
                        }
                    case 2: {
                            message.id = reader.int32();
                            break;
                        }
                    case 3: {
                            message.msg = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BeadSingleMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BeadSingleMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BeadSingleMessage message.
             * @function verify
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BeadSingleMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!(message.msg && typeof message.msg.length === "number" || $util.isString(message.msg)))
                        return "msg: buffer expected";
                return null;
            };

            /**
             * Creates a BeadSingleMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.BeadSingleMessage} BeadSingleMessage
             */
            BeadSingleMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.BeadSingleMessage)
                    return object;
                var message = new $root.bead.msg.BeadSingleMessage();
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "Unknown":
                case 0:
                    message.type = 0;
                    break;
                case "PingPong":
                case 1:
                    message.type = 1;
                    break;
                case "TextCompletion":
                case 2:
                    message.type = 2;
                    break;
                case "FileEdit":
                case 3:
                    message.type = 3;
                    break;
                case "InitProject":
                case 4:
                    message.type = 4;
                    break;
                case "OpenFile":
                case 5:
                    message.type = 5;
                    break;
                }
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.msg != null)
                    if (typeof object.msg === "string")
                        $util.base64.decode(object.msg, message.msg = $util.newBuffer($util.base64.length(object.msg)), 0);
                    else if (object.msg.length >= 0)
                        message.msg = object.msg;
                return message;
            };

            /**
             * Creates a plain object from a BeadSingleMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {bead.msg.BeadSingleMessage} message BeadSingleMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BeadSingleMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "Unknown" : 0;
                    object.id = 0;
                    if (options.bytes === String)
                        object.msg = "";
                    else {
                        object.msg = [];
                        if (options.bytes !== Array)
                            object.msg = $util.newBuffer(object.msg);
                    }
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.bead.msg.MessageType[message.type] === undefined ? message.type : $root.bead.msg.MessageType[message.type] : message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = options.bytes === String ? $util.base64.encode(message.msg, 0, message.msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.msg) : message.msg;
                return object;
            };

            /**
             * Converts this BeadSingleMessage to JSON.
             * @function toJSON
             * @memberof bead.msg.BeadSingleMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BeadSingleMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BeadSingleMessage
             * @function getTypeUrl
             * @memberof bead.msg.BeadSingleMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BeadSingleMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.BeadSingleMessage";
            };

            return BeadSingleMessage;
        })();

        msg.ReqTextCompletion = (function() {

            /**
             * Properties of a ReqTextCompletion.
             * @memberof bead.msg
             * @interface IReqTextCompletion
             * @property {string|null} [filepath] ReqTextCompletion filepath
             * @property {number|null} [line] ReqTextCompletion line
             * @property {number|null} [column] ReqTextCompletion column
             */

            /**
             * Constructs a new ReqTextCompletion.
             * @memberof bead.msg
             * @classdesc Represents a ReqTextCompletion.
             * @implements IReqTextCompletion
             * @constructor
             * @param {bead.msg.IReqTextCompletion=} [properties] Properties to set
             */
            function ReqTextCompletion(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqTextCompletion filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             */
            ReqTextCompletion.prototype.filepath = "";

            /**
             * ReqTextCompletion line.
             * @member {number} line
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             */
            ReqTextCompletion.prototype.line = 0;

            /**
             * ReqTextCompletion column.
             * @member {number} column
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             */
            ReqTextCompletion.prototype.column = 0;

            /**
             * Creates a new ReqTextCompletion instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.IReqTextCompletion=} [properties] Properties to set
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion instance
             */
            ReqTextCompletion.create = function create(properties) {
                return new ReqTextCompletion(properties);
            };

            /**
             * Encodes the specified ReqTextCompletion message. Does not implicitly {@link bead.msg.ReqTextCompletion.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.IReqTextCompletion} message ReqTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqTextCompletion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.line);
                if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.column);
                return writer;
            };

            /**
             * Encodes the specified ReqTextCompletion message, length delimited. Does not implicitly {@link bead.msg.ReqTextCompletion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.IReqTextCompletion} message ReqTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqTextCompletion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqTextCompletion message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqTextCompletion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqTextCompletion();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    case 2: {
                            message.line = reader.int32();
                            break;
                        }
                    case 3: {
                            message.column = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqTextCompletion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqTextCompletion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqTextCompletion message.
             * @function verify
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqTextCompletion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                if (message.line != null && message.hasOwnProperty("line"))
                    if (!$util.isInteger(message.line))
                        return "line: integer expected";
                if (message.column != null && message.hasOwnProperty("column"))
                    if (!$util.isInteger(message.column))
                        return "column: integer expected";
                return null;
            };

            /**
             * Creates a ReqTextCompletion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqTextCompletion} ReqTextCompletion
             */
            ReqTextCompletion.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqTextCompletion)
                    return object;
                var message = new $root.bead.msg.ReqTextCompletion();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                if (object.line != null)
                    message.line = object.line | 0;
                if (object.column != null)
                    message.column = object.column | 0;
                return message;
            };

            /**
             * Creates a plain object from a ReqTextCompletion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {bead.msg.ReqTextCompletion} message ReqTextCompletion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqTextCompletion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.filepath = "";
                    object.line = 0;
                    object.column = 0;
                }
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                if (message.line != null && message.hasOwnProperty("line"))
                    object.line = message.line;
                if (message.column != null && message.hasOwnProperty("column"))
                    object.column = message.column;
                return object;
            };

            /**
             * Converts this ReqTextCompletion to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqTextCompletion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqTextCompletion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqTextCompletion
             * @function getTypeUrl
             * @memberof bead.msg.ReqTextCompletion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqTextCompletion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqTextCompletion";
            };

            return ReqTextCompletion;
        })();

        msg.ResTextCompletion = (function() {

            /**
             * Properties of a ResTextCompletion.
             * @memberof bead.msg
             * @interface IResTextCompletion
             * @property {bead.msg.ResTextCompletion.ErrorTypeT|null} [errorType] ResTextCompletion errorType
             * @property {string|null} [content] ResTextCompletion content
             */

            /**
             * Constructs a new ResTextCompletion.
             * @memberof bead.msg
             * @classdesc Represents a ResTextCompletion.
             * @implements IResTextCompletion
             * @constructor
             * @param {bead.msg.IResTextCompletion=} [properties] Properties to set
             */
            function ResTextCompletion(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResTextCompletion errorType.
             * @member {bead.msg.ResTextCompletion.ErrorTypeT} errorType
             * @memberof bead.msg.ResTextCompletion
             * @instance
             */
            ResTextCompletion.prototype.errorType = 0;

            /**
             * ResTextCompletion content.
             * @member {string} content
             * @memberof bead.msg.ResTextCompletion
             * @instance
             */
            ResTextCompletion.prototype.content = "";

            /**
             * Creates a new ResTextCompletion instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.IResTextCompletion=} [properties] Properties to set
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion instance
             */
            ResTextCompletion.create = function create(properties) {
                return new ResTextCompletion(properties);
            };

            /**
             * Encodes the specified ResTextCompletion message. Does not implicitly {@link bead.msg.ResTextCompletion.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.IResTextCompletion} message ResTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResTextCompletion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified ResTextCompletion message, length delimited. Does not implicitly {@link bead.msg.ResTextCompletion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.IResTextCompletion} message ResTextCompletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResTextCompletion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResTextCompletion message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResTextCompletion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResTextCompletion();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResTextCompletion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResTextCompletion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResTextCompletion message.
             * @function verify
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResTextCompletion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a ResTextCompletion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResTextCompletion} ResTextCompletion
             */
            ResTextCompletion.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResTextCompletion)
                    return object;
                var message = new $root.bead.msg.ResTextCompletion();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a ResTextCompletion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {bead.msg.ResTextCompletion} message ResTextCompletion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResTextCompletion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errorType = options.enums === String ? "Success" : 0;
                    object.content = "";
                }
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResTextCompletion.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResTextCompletion.ErrorTypeT[message.errorType] : message.errorType;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this ResTextCompletion to JSON.
             * @function toJSON
             * @memberof bead.msg.ResTextCompletion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResTextCompletion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResTextCompletion
             * @function getTypeUrl
             * @memberof bead.msg.ResTextCompletion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResTextCompletion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResTextCompletion";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResTextCompletion.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResTextCompletion.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResTextCompletion;
        })();

        msg.LineAndColumn = (function() {

            /**
             * Properties of a LineAndColumn.
             * @memberof bead.msg
             * @interface ILineAndColumn
             * @property {number|null} [line] LineAndColumn line
             * @property {number|null} [column] LineAndColumn column
             */

            /**
             * Constructs a new LineAndColumn.
             * @memberof bead.msg
             * @classdesc Represents a LineAndColumn.
             * @implements ILineAndColumn
             * @constructor
             * @param {bead.msg.ILineAndColumn=} [properties] Properties to set
             */
            function LineAndColumn(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LineAndColumn line.
             * @member {number} line
             * @memberof bead.msg.LineAndColumn
             * @instance
             */
            LineAndColumn.prototype.line = 0;

            /**
             * LineAndColumn column.
             * @member {number} column
             * @memberof bead.msg.LineAndColumn
             * @instance
             */
            LineAndColumn.prototype.column = 0;

            /**
             * Creates a new LineAndColumn instance using the specified properties.
             * @function create
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.ILineAndColumn=} [properties] Properties to set
             * @returns {bead.msg.LineAndColumn} LineAndColumn instance
             */
            LineAndColumn.create = function create(properties) {
                return new LineAndColumn(properties);
            };

            /**
             * Encodes the specified LineAndColumn message. Does not implicitly {@link bead.msg.LineAndColumn.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.ILineAndColumn} message LineAndColumn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LineAndColumn.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.line);
                if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.column);
                return writer;
            };

            /**
             * Encodes the specified LineAndColumn message, length delimited. Does not implicitly {@link bead.msg.LineAndColumn.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.ILineAndColumn} message LineAndColumn message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LineAndColumn.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LineAndColumn message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.LineAndColumn} LineAndColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LineAndColumn.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.LineAndColumn();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.line = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.column = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LineAndColumn message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.LineAndColumn} LineAndColumn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LineAndColumn.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LineAndColumn message.
             * @function verify
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LineAndColumn.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.line != null && message.hasOwnProperty("line"))
                    if (!$util.isInteger(message.line))
                        return "line: integer expected";
                if (message.column != null && message.hasOwnProperty("column"))
                    if (!$util.isInteger(message.column))
                        return "column: integer expected";
                return null;
            };

            /**
             * Creates a LineAndColumn message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.LineAndColumn} LineAndColumn
             */
            LineAndColumn.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.LineAndColumn)
                    return object;
                var message = new $root.bead.msg.LineAndColumn();
                if (object.line != null)
                    message.line = object.line >>> 0;
                if (object.column != null)
                    message.column = object.column >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a LineAndColumn message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {bead.msg.LineAndColumn} message LineAndColumn
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LineAndColumn.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.line = 0;
                    object.column = 0;
                }
                if (message.line != null && message.hasOwnProperty("line"))
                    object.line = message.line;
                if (message.column != null && message.hasOwnProperty("column"))
                    object.column = message.column;
                return object;
            };

            /**
             * Converts this LineAndColumn to JSON.
             * @function toJSON
             * @memberof bead.msg.LineAndColumn
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LineAndColumn.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LineAndColumn
             * @function getTypeUrl
             * @memberof bead.msg.LineAndColumn
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LineAndColumn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.LineAndColumn";
            };

            return LineAndColumn;
        })();

        msg.FileRange = (function() {

            /**
             * Properties of a FileRange.
             * @memberof bead.msg
             * @interface IFileRange
             * @property {bead.msg.ILineAndColumn|null} [start] FileRange start
             * @property {bead.msg.ILineAndColumn|null} [end] FileRange end
             */

            /**
             * Constructs a new FileRange.
             * @memberof bead.msg
             * @classdesc Represents a FileRange.
             * @implements IFileRange
             * @constructor
             * @param {bead.msg.IFileRange=} [properties] Properties to set
             */
            function FileRange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileRange start.
             * @member {bead.msg.ILineAndColumn|null|undefined} start
             * @memberof bead.msg.FileRange
             * @instance
             */
            FileRange.prototype.start = null;

            /**
             * FileRange end.
             * @member {bead.msg.ILineAndColumn|null|undefined} end
             * @memberof bead.msg.FileRange
             * @instance
             */
            FileRange.prototype.end = null;

            /**
             * Creates a new FileRange instance using the specified properties.
             * @function create
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.IFileRange=} [properties] Properties to set
             * @returns {bead.msg.FileRange} FileRange instance
             */
            FileRange.create = function create(properties) {
                return new FileRange(properties);
            };

            /**
             * Encodes the specified FileRange message. Does not implicitly {@link bead.msg.FileRange.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.IFileRange} message FileRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.bead.msg.LineAndColumn.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.bead.msg.LineAndColumn.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileRange message, length delimited. Does not implicitly {@link bead.msg.FileRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.IFileRange} message FileRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileRange message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.FileRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.FileRange} FileRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.FileRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.start = $root.bead.msg.LineAndColumn.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.end = $root.bead.msg.LineAndColumn.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.FileRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.FileRange} FileRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileRange message.
             * @function verify
             * @memberof bead.msg.FileRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.bead.msg.LineAndColumn.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.bead.msg.LineAndColumn.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                return null;
            };

            /**
             * Creates a FileRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.FileRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.FileRange} FileRange
             */
            FileRange.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.FileRange)
                    return object;
                var message = new $root.bead.msg.FileRange();
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".bead.msg.FileRange.start: object expected");
                    message.start = $root.bead.msg.LineAndColumn.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".bead.msg.FileRange.end: object expected");
                    message.end = $root.bead.msg.LineAndColumn.fromObject(object.end);
                }
                return message;
            };

            /**
             * Creates a plain object from a FileRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.FileRange
             * @static
             * @param {bead.msg.FileRange} message FileRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.start = null;
                    object.end = null;
                }
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.bead.msg.LineAndColumn.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.bead.msg.LineAndColumn.toObject(message.end, options);
                return object;
            };

            /**
             * Converts this FileRange to JSON.
             * @function toJSON
             * @memberof bead.msg.FileRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileRange
             * @function getTypeUrl
             * @memberof bead.msg.FileRange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.FileRange";
            };

            return FileRange;
        })();

        msg.ReqFileEdit = (function() {

            /**
             * Properties of a ReqFileEdit.
             * @memberof bead.msg
             * @interface IReqFileEdit
             * @property {string|null} [filepath] ReqFileEdit filepath
             * @property {bead.msg.IFileRange|null} [range] ReqFileEdit range
             * @property {string|null} [newText] ReqFileEdit newText
             */

            /**
             * Constructs a new ReqFileEdit.
             * @memberof bead.msg
             * @classdesc Represents a ReqFileEdit.
             * @implements IReqFileEdit
             * @constructor
             * @param {bead.msg.IReqFileEdit=} [properties] Properties to set
             */
            function ReqFileEdit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqFileEdit filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqFileEdit
             * @instance
             */
            ReqFileEdit.prototype.filepath = "";

            /**
             * ReqFileEdit range.
             * @member {bead.msg.IFileRange|null|undefined} range
             * @memberof bead.msg.ReqFileEdit
             * @instance
             */
            ReqFileEdit.prototype.range = null;

            /**
             * ReqFileEdit newText.
             * @member {string} newText
             * @memberof bead.msg.ReqFileEdit
             * @instance
             */
            ReqFileEdit.prototype.newText = "";

            /**
             * Creates a new ReqFileEdit instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.IReqFileEdit=} [properties] Properties to set
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit instance
             */
            ReqFileEdit.create = function create(properties) {
                return new ReqFileEdit(properties);
            };

            /**
             * Encodes the specified ReqFileEdit message. Does not implicitly {@link bead.msg.ReqFileEdit.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.IReqFileEdit} message ReqFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqFileEdit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                    $root.bead.msg.FileRange.encode(message.range, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.newText != null && Object.hasOwnProperty.call(message, "newText"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.newText);
                return writer;
            };

            /**
             * Encodes the specified ReqFileEdit message, length delimited. Does not implicitly {@link bead.msg.ReqFileEdit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.IReqFileEdit} message ReqFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqFileEdit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqFileEdit message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqFileEdit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqFileEdit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    case 2: {
                            message.range = $root.bead.msg.FileRange.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.newText = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqFileEdit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqFileEdit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqFileEdit message.
             * @function verify
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqFileEdit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                if (message.range != null && message.hasOwnProperty("range")) {
                    var error = $root.bead.msg.FileRange.verify(message.range);
                    if (error)
                        return "range." + error;
                }
                if (message.newText != null && message.hasOwnProperty("newText"))
                    if (!$util.isString(message.newText))
                        return "newText: string expected";
                return null;
            };

            /**
             * Creates a ReqFileEdit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqFileEdit} ReqFileEdit
             */
            ReqFileEdit.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqFileEdit)
                    return object;
                var message = new $root.bead.msg.ReqFileEdit();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                if (object.range != null) {
                    if (typeof object.range !== "object")
                        throw TypeError(".bead.msg.ReqFileEdit.range: object expected");
                    message.range = $root.bead.msg.FileRange.fromObject(object.range);
                }
                if (object.newText != null)
                    message.newText = String(object.newText);
                return message;
            };

            /**
             * Creates a plain object from a ReqFileEdit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {bead.msg.ReqFileEdit} message ReqFileEdit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqFileEdit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.filepath = "";
                    object.range = null;
                    object.newText = "";
                }
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                if (message.range != null && message.hasOwnProperty("range"))
                    object.range = $root.bead.msg.FileRange.toObject(message.range, options);
                if (message.newText != null && message.hasOwnProperty("newText"))
                    object.newText = message.newText;
                return object;
            };

            /**
             * Converts this ReqFileEdit to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqFileEdit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqFileEdit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqFileEdit
             * @function getTypeUrl
             * @memberof bead.msg.ReqFileEdit
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqFileEdit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqFileEdit";
            };

            return ReqFileEdit;
        })();

        msg.ResFileEdit = (function() {

            /**
             * Properties of a ResFileEdit.
             * @memberof bead.msg
             * @interface IResFileEdit
             * @property {bead.msg.ResFileEdit.ErrorTypeT|null} [errorType] ResFileEdit errorType
             */

            /**
             * Constructs a new ResFileEdit.
             * @memberof bead.msg
             * @classdesc Represents a ResFileEdit.
             * @implements IResFileEdit
             * @constructor
             * @param {bead.msg.IResFileEdit=} [properties] Properties to set
             */
            function ResFileEdit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResFileEdit errorType.
             * @member {bead.msg.ResFileEdit.ErrorTypeT} errorType
             * @memberof bead.msg.ResFileEdit
             * @instance
             */
            ResFileEdit.prototype.errorType = 0;

            /**
             * Creates a new ResFileEdit instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.IResFileEdit=} [properties] Properties to set
             * @returns {bead.msg.ResFileEdit} ResFileEdit instance
             */
            ResFileEdit.create = function create(properties) {
                return new ResFileEdit(properties);
            };

            /**
             * Encodes the specified ResFileEdit message. Does not implicitly {@link bead.msg.ResFileEdit.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.IResFileEdit} message ResFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResFileEdit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                return writer;
            };

            /**
             * Encodes the specified ResFileEdit message, length delimited. Does not implicitly {@link bead.msg.ResFileEdit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.IResFileEdit} message ResFileEdit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResFileEdit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResFileEdit message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResFileEdit} ResFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResFileEdit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResFileEdit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResFileEdit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResFileEdit} ResFileEdit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResFileEdit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResFileEdit message.
             * @function verify
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResFileEdit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResFileEdit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResFileEdit} ResFileEdit
             */
            ResFileEdit.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResFileEdit)
                    return object;
                var message = new $root.bead.msg.ResFileEdit();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResFileEdit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {bead.msg.ResFileEdit} message ResFileEdit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResFileEdit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.errorType = options.enums === String ? "Success" : 0;
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResFileEdit.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResFileEdit.ErrorTypeT[message.errorType] : message.errorType;
                return object;
            };

            /**
             * Converts this ResFileEdit to JSON.
             * @function toJSON
             * @memberof bead.msg.ResFileEdit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResFileEdit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResFileEdit
             * @function getTypeUrl
             * @memberof bead.msg.ResFileEdit
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResFileEdit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResFileEdit";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResFileEdit.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResFileEdit.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResFileEdit;
        })();

        msg.ReqInitProject = (function() {

            /**
             * Properties of a ReqInitProject.
             * @memberof bead.msg
             * @interface IReqInitProject
             * @property {string|null} [projectName] ReqInitProject projectName
             * @property {string|null} [projectPath] ReqInitProject projectPath
             */

            /**
             * Constructs a new ReqInitProject.
             * @memberof bead.msg
             * @classdesc Represents a ReqInitProject.
             * @implements IReqInitProject
             * @constructor
             * @param {bead.msg.IReqInitProject=} [properties] Properties to set
             */
            function ReqInitProject(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqInitProject projectName.
             * @member {string} projectName
             * @memberof bead.msg.ReqInitProject
             * @instance
             */
            ReqInitProject.prototype.projectName = "";

            /**
             * ReqInitProject projectPath.
             * @member {string} projectPath
             * @memberof bead.msg.ReqInitProject
             * @instance
             */
            ReqInitProject.prototype.projectPath = "";

            /**
             * Creates a new ReqInitProject instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.IReqInitProject=} [properties] Properties to set
             * @returns {bead.msg.ReqInitProject} ReqInitProject instance
             */
            ReqInitProject.create = function create(properties) {
                return new ReqInitProject(properties);
            };

            /**
             * Encodes the specified ReqInitProject message. Does not implicitly {@link bead.msg.ReqInitProject.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.IReqInitProject} message ReqInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqInitProject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.projectName != null && Object.hasOwnProperty.call(message, "projectName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.projectName);
                if (message.projectPath != null && Object.hasOwnProperty.call(message, "projectPath"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.projectPath);
                return writer;
            };

            /**
             * Encodes the specified ReqInitProject message, length delimited. Does not implicitly {@link bead.msg.ReqInitProject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.IReqInitProject} message ReqInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqInitProject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqInitProject message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqInitProject} ReqInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqInitProject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqInitProject();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.projectName = reader.string();
                            break;
                        }
                    case 2: {
                            message.projectPath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqInitProject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqInitProject} ReqInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqInitProject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqInitProject message.
             * @function verify
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqInitProject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.projectName != null && message.hasOwnProperty("projectName"))
                    if (!$util.isString(message.projectName))
                        return "projectName: string expected";
                if (message.projectPath != null && message.hasOwnProperty("projectPath"))
                    if (!$util.isString(message.projectPath))
                        return "projectPath: string expected";
                return null;
            };

            /**
             * Creates a ReqInitProject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqInitProject} ReqInitProject
             */
            ReqInitProject.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqInitProject)
                    return object;
                var message = new $root.bead.msg.ReqInitProject();
                if (object.projectName != null)
                    message.projectName = String(object.projectName);
                if (object.projectPath != null)
                    message.projectPath = String(object.projectPath);
                return message;
            };

            /**
             * Creates a plain object from a ReqInitProject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {bead.msg.ReqInitProject} message ReqInitProject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqInitProject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.projectName = "";
                    object.projectPath = "";
                }
                if (message.projectName != null && message.hasOwnProperty("projectName"))
                    object.projectName = message.projectName;
                if (message.projectPath != null && message.hasOwnProperty("projectPath"))
                    object.projectPath = message.projectPath;
                return object;
            };

            /**
             * Converts this ReqInitProject to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqInitProject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqInitProject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqInitProject
             * @function getTypeUrl
             * @memberof bead.msg.ReqInitProject
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqInitProject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqInitProject";
            };

            return ReqInitProject;
        })();

        msg.ResInitProject = (function() {

            /**
             * Properties of a ResInitProject.
             * @memberof bead.msg
             * @interface IResInitProject
             * @property {boolean|null} [finish] ResInitProject finish
             * @property {boolean|null} [success] ResInitProject success
             */

            /**
             * Constructs a new ResInitProject.
             * @memberof bead.msg
             * @classdesc Represents a ResInitProject.
             * @implements IResInitProject
             * @constructor
             * @param {bead.msg.IResInitProject=} [properties] Properties to set
             */
            function ResInitProject(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResInitProject finish.
             * @member {boolean} finish
             * @memberof bead.msg.ResInitProject
             * @instance
             */
            ResInitProject.prototype.finish = false;

            /**
             * ResInitProject success.
             * @member {boolean} success
             * @memberof bead.msg.ResInitProject
             * @instance
             */
            ResInitProject.prototype.success = false;

            /**
             * Creates a new ResInitProject instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.IResInitProject=} [properties] Properties to set
             * @returns {bead.msg.ResInitProject} ResInitProject instance
             */
            ResInitProject.create = function create(properties) {
                return new ResInitProject(properties);
            };

            /**
             * Encodes the specified ResInitProject message. Does not implicitly {@link bead.msg.ResInitProject.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.IResInitProject} message ResInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResInitProject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.finish != null && Object.hasOwnProperty.call(message, "finish"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.finish);
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified ResInitProject message, length delimited. Does not implicitly {@link bead.msg.ResInitProject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.IResInitProject} message ResInitProject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResInitProject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResInitProject message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResInitProject} ResInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResInitProject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResInitProject();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.finish = reader.bool();
                            break;
                        }
                    case 2: {
                            message.success = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResInitProject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResInitProject} ResInitProject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResInitProject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResInitProject message.
             * @function verify
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResInitProject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.finish != null && message.hasOwnProperty("finish"))
                    if (typeof message.finish !== "boolean")
                        return "finish: boolean expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a ResInitProject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResInitProject} ResInitProject
             */
            ResInitProject.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResInitProject)
                    return object;
                var message = new $root.bead.msg.ResInitProject();
                if (object.finish != null)
                    message.finish = Boolean(object.finish);
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a ResInitProject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {bead.msg.ResInitProject} message ResInitProject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResInitProject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.finish = false;
                    object.success = false;
                }
                if (message.finish != null && message.hasOwnProperty("finish"))
                    object.finish = message.finish;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this ResInitProject to JSON.
             * @function toJSON
             * @memberof bead.msg.ResInitProject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResInitProject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResInitProject
             * @function getTypeUrl
             * @memberof bead.msg.ResInitProject
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResInitProject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResInitProject";
            };

            return ResInitProject;
        })();

        msg.ReqOpenFile = (function() {

            /**
             * Properties of a ReqOpenFile.
             * @memberof bead.msg
             * @interface IReqOpenFile
             * @property {string|null} [filepath] ReqOpenFile filepath
             */

            /**
             * Constructs a new ReqOpenFile.
             * @memberof bead.msg
             * @classdesc Represents a ReqOpenFile.
             * @implements IReqOpenFile
             * @constructor
             * @param {bead.msg.IReqOpenFile=} [properties] Properties to set
             */
            function ReqOpenFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReqOpenFile filepath.
             * @member {string} filepath
             * @memberof bead.msg.ReqOpenFile
             * @instance
             */
            ReqOpenFile.prototype.filepath = "";

            /**
             * Creates a new ReqOpenFile instance using the specified properties.
             * @function create
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.IReqOpenFile=} [properties] Properties to set
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile instance
             */
            ReqOpenFile.create = function create(properties) {
                return new ReqOpenFile(properties);
            };

            /**
             * Encodes the specified ReqOpenFile message. Does not implicitly {@link bead.msg.ReqOpenFile.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.IReqOpenFile} message ReqOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqOpenFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
                return writer;
            };

            /**
             * Encodes the specified ReqOpenFile message, length delimited. Does not implicitly {@link bead.msg.ReqOpenFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.IReqOpenFile} message ReqOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReqOpenFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReqOpenFile message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqOpenFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ReqOpenFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filepath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReqOpenFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReqOpenFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReqOpenFile message.
             * @function verify
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReqOpenFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                return null;
            };

            /**
             * Creates a ReqOpenFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ReqOpenFile} ReqOpenFile
             */
            ReqOpenFile.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ReqOpenFile)
                    return object;
                var message = new $root.bead.msg.ReqOpenFile();
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                return message;
            };

            /**
             * Creates a plain object from a ReqOpenFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {bead.msg.ReqOpenFile} message ReqOpenFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReqOpenFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.filepath = "";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                return object;
            };

            /**
             * Converts this ReqOpenFile to JSON.
             * @function toJSON
             * @memberof bead.msg.ReqOpenFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReqOpenFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ReqOpenFile
             * @function getTypeUrl
             * @memberof bead.msg.ReqOpenFile
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReqOpenFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ReqOpenFile";
            };

            return ReqOpenFile;
        })();

        msg.ResOpenFile = (function() {

            /**
             * Properties of a ResOpenFile.
             * @memberof bead.msg
             * @interface IResOpenFile
             * @property {bead.msg.ResOpenFile.ErrorTypeT|null} [errorType] ResOpenFile errorType
             */

            /**
             * Constructs a new ResOpenFile.
             * @memberof bead.msg
             * @classdesc Represents a ResOpenFile.
             * @implements IResOpenFile
             * @constructor
             * @param {bead.msg.IResOpenFile=} [properties] Properties to set
             */
            function ResOpenFile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResOpenFile errorType.
             * @member {bead.msg.ResOpenFile.ErrorTypeT} errorType
             * @memberof bead.msg.ResOpenFile
             * @instance
             */
            ResOpenFile.prototype.errorType = 0;

            /**
             * Creates a new ResOpenFile instance using the specified properties.
             * @function create
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.IResOpenFile=} [properties] Properties to set
             * @returns {bead.msg.ResOpenFile} ResOpenFile instance
             */
            ResOpenFile.create = function create(properties) {
                return new ResOpenFile(properties);
            };

            /**
             * Encodes the specified ResOpenFile message. Does not implicitly {@link bead.msg.ResOpenFile.verify|verify} messages.
             * @function encode
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.IResOpenFile} message ResOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResOpenFile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errorType != null && Object.hasOwnProperty.call(message, "errorType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
                return writer;
            };

            /**
             * Encodes the specified ResOpenFile message, length delimited. Does not implicitly {@link bead.msg.ResOpenFile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.IResOpenFile} message ResOpenFile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResOpenFile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResOpenFile message from the specified reader or buffer.
             * @function decode
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {bead.msg.ResOpenFile} ResOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResOpenFile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bead.msg.ResOpenFile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.errorType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResOpenFile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {bead.msg.ResOpenFile} ResOpenFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResOpenFile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResOpenFile message.
             * @function verify
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResOpenFile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    switch (message.errorType) {
                    default:
                        return "errorType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ResOpenFile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {bead.msg.ResOpenFile} ResOpenFile
             */
            ResOpenFile.fromObject = function fromObject(object) {
                if (object instanceof $root.bead.msg.ResOpenFile)
                    return object;
                var message = new $root.bead.msg.ResOpenFile();
                switch (object.errorType) {
                default:
                    if (typeof object.errorType === "number") {
                        message.errorType = object.errorType;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.errorType = 0;
                    break;
                case "Fail":
                case 1:
                    message.errorType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ResOpenFile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {bead.msg.ResOpenFile} message ResOpenFile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResOpenFile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.errorType = options.enums === String ? "Success" : 0;
                if (message.errorType != null && message.hasOwnProperty("errorType"))
                    object.errorType = options.enums === String ? $root.bead.msg.ResOpenFile.ErrorTypeT[message.errorType] === undefined ? message.errorType : $root.bead.msg.ResOpenFile.ErrorTypeT[message.errorType] : message.errorType;
                return object;
            };

            /**
             * Converts this ResOpenFile to JSON.
             * @function toJSON
             * @memberof bead.msg.ResOpenFile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResOpenFile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResOpenFile
             * @function getTypeUrl
             * @memberof bead.msg.ResOpenFile
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResOpenFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/bead.msg.ResOpenFile";
            };

            /**
             * ErrorTypeT enum.
             * @name bead.msg.ResOpenFile.ErrorTypeT
             * @enum {number}
             * @property {number} Success=0 Success value
             * @property {number} Fail=1 Fail value
             */
            ResOpenFile.ErrorTypeT = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Fail"] = 1;
                return values;
            })();

            return ResOpenFile;
        })();

        return msg;
    })();

    return bead;
})();

module.exports = $root;
