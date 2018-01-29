
$(function() {

    describe('RSS Feeds', function() {

        it('(1) All Feeds are defined', function() {
            expect(allFeeds).toBeDefined(); // there are feeds on app
            expect(allFeeds.length).toBeGreaterThan(0); // there are more than feed on the page
        });

        it('(2) All Feeds have a right Url', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined(); // to be defined in the data
                expect(feed.url.trim()).toBeTruthy(); // to have a readable title without whitespace
            }
        });

        it('(3) All Feeds have a right name', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined(); // to be defined and be there on the object
                expect(feed.name.trim()).toBeTruthy(); // name contains characters not whitespaces
            }
        });
    });

    describe('The menu', function() {

        let selector = $('body'),
            // menuIcon = $('.menu-icon-link'),
            showClass = 'menu-hidden';

        function mockClickEvent() {
            selector.toggleClass(showClass);
        }

        it('(1) menu element is hidden', function () {
            expect(selector.hasClass(showClass)).toBeTruthy();
        });


        //TODO add event spy by using jasmine-jquery but it does not work in first try

        it('(2) menu changes visibility when clicked', function () {
            mockClickEvent();
            // let spyEvent = spyOnEvent(menuIcon,'click');
             expect(selector.hasClass(showClass)).toBeFalsy();
            // expect(spyEvent).toHaveBeenTriggered();
            mockClickEvent();
            expect(selector.hasClass(showClass)).toBeTruthy();

        });

    });
    // TODO handle error callbacks
    describe('Initial Entries', function () {


        beforeEach((done)=>{
            loadFeed.call(this, 0, function () {
                done();
            });
        });

        it('(1) must have entry', (done)=>{
            expect($('.feed').has($('.entry'))).toBeTruthy(); // check if the ',entry' section is added after feedLoad
            done();
        });
    });

    describe('New Feed Selection', function () {
        

        let container = $('.feed'),
            containerContent = container.html(),
            title = $('.header-title');

        beforeAll((done) => {
            loadFeed.call(this, 0, function () {
                done();
            });
        });

        it('(1) should have a content', (done) => {

            expect(title.html()).not.toMatch(/feed/gi); // The title changes in tern of the feed name
            expect(containerContent).not.toEqual(container.html()); // make sure the content has been changed
            done();
        });

    });

}());
