function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-gray-600 text-sm px-6 py-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">

        {/* Top legal disclaimer */}
        <div className="text-xs border-b border-gray-300 pb-4 mb-6">
          <p className="mb-2">
            ◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.<br></br>
            Representative example:<br></br><br></br>
            A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.<br></br><br></br>
            
            ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.<br></br><br></br>
            
            1. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.<br></br><br></br>
            
            Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
            A subscription is required for Apple TV+.<br></br><br></br>
            
            Features are subject to change. Some features, applications and services may not be available in all regions or all languages.<br></br><br></br> 
            <a href="#" className="text-blue-600 underline">Terms apply.</a>
          </p>
          <p className="mb-2">
            A subscription is required for Apple TV+. Features may not be available in all regions or languages.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">
          {/* Shop and Learn */}
          <div>
            <h4 className="font-semibold text-black mb-2">Shop and Learn</h4>
            <ul className="space-y-1">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
              <li className="font-semibold mt-2">Apple Wallet</li>
              <li>Wallet</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold text-black mb-2">Account</h4>
            <ul className="space-y-1">
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>

            <h4 className="font-semibold text-black mt-4 mb-2">Entertainment</h4>
            <ul className="space-y-1">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>

          {/* Apple Store */}
          <div>
            <h4 className="font-semibold text-black mb-2">Apple Store</h4>
            <ul className="space-y-1">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Group Reservations</li>
              <li>Apple Camp</li>
              <li>Apple Trade In</li>
              <li>Ways to Buy</li>
              <li>Recycling Programme</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>

          {/* For Business & Education */}
          <div>
            <h4 className="font-semibold text-black mb-2">For Business</h4>
            <ul className="space-y-1">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>

            <h4 className="font-semibold text-black mt-4 mb-2">For Education</h4>
            <ul className="space-y-1">
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>

            <h4 className="font-semibold text-black mt-4 mb-2">For Healthcare</h4>
            <ul className="space-y-1">
              <li>Apple in Healthcare</li>
              <li>Mac in Healthcare</li>
              <li>Health on Apple Watch</li>
            </ul>
          </div>

          {/* Apple Values */}
          <div>
            <h4 className="font-semibold text-black mb-2">Apple Values</h4>
            <ul className="space-y-1">
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supply Chain</li>
            </ul>
          </div>

          {/* About Apple */}
          <div>
            <h4 className="font-semibold text-black mb-2">About Apple</h4>
            <ul className="space-y-1">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-xs text-gray-500 border-t pt-4 text-center">
          <p>
            More ways to shop: <a href="#" className="text-blue-600">Find an Apple Store</a> or <a href="#" className="text-blue-600">other retailer</a> near you. Or call <a href="#" className="text-blue-600">000800 040 1966</a>.
          </p>
          <p className="mt-4 space-x-4">
            <span>© 2025 Apple Inc. All rights reserved.</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Sales Policy</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Site Map</a>
          </p>
          <p className="mt-2">India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;