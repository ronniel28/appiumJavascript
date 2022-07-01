class RiderKoHomePage {

    get burgerIcon() {
        return $('//*[@content-desc="Open navigation drawer"]');
    }

    get location() {
        return $('//android.widget.TextView[@text="Location"]');
    }

    get savedAddressIcon() {
        return $('//*[@resource-id="com.riderko.user:id/icon_loc"]');
    }

    get savedAddressName() {
        return $('//*[@resource-id="com.riderko.user:id/saved_name"]');
    }

    get homepageGreeting() {
        return $('//*[@resource-id="com.riderko.user:id/name_greeting"]');
    }

    get searchBar() {
        return $('//android.widget.TextView[@text="What are you looking for?"]');
    }

    get deliveryService() {
        return $('//android.widget.TextView[@text="Delivery"]');
    }

    get eatsService() {
        return $('//android.widget.TextView[@text="Eats"]');
    }

    get martService() {
        return $('//android.widget.TextView[@text="Mart"]');
    }

    get promoImage() {
        return $('//*[@resource-id="com.riderko.user:id/image_promotions"]');
    }

    get promoTitle() {
        return $('//*[@resource-id="com.riderko.user:id/text_promotions_title"]');
    }

    get promoDescription() {
        return $('//*[@resource-id="com.riderko.user:id/text_promotions_subtitle"]');
    }

    get dealsSection() {
        return $('//*[@resource-id="com.riderko.user:id/ll_deals"]');
    }

    get discoverSection() {
        return $('//*[@resource-id="com.riderko.user:id/ll_discover"]');
    }

    get currentLocation() {
        return $('//*[@resource-id="com.riderko.user:id/mylocation"]');
    }

    

}

export default new RiderKoHomePage;