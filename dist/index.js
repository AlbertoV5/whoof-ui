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

// ../../node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React = __toESM(require_react(), 1);
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
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
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

// ../../node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var require_cookies = __commonJS((exports, module) => {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export(src_exports, {
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

// ../../node_modules/next/dist/server/web/spec-extension/cookies.js
var require_cookies2 = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/web/spec-extension/adapters/reflect.js
var require_reflect = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS((exports) => {
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

// ../../node_modules/next/dist/client/components/app-router-headers.js
var require_app_router_headers = __commonJS((exports, module) => {
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

// ../../node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js
var require_request_cookies = __commonJS((exports) => {
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

// ../../node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS((exports, module) => {
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

// ../../node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS((exports, module) => {
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

// ../../node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS((exports) => {
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

// ../../node_modules/next/dist/lib/metadata/metadata-constants.js
var require_metadata_constants = __commonJS((exports) => {
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

// ../../node_modules/next/dist/lib/scheduler.js
var require_scheduler = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS((exports) => {
  var react = __toESM(require_react(), 1);
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
  function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
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
      const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
      const error = createErrorWithComponentStack(message, componentStack);
      dynamicValidation.dynamicErrors.push(error);
      return;
    }
  }
  function createErrorWithComponentStack(message, componentStack) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
    error.stack = "Error: " + message + componentStack;
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

// ../../node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js
var require_create_deduped_by_callsite_server_error_logger = __commonJS((exports) => {
  var react = __toESM(require_react(), 1);
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
    var cache2 = _getRequireWildcardCache(nodeInterop);
    if (cache2 && cache2.has(obj)) {
      return cache2.get(obj);
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
    if (cache2) {
      cache2.set(obj, newObj);
    }
    return newObj;
  }
  var errorRef = {
    current: null
  };
  var cache = typeof _react.cache === "function" ? _react.cache : (fn) => fn;
  var logErrorOrWarn = process.env.__NEXT_DYNAMIC_IO ? console.error : console.warn;
  var flushCurrentErrorIfNew = cache((key) => {
    try {
      logErrorOrWarn(errorRef.current);
    } finally {
      errorRef.current = null;
    }
  });
  function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
      const message = getMessage(...args);
      if (true) {
        var _stack;
        const callStackFrames = (_stack = new Error().stack) == null ? undefined : _stack.split(`
`);
        if (callStackFrames === undefined || callStackFrames.length < 4) {
          logErrorOrWarn(message);
        } else {
          const key = callStackFrames[4];
          errorRef.current = message;
          flushCurrentErrorIfNew(key);
        }
      } else {}
    };
  }
});

// ../../node_modules/next/dist/server/app-render/after-task-async-storage-instance.js
var require_after_task_async_storage_instance = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/app-render/after-task-async-storage.external.js
var require_after_task_async_storage_external = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/request/utils.js
var require_utils = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/request/cookies.js
var require_cookies3 = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/web/spec-extension/adapters/headers.js
var require_headers = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/request/headers.js
var require_headers2 = __commonJS((exports) => {
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

// ../../node_modules/next/dist/server/request/draft-mode.js
var require_draft_mode = __commonJS((exports) => {
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
    constructor(provider) {
      this._provider = provider;
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

// src/components/OutOfBounds.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var OutOfBounds = ({
  appId,
  message = "Please install this app via Whop.",
  installUrl
}) => {
  const defaultInstallUrl = `https://whop.com/apps/${appId}/install/`;
  const finalInstallUrl = installUrl || defaultInstallUrl;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    className: "flex flex-col items-center justify-center h-screen",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV("p", {
      children: message.split("install").length > 1 ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
        children: [
          message.split("install")[0],
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("a", {
            className: "text-blue-9 hover:text-blue-10",
            href: finalInstallUrl,
            children: "install"
          }, undefined, false, undefined, this),
          message.split("install")[1]
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
        children: [
          message,
          " ",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("a", {
            className: "text-blue-9 hover:text-blue-10",
            href: finalInstallUrl,
            children: "Install here"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
// src/components/Unauthorized.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var Unauthorized = ({
  message = "You are not authorized to view this page. You must purchase a product first.",
  showPurchaseLink = false,
  purchaseUrl
}) => {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("div", {
    className: "flex flex-col items-center justify-center h-screen space-y-4",
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("p", {
        className: "text-center max-w-md",
        children: message
      }, undefined, false, undefined, this),
      showPurchaseLink && purchaseUrl && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("a", {
        className: "text-blue-9 hover:text-blue-10 font-medium",
        href: purchaseUrl,
        children: "Purchase Access"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
// src/components/NoExperience.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var NoExperience = ({
  message = "This experience does not exist."
}) => {
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("div", {
    className: "flex flex-col items-center justify-center h-screen",
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV("p", {
      className: "text-center max-w-md",
      children: message
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
};
// ../whoof-auth/dist/index.js
import { createRequire } from "node:module";
import { request } from "https";
import { Readable } from "stream";
import { AsyncLocalStorage } from "async_hooks";

// ../../node_modules/next/headers.js
var $cookies = require_cookies3().cookies;
var $headers = require_headers2().headers;
var $draftMode = require_draft_mode().draftMode;

// ../whoof-auth/dist/index.js
var import_react = __toESM(require_react(), 1);
var __create2 = Object.create;
var __getProtoOf2 = Object.getPrototypeOf;
var __defProp2 = Object.defineProperty;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __toESM2 = (mod, isNodeMode, target) => {
  target = mod != null ? __create2(__getProtoOf2(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames2(mod))
    if (!__hasOwnProp2.call(to, key))
      __defProp2(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS2 = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);
var require_md5 = __commonJS2((exports, module) => {
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
var require_lib = __commonJS2((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TypedEmitter = __require("events").EventEmitter;
});
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
function isCryptoKey(key) {
  return key?.[Symbol.toStringTag] === "CryptoKey";
}
function isKeyObject(key) {
  return key?.[Symbol.toStringTag] === "KeyObject";
}
var is_key_like_default = (key) => {
  return isCryptoKey(key) || isKeyObject(key);
};
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
var check_key_length_default = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};
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
var validate_algorithms_default = (option, algorithms) => {
  if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return;
  }
  return new Set(algorithms);
};
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
var epoch_default = (date) => Math.floor(date.getTime() / 1000);
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
var import_js_md5 = __toESM2(require_md5(), 1);
var import_tiny_typed_emitter = __toESM2(require_lib(), 1);
var __defProp22 = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp22(target, name, { get: all[name], enumerable: true });
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
function verifyUserToken(tokenOrHeadersOrRequest, overrideOptions) {
  return internalVerifyUserToken(tokenOrHeadersOrRequest, {
    ...overrideOptions
  });
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
__export(proto_exports, {
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
__export(index_common_exports, {
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
__export(index_google_exports, {
  protobuf: () => index_google_protobuf_exports
});
var index_google_protobuf_exports = {};
__export(index_google_protobuf_exports, {
  NullValue: () => NullValue
});
var NullValue = {
  NULL_VALUE: "NULL_VALUE",
  UNRECOGNIZED: "UNRECOGNIZED"
};
var index_calendar_bookings_app_exports = {};
var index_bounties_app_exports = {};
__export(index_bounties_app_exports, {
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
__export(index_content_rewards_app_exports, {
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
__export(index_events_app_exports, {
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
__export(index_wheel_app_exports, {
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
__export(index_games_exports, {
  quizzes: () => index_games_quizzes_exports
});
var index_games_quizzes_exports = {};
__export(index_games_quizzes_exports, {
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
var asyncLocalStorage = new AsyncLocalStorage;
async function withExperience(options) {
  const { sdk: sdk3, experienceId, view, userId, experience } = options;
  let finalExperience = experience;
  if (!finalExperience) {
    const fetchedExperience = await sdk3.experiences.getExperience({
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
  const context = {
    experienceId,
    userId,
    experience: finalExperience
  };
  return asyncLocalStorage.run(context, () => view(finalExperience));
}
var getCachedUserToken = import_react.cache(async () => {
  const headersList = await $headers();
  return verifyUserToken(headersList);
});
var getCachedUserAccess = import_react.cache(async (sdk3, userId, experienceId) => {
  return sdk3.access.checkIfUserHasAccessToExperience({
    userId,
    experienceId
  });
});
var getCachedUserAuthentication = import_react.cache(async (sdk3, experienceId, getUserStatus, preUserAuth) => {
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
  const hasAccess = await getCachedUserAccess(sdk3, user.userId, experienceId);
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
  const { appId } = appConfig;
  const { experienceId } = await params;
  if (!experienceId) {
    return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(OutOfBounds, {
      appId
    }, undefined, false, undefined, this);
  }
  try {
    return await withExperience({
      sdk: whopSdk,
      experienceId,
      view: async (experience) => {
        const user = await getUser(experience.id);
        if (!user) {
          return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Unauthorized, {}, undefined, false, undefined, this);
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
            return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Unauthorized, {}, undefined, false, undefined, this);
        }
      }
    });
  } catch (error) {
    return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(NoExperience, {}, undefined, false, undefined, this);
  }
}
export {
  Unauthorized,
  OutOfBounds,
  NoExperience,
  AppBuilder
};
