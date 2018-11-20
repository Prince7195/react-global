var Store;
(function (Store) {
    var GlobalConnector = /** @class */ (function () {
        function GlobalConnector() {
            this.subject = new Rx.BehaviorSubject({});
        }
        GlobalConnector.prototype.dispatch = function (action) {
            this.subject.next(action);
        };
        GlobalConnector.prototype.listen = function (callback) {
            this.subject.subscribe(callback);
        };
        return GlobalConnector;
    }());
    Store.GlobalListener = new GlobalConnector();
})(Store || (Store = {}));
