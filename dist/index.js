import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// ../../node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self2, source, owner, props, debugStack, debugTask) {
      self2 = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self2 !== undefined ? self2 : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
      oldElement._store && (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null,
      recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    deprecatedAPIs = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function(size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$0) {
                  ReactSharedInternals.thrownErrors.push(error$0);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function() {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return getCurrentStack === null ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props, element._debugStack, element._debugTask);
      for (key = 2;key < arguments.length; key++)
        owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      for (var i = 2;i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      node && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(type, node, undefined, undefined, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      type == null && console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
      create == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      var dispatcher = resolveDispatcher();
      if (typeof update === "function")
        throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      create == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      create == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// ../../node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development(), 1);
  if (false) {} else {
    module.exports = react_development;
  }
});

// ../../node_modules/js-md5/src/md5.js
var require_md5 = __commonJS((exports, module) => {
  (function() {
    var INPUT_ERROR = "input is invalid type";
    var FINALIZE_ERROR = "finalize already called";
    var WINDOW = typeof window === "object";
    var root = WINDOW ? window : {};
    if (root.JS_MD5_NO_WINDOW) {
      WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === "object";
    var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
    if (NODE_JS) {
      root = global;
    } else if (WEB_WORKER) {
      root = self;
    }
    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && typeof module === "object" && module.exports;
    var AMD = typeof define === "function" && define.amd;
    var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
    var HEX_CHARS = "0123456789abcdef".split("");
    var EXTRA = [128, 32768, 8388608, -2147483648];
    var SHIFT = [0, 8, 16, 24];
    var OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
    var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    var blocks = [], buffer8;
    if (ARRAY_BUFFER) {
      var buffer = new ArrayBuffer(68);
      buffer8 = new Uint8Array(buffer);
      blocks = new Uint32Array(buffer);
    }
    var isArray = Array.isArray;
    if (root.JS_MD5_NO_NODE_JS || !isArray) {
      isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      };
    }
    var isView = ArrayBuffer.isView;
    if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !isView)) {
      isView = function(obj) {
        return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
      };
    }
    var formatMessage = function(message2) {
      var type = typeof message2;
      if (type === "string") {
        return [message2, true];
      }
      if (type !== "object" || message2 === null) {
        throw new Error(INPUT_ERROR);
      }
      if (ARRAY_BUFFER && message2.constructor === ArrayBuffer) {
        return [new Uint8Array(message2), false];
      }
      if (!isArray(message2) && !isView(message2)) {
        throw new Error(INPUT_ERROR);
      }
      return [message2, false];
    };
    var createOutputMethod = function(outputType) {
      return function(message2) {
        return new Md5(true).update(message2)[outputType]();
      };
    };
    var createMethod = function() {
      var method = createOutputMethod("hex");
      if (NODE_JS) {
        method = nodeWrap(method);
      }
      method.create = function() {
        return new Md5;
      };
      method.update = function(message2) {
        return method.create().update(message2);
      };
      for (var i = 0;i < OUTPUT_TYPES.length; ++i) {
        var type = OUTPUT_TYPES[i];
        method[type] = createOutputMethod(type);
      }
      return method;
    };
    var nodeWrap = function(method) {
      var crypto2 = __require("crypto");
      var Buffer = __require("buffer").Buffer;
      var bufferFrom;
      if (Buffer.from && !root.JS_MD5_NO_BUFFER_FROM) {
        bufferFrom = Buffer.from;
      } else {
        bufferFrom = function(message2) {
          return new Buffer(message2);
        };
      }
      var nodeMethod = function(message2) {
        if (typeof message2 === "string") {
          return crypto2.createHash("md5").update(message2, "utf8").digest("hex");
        } else {
          if (message2 === null || message2 === undefined) {
            throw new Error(INPUT_ERROR);
          } else if (message2.constructor === ArrayBuffer) {
            message2 = new Uint8Array(message2);
          }
        }
        if (isArray(message2) || isView(message2) || message2.constructor === Buffer) {
          return crypto2.createHash("md5").update(bufferFrom(message2)).digest("hex");
        } else {
          return method(message2);
        }
      };
      return nodeMethod;
    };
    var createHmacOutputMethod = function(outputType) {
      return function(key, message2) {
        return new HmacMd5(key, true).update(message2)[outputType]();
      };
    };
    var createHmacMethod = function() {
      var method = createHmacOutputMethod("hex");
      method.create = function(key) {
        return new HmacMd5(key);
      };
      method.update = function(key, message2) {
        return method.create(key).update(message2);
      };
      for (var i = 0;i < OUTPUT_TYPES.length; ++i) {
        var type = OUTPUT_TYPES[i];
        method[type] = createHmacOutputMethod(type);
      }
      return method;
    };
    function Md5(sharedMemory) {
      if (sharedMemory) {
        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        this.blocks = blocks;
        this.buffer8 = buffer8;
      } else {
        if (ARRAY_BUFFER) {
          var buffer2 = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(buffer2);
          this.blocks = new Uint32Array(buffer2);
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
      }
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
      this.finalized = this.hashed = false;
      this.first = true;
    }
    Md5.prototype.update = function(message2) {
      if (this.finalized) {
        throw new Error(FINALIZE_ERROR);
      }
      var result = formatMessage(message2);
      message2 = result[0];
      var isString = result[1];
      var code, index = 0, i, length = message2.length, blocks2 = this.blocks;
      var buffer82 = this.buffer8;
      while (index < length) {
        if (this.hashed) {
          this.hashed = false;
          blocks2[0] = blocks2[16];
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        if (isString) {
          if (ARRAY_BUFFER) {
            for (i = this.start;index < length && i < 64; ++index) {
              code = message2.charCodeAt(index);
              if (code < 128) {
                buffer82[i++] = code;
              } else if (code < 2048) {
                buffer82[i++] = 192 | code >>> 6;
                buffer82[i++] = 128 | code & 63;
              } else if (code < 55296 || code >= 57344) {
                buffer82[i++] = 224 | code >>> 12;
                buffer82[i++] = 128 | code >>> 6 & 63;
                buffer82[i++] = 128 | code & 63;
              } else {
                code = 65536 + ((code & 1023) << 10 | message2.charCodeAt(++index) & 1023);
                buffer82[i++] = 240 | code >>> 18;
                buffer82[i++] = 128 | code >>> 12 & 63;
                buffer82[i++] = 128 | code >>> 6 & 63;
                buffer82[i++] = 128 | code & 63;
              }
            }
          } else {
            for (i = this.start;index < length && i < 64; ++index) {
              code = message2.charCodeAt(index);
              if (code < 128) {
                blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message2.charCodeAt(++index) & 1023);
                blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
        } else {
          if (ARRAY_BUFFER) {
            for (i = this.start;index < length && i < 64; ++index) {
              buffer82[i++] = message2[index];
            }
          } else {
            for (i = this.start;index < length && i < 64; ++index) {
              blocks2[i >>> 2] |= message2[index] << SHIFT[i++ & 3];
            }
          }
        }
        this.lastByteIndex = i;
        this.bytes += i - this.start;
        if (i >= 64) {
          this.start = i - 64;
          this.hash();
          this.hashed = true;
        } else {
          this.start = i;
        }
      }
      if (this.bytes > 4294967295) {
        this.hBytes += this.bytes / 4294967296 << 0;
        this.bytes = this.bytes % 4294967296;
      }
      return this;
    };
    Md5.prototype.finalize = function() {
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      var blocks2 = this.blocks, i = this.lastByteIndex;
      blocks2[i >>> 2] |= EXTRA[i & 3];
      if (i >= 56) {
        if (!this.hashed) {
          this.hash();
        }
        blocks2[0] = blocks2[16];
        blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
      }
      blocks2[14] = this.bytes << 3;
      blocks2[15] = this.hBytes << 3 | this.bytes >>> 29;
      this.hash();
    };
    Md5.prototype.hash = function() {
      var a, b, c, d, bc, da, blocks2 = this.blocks;
      if (this.first) {
        a = blocks2[0] - 680876937;
        a = (a << 7 | a >>> 25) - 271733879 << 0;
        d = (-1732584194 ^ a & 2004318071) + blocks2[1] - 117830708;
        d = (d << 12 | d >>> 20) + a << 0;
        c = (-271733879 ^ d & (a ^ -271733879)) + blocks2[2] - 1126478375;
        c = (c << 17 | c >>> 15) + d << 0;
        b = (a ^ c & (d ^ a)) + blocks2[3] - 1316259209;
        b = (b << 22 | b >>> 10) + c << 0;
      } else {
        a = this.h0;
        b = this.h1;
        c = this.h2;
        d = this.h3;
        a += (d ^ b & (c ^ d)) + blocks2[0] - 680876936;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[1] - 389564586;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[2] + 606105819;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[3] - 1044525330;
        b = (b << 22 | b >>> 10) + c << 0;
      }
      a += (d ^ b & (c ^ d)) + blocks2[4] - 176418897;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[5] + 1200080426;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[6] - 1473231341;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[7] - 45705983;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (d ^ b & (c ^ d)) + blocks2[8] + 1770035416;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[9] - 1958414417;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[10] - 42063;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[11] - 1990404162;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (d ^ b & (c ^ d)) + blocks2[12] + 1804603682;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[13] - 40341101;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[14] - 1502002290;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[15] + 1236535329;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[1] - 165796510;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[6] - 1069501632;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[11] + 643717713;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[0] - 373897302;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[5] - 701558691;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[10] + 38016083;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[15] - 660478335;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[4] - 405537848;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[9] + 568446438;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[14] - 1019803690;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[3] - 187363961;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[8] + 1163531501;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[13] - 1444681467;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[2] - 51403784;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[7] + 1735328473;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[12] - 1926607734;
      b = (b << 20 | b >>> 12) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[5] - 378558;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[8] - 2022574463;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[11] + 1839030562;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[14] - 35309556;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[1] - 1530992060;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[4] + 1272893353;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[7] - 155497632;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[10] - 1094730640;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[13] + 681279174;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[0] - 358537222;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[3] - 722521979;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[6] + 76029189;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[9] - 640364487;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[12] - 421815835;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[15] + 530742520;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[2] - 995338651;
      b = (b << 23 | b >>> 9) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[0] - 198630844;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[7] + 1126891415;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[14] - 1416354905;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[5] - 57434055;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[12] + 1700485571;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[3] - 1894986606;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[10] - 1051523;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[1] - 2054922799;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[8] + 1873313359;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[15] - 30611744;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[6] - 1560198380;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[13] + 1309151649;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[4] - 145523070;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[11] - 1120210379;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[2] + 718787259;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[9] - 343485551;
      b = (b << 21 | b >>> 11) + c << 0;
      if (this.first) {
        this.h0 = a + 1732584193 << 0;
        this.h1 = b - 271733879 << 0;
        this.h2 = c - 1732584194 << 0;
        this.h3 = d + 271733878 << 0;
        this.first = false;
      } else {
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
      }
    };
    Md5.prototype.hex = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
      return HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15];
    };
    Md5.prototype.toString = Md5.prototype.hex;
    Md5.prototype.digest = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
      return [
        h0 & 255,
        h0 >>> 8 & 255,
        h0 >>> 16 & 255,
        h0 >>> 24 & 255,
        h1 & 255,
        h1 >>> 8 & 255,
        h1 >>> 16 & 255,
        h1 >>> 24 & 255,
        h2 & 255,
        h2 >>> 8 & 255,
        h2 >>> 16 & 255,
        h2 >>> 24 & 255,
        h3 & 255,
        h3 >>> 8 & 255,
        h3 >>> 16 & 255,
        h3 >>> 24 & 255
      ];
    };
    Md5.prototype.array = Md5.prototype.digest;
    Md5.prototype.arrayBuffer = function() {
      this.finalize();
      var buffer2 = new ArrayBuffer(16);
      var blocks2 = new Uint32Array(buffer2);
      blocks2[0] = this.h0;
      blocks2[1] = this.h1;
      blocks2[2] = this.h2;
      blocks2[3] = this.h3;
      return buffer2;
    };
    Md5.prototype.buffer = Md5.prototype.arrayBuffer;
    Md5.prototype.base64 = function() {
      var v1, v2, v3, base64Str = "", bytes = this.array();
      for (var i = 0;i < 15; ) {
        v1 = bytes[i++];
        v2 = bytes[i++];
        v3 = bytes[i++];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
      }
      v1 = bytes[i];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
      return base64Str;
    };
    function HmacMd5(key, sharedMemory) {
      var i, result = formatMessage(key);
      key = result[0];
      if (result[1]) {
        var bytes = [], length = key.length, index = 0, code;
        for (i = 0;i < length; ++i) {
          code = key.charCodeAt(i);
          if (code < 128) {
            bytes[index++] = code;
          } else if (code < 2048) {
            bytes[index++] = 192 | code >>> 6;
            bytes[index++] = 128 | code & 63;
          } else if (code < 55296 || code >= 57344) {
            bytes[index++] = 224 | code >>> 12;
            bytes[index++] = 128 | code >>> 6 & 63;
            bytes[index++] = 128 | code & 63;
          } else {
            code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
            bytes[index++] = 240 | code >>> 18;
            bytes[index++] = 128 | code >>> 12 & 63;
            bytes[index++] = 128 | code >>> 6 & 63;
            bytes[index++] = 128 | code & 63;
          }
        }
        key = bytes;
      }
      if (key.length > 64) {
        key = new Md5(true).update(key).array();
      }
      var oKeyPad = [], iKeyPad = [];
      for (i = 0;i < 64; ++i) {
        var b = key[i] || 0;
        oKeyPad[i] = 92 ^ b;
        iKeyPad[i] = 54 ^ b;
      }
      Md5.call(this, sharedMemory);
      this.update(iKeyPad);
      this.oKeyPad = oKeyPad;
      this.inner = true;
      this.sharedMemory = sharedMemory;
    }
    HmacMd5.prototype = new Md5;
    HmacMd5.prototype.finalize = function() {
      Md5.prototype.finalize.call(this);
      if (this.inner) {
        this.inner = false;
        var innerHash = this.array();
        Md5.call(this, this.sharedMemory);
        this.update(this.oKeyPad);
        this.update(innerHash);
        Md5.prototype.finalize.call(this);
      }
    };
    var exports2 = createMethod();
    exports2.md5 = exports2;
    exports2.md5.hmac = createHmacMethod();
    if (COMMON_JS) {
      module.exports = exports2;
    } else {
      root.md5 = exports2;
      if (AMD) {
        define(function() {
          return exports2;
        });
      }
    }
  })();
});

// ../../node_modules/tiny-typed-emitter/lib/index.js
var require_lib = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TypedEmitter = __require("events").EventEmitter;
});

// ../../node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS((exports) => {
  var React4 = __toESM(require_react(), 1);
  (function() {
    function noop() {}
    function testStringCoercion(value) {
      return "" + value;
    }
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
      try {
        testStringCoercion(key);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      JSCompiler_inline_result && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol === "function" && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"), testStringCoercion(key));
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: key == null ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    function getCrossOriginStringAs(as, input) {
      if (as === "font")
        return "";
      if (typeof input === "string")
        return input === "use-credentials" ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
      return thing === null ? "`null`" : thing === undefined ? "`undefined`" : thing === "" ? "an empty string" : typeof thing === "string" ? JSON.stringify(thing) : typeof thing === "number" ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Internals = {
      d: {
        f: noop,
        r: function() {
          throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
        },
        D: noop,
        C: noop,
        L: noop,
        m: noop,
        X: noop,
        S: noop,
        M: noop
      },
      p: 0,
      findDOMNode: null
    }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map === "function" && Map.prototype != null && typeof Map.prototype.forEach === "function" && typeof Set === "function" && Set.prototype != null && typeof Set.prototype.clear === "function" && typeof Set.prototype.forEach === "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
      var key = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
      if (!container || container.nodeType !== 1 && container.nodeType !== 9 && container.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn)
          return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
      }
    };
    exports.preconnect = function(href, options) {
      typeof href === "string" && href ? options != null && typeof options !== "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : options != null && typeof options.crossOrigin !== "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      typeof href === "string" && (options ? (options = options.crossOrigin, options = typeof options === "string" ? options === "use-credentials" ? options : "" : undefined) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
      if (typeof href !== "string" || !href)
        console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      else if (1 < arguments.length) {
        var options = arguments[1];
        typeof options === "object" && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
      }
      typeof href === "string" && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
      typeof href === "string" && href ? options == null || typeof options !== "object" ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : options.as !== "style" && options.as !== "script" && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
      if (typeof href === "string" && options && typeof options.as === "string") {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = typeof options.integrity === "string" ? options.integrity : undefined, fetchPriority = typeof options.fetchPriority === "string" ? options.fetchPriority : undefined;
        as === "style" ? Internals.d.S(href, typeof options.precedence === "string" ? options.precedence : undefined, {
          crossOrigin,
          integrity,
          fetchPriority
        }) : as === "script" && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined
        });
      }
    };
    exports.preinitModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && options.as !== "script" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
      if (encountered)
        console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
      else
        switch (encountered = options && typeof options.as === "string" ? options.as : "script", encountered) {
          case "script":
            break;
          default:
            encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', encountered, href);
        }
      if (typeof href === "string")
        if (typeof options === "object" && options !== null) {
          if (options.as == null || options.as === "script")
            encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
              crossOrigin: encountered,
              integrity: typeof options.integrity === "string" ? options.integrity : undefined,
              nonce: typeof options.nonce === "string" ? options.nonce : undefined
            });
        } else
          options == null && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options == null || typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : typeof options.as === "string" && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', encountered);
      if (typeof href === "string" && typeof options === "object" && options !== null && typeof options.as === "string") {
        encountered = options.as;
        var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
        Internals.d.L(href, encountered, {
          crossOrigin,
          integrity: typeof options.integrity === "string" ? options.integrity : undefined,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined,
          type: typeof options.type === "string" ? options.type : undefined,
          fetchPriority: typeof options.fetchPriority === "string" ? options.fetchPriority : undefined,
          referrerPolicy: typeof options.referrerPolicy === "string" ? options.referrerPolicy : undefined,
          imageSrcSet: typeof options.imageSrcSet === "string" ? options.imageSrcSet : undefined,
          imageSizes: typeof options.imageSizes === "string" ? options.imageSizes : undefined,
          media: typeof options.media === "string" ? options.media : undefined
        });
      }
    };
    exports.preloadModule = function(href, options) {
      var encountered = "";
      typeof href === "string" && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
      options !== undefined && typeof options !== "object" ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && ("as" in options) && typeof options.as !== "string" && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
      encountered && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', encountered);
      typeof href === "string" && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
        as: typeof options.as === "string" && options.as !== "script" ? options.as : undefined,
        crossOrigin: encountered,
        integrity: typeof options.integrity === "string" ? options.integrity : undefined
      })) : Internals.d.m(href));
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return resolveDispatcher().useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return resolveDispatcher().useHostTransitionStatus();
    };
    exports.version = "19.1.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// ../../node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  var react_dom_development = __toESM(require_react_dom_development(), 1);
  if (false) {} else {
    module.exports = react_dom_development;
  }
});

// ../../node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS((exports) => {
  var React5 = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self2, source, owner, props, debugStack, debugTask) {
      self2 = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self2 !== undefined ? self2 : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self2, debugStack, debugTask) {
      var children = config.children;
      if (children !== undefined)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self2, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
      typeof node === "object" && node !== null && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React5 = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React5["react-stack-bottom-frame"].bind(React5, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey, source, self2) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, false, source, self2, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.jsxs = function(type, config, maybeKey, source, self2) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, true, source, self2, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
  })();
});

// ../../node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS((exports, module) => {
  var react_jsx_runtime_development = __toESM(require_react_jsx_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_runtime_development;
  }
});

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS((exports, module) => {
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = "";
      for (var i = 0;i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (typeof module !== "undefined" && module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
      define("classnames", [], function() {
        return classNames;
      });
    } else {
      window.classNames = classNames;
    }
  })();
});

// ../../node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React25 = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self2, source, owner, props, debugStack, debugTask) {
      self2 = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self2 !== undefined ? self2 : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self2, debugStack, debugTask) {
      var children = config.children;
      if (children !== undefined)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self2, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
      typeof node === "object" && node !== null && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React25.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React25 = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React25["react-stack-bottom-frame"].bind(React25, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self2) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self2, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
  })();
});

// ../../node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS((exports, module) => {
  var react_jsx_dev_runtime_development = __toESM(require_react_jsx_dev_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_dev_runtime_development;
  }
});

// ../../node_modules/@whop/react/dist/theme/index.mjs
var import_react = __toESM(require_react(), 1);

// ../../node_modules/@whop/react/dist/theme/script.mjs
function script() {
  const cookie = document.cookie.match(/whop-frosted-theme=appearance:(?<appearance>light|dark)/)?.groups;
  const el = document.documentElement;
  const classes = [
    "light",
    "dark"
  ];
  const theme = cookie ? cookie.appearance : getSystemTheme();
  function updateDOM(theme2) {
    el.classList.remove(...classes);
    el.classList.add(theme2);
    el.style.colorScheme = theme2;
  }
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  updateDOM(theme);
}

// ../../node_modules/@whop/react/dist/theme/index.mjs
function WhopThemeScript() {
  const scriptString = `(${script.toString()})()`;
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: scriptString
    }
  }));
}
// ../../node_modules/@whop/react/dist/iframe/context.mjs
var import_react2 = __toESM(require_react(), 1);
"use client";
var WhopIframeSdkContext = import_react2.createContext(null);
// ../../node_modules/@whop/iframe/node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === undefined ? undefined : message.message;
})(errorUtil || (errorUtil = {}));

class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== undefined ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== undefined ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}

class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
        async: true
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}

class ZodString extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
    this.toLowerCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
    this.toUpperCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === undefined ? undefined : options.position,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}

class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
}
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== undefined ? _a : fatal) !== null && _b !== undefined ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// ../../node_modules/@whop/iframe/dist/chunk-DPDPUJJX.mjs
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var withError = (schema, error) => {
  return z.discriminatedUnion("status", [
    z.object({
      status: z.literal("ok"),
      data: schema
    }),
    z.object({
      status: z.literal("error"),
      error
    })
  ]);
};
var frostedV2Theme = z.object({
  appearance: z.enum(["light", "dark"]),
  accentColor: z.string(),
  dangerColor: z.string(),
  grayColor: z.string(),
  infoColor: z.string(),
  successColor: z.string(),
  warningColor: z.string()
}).partial();
var appsServerSchema = z.discriminatedUnion("event", [
  z.object({
    event: z.literal("appPing"),
    request: z.literal("app_ping"),
    response: z.literal("app_pong")
  }),
  z.object({
    event: z.literal("onColorThemeChange"),
    request: frostedV2Theme,
    response: z.void()
  })
]);
var TimeoutError = class extends Error {
  constructor() {
    super("Timeout");
  }
};
function randomId(length) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let str = "";
  for (let i = 0;i < length; i++) {
    str += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return str;
}
function createSDK({
  clientSchema,
  serverSchema,
  serverComplete,
  transport,
  timeout = 1000,
  timeouts,
  localAppId,
  remoteAppId,
  serverImplementation = {},
  serverMiddleware
}) {
  const callbacks = [];
  const keys = clientSchema?.options.map((option) => option._def.shape().event._def.value) ?? [];
  const client = Object.fromEntries(keys.map((key) => [
    key,
    async (req) => {
      const eventId = `${localAppId}:${key}:${randomId(8)}`;
      console.debug("[typed-transport] app. Created eventId", eventId);
      const responseData = new Promise((resolve, reject) => {
        const customTimeout = timeouts?.[key];
        const timeoutId = setTimeout(() => {
          const index = callbacks.findIndex((cb) => cb.id === eventId);
          if (index !== -1)
            callbacks.splice(index, 1);
          if (serverComplete) {
            console.debug("[typed-transport] app. Timeout error");
            reject(new TimeoutError);
          } else
            resolve(undefined);
        }, customTimeout ?? timeout);
        if (customTimeout && customTimeout > timeout && !serverComplete) {
          const timeoutId2 = setTimeout(() => {
            const index = callbacks.findIndex((cb) => cb.id === eventId);
            if (index !== -1)
              callbacks.splice(index, 1);
            resolve(undefined);
          }, timeout);
          callbacks.push({
            id: `${eventId}:processing`,
            resolve: () => clearTimeout(timeoutId2)
          });
        }
        callbacks.push({
          id: eventId,
          resolve: (data2) => {
            clearTimeout(timeoutId);
            resolve(data2);
          }
        });
      });
      console.debug("[typed-transport] app sending event", {
        eventId,
        localAppId,
        remoteAppId
      });
      await transport.send?.(eventId, req, { localAppId, remoteAppId });
      const data = await responseData;
      console.debug("[typed-transport] received response", data);
      return data;
    }
  ]));
  const cleanupRecv = transport.recv(async (event, dataAny) => {
    const [app, key, _randomId, type] = event.split(":");
    if (app === localAppId) {
      const idx = callbacks.findIndex((cb2) => cb2.id === event);
      if (idx === -1)
        return;
      const dataSchema = clientSchema?.optionsMap.get(key);
      if (!dataSchema)
        return;
      const cb = callbacks[idx];
      if (type === "processing") {
        cb.resolve(undefined);
      } else {
        const data = dataSchema.shape.response.parse(dataAny);
        callbacks.splice(idx, 1);
        cb.resolve(data);
      }
    } else if (app === remoteAppId) {
      if (serverImplementation === undefined)
        return;
      let handler = serverImplementation[key];
      if (serverMiddleware) {
        for (let i = serverMiddleware.length - 1;i >= 0; i--) {
          const middlewareDef = serverMiddleware[i];
          const middleware = middlewareDef[key];
          if (!middleware)
            continue;
          const ref = handler;
          handler = (data2) => middleware(data2, ref);
        }
      }
      if (!handler)
        return;
      const dataSchema = serverSchema?.optionsMap.get(key);
      if (!dataSchema)
        return;
      const data = dataSchema.shape.request.parse(dataAny);
      const timeoutId = setTimeout(async () => {
        await transport.send(`${event}:processing`, {}, { localAppId, remoteAppId });
      }, 50);
      const response = await handler(data);
      clearTimeout(timeoutId);
      await transport.send(event, response, { localAppId, remoteAppId });
      return response;
    }
  }, {
    localAppId,
    remoteAppId
  });
  const cleanupFunctions = [];
  if (transport.cleanup)
    cleanupFunctions.push(transport.cleanup);
  if (cleanupRecv)
    cleanupFunctions.push(cleanupRecv);
  client._cleanupTransport = () => {
    for (const fn of cleanupFunctions)
      fn();
  };
  return client;
}
var MESSAGE_TAG = "typed-transport";
function postmessageTransport({
  remoteWindow,
  targetOrigins
}) {
  return {
    send(event, data, { remoteAppId, localAppId }) {
      if (!remoteWindow) {
        throw new Error("No remote window. Is the SDK running on a server without a global window object?");
      }
      console.debug("[typed-transport] postmessagetransport. Sending event", event, data);
      console.debug("[typed-transport] postmessagetransport. target origins =", targetOrigins);
      for (const targetOrigin of targetOrigins) {
        console.debug("[typed-transport] remoteWindow.postMessage", {
          event,
          libId: MESSAGE_TAG,
          receiverAppId: remoteAppId,
          senderAppId: localAppId
        });
        console.debug("[typed-transport] remoteWindow.postMessage.data", data, JSON.stringify(data));
        remoteWindow.postMessage({
          event,
          data,
          libId: MESSAGE_TAG,
          receiverAppId: remoteAppId,
          senderAppId: localAppId
        }, {
          targetOrigin
        });
      }
      if (targetOrigins.length === 0) {
        remoteWindow.postMessage({
          event,
          data,
          libId: MESSAGE_TAG,
          receiverAppId: remoteAppId,
          senderAppId: localAppId
        });
      }
    },
    recv(handler, { localAppId, remoteAppId }) {
      const listener = (event) => {
        console.debug("[typed-transport] postmessagetransport. Receiving event", event);
        if (event.source !== remoteWindow || !targetOrigins.includes(event.origin) && targetOrigins.length > 0 || !event.data || !event.data.event || event.data.libId !== MESSAGE_TAG || event.data.receiverAppId !== localAppId || event.data.senderAppId !== remoteAppId) {
          return;
        }
        handler(event.data.event, event.data.data);
      };
      if (typeof window === "undefined") {
        return;
      }
      window.addEventListener("message", listener);
      return () => {
        window.removeEventListener("message", listener);
      };
    }
  };
}
var transport_exports = {};
__export2(transport_exports, {
  MESSAGE_TAG: () => MESSAGE_TAG,
  TimeoutError: () => TimeoutError,
  createHandler: () => createHandler,
  createSDK: () => createSDK,
  postmessageTransport: () => postmessageTransport
});
function createHandler({
  schema,
  forceCompleteness,
  handlers
}) {
  let eventHandler;
  createSDK({
    clientSchema: undefined,
    serverSchema: schema,
    localAppId: "client",
    remoteAppId: "server",
    forceCompleteness,
    serverImplementation: handlers,
    transport: {
      send() {},
      recv(handler) {
        eventHandler = handler;
      }
    }
  });
  return (event, data) => {
    return eventHandler(`server:${event}`, data);
  };
}
var whopServerSchema = z.discriminatedUnion("event", [
  z.object({
    event: z.literal("ping"),
    request: z.literal("ping"),
    response: z.literal("pong")
  }),
  z.object({
    event: z.literal("getTopLevelUrlData"),
    request: z.object({}).optional(),
    response: z.object({
      companyRoute: z.string(),
      experienceRoute: z.string(),
      experienceId: z.string(),
      viewType: z.enum(["app", "admin", "analytics", "preview"]),
      baseHref: z.string(),
      fullHref: z.string()
    })
  }),
  z.object({
    event: z.literal("openExternalUrl"),
    request: z.object({
      newTab: z.boolean().optional(),
      url: z.string()
    }),
    response: z.literal("ok")
  }),
  z.object({
    event: z.literal("onHrefChange"),
    request: z.object({
      href: z.string()
    }),
    response: z.literal("ok")
  }),
  z.object({
    event: z.literal("inAppPurchase"),
    request: z.object({
      id: z.string().optional(),
      planId: z.string()
    }),
    response: withError(z.object({
      sessionId: z.string(),
      receiptId: z.string()
    }), z.string())
  }),
  z.object({
    event: z.literal("closeApp"),
    request: z.null(),
    response: z.literal("ok")
  }),
  z.object({
    event: z.literal("openHelpChat"),
    request: z.null(),
    response: z.literal("ok")
  }),
  z.object({
    event: z.literal("getColorTheme"),
    request: z.void(),
    response: frostedV2Theme
  }),
  z.object({
    event: z.literal("earliestUnreadNotification"),
    request: z.object({
      experienceId: z.string()
    }),
    response: z.object({
      externalId: z.string()
    }).nullable()
  }),
  z.object({
    event: z.literal("markExperienceRead"),
    request: z.object({
      experienceId: z.string(),
      notificationExternalId: z.string().optional()
    }),
    response: z.literal("ok")
  }),
  z.object({
    event: z.literal("performHaptic"),
    request: z.object({
      type: z.enum(["selection", "impact", "notification"]),
      style: z.enum(["light", "medium", "heavy"])
    }),
    response: z.literal("ok")
  })
]);

// ../../node_modules/@whop/react/dist/iframe/provider.mjs
var import_react4 = __toESM(require_react(), 1);

// ../../node_modules/@whop/react/dist/util/use-lazy-ref.mjs
var import_react3 = __toESM(require_react(), 1);
var none = Symbol("none");

// ../../node_modules/@whop/react/dist/iframe/provider.mjs
"use client";
// ../../node_modules/@whop/react/dist/iframe/use-iframe-sdk.mjs
var import_react5 = __toESM(require_react(), 1);
// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder;
var decoder = new TextDecoder;
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers) {
    buf.set(buffer, i);
    i += buffer.length;
  }
  return buf;
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/base64.js
function decodeBase64(encoded) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(encoded);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0;i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/util/base64url.js
function decode(input) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(typeof input === "string" ? input : decoder.decode(input), {
      alphabet: "base64url"
    });
  }
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js
class JOSEError extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(message, options) {
    super(message, options);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

class JWTClaimValidationFailed extends JOSEError {
  static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  claim;
  reason;
  payload;
  constructor(message, payload, claim = "unspecified", reason = "unspecified") {
    super(message, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
}

class JWTExpired extends JOSEError {
  static code = "ERR_JWT_EXPIRED";
  code = "ERR_JWT_EXPIRED";
  claim;
  reason;
  payload;
  constructor(message, payload, claim = "unspecified", reason = "unspecified") {
    super(message, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
}

class JOSEAlgNotAllowed extends JOSEError {
  static code = "ERR_JOSE_ALG_NOT_ALLOWED";
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
}

class JOSENotSupported extends JOSEError {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
}
class JWSInvalid extends JOSEError {
  static code = "ERR_JWS_INVALID";
  code = "ERR_JWS_INVALID";
}

class JWTInvalid extends JOSEError {
  static code = "ERR_JWT_INVALID";
  code = "ERR_JWT_INVALID";
}
class JWSSignatureVerificationFailed extends JOSEError {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(message = "signature verification failed", options) {
    super(message, options);
  }
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usage) {
  if (usage && !key.usages.includes(usage)) {
    throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
  }
}
function checkSigCryptoKey(key, alg, usage) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!isAlgorithm(key.algorithm, "Ed25519"))
        throw unusable("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usage);
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/invalid_key_input.js
function message(msg, actual, ...types) {
  types = types.filter(Boolean);
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else if (types.length === 2) {
    msg += `one of type ${types[0]} or ${types[1]}.`;
  } else {
    msg += `of type ${types[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalid_key_input_default = (actual, ...types) => {
  return message("Key must be ", actual, ...types);
};
function withAlg(alg, actual, ...types) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_key_like.js
function isCryptoKey(key) {
  return key?.[Symbol.toStringTag] === "CryptoKey";
}
function isKeyObject(key) {
  return key?.[Symbol.toStringTag] === "KeyObject";
}
var is_key_like_default = (key) => {
  return isCryptoKey(key) || isKeyObject(key);
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_disjoint.js
var is_disjoint_default = (...headers) => {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
var is_object_default = (input) => {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/check_key_length.js
var check_key_length_default = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
        case "EdDSA":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var jwk_to_key_default = async (jwk) => {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const keyData = { ...jwk };
  delete keyData.alg;
  delete keyData.use;
  return crypto.subtle.importKey("jwk", keyData, algorithm, jwk.ext ?? (jwk.d ? false : true), jwk.key_ops ?? keyUsages);
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/key/import.js
async function importJWK(jwk, alg, options) {
  if (!is_object_default(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  let ext;
  alg ??= jwk.alg;
  ext ??= options?.extractable ?? jwk.ext;
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode(jwk.k);
    case "RSA":
      if ("oth" in jwk && jwk.oth !== undefined) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg, ext });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/validate_crit.js
var validate_crit_default = (Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) => {
  if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === undefined) {
    return new Set;
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== undefined) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === undefined) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/validate_algorithms.js
var validate_algorithms_default = (option, algorithms) => {
  if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return;
  }
  return new Set(algorithms);
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_jwk.js
function isJWK(key) {
  return is_object_default(key) && typeof key.kty === "string";
}
function isPrivateJWK(key) {
  return key.kty !== "oct" && typeof key.d === "string";
}
function isPublicJWK(key) {
  return key.kty !== "oct" && typeof key.d === "undefined";
}
function isSecretJWK(key) {
  return key.kty === "oct" && typeof key.k === "string";
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/normalize_key.js
var cache;
var handleJWK = async (key, jwk, alg, freeze = false) => {
  cache ||= new WeakMap;
  let cached = cache.get(key);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const cryptoKey = await jwk_to_key_default({ ...jwk, alg });
  if (freeze)
    Object.freeze(key);
  if (!cached) {
    cache.set(key, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var handleKeyObject = (keyObject, alg) => {
  cache ||= new WeakMap;
  let cached = cache.get(keyObject);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const isPublic = keyObject.type === "public";
  const extractable = isPublic ? true : false;
  let cryptoKey;
  if (keyObject.asymmetricKeyType === "x25519") {
    switch (alg) {
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : ["deriveBits"]);
  }
  if (keyObject.asymmetricKeyType === "ed25519") {
    if (alg !== "EdDSA" && alg !== "Ed25519") {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
      isPublic ? "verify" : "sign"
    ]);
  }
  if (keyObject.asymmetricKeyType === "rsa") {
    let hash;
    switch (alg) {
      case "RSA-OAEP":
        hash = "SHA-1";
        break;
      case "RS256":
      case "PS256":
      case "RSA-OAEP-256":
        hash = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "RSA-OAEP-384":
        hash = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "RSA-OAEP-512":
        hash = "SHA-512";
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg.startsWith("RSA-OAEP")) {
      return keyObject.toCryptoKey({
        name: "RSA-OAEP",
        hash
      }, extractable, isPublic ? ["encrypt"] : ["decrypt"]);
    }
    cryptoKey = keyObject.toCryptoKey({
      name: alg.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
      hash
    }, extractable, [isPublic ? "verify" : "sign"]);
  }
  if (keyObject.asymmetricKeyType === "ec") {
    const nist = new Map([
      ["prime256v1", "P-256"],
      ["secp384r1", "P-384"],
      ["secp521r1", "P-521"]
    ]);
    const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
    if (!namedCurve) {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg === "ES256" && namedCurve === "P-256") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES384" && namedCurve === "P-384") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES512" && namedCurve === "P-521") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg.startsWith("ECDH-ES")) {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDH",
        namedCurve
      }, extractable, isPublic ? [] : ["deriveBits"]);
    }
  }
  if (!cryptoKey) {
    throw new TypeError("given KeyObject instance cannot be used for this algorithm");
  }
  if (!cached) {
    cache.set(keyObject, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var normalize_key_default = async (key, alg) => {
  if (key instanceof Uint8Array) {
    return key;
  }
  if (isCryptoKey(key)) {
    return key;
  }
  if (isKeyObject(key)) {
    if (key.type === "secret") {
      return key.export();
    }
    if ("toCryptoKey" in key && typeof key.toCryptoKey === "function") {
      try {
        return handleKeyObject(key, alg);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
      }
    }
    let jwk = key.export({ format: "jwk" });
    return handleJWK(key, jwk, alg);
  }
  if (isJWK(key)) {
    if (key.k) {
      return decode(key.k);
    }
    return handleJWK(key, key, alg, true);
  }
  throw new Error("unreachable");
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/check_key_type.js
var tag = (key) => key?.[Symbol.toStringTag];
var jwkMatchesOp = (alg, key, usage) => {
  if (key.use !== undefined) {
    let expected;
    switch (usage) {
      case "sign":
      case "verify":
        expected = "sig";
        break;
      case "encrypt":
      case "decrypt":
        expected = "enc";
        break;
    }
    if (key.use !== expected) {
      throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
    }
  }
  if (key.alg !== undefined && key.alg !== alg) {
    throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
  }
  if (Array.isArray(key.key_ops)) {
    let expectedKeyOp;
    switch (true) {
      case (usage === "sign" || usage === "verify"):
      case alg === "dir":
      case alg.includes("CBC-HS"):
        expectedKeyOp = usage;
        break;
      case alg.startsWith("PBES2"):
        expectedKeyOp = "deriveBits";
        break;
      case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
        if (!alg.includes("GCM") && alg.endsWith("KW")) {
          expectedKeyOp = usage === "encrypt" ? "wrapKey" : "unwrapKey";
        } else {
          expectedKeyOp = usage;
        }
        break;
      case (usage === "encrypt" && alg.startsWith("RSA")):
        expectedKeyOp = "wrapKey";
        break;
      case usage === "decrypt":
        expectedKeyOp = alg.startsWith("RSA") ? "unwrapKey" : "deriveBits";
        break;
    }
    if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
      throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
    }
  }
  return true;
};
var symmetricTypeCheck = (alg, key, usage) => {
  if (key instanceof Uint8Array)
    return;
  if (isJWK(key)) {
    if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
      return;
    throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
  }
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (isJWK(key)) {
    switch (usage) {
      case "decrypt":
      case "sign":
        if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a private JWK`);
      case "encrypt":
      case "verify":
        if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a public JWK`);
    }
  }
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key"));
  }
  if (key.type === "secret") {
    throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (key.type === "public") {
    switch (usage) {
      case "sign":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
      case "decrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
      default:
        break;
    }
  }
  if (key.type === "private") {
    switch (usage) {
      case "verify":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
      case "encrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
      default:
        break;
    }
  }
};
var check_key_type_default = (alg, key, usage) => {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(alg) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck(alg, key, usage);
  } else {
    asymmetricTypeCheck(alg, key, usage);
  }
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/subtle_dsa.js
var subtle_dsa_default = (alg, algorithm) => {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: parseInt(alg.slice(-3), 10) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "Ed25519":
    case "EdDSA":
      return { name: "Ed25519" };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/get_sign_verify_key.js
var get_sign_verify_key_default = async (alg, key, usage) => {
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    return crypto.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  checkSigCryptoKey(key, alg, usage);
  return key;
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/verify.js
var verify_default = async (alg, key, signature, data) => {
  const cryptoKey = await get_sign_verify_key_default(alg, key, "verify");
  check_key_length_default(alg, cryptoKey);
  const algorithm = subtle_dsa_default(alg, cryptoKey.algorithm);
  try {
    return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!is_object_default(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === undefined && jws.header === undefined) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== undefined && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === undefined) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== undefined && !is_object_default(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode(jws.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const k = await normalize_key_default(key, alg);
  const verified = await verify_default(alg, k, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed;
  }
  let payload;
  if (b64) {
    try {
      payload = decode(jws.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== undefined) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== undefined) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key: k };
  }
  return result;
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/epoch.js
var epoch_default = (date) => Math.floor(date.getTime() / 1000);

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/secs.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs_default = (str) => {
  const matched = REGEX.exec(str);
  if (!matched || matched[4] && matched[1]) {
    throw new TypeError("Invalid time period format");
  }
  const value = parseFloat(matched[2]);
  const unit = matched[3].toLowerCase();
  let numericDate;
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      numericDate = Math.round(value);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      numericDate = Math.round(value * minute);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      numericDate = Math.round(value * hour);
      break;
    case "day":
    case "days":
    case "d":
      numericDate = Math.round(value * day);
      break;
    case "week":
    case "weeks":
    case "w":
      numericDate = Math.round(value * week);
      break;
    default:
      numericDate = Math.round(value * year);
      break;
  }
  if (matched[1] === "-" || matched[4] === "ago") {
    return -numericDate;
  }
  return numericDate;
};

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/jwt_claims_set.js
function validateInput(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
var normalizeTyp = (value) => {
  if (value.includes("/")) {
    return value.toLowerCase();
  }
  return `application/${value.toLowerCase()}`;
};
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
  let payload;
  try {
    payload = JSON.parse(decoder.decode(encodedPayload));
  } catch {}
  if (!is_object_default(payload)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== undefined)
    presenceCheck.push("iat");
  if (audience !== undefined)
    presenceCheck.push("aud");
  if (subject !== undefined)
    presenceCheck.push("sub");
  if (issuer !== undefined)
    presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs_default(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch_default(currentDate || new Date);
  if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
  }
  if (payload.nbf !== undefined) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
    }
  }
  if (payload.exp !== undefined) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
    if (age - tolerance > max) {
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
    }
  }
  return payload;
}

class JWTClaimsBuilder {
  #payload;
  constructor(payload) {
    if (!is_object_default(payload)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    this.#payload = structuredClone(payload);
  }
  data() {
    return encoder.encode(JSON.stringify(this.#payload));
  }
  get iss() {
    return this.#payload.iss;
  }
  set iss(value) {
    this.#payload.iss = value;
  }
  get sub() {
    return this.#payload.sub;
  }
  set sub(value) {
    this.#payload.sub = value;
  }
  get aud() {
    return this.#payload.aud;
  }
  set aud(value) {
    this.#payload.aud = value;
  }
  set jti(value) {
    this.#payload.jti = value;
  }
  set nbf(value) {
    if (typeof value === "number") {
      this.#payload.nbf = validateInput("setNotBefore", value);
    } else if (value instanceof Date) {
      this.#payload.nbf = validateInput("setNotBefore", epoch_default(value));
    } else {
      this.#payload.nbf = epoch_default(new Date) + secs_default(value);
    }
  }
  set exp(value) {
    if (typeof value === "number") {
      this.#payload.exp = validateInput("setExpirationTime", value);
    } else if (value instanceof Date) {
      this.#payload.exp = validateInput("setExpirationTime", epoch_default(value));
    } else {
      this.#payload.exp = epoch_default(new Date) + secs_default(value);
    }
  }
  set iat(value) {
    if (typeof value === "undefined") {
      this.#payload.iat = epoch_default(new Date);
    } else if (value instanceof Date) {
      this.#payload.iat = validateInput("setIssuedAt", epoch_default(value));
    } else if (typeof value === "string") {
      this.#payload.iat = validateInput("setIssuedAt", epoch_default(new Date) + secs_default(value));
    } else {
      this.#payload.iat = validateInput("setIssuedAt", value);
    }
  }
}

// ../../node_modules/@whop/react/node_modules/@whop/api/node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const verified = await compactVerify(jwt, key, options);
  if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = validateClaimsSet(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
// ../../node_modules/@whop/react/node_modules/@whop/api/dist/chunk-WYHVVPYG.mjs
var import_js_md5 = __toESM(require_md5(), 1);
var import_tiny_typed_emitter = __toESM(require_lib(), 1);
var __defProp3 = Object.defineProperty;
var __export3 = (target, all) => {
  for (var name in all)
    __defProp3(target, name, { get: all[name], enumerable: true });
};
var USER_TOKEN_HEADER_NAME = "x-whop-user-token";
var USER_TOKEN_VERIFICATION_KEY = '{"kty":"EC","x":"rz8a8vxvexHC0TLT91g7llOdDOsNuYiGEfic4Qhni-E","y":"zH0QblKYToexd5PEIMGXPVJS9AB5smKrW4S_TbiXrOs","crv":"P-256"}';
function getUserToken(tokenOrHeadersOrRequest) {
  if (typeof tokenOrHeadersOrRequest === "string")
    return tokenOrHeadersOrRequest;
  if (tokenOrHeadersOrRequest instanceof Headers)
    return tokenOrHeadersOrRequest.get(USER_TOKEN_HEADER_NAME);
  if (tokenOrHeadersOrRequest instanceof Request)
    return tokenOrHeadersOrRequest.headers.get(USER_TOKEN_HEADER_NAME);
  return null;
}
function makeUserTokenVerifier(options) {
  return async function verifyUserToken2(tokenOrHeadersOrRequest, overrideOptions) {
    return await internalVerifyUserToken(tokenOrHeadersOrRequest, {
      ...options,
      ...overrideOptions
    });
  };
}
async function internalVerifyUserToken(tokenOrHeadersOrRequest, options) {
  try {
    const tokenString = getUserToken(tokenOrHeadersOrRequest);
    if (!tokenString) {
      throw new Error("Whop user token not found. If you are the app developer, ensure you are developing in the whop.com iframe and have the dev proxy enabled.");
    }
    const jwkString = options.publicKey ?? USER_TOKEN_VERIFICATION_KEY;
    const key = await importJWK(JSON.parse(jwkString), "ES256").catch(() => {
      throw new Error("Invalid public key provided to verifyUserToken");
    });
    const token = await jwtVerify(tokenString, key, {
      issuer: "urn:whopcom:exp-proxy"
    }).catch((_e) => {
      throw new Error("Invalid user token provided to verifyUserToken");
    });
    if (!(token.payload.sub && token.payload.aud) || Array.isArray(token.payload.aud)) {
      throw new Error("Invalid user token provided to verifyUserToken");
    }
    if (options.appId && token.payload.aud !== options.appId)
      throw new Error("Invalid app id provided to verifyUserToken");
    return {
      appId: token.payload.aud,
      userId: token.payload.sub
    };
  } catch (e) {
    if (options.dontThrow) {
      return null;
    }
    throw e;
  }
}
var proto_exports = {};
__export3(proto_exports, {
  bounties_app: () => index_bounties_app_exports,
  calendar_bookings_app: () => index_calendar_bookings_app_exports,
  common: () => index_common_exports,
  content_app: () => index_content_app_exports,
  content_rewards_app: () => index_content_rewards_app_exports,
  courses_app: () => index_courses_app_exports,
  events_app: () => index_events_app_exports,
  experience: () => index_experience_exports,
  games: () => index_games_exports,
  google: () => index_google_exports,
  wheel_app: () => index_wheel_app_exports
});
var index_common_exports = {};
__export3(index_common_exports, {
  AccessPassExperience_UpsellType: () => AccessPassExperience_UpsellType,
  AccessPass_AccessPassType: () => AccessPass_AccessPassType,
  AccessPass_Visibility: () => AccessPass_Visibility,
  AccessType: () => AccessType,
  ActiveUserBucket_UserBucketType: () => ActiveUserBucket_UserBucketType,
  AppBuild_Status: () => AppBuild_Status,
  AppViewType: () => AppViewType,
  ChannelSubscriptionState_DisconnectionReason: () => ChannelSubscriptionState_DisconnectionReason,
  Channel_Type: () => Channel_Type,
  ConnectedId_Type: () => ConnectedId_Type,
  Entry_EntryStatus: () => Entry_EntryStatus,
  FeedChatFeed_MemberPermissionType: () => FeedChatFeed_MemberPermissionType,
  FeedDmsFeedMember_DmsFeedMemberStatus: () => FeedDmsFeedMember_DmsFeedMemberStatus,
  FeedDmsFeedMember_NotificationPreference: () => FeedDmsFeedMember_NotificationPreference,
  FeedDmsPost_MessageType: () => FeedDmsPost_MessageType,
  FeedForumFeed_EmailNotificationPreferenceType: () => FeedForumFeed_EmailNotificationPreferenceType,
  FeedForumFeed_LayoutType: () => FeedForumFeed_LayoutType,
  FeedForumFeed_MemberPermissionType: () => FeedForumFeed_MemberPermissionType,
  FeedForumPost_ForumPostType: () => FeedForumPost_ForumPostType,
  FeedLivestreamFeed_MemberPermissionType: () => FeedLivestreamFeed_MemberPermissionType,
  FeedReaction_ReactionType: () => FeedReaction_ReactionType,
  GetTopExperiencesByActiveUsersRequest_AppFilter: () => GetTopExperiencesByActiveUsersRequest_AppFilter,
  GoFetchNotifications_NotifyingEntityType: () => GoFetchNotifications_NotifyingEntityType,
  MuxAsset_MuxAssetStatus: () => MuxAsset_MuxAssetStatus,
  Plan_PlanType: () => Plan_PlanType,
  Plan_ReleaseMethod: () => Plan_ReleaseMethod,
  Plan_Visibility: () => Plan_Visibility,
  Platform: () => Platform,
  Position_Type: () => Position_Type,
  PostReactionCount_ReactionType: () => PostReactionCount_ReactionType,
  ProductSurface_DiscoverSection: () => ProductSurface_DiscoverSection,
  ProductSurface_FeedTab: () => ProductSurface_FeedTab,
  ProductSurface_SurfaceType: () => ProductSurface_SurfaceType,
  ProductSurface_ViewContext: () => ProductSurface_ViewContext,
  Purchase_ReleaseMethod: () => Purchase_ReleaseMethod,
  ResourceType: () => ResourceType,
  UserType: () => UserType,
  User_PlatformRole: () => User_PlatformRole
});
var UserType = {
  UNKNOWN_TYPE: "UNKNOWN_TYPE",
  HUMAN: "HUMAN",
  SYSTEM: "SYSTEM",
  AGENT: "AGENT",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var User_PlatformRole = {
  UNKNOWN_ROLE: "UNKNOWN_ROLE",
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  TRUST_AND_SAFETY_MANAGER: "TRUST_AND_SAFETY_MANAGER",
  MANAGER: "MANAGER",
  SUPPORT: "SUPPORT",
  TESTER: "TESTER",
  SEO_MANAGER: "SEO_MANAGER",
  TEMPLATE_USER: "TEMPLATE_USER",
  MARKETPLACE_MANAGER: "MARKETPLACE_MANAGER",
  DEVELOPER: "DEVELOPER",
  FINANCE_MANAGER: "FINANCE_MANAGER",
  RESOLUTION_CENTER_MANAGER: "RESOLUTION_CENTER_MANAGER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AppViewType = {
  APP_VIEW_TYPE_UNKNOWN: "APP_VIEW_TYPE_UNKNOWN",
  APP_VIEW_TYPE_HUB: "APP_VIEW_TYPE_HUB",
  APP_VIEW_TYPE_DASH: "APP_VIEW_TYPE_DASH",
  APP_VIEW_TYPE_ANALYTICS: "APP_VIEW_TYPE_ANALYTICS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessType = {
  UNKNOWN_ACCESS_TYPE: "UNKNOWN_ACCESS_TYPE",
  NO_ACCESS: "NO_ACCESS",
  CUSTOMER: "CUSTOMER",
  ADMIN: "ADMIN",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Platform = {
  UNKNOWN: "UNKNOWN",
  WEB: "WEB",
  IOS: "IOS",
  ANDROID: "ANDROID",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AppBuild_Status = {
  STATUS_UNKNOWN: "STATUS_UNKNOWN",
  STATUS_DRAFT: "STATUS_DRAFT",
  STATUS_PENDING: "STATUS_PENDING",
  STATUS_APPROVED: "STATUS_APPROVED",
  STATUS_REJECTED: "STATUS_REJECTED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPass_Visibility = {
  VISIBILITY_UNKNOWN: "VISIBILITY_UNKNOWN",
  VISIBLE: "VISIBLE",
  HIDDEN: "HIDDEN",
  ARCHIVED: "ARCHIVED",
  QUICK_LINK: "QUICK_LINK",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPass_AccessPassType = {
  ACCESS_PASS_TYPE_UNKNOWN: "ACCESS_PASS_TYPE_UNKNOWN",
  REGULAR: "REGULAR",
  APP: "APP",
  EXPERIENCE_UPSELL: "EXPERIENCE_UPSELL",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_Visibility = {
  VISIBILITY_UNKNOWN: "VISIBILITY_UNKNOWN",
  VISIBLE: "VISIBLE",
  HIDDEN: "HIDDEN",
  ARCHIVED: "ARCHIVED",
  QUICK_LINK: "QUICK_LINK",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_ReleaseMethod = {
  RELEASE_METHOD_UNKNOWN: "RELEASE_METHOD_UNKNOWN",
  BUY_NOW: "BUY_NOW",
  WAITLIST: "WAITLIST",
  RAFFLE: "RAFFLE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_PlanType = {
  PLAN_TYPE_UNKNOWN: "PLAN_TYPE_UNKNOWN",
  RENEWAL: "RENEWAL",
  ONE_TIME: "ONE_TIME",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Entry_EntryStatus = {
  ENTRY_STATUS_UNKNOWN: "ENTRY_STATUS_UNKNOWN",
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  DENIED: "DENIED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPassExperience_UpsellType = {
  UPSELL_TYPE_UNKNOWN: "UPSELL_TYPE_UNKNOWN",
  BEFORE_CHECKOUT: "BEFORE_CHECKOUT",
  AFTER_CHECKOUT: "AFTER_CHECKOUT",
  ONLY_IN_WHOP: "ONLY_IN_WHOP",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Purchase_ReleaseMethod = {
  UNKNOWN: "UNKNOWN",
  BUY_NOW: "BUY_NOW",
  WAITLIST: "WAITLIST",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ConnectedId_Type = {
  UNKNOWN: "UNKNOWN",
  ANONYMOUS: "ANONYMOUS",
  USER: "USER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Channel_Type = {
  UNKNOWN: "UNKNOWN",
  EXPERIENCE: "EXPERIENCE",
  NOTIFICATIONS: "NOTIFICATIONS",
  DMS: "DMS",
  USER: "USER",
  EVERYONE: "EVERYONE",
  AUTHENTICATED: "AUTHENTICATED",
  ANONYMOUS: "ANONYMOUS",
  PUBLIC: "PUBLIC",
  ACCESS_PASS: "ACCESS_PASS",
  APP: "APP",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ChannelSubscriptionState_DisconnectionReason = {
  UNKNOWN: "UNKNOWN",
  NO_ACCESS: "NO_ACCESS",
  REQUESTED_DISCONNECT: "REQUESTED_DISCONNECT",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Position_Type = {
  UNKNOWN: "UNKNOWN",
  MOUSE: "MOUSE",
  PLAYER: "PLAYER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsPost_MessageType = {
  UNKNOWN_TYPE: "UNKNOWN_TYPE",
  REGULAR: "REGULAR",
  SYSTEM: "SYSTEM",
  AUTOMATED: "AUTOMATED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedChatFeed_MemberPermissionType = {
  UNKNOWN: "UNKNOWN",
  NONE: "NONE",
  EVERYONE: "EVERYONE",
  MEMBERS: "MEMBERS",
  ADMINS: "ADMINS",
  PRODUCT_OWNERS: "PRODUCT_OWNERS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedLivestreamFeed_MemberPermissionType = {
  UNKNOWN: "UNKNOWN",
  NONE: "NONE",
  EVERYONE: "EVERYONE",
  ADMINS: "ADMINS",
  PRODUCT_OWNERS: "PRODUCT_OWNERS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsFeedMember_DmsFeedMemberStatus = {
  UNKNOWN_STATUS: "UNKNOWN_STATUS",
  REQUESTED: "REQUESTED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsFeedMember_NotificationPreference = {
  UNKNOWN_PREFERENCE: "UNKNOWN_PREFERENCE",
  ALL: "ALL",
  MENTIONS: "MENTIONS",
  NONE: "NONE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedReaction_ReactionType = {
  UNKNOWN: "UNKNOWN",
  LIKE: "LIKE",
  EMOJI: "EMOJI",
  VIEW: "VIEW",
  VOTE: "VOTE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_MemberPermissionType = {
  UNKNOWN_PERMISSION: "UNKNOWN_PERMISSION",
  EVERYONE: "EVERYONE",
  ADMINS: "ADMINS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_LayoutType = {
  UNKNOWN_LAYOUT: "UNKNOWN_LAYOUT",
  FEED: "FEED",
  BLOG: "BLOG",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_EmailNotificationPreferenceType = {
  UNKNOWN_PREFERENCE: "UNKNOWN_PREFERENCE",
  ALL_ADMIN_POSTS: "ALL_ADMIN_POSTS",
  ONLY_WEEKLY_SUMMARY: "ONLY_WEEKLY_SUMMARY",
  NONE: "NONE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var MuxAsset_MuxAssetStatus = {
  UNKNOWN: "UNKNOWN",
  UPLOADING: "UPLOADING",
  CREATED: "CREATED",
  READY: "READY",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var PostReactionCount_ReactionType = {
  UNKNOWN: "UNKNOWN",
  LIKE: "LIKE",
  EMOJI: "EMOJI",
  VIEW: "VIEW",
  VOTE: "VOTE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumPost_ForumPostType = {
  UNKNOWN_TYPE: "UNKNOWN_TYPE",
  REGULAR: "REGULAR",
  AUTOMATED: "AUTOMATED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var GoFetchNotifications_NotifyingEntityType = {
  UNKNOWN: "UNKNOWN",
  GENERIC: "GENERIC",
  EXPERIENCE: "EXPERIENCE",
  COMPANY: "COMPANY",
  COMPANY_TEAM: "COMPANY_TEAM",
  ACCESS_PASS: "ACCESS_PASS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_ViewContext = {
  VIEW_CTX_UNKNOWN: "VIEW_CTX_UNKNOWN",
  VIEW_CTX_WHOP: "VIEW_CTX_WHOP",
  VIEW_CTX_HOME_FEED: "VIEW_CTX_HOME_FEED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_DiscoverSection = {
  DISCOVER_UNKNOWN: "DISCOVER_UNKNOWN",
  DISCOVER_LEADERBOARDS: "DISCOVER_LEADERBOARDS",
  DISCOVER_FOR_YOU: "DISCOVER_FOR_YOU",
  DISCOVER_EXPLORE: "DISCOVER_EXPLORE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_FeedTab = {
  FEED_TAB_UNKNOWN: "FEED_TAB_UNKNOWN",
  FEED_TAB_HOME: "FEED_TAB_HOME",
  FEED_TAB_EARN: "FEED_TAB_EARN",
  FEED_TAB_CHAT: "FEED_TAB_CHAT",
  FEED_TAB_LEARN: "FEED_TAB_LEARN",
  FEED_TAB_CALENDAR: "FEED_TAB_CALENDAR",
  FEED_TAB_PLAY: "FEED_TAB_PLAY",
  FEED_TAB_INTEGRATIONS: "FEED_TAB_INTEGRATIONS",
  FEED_TAB_TOOLS: "FEED_TAB_TOOLS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_SurfaceType = {
  UNKNOWN: "UNKNOWN",
  EXPERIENCE: "EXPERIENCE",
  WHOP: "WHOP",
  CREATOR_DASHBOARD: "CREATOR_DASHBOARD",
  AFFILIATE_DASHBOARD: "AFFILIATE_DASHBOARD",
  DISCOVER: "DISCOVER",
  HOME_FEED: "HOME_FEED",
  MESSAGES: "MESSAGES",
  PROFILE: "PROFILE",
  NOTIFICATIONS: "NOTIFICATIONS",
  USER_SETTINGS: "USER_SETTINGS",
  CHECKOUT: "CHECKOUT",
  AUTH: "AUTH",
  OTHER: "OTHER",
  USER_ONBOARDING: "USER_ONBOARDING",
  LEADERBOARD: "LEADERBOARD",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ActiveUserBucket_UserBucketType = {
  UNKNOWN: "UNKNOWN",
  EXPERIENCE: "EXPERIENCE",
  WHOP: "WHOP",
  STORE_PAGE: "STORE_PAGE",
  MESSAGES: "MESSAGES",
  HOME_FEED: "HOME_FEED",
  DISCOVER: "DISCOVER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var GetTopExperiencesByActiveUsersRequest_AppFilter = {
  ALL: "ALL",
  LIVESTREAMS: "LIVESTREAMS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ResourceType = {
  RESOURCE_UNKNOWN: "RESOURCE_UNKNOWN",
  RESOURCE_BOT: "RESOURCE_BOT",
  RESOURCE_ACCESS_PASS: "RESOURCE_ACCESS_PASS",
  RESOURCE_EXPERIENCE: "RESOURCE_EXPERIENCE",
  RESOURCE_USER: "RESOURCE_USER",
  RESOURCE_EXPERIENCE_PREVIEW_CONTENT: "RESOURCE_EXPERIENCE_PREVIEW_CONTENT",
  RESOURCE_APP: "RESOURCE_APP",
  RESOURCE_FORUM_FEED: "RESOURCE_FORUM_FEED",
  RESOURCE_UNIVERSAL_POST: "RESOURCE_UNIVERSAL_POST",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_google_exports = {};
__export3(index_google_exports, {
  protobuf: () => index_google_protobuf_exports
});
var index_google_protobuf_exports = {};
__export3(index_google_protobuf_exports, {
  NullValue: () => NullValue
});
var NullValue = {
  NULL_VALUE: "NULL_VALUE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_calendar_bookings_app_exports = {};
var index_bounties_app_exports = {};
__export3(index_bounties_app_exports, {
  BountySubmission_BountySubmissionStatus: () => BountySubmission_BountySubmissionStatus,
  Bounty_BountyRewardUnit: () => Bounty_BountyRewardUnit,
  Bounty_BountyStatus: () => Bounty_BountyStatus
});
var Bounty_BountyStatus = {
  UNKNOWN_STATUS: "UNKNOWN_STATUS",
  PUBLISHED: "PUBLISHED",
  ARCHIVED: "ARCHIVED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Bounty_BountyRewardUnit = {
  UNKNOWN_REWARD_UNIT: "UNKNOWN_REWARD_UNIT",
  PER_SUBMISSION: "PER_SUBMISSION",
  PER_VIEW: "PER_VIEW",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var BountySubmission_BountySubmissionStatus = {
  UNKNOWN_STATUS: "UNKNOWN_STATUS",
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  DENIED: "DENIED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_content_app_exports = {};
var index_content_rewards_app_exports = {};
__export3(index_content_rewards_app_exports, {
  ContentPlatform: () => ContentPlatform,
  ContentRewardsCampaign_Category: () => ContentRewardsCampaign_Category,
  ContentRewardsCampaign_ContentType: () => ContentRewardsCampaign_ContentType,
  ContentRewardsCampaign_Status: () => ContentRewardsCampaign_Status,
  ContentRewardsSubmission_Status: () => ContentRewardsSubmission_Status
});
var ContentPlatform = {
  UNKNOWN_PLATFORM: "UNKNOWN_PLATFORM",
  INSTAGRAM: "INSTAGRAM",
  TIKTOK: "TIKTOK",
  X: "X",
  YOUTUBE: "YOUTUBE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_Status = {
  UNKNOWN: "UNKNOWN",
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  EXPIRED: "EXPIRED",
  ARCHIVED: "ARCHIVED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_ContentType = {
  UNKNOWN_CONTENT_TYPE: "UNKNOWN_CONTENT_TYPE",
  UGC: "UGC",
  CLIPPING: "CLIPPING",
  FACELESS: "FACELESS",
  OTHER_CONTENT_TYPE: "OTHER_CONTENT_TYPE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_Category = {
  UNKNOWN_CATEGORY: "UNKNOWN_CATEGORY",
  CREATOR: "CREATOR",
  BRAND: "BRAND",
  INFLUENCER: "INFLUENCER",
  STREAMER: "STREAMER",
  MUSICIAN: "MUSICIAN",
  OTHER: "OTHER",
  ECOMMERCE: "ECOMMERCE",
  LOGO: "LOGO",
  MUSIC: "MUSIC",
  PODCAST: "PODCAST",
  SOFTWARE: "SOFTWARE",
  STREAM: "STREAM",
  ENTERTAINMENT: "ENTERTAINMENT",
  PRODUCTS: "PRODUCTS",
  PERSONAL_BRAND: "PERSONAL_BRAND",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsSubmission_Status = {
  UNKNOWN: "UNKNOWN",
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
  FLAGGED: "FLAGGED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_courses_app_exports = {};
var index_events_app_exports = {};
__export3(index_events_app_exports, {
  Event_LocationType: () => Event_LocationType,
  Event_RecurringRule: () => Event_RecurringRule
});
var Event_LocationType = {
  UNKNOWN_LOCATION_TYPE: "UNKNOWN_LOCATION_TYPE",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  ZOOM: "ZOOM",
  GOOGLE_MEET: "GOOGLE_MEET",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Event_RecurringRule = {
  UNKNOWN_RECURRING_RULE: "UNKNOWN_RECURRING_RULE",
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_wheel_app_exports = {};
__export3(index_wheel_app_exports, {
  Spin_SpinStatus: () => Spin_SpinStatus
});
var Spin_SpinStatus = {
  UNKNOWN_SPIN_STATUS: "UNKNOWN_SPIN_STATUS",
  WON: "WON",
  LOST: "LOST",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_experience_exports = {};
var index_games_exports = {};
__export3(index_games_exports, {
  quizzes: () => index_games_quizzes_exports
});
var index_games_quizzes_exports = {};
__export3(index_games_quizzes_exports, {
  HostCommand_StatusCommand: () => HostCommand_StatusCommand,
  QuizStatus: () => QuizStatus
});
var QuizStatus = {
  UNKNOWN: "UNKNOWN",
  WAITING_FOR_PLAYERS: "WAITING_FOR_PLAYERS",
  SHOW_QUESTION: "SHOW_QUESTION",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  QUESTION_RESULT: "QUESTION_RESULT",
  QUESTION_LEADERBOARD: "QUESTION_LEADERBOARD",
  GAME_RESULT: "GAME_RESULT",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var HostCommand_StatusCommand = {
  UNKNOWN: "UNKNOWN",
  NEXT: "NEXT",
  END_GAME: "END_GAME",
  GO_BACK_TO_LOBBY: "GO_BACK_TO_LOBBY",
  SKIP_TO_END_RESULTS: "SKIP_TO_END_RESULTS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var RetryError = class extends Error {
  constructor(message2, errors, maxRetries) {
    super(message2);
    this.errors = errors;
    this.maxRetries = maxRetries;
    this.name = "RetryError";
  }
};
async function retry(fn, maxRetries, signal, ...args) {
  let tries = 0;
  const errors = [];
  while (tries < maxRetries) {
    signal?.throwIfAborted();
    try {
      const res = await fn(...args);
      return res;
    } catch (error) {
      errors.push(error);
      tries++;
    }
  }
  for (const error of errors) {
    console.error(error);
  }
  throw new RetryError("Failed to retry", errors, maxRetries);
}
var uploadTasks = [];
var workerCount = 0;
var maxWorkers = 10;
async function uploadWorker(uploadPart) {
  if (workerCount >= maxWorkers) {
    return;
  }
  workerCount++;
  while (uploadTasks.length > 0) {
    const task = uploadTasks.shift();
    if (!task) {
      continue;
    }
    try {
      const etag = await retry(uploadPart, 10, task.task.signal, task.task);
      task.resolve({ etag, partNumber: task.task.partNumber });
    } catch (e) {
      task.reject(e);
    }
  }
  workerCount--;
}
function uploadParts(tasks, uploadPart, priority = false) {
  const promises = tasks.map((task) => {
    return new Promise((resolve, reject) => {
      if (priority) {
        uploadTasks.unshift({ task, resolve, reject });
      } else {
        uploadTasks.push({ task, resolve, reject });
      }
    });
  });
  for (let i = 0;i < Math.min(tasks.length, maxWorkers); i++) {
    uploadWorker(uploadPart);
  }
  return Promise.all(promises);
}
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
async function handleUpload({ data, ...preparedFile }, {
  onProgress,
  signal,
  uploadPart
}) {
  if (preparedFile.multipart) {
    const loaded = Array(preparedFile.multipartUploadUrls.length).fill(0);
    const result = await uploadParts(preparedFile.multipartUploadUrls.map((part, index) => ({
      ...part,
      fullData: data,
      onProgress: (event) => {
        loaded[index] = event.loaded;
        const total = sum(...loaded);
        onProgress?.(Math.round(total / data.size * 100));
      },
      signal
    })), uploadPart);
    return result;
  }
  await uploadParts([
    {
      url: preparedFile.uploadUrl,
      fullData: data,
      partNumber: 1,
      headers: preparedFile.headers,
      onProgress: (event) => {
        onProgress?.(Math.round(event.loaded / data.size * 100));
      },
      signal
    }
  ], uploadPart, true);
  return [];
}
function getMediaType(data) {
  switch (true) {
    case data.type.startsWith("image/"):
      return "image";
    case data.type.startsWith("video/"):
      return "video";
    case data.type.startsWith("audio/"):
      return "audio";
    default:
      return "other";
  }
}
function makeUploadAttachmentFunction({
  uploadPart
}) {
  return async function uploadAttachment(input, { onProgress, signal } = {}) {
    const preparedAttachment = "record" in input && "file" in input ? await this.prepareAttachmentForUpload(input.file, input.record) : await input;
    const result = await handleUpload(preparedAttachment, {
      onProgress,
      signal,
      uploadPart
    });
    const mediaType = getMediaType(preparedAttachment.data);
    if (preparedAttachment.multipart) {
      await this.attachments.processAttachment({
        directUploadId: preparedAttachment.id,
        mediaType,
        multipartUploadId: preparedAttachment.multipartUploadId,
        multipartParts: result
      });
    } else {
      await this.attachments.processAttachment({
        directUploadId: preparedAttachment.id,
        mediaType
      });
    }
    const attachment = await this.analyzeAttachment(preparedAttachment.id, {
      signal
    });
    if (!attachment) {
      throw new Error("Failed to analyze Attachment");
    }
    return {
      directUploadId: preparedAttachment.id,
      record: preparedAttachment.record,
      attachment
    };
  };
}
async function analyzeAttachment(signedId, opts) {
  while (!opts?.signal?.aborted) {
    const attachment = await this.attachments.getAttachment({ id: signedId }, { signal: opts?.signal }).catch(() => null);
    if (attachment) {
      return attachment;
    }
  }
}
var MULTIPART_UPLOAD_CHUNK_SIZE = 5 * 1024 * 1024;
var withAwaitableParams = (fn) => {
  return (...args) => {
    const casted = args;
    const hasPromises = casted.some((arg) => arg instanceof Promise);
    if (hasPromises) {
      return new Promise((resolve, reject) => {
        return Promise.all(casted).then((args2) => {
          return fn(...args2);
        }).then(resolve).catch(reject);
      });
    }
    return fn(...args);
  };
};
var encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function b64Raw(arrayBuffer) {
  let base64 = "";
  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;
  let a;
  let b;
  let c;
  let d;
  let chunk;
  for (let i = 0;i < mainLength; i = i + 3) {
    chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
    a = (chunk & 16515072) >> 18;
    b = (chunk & 258048) >> 12;
    c = (chunk & 4032) >> 6;
    d = chunk & 63;
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];
    a = (chunk & 252) >> 2;
    b = (chunk & 3) << 4;
    base64 += `${encodings[a]}${encodings[b]}==`;
  } else if (byteRemainder === 2) {
    chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
    a = (chunk & 64512) >> 10;
    b = (chunk & 1008) >> 4;
    c = (chunk & 15) << 2;
    base64 += `${encodings[a]}${encodings[b]}${encodings[c]}=`;
  }
  return base64;
}
var b64 = withAwaitableParams(b64Raw);
async function md5(stream) {
  const hasher = import_js_md5.md5.create();
  await stream.pipeTo(new WritableStream({
    write(chunk) {
      hasher.update(chunk);
    }
  }));
  return hasher.arrayBuffer();
}
async function prepareAttachmentForUpload(data, record) {
  const isMultipart = data.size > MULTIPART_UPLOAD_CHUNK_SIZE;
  const mediaDirectUpload = await this.attachments.uploadMedia({
    byteSizeV2: data.size.toString(),
    record,
    filename: data instanceof File ? data.name : crypto.randomUUID(),
    contentType: data.type,
    checksum: await b64(md5(data.stream())),
    multipart: isMultipart
  });
  if (isMultipart) {
    if (!mediaDirectUpload?.multipartUploadId || !mediaDirectUpload.multipartUploadUrls) {
      throw new Error("Failed to prepare file");
    }
    return {
      data,
      id: mediaDirectUpload.id,
      multipartUploadUrls: mediaDirectUpload.multipartUploadUrls,
      multipartUploadId: mediaDirectUpload.multipartUploadId,
      record,
      multipart: true
    };
  }
  if (!mediaDirectUpload?.id || !mediaDirectUpload.uploadUrl) {
    throw new Error("Failed to prepare file");
  }
  return {
    data,
    id: mediaDirectUpload.id,
    uploadUrl: mediaDirectUpload.uploadUrl,
    headers: mediaDirectUpload.headers,
    record,
    multipart: false
  };
}
function partialFileSdkExtensions(baseSdk) {
  const prepareAttachmentForUpload2 = prepareAttachmentForUpload.bind(baseSdk);
  const analyzeAttachment2 = analyzeAttachment.bind(baseSdk);
  return {
    prepareAttachmentForUpload: prepareAttachmentForUpload2,
    analyzeAttachment: analyzeAttachment2
  };
}
function fileSdkExtensions(baseSdk, uploadAttachmentFn) {
  const partial = partialFileSdkExtensions(baseSdk);
  const uploadAttachment = uploadAttachmentFn.bind({
    ...baseSdk,
    ...partial
  });
  return {
    ...partial,
    uploadAttachment
  };
}
function getSdk(requester) {
  return {
    accessPasses: {
      getAccessPass(variables, options) {
        return requester("whop-sdk-ts-client/sha256:daea5c9cf3e5e30ef0fd9eaad8ea852ffdbd0e0088ff3ad05aacb6a761b7c6f9", "getAccessPass", "query", variables, options).then((res) => res.accessPass);
      }
    },
    attachments: {
      getAttachment(variables, options) {
        return requester("whop-sdk-ts-client/sha256:07f48fb0c1292fda5a8dd5f54b5d1b637635a87b6012769819ebcf7795a045ba", "getAttachment", "query", variables, options).then((res) => res.attachment);
      },
      processAttachment(variables, options) {
        return requester("whop-sdk-ts-client/sha256:396c5803051b3c9bcedd3ce310505a4f57a6b94bc190e7142e897d9aa5036ece", "processAttachment", "mutation", { input: variables }, options).then((res) => res.mediaAnalyzeAttachment);
      },
      uploadMedia(variables, options) {
        return requester("whop-sdk-ts-client/sha256:a3d06ed16e52126d96aae83cad3400471246f37fc275e4c8f4836c98bf8e9d59", "uploadMedia", "mutation", { input: variables }, options).then((res) => res.mediaDirectUpload);
      }
    },
    courses: {
      getCourse(variables, options) {
        return requester("whop-sdk-ts-client/sha256:a70e69bec7574d2b4498d2bee86bd97adb87480599cbceeca8f63135078fd5c9", "getCourse", "query", variables, options).then((res) => res.course);
      }
    },
    experiences: {
      getExperience(variables, options) {
        return requester("whop-sdk-ts-client/sha256:114eb7b7c8403ffbe75a0c74a26ac50b5367e183a16ba64eebf4a43d5466bb4e", "getExperience", "query", variables, options).then((res) => res.experience);
      },
      listUsersForExperience(variables, options) {
        return requester("whop-sdk-ts-client/sha256:85c827d8660dc2a97e8b930e213b83493ae132c00988e0f03e02c5dc99559a5a", "listUsersForExperience", "query", variables, options).then((res) => res.publicExperience);
      }
    },
    forums: {
      listForumPostsFromForum(variables, options) {
        return requester("whop-sdk-ts-client/sha256:97a7d797f3a5f6f83bf4628cc7c586d529b90e54c0a8e193493a55b4ad05df46", "listForumPostsFromForum", "query", variables, options).then((res) => res.feedPosts);
      }
    },
    messages: {
      listMessagesFromChat(variables, options) {
        return requester("whop-sdk-ts-client/sha256:5fdbf50fe489888e5b0a98e9fe6170584bf47ab38f87d1e0b7fce8f523513894", "listMessagesFromChat", "query", variables, options).then((res) => res.feedPosts);
      }
    },
    users: {
      getCurrentUser(variables, options) {
        return requester("whop-sdk-ts-client/sha256:9f7cc9ff353a2778e55b674cfd5737a7dcaff19be9ac13d6f79aabd5d8ef69ff", "getCurrentUser", "query", variables, options).then((res) => res.viewer);
      },
      getUserLedgerAccount(variables, options) {
        return requester("whop-sdk-ts-client/sha256:d7eeaf0a388395edb82220877e72a7fc91d1f06a6d89f1cfa5e56bb400d2aa49", "getUserLedgerAccount", "query", variables, options).then((res) => res.viewer);
      },
      getUser(variables, options) {
        return requester("whop-sdk-ts-client/sha256:d8022374c6b0eb0445781342a14c9bffafd776cee4e282cb76e31af8c017d33e", "getUser", "query", variables, options).then((res) => res.publicUser);
      }
    }
  };
}
var DEFAULT_API_ORIGIN = "https://api.whop.com";
var GQLNetworkError = class extends Error {
  constructor(e) {
    const message2 = e instanceof Error ? e.message : typeof e === "string" ? e : "Unknown network error";
    super(message2);
    if (e instanceof Error)
      this.stack = e.stack;
  }
};
var GQLRequestError = class extends Error {
  statusCode;
  constructor(statusCode, message2) {
    super(message2);
    this.statusCode = statusCode;
  }
  isUnauthorized() {
    return this.statusCode === 401;
  }
  isForbidden() {
    return this.statusCode === 403;
  }
  isNotFound() {
    return this.statusCode === 404;
  }
  isServerError() {
    return this.statusCode >= 500;
  }
};
var GQLError = class extends Error {
  errors;
  constructor(errors) {
    super(errors[0].message);
    this.errors = errors;
  }
};
async function graphqlFetch(url, operationId, operationName, operationType, variables, headersInit = {}) {
  try {
    const body = {
      operationId,
      operationType,
      operationName,
      variables
    };
    const headers = new Headers(headersInit);
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    const urlObject = addOperationNameToUrl(url, operationName, operationId, operationType);
    const response = await fetch(urlObject, {
      method: "POST",
      body: JSON.stringify(body),
      headers
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new GQLRequestError(response.status, errorMessage);
    }
    const data = await response.json();
    if (data.errors) {
      throw new GQLError(data.errors);
    }
    return data.data;
  } catch (e) {
    throw new GQLNetworkError(e);
  }
}
function addOperationNameToUrl(url, name, operationId, operationType) {
  const urlObject = new URL(url);
  let pathname = urlObject.pathname;
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  pathname += `/${name}`;
  urlObject.pathname = pathname;
  const [clientName, opId] = operationId.split("/");
  urlObject.searchParams.set("id", opId);
  urlObject.searchParams.set("client", clientName);
  urlObject.searchParams.set("type", operationType);
  return urlObject;
}
var WhopWebsocketClientBase = class extends import_tiny_typed_emitter.TypedEmitter {
  websocket = null;
  failedConnectionAttempts = 0;
  status = "disconnected";
  wantsToBeConnected = false;
  makeWebsocket() {
    throw new Error("Not implemented in base class");
  }
  connect() {
    if (this.websocket) {
      this.disconnect();
    }
    this.wantsToBeConnected = true;
    this.setStatus("connecting");
    const websocket = this.makeWebsocket();
    this.websocket = websocket;
    websocket.onopen = () => {
      this.setStatus("connected");
    };
    websocket.onmessage = (event) => {
      try {
        const message2 = JSON.parse(event.data);
        this.emit("message", message2);
        if (message2.appMessage) {
          this.emit("appMessage", message2.appMessage);
        }
      } catch (error) {
        console.error("[WhopWebsocketClient] Error parsing message", event.data);
      }
    };
    websocket.onerror = (event) => {
      console.error("[WhopWebsocketClient] Websocket error", event);
      this.setStatus("disconnected");
    };
    websocket.onclose = (event) => {
      this.setStatus("disconnected");
    };
    return () => {
      this.disconnect();
    };
  }
  disconnect() {
    if (this.websocket) {
      this.websocket.onopen = null;
      this.websocket.onmessage = null;
      this.websocket.onerror = null;
      this.websocket.onclose = null;
      this.websocket.close();
      this.websocket = null;
    }
    this.wantsToBeConnected = false;
  }
  send(message2) {
    if (!this.websocket) {
      throw new Error("Websocket not connected");
    }
    this.websocket.send(JSON.stringify(message2));
  }
  broadcast({
    message: message2,
    target
  }) {
    this.send({
      broadcastAppMessage: {
        channel: convertBroadcastTargetToProtoChannel(target),
        json: message2
      }
    });
  }
  setStatus(status) {
    if (status === this.status)
      return;
    this.status = status;
    if (status === "disconnected") {
      const backoff = this.calculateBackoff();
      this.failedConnectionAttempts++;
      setTimeout(() => {
        if (this.wantsToBeConnected) {
          this.connect();
        }
      }, backoff);
      this.emit("disconnect");
    }
    if (status === "connected") {
      this.failedConnectionAttempts = 0;
      this.emit("connect");
    }
    this.emit("connectionStatus", status);
  }
  calculateBackoff() {
    return Math.min(50 * 2 ** this.failedConnectionAttempts, 1000 * 60);
  }
};
function convertBroadcastTargetToProtoChannel(target) {
  if (target === "everyone") {
    return {
      type: "APP",
      id: "[app_id]"
    };
  }
  if ("experienceId" in target) {
    return {
      type: "APP",
      id: `[app_id]_${target.experienceId}`
    };
  }
  if ("customId" in target) {
    return {
      type: "APP",
      id: `[app_id]_c_${target.customId}`
    };
  }
  throw new Error("Invalid broadcast target");
}
var WhopWebsocketClientBrowser = class extends WhopWebsocketClientBase {
  options;
  constructor(options) {
    super();
    this.options = options;
  }
  makeWebsocket() {
    const path = "/_whop/ws/v1/websockets/connect";
    const searchParams = new URLSearchParams;
    addChannelIds(searchParams, "join_experience", this.options.joinExperience);
    addChannelIds(searchParams, "join_custom", this.options.joinCustom);
    addChannelIds(searchParams, "join_public", this.options.joinPublic);
    const url = new URL(path, window.location.origin);
    url.protocol = url.protocol.replace("http", "ws");
    url.search = searchParams.toString();
    return new WebSocket(url.toString());
  }
};
function addChannelIds(searchParams, key, channels) {
  if (!channels) {
    return;
  }
  if (typeof channels === "string" && channels.length > 0) {
    searchParams.set(key, channels);
    return;
  }
  for (const channel of channels) {
    searchParams.append(key, channel);
  }
}
function makeConnectToWebsocketFunction() {
  return function connectToWebsocket(options) {
    return new WhopWebsocketClientBrowser(options);
  };
}
function makeWhopClientSdk({
  uploadFile
}) {
  return function WhopClientSdk(options) {
    const baseSdk = getSdk(makeRequester({
      apiPath: "/_whop/public-graphql",
      ...options
    }));
    const fileSdk = fileSdkExtensions(baseSdk, uploadFile);
    const websocketClient = makeConnectToWebsocketFunction();
    const sdk = {
      ...baseSdk,
      attachments: {
        ...baseSdk.attachments,
        ...fileSdk
      },
      websockets: {
        client: websocketClient
      }
    };
    return sdk;
  };
}
function makeRequester(apiOptions) {
  const endpoint = getEndpoint(apiOptions);
  return async function fetcher(operationId, operationName, operationType, vars, options) {
    const headers = new Headers(options?.headers);
    return graphqlFetch(endpoint, operationId, operationName, operationType, vars, headers);
  };
}
function getEndpoint(apiOptions) {
  if (typeof document === "undefined") {
    throw new Error("WhopApi.client() is only available in the browser");
  }
  const url = new URL(apiOptions.apiPath ?? "/public-graphql", apiOptions.apiOrigin ?? window.location.origin);
  return url.href;
}
function getSdk2(requester) {
  return {
    accessPasses: {
      getAccessPass(variables, options) {
        return requester("whop-sdk-ts-server/sha256:daea5c9cf3e5e30ef0fd9eaad8ea852ffdbd0e0088ff3ad05aacb6a761b7c6f9", "getAccessPass", "query", variables, options).then((res) => res.accessPass);
      }
    },
    access: {
      checkIfUserHasAccessToAccessPass(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a5ee1715113ab68b87dcfd5b578b6c20d1ca1fe50d8c0e2ec43e462a9b86632d", "checkIfUserHasAccessToAccessPass", "query", variables, options).then((res) => res.hasAccessToAccessPass);
      },
      checkIfUserHasAccessToCompany(variables, options) {
        return requester("whop-sdk-ts-server/sha256:b894321dc004894f993e91f5e7451554b0ae8af7da950a5c84ac69180599edc2", "checkIfUserHasAccessToCompany", "query", variables, options).then((res) => res.hasAccessToCompany);
      },
      checkIfUserHasAccessToExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:b16d7fe717171fb936dfb6de679558e149f5070bbe25ade44e38af83c330ad71", "checkIfUserHasAccessToExperience", "query", variables, options).then((res) => res.hasAccessToExperience);
      }
    },
    apps: {
      createAppBuild(variables, options) {
        return requester("whop-sdk-ts-server/sha256:221275dcd40898079c1e7bc1510b364a487581d6cdfc1a9524da74f2f82689cc", "createAppBuild", "mutation", { input: variables }, options).then((res) => res.createAppBuild);
      }
    },
    attachments: {
      getAttachment(variables, options) {
        return requester("whop-sdk-ts-server/sha256:07f48fb0c1292fda5a8dd5f54b5d1b637635a87b6012769819ebcf7795a045ba", "getAttachment", "query", variables, options).then((res) => res.attachment);
      },
      processAttachment(variables, options) {
        return requester("whop-sdk-ts-server/sha256:396c5803051b3c9bcedd3ce310505a4f57a6b94bc190e7142e897d9aa5036ece", "processAttachment", "mutation", { input: variables }, options).then((res) => res.mediaAnalyzeAttachment);
      },
      uploadMedia(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a3d06ed16e52126d96aae83cad3400471246f37fc275e4c8f4836c98bf8e9d59", "uploadMedia", "mutation", { input: variables }, options).then((res) => res.mediaDirectUpload);
      }
    },
    companies: {
      getCompanyLedgerAccount(variables, options) {
        return requester("whop-sdk-ts-server/sha256:38c83c1105b29a010208830b29d38af3d87a885b9c54a3da65d6dd2749128773", "getCompanyLedgerAccount", "query", variables, options).then((res) => res.company);
      },
      getWaitlistEntriesForCompany(variables, options) {
        return requester("whop-sdk-ts-server/sha256:5ad1e4c5932d68eda92af2d709ecf6ad0afc8fb29e1ef2bd1448f61650b637d3", "getWaitlistEntriesForCompany", "query", variables, options).then((res) => res.company);
      }
    },
    courses: {
      getCourse(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a70e69bec7574d2b4498d2bee86bd97adb87480599cbceeca8f63135078fd5c9", "getCourse", "query", variables, options).then((res) => res.course);
      }
    },
    experiences: {
      getExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:114eb7b7c8403ffbe75a0c74a26ac50b5367e183a16ba64eebf4a43d5466bb4e", "getExperience", "query", variables, options).then((res) => res.experience);
      },
      listAccessPassesForExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:699621f62be7675bfaf9fc49cb6d7abfe244bf691aee274cb492036f0b59bddc", "listAccessPassesForExperience", "query", variables, options).then((res) => res.experience);
      },
      listExperiences(variables, options) {
        return requester("whop-sdk-ts-server/sha256:6ca8515118d4710204bb2e32ea020bb98de8ea1cada4929ecfe7cae606cf6e79", "listExperiences", "query", variables, options).then((res) => res.company);
      },
      listUsersForExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:85c827d8660dc2a97e8b930e213b83493ae132c00988e0f03e02c5dc99559a5a", "listUsersForExperience", "query", variables, options).then((res) => res.publicExperience);
      }
    },
    forums: {
      createForumPost(variables, options) {
        return requester("whop-sdk-ts-server/sha256:e6253ed15def017eef4bc2e2f8b01ecd9cf480b5c54fffed439d0afe01a864f2", "createForumPost", "mutation", { input: variables }, options).then((res) => res.createForumPost);
      },
      findOrCreateForum(variables, options) {
        return requester("whop-sdk-ts-server/sha256:5219219796ebdeb29023d098bd9498cf8c64b3536dc9d42cbc4e19708e0b317d", "findOrCreateForum", "mutation", { input: variables }, options).then((res) => res.createForum);
      },
      listForumPostsFromForum(variables, options) {
        return requester("whop-sdk-ts-server/sha256:97a7d797f3a5f6f83bf4628cc7c586d529b90e54c0a8e193493a55b4ad05df46", "listForumPostsFromForum", "query", variables, options).then((res) => res.feedPosts);
      }
    },
    messages: {
      findOrCreateChat(variables, options) {
        return requester("whop-sdk-ts-server/sha256:f69684c08f79192b7a4722a3c24a347fd0074e04e1c940517e54b52a9c27f40c", "findOrCreateChat", "mutation", { input: variables }, options).then((res) => res.createChat);
      },
      listDirectMessageConversations(variables, options) {
        return requester("whop-sdk-ts-server/sha256:ea4457aace3d29d8c376dd9de3629cee00d4a76ff0fc9b9d51b6ffeab1cc6ead", "listDirectMessageConversations", "query", variables, options).then((res) => res.myDmsChannelsV2);
      },
      listMessagesFromChat(variables, options) {
        return requester("whop-sdk-ts-server/sha256:5fdbf50fe489888e5b0a98e9fe6170584bf47ab38f87d1e0b7fce8f523513894", "listMessagesFromChat", "query", variables, options).then((res) => res.feedPosts);
      },
      sendDirectMessageToUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:b1b27b67e3c776813439ace71cb979587cd16c221155a303fcf8e4c7ad8beafa", "sendDirectMessageToUser", "mutation", variables, options).then((res) => res.sendMessage);
      },
      sendMessageToChat(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a3b2e7765662a63fb57a7e61da5081b719fb75ba60560b9059ba4fe856499ac3", "sendMessageToChat", "mutation", variables, options).then((res) => res.sendMessage);
      }
    },
    notifications: {
      sendPushNotification(variables, options) {
        return requester("whop-sdk-ts-server/sha256:6239cbdb659f0698ed81ca9533740337b4d2d44e25e22297188d7d1e1a7037d2", "sendPushNotification", "mutation", { input: variables }, options).then((res) => res.sendNotification);
      }
    },
    payments: {
      chargeUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:2392cef9bb6e08d243f102a52c4a6a6e6bd9371e2fced2ad598b2dc14685af81", "chargeUser", "mutation", { input: variables }, options).then((res) => res.chargeUser);
      },
      createCheckoutSession(variables, options) {
        return requester("whop-sdk-ts-server/sha256:498eba2f4b9b6b8fe4ed5f93423af054ea1c4995bf2f3258089c40b68a4919e8", "createCheckoutSession", "mutation", { input: variables }, options).then((res) => res.createCheckoutSession);
      },
      payUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:d8cbac8b275a7c41e05ab4daa01084b0e54c31c6b5375261f8aee241e5f6c794", "payUser", "mutation", { input: variables }, options).then((res) => res.transferFunds);
      }
    },
    users: {
      getCurrentUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:9f7cc9ff353a2778e55b674cfd5737a7dcaff19be9ac13d6f79aabd5d8ef69ff", "getCurrentUser", "query", variables, options).then((res) => res.viewer);
      },
      getUserLedgerAccount(variables, options) {
        return requester("whop-sdk-ts-server/sha256:d7eeaf0a388395edb82220877e72a7fc91d1f06a6d89f1cfa5e56bb400d2aa49", "getUserLedgerAccount", "query", variables, options).then((res) => res.viewer);
      },
      getUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:d8022374c6b0eb0445781342a14c9bffafd776cee4e282cb76e31af8c017d33e", "getUser", "query", variables, options).then((res) => res.publicUser);
      }
    }
  };
}
var WhopOAuth = class _WhopOAuth {
  constructor(appId, appApiKey, apiOrigin = "https://api.whop.com") {
    this.appId = appId;
    this.appApiKey = appApiKey;
    this.apiOrigin = apiOrigin;
  }
  static OAUTH_URL = "https://whop.com/oauth/";
  getAuthorizationUrl({
    state = crypto.randomUUID(),
    redirectUri,
    scope = ["read_user"]
  }) {
    const oAuthUrl = new URL(_WhopOAuth.OAUTH_URL);
    oAuthUrl.searchParams.set("client_id", this.appId);
    oAuthUrl.searchParams.set("response_type", "code");
    oAuthUrl.searchParams.set("scope", scope.join(" "));
    oAuthUrl.searchParams.set("state", state);
    if (redirectUri instanceof URL) {
      oAuthUrl.searchParams.set("redirect_uri", redirectUri.toString());
    } else {
      oAuthUrl.searchParams.set("redirect_uri", redirectUri);
    }
    return {
      url: oAuthUrl.toString(),
      state
    };
  }
  async exchangeCode({
    code,
    redirectUri
  }) {
    const resolvedRedirectUri = redirectUri instanceof URL ? redirectUri.toString() : redirectUri;
    const tokensEndpoint = new URL("/api/oauth/token", this.apiOrigin);
    const tokensResponse = await fetch(tokensEndpoint, {
      method: "POST",
      body: JSON.stringify({
        code,
        client_id: this.appId,
        client_secret: this.appApiKey,
        grant_type: "authorization_code",
        redirect_uri: resolvedRedirectUri
      }),
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        pragma: "no-cache"
      },
      cache: "no-store"
    });
    if (!tokensResponse.ok) {
      return {
        ok: false,
        code: tokensResponse.status,
        raw: tokensResponse
      };
    }
    const tokens = await tokensResponse.json();
    return {
      ok: true,
      tokens
    };
  }
};
var DEFAULT_WEBSOCKET_ORIGIN = "https://ws-prod.whop.com";
function sendWebsocketMessageFunction(apiOptions) {
  const origin = apiOptions.websocketOrigin ?? DEFAULT_WEBSOCKET_ORIGIN;
  const path = "/v1/websockets/send";
  const url = new URL(path, origin);
  const headers = new Headers;
  headers.set("Content-Type", "application/json");
  headers.set("Authorization", `Bearer ${apiOptions.appApiKey}`);
  return async function SendWebsocketMessage(input) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send websocket message. Code: ${response.status}. Message: ${error}`);
    }
    const data = await response.json();
    if (!data.ok) {
      throw new Error("Failed to send websocket message");
    }
  };
}
var WhopWebsocketClientServer = class extends WhopWebsocketClientBase {
  keys;
  constructor(keys) {
    super();
    this.keys = keys;
  }
  makeWebsocket() {
    const path = "/v1/websockets/connect";
    const origin = this.keys.websocketOrigin ?? DEFAULT_WEBSOCKET_ORIGIN;
    const url = new URL(path, origin);
    url.protocol = url.protocol.replace("http", "ws");
    const headers = {
      Authorization: `Bearer ${this.keys.appApiKey}`,
      "x-on-behalf-of": this.keys.onBehalfOfUserId
    };
    return new WebSocket(url, { headers });
  }
};
function makeConnectToWebsocketFunction2(options) {
  return function connectToWebsocket() {
    return new WhopWebsocketClientServer(options);
  };
}
function BaseWhopServerSdk(options, uploadFile) {
  const baseSdk = getSdk2(makeRequester2(options));
  const sendWebsocketMessage = sendWebsocketMessageFunction(options);
  const websocketClient = makeConnectToWebsocketFunction2(options);
  const fileSdk = fileSdkExtensions(baseSdk, uploadFile);
  const oauth = new WhopOAuth(options.appId, options.appApiKey, options.apiOrigin);
  const verifyUserToken2 = makeUserTokenVerifier({
    appId: options.appId,
    dontThrow: false
  });
  return {
    ...baseSdk,
    attachments: {
      ...baseSdk.attachments,
      ...fileSdk
    },
    websockets: {
      sendMessage: sendWebsocketMessage,
      client: websocketClient
    },
    oauth,
    verifyUserToken: verifyUserToken2
  };
}
function makeWhopServerSdk({
  uploadFile
}) {
  return function WhopServerSdk(options) {
    const baseSdk = BaseWhopServerSdk(options, uploadFile);
    return {
      ...baseSdk,
      withUser: (userId) => WhopServerSdk({ ...options, onBehalfOfUserId: userId }),
      withCompany: (companyId) => WhopServerSdk({ ...options, companyId })
    };
  };
}
function makeRequester2(apiOptions) {
  const endpoint = getEndpoint2(apiOptions);
  const headers = getHeaders(apiOptions);
  return async function fetcher(operationId, operationName, operationType, vars, options) {
    const customHeaders = new Headers(options?.headers);
    const actualHeaders = new Headers(headers);
    for (const [key, value] of customHeaders.entries()) {
      actualHeaders.set(key, value);
    }
    return graphqlFetch(endpoint, operationId, operationName, operationType, vars, actualHeaders);
  };
}
function getEndpoint2(apiOptions) {
  const url = new URL(apiOptions.apiPath ?? "/public-graphql", apiOptions.apiOrigin ?? DEFAULT_API_ORIGIN);
  return url.href;
}
function getHeaders(options) {
  const headers = new Headers;
  headers.set("Authorization", `Bearer ${options.appApiKey}`);
  if (options.onBehalfOfUserId)
    headers.set("x-on-behalf-of", options.onBehalfOfUserId);
  if (options.companyId)
    headers.set("x-company-id", options.companyId);
  return headers;
}

// ../../node_modules/@whop/react/node_modules/@whop/api/dist/index.node.mjs
import { request } from "https";
import { Readable } from "stream";
async function uploadPartImpl({
  url,
  fullData,
  partNumber,
  headers,
  onProgress,
  signal
}) {
  const offset = (partNumber - 1) * MULTIPART_UPLOAD_CHUNK_SIZE;
  const data = fullData.slice(offset, Math.min(offset + MULTIPART_UPLOAD_CHUNK_SIZE, fullData.size));
  signal?.throwIfAborted();
  return new Promise((resolve, reject) => {
    const fullURL = new URL(url);
    const req = request(fullURL, {
      method: "PUT",
      headers: {
        ...headers,
        host: fullURL.host,
        "content-length": data.size.toString()
      },
      signal
    });
    let uploadedBytes = 0;
    req.on("response", async (res) => {
      const statusCode = res.statusCode ?? 0;
      if (statusCode >= 200 && statusCode < 300) {
        const etag = res.headers.etag;
        if (!etag) {
          reject(new Error("Missing etag on upload response"));
          return;
        }
        resolve(etag.slice(1, -1));
      } else {
        let chunks = "";
        for await (const chunk of res) {
          chunks += chunk.toString();
        }
        reject(new Error(`Failed to upload part with ${statusCode}: ${res.statusMessage}`, { cause: chunks }));
      }
    });
    req.on("error", (error) => {
      reject(error);
    });
    req.on("drain", () => {
      onProgress?.({
        total: data.size,
        loaded: uploadedBytes
      });
    });
    Readable.fromWeb(data.stream()).on("data", (chunk) => {
      uploadedBytes += chunk.length;
      onProgress?.({
        total: data.size,
        loaded: uploadedBytes
      });
    }).pipe(req);
    onProgress?.({ total: data.size, loaded: 0 });
  });
}
var uploadFile = makeUploadAttachmentFunction({ uploadPart: uploadPartImpl });
var sdk = makeWhopClientSdk({ uploadFile });
var uploadFile2 = makeUploadAttachmentFunction({ uploadPart: uploadPartImpl });
var sdk2 = makeWhopServerSdk({ uploadFile: uploadFile2 });

// ../../node_modules/@whop/react/dist/websockets/provider.mjs
var import_react7 = __toESM(require_react(), 1);

// ../../node_modules/@whop/react/dist/websockets/context.mjs
var import_react6 = __toESM(require_react(), 1);
"use client";
var WhopWebsocketContext = import_react6.createContext({
  status: "initializing"
});

// ../../node_modules/@whop/react/dist/websockets/provider.mjs
"use client";
// ../../node_modules/@whop/react/dist/websockets/use-websocket.mjs
var import_react8 = __toESM(require_react(), 1);
"use client";
// ../../node_modules/@whop/react/dist/websockets/use-websocket-status.mjs
var import_react9 = __toESM(require_react(), 1);
"use client";
// ../../node_modules/@whop/react/dist/websockets/use-send-websocket-message.mjs
var import_react10 = __toESM(require_react(), 1);
"use client";
// ../../node_modules/@whop/react/dist/websockets/use-broadcast-websocket-message.mjs
var import_react11 = __toESM(require_react(), 1);
"use client";
// ../../node_modules/@whop/react/dist/websockets/use-on-websocket-message.mjs
var import_react12 = __toESM(require_react(), 1);
"use client";
// ../../node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React7 = __toESM(require_react(), 1);

// ../../node_modules/@radix-ui/react-primitive/dist/index.mjs
var React6 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
var exports_dist = {};
__export(exports_dist, {
  createSlottable: () => createSlottable,
  createSlot: () => createSlot,
  Slottable: () => Slottable,
  Slot: () => Slot,
  Root: () => Slot
});
var React5 = __toESM(require_react(), 1);

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React4 = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== undefined) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0;i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React4.useCallback(composeRefs(...refs), refs);
}

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React5.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React5.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React5.Children.count(newElement) > 1)
            return React5.Children.only(null);
          return React5.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ import_jsx_runtime.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React5.isValidElement(newElement) ? React5.cloneElement(newElement, undefined, newChildren) : null });
    }
    return /* @__PURE__ */ import_jsx_runtime.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
function createSlotClone(ownerName) {
  const SlotClone = React5.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React5.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React5.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React5.cloneElement(children, props2);
    }
    return React5.Children.count(children) > 1 ? React5.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ import_jsx_runtime.jsx(import_jsx_runtime.Fragment, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
  return React5.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// ../../node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node2 = React6.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ import_jsx_runtime2.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target)
    ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// ../../node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var NAME = "VisuallyHidden";
var VisuallyHidden = React7.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ import_jsx_runtime3.jsx(Primitive.span, {
    ...props,
    ref: forwardedRef,
    style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
  });
});
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;

// ../../node_modules/@radix-ui/react-context/dist/index.mjs
var React8 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React8.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context2 } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React8.useMemo(() => context2, Object.values(context2));
      return /* @__PURE__ */ import_jsx_runtime4.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context2 = React8.useContext(Context);
      if (context2)
        return context2;
      if (defaultContext !== undefined)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React8.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React8.useMemo(() => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }), [scope, contexts]);
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React8.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// ../../node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React10 = __toESM(require_react(), 1);

// ../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React9 = __toESM(require_react(), 1);
var useLayoutEffect2 = globalThis?.document ? React9.useLayoutEffect : () => {};

// ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React22 = __toESM(require_react(), 1);
var useInsertionEffect = React10[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {},
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React10.useRef(prop !== undefined);
    React10.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React10.useCallback((nextValue) => {
    if (isControlled) {
      const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
      if (value2 !== prop) {
        onChangeRef.current?.(value2);
      }
    } else {
      setUncontrolledProp(nextValue);
    }
  }, [isControlled, prop, setUncontrolledProp, onChangeRef]);
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React10.useState(defaultProp);
  const prevValueRef = React10.useRef(value);
  const onChangeRef = React10.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React10.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

// ../../node_modules/@radix-ui/react-presence/dist/index.mjs
var React23 = __toESM(require_react(), 1);
var React11 = __toESM(require_react(), 1);
"use client";
function useStateMachine(initialState, machine) {
  return React11.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React23.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React23.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React23.useState();
  const stylesRef = React23.useRef(null);
  const prevPresentRef = React23.useRef(present);
  const prevAnimationNameRef = React23.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React23.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React23.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// ../../node_modules/@radix-ui/react-id/dist/index.mjs
var React12 = __toESM(require_react(), 1);
var useReactId = React12[" useId ".trim().toString()] || (() => {
  return;
});
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React12.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId)
      setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// ../../node_modules/@radix-ui/react-direction/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var DirectionContext = React13.createContext(undefined);
var DirectionProvider = (props) => {
  const { dir, children } = props;
  return /* @__PURE__ */ import_jsx_runtime5.jsx(DirectionContext.Provider, { value: dir, children });
};

// ../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React16 = __toESM(require_react(), 1);

// ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React14 = __toESM(require_react(), 1);
function useCallbackRef(callback) {
  const callbackRef = React14.useRef(callback);
  React14.useEffect(() => {
    callbackRef.current = callback;
  });
  return React14.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React15 = __toESM(require_react(), 1);
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React15.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// ../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
"use client";
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React16.createContext({
  layers: /* @__PURE__ */ new Set,
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set,
  branches: /* @__PURE__ */ new Set
});
var DismissableLayer = React16.forwardRef((props, forwardedRef) => {
  const {
    disableOutsidePointerEvents = false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss,
    ...layerProps
  } = props;
  const context2 = React16.useContext(DismissableLayerContext);
  const [node, setNode] = React16.useState(null);
  const ownerDocument = node?.ownerDocument ?? globalThis?.document;
  const [, force] = React16.useState({});
  const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
  const layers = Array.from(context2.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [...context2.layersWithOutsidePointerEventsDisabled].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node ? layers.indexOf(node) : -1;
  const isBodyPointerEventsDisabled = context2.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [...context2.branches].some((branch) => branch.contains(target));
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside?.(event);
    onInteractOutside?.(event);
    if (!event.defaultPrevented)
      onDismiss?.();
  }, ownerDocument);
  const focusOutside = useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [...context2.branches].some((branch) => branch.contains(target));
    if (isFocusInBranch)
      return;
    onFocusOutside?.(event);
    onInteractOutside?.(event);
    if (!event.defaultPrevented)
      onDismiss?.();
  }, ownerDocument);
  useEscapeKeydown((event) => {
    const isHighestLayer = index === context2.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown?.(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  React16.useEffect(() => {
    if (!node)
      return;
    if (disableOutsidePointerEvents) {
      if (context2.layersWithOutsidePointerEventsDisabled.size === 0) {
        originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context2.layersWithOutsidePointerEventsDisabled.add(node);
    }
    context2.layers.add(node);
    dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context2.layersWithOutsidePointerEventsDisabled.size === 1) {
        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
      }
    };
  }, [node, ownerDocument, disableOutsidePointerEvents, context2]);
  React16.useEffect(() => {
    return () => {
      if (!node)
        return;
      context2.layers.delete(node);
      context2.layersWithOutsidePointerEventsDisabled.delete(node);
      dispatchUpdate();
    };
  }, [node, context2]);
  React16.useEffect(() => {
    const handleUpdate = () => force({});
    document.addEventListener(CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ import_jsx_runtime6.jsx(Primitive.div, {
    ...layerProps,
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : undefined,
      ...props.style
    },
    onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React16.forwardRef((props, forwardedRef) => {
  const context2 = React16.useContext(DismissableLayerContext);
  const ref = React16.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React16.useEffect(() => {
    const node = ref.current;
    if (node) {
      context2.branches.add(node);
      return () => {
        context2.branches.delete(node);
      };
    }
  }, [context2.branches]);
  return /* @__PURE__ */ import_jsx_runtime6.jsx(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React16.useRef(false);
  const handleClickRef = React16.useRef(() => {});
  React16.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React16.useRef(false);
  React16.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler)
    target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// ../../node_modules/@radix-ui/react-portal/dist/index.mjs
var React17 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
"use client";
var PORTAL_NAME = "Portal";
var Portal = React17.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React17.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? import_react_dom.default.createPortal(/* @__PURE__ */ import_jsx_runtime7.jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// ../../node_modules/@radix-ui/react-use-size/dist/index.mjs
var React18 = __toESM(require_react(), 1);
function useSize(element) {
  const [size, setSize] = React18.useState(undefined);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(undefined);
    }
  }, [element]);
  return size;
}

// ../../node_modules/@radix-ui/react-popper/dist/index.mjs
var React21 = __toESM(require_react(), 1);

// ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === undefined) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0;i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === undefined) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? undefined : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? undefined : platform.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? undefined : platform.getOffsetParent(elements.floating));
  const offsetScale = await (platform.isElement == null ? undefined : platform.isElement(offsetParent)) ? await (platform.getScale == null ? undefined : platform.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? undefined : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform.isElement == null ? undefined : platform.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? undefined : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? undefined : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || overflowsData.every((d) => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? undefined : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? undefined : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === undefined) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? undefined : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? undefined : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? undefined : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === undefined) {
    list = [];
  }
  if (traverseIframes === undefined) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? undefined : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === undefined) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === undefined) {
    includeScale = false;
  }
  if (isFixedStrategy === undefined) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === undefined) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache2) {
  const cachedResult = cache2.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache2.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === undefined) {
      skip = false;
    }
    if (threshold === undefined) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 0.0000001);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === undefined) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache2 = new Map;
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache2
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React19 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var isClient = typeof document !== "undefined";
var noop = function noop2() {};
var index = isClient ? import_react13.useLayoutEffect : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length;i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length;i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length;i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React19.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === undefined) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React19.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React19.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React19.useState(null);
  const [_floating, _setFloating] = React19.useState(null);
  const setReference = React19.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React19.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React19.useRef(null);
  const floatingRef = React19.useRef(null);
  const dataRef = React19.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React19.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React19.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React19.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React19.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React19.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React19.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// ../../node_modules/@radix-ui/react-arrow/dist/index.mjs
var React20 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var NAME2 = "Arrow";
var Arrow = React20.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ import_jsx_runtime8.jsx(Primitive.svg, {
    ...arrowProps,
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: props.asChild ? children : /* @__PURE__ */ import_jsx_runtime8.jsx("polygon", { points: "0,0 30,0 15,10" })
  });
});
Arrow.displayName = NAME2;
var Root2 = Arrow;

// ../../node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
"use client";
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React21.useState(null);
  return /* @__PURE__ */ import_jsx_runtime9.jsx(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React21.forwardRef((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context2 = usePopperContext(ANCHOR_NAME, __scopePopper);
  const ref = React21.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React21.useEffect(() => {
    context2.onAnchorChange(virtualRef?.current || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ import_jsx_runtime9.jsx(Primitive.div, { ...anchorProps, ref: composedRefs });
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = React21.forwardRef((props, forwardedRef) => {
  const {
    __scopePopper,
    side = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    arrowPadding = 0,
    avoidCollisions = true,
    collisionBoundary = [],
    collisionPadding: collisionPaddingProp = 0,
    sticky = "partial",
    hideWhenDetached = false,
    updatePositionStrategy = "optimized",
    onPlaced,
    ...contentProps
  } = props;
  const context2 = usePopperContext(CONTENT_NAME, __scopePopper);
  const [content, setContent] = React21.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const [arrow4, setArrow] = React21.useState(null);
  const arrowSize = useSize(arrow4);
  const arrowWidth = arrowSize?.width ?? 0;
  const arrowHeight = arrowSize?.height ?? 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter(isNotNull),
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context2.anchor
    },
    middleware: [
      offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
      avoidCollisions && shift3({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift3() : undefined,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip3({ ...detectOverflowOptions }),
      size3({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
      transformOrigin({ arrowWidth, arrowHeight }),
      hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
    ]
  });
  const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
  const handlePlaced = useCallbackRef(onPlaced);
  useLayoutEffect2(() => {
    if (isPositioned) {
      handlePlaced?.();
    }
  }, [isPositioned, handlePlaced]);
  const arrowX = middlewareData.arrow?.x;
  const arrowY = middlewareData.arrow?.y;
  const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
  const [contentZIndex, setContentZIndex] = React21.useState();
  useLayoutEffect2(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  return /* @__PURE__ */ import_jsx_runtime9.jsx("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        middlewareData.transformOrigin?.x,
        middlewareData.transformOrigin?.y
      ].join(" "),
      ...middlewareData.hide?.referenceHidden && {
        visibility: "hidden",
        pointerEvents: "none"
      }
    },
    dir: props.dir,
    children: /* @__PURE__ */ import_jsx_runtime9.jsx(PopperContentProvider, {
      scope: __scopePopper,
      placedSide,
      onArrowChange: setArrow,
      arrowX,
      arrowY,
      shouldHideArrow: cannotCenterArrow,
      children: /* @__PURE__ */ import_jsx_runtime9.jsx(Primitive.div, {
        "data-side": placedSide,
        "data-align": placedAlign,
        ...contentProps,
        ref: composedRefs,
        style: {
          ...contentProps.style,
          animation: !isPositioned ? "none" : undefined
        }
      })
    })
  });
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React21.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return /* @__PURE__ */ import_jsx_runtime9.jsx("span", {
    ref: contentContext.onArrowChange,
    style: {
      position: "absolute",
      left: contentContext.arrowX,
      top: contentContext.arrowY,
      [baseSide]: 0,
      transformOrigin: {
        top: "",
        right: "0 0",
        bottom: "center 0",
        left: "100% 0"
      }[contentContext.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: `rotate(180deg)`,
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[contentContext.placedSide],
      visibility: contentContext.shouldHideArrow ? "hidden" : undefined
    },
    children: /* @__PURE__ */ import_jsx_runtime9.jsx(Root2, {
      ...arrowProps,
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        display: "block"
      }
    })
  });
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root22 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow2 = PopperArrow;

// ../../node_modules/@radix-ui/react-tooltip/dist/index.mjs
var exports_dist3 = {};
__export(exports_dist3, {
  createTooltipScope: () => createTooltipScope,
  Trigger: () => Trigger,
  TooltipTrigger: () => TooltipTrigger,
  TooltipProvider: () => TooltipProvider,
  TooltipPortal: () => TooltipPortal,
  TooltipContent: () => TooltipContent,
  TooltipArrow: () => TooltipArrow,
  Tooltip: () => Tooltip,
  Root: () => Root3,
  Provider: () => Provider,
  Portal: () => Portal2,
  Content: () => Content2,
  Arrow: () => Arrow22
});
var React24 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
"use client";
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = React24.useRef(true);
  const isPointerInTransitRef = React24.useRef(false);
  const skipDelayTimerRef = React24.useRef(0);
  React24.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ import_jsx_runtime10.jsx(TooltipProviderContextProvider, {
    scope: __scopeTooltip,
    isOpenDelayedRef,
    delayDuration,
    onOpen: React24.useCallback(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      isOpenDelayedRef.current = false;
    }, []),
    onClose: React24.useCallback(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      skipDelayTimerRef.current = window.setTimeout(() => isOpenDelayedRef.current = true, skipDelayDuration);
    }, [skipDelayDuration]),
    isPointerInTransitRef,
    onPointerInTransitChange: React24.useCallback((inTransit) => {
      isPointerInTransitRef.current = inTransit;
    }, []),
    disableHoverableContent,
    children
  });
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = React24.useState(null);
  const contentId = useId();
  const openTimerRef = React24.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React24.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange?.(open2);
    },
    caller: TOOLTIP_NAME
  });
  const stateAttribute = React24.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React24.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React24.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React24.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React24.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  return /* @__PURE__ */ import_jsx_runtime10.jsx(Root22, { ...popperScope, children: /* @__PURE__ */ import_jsx_runtime10.jsx(TooltipContextProvider, {
    scope: __scopeTooltip,
    contentId,
    open,
    stateAttribute,
    trigger,
    onTriggerChange: setTrigger,
    onTriggerEnter: React24.useCallback(() => {
      if (providerContext.isOpenDelayedRef.current)
        handleDelayedOpen();
      else
        handleOpen();
    }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
    onTriggerLeave: React24.useCallback(() => {
      if (disableHoverableContent) {
        handleClose();
      } else {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    }, [handleClose, disableHoverableContent]),
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent,
    children
  }) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = React24.forwardRef((props, forwardedRef) => {
  const { __scopeTooltip, ...triggerProps } = props;
  const context2 = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
  const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const ref = React24.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref, context2.onTriggerChange);
  const isPointerDownRef = React24.useRef(false);
  const hasPointerMoveOpenedRef = React24.useRef(false);
  const handlePointerUp = React24.useCallback(() => isPointerDownRef.current = false, []);
  React24.useEffect(() => {
    return () => document.removeEventListener("pointerup", handlePointerUp);
  }, [handlePointerUp]);
  return /* @__PURE__ */ import_jsx_runtime10.jsx(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ import_jsx_runtime10.jsx(Primitive.button, {
    "aria-describedby": context2.open ? context2.contentId : undefined,
    "data-state": context2.stateAttribute,
    ...triggerProps,
    ref: composedRefs,
    onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
      if (event.pointerType === "touch")
        return;
      if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
        context2.onTriggerEnter();
        hasPointerMoveOpenedRef.current = true;
      }
    }),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
      context2.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    }),
    onPointerDown: composeEventHandlers(props.onPointerDown, () => {
      if (context2.open) {
        context2.onClose();
      }
      isPointerDownRef.current = true;
      document.addEventListener("pointerup", handlePointerUp, { once: true });
    }),
    onFocus: composeEventHandlers(props.onFocus, () => {
      if (!isPointerDownRef.current)
        context2.onOpen();
    }),
    onBlur: composeEventHandlers(props.onBlur, context2.onClose),
    onClick: composeEventHandlers(props.onClick, context2.onClose)
  }) });
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME2, {
  forceMount: undefined
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context2 = useTooltipContext(PORTAL_NAME2, __scopeTooltip);
  return /* @__PURE__ */ import_jsx_runtime10.jsx(PortalProvider, { scope: __scopeTooltip, forceMount, children: /* @__PURE__ */ import_jsx_runtime10.jsx(Presence, { present: forceMount || context2.open, children: /* @__PURE__ */ import_jsx_runtime10.jsx(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME2 = "TooltipContent";
var TooltipContent = React24.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
  const context2 = useTooltipContext(CONTENT_NAME2, props.__scopeTooltip);
  return /* @__PURE__ */ import_jsx_runtime10.jsx(Presence, { present: forceMount || context2.open, children: context2.disableHoverableContent ? /* @__PURE__ */ import_jsx_runtime10.jsx(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ import_jsx_runtime10.jsx(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
});
var TooltipContentHoverable = React24.forwardRef((props, forwardedRef) => {
  const context2 = useTooltipContext(CONTENT_NAME2, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME2, props.__scopeTooltip);
  const ref = React24.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React24.useState(null);
  const { trigger, onClose } = context2;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React24.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React24.useCallback((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = { x: event.clientX, y: event.clientY };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [onPointerInTransitChange]);
  React24.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React24.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React24.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return /* @__PURE__ */ import_jsx_runtime10.jsx(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var Slottable2 = createSlottable("TooltipContent");
var TooltipContentImpl = React24.forwardRef((props, forwardedRef) => {
  const {
    __scopeTooltip,
    children,
    "aria-label": ariaLabel,
    onEscapeKeyDown,
    onPointerDownOutside,
    ...contentProps
  } = props;
  const context2 = useTooltipContext(CONTENT_NAME2, __scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const { onClose } = context2;
  React24.useEffect(() => {
    document.addEventListener(TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
  }, [onClose]);
  React24.useEffect(() => {
    if (context2.trigger) {
      const handleScroll = (event) => {
        const target = event.target;
        if (target?.contains(context2.trigger))
          onClose();
      };
      window.addEventListener("scroll", handleScroll, { capture: true });
      return () => window.removeEventListener("scroll", handleScroll, { capture: true });
    }
  }, [context2.trigger, onClose]);
  return /* @__PURE__ */ import_jsx_runtime10.jsx(DismissableLayer, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose,
    children: /* @__PURE__ */ import_jsx_runtime10.jsxs(Content, {
      "data-state": context2.stateAttribute,
      ...popperScope,
      ...contentProps,
      ref: forwardedRef,
      style: {
        ...contentProps.style,
        ...{
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        }
      },
      children: [
        /* @__PURE__ */ import_jsx_runtime10.jsx(Slottable2, { children }),
        /* @__PURE__ */ import_jsx_runtime10.jsx(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: /* @__PURE__ */ import_jsx_runtime10.jsx(Root, { id: context2.contentId, role: "tooltip", children: ariaLabel || children }) })
      ]
    })
  });
});
TooltipContent.displayName = CONTENT_NAME2;
var ARROW_NAME2 = "TooltipArrow";
var TooltipArrow = React24.forwardRef((props, forwardedRef) => {
  const { __scopeTooltip, ...arrowProps } = props;
  const popperScope = usePopperScope(__scopeTooltip);
  const visuallyHiddenContentContext = useVisuallyHiddenContentContext(ARROW_NAME2, __scopeTooltip);
  return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ import_jsx_runtime10.jsx(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
});
TooltipArrow.displayName = ARROW_NAME2;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({ x: exitPoint.x - padding, y: exitPoint.y + padding }, { x: exitPoint.x + padding, y: exitPoint.y + padding });
      break;
    case "bottom":
      paddedExitPoints.push({ x: exitPoint.x - padding, y: exitPoint.y - padding }, { x: exitPoint.x + padding, y: exitPoint.y - padding });
      break;
    case "left":
      paddedExitPoints.push({ x: exitPoint.x + padding, y: exitPoint.y - padding }, { x: exitPoint.x + padding, y: exitPoint.y + padding });
      break;
    case "right":
      paddedExitPoints.push({ x: exitPoint.x - padding, y: exitPoint.y - padding }, { x: exitPoint.x - padding, y: exitPoint.y + padding });
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1;i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x)
      return -1;
    else if (a.x > b.x)
      return 1;
    else if (a.y < b.y)
      return -1;
    else if (a.y > b.y)
      return 1;
    else
      return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0;i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1;i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider;
var Root3 = Tooltip;
var Trigger = TooltipTrigger;
var Portal2 = TooltipPortal;
var Content2 = TooltipContent;
var Arrow22 = TooltipArrow;

// ../../node_modules/frosted-ui/dist/esm/helpers/radix-colors.js
var radixColorScalesRegular = [
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "brown",
  "blue",
  "orange",
  "indigo"
];
var radixColorScalesBright = [
  "sky",
  "mint",
  "yellow",
  "amber",
  "lime",
  "lemon",
  "magenta"
];
var radixColorScalesMetal = ["gold", "bronze"];
var radixColorScales = [...radixColorScalesRegular, ...radixColorScalesBright, ...radixColorScalesMetal];
var radixGrayScalePure = "gray";
var radixGrayScalesDesaturated = ["mauve", "slate", "sage", "olive", "sand"];
var radixGrayScales = [radixGrayScalePure, ...radixGrayScalesDesaturated];
function radixGetMatchingGrayScale(colorScale) {
  switch (colorScale) {
    case "tomato":
    case "red":
    case "ruby":
    case "crimson":
    case "pink":
    case "plum":
    case "purple":
    case "violet":
      return "mauve";
    case "sky":
    case "cyan":
      return "slate";
    case "teal":
    case "jade":
    case "mint":
    case "green":
      return "sage";
    case "grass":
      return "olive";
    case "yellow":
    case "amber":
    case "brown":
    case "gold":
    case "bronze":
      return "sand";
    case "iris":
    case "blue":
    case "orange":
    case "indigo":
    case "magenta":
    case "lime":
    case "lemon":
      return "gray";
  }
}

// ../../node_modules/frosted-ui/dist/esm/theme-options.js
var appearances = ["inherit", "light", "dark"];
var accentColors = [...radixColorScales, "gray"];
var grayColors = [...radixGrayScales, "auto"];
var dangerColors = ["tomato", "red", "ruby"];
var warningColors = ["yellow", "amber"];
var successColors = ["teal", "jade", "green", "grass"];
var infoColors = ["blue", "sky"];
var themePropDefs = {
  hasBackground: { type: "boolean", default: true },
  appearance: { type: "enum", values: appearances, default: "inherit" },
  accentColor: { type: "enum", values: accentColors, default: "blue" },
  grayColor: { type: "enum", values: grayColors, default: "gray" },
  dangerColor: { type: "enum", values: dangerColors, default: "red" },
  warningColor: { type: "enum", values: warningColors, default: "amber" },
  successColor: { type: "enum", values: successColors, default: "green" },
  infoColor: { type: "enum", values: infoColors, default: "sky" }
};
var themeAccentColorsGrouped = [
  {
    label: "Regulars",
    values: [...radixColorScalesRegular]
  },
  {
    label: "Brights",
    values: [...radixColorScalesBright]
  },
  { label: "Metals", values: [...radixColorScalesMetal] },
  { label: "Gray", values: ["gray"] }
];
var themeGrayColorsGrouped = [
  { label: "Pure", values: [radixGrayScalePure] },
  {
    label: "Desaturated",
    values: ["auto", ...radixGrayScalesDesaturated]
  }
];
function getMatchingGrayColor(accentColor) {
  if (accentColor === "gray")
    return "gray";
  return radixGetMatchingGrayScale(accentColor);
}

// ../../node_modules/frosted-ui/dist/esm/theme.js
var import_classnames = __toESM(require_classnames(), 1);
var React27 = __toESM(require_react(), 1);

// ../../node_modules/frosted-ui/dist/esm/use-theme-events.js
var import_react14 = __toESM(require_react(), 1);
"use client";
function validateThemeColor(key, value) {
  const validValues = themePropDefs[key].values;
  return validValues.includes(value);
}
function validateThemeOptions(detail) {
  if (typeof detail !== "object" || !detail)
    return {};
  const ret = {};
  const keysToCheck = [
    "accentColor",
    "appearance",
    "dangerColor",
    "grayColor",
    "infoColor",
    "successColor",
    "warningColor"
  ];
  for (const key of keysToCheck) {
    if (!(key in detail))
      continue;
    if (!validateThemeColor(key, detail[key])) {
      console.warn(`Invalid value for ${key}: ${detail[key]}`);
      continue;
    }
    ret[key] = detail[key];
  }
  return ret;
}
function useThemeEvents() {
  const { accentColor, appearance, dangerColor, grayColor, infoColor, successColor, warningColor, onAccentColorChange, onAppearanceChange, onDangerColorChange, onGrayColorChange, onInfoColorChange, onSuccessColorChange, onWarningColorChange } = useThemeContext();
  import_react14.useEffect(() => {
    const listener = (e) => {
      if (e instanceof CustomEvent) {
        const d = validateThemeOptions(e.detail);
        if (d.appearance)
          onAppearanceChange(d.appearance);
        if (d.accentColor)
          onAccentColorChange(d.accentColor);
        if (d.grayColor)
          onGrayColorChange(d.grayColor);
        if (d.infoColor)
          onInfoColorChange(d.infoColor);
        if (d.successColor)
          onSuccessColorChange(d.successColor);
        if (d.warningColor)
          onWarningColorChange(d.warningColor);
        if (d.dangerColor)
          onDangerColorChange(d.dangerColor);
      }
    };
    document.documentElement.addEventListener("frosted-ui:set-theme", listener);
    const event = new CustomEvent("frosted-ui:mounted");
    document.documentElement.dispatchEvent(event);
    return () => {
      document.documentElement.removeEventListener("frosted-ui:set-theme", listener);
      const event2 = new CustomEvent("frosted-ui:unmounted");
      document.documentElement.dispatchEvent(event2);
    };
  }, []);
  import_react14.default.useEffect(() => {
    const event = new CustomEvent("frosted-ui:on-theme-change", {
      detail: {
        appearance,
        accentColor,
        grayColor,
        infoColor,
        successColor,
        warningColor,
        dangerColor
      }
    });
    document.documentElement.dispatchEvent(event);
  }, [appearance, accentColor, grayColor, infoColor, successColor, warningColor, dangerColor]);
}
var WithThemeEvents = () => {
  useThemeEvents();
  return null;
};

// ../../node_modules/frosted-ui/dist/esm/theme.js
"use client";
var noop3 = () => {};
var ThemeContext = React27.createContext(undefined);
function useThemeContext() {
  const context2 = React27.useContext(ThemeContext);
  if (context2 === undefined) {
    throw new Error("`useThemeContext` must be used within a `Theme`");
  }
  return context2;
}
var Theme = (props) => {
  const context2 = React27.useContext(ThemeContext);
  const isRoot = context2 === undefined;
  if (isRoot) {
    return React27.createElement(exports_dist3.Provider, null, React27.createElement(DirectionProvider, { dir: "ltr" }, React27.createElement(ThemeRoot, { ...props })));
  }
  return React27.createElement(ThemeImpl, { ...props });
};
Theme.displayName = "Theme";
var ThemeRoot = (props) => {
  const { appearance: appearanceProp = themePropDefs.appearance.default, accentColor: accentColorProp = themePropDefs.accentColor.default, grayColor: grayColorProp = themePropDefs.grayColor.default, infoColor: infoColorProp = themePropDefs.infoColor.default, successColor: successColorProp = themePropDefs.successColor.default, warningColor: warningColorProp = themePropDefs.warningColor.default, dangerColor: dangerColorProp = themePropDefs.dangerColor.default, hasBackground = themePropDefs.hasBackground.default, ...rootProps } = props;
  const [appearance, setAppearance] = React27.useState(appearanceProp);
  React27.useEffect(() => setAppearance(appearanceProp), [appearanceProp]);
  const [accentColor, setAccentColor] = React27.useState(accentColorProp);
  React27.useEffect(() => setAccentColor(accentColorProp), [accentColorProp]);
  const [grayColor, setGrayColor] = React27.useState(grayColorProp);
  React27.useEffect(() => setGrayColor(grayColorProp), [grayColorProp]);
  const [infoColor, setInfoColor] = React27.useState(infoColorProp);
  React27.useEffect(() => setInfoColor(infoColorProp), [infoColorProp]);
  const [successColor, setSuccessColor] = React27.useState(successColorProp);
  React27.useEffect(() => setSuccessColor(successColorProp), [successColorProp]);
  const [warningColor, setWarningColor] = React27.useState(warningColorProp);
  React27.useEffect(() => setWarningColor(warningColorProp), [warningColorProp]);
  const [dangerColor, setDangerColor] = React27.useState(dangerColorProp);
  React27.useEffect(() => setDangerColor(dangerColorProp), [dangerColorProp]);
  const ExplicitRootAppearanceScript = React27.memo(({ appearance: appearance2 }) => React27.createElement("script", { dangerouslySetInnerHTML: {
    __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${appearance2}';c.add('${appearance2}');}catch(e){}})();`
  } }), () => true);
  ExplicitRootAppearanceScript.displayName = "ExplicitRootAppearanceScript";
  React27.useEffect(() => updateThemeAppearanceClass(appearanceProp), [appearanceProp]);
  const resolvedGrayColor = grayColor === "auto" ? getMatchingGrayColor(accentColor) : grayColor;
  return React27.createElement(React27.Fragment, null, appearance !== "inherit" && React27.createElement(React27.Fragment, null, React27.createElement(ExplicitRootAppearanceScript, { appearance }), React27.createElement(SyncRootElementAppearance, { appearance })), hasBackground && React27.createElement("style", { dangerouslySetInnerHTML: {
    __html: `
:root, .light, .light-theme { --color-page-background: white; }
.dark, .dark-theme { --color-page-background: var(--${resolvedGrayColor}-1); }
body { background-color: var(--color-page-background); }
`
  } }), React27.createElement(ThemeImpl, {
    ...rootProps,
    isRoot: true,
    hasBackground,
    appearance,
    accentColor,
    grayColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    onAppearanceChange: setAppearance,
    onAccentColorChange: setAccentColor,
    onGrayColorChange: setGrayColor,
    onInfoColorChange: setInfoColor,
    onSuccessColorChange: setSuccessColor,
    onWarningColorChange: setWarningColor,
    onDangerColorChange: setDangerColor
  }));
};
ThemeRoot.displayName = "ThemeRoot";
function SyncRootElementAppearance({ appearance }) {
  React27.useEffect(() => {
    try {
      document.documentElement.style.colorScheme = appearance;
      const cl = document.documentElement.classList;
      const opposite = appearance === "light" ? "dark" : "light";
      if (cl.contains(opposite))
        cl.remove(opposite);
      if (!cl.contains(appearance))
        cl.add(appearance);
    } catch (_a) {}
  }, [appearance]);
  return null;
}
var ThemeImpl = (props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const context2 = React27.useContext(ThemeContext);
  const {
    asChild,
    isRoot,
    hasBackground,
    appearance = (_a = context2 === null || context2 === undefined ? undefined : context2.appearance) !== null && _a !== undefined ? _a : themePropDefs.appearance.default,
    accentColor = (_b = context2 === null || context2 === undefined ? undefined : context2.accentColor) !== null && _b !== undefined ? _b : themePropDefs.accentColor.default,
    grayColor = (_c = context2 === null || context2 === undefined ? undefined : context2.resolvedGrayColor) !== null && _c !== undefined ? _c : themePropDefs.grayColor.default,
    dangerColor = (_d = context2 === null || context2 === undefined ? undefined : context2.dangerColor) !== null && _d !== undefined ? _d : themePropDefs.dangerColor.default,
    warningColor = (_e = context2 === null || context2 === undefined ? undefined : context2.warningColor) !== null && _e !== undefined ? _e : themePropDefs.warningColor.default,
    successColor = (_f = context2 === null || context2 === undefined ? undefined : context2.successColor) !== null && _f !== undefined ? _f : themePropDefs.successColor.default,
    infoColor = (_g = context2 === null || context2 === undefined ? undefined : context2.infoColor) !== null && _g !== undefined ? _g : themePropDefs.infoColor.default,
    onAppearanceChange = noop3,
    onAccentColorChange = noop3,
    onGrayColorChange = noop3,
    onInfoColorChange = noop3,
    onSuccessColorChange = noop3,
    onWarningColorChange = noop3,
    onDangerColorChange = noop3,
    ...themeProps
  } = props;
  const Comp = asChild ? exports_dist.Root : "div";
  const resolvedGrayColor = grayColor === "auto" ? getMatchingGrayColor(accentColor) : grayColor;
  const isExplicitAppearance = props.appearance !== undefined && props.appearance !== "inherit";
  const isExplicitGrayColor = props.grayColor !== undefined;
  const shouldHaveBackground = !isRoot && (hasBackground === true || hasBackground !== false && (isExplicitAppearance || isExplicitGrayColor));
  return React27.createElement(ThemeContext.Provider, { value: React27.useMemo(() => ({
    appearance,
    accentColor,
    dangerColor,
    warningColor,
    successColor,
    infoColor,
    grayColor,
    resolvedGrayColor,
    onAppearanceChange,
    onAccentColorChange,
    onGrayColorChange,
    onInfoColorChange,
    onSuccessColorChange,
    onWarningColorChange,
    onDangerColorChange
  }), [
    appearance,
    accentColor,
    dangerColor,
    warningColor,
    successColor,
    infoColor,
    grayColor,
    resolvedGrayColor,
    onAppearanceChange,
    onAccentColorChange,
    onGrayColorChange,
    onInfoColorChange,
    onSuccessColorChange,
    onWarningColorChange,
    onDangerColorChange
  ]) }, isRoot && React27.createElement(WithThemeEvents, null), React27.createElement(Comp, { "data-is-root-theme": isRoot ? "true" : "false", "data-accent-color": accentColor, "data-danger-color": dangerColor, "data-warning-color": warningColor, "data-success-color": successColor, "data-info-color": infoColor, "data-gray-color": resolvedGrayColor, "data-has-background": shouldHaveBackground ? "true" : "false", ...themeProps, className: import_classnames.default("frosted-ui", {
    light: !isRoot && appearance === "light",
    dark: !isRoot && appearance === "dark"
  }, themeProps.className) }));
};
ThemeImpl.displayName = "ThemeImpl";
function updateThemeAppearanceClass(appearance) {
  if (appearance === "inherit")
    return;
  const root = document.documentElement;
  if (root.classList.contains("light-theme") || root.classList.contains("dark-theme")) {
    root.classList.remove("light-theme", "dark-theme");
    root.style.colorScheme = appearance;
    root.classList.add(`${appearance}-theme`);
  }
  if (root.classList.contains("light") || root.classList.contains("dark")) {
    root.classList.remove("light", "dark");
    root.style.colorScheme = appearance;
    root.classList.add(appearance);
  }
}
// src/components/OutOfBounds.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var OutOfBounds = ({
  themeConfig,
  appId,
  fonts,
  message: message2 = "Please install this app via Whop.",
  installUrl
}) => {
  const defaultInstallUrl = `https://whop.com/apps/${appId}/install/`;
  const finalInstallUrl = installUrl || defaultInstallUrl;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("html", {
    lang: "en",
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("head", {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(WhopThemeScript, {}, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("body", {
        className: fonts,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Theme, {
          ...themeConfig,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
            className: "flex flex-col items-center justify-center h-screen",
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
              children: message2.split("install").length > 1 ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
                children: [
                  message2.split("install")[0],
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("a", {
                    className: "text-blue-9 hover:text-blue-10",
                    href: finalInstallUrl,
                    children: "install"
                  }, undefined, false, undefined, this),
                  message2.split("install")[1]
                ]
              }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
                children: [
                  message2,
                  " ",
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV("a", {
                    className: "text-blue-9 hover:text-blue-10",
                    href: finalInstallUrl,
                    children: "Install here"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
// src/components/Unauthorized.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var Unauthorized = ({
  themeConfig,
  appId,
  fonts,
  message: message2 = "You are not authorized to view this page. You must purchase a product first.",
  showPurchaseLink = false,
  purchaseUrl
}) => {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("html", {
    lang: "en",
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("head", {
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(WhopThemeScript, {}, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("body", {
        className: fonts,
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Theme, {
          ...themeConfig,
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("div", {
            className: "flex flex-col items-center justify-center h-screen space-y-4",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("p", {
                className: "text-center max-w-md",
                children: message2
              }, undefined, false, undefined, this),
              showPurchaseLink && purchaseUrl && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("a", {
                className: "text-blue-9 hover:text-blue-10 font-medium",
                href: purchaseUrl,
                children: "Purchase Access"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
// src/components/NoExperience.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var NoExperience = ({
  themeConfig,
  appId,
  fonts,
  message: message2 = "This experience does not exist."
}) => {
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("html", {
    lang: "en",
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("head", {
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(WhopThemeScript, {}, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("body", {
        className: fonts,
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Theme, {
          ...themeConfig,
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
            className: "flex flex-col items-center justify-center h-screen",
            children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("p", {
              className: "text-center max-w-md",
              children: message2
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
// ../whoof-auth/dist/index.js
import { createRequire as createRequire2 } from "node:module";
import { request as request2 } from "https";
import { Readable as Readable2 } from "stream";
import { AsyncLocalStorage } from "async_hooks";
var __create2 = Object.create;
var __getProtoOf2 = Object.getPrototypeOf;
var __defProp4 = Object.defineProperty;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __toESM2 = (mod, isNodeMode, target) => {
  target = mod != null ? __create2(__getProtoOf2(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp4(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames2(mod))
    if (!__hasOwnProp2.call(to, key))
      __defProp4(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS2 = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require2 = /* @__PURE__ */ createRequire2(import.meta.url);
var require_md52 = __commonJS2((exports, module) => {
  (function() {
    var INPUT_ERROR = "input is invalid type";
    var FINALIZE_ERROR = "finalize already called";
    var WINDOW = typeof window === "object";
    var root = WINDOW ? window : {};
    if (root.JS_MD5_NO_WINDOW) {
      WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === "object";
    var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
    if (NODE_JS) {
      root = global;
    } else if (WEB_WORKER) {
      root = self;
    }
    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && typeof module === "object" && module.exports;
    var AMD = typeof define === "function" && define.amd;
    var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
    var HEX_CHARS = "0123456789abcdef".split("");
    var EXTRA = [128, 32768, 8388608, -2147483648];
    var SHIFT = [0, 8, 16, 24];
    var OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
    var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    var blocks = [], buffer8;
    if (ARRAY_BUFFER) {
      var buffer = new ArrayBuffer(68);
      buffer8 = new Uint8Array(buffer);
      blocks = new Uint32Array(buffer);
    }
    var isArray = Array.isArray;
    if (root.JS_MD5_NO_NODE_JS || !isArray) {
      isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
      };
    }
    var isView = ArrayBuffer.isView;
    if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !isView)) {
      isView = function(obj) {
        return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
      };
    }
    var formatMessage = function(message2) {
      var type = typeof message2;
      if (type === "string") {
        return [message2, true];
      }
      if (type !== "object" || message2 === null) {
        throw new Error(INPUT_ERROR);
      }
      if (ARRAY_BUFFER && message2.constructor === ArrayBuffer) {
        return [new Uint8Array(message2), false];
      }
      if (!isArray(message2) && !isView(message2)) {
        throw new Error(INPUT_ERROR);
      }
      return [message2, false];
    };
    var createOutputMethod = function(outputType) {
      return function(message2) {
        return new Md5(true).update(message2)[outputType]();
      };
    };
    var createMethod = function() {
      var method = createOutputMethod("hex");
      if (NODE_JS) {
        method = nodeWrap(method);
      }
      method.create = function() {
        return new Md5;
      };
      method.update = function(message2) {
        return method.create().update(message2);
      };
      for (var i = 0;i < OUTPUT_TYPES.length; ++i) {
        var type = OUTPUT_TYPES[i];
        method[type] = createOutputMethod(type);
      }
      return method;
    };
    var nodeWrap = function(method) {
      var crypto2 = __require2("crypto");
      var Buffer = __require2("buffer").Buffer;
      var bufferFrom;
      if (Buffer.from && !root.JS_MD5_NO_BUFFER_FROM) {
        bufferFrom = Buffer.from;
      } else {
        bufferFrom = function(message2) {
          return new Buffer(message2);
        };
      }
      var nodeMethod = function(message2) {
        if (typeof message2 === "string") {
          return crypto2.createHash("md5").update(message2, "utf8").digest("hex");
        } else {
          if (message2 === null || message2 === undefined) {
            throw new Error(INPUT_ERROR);
          } else if (message2.constructor === ArrayBuffer) {
            message2 = new Uint8Array(message2);
          }
        }
        if (isArray(message2) || isView(message2) || message2.constructor === Buffer) {
          return crypto2.createHash("md5").update(bufferFrom(message2)).digest("hex");
        } else {
          return method(message2);
        }
      };
      return nodeMethod;
    };
    var createHmacOutputMethod = function(outputType) {
      return function(key, message2) {
        return new HmacMd5(key, true).update(message2)[outputType]();
      };
    };
    var createHmacMethod = function() {
      var method = createHmacOutputMethod("hex");
      method.create = function(key) {
        return new HmacMd5(key);
      };
      method.update = function(key, message2) {
        return method.create(key).update(message2);
      };
      for (var i = 0;i < OUTPUT_TYPES.length; ++i) {
        var type = OUTPUT_TYPES[i];
        method[type] = createHmacOutputMethod(type);
      }
      return method;
    };
    function Md5(sharedMemory) {
      if (sharedMemory) {
        blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        this.blocks = blocks;
        this.buffer8 = buffer8;
      } else {
        if (ARRAY_BUFFER) {
          var buffer2 = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(buffer2);
          this.blocks = new Uint32Array(buffer2);
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
      }
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
      this.finalized = this.hashed = false;
      this.first = true;
    }
    Md5.prototype.update = function(message2) {
      if (this.finalized) {
        throw new Error(FINALIZE_ERROR);
      }
      var result = formatMessage(message2);
      message2 = result[0];
      var isString = result[1];
      var code, index2 = 0, i, length = message2.length, blocks2 = this.blocks;
      var buffer82 = this.buffer8;
      while (index2 < length) {
        if (this.hashed) {
          this.hashed = false;
          blocks2[0] = blocks2[16];
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        if (isString) {
          if (ARRAY_BUFFER) {
            for (i = this.start;index2 < length && i < 64; ++index2) {
              code = message2.charCodeAt(index2);
              if (code < 128) {
                buffer82[i++] = code;
              } else if (code < 2048) {
                buffer82[i++] = 192 | code >>> 6;
                buffer82[i++] = 128 | code & 63;
              } else if (code < 55296 || code >= 57344) {
                buffer82[i++] = 224 | code >>> 12;
                buffer82[i++] = 128 | code >>> 6 & 63;
                buffer82[i++] = 128 | code & 63;
              } else {
                code = 65536 + ((code & 1023) << 10 | message2.charCodeAt(++index2) & 1023);
                buffer82[i++] = 240 | code >>> 18;
                buffer82[i++] = 128 | code >>> 12 & 63;
                buffer82[i++] = 128 | code >>> 6 & 63;
                buffer82[i++] = 128 | code & 63;
              }
            }
          } else {
            for (i = this.start;index2 < length && i < 64; ++index2) {
              code = message2.charCodeAt(index2);
              if (code < 128) {
                blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message2.charCodeAt(++index2) & 1023);
                blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
        } else {
          if (ARRAY_BUFFER) {
            for (i = this.start;index2 < length && i < 64; ++index2) {
              buffer82[i++] = message2[index2];
            }
          } else {
            for (i = this.start;index2 < length && i < 64; ++index2) {
              blocks2[i >>> 2] |= message2[index2] << SHIFT[i++ & 3];
            }
          }
        }
        this.lastByteIndex = i;
        this.bytes += i - this.start;
        if (i >= 64) {
          this.start = i - 64;
          this.hash();
          this.hashed = true;
        } else {
          this.start = i;
        }
      }
      if (this.bytes > 4294967295) {
        this.hBytes += this.bytes / 4294967296 << 0;
        this.bytes = this.bytes % 4294967296;
      }
      return this;
    };
    Md5.prototype.finalize = function() {
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      var blocks2 = this.blocks, i = this.lastByteIndex;
      blocks2[i >>> 2] |= EXTRA[i & 3];
      if (i >= 56) {
        if (!this.hashed) {
          this.hash();
        }
        blocks2[0] = blocks2[16];
        blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
      }
      blocks2[14] = this.bytes << 3;
      blocks2[15] = this.hBytes << 3 | this.bytes >>> 29;
      this.hash();
    };
    Md5.prototype.hash = function() {
      var a, b, c, d, bc, da, blocks2 = this.blocks;
      if (this.first) {
        a = blocks2[0] - 680876937;
        a = (a << 7 | a >>> 25) - 271733879 << 0;
        d = (-1732584194 ^ a & 2004318071) + blocks2[1] - 117830708;
        d = (d << 12 | d >>> 20) + a << 0;
        c = (-271733879 ^ d & (a ^ -271733879)) + blocks2[2] - 1126478375;
        c = (c << 17 | c >>> 15) + d << 0;
        b = (a ^ c & (d ^ a)) + blocks2[3] - 1316259209;
        b = (b << 22 | b >>> 10) + c << 0;
      } else {
        a = this.h0;
        b = this.h1;
        c = this.h2;
        d = this.h3;
        a += (d ^ b & (c ^ d)) + blocks2[0] - 680876936;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[1] - 389564586;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[2] + 606105819;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[3] - 1044525330;
        b = (b << 22 | b >>> 10) + c << 0;
      }
      a += (d ^ b & (c ^ d)) + blocks2[4] - 176418897;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[5] + 1200080426;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[6] - 1473231341;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[7] - 45705983;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (d ^ b & (c ^ d)) + blocks2[8] + 1770035416;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[9] - 1958414417;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[10] - 42063;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[11] - 1990404162;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (d ^ b & (c ^ d)) + blocks2[12] + 1804603682;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks2[13] - 40341101;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks2[14] - 1502002290;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks2[15] + 1236535329;
      b = (b << 22 | b >>> 10) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[1] - 165796510;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[6] - 1069501632;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[11] + 643717713;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[0] - 373897302;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[5] - 701558691;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[10] + 38016083;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[15] - 660478335;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[4] - 405537848;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[9] + 568446438;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[14] - 1019803690;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[3] - 187363961;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[8] + 1163531501;
      b = (b << 20 | b >>> 12) + c << 0;
      a += (c ^ d & (b ^ c)) + blocks2[13] - 1444681467;
      a = (a << 5 | a >>> 27) + b << 0;
      d += (b ^ c & (a ^ b)) + blocks2[2] - 51403784;
      d = (d << 9 | d >>> 23) + a << 0;
      c += (a ^ b & (d ^ a)) + blocks2[7] + 1735328473;
      c = (c << 14 | c >>> 18) + d << 0;
      b += (d ^ a & (c ^ d)) + blocks2[12] - 1926607734;
      b = (b << 20 | b >>> 12) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[5] - 378558;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[8] - 2022574463;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[11] + 1839030562;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[14] - 35309556;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[1] - 1530992060;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[4] + 1272893353;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[7] - 155497632;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[10] - 1094730640;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[13] + 681279174;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[0] - 358537222;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[3] - 722521979;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[6] + 76029189;
      b = (b << 23 | b >>> 9) + c << 0;
      bc = b ^ c;
      a += (bc ^ d) + blocks2[9] - 640364487;
      a = (a << 4 | a >>> 28) + b << 0;
      d += (bc ^ a) + blocks2[12] - 421815835;
      d = (d << 11 | d >>> 21) + a << 0;
      da = d ^ a;
      c += (da ^ b) + blocks2[15] + 530742520;
      c = (c << 16 | c >>> 16) + d << 0;
      b += (da ^ c) + blocks2[2] - 995338651;
      b = (b << 23 | b >>> 9) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[0] - 198630844;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[7] + 1126891415;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[14] - 1416354905;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[5] - 57434055;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[12] + 1700485571;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[3] - 1894986606;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[10] - 1051523;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[1] - 2054922799;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[8] + 1873313359;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[15] - 30611744;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[6] - 1560198380;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[13] + 1309151649;
      b = (b << 21 | b >>> 11) + c << 0;
      a += (c ^ (b | ~d)) + blocks2[4] - 145523070;
      a = (a << 6 | a >>> 26) + b << 0;
      d += (b ^ (a | ~c)) + blocks2[11] - 1120210379;
      d = (d << 10 | d >>> 22) + a << 0;
      c += (a ^ (d | ~b)) + blocks2[2] + 718787259;
      c = (c << 15 | c >>> 17) + d << 0;
      b += (d ^ (c | ~a)) + blocks2[9] - 343485551;
      b = (b << 21 | b >>> 11) + c << 0;
      if (this.first) {
        this.h0 = a + 1732584193 << 0;
        this.h1 = b - 271733879 << 0;
        this.h2 = c - 1732584194 << 0;
        this.h3 = d + 271733878 << 0;
        this.first = false;
      } else {
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
      }
    };
    Md5.prototype.hex = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
      return HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15];
    };
    Md5.prototype.toString = Md5.prototype.hex;
    Md5.prototype.digest = function() {
      this.finalize();
      var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
      return [
        h0 & 255,
        h0 >>> 8 & 255,
        h0 >>> 16 & 255,
        h0 >>> 24 & 255,
        h1 & 255,
        h1 >>> 8 & 255,
        h1 >>> 16 & 255,
        h1 >>> 24 & 255,
        h2 & 255,
        h2 >>> 8 & 255,
        h2 >>> 16 & 255,
        h2 >>> 24 & 255,
        h3 & 255,
        h3 >>> 8 & 255,
        h3 >>> 16 & 255,
        h3 >>> 24 & 255
      ];
    };
    Md5.prototype.array = Md5.prototype.digest;
    Md5.prototype.arrayBuffer = function() {
      this.finalize();
      var buffer2 = new ArrayBuffer(16);
      var blocks2 = new Uint32Array(buffer2);
      blocks2[0] = this.h0;
      blocks2[1] = this.h1;
      blocks2[2] = this.h2;
      blocks2[3] = this.h3;
      return buffer2;
    };
    Md5.prototype.buffer = Md5.prototype.arrayBuffer;
    Md5.prototype.base64 = function() {
      var v1, v2, v3, base64Str = "", bytes = this.array();
      for (var i = 0;i < 15; ) {
        v1 = bytes[i++];
        v2 = bytes[i++];
        v3 = bytes[i++];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
      }
      v1 = bytes[i];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
      return base64Str;
    };
    function HmacMd5(key, sharedMemory) {
      var i, result = formatMessage(key);
      key = result[0];
      if (result[1]) {
        var bytes = [], length = key.length, index2 = 0, code;
        for (i = 0;i < length; ++i) {
          code = key.charCodeAt(i);
          if (code < 128) {
            bytes[index2++] = code;
          } else if (code < 2048) {
            bytes[index2++] = 192 | code >>> 6;
            bytes[index2++] = 128 | code & 63;
          } else if (code < 55296 || code >= 57344) {
            bytes[index2++] = 224 | code >>> 12;
            bytes[index2++] = 128 | code >>> 6 & 63;
            bytes[index2++] = 128 | code & 63;
          } else {
            code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
            bytes[index2++] = 240 | code >>> 18;
            bytes[index2++] = 128 | code >>> 12 & 63;
            bytes[index2++] = 128 | code >>> 6 & 63;
            bytes[index2++] = 128 | code & 63;
          }
        }
        key = bytes;
      }
      if (key.length > 64) {
        key = new Md5(true).update(key).array();
      }
      var oKeyPad = [], iKeyPad = [];
      for (i = 0;i < 64; ++i) {
        var b = key[i] || 0;
        oKeyPad[i] = 92 ^ b;
        iKeyPad[i] = 54 ^ b;
      }
      Md5.call(this, sharedMemory);
      this.update(iKeyPad);
      this.oKeyPad = oKeyPad;
      this.inner = true;
      this.sharedMemory = sharedMemory;
    }
    HmacMd5.prototype = new Md5;
    HmacMd5.prototype.finalize = function() {
      Md5.prototype.finalize.call(this);
      if (this.inner) {
        this.inner = false;
        var innerHash = this.array();
        Md5.call(this, this.sharedMemory);
        this.update(this.oKeyPad);
        this.update(innerHash);
        Md5.prototype.finalize.call(this);
      }
    };
    var exports2 = createMethod();
    exports2.md5 = exports2;
    exports2.md5.hmac = createHmacMethod();
    if (COMMON_JS) {
      module.exports = exports2;
    } else {
      root.md5 = exports2;
      if (AMD) {
        define(function() {
          return exports2;
        });
      }
    }
  })();
});
var require_lib2 = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TypedEmitter = __require2("events").EventEmitter;
});
var require_cookies = __commonJS2((exports, module) => {
  var __defProp32 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames22 = Object.getOwnPropertyNames;
  var __hasOwnProp22 = Object.prototype.hasOwnProperty;
  var __export22 = (target, all) => {
    for (var name in all)
      __defProp32(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames22(from))
        if (!__hasOwnProp22.call(to, key) && key !== except)
          __defProp32(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp32({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export22(src_exports, {
    RequestCookies: () => RequestCookies,
    ResponseCookies: () => ResponseCookies,
    parseCookie: () => parseCookie,
    parseSetCookie: () => parseSetCookie,
    stringifyCookie: () => stringifyCookie
  });
  module.exports = __toCommonJS(src_exports);
  function stringifyCookie(c) {
    var _a;
    const attrs = [
      "path" in c && c.path && `Path=${c.path}`,
      "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
      "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
      "domain" in c && c.domain && `Domain=${c.domain}`,
      "secure" in c && c.secure && "Secure",
      "httpOnly" in c && c.httpOnly && "HttpOnly",
      "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
      "partitioned" in c && c.partitioned && "Partitioned",
      "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
  }
  function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map;
    for (const pair of cookie.split(/; */)) {
      if (!pair)
        continue;
      const splitAt = pair.indexOf("=");
      if (splitAt === -1) {
        map.set(pair, "true");
        continue;
      }
      const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
      try {
        map.set(key, decodeURIComponent(value != null ? value : "true"));
      } catch {}
    }
    return map;
  }
  function parseSetCookie(setCookie) {
    if (!setCookie) {
      return;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const {
      domain,
      expires,
      httponly,
      maxage,
      path,
      samesite,
      secure,
      partitioned,
      priority
    } = Object.fromEntries(attributes.map(([key, value2]) => [
      key.toLowerCase().replace(/-/g, ""),
      value2
    ]));
    const cookie = {
      name,
      value: decodeURIComponent(value),
      domain,
      ...expires && { expires: new Date(expires) },
      ...httponly && { httpOnly: true },
      ...typeof maxage === "string" && { maxAge: Number(maxage) },
      path,
      ...samesite && { sameSite: parseSameSite(samesite) },
      ...secure && { secure: true },
      ...priority && { priority: parsePriority(priority) },
      ...partitioned && { partitioned: true }
    };
    return compact(cookie);
  }
  function compact(t) {
    const newT = {};
    for (const key in t) {
      if (t[key]) {
        newT[key] = t[key];
      }
    }
    return newT;
  }
  var SAME_SITE = ["strict", "lax", "none"];
  function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : undefined;
  }
  var PRIORITY = ["low", "medium", "high"];
  function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : undefined;
  }
  function splitCookiesString(cookiesString) {
    if (!cookiesString)
      return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
      while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
        pos += 1;
      }
      return pos < cookiesString.length;
    }
    function notSpecialChar() {
      ch = cookiesString.charAt(pos);
      return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while (pos < cookiesString.length) {
      start = pos;
      cookiesSeparatorFound = false;
      while (skipWhitespace()) {
        ch = cookiesString.charAt(pos);
        if (ch === ",") {
          lastComma = pos;
          pos += 1;
          skipWhitespace();
          nextStart = pos;
          while (pos < cookiesString.length && notSpecialChar()) {
            pos += 1;
          }
          if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
            cookiesSeparatorFound = true;
            pos = nextStart;
            cookiesStrings.push(cookiesString.substring(start, lastComma));
            start = pos;
          } else {
            pos = lastComma + 1;
          }
        } else {
          pos += 1;
        }
      }
      if (!cookiesSeparatorFound || pos >= cookiesString.length) {
        cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
      }
    }
    return cookiesStrings;
  }
  var RequestCookies = class {
    constructor(requestHeaders) {
      this._parsed = /* @__PURE__ */ new Map;
      this._headers = requestHeaders;
      const header = requestHeaders.get("cookie");
      if (header) {
        const parsed = parseCookie(header);
        for (const [name, value] of parsed) {
          this._parsed.set(name, { name, value });
        }
      }
    }
    [Symbol.iterator]() {
      return this._parsed[Symbol.iterator]();
    }
    get size() {
      return this._parsed.size;
    }
    get(...args) {
      const name = typeof args[0] === "string" ? args[0] : args[0].name;
      return this._parsed.get(name);
    }
    getAll(...args) {
      var _a;
      const all = Array.from(this._parsed);
      if (!args.length) {
        return all.map(([_, value]) => value);
      }
      const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? undefined : _a.name;
      return all.filter(([n]) => n === name).map(([_, value]) => value);
    }
    has(name) {
      return this._parsed.has(name);
    }
    set(...args) {
      const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
      const map = this._parsed;
      map.set(name, { name, value });
      this._headers.set("cookie", Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; "));
      return this;
    }
    delete(names) {
      const map = this._parsed;
      const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
      this._headers.set("cookie", Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; "));
      return result;
    }
    clear() {
      this.delete(Array.from(this._parsed.keys()));
      return this;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
      return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
  };
  var ResponseCookies = class {
    constructor(responseHeaders) {
      this._parsed = /* @__PURE__ */ new Map;
      var _a, _b, _c;
      this._headers = responseHeaders;
      const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? undefined : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
      const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
      for (const cookieString of cookieStrings) {
        const parsed = parseSetCookie(cookieString);
        if (parsed)
          this._parsed.set(parsed.name, parsed);
      }
    }
    get(...args) {
      const key = typeof args[0] === "string" ? args[0] : args[0].name;
      return this._parsed.get(key);
    }
    getAll(...args) {
      var _a;
      const all = Array.from(this._parsed.values());
      if (!args.length) {
        return all;
      }
      const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? undefined : _a.name;
      return all.filter((c) => c.name === key);
    }
    has(name) {
      return this._parsed.has(name);
    }
    set(...args) {
      const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
      const map = this._parsed;
      map.set(name, normalizeCookie({ name, value, ...cookie }));
      replace(map, this._headers);
      return this;
    }
    delete(...args) {
      const [name, options] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0]];
      return this.set({ ...options, name, value: "", expires: /* @__PURE__ */ new Date(0) });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
      return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
      return [...this._parsed.values()].map(stringifyCookie).join("; ");
    }
  };
  function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag) {
      const serialized = stringifyCookie(value);
      headers.append("set-cookie", serialized);
    }
  }
  function normalizeCookie(cookie = { name: "", value: "" }) {
    if (typeof cookie.expires === "number") {
      cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
      cookie.expires = new Date(Date.now() + cookie.maxAge * 1000);
    }
    if (cookie.path === null || cookie.path === undefined) {
      cookie.path = "/";
    }
    return cookie;
  }
});
var require_cookies2 = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    RequestCookies: function() {
      return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
      return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
      return _cookies.stringifyCookie;
    }
  });
  var _cookies = require_cookies();
});
var require_reflect = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
      return ReflectAdapter;
    }
  });

  class ReflectAdapter {
    static get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === "function") {
        return value.bind(target);
      }
      return value;
    }
    static set(target, prop, value, receiver) {
      return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
      return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
      return Reflect.deleteProperty(target, prop);
    }
  }
});
var require_async_local_storage = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    bindSnapshot: function() {
      return bindSnapshot;
    },
    createAsyncLocalStorage: function() {
      return createAsyncLocalStorage;
    },
    createSnapshot: function() {
      return createSnapshot;
    }
  });
  var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: false,
    configurable: true
  });

  class FakeAsyncLocalStorage {
    disable() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
      return;
    }
    run() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
      throw sharedAsyncLocalStorageNotAvailableError;
    }
    static bind(fn) {
      return fn;
    }
  }
  var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
  function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
      return new maybeGlobalAsyncLocalStorage;
    }
    return new FakeAsyncLocalStorage;
  }
  function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
      return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
  }
  function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
      return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn, ...args) {
      return fn(...args);
    };
  }
});
var require_work_async_storage_instance = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "workAsyncStorageInstance", {
    enumerable: true,
    get: function() {
      return workAsyncStorageInstance;
    }
  });
  var _asynclocalstorage = require_async_local_storage();
  var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
});
var require_work_async_storage_external = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "workAsyncStorage", {
    enumerable: true,
    get: function() {
      return _workasyncstorageinstance.workAsyncStorageInstance;
    }
  });
  var _workasyncstorageinstance = require_work_async_storage_instance();
});
var require_work_unit_async_storage_instance = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
    enumerable: true,
    get: function() {
      return workUnitAsyncStorageInstance;
    }
  });
  var _asynclocalstorage = require_async_local_storage();
  var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
});
var require_app_router_headers = __commonJS2((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    ACTION_HEADER: function() {
      return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
      return FLIGHT_HEADERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
      return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
      return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
      return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
      return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
      return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
      return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
      return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
      return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
      return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
      return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
      return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
      return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
      return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
      return RSC_HEADER;
    }
  });
  var RSC_HEADER = "RSC";
  var ACTION_HEADER = "Next-Action";
  var NEXT_ROUTER_STATE_TREE_HEADER = "Next-Router-State-Tree";
  var NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
  var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "Next-Router-Segment-Prefetch";
  var NEXT_HMR_REFRESH_HEADER = "Next-HMR-Refresh";
  var NEXT_HMR_REFRESH_HASH_COOKIE = "__next_hmr_refresh_hash__";
  var NEXT_URL = "Next-Url";
  var RSC_CONTENT_TYPE_HEADER = "text/x-component";
  var FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
  ];
  var NEXT_RSC_UNION_QUERY = "_rsc";
  var NEXT_ROUTER_STALE_TIME_HEADER = "x-nextjs-stale-time";
  var NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
  var NEXT_REWRITTEN_PATH_HEADER = "x-nextjs-rewritten-path";
  var NEXT_REWRITTEN_QUERY_HEADER = "x-nextjs-rewritten-query";
  var NEXT_IS_PRERENDER_HEADER = "x-nextjs-prerender";
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});
var require_work_unit_async_storage_external = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    getDraftModeProviderForCacheScope: function() {
      return getDraftModeProviderForCacheScope;
    },
    getExpectedRequestStore: function() {
      return getExpectedRequestStore;
    },
    getHmrRefreshHash: function() {
      return getHmrRefreshHash;
    },
    getPrerenderResumeDataCache: function() {
      return getPrerenderResumeDataCache;
    },
    getRenderResumeDataCache: function() {
      return getRenderResumeDataCache;
    },
    throwForMissingRequestStore: function() {
      return throwForMissingRequestStore;
    },
    workUnitAsyncStorage: function() {
      return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
    }
  });
  var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
  var _approuterheaders = require_app_router_headers();
  function getExpectedRequestStore(callingExpression) {
    const workUnitStore = _workunitasyncstorageinstance.workUnitAsyncStorageInstance.getStore();
    if (!workUnitStore) {
      throwForMissingRequestStore(callingExpression);
    }
    switch (workUnitStore.type) {
      case "request":
        return workUnitStore;
      case "prerender":
      case "prerender-ppr":
      case "prerender-legacy":
        throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`), "__NEXT_ERROR_CODE", {
          value: "E401",
          enumerable: false,
          configurable: true
        });
      case "cache":
        throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
          value: "E37",
          enumerable: false,
          configurable: true
        });
      case "unstable-cache":
        throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
          value: "E69",
          enumerable: false,
          configurable: true
        });
      default:
        const _exhaustiveCheck = workUnitStore;
        return _exhaustiveCheck;
    }
  }
  function throwForMissingRequestStore(callingExpression) {
    throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
      value: "E251",
      enumerable: false,
      configurable: true
    });
  }
  function getPrerenderResumeDataCache(workUnitStore) {
    if (workUnitStore.type === "prerender" || workUnitStore.type === "prerender-ppr") {
      return workUnitStore.prerenderResumeDataCache;
    }
    return null;
  }
  function getRenderResumeDataCache(workUnitStore) {
    if (workUnitStore.type !== "prerender-legacy" && workUnitStore.type !== "cache" && workUnitStore.type !== "unstable-cache") {
      if (workUnitStore.type === "request") {
        return workUnitStore.renderResumeDataCache;
      }
      return workUnitStore.prerenderResumeDataCache;
    }
    return null;
  }
  function getHmrRefreshHash(workStore, workUnitStore) {
    var _workUnitStore_cookies_get;
    if (!workStore.dev) {
      return;
    }
    return workUnitStore.type === "cache" || workUnitStore.type === "prerender" ? workUnitStore.hmrRefreshHash : workUnitStore.type === "request" ? (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? undefined : _workUnitStore_cookies_get.value : undefined;
  }
  function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
    if (workStore.isDraftMode) {
      switch (workUnitStore.type) {
        case "cache":
        case "unstable-cache":
        case "request":
          return workUnitStore.draftMode;
        default:
          return;
      }
    }
    return;
  }
});
var require_request_cookies = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    MutableRequestCookiesAdapter: function() {
      return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
      return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
      return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
      return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function() {
      return areCookiesMutableInCurrentPhase;
    },
    getModifiedCookieValues: function() {
      return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function() {
      return responseCookiesToRequestCookies;
    },
    wrapWithMutableAccessCheck: function() {
      return wrapWithMutableAccessCheck;
    }
  });
  var _cookies = require_cookies2();
  var _reflect = require_reflect();
  var _workasyncstorageexternal = require_work_async_storage_external();
  var _workunitasyncstorageexternal = require_work_unit_async_storage_external();

  class ReadonlyRequestCookiesError extends Error {
    constructor() {
      super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
    }
    static callable() {
      throw new ReadonlyRequestCookiesError;
    }
  }

  class RequestCookiesAdapter {
    static seal(cookies) {
      return new Proxy(cookies, {
        get(target, prop, receiver) {
          switch (prop) {
            case "clear":
            case "delete":
            case "set":
              return ReadonlyRequestCookiesError.callable;
            default:
              return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        }
      });
    }
  }
  var SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
  function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
      return [];
    }
    return modified;
  }
  function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
      return false;
    }
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    for (const cookie of modifiedCookieValues) {
      resCookies.set(cookie);
    }
    for (const cookie of returnedCookies) {
      resCookies.set(cookie);
    }
    return true;
  }

  class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
      const responseCookies = new _cookies.ResponseCookies(new Headers);
      for (const cookie of cookies.getAll()) {
        responseCookies.set(cookie);
      }
      let modifiedValues = [];
      const modifiedCookies = new Set;
      const updateResponseCookies = () => {
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        if (workStore) {
          workStore.pathWasRevalidated = true;
        }
        const allCookies = responseCookies.getAll();
        modifiedValues = allCookies.filter((c) => modifiedCookies.has(c.name));
        if (onUpdateCookies) {
          const serializedCookies = [];
          for (const cookie of modifiedValues) {
            const tempCookies = new _cookies.ResponseCookies(new Headers);
            tempCookies.set(cookie);
            serializedCookies.push(tempCookies.toString());
          }
          onUpdateCookies(serializedCookies);
        }
      };
      const wrappedCookies = new Proxy(responseCookies, {
        get(target, prop, receiver) {
          switch (prop) {
            case SYMBOL_MODIFY_COOKIE_VALUES:
              return modifiedValues;
            case "delete":
              return function(...args) {
                modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                try {
                  target.delete(...args);
                  return wrappedCookies;
                } finally {
                  updateResponseCookies();
                }
              };
            case "set":
              return function(...args) {
                modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                try {
                  target.set(...args);
                  return wrappedCookies;
                } finally {
                  updateResponseCookies();
                }
              };
            default:
              return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        }
      });
      return wrappedCookies;
    }
  }
  function wrapWithMutableAccessCheck(responseCookies) {
    const wrappedCookies = new Proxy(responseCookies, {
      get(target, prop, receiver) {
        switch (prop) {
          case "delete":
            return function(...args) {
              ensureCookiesAreStillMutable("cookies().delete");
              target.delete(...args);
              return wrappedCookies;
            };
          case "set":
            return function(...args) {
              ensureCookiesAreStillMutable("cookies().set");
              target.set(...args);
              return wrappedCookies;
            };
          default:
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
      }
    });
    return wrappedCookies;
  }
  function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === "action";
  }
  function ensureCookiesAreStillMutable(callingExpression) {
    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
      throw new ReadonlyRequestCookiesError;
    }
  }
  function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new _cookies.RequestCookies(new Headers);
    for (const cookie of responseCookies.getAll()) {
      requestCookies.set(cookie);
    }
    return requestCookies;
  }
});
var require_react_development2 = __commonJS2((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context2, updater) {
      this.props = props;
      this.context = context2;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context2, updater) {
      this.props = props;
      this.context = context2;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self2, source, owner, props, debugStack, debugTask) {
      self2 = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self2 !== undefined ? self2 : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
      oldElement._store && (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement2(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index2) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index2.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement2(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement2(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context2) {
      if (children == null)
        return children;
      var result = [], count2 = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context2, child, count2++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop4() {}
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null,
      recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    deprecatedAPIs = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function(size4) {
        return resolveDispatcher().useMemoCache(size4);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement2(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$0) {
                  ReactSharedInternals.thrownErrors.push(error$0);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function() {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return getCurrentStack === null ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props, element._debugStack, element._debugTask);
      for (key = 2;key < arguments.length; key++)
        owner = arguments[key], isValidElement2(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      for (var i = 2;i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement2(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      node && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(type, node, undefined, undefined, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement2;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      type == null && console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop4, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
      create == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      var dispatcher = resolveDispatcher();
      if (typeof update === "function")
        throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      create == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      create == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});
var require_react2 = __commonJS2((exports, module) => {
  var react_development = __toESM2(require_react_development2(), 1);
  if (false) {} else {
    module.exports = react_development;
  }
});
var require_hooks_server_context = __commonJS2((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    DynamicServerError: function() {
      return DynamicServerError;
    },
    isDynamicServerError: function() {
      return isDynamicServerError;
    }
  });
  var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";

  class DynamicServerError extends Error {
    constructor(description) {
      super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
  }
  function isDynamicServerError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
      return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});
var require_static_generation_bailout = __commonJS2((exports, module) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    StaticGenBailoutError: function() {
      return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
      return isStaticGenBailoutError;
    }
  });
  var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";

  class StaticGenBailoutError extends Error {
    constructor(...args) {
      super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
  }
  function isStaticGenBailoutError(error) {
    if (typeof error !== "object" || error === null || !("code" in error)) {
      return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
  }
  if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", { value: true });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
  }
});
var require_dynamic_rendering_utils = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    isHangingPromiseRejectionError: function() {
      return isHangingPromiseRejectionError;
    },
    makeHangingPromise: function() {
      return makeHangingPromise;
    }
  });
  function isHangingPromiseRejectionError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err)) {
      return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
  }
  var HANGING_PROMISE_REJECTION = "HANGING_PROMISE_REJECTION";

  class HangingPromiseRejectionError extends Error {
    constructor(expression) {
      super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
  }
  var abortListenersBySignal = new WeakMap;
  function makeHangingPromise(signal, expression) {
    if (signal.aborted) {
      return Promise.reject(new HangingPromiseRejectionError(expression));
    } else {
      const hangingPromise = new Promise((_, reject) => {
        const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
        let currentListeners = abortListenersBySignal.get(signal);
        if (currentListeners) {
          currentListeners.push(boundRejection);
        } else {
          const listeners = [
            boundRejection
          ];
          abortListenersBySignal.set(signal, listeners);
          signal.addEventListener("abort", () => {
            for (let i = 0;i < listeners.length; i++) {
              listeners[i]();
            }
          }, {
            once: true
          });
        }
      });
      hangingPromise.catch(ignoreReject);
      return hangingPromise;
    }
  }
  function ignoreReject() {}
});
var require_metadata_constants = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    METADATA_BOUNDARY_NAME: function() {
      return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
      return OUTLET_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
      return VIEWPORT_BOUNDARY_NAME;
    }
  });
  var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
  var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
  var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
});
var require_scheduler = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    atLeastOneTask: function() {
      return atLeastOneTask;
    },
    scheduleImmediate: function() {
      return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
      return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
      return waitAtLeastOneReactRenderTask;
    }
  });
  var scheduleOnNextTick = (cb) => {
    Promise.resolve().then(() => {
      if (process.env.NEXT_RUNTIME === "edge") {
        setTimeout(cb, 0);
      } else {
        process.nextTick(cb);
      }
    });
  };
  var scheduleImmediate = (cb) => {
    if (process.env.NEXT_RUNTIME === "edge") {
      setTimeout(cb, 0);
    } else {
      setImmediate(cb);
    }
  };
  function atLeastOneTask() {
    return new Promise((resolve) => scheduleImmediate(resolve));
  }
  function waitAtLeastOneReactRenderTask() {
    if (process.env.NEXT_RUNTIME === "edge") {
      return new Promise((r) => setTimeout(r, 0));
    } else {
      return new Promise((r) => setImmediate(r));
    }
  }
});
var require_dynamic_rendering = __commonJS2((exports) => {
  var react = __toESM2(require_react2(), 1);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    Postpone: function() {
      return Postpone;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
      return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
      return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
      return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
      return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
      return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
      return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
      return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
      return createHangingInputAbortSignal;
    },
    createPostponedAbortSignal: function() {
      return createPostponedAbortSignal;
    },
    formatDynamicAPIAccesses: function() {
      return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
      return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
      return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
      return isPrerenderInterruptedError;
    },
    markCurrentScopeAsDynamic: function() {
      return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
      return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
      return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
      return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
      return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
      return trackDynamicDataInDynamicRender;
    },
    trackFallbackParamAccessed: function() {
      return trackFallbackParamAccessed;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
      return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
      return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
      return useDynamicRouteParams;
    }
  });
  var _react = /* @__PURE__ */ _interop_require_default(react);
  var _hooksservercontext = require_hooks_server_context();
  var _staticgenerationbailout = require_static_generation_bailout();
  var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
  var _workasyncstorageexternal = require_work_async_storage_external();
  var _dynamicrenderingutils = require_dynamic_rendering_utils();
  var _metadataconstants = require_metadata_constants();
  var _scheduler = require_scheduler();
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var hasPostpone = typeof _react.default.unstable_postpone === "function";
  function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
      isDebugDynamicAccesses,
      dynamicAccesses: [],
      syncDynamicExpression: undefined,
      syncDynamicErrorWithStack: null
    };
  }
  function createDynamicValidationState() {
    return {
      hasSuspendedDynamic: false,
      hasDynamicMetadata: false,
      hasDynamicViewport: false,
      hasSyncDynamicErrors: false,
      dynamicErrors: []
    };
  }
  function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? undefined : _trackingState_dynamicAccesses_.expression;
  }
  function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
      if (workUnitStore.type === "cache" || workUnitStore.type === "unstable-cache") {
        return;
      }
    }
    if (store.forceDynamic || store.forceStatic)
      return;
    if (store.dynamicShouldError) {
      throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E553",
        enumerable: false,
        configurable: true
      });
    }
    if (workUnitStore) {
      if (workUnitStore.type === "prerender-ppr") {
        postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
      } else if (workUnitStore.type === "prerender-legacy") {
        workUnitStore.revalidate = 0;
        const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
          value: "E550",
          enumerable: false,
          configurable: true
        });
        store.dynamicUsageDescription = expression;
        store.dynamicUsageStack = err.stack;
        throw err;
      } else if (workUnitStore && workUnitStore.type === "request") {
        workUnitStore.usedDynamic = true;
      }
    }
  }
  function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!prerenderStore || prerenderStore.type !== "prerender-ppr")
      return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
  }
  function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
      value: "E558",
      enumerable: false,
      configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
  }
  function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
      if (workUnitStore.type === "cache" || workUnitStore.type === "unstable-cache") {
        return;
      }
      if (workUnitStore.type === "prerender" || workUnitStore.type === "prerender-legacy") {
        workUnitStore.revalidate = 0;
      }
      if (workUnitStore.type === "request") {
        workUnitStore.usedDynamic = true;
      }
    }
  }
  function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
      dynamicTracking.dynamicAccesses.push({
        stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
        expression
      });
    }
  }
  function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
      if (dynamicTracking.syncDynamicErrorWithStack === null) {
        dynamicTracking.syncDynamicExpression = expression;
        dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
      }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
  }
  function trackSynchronousPlatformIOAccessInDev(requestStore) {
    requestStore.prerenderPhase = false;
  }
  function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
          dynamicTracking.syncDynamicExpression = expression;
          dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
          if (prerenderStore.validating === true) {
            dynamicTracking.syncDynamicLogged = true;
          }
        }
      }
      abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
  }
  var trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
  function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
  }
  function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
      dynamicTracking.dynamicAccesses.push({
        stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
        expression
      });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
  }
  function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  function isDynamicPostpone(err) {
    if (typeof err === "object" && err !== null && typeof err.message === "string") {
      return isDynamicPostponeReason(err.message);
    }
    return false;
  }
  function isDynamicPostponeReason(reason) {
    return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
  }
  if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
    throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
      value: "E296",
      enumerable: false,
      configurable: true
    });
  }
  var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
  function createPrerenderInterruptedError(message2) {
    const error = Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
  }
  function isPrerenderInterruptedError(error) {
    return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
  }
  function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
  }
  function consumeDynamicAccess(serverDynamic, clientDynamic) {
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
  }
  function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
      stack = stack.split(`
`).slice(4).filter((line) => {
        if (line.includes("node_modules/next/")) {
          return false;
        }
        if (line.includes(" (<anonymous>)")) {
          return false;
        }
        if (line.includes(" (node:")) {
          return false;
        }
        return true;
      }).join(`
`);
      return `Dynamic API Usage Debug - ${expression}:
${stack}`;
    });
  }
  function assertPostpone() {
    if (!hasPostpone) {
      throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
        value: "E224",
        enumerable: false,
        configurable: true
      });
    }
  }
  function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController;
    try {
      _react.default.unstable_postpone(reason);
    } catch (x) {
      controller.abort(x);
    }
    return controller.signal;
  }
  function createHangingInputAbortSignal(workUnitStore) {
    const controller = new AbortController;
    if (workUnitStore.cacheSignal) {
      workUnitStore.cacheSignal.inputReady().then(() => {
        controller.abort();
      });
    } else {
      (0, _scheduler.scheduleOnNextTick)(() => controller.abort());
    }
    return controller.signal;
  }
  function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
      dynamicTracking.dynamicAccesses.push({
        stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
        expression
      });
    }
  }
  function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workUnitStore) {
        if (workUnitStore.type === "prerender") {
          _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
        } else if (workUnitStore.type === "prerender-ppr") {
          postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === "prerender-legacy") {
          throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
        }
      }
    }
  }
  var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
  var hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
  var hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
  var hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
  function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
      return;
    } else if (hasMetadataRegex.test(componentStack)) {
      dynamicValidation.hasDynamicMetadata = true;
      return;
    } else if (hasViewportRegex.test(componentStack)) {
      dynamicValidation.hasDynamicViewport = true;
      return;
    } else if (hasSuspenseRegex.test(componentStack)) {
      dynamicValidation.hasSuspendedDynamic = true;
      return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
      dynamicValidation.hasSyncDynamicErrors = true;
      return;
    } else {
      const message2 = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
      const error = createErrorWithComponentStack(message2, componentStack);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
  }
  function createErrorWithComponentStack(message2, componentStack) {
    const error = Object.defineProperty(new Error(message2), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
    error.stack = "Error: " + message2 + componentStack;
    return error;
  }
  function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
      syncError = serverDynamic.syncDynamicErrorWithStack;
      syncExpression = serverDynamic.syncDynamicExpression;
      syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
      syncError = clientDynamic.syncDynamicErrorWithStack;
      syncExpression = clientDynamic.syncDynamicExpression;
      syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
      syncError = null;
      syncExpression = undefined;
      syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
      if (!syncLogged) {
        console.error(syncError);
      }
      throw new _staticgenerationbailout.StaticGenBailoutError;
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
      for (let i = 0;i < dynamicErrors.length; i++) {
        console.error(dynamicErrors[i]);
      }
      throw new _staticgenerationbailout.StaticGenBailoutError;
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
      if (dynamicValidation.hasDynamicMetadata) {
        if (syncError) {
          console.error(syncError);
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
            value: "E608",
            enumerable: false,
            configurable: true
          });
        }
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
          value: "E534",
          enumerable: false,
          configurable: true
        });
      } else if (dynamicValidation.hasDynamicViewport) {
        if (syncError) {
          console.error(syncError);
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
            value: "E573",
            enumerable: false,
            configurable: true
          });
        }
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
          value: "E590",
          enumerable: false,
          configurable: true
        });
      }
    }
  }
});
var require_create_deduped_by_callsite_server_error_logger = __commonJS2((exports) => {
  var react = __toESM2(require_react2(), 1);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
      return createDedupedByCallsiteServerErrorLoggerDev;
    }
  });
  var _react = /* @__PURE__ */ _interop_require_wildcard(react);
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = new WeakMap;
    var cacheNodeInterop = new WeakMap;
    return (_getRequireWildcardCache = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }
    var cache3 = _getRequireWildcardCache(nodeInterop);
    if (cache3 && cache3.has(obj)) {
      return cache3.get(obj);
    }
    var newObj = {
      __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache3) {
      cache3.set(obj, newObj);
    }
    return newObj;
  }
  var errorRef = {
    current: null
  };
  var cache2 = typeof _react.cache === "function" ? _react.cache : (fn) => fn;
  var logErrorOrWarn = process.env.__NEXT_DYNAMIC_IO ? console.error : console.warn;
  var flushCurrentErrorIfNew = cache2((key) => {
    try {
      logErrorOrWarn(errorRef.current);
    } finally {
      errorRef.current = null;
    }
  });
  function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
      const message2 = getMessage(...args);
      if (true) {
        var _stack;
        const callStackFrames = (_stack = new Error().stack) == null ? undefined : _stack.split(`
`);
        if (callStackFrames === undefined || callStackFrames.length < 4) {
          logErrorOrWarn(message2);
        } else {
          const key = callStackFrames[4];
          errorRef.current = message2;
          flushCurrentErrorIfNew(key);
        }
      } else {}
    };
  }
});
var require_after_task_async_storage_instance = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function() {
      return afterTaskAsyncStorageInstance;
    }
  });
  var _asynclocalstorage = require_async_local_storage();
  var afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
});
var require_after_task_async_storage_external = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function() {
      return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
  });
  var _aftertaskasyncstorageinstance = require_after_task_async_storage_instance();
});
var require_utils = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    isRequestAPICallableInsideAfter: function() {
      return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
      return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutError: function() {
      return throwWithStaticGenerationBailoutError;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
      return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
  });
  var _staticgenerationbailout = require_static_generation_bailout();
  var _aftertaskasyncstorageexternal = require_after_task_async_storage_external();
  function throwWithStaticGenerationBailoutError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
      value: "E576",
      enumerable: false,
      configurable: true
    });
  }
  function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
      value: "E543",
      enumerable: false,
      configurable: true
    });
  }
  function throwForSearchParamsAccessInUseCache(workStore) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used "searchParams" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "searchParams" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
      value: "E634",
      enumerable: false,
      configurable: true
    });
    workStore.invalidUsageError ??= error;
    throw error;
  }
  function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? undefined : afterTaskStore.rootTaskSpawnPhase) === "action";
  }
});
var require_cookies3 = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "cookies", {
    enumerable: true,
    get: function() {
      return cookies;
    }
  });
  var _requestcookies = require_request_cookies();
  var _cookies = require_cookies2();
  var _workasyncstorageexternal = require_work_async_storage_external();
  var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
  var _dynamicrendering = require_dynamic_rendering();
  var _staticgenerationbailout = require_static_generation_bailout();
  var _dynamicrenderingutils = require_dynamic_rendering_utils();
  var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
  var _scheduler = require_scheduler();
  var _utils = require_utils();
  function cookies() {
    const callingExpression = "cookies";
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
      if (workUnitStore && workUnitStore.phase === "after" && !(0, _utils.isRequestAPICallableInsideAfter)()) {
        throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
          value: "E88",
          enumerable: false,
          configurable: true
        });
      }
      if (workStore.forceStatic) {
        const underlyingCookies2 = createEmptyCookies();
        return makeUntrackedExoticCookies(underlyingCookies2);
      }
      if (workUnitStore) {
        if (workUnitStore.type === "cache") {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
            value: "E398",
            enumerable: false,
            configurable: true
          });
        } else if (workUnitStore.type === "unstable-cache") {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
            value: "E157",
            enumerable: false,
            configurable: true
          });
        }
      }
      if (workStore.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E549",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        if (workUnitStore.type === "prerender") {
          return makeDynamicallyTrackedExoticCookies(workStore.route, workUnitStore);
        } else if (workUnitStore.type === "prerender-ppr") {
          (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === "prerender-legacy") {
          (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
        }
      }
      (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
    }
    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
    let underlyingCookies;
    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(requestStore)) {
      underlyingCookies = requestStore.userspaceMutableCookies;
    } else {
      underlyingCookies = requestStore.cookies;
    }
    if (!(workStore == null ? undefined : workStore.isPrefetchRequest)) {
      return makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, workStore == null ? undefined : workStore.route);
    } else {
      return makeUntrackedExoticCookies(underlyingCookies);
    }
  }
  function createEmptyCookies() {
    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
  }
  var CachedCookies = new WeakMap;
  function makeDynamicallyTrackedExoticCookies(route, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, "`cookies()`");
    CachedCookies.set(prerenderStore, promise);
    Object.defineProperties(promise, {
      [Symbol.iterator]: {
        value: function() {
          const expression = "`cookies()[Symbol.iterator]()`";
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      size: {
        get() {
          const expression = "`cookies().size`";
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      get: {
        value: function get() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().get()`";
          } else {
            expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
          }
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      getAll: {
        value: function getAll() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().getAll()`";
          } else {
            expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
          }
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      has: {
        value: function has() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().has()`";
          } else {
            expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
          }
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      set: {
        value: function set() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().set()`";
          } else {
            const arg = arguments[0];
            if (arg) {
              expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
            } else {
              expression = "`cookies().set(...)`";
            }
          }
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      delete: {
        value: function() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().delete()`";
          } else if (arguments.length === 1) {
            expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
          } else {
            expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
          }
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      clear: {
        value: function clear() {
          const expression = "`cookies().clear()`";
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      toString: {
        value: function toString() {
          const expression = "`cookies().toString()`";
          const error = createCookiesAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      }
    });
    return promise;
  }
  function makeUntrackedExoticCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
      return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
      [Symbol.iterator]: {
        value: underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].bind(underlyingCookies) : polyfilledResponseCookiesIterator.bind(underlyingCookies)
      },
      size: {
        get() {
          return underlyingCookies.size;
        }
      },
      get: {
        value: underlyingCookies.get.bind(underlyingCookies)
      },
      getAll: {
        value: underlyingCookies.getAll.bind(underlyingCookies)
      },
      has: {
        value: underlyingCookies.has.bind(underlyingCookies)
      },
      set: {
        value: underlyingCookies.set.bind(underlyingCookies)
      },
      delete: {
        value: underlyingCookies.delete.bind(underlyingCookies)
      },
      clear: {
        value: typeof underlyingCookies.clear === "function" ? underlyingCookies.clear.bind(underlyingCookies) : polyfilledResponseCookiesClear.bind(underlyingCookies, promise)
      },
      toString: {
        value: underlyingCookies.toString.bind(underlyingCookies)
      }
    });
    return promise;
  }
  function makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, route) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
      return cachedCookies;
    }
    const promise = new Promise((resolve) => (0, _scheduler.scheduleImmediate)(() => resolve(underlyingCookies)));
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
      [Symbol.iterator]: {
        value: function() {
          const expression = "`...cookies()` or similar iteration";
          syncIODev(route, expression);
          return underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].apply(underlyingCookies, arguments) : polyfilledResponseCookiesIterator.call(underlyingCookies);
        },
        writable: false
      },
      size: {
        get() {
          const expression = "`cookies().size`";
          syncIODev(route, expression);
          return underlyingCookies.size;
        }
      },
      get: {
        value: function get() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().get()`";
          } else {
            expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
          }
          syncIODev(route, expression);
          return underlyingCookies.get.apply(underlyingCookies, arguments);
        },
        writable: false
      },
      getAll: {
        value: function getAll() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().getAll()`";
          } else {
            expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
          }
          syncIODev(route, expression);
          return underlyingCookies.getAll.apply(underlyingCookies, arguments);
        },
        writable: false
      },
      has: {
        value: function get() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().has()`";
          } else {
            expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
          }
          syncIODev(route, expression);
          return underlyingCookies.has.apply(underlyingCookies, arguments);
        },
        writable: false
      },
      set: {
        value: function set() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().set()`";
          } else {
            const arg = arguments[0];
            if (arg) {
              expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
            } else {
              expression = "`cookies().set(...)`";
            }
          }
          syncIODev(route, expression);
          return underlyingCookies.set.apply(underlyingCookies, arguments);
        },
        writable: false
      },
      delete: {
        value: function() {
          let expression;
          if (arguments.length === 0) {
            expression = "`cookies().delete()`";
          } else if (arguments.length === 1) {
            expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
          } else {
            expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
          }
          syncIODev(route, expression);
          return underlyingCookies.delete.apply(underlyingCookies, arguments);
        },
        writable: false
      },
      clear: {
        value: function clear() {
          const expression = "`cookies().clear()`";
          syncIODev(route, expression);
          return typeof underlyingCookies.clear === "function" ? underlyingCookies.clear.apply(underlyingCookies, arguments) : polyfilledResponseCookiesClear.call(underlyingCookies, promise);
        },
        writable: false
      },
      toString: {
        value: function toString() {
          const expression = "`cookies().toString()` or implicit casting";
          syncIODev(route, expression);
          return underlyingCookies.toString.apply(underlyingCookies, arguments);
        },
        writable: false
      }
    });
    return promise;
  }
  function describeNameArg(arg) {
    return typeof arg === "object" && arg !== null && typeof arg.name === "string" ? `'${arg.name}'` : typeof arg === "string" ? `'${arg}'` : "...";
  }
  function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === "request" && workUnitStore.prerenderPhase === true) {
      const requestStore = workUnitStore;
      (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    warnForSyncAccess(route, expression);
  }
  var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
  function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : "This route ";
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`cookies()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
      value: "E223",
      enumerable: false,
      configurable: true
    });
  }
  function polyfilledResponseCookiesIterator() {
    return this.getAll().map((c) => [
      c.name,
      c
    ]).values();
  }
  function polyfilledResponseCookiesClear(returnable) {
    for (const cookie of this.getAll()) {
      this.delete(cookie.name);
    }
    return returnable;
  }
});
var require_headers = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all)
      Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
  }
  _export(exports, {
    HeadersAdapter: function() {
      return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
      return ReadonlyHeadersError;
    }
  });
  var _reflect = require_reflect();

  class ReadonlyHeadersError extends Error {
    constructor() {
      super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
      throw new ReadonlyHeadersError;
    }
  }

  class HeadersAdapter extends Headers {
    constructor(headers) {
      super();
      this.headers = new Proxy(headers, {
        get(target, prop, receiver) {
          if (typeof prop === "symbol") {
            return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
          const lowercased = prop.toLowerCase();
          const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
          if (typeof original === "undefined")
            return;
          return _reflect.ReflectAdapter.get(target, original, receiver);
        },
        set(target, prop, value, receiver) {
          if (typeof prop === "symbol") {
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
          }
          const lowercased = prop.toLowerCase();
          const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
          return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
        },
        has(target, prop) {
          if (typeof prop === "symbol")
            return _reflect.ReflectAdapter.has(target, prop);
          const lowercased = prop.toLowerCase();
          const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
          if (typeof original === "undefined")
            return false;
          return _reflect.ReflectAdapter.has(target, original);
        },
        deleteProperty(target, prop) {
          if (typeof prop === "symbol")
            return _reflect.ReflectAdapter.deleteProperty(target, prop);
          const lowercased = prop.toLowerCase();
          const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
          if (typeof original === "undefined")
            return true;
          return _reflect.ReflectAdapter.deleteProperty(target, original);
        }
      });
    }
    static seal(headers) {
      return new Proxy(headers, {
        get(target, prop, receiver) {
          switch (prop) {
            case "append":
            case "delete":
            case "set":
              return ReadonlyHeadersError.callable;
            default:
              return _reflect.ReflectAdapter.get(target, prop, receiver);
          }
        }
      });
    }
    merge(value) {
      if (Array.isArray(value))
        return value.join(", ");
      return value;
    }
    static from(headers) {
      if (headers instanceof Headers)
        return headers;
      return new HeadersAdapter(headers);
    }
    append(name, value) {
      const existing = this.headers[name];
      if (typeof existing === "string") {
        this.headers[name] = [
          existing,
          value
        ];
      } else if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        this.headers[name] = value;
      }
    }
    delete(name) {
      delete this.headers[name];
    }
    get(name) {
      const value = this.headers[name];
      if (typeof value !== "undefined")
        return this.merge(value);
      return null;
    }
    has(name) {
      return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
      this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
      for (const [name, value] of this.entries()) {
        callbackfn.call(thisArg, value, name, this);
      }
    }
    *entries() {
      for (const key of Object.keys(this.headers)) {
        const name = key.toLowerCase();
        const value = this.get(name);
        yield [
          name,
          value
        ];
      }
    }
    *keys() {
      for (const key of Object.keys(this.headers)) {
        const name = key.toLowerCase();
        yield name;
      }
    }
    *values() {
      for (const key of Object.keys(this.headers)) {
        const value = this.get(key);
        yield value;
      }
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  }
});
var require_headers2 = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "headers", {
    enumerable: true,
    get: function() {
      return headers;
    }
  });
  var _headers = require_headers();
  var _workasyncstorageexternal = require_work_async_storage_external();
  var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
  var _dynamicrendering = require_dynamic_rendering();
  var _staticgenerationbailout = require_static_generation_bailout();
  var _dynamicrenderingutils = require_dynamic_rendering_utils();
  var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
  var _scheduler = require_scheduler();
  var _utils = require_utils();
  function headers() {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
      if (workUnitStore && workUnitStore.phase === "after" && !(0, _utils.isRequestAPICallableInsideAfter)()) {
        throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
          value: "E367",
          enumerable: false,
          configurable: true
        });
      }
      if (workStore.forceStatic) {
        const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
        return makeUntrackedExoticHeaders(underlyingHeaders);
      }
      if (workUnitStore) {
        if (workUnitStore.type === "cache") {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
            value: "E304",
            enumerable: false,
            configurable: true
          });
        } else if (workUnitStore.type === "unstable-cache") {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
            value: "E127",
            enumerable: false,
            configurable: true
          });
        }
      }
      if (workStore.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E525",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        if (workUnitStore.type === "prerender") {
          return makeDynamicallyTrackedExoticHeaders(workStore.route, workUnitStore);
        } else if (workUnitStore.type === "prerender-ppr") {
          (0, _dynamicrendering.postponeWithTracking)(workStore.route, "headers", workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === "prerender-legacy") {
          (0, _dynamicrendering.throwToInterruptStaticGeneration)("headers", workStore, workUnitStore);
        }
      }
      (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
    }
    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)("headers");
    if (!(workStore == null ? undefined : workStore.isPrefetchRequest)) {
      return makeUntrackedExoticHeadersWithDevWarnings(requestStore.headers, workStore == null ? undefined : workStore.route);
    } else {
      return makeUntrackedExoticHeaders(requestStore.headers);
    }
  }
  var CachedHeaders = new WeakMap;
  function makeDynamicallyTrackedExoticHeaders(route, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
      return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, "`headers()`");
    CachedHeaders.set(prerenderStore, promise);
    Object.defineProperties(promise, {
      append: {
        value: function append() {
          const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      delete: {
        value: function _delete() {
          const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      get: {
        value: function get() {
          const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      has: {
        value: function has() {
          const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      set: {
        value: function set() {
          const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      getSetCookie: {
        value: function getSetCookie() {
          const expression = "`headers().getSetCookie()`";
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      forEach: {
        value: function forEach() {
          const expression = "`headers().forEach(...)`";
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      keys: {
        value: function keys() {
          const expression = "`headers().keys()`";
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      values: {
        value: function values() {
          const expression = "`headers().values()`";
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      entries: {
        value: function entries() {
          const expression = "`headers().entries()`";
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      },
      [Symbol.iterator]: {
        value: function() {
          const expression = "`headers()[Symbol.iterator]()`";
          const error = createHeadersAccessError(route, expression);
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
      }
    });
    return promise;
  }
  function makeUntrackedExoticHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
      return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
      append: {
        value: underlyingHeaders.append.bind(underlyingHeaders)
      },
      delete: {
        value: underlyingHeaders.delete.bind(underlyingHeaders)
      },
      get: {
        value: underlyingHeaders.get.bind(underlyingHeaders)
      },
      has: {
        value: underlyingHeaders.has.bind(underlyingHeaders)
      },
      set: {
        value: underlyingHeaders.set.bind(underlyingHeaders)
      },
      getSetCookie: {
        value: underlyingHeaders.getSetCookie.bind(underlyingHeaders)
      },
      forEach: {
        value: underlyingHeaders.forEach.bind(underlyingHeaders)
      },
      keys: {
        value: underlyingHeaders.keys.bind(underlyingHeaders)
      },
      values: {
        value: underlyingHeaders.values.bind(underlyingHeaders)
      },
      entries: {
        value: underlyingHeaders.entries.bind(underlyingHeaders)
      },
      [Symbol.iterator]: {
        value: underlyingHeaders[Symbol.iterator].bind(underlyingHeaders)
      }
    });
    return promise;
  }
  function makeUntrackedExoticHeadersWithDevWarnings(underlyingHeaders, route) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
      return cachedHeaders;
    }
    const promise = new Promise((resolve) => (0, _scheduler.scheduleImmediate)(() => resolve(underlyingHeaders)));
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
      append: {
        value: function append() {
          const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
          syncIODev(route, expression);
          return underlyingHeaders.append.apply(underlyingHeaders, arguments);
        }
      },
      delete: {
        value: function _delete() {
          const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
          syncIODev(route, expression);
          return underlyingHeaders.delete.apply(underlyingHeaders, arguments);
        }
      },
      get: {
        value: function get() {
          const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
          syncIODev(route, expression);
          return underlyingHeaders.get.apply(underlyingHeaders, arguments);
        }
      },
      has: {
        value: function has() {
          const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
          syncIODev(route, expression);
          return underlyingHeaders.has.apply(underlyingHeaders, arguments);
        }
      },
      set: {
        value: function set() {
          const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
          syncIODev(route, expression);
          return underlyingHeaders.set.apply(underlyingHeaders, arguments);
        }
      },
      getSetCookie: {
        value: function getSetCookie() {
          const expression = "`headers().getSetCookie()`";
          syncIODev(route, expression);
          return underlyingHeaders.getSetCookie.apply(underlyingHeaders, arguments);
        }
      },
      forEach: {
        value: function forEach() {
          const expression = "`headers().forEach(...)`";
          syncIODev(route, expression);
          return underlyingHeaders.forEach.apply(underlyingHeaders, arguments);
        }
      },
      keys: {
        value: function keys() {
          const expression = "`headers().keys()`";
          syncIODev(route, expression);
          return underlyingHeaders.keys.apply(underlyingHeaders, arguments);
        }
      },
      values: {
        value: function values() {
          const expression = "`headers().values()`";
          syncIODev(route, expression);
          return underlyingHeaders.values.apply(underlyingHeaders, arguments);
        }
      },
      entries: {
        value: function entries() {
          const expression = "`headers().entries()`";
          syncIODev(route, expression);
          return underlyingHeaders.entries.apply(underlyingHeaders, arguments);
        }
      },
      [Symbol.iterator]: {
        value: function() {
          const expression = "`...headers()` or similar iteration";
          syncIODev(route, expression);
          return underlyingHeaders[Symbol.iterator].apply(underlyingHeaders, arguments);
        }
      }
    });
    return promise;
  }
  function describeNameArg(arg) {
    return typeof arg === "string" ? `'${arg}'` : "...";
  }
  function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === "request" && workUnitStore.prerenderPhase === true) {
      const requestStore = workUnitStore;
      (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    warnForSyncAccess(route, expression);
  }
  var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
  function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : "This route ";
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`headers()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
      value: "E277",
      enumerable: false,
      configurable: true
    });
  }
});
var require_draft_mode = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "draftMode", {
    enumerable: true,
    get: function() {
      return draftMode;
    }
  });
  var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
  var _workasyncstorageexternal = require_work_async_storage_external();
  var _dynamicrendering = require_dynamic_rendering();
  var _creatededupedbycallsiteservererrorlogger = require_create_deduped_by_callsite_server_error_logger();
  var _staticgenerationbailout = require_static_generation_bailout();
  var _hooksservercontext = require_hooks_server_context();
  function draftMode() {
    const callingExpression = "draftMode";
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore || !workUnitStore) {
      (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    switch (workUnitStore.type) {
      case "request":
        return createOrGetCachedExoticDraftMode(workUnitStore.draftMode, workStore);
      case "cache":
      case "unstable-cache":
        const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
        if (draftModeProvider) {
          return createOrGetCachedExoticDraftMode(draftModeProvider, workStore);
        }
      case "prerender":
      case "prerender-ppr":
      case "prerender-legacy":
        if (!(workStore == null ? undefined : workStore.isPrefetchRequest)) {
          const route = workStore == null ? undefined : workStore.route;
          return createExoticDraftModeWithDevWarnings(null, route);
        } else {
          return createExoticDraftMode(null);
        }
      default:
        const _exhaustiveCheck = workUnitStore;
        return _exhaustiveCheck;
    }
  }
  function createOrGetCachedExoticDraftMode(draftModeProvider, workStore) {
    const cachedDraftMode = CachedDraftModes.get(draftMode);
    if (cachedDraftMode) {
      return cachedDraftMode;
    }
    let promise;
    if (!(workStore == null ? undefined : workStore.isPrefetchRequest)) {
      const route = workStore == null ? undefined : workStore.route;
      promise = createExoticDraftModeWithDevWarnings(draftModeProvider, route);
    } else {
      promise = createExoticDraftMode(draftModeProvider);
    }
    CachedDraftModes.set(draftModeProvider, promise);
    return promise;
  }
  var CachedDraftModes = new WeakMap;
  function createExoticDraftMode(underlyingProvider) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, "isEnabled", {
      get() {
        return instance.isEnabled;
      },
      set(newValue) {
        Object.defineProperty(promise, "isEnabled", {
          value: newValue,
          writable: true,
          enumerable: true
        });
      },
      enumerable: true,
      configurable: true
    });
    promise.enable = instance.enable.bind(instance);
    promise.disable = instance.disable.bind(instance);
    return promise;
  }
  function createExoticDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, "isEnabled", {
      get() {
        const expression = "`draftMode().isEnabled`";
        syncIODev(route, expression);
        return instance.isEnabled;
      },
      set(newValue) {
        Object.defineProperty(promise, "isEnabled", {
          value: newValue,
          writable: true,
          enumerable: true
        });
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(promise, "enable", {
      value: function get() {
        const expression = "`draftMode().enable()`";
        syncIODev(route, expression);
        return instance.enable.apply(instance, arguments);
      }
    });
    Object.defineProperty(promise, "disable", {
      value: function get() {
        const expression = "`draftMode().disable()`";
        syncIODev(route, expression);
        return instance.disable.apply(instance, arguments);
      }
    });
    return promise;
  }

  class DraftMode {
    constructor(provider3) {
      this._provider = provider3;
    }
    get isEnabled() {
      if (this._provider !== null) {
        return this._provider.isEnabled;
      }
      return false;
    }
    enable() {
      trackDynamicDraftMode("draftMode().enable()");
      if (this._provider !== null) {
        this._provider.enable();
      }
    }
    disable() {
      trackDynamicDraftMode("draftMode().disable()");
      if (this._provider !== null) {
        this._provider.disable();
      }
    }
  }
  function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === "request" && workUnitStore.prerenderPhase === true) {
      const requestStore = workUnitStore;
      (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    warnForSyncAccess(route, expression);
  }
  var warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
  function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : "This route ";
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
      value: "E377",
      enumerable: false,
      configurable: true
    });
  }
  function trackDynamicDraftMode(expression) {
    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (store) {
      if (workUnitStore) {
        if (workUnitStore.type === "cache") {
          throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
            value: "E246",
            enumerable: false,
            configurable: true
          });
        } else if (workUnitStore.type === "unstable-cache") {
          throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
            value: "E259",
            enumerable: false,
            configurable: true
          });
        } else if (workUnitStore.phase === "after") {
          throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside \`after\`. The enabled status of draftMode can be read inside \`after\` but you cannot enable or disable draftMode. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E348",
            enumerable: false,
            configurable: true
          });
        }
      }
      if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        if (workUnitStore.type === "prerender") {
          const error = Object.defineProperty(new Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
            value: "E126",
            enumerable: false,
            configurable: true
          });
          (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(store.route, expression, error, workUnitStore);
        } else if (workUnitStore.type === "prerender-ppr") {
          (0, _dynamicrendering.postponeWithTracking)(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === "prerender-legacy") {
          workUnitStore.revalidate = 0;
          const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
            value: "E558",
            enumerable: false,
            configurable: true
          });
          store.dynamicUsageDescription = expression;
          store.dynamicUsageStack = err.stack;
          throw err;
        } else if (workUnitStore && workUnitStore.type === "request") {
          workUnitStore.usedDynamic = true;
        }
      }
    }
  }
});
var encoder2 = new TextEncoder;
var decoder2 = new TextDecoder;
var MAX_INT322 = 2 ** 32;
function concat2(...buffers) {
  const size4 = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size4);
  let i = 0;
  for (const buffer of buffers) {
    buf.set(buffer, i);
    i += buffer.length;
  }
  return buf;
}
function decodeBase642(encoded) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(encoded);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0;i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
function decode2(input) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(typeof input === "string" ? input : decoder2.decode(input), {
      alphabet: "base64url"
    });
  }
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder2.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase642(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}

class JOSEError2 extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(message2, options) {
    super(message2, options);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

class JWTClaimValidationFailed2 extends JOSEError2 {
  static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
}

class JWTExpired2 extends JOSEError2 {
  static code = "ERR_JWT_EXPIRED";
  code = "ERR_JWT_EXPIRED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
}

class JOSEAlgNotAllowed2 extends JOSEError2 {
  static code = "ERR_JOSE_ALG_NOT_ALLOWED";
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
}

class JOSENotSupported2 extends JOSEError2 {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
}

class JWSInvalid2 extends JOSEError2 {
  static code = "ERR_JWS_INVALID";
  code = "ERR_JWS_INVALID";
}

class JWTInvalid2 extends JOSEError2 {
  static code = "ERR_JWT_INVALID";
  code = "ERR_JWT_INVALID";
}

class JWSSignatureVerificationFailed2 extends JOSEError2 {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(message2 = "signature verification failed", options) {
    super(message2, options);
  }
}
function unusable2(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm2(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength2(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve2(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage2(key, usage) {
  if (usage && !key.usages.includes(usage)) {
    throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
  }
}
function checkSigCryptoKey2(key, alg, usage) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm2(key.algorithm, "HMAC"))
        throw unusable2("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength2(key.algorithm.hash);
      if (actual !== expected)
        throw unusable2(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm2(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable2("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength2(key.algorithm.hash);
      if (actual !== expected)
        throw unusable2(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm2(key.algorithm, "RSA-PSS"))
        throw unusable2("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength2(key.algorithm.hash);
      if (actual !== expected)
        throw unusable2(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!isAlgorithm2(key.algorithm, "Ed25519"))
        throw unusable2("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm2(key.algorithm, "ECDSA"))
        throw unusable2("ECDSA");
      const expected = getNamedCurve2(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable2(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage2(key, usage);
}
function message2(msg, actual, ...types) {
  types = types.filter(Boolean);
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else if (types.length === 2) {
    msg += `one of type ${types[0]} or ${types[1]}.`;
  } else {
    msg += `of type ${types[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalid_key_input_default2 = (actual, ...types) => {
  return message2("Key must be ", actual, ...types);
};
function withAlg2(alg, actual, ...types) {
  return message2(`Key for the ${alg} algorithm must be `, actual, ...types);
}
function isCryptoKey2(key) {
  return key?.[Symbol.toStringTag] === "CryptoKey";
}
function isKeyObject2(key) {
  return key?.[Symbol.toStringTag] === "KeyObject";
}
var is_key_like_default2 = (key) => {
  return isCryptoKey2(key) || isKeyObject2(key);
};
var is_disjoint_default2 = (...headers) => {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
};
function isObjectLike2(value) {
  return typeof value === "object" && value !== null;
}
var is_object_default2 = (input) => {
  if (!isObjectLike2(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
};
var check_key_length_default2 = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};
function subtleMapping2(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported2('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported2('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
        case "EdDSA":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported2('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported2('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var jwk_to_key_default2 = async (jwk) => {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping2(jwk);
  const keyData = { ...jwk };
  delete keyData.alg;
  delete keyData.use;
  return crypto.subtle.importKey("jwk", keyData, algorithm, jwk.ext ?? (jwk.d ? false : true), jwk.key_ops ?? keyUsages);
};
async function importJWK2(jwk, alg, options) {
  if (!is_object_default2(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  let ext;
  alg ??= jwk.alg;
  ext ??= options?.extractable ?? jwk.ext;
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode2(jwk.k);
    case "RSA":
      if ("oth" in jwk && jwk.oth !== undefined) {
        throw new JOSENotSupported2('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default2({ ...jwk, alg, ext });
    default:
      throw new JOSENotSupported2('Unsupported "kty" (Key Type) Parameter value');
  }
}
var validate_crit_default2 = (Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) => {
  if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === undefined) {
    return new Set;
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== undefined) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported2(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === undefined) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
};
var validate_algorithms_default2 = (option, algorithms) => {
  if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return;
  }
  return new Set(algorithms);
};
function isJWK2(key) {
  return is_object_default2(key) && typeof key.kty === "string";
}
function isPrivateJWK2(key) {
  return key.kty !== "oct" && typeof key.d === "string";
}
function isPublicJWK2(key) {
  return key.kty !== "oct" && typeof key.d === "undefined";
}
function isSecretJWK2(key) {
  return key.kty === "oct" && typeof key.k === "string";
}
var cache2;
var handleJWK2 = async (key, jwk, alg, freeze = false) => {
  cache2 ||= new WeakMap;
  let cached = cache2.get(key);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const cryptoKey = await jwk_to_key_default2({ ...jwk, alg });
  if (freeze)
    Object.freeze(key);
  if (!cached) {
    cache2.set(key, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var handleKeyObject2 = (keyObject, alg) => {
  cache2 ||= new WeakMap;
  let cached = cache2.get(keyObject);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const isPublic = keyObject.type === "public";
  const extractable = isPublic ? true : false;
  let cryptoKey;
  if (keyObject.asymmetricKeyType === "x25519") {
    switch (alg) {
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : ["deriveBits"]);
  }
  if (keyObject.asymmetricKeyType === "ed25519") {
    if (alg !== "EdDSA" && alg !== "Ed25519") {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
      isPublic ? "verify" : "sign"
    ]);
  }
  if (keyObject.asymmetricKeyType === "rsa") {
    let hash;
    switch (alg) {
      case "RSA-OAEP":
        hash = "SHA-1";
        break;
      case "RS256":
      case "PS256":
      case "RSA-OAEP-256":
        hash = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "RSA-OAEP-384":
        hash = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "RSA-OAEP-512":
        hash = "SHA-512";
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg.startsWith("RSA-OAEP")) {
      return keyObject.toCryptoKey({
        name: "RSA-OAEP",
        hash
      }, extractable, isPublic ? ["encrypt"] : ["decrypt"]);
    }
    cryptoKey = keyObject.toCryptoKey({
      name: alg.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
      hash
    }, extractable, [isPublic ? "verify" : "sign"]);
  }
  if (keyObject.asymmetricKeyType === "ec") {
    const nist = new Map([
      ["prime256v1", "P-256"],
      ["secp384r1", "P-384"],
      ["secp521r1", "P-521"]
    ]);
    const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
    if (!namedCurve) {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg === "ES256" && namedCurve === "P-256") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES384" && namedCurve === "P-384") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES512" && namedCurve === "P-521") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg.startsWith("ECDH-ES")) {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDH",
        namedCurve
      }, extractable, isPublic ? [] : ["deriveBits"]);
    }
  }
  if (!cryptoKey) {
    throw new TypeError("given KeyObject instance cannot be used for this algorithm");
  }
  if (!cached) {
    cache2.set(keyObject, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var normalize_key_default2 = async (key, alg) => {
  if (key instanceof Uint8Array) {
    return key;
  }
  if (isCryptoKey2(key)) {
    return key;
  }
  if (isKeyObject2(key)) {
    if (key.type === "secret") {
      return key.export();
    }
    if ("toCryptoKey" in key && typeof key.toCryptoKey === "function") {
      try {
        return handleKeyObject2(key, alg);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
      }
    }
    let jwk = key.export({ format: "jwk" });
    return handleJWK2(key, jwk, alg);
  }
  if (isJWK2(key)) {
    if (key.k) {
      return decode2(key.k);
    }
    return handleJWK2(key, key, alg, true);
  }
  throw new Error("unreachable");
};
var tag2 = (key) => key?.[Symbol.toStringTag];
var jwkMatchesOp2 = (alg, key, usage) => {
  if (key.use !== undefined) {
    let expected;
    switch (usage) {
      case "sign":
      case "verify":
        expected = "sig";
        break;
      case "encrypt":
      case "decrypt":
        expected = "enc";
        break;
    }
    if (key.use !== expected) {
      throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
    }
  }
  if (key.alg !== undefined && key.alg !== alg) {
    throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
  }
  if (Array.isArray(key.key_ops)) {
    let expectedKeyOp;
    switch (true) {
      case (usage === "sign" || usage === "verify"):
      case alg === "dir":
      case alg.includes("CBC-HS"):
        expectedKeyOp = usage;
        break;
      case alg.startsWith("PBES2"):
        expectedKeyOp = "deriveBits";
        break;
      case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
        if (!alg.includes("GCM") && alg.endsWith("KW")) {
          expectedKeyOp = usage === "encrypt" ? "wrapKey" : "unwrapKey";
        } else {
          expectedKeyOp = usage;
        }
        break;
      case (usage === "encrypt" && alg.startsWith("RSA")):
        expectedKeyOp = "wrapKey";
        break;
      case usage === "decrypt":
        expectedKeyOp = alg.startsWith("RSA") ? "unwrapKey" : "deriveBits";
        break;
    }
    if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
      throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
    }
  }
  return true;
};
var symmetricTypeCheck2 = (alg, key, usage) => {
  if (key instanceof Uint8Array)
    return;
  if (isJWK2(key)) {
    if (isSecretJWK2(key) && jwkMatchesOp2(alg, key, usage))
      return;
    throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
  }
  if (!is_key_like_default2(key)) {
    throw new TypeError(withAlg2(alg, key, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${tag2(key)} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck2 = (alg, key, usage) => {
  if (isJWK2(key)) {
    switch (usage) {
      case "decrypt":
      case "sign":
        if (isPrivateJWK2(key) && jwkMatchesOp2(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a private JWK`);
      case "encrypt":
      case "verify":
        if (isPublicJWK2(key) && jwkMatchesOp2(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a public JWK`);
    }
  }
  if (!is_key_like_default2(key)) {
    throw new TypeError(withAlg2(alg, key, "CryptoKey", "KeyObject", "JSON Web Key"));
  }
  if (key.type === "secret") {
    throw new TypeError(`${tag2(key)} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (key.type === "public") {
    switch (usage) {
      case "sign":
        throw new TypeError(`${tag2(key)} instances for asymmetric algorithm signing must be of type "private"`);
      case "decrypt":
        throw new TypeError(`${tag2(key)} instances for asymmetric algorithm decryption must be of type "private"`);
      default:
        break;
    }
  }
  if (key.type === "private") {
    switch (usage) {
      case "verify":
        throw new TypeError(`${tag2(key)} instances for asymmetric algorithm verifying must be of type "public"`);
      case "encrypt":
        throw new TypeError(`${tag2(key)} instances for asymmetric algorithm encryption must be of type "public"`);
      default:
        break;
    }
  }
};
var check_key_type_default2 = (alg, key, usage) => {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(alg) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck2(alg, key, usage);
  } else {
    asymmetricTypeCheck2(alg, key, usage);
  }
};
var subtle_dsa_default2 = (alg, algorithm) => {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: parseInt(alg.slice(-3), 10) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "Ed25519":
    case "EdDSA":
      return { name: "Ed25519" };
    default:
      throw new JOSENotSupported2(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
};
var get_sign_verify_key_default2 = async (alg, key, usage) => {
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default2(key, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    return crypto.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  checkSigCryptoKey2(key, alg, usage);
  return key;
};
var verify_default2 = async (alg, key, signature, data) => {
  const cryptoKey = await get_sign_verify_key_default2(alg, key, "verify");
  check_key_length_default2(alg, cryptoKey);
  const algorithm = subtle_dsa_default2(alg, cryptoKey.algorithm);
  try {
    return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
};
async function flattenedVerify2(jws, key, options) {
  if (!is_object_default2(jws)) {
    throw new JWSInvalid2("Flattened JWS must be an object");
  }
  if (jws.protected === undefined && jws.header === undefined) {
    throw new JWSInvalid2('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== undefined && typeof jws.protected !== "string") {
    throw new JWSInvalid2("JWS Protected Header incorrect type");
  }
  if (jws.payload === undefined) {
    throw new JWSInvalid2("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid2("JWS Signature missing or incorrect type");
  }
  if (jws.header !== undefined && !is_object_default2(jws.header)) {
    throw new JWSInvalid2("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode2(jws.protected);
      parsedProt = JSON.parse(decoder2.decode(protectedHeader));
    } catch {
      throw new JWSInvalid2("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default2(parsedProt, jws.header)) {
    throw new JWSInvalid2("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default2(JWSInvalid2, new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
  let b642 = true;
  if (extensions.has("b64")) {
    b642 = parsedProt.b64;
    if (typeof b642 !== "boolean") {
      throw new JWSInvalid2('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid2('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default2("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed2('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b642) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid2("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid2("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default2(alg, key, "verify");
  const data = concat2(encoder2.encode(jws.protected ?? ""), encoder2.encode("."), typeof jws.payload === "string" ? encoder2.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode2(jws.signature);
  } catch {
    throw new JWSInvalid2("Failed to base64url decode the signature");
  }
  const k = await normalize_key_default2(key, alg);
  const verified = await verify_default2(alg, k, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed2;
  }
  let payload;
  if (b642) {
    try {
      payload = decode2(jws.payload);
    } catch {
      throw new JWSInvalid2("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder2.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== undefined) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== undefined) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key: k };
  }
  return result;
}
async function compactVerify2(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder2.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid2("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid2("Invalid Compact JWS");
  }
  const verified = await flattenedVerify2({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var epoch_default2 = (date) => Math.floor(date.getTime() / 1000);
var minute2 = 60;
var hour2 = minute2 * 60;
var day2 = hour2 * 24;
var week2 = day2 * 7;
var year2 = day2 * 365.25;
var REGEX2 = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs_default2 = (str) => {
  const matched = REGEX2.exec(str);
  if (!matched || matched[4] && matched[1]) {
    throw new TypeError("Invalid time period format");
  }
  const value = parseFloat(matched[2]);
  const unit = matched[3].toLowerCase();
  let numericDate;
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      numericDate = Math.round(value);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      numericDate = Math.round(value * minute2);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      numericDate = Math.round(value * hour2);
      break;
    case "day":
    case "days":
    case "d":
      numericDate = Math.round(value * day2);
      break;
    case "week":
    case "weeks":
    case "w":
      numericDate = Math.round(value * week2);
      break;
    default:
      numericDate = Math.round(value * year2);
      break;
  }
  if (matched[1] === "-" || matched[4] === "ago") {
    return -numericDate;
  }
  return numericDate;
};
function validateInput2(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
var normalizeTyp2 = (value) => {
  if (value.includes("/")) {
    return value.toLowerCase();
  }
  return `application/${value.toLowerCase()}`;
};
var checkAudiencePresence2 = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
function validateClaimsSet2(protectedHeader, encodedPayload, options = {}) {
  let payload;
  try {
    payload = JSON.parse(decoder2.decode(encodedPayload));
  } catch {}
  if (!is_object_default2(payload)) {
    throw new JWTInvalid2("JWT Claims Set must be a top-level JSON object");
  }
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp2(protectedHeader.typ) !== normalizeTyp2(typ))) {
    throw new JWTClaimValidationFailed2('unexpected "typ" JWT header value', payload, "typ", "check_failed");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== undefined)
    presenceCheck.push("iat");
  if (audience !== undefined)
    presenceCheck.push("aud");
  if (subject !== undefined)
    presenceCheck.push("sub");
  if (issuer !== undefined)
    presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed2(`missing required "${claim}" claim`, payload, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed2('unexpected "iss" claim value', payload, "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed2('unexpected "sub" claim value', payload, "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence2(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed2('unexpected "aud" claim value', payload, "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs_default2(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch_default2(currentDate || new Date);
  if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed2('"iat" claim must be a number', payload, "iat", "invalid");
  }
  if (payload.nbf !== undefined) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed2('"nbf" claim must be a number', payload, "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed2('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
    }
  }
  if (payload.exp !== undefined) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed2('"exp" claim must be a number', payload, "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired2('"exp" claim timestamp check failed', payload, "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max2 = typeof maxTokenAge === "number" ? maxTokenAge : secs_default2(maxTokenAge);
    if (age - tolerance > max2) {
      throw new JWTExpired2('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed2('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
    }
  }
  return payload;
}

class JWTClaimsBuilder2 {
  #payload;
  constructor(payload) {
    if (!is_object_default2(payload)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    this.#payload = structuredClone(payload);
  }
  data() {
    return encoder2.encode(JSON.stringify(this.#payload));
  }
  get iss() {
    return this.#payload.iss;
  }
  set iss(value) {
    this.#payload.iss = value;
  }
  get sub() {
    return this.#payload.sub;
  }
  set sub(value) {
    this.#payload.sub = value;
  }
  get aud() {
    return this.#payload.aud;
  }
  set aud(value) {
    this.#payload.aud = value;
  }
  set jti(value) {
    this.#payload.jti = value;
  }
  set nbf(value) {
    if (typeof value === "number") {
      this.#payload.nbf = validateInput2("setNotBefore", value);
    } else if (value instanceof Date) {
      this.#payload.nbf = validateInput2("setNotBefore", epoch_default2(value));
    } else {
      this.#payload.nbf = epoch_default2(new Date) + secs_default2(value);
    }
  }
  set exp(value) {
    if (typeof value === "number") {
      this.#payload.exp = validateInput2("setExpirationTime", value);
    } else if (value instanceof Date) {
      this.#payload.exp = validateInput2("setExpirationTime", epoch_default2(value));
    } else {
      this.#payload.exp = epoch_default2(new Date) + secs_default2(value);
    }
  }
  set iat(value) {
    if (typeof value === "undefined") {
      this.#payload.iat = epoch_default2(new Date);
    } else if (value instanceof Date) {
      this.#payload.iat = validateInput2("setIssuedAt", epoch_default2(value));
    } else if (typeof value === "string") {
      this.#payload.iat = validateInput2("setIssuedAt", epoch_default2(new Date) + secs_default2(value));
    } else {
      this.#payload.iat = validateInput2("setIssuedAt", value);
    }
  }
}
async function jwtVerify2(jwt, key, options) {
  const verified = await compactVerify2(jwt, key, options);
  if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid2("JWTs MUST NOT use unencoded payload");
  }
  const payload = validateClaimsSet2(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var import_js_md52 = __toESM2(require_md52(), 1);
var import_tiny_typed_emitter2 = __toESM2(require_lib2(), 1);
var __defProp22 = Object.defineProperty;
var __export4 = (target, all) => {
  for (var name in all)
    __defProp22(target, name, { get: all[name], enumerable: true });
};
var USER_TOKEN_HEADER_NAME2 = "x-whop-user-token";
var USER_TOKEN_VERIFICATION_KEY2 = '{"kty":"EC","x":"rz8a8vxvexHC0TLT91g7llOdDOsNuYiGEfic4Qhni-E","y":"zH0QblKYToexd5PEIMGXPVJS9AB5smKrW4S_TbiXrOs","crv":"P-256"}';
function getUserToken2(tokenOrHeadersOrRequest) {
  if (typeof tokenOrHeadersOrRequest === "string")
    return tokenOrHeadersOrRequest;
  if (tokenOrHeadersOrRequest instanceof Headers)
    return tokenOrHeadersOrRequest.get(USER_TOKEN_HEADER_NAME2);
  if (tokenOrHeadersOrRequest instanceof Request)
    return tokenOrHeadersOrRequest.headers.get(USER_TOKEN_HEADER_NAME2);
  return null;
}
function makeUserTokenVerifier2(options) {
  return async function verifyUserToken2(tokenOrHeadersOrRequest, overrideOptions) {
    return await internalVerifyUserToken2(tokenOrHeadersOrRequest, {
      ...options,
      ...overrideOptions
    });
  };
}
function verifyUserToken2(tokenOrHeadersOrRequest, overrideOptions) {
  return internalVerifyUserToken2(tokenOrHeadersOrRequest, {
    ...overrideOptions
  });
}
async function internalVerifyUserToken2(tokenOrHeadersOrRequest, options) {
  try {
    const tokenString = getUserToken2(tokenOrHeadersOrRequest);
    if (!tokenString) {
      throw new Error("Whop user token not found. If you are the app developer, ensure you are developing in the whop.com iframe and have the dev proxy enabled.");
    }
    const jwkString = options.publicKey ?? USER_TOKEN_VERIFICATION_KEY2;
    const key = await importJWK2(JSON.parse(jwkString), "ES256").catch(() => {
      throw new Error("Invalid public key provided to verifyUserToken");
    });
    const token = await jwtVerify2(tokenString, key, {
      issuer: "urn:whopcom:exp-proxy"
    }).catch((_e) => {
      throw new Error("Invalid user token provided to verifyUserToken");
    });
    if (!(token.payload.sub && token.payload.aud) || Array.isArray(token.payload.aud)) {
      throw new Error("Invalid user token provided to verifyUserToken");
    }
    if (options.appId && token.payload.aud !== options.appId)
      throw new Error("Invalid app id provided to verifyUserToken");
    return {
      appId: token.payload.aud,
      userId: token.payload.sub
    };
  } catch (e) {
    if (options.dontThrow) {
      return null;
    }
    throw e;
  }
}
var proto_exports2 = {};
__export4(proto_exports2, {
  bounties_app: () => index_bounties_app_exports2,
  calendar_bookings_app: () => index_calendar_bookings_app_exports2,
  common: () => index_common_exports2,
  content_app: () => index_content_app_exports2,
  content_rewards_app: () => index_content_rewards_app_exports2,
  courses_app: () => index_courses_app_exports2,
  events_app: () => index_events_app_exports2,
  experience: () => index_experience_exports2,
  games: () => index_games_exports2,
  google: () => index_google_exports2,
  wheel_app: () => index_wheel_app_exports2
});
var index_common_exports2 = {};
__export4(index_common_exports2, {
  AccessPassExperience_UpsellType: () => AccessPassExperience_UpsellType2,
  AccessPass_AccessPassType: () => AccessPass_AccessPassType2,
  AccessPass_Visibility: () => AccessPass_Visibility2,
  AccessType: () => AccessType2,
  ActiveUserBucket_UserBucketType: () => ActiveUserBucket_UserBucketType2,
  AppBuild_Status: () => AppBuild_Status2,
  AppViewType: () => AppViewType2,
  ChannelSubscriptionState_DisconnectionReason: () => ChannelSubscriptionState_DisconnectionReason2,
  Channel_Type: () => Channel_Type2,
  ConnectedId_Type: () => ConnectedId_Type2,
  Entry_EntryStatus: () => Entry_EntryStatus2,
  FeedChatFeed_MemberPermissionType: () => FeedChatFeed_MemberPermissionType2,
  FeedDmsFeedMember_DmsFeedMemberStatus: () => FeedDmsFeedMember_DmsFeedMemberStatus2,
  FeedDmsFeedMember_NotificationPreference: () => FeedDmsFeedMember_NotificationPreference2,
  FeedDmsPost_MessageType: () => FeedDmsPost_MessageType2,
  FeedForumFeed_EmailNotificationPreferenceType: () => FeedForumFeed_EmailNotificationPreferenceType2,
  FeedForumFeed_LayoutType: () => FeedForumFeed_LayoutType2,
  FeedForumFeed_MemberPermissionType: () => FeedForumFeed_MemberPermissionType2,
  FeedForumPost_ForumPostType: () => FeedForumPost_ForumPostType2,
  FeedLivestreamFeed_MemberPermissionType: () => FeedLivestreamFeed_MemberPermissionType2,
  FeedReaction_ReactionType: () => FeedReaction_ReactionType2,
  GetTopExperiencesByActiveUsersRequest_AppFilter: () => GetTopExperiencesByActiveUsersRequest_AppFilter2,
  GoFetchNotifications_NotifyingEntityType: () => GoFetchNotifications_NotifyingEntityType2,
  MuxAsset_MuxAssetStatus: () => MuxAsset_MuxAssetStatus2,
  Plan_PlanType: () => Plan_PlanType2,
  Plan_ReleaseMethod: () => Plan_ReleaseMethod2,
  Plan_Visibility: () => Plan_Visibility2,
  Platform: () => Platform2,
  Position_Type: () => Position_Type2,
  PostReactionCount_ReactionType: () => PostReactionCount_ReactionType2,
  ProductSurface_DiscoverSection: () => ProductSurface_DiscoverSection2,
  ProductSurface_FeedTab: () => ProductSurface_FeedTab2,
  ProductSurface_SurfaceType: () => ProductSurface_SurfaceType2,
  ProductSurface_ViewContext: () => ProductSurface_ViewContext2,
  Purchase_ReleaseMethod: () => Purchase_ReleaseMethod2,
  ResourceType: () => ResourceType2,
  UserType: () => UserType2,
  User_PlatformRole: () => User_PlatformRole2
});
var UserType2 = {
  UNKNOWN_TYPE: "UNKNOWN_TYPE",
  HUMAN: "HUMAN",
  SYSTEM: "SYSTEM",
  AGENT: "AGENT",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var User_PlatformRole2 = {
  UNKNOWN_ROLE: "UNKNOWN_ROLE",
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  TRUST_AND_SAFETY_MANAGER: "TRUST_AND_SAFETY_MANAGER",
  MANAGER: "MANAGER",
  SUPPORT: "SUPPORT",
  TESTER: "TESTER",
  SEO_MANAGER: "SEO_MANAGER",
  TEMPLATE_USER: "TEMPLATE_USER",
  MARKETPLACE_MANAGER: "MARKETPLACE_MANAGER",
  DEVELOPER: "DEVELOPER",
  FINANCE_MANAGER: "FINANCE_MANAGER",
  RESOLUTION_CENTER_MANAGER: "RESOLUTION_CENTER_MANAGER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AppViewType2 = {
  APP_VIEW_TYPE_UNKNOWN: "APP_VIEW_TYPE_UNKNOWN",
  APP_VIEW_TYPE_HUB: "APP_VIEW_TYPE_HUB",
  APP_VIEW_TYPE_DASH: "APP_VIEW_TYPE_DASH",
  APP_VIEW_TYPE_ANALYTICS: "APP_VIEW_TYPE_ANALYTICS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessType2 = {
  UNKNOWN_ACCESS_TYPE: "UNKNOWN_ACCESS_TYPE",
  NO_ACCESS: "NO_ACCESS",
  CUSTOMER: "CUSTOMER",
  ADMIN: "ADMIN",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Platform2 = {
  UNKNOWN: "UNKNOWN",
  WEB: "WEB",
  IOS: "IOS",
  ANDROID: "ANDROID",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AppBuild_Status2 = {
  STATUS_UNKNOWN: "STATUS_UNKNOWN",
  STATUS_DRAFT: "STATUS_DRAFT",
  STATUS_PENDING: "STATUS_PENDING",
  STATUS_APPROVED: "STATUS_APPROVED",
  STATUS_REJECTED: "STATUS_REJECTED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPass_Visibility2 = {
  VISIBILITY_UNKNOWN: "VISIBILITY_UNKNOWN",
  VISIBLE: "VISIBLE",
  HIDDEN: "HIDDEN",
  ARCHIVED: "ARCHIVED",
  QUICK_LINK: "QUICK_LINK",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPass_AccessPassType2 = {
  ACCESS_PASS_TYPE_UNKNOWN: "ACCESS_PASS_TYPE_UNKNOWN",
  REGULAR: "REGULAR",
  APP: "APP",
  EXPERIENCE_UPSELL: "EXPERIENCE_UPSELL",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_Visibility2 = {
  VISIBILITY_UNKNOWN: "VISIBILITY_UNKNOWN",
  VISIBLE: "VISIBLE",
  HIDDEN: "HIDDEN",
  ARCHIVED: "ARCHIVED",
  QUICK_LINK: "QUICK_LINK",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_ReleaseMethod2 = {
  RELEASE_METHOD_UNKNOWN: "RELEASE_METHOD_UNKNOWN",
  BUY_NOW: "BUY_NOW",
  WAITLIST: "WAITLIST",
  RAFFLE: "RAFFLE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_PlanType2 = {
  PLAN_TYPE_UNKNOWN: "PLAN_TYPE_UNKNOWN",
  RENEWAL: "RENEWAL",
  ONE_TIME: "ONE_TIME",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Entry_EntryStatus2 = {
  ENTRY_STATUS_UNKNOWN: "ENTRY_STATUS_UNKNOWN",
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  DENIED: "DENIED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPassExperience_UpsellType2 = {
  UPSELL_TYPE_UNKNOWN: "UPSELL_TYPE_UNKNOWN",
  BEFORE_CHECKOUT: "BEFORE_CHECKOUT",
  AFTER_CHECKOUT: "AFTER_CHECKOUT",
  ONLY_IN_WHOP: "ONLY_IN_WHOP",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Purchase_ReleaseMethod2 = {
  UNKNOWN: "UNKNOWN",
  BUY_NOW: "BUY_NOW",
  WAITLIST: "WAITLIST",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ConnectedId_Type2 = {
  UNKNOWN: "UNKNOWN",
  ANONYMOUS: "ANONYMOUS",
  USER: "USER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Channel_Type2 = {
  UNKNOWN: "UNKNOWN",
  EXPERIENCE: "EXPERIENCE",
  NOTIFICATIONS: "NOTIFICATIONS",
  DMS: "DMS",
  USER: "USER",
  EVERYONE: "EVERYONE",
  AUTHENTICATED: "AUTHENTICATED",
  ANONYMOUS: "ANONYMOUS",
  PUBLIC: "PUBLIC",
  ACCESS_PASS: "ACCESS_PASS",
  APP: "APP",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ChannelSubscriptionState_DisconnectionReason2 = {
  UNKNOWN: "UNKNOWN",
  NO_ACCESS: "NO_ACCESS",
  REQUESTED_DISCONNECT: "REQUESTED_DISCONNECT",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Position_Type2 = {
  UNKNOWN: "UNKNOWN",
  MOUSE: "MOUSE",
  PLAYER: "PLAYER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsPost_MessageType2 = {
  UNKNOWN_TYPE: "UNKNOWN_TYPE",
  REGULAR: "REGULAR",
  SYSTEM: "SYSTEM",
  AUTOMATED: "AUTOMATED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedChatFeed_MemberPermissionType2 = {
  UNKNOWN: "UNKNOWN",
  NONE: "NONE",
  EVERYONE: "EVERYONE",
  MEMBERS: "MEMBERS",
  ADMINS: "ADMINS",
  PRODUCT_OWNERS: "PRODUCT_OWNERS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedLivestreamFeed_MemberPermissionType2 = {
  UNKNOWN: "UNKNOWN",
  NONE: "NONE",
  EVERYONE: "EVERYONE",
  ADMINS: "ADMINS",
  PRODUCT_OWNERS: "PRODUCT_OWNERS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsFeedMember_DmsFeedMemberStatus2 = {
  UNKNOWN_STATUS: "UNKNOWN_STATUS",
  REQUESTED: "REQUESTED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsFeedMember_NotificationPreference2 = {
  UNKNOWN_PREFERENCE: "UNKNOWN_PREFERENCE",
  ALL: "ALL",
  MENTIONS: "MENTIONS",
  NONE: "NONE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedReaction_ReactionType2 = {
  UNKNOWN: "UNKNOWN",
  LIKE: "LIKE",
  EMOJI: "EMOJI",
  VIEW: "VIEW",
  VOTE: "VOTE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_MemberPermissionType2 = {
  UNKNOWN_PERMISSION: "UNKNOWN_PERMISSION",
  EVERYONE: "EVERYONE",
  ADMINS: "ADMINS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_LayoutType2 = {
  UNKNOWN_LAYOUT: "UNKNOWN_LAYOUT",
  FEED: "FEED",
  BLOG: "BLOG",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_EmailNotificationPreferenceType2 = {
  UNKNOWN_PREFERENCE: "UNKNOWN_PREFERENCE",
  ALL_ADMIN_POSTS: "ALL_ADMIN_POSTS",
  ONLY_WEEKLY_SUMMARY: "ONLY_WEEKLY_SUMMARY",
  NONE: "NONE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var MuxAsset_MuxAssetStatus2 = {
  UNKNOWN: "UNKNOWN",
  UPLOADING: "UPLOADING",
  CREATED: "CREATED",
  READY: "READY",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var PostReactionCount_ReactionType2 = {
  UNKNOWN: "UNKNOWN",
  LIKE: "LIKE",
  EMOJI: "EMOJI",
  VIEW: "VIEW",
  VOTE: "VOTE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumPost_ForumPostType2 = {
  UNKNOWN_TYPE: "UNKNOWN_TYPE",
  REGULAR: "REGULAR",
  AUTOMATED: "AUTOMATED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var GoFetchNotifications_NotifyingEntityType2 = {
  UNKNOWN: "UNKNOWN",
  GENERIC: "GENERIC",
  EXPERIENCE: "EXPERIENCE",
  COMPANY: "COMPANY",
  COMPANY_TEAM: "COMPANY_TEAM",
  ACCESS_PASS: "ACCESS_PASS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_ViewContext2 = {
  VIEW_CTX_UNKNOWN: "VIEW_CTX_UNKNOWN",
  VIEW_CTX_WHOP: "VIEW_CTX_WHOP",
  VIEW_CTX_HOME_FEED: "VIEW_CTX_HOME_FEED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_DiscoverSection2 = {
  DISCOVER_UNKNOWN: "DISCOVER_UNKNOWN",
  DISCOVER_LEADERBOARDS: "DISCOVER_LEADERBOARDS",
  DISCOVER_FOR_YOU: "DISCOVER_FOR_YOU",
  DISCOVER_EXPLORE: "DISCOVER_EXPLORE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_FeedTab2 = {
  FEED_TAB_UNKNOWN: "FEED_TAB_UNKNOWN",
  FEED_TAB_HOME: "FEED_TAB_HOME",
  FEED_TAB_EARN: "FEED_TAB_EARN",
  FEED_TAB_CHAT: "FEED_TAB_CHAT",
  FEED_TAB_LEARN: "FEED_TAB_LEARN",
  FEED_TAB_CALENDAR: "FEED_TAB_CALENDAR",
  FEED_TAB_PLAY: "FEED_TAB_PLAY",
  FEED_TAB_INTEGRATIONS: "FEED_TAB_INTEGRATIONS",
  FEED_TAB_TOOLS: "FEED_TAB_TOOLS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_SurfaceType2 = {
  UNKNOWN: "UNKNOWN",
  EXPERIENCE: "EXPERIENCE",
  WHOP: "WHOP",
  CREATOR_DASHBOARD: "CREATOR_DASHBOARD",
  AFFILIATE_DASHBOARD: "AFFILIATE_DASHBOARD",
  DISCOVER: "DISCOVER",
  HOME_FEED: "HOME_FEED",
  MESSAGES: "MESSAGES",
  PROFILE: "PROFILE",
  NOTIFICATIONS: "NOTIFICATIONS",
  USER_SETTINGS: "USER_SETTINGS",
  CHECKOUT: "CHECKOUT",
  AUTH: "AUTH",
  OTHER: "OTHER",
  USER_ONBOARDING: "USER_ONBOARDING",
  LEADERBOARD: "LEADERBOARD",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ActiveUserBucket_UserBucketType2 = {
  UNKNOWN: "UNKNOWN",
  EXPERIENCE: "EXPERIENCE",
  WHOP: "WHOP",
  STORE_PAGE: "STORE_PAGE",
  MESSAGES: "MESSAGES",
  HOME_FEED: "HOME_FEED",
  DISCOVER: "DISCOVER",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var GetTopExperiencesByActiveUsersRequest_AppFilter2 = {
  ALL: "ALL",
  LIVESTREAMS: "LIVESTREAMS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ResourceType2 = {
  RESOURCE_UNKNOWN: "RESOURCE_UNKNOWN",
  RESOURCE_BOT: "RESOURCE_BOT",
  RESOURCE_ACCESS_PASS: "RESOURCE_ACCESS_PASS",
  RESOURCE_EXPERIENCE: "RESOURCE_EXPERIENCE",
  RESOURCE_USER: "RESOURCE_USER",
  RESOURCE_EXPERIENCE_PREVIEW_CONTENT: "RESOURCE_EXPERIENCE_PREVIEW_CONTENT",
  RESOURCE_APP: "RESOURCE_APP",
  RESOURCE_FORUM_FEED: "RESOURCE_FORUM_FEED",
  RESOURCE_UNIVERSAL_POST: "RESOURCE_UNIVERSAL_POST",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_google_exports2 = {};
__export4(index_google_exports2, {
  protobuf: () => index_google_protobuf_exports2
});
var index_google_protobuf_exports2 = {};
__export4(index_google_protobuf_exports2, {
  NullValue: () => NullValue2
});
var NullValue2 = {
  NULL_VALUE: "NULL_VALUE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_calendar_bookings_app_exports2 = {};
var index_bounties_app_exports2 = {};
__export4(index_bounties_app_exports2, {
  BountySubmission_BountySubmissionStatus: () => BountySubmission_BountySubmissionStatus2,
  Bounty_BountyRewardUnit: () => Bounty_BountyRewardUnit2,
  Bounty_BountyStatus: () => Bounty_BountyStatus2
});
var Bounty_BountyStatus2 = {
  UNKNOWN_STATUS: "UNKNOWN_STATUS",
  PUBLISHED: "PUBLISHED",
  ARCHIVED: "ARCHIVED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Bounty_BountyRewardUnit2 = {
  UNKNOWN_REWARD_UNIT: "UNKNOWN_REWARD_UNIT",
  PER_SUBMISSION: "PER_SUBMISSION",
  PER_VIEW: "PER_VIEW",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var BountySubmission_BountySubmissionStatus2 = {
  UNKNOWN_STATUS: "UNKNOWN_STATUS",
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  DENIED: "DENIED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_content_app_exports2 = {};
var index_content_rewards_app_exports2 = {};
__export4(index_content_rewards_app_exports2, {
  ContentPlatform: () => ContentPlatform2,
  ContentRewardsCampaign_Category: () => ContentRewardsCampaign_Category2,
  ContentRewardsCampaign_ContentType: () => ContentRewardsCampaign_ContentType2,
  ContentRewardsCampaign_Status: () => ContentRewardsCampaign_Status2,
  ContentRewardsSubmission_Status: () => ContentRewardsSubmission_Status2
});
var ContentPlatform2 = {
  UNKNOWN_PLATFORM: "UNKNOWN_PLATFORM",
  INSTAGRAM: "INSTAGRAM",
  TIKTOK: "TIKTOK",
  X: "X",
  YOUTUBE: "YOUTUBE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_Status2 = {
  UNKNOWN: "UNKNOWN",
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  EXPIRED: "EXPIRED",
  ARCHIVED: "ARCHIVED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_ContentType2 = {
  UNKNOWN_CONTENT_TYPE: "UNKNOWN_CONTENT_TYPE",
  UGC: "UGC",
  CLIPPING: "CLIPPING",
  FACELESS: "FACELESS",
  OTHER_CONTENT_TYPE: "OTHER_CONTENT_TYPE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_Category2 = {
  UNKNOWN_CATEGORY: "UNKNOWN_CATEGORY",
  CREATOR: "CREATOR",
  BRAND: "BRAND",
  INFLUENCER: "INFLUENCER",
  STREAMER: "STREAMER",
  MUSICIAN: "MUSICIAN",
  OTHER: "OTHER",
  ECOMMERCE: "ECOMMERCE",
  LOGO: "LOGO",
  MUSIC: "MUSIC",
  PODCAST: "PODCAST",
  SOFTWARE: "SOFTWARE",
  STREAM: "STREAM",
  ENTERTAINMENT: "ENTERTAINMENT",
  PRODUCTS: "PRODUCTS",
  PERSONAL_BRAND: "PERSONAL_BRAND",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsSubmission_Status2 = {
  UNKNOWN: "UNKNOWN",
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
  FLAGGED: "FLAGGED",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_courses_app_exports2 = {};
var index_events_app_exports2 = {};
__export4(index_events_app_exports2, {
  Event_LocationType: () => Event_LocationType2,
  Event_RecurringRule: () => Event_RecurringRule2
});
var Event_LocationType2 = {
  UNKNOWN_LOCATION_TYPE: "UNKNOWN_LOCATION_TYPE",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  ZOOM: "ZOOM",
  GOOGLE_MEET: "GOOGLE_MEET",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var Event_RecurringRule2 = {
  UNKNOWN_RECURRING_RULE: "UNKNOWN_RECURRING_RULE",
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_wheel_app_exports2 = {};
__export4(index_wheel_app_exports2, {
  Spin_SpinStatus: () => Spin_SpinStatus2
});
var Spin_SpinStatus2 = {
  UNKNOWN_SPIN_STATUS: "UNKNOWN_SPIN_STATUS",
  WON: "WON",
  LOST: "LOST",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_experience_exports2 = {};
var index_games_exports2 = {};
__export4(index_games_exports2, {
  quizzes: () => index_games_quizzes_exports2
});
var index_games_quizzes_exports2 = {};
__export4(index_games_quizzes_exports2, {
  HostCommand_StatusCommand: () => HostCommand_StatusCommand2,
  QuizStatus: () => QuizStatus2
});
var QuizStatus2 = {
  UNKNOWN: "UNKNOWN",
  WAITING_FOR_PLAYERS: "WAITING_FOR_PLAYERS",
  SHOW_QUESTION: "SHOW_QUESTION",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  QUESTION_RESULT: "QUESTION_RESULT",
  QUESTION_LEADERBOARD: "QUESTION_LEADERBOARD",
  GAME_RESULT: "GAME_RESULT",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var HostCommand_StatusCommand2 = {
  UNKNOWN: "UNKNOWN",
  NEXT: "NEXT",
  END_GAME: "END_GAME",
  GO_BACK_TO_LOBBY: "GO_BACK_TO_LOBBY",
  SKIP_TO_END_RESULTS: "SKIP_TO_END_RESULTS",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var RetryError2 = class extends Error {
  constructor(message22, errors, maxRetries) {
    super(message22);
    this.errors = errors;
    this.maxRetries = maxRetries;
    this.name = "RetryError";
  }
};
async function retry2(fn, maxRetries, signal, ...args) {
  let tries = 0;
  const errors = [];
  while (tries < maxRetries) {
    signal?.throwIfAborted();
    try {
      const res = await fn(...args);
      return res;
    } catch (error) {
      errors.push(error);
      tries++;
    }
  }
  for (const error of errors) {
    console.error(error);
  }
  throw new RetryError2("Failed to retry", errors, maxRetries);
}
var uploadTasks2 = [];
var workerCount2 = 0;
var maxWorkers2 = 10;
async function uploadWorker2(uploadPart) {
  if (workerCount2 >= maxWorkers2) {
    return;
  }
  workerCount2++;
  while (uploadTasks2.length > 0) {
    const task = uploadTasks2.shift();
    if (!task) {
      continue;
    }
    try {
      const etag = await retry2(uploadPart, 10, task.task.signal, task.task);
      task.resolve({ etag, partNumber: task.task.partNumber });
    } catch (e) {
      task.reject(e);
    }
  }
  workerCount2--;
}
function uploadParts2(tasks, uploadPart, priority = false) {
  const promises = tasks.map((task) => {
    return new Promise((resolve, reject) => {
      if (priority) {
        uploadTasks2.unshift({ task, resolve, reject });
      } else {
        uploadTasks2.push({ task, resolve, reject });
      }
    });
  });
  for (let i = 0;i < Math.min(tasks.length, maxWorkers2); i++) {
    uploadWorker2(uploadPart);
  }
  return Promise.all(promises);
}
function sum2(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
async function handleUpload2({ data, ...preparedFile }, {
  onProgress,
  signal,
  uploadPart
}) {
  if (preparedFile.multipart) {
    const loaded = Array(preparedFile.multipartUploadUrls.length).fill(0);
    const result = await uploadParts2(preparedFile.multipartUploadUrls.map((part, index2) => ({
      ...part,
      fullData: data,
      onProgress: (event) => {
        loaded[index2] = event.loaded;
        const total = sum2(...loaded);
        onProgress?.(Math.round(total / data.size * 100));
      },
      signal
    })), uploadPart);
    return result;
  }
  await uploadParts2([
    {
      url: preparedFile.uploadUrl,
      fullData: data,
      partNumber: 1,
      headers: preparedFile.headers,
      onProgress: (event) => {
        onProgress?.(Math.round(event.loaded / data.size * 100));
      },
      signal
    }
  ], uploadPart, true);
  return [];
}
function getMediaType2(data) {
  switch (true) {
    case data.type.startsWith("image/"):
      return "image";
    case data.type.startsWith("video/"):
      return "video";
    case data.type.startsWith("audio/"):
      return "audio";
    default:
      return "other";
  }
}
function makeUploadAttachmentFunction2({
  uploadPart
}) {
  return async function uploadAttachment(input, { onProgress, signal } = {}) {
    const preparedAttachment = "record" in input && "file" in input ? await this.prepareAttachmentForUpload(input.file, input.record) : await input;
    const result = await handleUpload2(preparedAttachment, {
      onProgress,
      signal,
      uploadPart
    });
    const mediaType = getMediaType2(preparedAttachment.data);
    if (preparedAttachment.multipart) {
      await this.attachments.processAttachment({
        directUploadId: preparedAttachment.id,
        mediaType,
        multipartUploadId: preparedAttachment.multipartUploadId,
        multipartParts: result
      });
    } else {
      await this.attachments.processAttachment({
        directUploadId: preparedAttachment.id,
        mediaType
      });
    }
    const attachment = await this.analyzeAttachment(preparedAttachment.id, {
      signal
    });
    if (!attachment) {
      throw new Error("Failed to analyze Attachment");
    }
    return {
      directUploadId: preparedAttachment.id,
      record: preparedAttachment.record,
      attachment
    };
  };
}
async function analyzeAttachment2(signedId, opts) {
  while (!opts?.signal?.aborted) {
    const attachment = await this.attachments.getAttachment({ id: signedId }, { signal: opts?.signal }).catch(() => null);
    if (attachment) {
      return attachment;
    }
  }
}
var MULTIPART_UPLOAD_CHUNK_SIZE2 = 5 * 1024 * 1024;
var withAwaitableParams2 = (fn) => {
  return (...args) => {
    const casted = args;
    const hasPromises = casted.some((arg) => arg instanceof Promise);
    if (hasPromises) {
      return new Promise((resolve, reject) => {
        return Promise.all(casted).then((args2) => {
          return fn(...args2);
        }).then(resolve).catch(reject);
      });
    }
    return fn(...args);
  };
};
var encodings2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function b64Raw2(arrayBuffer) {
  let base64 = "";
  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;
  let a;
  let b;
  let c;
  let d;
  let chunk;
  for (let i = 0;i < mainLength; i = i + 3) {
    chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
    a = (chunk & 16515072) >> 18;
    b = (chunk & 258048) >> 12;
    c = (chunk & 4032) >> 6;
    d = chunk & 63;
    base64 += encodings2[a] + encodings2[b] + encodings2[c] + encodings2[d];
  }
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];
    a = (chunk & 252) >> 2;
    b = (chunk & 3) << 4;
    base64 += `${encodings2[a]}${encodings2[b]}==`;
  } else if (byteRemainder === 2) {
    chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
    a = (chunk & 64512) >> 10;
    b = (chunk & 1008) >> 4;
    c = (chunk & 15) << 2;
    base64 += `${encodings2[a]}${encodings2[b]}${encodings2[c]}=`;
  }
  return base64;
}
var b642 = withAwaitableParams2(b64Raw2);
async function md52(stream) {
  const hasher = import_js_md52.md5.create();
  await stream.pipeTo(new WritableStream({
    write(chunk) {
      hasher.update(chunk);
    }
  }));
  return hasher.arrayBuffer();
}
async function prepareAttachmentForUpload2(data, record) {
  const isMultipart = data.size > MULTIPART_UPLOAD_CHUNK_SIZE2;
  const mediaDirectUpload = await this.attachments.uploadMedia({
    byteSizeV2: data.size.toString(),
    record,
    filename: data instanceof File ? data.name : crypto.randomUUID(),
    contentType: data.type,
    checksum: await b642(md52(data.stream())),
    multipart: isMultipart
  });
  if (isMultipart) {
    if (!mediaDirectUpload?.multipartUploadId || !mediaDirectUpload.multipartUploadUrls) {
      throw new Error("Failed to prepare file");
    }
    return {
      data,
      id: mediaDirectUpload.id,
      multipartUploadUrls: mediaDirectUpload.multipartUploadUrls,
      multipartUploadId: mediaDirectUpload.multipartUploadId,
      record,
      multipart: true
    };
  }
  if (!mediaDirectUpload?.id || !mediaDirectUpload.uploadUrl) {
    throw new Error("Failed to prepare file");
  }
  return {
    data,
    id: mediaDirectUpload.id,
    uploadUrl: mediaDirectUpload.uploadUrl,
    headers: mediaDirectUpload.headers,
    record,
    multipart: false
  };
}
function partialFileSdkExtensions2(baseSdk) {
  const prepareAttachmentForUpload22 = prepareAttachmentForUpload2.bind(baseSdk);
  const analyzeAttachment22 = analyzeAttachment2.bind(baseSdk);
  return {
    prepareAttachmentForUpload: prepareAttachmentForUpload22,
    analyzeAttachment: analyzeAttachment22
  };
}
function fileSdkExtensions2(baseSdk, uploadAttachmentFn) {
  const partial = partialFileSdkExtensions2(baseSdk);
  const uploadAttachment = uploadAttachmentFn.bind({
    ...baseSdk,
    ...partial
  });
  return {
    ...partial,
    uploadAttachment
  };
}
function getSdk3(requester) {
  return {
    accessPasses: {
      getAccessPass(variables, options) {
        return requester("whop-sdk-ts-client/sha256:daea5c9cf3e5e30ef0fd9eaad8ea852ffdbd0e0088ff3ad05aacb6a761b7c6f9", "getAccessPass", "query", variables, options).then((res) => res.accessPass);
      }
    },
    attachments: {
      getAttachment(variables, options) {
        return requester("whop-sdk-ts-client/sha256:07f48fb0c1292fda5a8dd5f54b5d1b637635a87b6012769819ebcf7795a045ba", "getAttachment", "query", variables, options).then((res) => res.attachment);
      },
      processAttachment(variables, options) {
        return requester("whop-sdk-ts-client/sha256:396c5803051b3c9bcedd3ce310505a4f57a6b94bc190e7142e897d9aa5036ece", "processAttachment", "mutation", { input: variables }, options).then((res) => res.mediaAnalyzeAttachment);
      },
      uploadMedia(variables, options) {
        return requester("whop-sdk-ts-client/sha256:a3d06ed16e52126d96aae83cad3400471246f37fc275e4c8f4836c98bf8e9d59", "uploadMedia", "mutation", { input: variables }, options).then((res) => res.mediaDirectUpload);
      }
    },
    courses: {
      getCourse(variables, options) {
        return requester("whop-sdk-ts-client/sha256:a70e69bec7574d2b4498d2bee86bd97adb87480599cbceeca8f63135078fd5c9", "getCourse", "query", variables, options).then((res) => res.course);
      }
    },
    experiences: {
      getExperience(variables, options) {
        return requester("whop-sdk-ts-client/sha256:114eb7b7c8403ffbe75a0c74a26ac50b5367e183a16ba64eebf4a43d5466bb4e", "getExperience", "query", variables, options).then((res) => res.experience);
      },
      listUsersForExperience(variables, options) {
        return requester("whop-sdk-ts-client/sha256:85c827d8660dc2a97e8b930e213b83493ae132c00988e0f03e02c5dc99559a5a", "listUsersForExperience", "query", variables, options).then((res) => res.publicExperience);
      }
    },
    forums: {
      listForumPostsFromForum(variables, options) {
        return requester("whop-sdk-ts-client/sha256:97a7d797f3a5f6f83bf4628cc7c586d529b90e54c0a8e193493a55b4ad05df46", "listForumPostsFromForum", "query", variables, options).then((res) => res.feedPosts);
      }
    },
    messages: {
      listMessagesFromChat(variables, options) {
        return requester("whop-sdk-ts-client/sha256:5fdbf50fe489888e5b0a98e9fe6170584bf47ab38f87d1e0b7fce8f523513894", "listMessagesFromChat", "query", variables, options).then((res) => res.feedPosts);
      }
    },
    users: {
      getCurrentUser(variables, options) {
        return requester("whop-sdk-ts-client/sha256:9f7cc9ff353a2778e55b674cfd5737a7dcaff19be9ac13d6f79aabd5d8ef69ff", "getCurrentUser", "query", variables, options).then((res) => res.viewer);
      },
      getUserLedgerAccount(variables, options) {
        return requester("whop-sdk-ts-client/sha256:d7eeaf0a388395edb82220877e72a7fc91d1f06a6d89f1cfa5e56bb400d2aa49", "getUserLedgerAccount", "query", variables, options).then((res) => res.viewer);
      },
      getUser(variables, options) {
        return requester("whop-sdk-ts-client/sha256:d8022374c6b0eb0445781342a14c9bffafd776cee4e282cb76e31af8c017d33e", "getUser", "query", variables, options).then((res) => res.publicUser);
      }
    }
  };
}
var DEFAULT_API_ORIGIN2 = "https://api.whop.com";
var GQLNetworkError2 = class extends Error {
  constructor(e) {
    const message22 = e instanceof Error ? e.message : typeof e === "string" ? e : "Unknown network error";
    super(message22);
    if (e instanceof Error)
      this.stack = e.stack;
  }
};
var GQLRequestError2 = class extends Error {
  statusCode;
  constructor(statusCode, message22) {
    super(message22);
    this.statusCode = statusCode;
  }
  isUnauthorized() {
    return this.statusCode === 401;
  }
  isForbidden() {
    return this.statusCode === 403;
  }
  isNotFound() {
    return this.statusCode === 404;
  }
  isServerError() {
    return this.statusCode >= 500;
  }
};
var GQLError2 = class extends Error {
  errors;
  constructor(errors) {
    super(errors[0].message);
    this.errors = errors;
  }
};
async function graphqlFetch2(url, operationId, operationName, operationType, variables, headersInit = {}) {
  try {
    const body = {
      operationId,
      operationType,
      operationName,
      variables
    };
    const headers = new Headers(headersInit);
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    const urlObject = addOperationNameToUrl2(url, operationName, operationId, operationType);
    const response = await fetch(urlObject, {
      method: "POST",
      body: JSON.stringify(body),
      headers
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new GQLRequestError2(response.status, errorMessage);
    }
    const data = await response.json();
    if (data.errors) {
      throw new GQLError2(data.errors);
    }
    return data.data;
  } catch (e) {
    throw new GQLNetworkError2(e);
  }
}
function addOperationNameToUrl2(url, name, operationId, operationType) {
  const urlObject = new URL(url);
  let pathname = urlObject.pathname;
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  pathname += `/${name}`;
  urlObject.pathname = pathname;
  const [clientName, opId] = operationId.split("/");
  urlObject.searchParams.set("id", opId);
  urlObject.searchParams.set("client", clientName);
  urlObject.searchParams.set("type", operationType);
  return urlObject;
}
var WhopWebsocketClientBase2 = class extends import_tiny_typed_emitter2.TypedEmitter {
  websocket = null;
  failedConnectionAttempts = 0;
  status = "disconnected";
  wantsToBeConnected = false;
  makeWebsocket() {
    throw new Error("Not implemented in base class");
  }
  connect() {
    if (this.websocket) {
      this.disconnect();
    }
    this.wantsToBeConnected = true;
    this.setStatus("connecting");
    const websocket = this.makeWebsocket();
    this.websocket = websocket;
    websocket.onopen = () => {
      this.setStatus("connected");
    };
    websocket.onmessage = (event) => {
      try {
        const message22 = JSON.parse(event.data);
        this.emit("message", message22);
        if (message22.appMessage) {
          this.emit("appMessage", message22.appMessage);
        }
      } catch (error) {
        console.error("[WhopWebsocketClient] Error parsing message", event.data);
      }
    };
    websocket.onerror = (event) => {
      console.error("[WhopWebsocketClient] Websocket error", event);
      this.setStatus("disconnected");
    };
    websocket.onclose = (event) => {
      this.setStatus("disconnected");
    };
    return () => {
      this.disconnect();
    };
  }
  disconnect() {
    if (this.websocket) {
      this.websocket.onopen = null;
      this.websocket.onmessage = null;
      this.websocket.onerror = null;
      this.websocket.onclose = null;
      this.websocket.close();
      this.websocket = null;
    }
    this.wantsToBeConnected = false;
  }
  send(message22) {
    if (!this.websocket) {
      throw new Error("Websocket not connected");
    }
    this.websocket.send(JSON.stringify(message22));
  }
  broadcast({
    message: message22,
    target
  }) {
    this.send({
      broadcastAppMessage: {
        channel: convertBroadcastTargetToProtoChannel2(target),
        json: message22
      }
    });
  }
  setStatus(status) {
    if (status === this.status)
      return;
    this.status = status;
    if (status === "disconnected") {
      const backoff = this.calculateBackoff();
      this.failedConnectionAttempts++;
      setTimeout(() => {
        if (this.wantsToBeConnected) {
          this.connect();
        }
      }, backoff);
      this.emit("disconnect");
    }
    if (status === "connected") {
      this.failedConnectionAttempts = 0;
      this.emit("connect");
    }
    this.emit("connectionStatus", status);
  }
  calculateBackoff() {
    return Math.min(50 * 2 ** this.failedConnectionAttempts, 1000 * 60);
  }
};
function convertBroadcastTargetToProtoChannel2(target) {
  if (target === "everyone") {
    return {
      type: "APP",
      id: "[app_id]"
    };
  }
  if ("experienceId" in target) {
    return {
      type: "APP",
      id: `[app_id]_${target.experienceId}`
    };
  }
  if ("customId" in target) {
    return {
      type: "APP",
      id: `[app_id]_c_${target.customId}`
    };
  }
  throw new Error("Invalid broadcast target");
}
var WhopWebsocketClientBrowser2 = class extends WhopWebsocketClientBase2 {
  options;
  constructor(options) {
    super();
    this.options = options;
  }
  makeWebsocket() {
    const path = "/_whop/ws/v1/websockets/connect";
    const searchParams = new URLSearchParams;
    addChannelIds2(searchParams, "join_experience", this.options.joinExperience);
    addChannelIds2(searchParams, "join_custom", this.options.joinCustom);
    addChannelIds2(searchParams, "join_public", this.options.joinPublic);
    const url = new URL(path, window.location.origin);
    url.protocol = url.protocol.replace("http", "ws");
    url.search = searchParams.toString();
    return new WebSocket(url.toString());
  }
};
function addChannelIds2(searchParams, key, channels) {
  if (!channels) {
    return;
  }
  if (typeof channels === "string" && channels.length > 0) {
    searchParams.set(key, channels);
    return;
  }
  for (const channel of channels) {
    searchParams.append(key, channel);
  }
}
function makeConnectToWebsocketFunction3() {
  return function connectToWebsocket(options) {
    return new WhopWebsocketClientBrowser2(options);
  };
}
function makeWhopClientSdk2({
  uploadFile: uploadFile3
}) {
  return function WhopClientSdk(options) {
    const baseSdk = getSdk3(makeRequester3({
      apiPath: "/_whop/public-graphql",
      ...options
    }));
    const fileSdk = fileSdkExtensions2(baseSdk, uploadFile3);
    const websocketClient = makeConnectToWebsocketFunction3();
    const sdk3 = {
      ...baseSdk,
      attachments: {
        ...baseSdk.attachments,
        ...fileSdk
      },
      websockets: {
        client: websocketClient
      }
    };
    return sdk3;
  };
}
function makeRequester3(apiOptions) {
  const endpoint = getEndpoint3(apiOptions);
  return async function fetcher(operationId, operationName, operationType, vars, options) {
    const headers = new Headers(options?.headers);
    return graphqlFetch2(endpoint, operationId, operationName, operationType, vars, headers);
  };
}
function getEndpoint3(apiOptions) {
  if (typeof document === "undefined") {
    throw new Error("WhopApi.client() is only available in the browser");
  }
  const url = new URL(apiOptions.apiPath ?? "/public-graphql", apiOptions.apiOrigin ?? window.location.origin);
  return url.href;
}
function getSdk22(requester) {
  return {
    accessPasses: {
      getAccessPass(variables, options) {
        return requester("whop-sdk-ts-server/sha256:daea5c9cf3e5e30ef0fd9eaad8ea852ffdbd0e0088ff3ad05aacb6a761b7c6f9", "getAccessPass", "query", variables, options).then((res) => res.accessPass);
      }
    },
    access: {
      checkIfUserHasAccessToAccessPass(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a5ee1715113ab68b87dcfd5b578b6c20d1ca1fe50d8c0e2ec43e462a9b86632d", "checkIfUserHasAccessToAccessPass", "query", variables, options).then((res) => res.hasAccessToAccessPass);
      },
      checkIfUserHasAccessToCompany(variables, options) {
        return requester("whop-sdk-ts-server/sha256:b894321dc004894f993e91f5e7451554b0ae8af7da950a5c84ac69180599edc2", "checkIfUserHasAccessToCompany", "query", variables, options).then((res) => res.hasAccessToCompany);
      },
      checkIfUserHasAccessToExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:b16d7fe717171fb936dfb6de679558e149f5070bbe25ade44e38af83c330ad71", "checkIfUserHasAccessToExperience", "query", variables, options).then((res) => res.hasAccessToExperience);
      }
    },
    apps: {
      createAppBuild(variables, options) {
        return requester("whop-sdk-ts-server/sha256:221275dcd40898079c1e7bc1510b364a487581d6cdfc1a9524da74f2f82689cc", "createAppBuild", "mutation", { input: variables }, options).then((res) => res.createAppBuild);
      }
    },
    attachments: {
      getAttachment(variables, options) {
        return requester("whop-sdk-ts-server/sha256:07f48fb0c1292fda5a8dd5f54b5d1b637635a87b6012769819ebcf7795a045ba", "getAttachment", "query", variables, options).then((res) => res.attachment);
      },
      processAttachment(variables, options) {
        return requester("whop-sdk-ts-server/sha256:396c5803051b3c9bcedd3ce310505a4f57a6b94bc190e7142e897d9aa5036ece", "processAttachment", "mutation", { input: variables }, options).then((res) => res.mediaAnalyzeAttachment);
      },
      uploadMedia(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a3d06ed16e52126d96aae83cad3400471246f37fc275e4c8f4836c98bf8e9d59", "uploadMedia", "mutation", { input: variables }, options).then((res) => res.mediaDirectUpload);
      }
    },
    companies: {
      getCompanyLedgerAccount(variables, options) {
        return requester("whop-sdk-ts-server/sha256:38c83c1105b29a010208830b29d38af3d87a885b9c54a3da65d6dd2749128773", "getCompanyLedgerAccount", "query", variables, options).then((res) => res.company);
      },
      getWaitlistEntriesForCompany(variables, options) {
        return requester("whop-sdk-ts-server/sha256:5ad1e4c5932d68eda92af2d709ecf6ad0afc8fb29e1ef2bd1448f61650b637d3", "getWaitlistEntriesForCompany", "query", variables, options).then((res) => res.company);
      }
    },
    courses: {
      getCourse(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a70e69bec7574d2b4498d2bee86bd97adb87480599cbceeca8f63135078fd5c9", "getCourse", "query", variables, options).then((res) => res.course);
      }
    },
    experiences: {
      getExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:114eb7b7c8403ffbe75a0c74a26ac50b5367e183a16ba64eebf4a43d5466bb4e", "getExperience", "query", variables, options).then((res) => res.experience);
      },
      listAccessPassesForExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:699621f62be7675bfaf9fc49cb6d7abfe244bf691aee274cb492036f0b59bddc", "listAccessPassesForExperience", "query", variables, options).then((res) => res.experience);
      },
      listExperiences(variables, options) {
        return requester("whop-sdk-ts-server/sha256:6ca8515118d4710204bb2e32ea020bb98de8ea1cada4929ecfe7cae606cf6e79", "listExperiences", "query", variables, options).then((res) => res.company);
      },
      listUsersForExperience(variables, options) {
        return requester("whop-sdk-ts-server/sha256:85c827d8660dc2a97e8b930e213b83493ae132c00988e0f03e02c5dc99559a5a", "listUsersForExperience", "query", variables, options).then((res) => res.publicExperience);
      }
    },
    forums: {
      createForumPost(variables, options) {
        return requester("whop-sdk-ts-server/sha256:e6253ed15def017eef4bc2e2f8b01ecd9cf480b5c54fffed439d0afe01a864f2", "createForumPost", "mutation", { input: variables }, options).then((res) => res.createForumPost);
      },
      findOrCreateForum(variables, options) {
        return requester("whop-sdk-ts-server/sha256:5219219796ebdeb29023d098bd9498cf8c64b3536dc9d42cbc4e19708e0b317d", "findOrCreateForum", "mutation", { input: variables }, options).then((res) => res.createForum);
      },
      listForumPostsFromForum(variables, options) {
        return requester("whop-sdk-ts-server/sha256:97a7d797f3a5f6f83bf4628cc7c586d529b90e54c0a8e193493a55b4ad05df46", "listForumPostsFromForum", "query", variables, options).then((res) => res.feedPosts);
      }
    },
    messages: {
      findOrCreateChat(variables, options) {
        return requester("whop-sdk-ts-server/sha256:f69684c08f79192b7a4722a3c24a347fd0074e04e1c940517e54b52a9c27f40c", "findOrCreateChat", "mutation", { input: variables }, options).then((res) => res.createChat);
      },
      listDirectMessageConversations(variables, options) {
        return requester("whop-sdk-ts-server/sha256:ea4457aace3d29d8c376dd9de3629cee00d4a76ff0fc9b9d51b6ffeab1cc6ead", "listDirectMessageConversations", "query", variables, options).then((res) => res.myDmsChannelsV2);
      },
      listMessagesFromChat(variables, options) {
        return requester("whop-sdk-ts-server/sha256:5fdbf50fe489888e5b0a98e9fe6170584bf47ab38f87d1e0b7fce8f523513894", "listMessagesFromChat", "query", variables, options).then((res) => res.feedPosts);
      },
      sendDirectMessageToUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:b1b27b67e3c776813439ace71cb979587cd16c221155a303fcf8e4c7ad8beafa", "sendDirectMessageToUser", "mutation", variables, options).then((res) => res.sendMessage);
      },
      sendMessageToChat(variables, options) {
        return requester("whop-sdk-ts-server/sha256:a3b2e7765662a63fb57a7e61da5081b719fb75ba60560b9059ba4fe856499ac3", "sendMessageToChat", "mutation", variables, options).then((res) => res.sendMessage);
      }
    },
    notifications: {
      sendPushNotification(variables, options) {
        return requester("whop-sdk-ts-server/sha256:6239cbdb659f0698ed81ca9533740337b4d2d44e25e22297188d7d1e1a7037d2", "sendPushNotification", "mutation", { input: variables }, options).then((res) => res.sendNotification);
      }
    },
    payments: {
      chargeUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:2392cef9bb6e08d243f102a52c4a6a6e6bd9371e2fced2ad598b2dc14685af81", "chargeUser", "mutation", { input: variables }, options).then((res) => res.chargeUser);
      },
      createCheckoutSession(variables, options) {
        return requester("whop-sdk-ts-server/sha256:498eba2f4b9b6b8fe4ed5f93423af054ea1c4995bf2f3258089c40b68a4919e8", "createCheckoutSession", "mutation", { input: variables }, options).then((res) => res.createCheckoutSession);
      },
      payUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:d8cbac8b275a7c41e05ab4daa01084b0e54c31c6b5375261f8aee241e5f6c794", "payUser", "mutation", { input: variables }, options).then((res) => res.transferFunds);
      }
    },
    users: {
      getCurrentUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:9f7cc9ff353a2778e55b674cfd5737a7dcaff19be9ac13d6f79aabd5d8ef69ff", "getCurrentUser", "query", variables, options).then((res) => res.viewer);
      },
      getUserLedgerAccount(variables, options) {
        return requester("whop-sdk-ts-server/sha256:d7eeaf0a388395edb82220877e72a7fc91d1f06a6d89f1cfa5e56bb400d2aa49", "getUserLedgerAccount", "query", variables, options).then((res) => res.viewer);
      },
      getUser(variables, options) {
        return requester("whop-sdk-ts-server/sha256:d8022374c6b0eb0445781342a14c9bffafd776cee4e282cb76e31af8c017d33e", "getUser", "query", variables, options).then((res) => res.publicUser);
      }
    }
  };
}
var WhopOAuth2 = class _WhopOAuth2 {
  constructor(appId, appApiKey, apiOrigin = "https://api.whop.com") {
    this.appId = appId;
    this.appApiKey = appApiKey;
    this.apiOrigin = apiOrigin;
  }
  static OAUTH_URL = "https://whop.com/oauth/";
  getAuthorizationUrl({
    state = crypto.randomUUID(),
    redirectUri,
    scope = ["read_user"]
  }) {
    const oAuthUrl = new URL(_WhopOAuth2.OAUTH_URL);
    oAuthUrl.searchParams.set("client_id", this.appId);
    oAuthUrl.searchParams.set("response_type", "code");
    oAuthUrl.searchParams.set("scope", scope.join(" "));
    oAuthUrl.searchParams.set("state", state);
    if (redirectUri instanceof URL) {
      oAuthUrl.searchParams.set("redirect_uri", redirectUri.toString());
    } else {
      oAuthUrl.searchParams.set("redirect_uri", redirectUri);
    }
    return {
      url: oAuthUrl.toString(),
      state
    };
  }
  async exchangeCode({
    code,
    redirectUri
  }) {
    const resolvedRedirectUri = redirectUri instanceof URL ? redirectUri.toString() : redirectUri;
    const tokensEndpoint = new URL("/api/oauth/token", this.apiOrigin);
    const tokensResponse = await fetch(tokensEndpoint, {
      method: "POST",
      body: JSON.stringify({
        code,
        client_id: this.appId,
        client_secret: this.appApiKey,
        grant_type: "authorization_code",
        redirect_uri: resolvedRedirectUri
      }),
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
        pragma: "no-cache"
      },
      cache: "no-store"
    });
    if (!tokensResponse.ok) {
      return {
        ok: false,
        code: tokensResponse.status,
        raw: tokensResponse
      };
    }
    const tokens = await tokensResponse.json();
    return {
      ok: true,
      tokens
    };
  }
};
var DEFAULT_WEBSOCKET_ORIGIN2 = "https://ws-prod.whop.com";
function sendWebsocketMessageFunction2(apiOptions) {
  const origin = apiOptions.websocketOrigin ?? DEFAULT_WEBSOCKET_ORIGIN2;
  const path = "/v1/websockets/send";
  const url = new URL(path, origin);
  const headers = new Headers;
  headers.set("Content-Type", "application/json");
  headers.set("Authorization", `Bearer ${apiOptions.appApiKey}`);
  return async function SendWebsocketMessage(input) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send websocket message. Code: ${response.status}. Message: ${error}`);
    }
    const data = await response.json();
    if (!data.ok) {
      throw new Error("Failed to send websocket message");
    }
  };
}
var WhopWebsocketClientServer2 = class extends WhopWebsocketClientBase2 {
  keys;
  constructor(keys) {
    super();
    this.keys = keys;
  }
  makeWebsocket() {
    const path = "/v1/websockets/connect";
    const origin = this.keys.websocketOrigin ?? DEFAULT_WEBSOCKET_ORIGIN2;
    const url = new URL(path, origin);
    url.protocol = url.protocol.replace("http", "ws");
    const headers = {
      Authorization: `Bearer ${this.keys.appApiKey}`,
      "x-on-behalf-of": this.keys.onBehalfOfUserId
    };
    return new WebSocket(url, { headers });
  }
};
function makeConnectToWebsocketFunction22(options) {
  return function connectToWebsocket() {
    return new WhopWebsocketClientServer2(options);
  };
}
function BaseWhopServerSdk2(options, uploadFile3) {
  const baseSdk = getSdk22(makeRequester22(options));
  const sendWebsocketMessage = sendWebsocketMessageFunction2(options);
  const websocketClient = makeConnectToWebsocketFunction22(options);
  const fileSdk = fileSdkExtensions2(baseSdk, uploadFile3);
  const oauth = new WhopOAuth2(options.appId, options.appApiKey, options.apiOrigin);
  const verifyUserToken22 = makeUserTokenVerifier2({
    appId: options.appId,
    dontThrow: false
  });
  return {
    ...baseSdk,
    attachments: {
      ...baseSdk.attachments,
      ...fileSdk
    },
    websockets: {
      sendMessage: sendWebsocketMessage,
      client: websocketClient
    },
    oauth,
    verifyUserToken: verifyUserToken22
  };
}
function makeWhopServerSdk2({
  uploadFile: uploadFile3
}) {
  return function WhopServerSdk(options) {
    const baseSdk = BaseWhopServerSdk2(options, uploadFile3);
    return {
      ...baseSdk,
      withUser: (userId) => WhopServerSdk({ ...options, onBehalfOfUserId: userId }),
      withCompany: (companyId) => WhopServerSdk({ ...options, companyId })
    };
  };
}
function makeRequester22(apiOptions) {
  const endpoint = getEndpoint22(apiOptions);
  const headers = getHeaders2(apiOptions);
  return async function fetcher(operationId, operationName, operationType, vars, options) {
    const customHeaders = new Headers(options?.headers);
    const actualHeaders = new Headers(headers);
    for (const [key, value] of customHeaders.entries()) {
      actualHeaders.set(key, value);
    }
    return graphqlFetch2(endpoint, operationId, operationName, operationType, vars, actualHeaders);
  };
}
function getEndpoint22(apiOptions) {
  const url = new URL(apiOptions.apiPath ?? "/public-graphql", apiOptions.apiOrigin ?? DEFAULT_API_ORIGIN2);
  return url.href;
}
function getHeaders2(options) {
  const headers = new Headers;
  headers.set("Authorization", `Bearer ${options.appApiKey}`);
  if (options.onBehalfOfUserId)
    headers.set("x-on-behalf-of", options.onBehalfOfUserId);
  if (options.companyId)
    headers.set("x-company-id", options.companyId);
  return headers;
}
async function uploadPartImpl2({
  url,
  fullData,
  partNumber,
  headers,
  onProgress,
  signal
}) {
  const offset4 = (partNumber - 1) * MULTIPART_UPLOAD_CHUNK_SIZE2;
  const data = fullData.slice(offset4, Math.min(offset4 + MULTIPART_UPLOAD_CHUNK_SIZE2, fullData.size));
  signal?.throwIfAborted();
  return new Promise((resolve, reject) => {
    const fullURL = new URL(url);
    const req = request2(fullURL, {
      method: "PUT",
      headers: {
        ...headers,
        host: fullURL.host,
        "content-length": data.size.toString()
      },
      signal
    });
    let uploadedBytes = 0;
    req.on("response", async (res) => {
      const statusCode = res.statusCode ?? 0;
      if (statusCode >= 200 && statusCode < 300) {
        const etag = res.headers.etag;
        if (!etag) {
          reject(new Error("Missing etag on upload response"));
          return;
        }
        resolve(etag.slice(1, -1));
      } else {
        let chunks = "";
        for await (const chunk of res) {
          chunks += chunk.toString();
        }
        reject(new Error(`Failed to upload part with ${statusCode}: ${res.statusMessage}`, { cause: chunks }));
      }
    });
    req.on("error", (error) => {
      reject(error);
    });
    req.on("drain", () => {
      onProgress?.({
        total: data.size,
        loaded: uploadedBytes
      });
    });
    Readable2.fromWeb(data.stream()).on("data", (chunk) => {
      uploadedBytes += chunk.length;
      onProgress?.({
        total: data.size,
        loaded: uploadedBytes
      });
    }).pipe(req);
    onProgress?.({ total: data.size, loaded: 0 });
  });
}
var uploadFile3 = makeUploadAttachmentFunction2({ uploadPart: uploadPartImpl2 });
var sdk3 = makeWhopClientSdk2({ uploadFile: uploadFile3 });
var uploadFile22 = makeUploadAttachmentFunction2({ uploadPart: uploadPartImpl2 });
var sdk22 = makeWhopServerSdk2({ uploadFile: uploadFile22 });
var asyncLocalStorage = new AsyncLocalStorage;
async function withExperience(options) {
  const { sdk: sdk32, experienceId, view, userId, experience } = options;
  let finalExperience = experience;
  if (!finalExperience) {
    const fetchedExperience = await sdk32.experiences.getExperience({
      experienceId
    });
    if (!fetchedExperience) {
      throw new Error(`Experience with ID ${experienceId} not found`);
    }
    finalExperience = fetchedExperience;
  }
  if (!finalExperience) {
    throw new Error(`Experience is required but not provided for experienceId: ${experienceId}`);
  }
  const context2 = {
    experienceId,
    userId,
    experience: finalExperience
  };
  return asyncLocalStorage.run(context2, () => view(finalExperience));
}
var $cookies = require_cookies3().cookies;
var $headers = require_headers2().headers;
var $draftMode = require_draft_mode().draftMode;
var import_react18 = __toESM2(require_react2(), 1);
var getCachedUserToken = import_react18.cache(async () => {
  const headersList = await $headers();
  return verifyUserToken2(headersList);
});
var getCachedUserAccess = import_react18.cache(async (sdk32, userId, experienceId) => {
  return sdk32.access.checkIfUserHasAccessToExperience({
    userId,
    experienceId
  });
});
var getCachedUserAuthentication = import_react18.cache(async (sdk32, experienceId, getUserStatus, preUserAuth) => {
  const headersList = await $headers();
  if (preUserAuth) {
    const preAuthResult = await preUserAuth(headersList);
    if (preAuthResult) {
      return preAuthResult.userData;
    }
  }
  const user = await getCachedUserToken();
  if (!user) {
    return null;
  }
  const hasAccess = await getCachedUserAccess(sdk32, user.userId, experienceId);
  const userStatus = getUserStatus({
    userId: user.userId,
    accessLevel: hasAccess.accessLevel
  });
  if (!userStatus) {
    return null;
  }
  return {
    userId: user.userId,
    userStatus,
    userAccessLevel: hasAccess.accessLevel
  };
});

// src/builder.tsx
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
async function AppBuilder({
  children,
  params,
  whopSdk,
  appConfig,
  appView,
  getUser,
  fetchData
}) {
  const { themeConfig, fonts, appId } = appConfig;
  const { experienceId } = await params;
  if (!experienceId) {
    return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(OutOfBounds, {
      themeConfig,
      appId,
      fonts
    }, undefined, false, undefined, this);
  }
  try {
    return await withExperience({
      sdk: whopSdk,
      experienceId,
      view: async (experience) => {
        const user = await getUser(experience.id);
        if (!user) {
          return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Unauthorized, {
            themeConfig,
            appId,
            fonts
          }, undefined, false, undefined, this);
        }
        let viewProps = {
          experience,
          user
        };
        if (fetchData) {
          const data = await fetchData({ user, experience });
          if (data) {
            viewProps = {
              ...viewProps,
              ...data
            };
          }
        }
        switch (user.userStatus) {
          case "developer":
            return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(appView.developer, {
              ...viewProps
            }, undefined, false, undefined, this);
          case "creator":
            return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(appView.creator, {
              ...viewProps
            }, undefined, false, undefined, this);
          case "user":
            return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(appView.user, {
              ...viewProps
            }, undefined, false, undefined, this);
          default:
            return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Unauthorized, {
              themeConfig,
              appId,
              fonts
            }, undefined, false, undefined, this);
        }
      }
    });
  } catch (error) {
    return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(NoExperience, {
      themeConfig,
      appId,
      fonts
    }, undefined, false, undefined, this);
  }
}
export {
  Unauthorized,
  OutOfBounds,
  NoExperience,
  AppBuilder
};
