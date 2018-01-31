
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
             menuIcon = $('.menu-icon-link'),
            showClass = 'menu-hidden';

        it('(1) menu element is hidden', function () {
            expect(selector.hasClass(showClass)).toBeTruthy();
        });


        //TODO add event spy by using jasmine-jquery but it does not work in first try

        it('(2) menu changes visibility when clicked', function () {
            menuIcon.trigger('click');
            expect(selector.hasClass(showClass)).toBeFalsy();
            menuIcon.trigger('click'); // make sure the menu is not still opened


        });

    });

    // TODO handle error callbacks
    describe('Initial Entries', function () {
        let feedEntry = '';

        beforeEach((done)=>{
            loadFeed(0, function () {
                done();
            });
        });

        it('(1) Feed must have entry', (done)=>{
            feedEntry = $('.feed .entry');
            expect(Array.from(feedEntry).length).toBeGreaterThan(0); // check if it has more than entry
            done();
        });
    });

    describe('New Feed Selection', function () {
        

        let container = $('.feed'),
            containerContent = '',
            newContainerContent = '',
            title = $('.header-title');

        beforeEach((done) => {
            loadFeed( 0, function () {
                done();

                loadFeed( 0, function () {
                    done();
                });

            });
        });

        it('(1) should have a content', (done) => {
            containerContent = container.html();
            expect(title.html()).not.toMatch(/feeds/gi); // The title changes in tern of the feed name
            //expect(containerContent).not.toEqual(container.html()); // make sure the content has been changed
            done();
            newContainerContent = container.html();
            expect(containerContent).not.toEqual(newContainerContent);
            done();
        });

    });

}());
