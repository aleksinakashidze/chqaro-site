const fs = require('fs');
const MAIL = 'support@chqaro.ge';
const NAV = `<header><div class="wrap"><nav><a class="logo" href="index.html">Chqaro</a><a href="privacy.html">კონფიდენციალურობა</a><a href="terms.html">წესები</a><a href="delete-account.html">ანგარიშის წაშლა</a></nav></div></header>`;
const FOOT = `<footer><div class="wrap">© 2026 Chqaro · ქუთაისი, საქართველო · <a href="mailto:${MAIL}">${MAIL}</a></div></footer>`;
const page = (title, desc, body) => `<!doctype html><html lang="ka"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${desc}"><link rel="stylesheet" href="style.css"></head><body>${NAV}<main><div class="wrap">\n${body}\n</div></main>${FOOT}</body></html>\n`;

fs.writeFileSync('style.css', `:root{--brand:#E8531F;--ink:#1a1a1a;--muted:#5f6368;--line:#e6e6e6;--bg:#fff}
*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Georgian",sans-serif;color:var(--ink);background:var(--bg);line-height:1.6}
header{border-bottom:1px solid var(--line)}.wrap{max-width:760px;margin:0 auto;padding:0 20px}
nav{display:flex;align-items:center;gap:18px;height:60px;font-size:15px;flex-wrap:wrap}nav a{color:var(--ink);text-decoration:none}nav a:hover{color:var(--brand)}
nav .logo{font-weight:800;font-size:20px;color:var(--brand);margin-right:auto;letter-spacing:-.3px}
main{padding:32px 0 64px}h1{font-size:30px;margin:0 0 6px;letter-spacing:-.4px}h2{font-size:19px;margin:28px 0 8px}
.sub{color:var(--muted);margin:0 0 24px}p,li{color:#2b2b2b}table{border-collapse:collapse;width:100%;font-size:15px}td,th{border:1px solid var(--line);padding:8px 10px;text-align:left;vertical-align:top}th{background:#fafafa}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:24px 0}.card{border:1px solid var(--line);border-radius:12px;padding:16px}.card b{display:block;margin-bottom:4px}
footer{border-top:1px solid var(--line);padding:20px 0;color:var(--muted);font-size:14px}footer a{color:var(--muted)}
.en{color:var(--muted);font-size:14px;border-left:3px solid var(--line);padding-left:12px;margin:8px 0 0}
`);

fs.writeFileSync('index.html', page('Chqaro — მიწოდება და ტაქსი ქუთაისში', 'Chqaro: საკვების და პროდუქტების მიწოდება და ტაქსი ქუთაისსა და ბაღდათში.', `
<h1>ჩქარო</h1><p class="sub">საკვების და პროდუქტების მიწოდება და ტაქსი — ქუთაისი და ბაღდათი.</p>
<div class="cards">
<div class="card"><b>Chqaro</b>მომხმარებლის აპი: რესტორნები, მაღაზიები, ტაქსი, შეკვეთის ლაივ-თვალყური, ნაღდი ან ბარათით გადახდა.</div>
<div class="card"><b>Chqaro Courier</b>კურიერის აპი: შეთავაზებები, მარშრუტი, შემოსავალი.</div>
<div class="card"><b>Chqaro Driver</b>მძღოლის აპი: მგზავრობის შეთავაზებები, ნავიგაცია, ბალანსი.</div>
</div>
<p>აპები ამჟამად Google Play-ზე ტესტირების რეჟიმშია. კითხვებისთვის მოგვწერეთ <a href="mailto:${MAIL}">${MAIL}</a>.</p>
<p><a href="privacy.html">კონფიდენციალურობის პოლიტიკა</a> · <a href="terms.html">წესები და პირობები</a> · <a href="delete-account.html">ანგარიშის წაშლა</a></p>`));

fs.writeFileSync('privacy.html', page('კონფიდენციალურობის პოლიტიკა — Chqaro', 'რა მონაცემებს აგროვებს Chqaro და როგორ იყენებს მათ.', `
<h1>კონფიდენციალურობის პოლიტიკა</h1><p class="sub">ძალაშია 2026 წლის 1 ნოემბრიდან · ეხება Chqaro, Chqaro Courier და Chqaro Driver აპლიკაციებს</p>
<p class="en">English summary: Chqaro collects your phone number, name, delivery addresses and, while you use the app, your location, to fulfil orders and rides. Couriers and drivers share their live location with the customer they serve. We use Firebase Cloud Messaging for notifications, Google Maps for maps, uBill for SMS codes and Flitt for card payments; card details never reach our servers. Data is stored on MongoDB Atlas and Render. You can delete your account in the app (Profile → Delete account) or via <a href="delete-account.html">this page</a>. Contact: ${MAIL}.</p>

<h2>1. ვინ ვართ</h2>
<p>Chqaro („ჩვენ“) არის მიწოდებისა და ტაქსის შეკვეთის პლატფორმა ქუთაისსა და ბაღდათში. მონაცემთა დამუშავებაზე პასუხისმგებელია პლატფორმის ოპერატორი; საკონტაქტო ელფოსტა — <a href="mailto:${MAIL}">${MAIL}</a>.</p>

<h2>2. რა მონაცემებს ვაგროვებთ</h2>
<table><tr><th>მონაცემი</th><th>ვისგან</th><th>რისთვის</th></tr>
<tr><td>ტელეფონის ნომერი</td><td>ყველა აპი</td><td>რეგისტრაცია და შესვლა ერთჯერადი SMS კოდით, კურიერთან/მძღოლთან დაკავშირება</td></tr>
<tr><td>სახელი, გვარი</td><td>ყველა აპი</td><td>შეკვეთის/მგზავრობის იდენტიფიკაცია, მხარეების ურთიერთგაცნობა</td></tr>
<tr><td>მიწოდების მისამართები</td><td>Chqaro</td><td>შეკვეთის მიტანა, მისამართების შენახვა მომავალი შეკვეთებისთვის</td></tr>
<tr><td>მდებარეობა (GPS), მხოლოდ აპის გამოყენებისას</td><td>ყველა აპი</td><td>მომხმარებელი: მისამართის არჩევა, ტაქსის გამოძახება. კურიერი/მძღოლი: ახლომდებარე შეკვეთების შეთავაზება და ლაივ-თვალყური მომხმარებლისთვის</td></tr>
<tr><td>შეკვეთებისა და მგზავრობების ისტორია</td><td>ყველა აპი</td><td>სერვისის შესრულება, ანგარიშსწორება, პრეტენზიების განხილვა</td></tr>
<tr><td>მანქანის მოდელი, ნომერი, ფერი</td><td>Chqaro Driver</td><td>მგზავრს ჩვენება მგზავრობისას</td></tr>
<tr><td>Push-შეტყობინების ტოკენი</td><td>ყველა აპი</td><td>შეტყობინებები შეკვეთის სტატუსზე და შეთავაზებებზე</td></tr>
<tr><td>შეფასებები და კომენტარები</td><td>Chqaro</td><td>სერვისის ხარისხი; ობიექტს ჩანს შეფასება და კომენტარი, სახელის გარეშე</td></tr>
<tr><td>ტექნიკური მონაცემები (IP, მოწყობილობის ტიპი, შეცდომების ლოგები)</td><td>ყველა აპი</td><td>უსაფრთხოება (მაგ. SMS კოდების ბოროტად გამოყენების შეზღუდვა), შეცდომების გამოსწორება</td></tr>
</table>
<p>ფონურ რეჟიმში (როცა აპი დახურულია) მდებარეობას არ ვაგროვებთ. ფოტოებს, კონტაქტებს და ფაილებს არ ვკითხულობთ.</p>

<h2>3. გადახდები</h2>
<p>ბარათით გადახდას ამუშავებს ლიცენზირებული პროვაიდერი Flitt (flitt.com). ბარათის ნომერი და CVV შეიყვანება მხოლოდ Flitt-ის დაცულ გვერდზე და ჩვენს სერვერებზე არასდროს ინახება. ჩვენ ვიღებთ მხოლოდ გადახდის სტატუსს და თანხას.</p>

<h2>4. ვის ვუზიარებთ</h2>
<ul>
<li><b>ობიექტს (რესტორანი/მაღაზია)</b> — თქვენი შეკვეთის შიგთავსი, სახელი, მისამართი და ტელეფონი, მხოლოდ ამ შეკვეთის შესასრულებლად.</li>
<li><b>კურიერს/მძღოლს</b> — სახელი, მისამართი/პიკაპის წერტილი და ტელეფონი მიმდინარე შეკვეთისთვის; მომხმარებელს კი — კურიერის/მძღოლის სახელი, მანქანა და ლაივ-მდებარეობა.</li>
<li><b>სერვის-პროვაიდერებს</b>: Google Firebase (push-შეტყობინებები), Google Maps (რუკები), uBill (SMS კოდები), Flitt (გადახდები), MongoDB Atlas და Render (მონაცემთა შენახვა და ჰოსტინგი). ისინი მონაცემებს ამუშავებენ მხოლოდ ჩვენი დავალებით.</li>
<li><b>სახელმწიფო ორგანოებს</b> — მხოლოდ კანონით გათვალისწინებულ შემთხვევაში.</li>
</ul>
<p>მონაცემებს არ ვყიდით და სარეკლამო მიზნით მესამე პირებს არ ვუზიარებთ. აპებში რეკლამა არ არის.</p>

<h2>5. რამდენ ხანს ვინახავთ</h2>
<p>ანგარიშის მონაცემები ინახება ანგარიშის წაშლამდე. შეკვეთების და გადახდების ჩანაწერები საბუღალტრო მიზნებისთვის ინახება ანონიმურად ანგარიშის წაშლის შემდეგაც. SMS ლოგები იშლება 90 დღეში, ერთჯერადი კოდები — 10 წუთში.</p>

<h2>6. თქვენი უფლებები</h2>
<p>შეგიძლიათ ნებისმიერ დროს ნახოთ და შეცვალოთ სახელი და მისამართები აპში, გამორთოთ შეტყობინებები მოწყობილობის პარამეტრებში, მოითხოვოთ მონაცემების ასლი ან <a href="delete-account.html">წაშალოთ ანგარიში</a>. მოთხოვნები: <a href="mailto:${MAIL}">${MAIL}</a>. ვპასუხობთ 30 დღეში. მონაცემები მუშავდება საქართველოს „პერსონალურ მონაცემთა დაცვის შესახებ“ კანონის შესაბამისად.</p>

<h2>7. ბავშვები</h2>
<p>სერვისი განკუთვნილია 18 წელს მიღწეული პირებისთვის. ბავშვების მონაცემებს შეგნებულად არ ვაგროვებთ.</p>

<h2>8. ცვლილებები</h2>
<p>პოლიტიკის განახლებისას შეცვლილ ვერსიას ამ გვერდზე გამოვაქვეყნებთ და მნიშვნელოვანი ცვლილების შემთხვევაში აპშიც შეგატყობინებთ.</p>`));

fs.writeFileSync('terms.html', page('წესები და პირობები — Chqaro', 'Chqaro-ს მომსახურების წესები და პირობები.', `
<h1>წესები და პირობები</h1><p class="sub">ძალაშია 2026 წლის 1 ნოემბრიდან</p>
<h2>1. ზოგადი დებულებები</h2>
<p>ჩქარო არის მიწოდებისა და ტაქსის შეკვეთის პლატფორმა ქუთაისსა და ბაღდათში. აპლიკაციის გამოყენებით თქვენ ეთანხმებით წინამდებარე პირობებს და <a href="privacy.html">კონფიდენციალურობის პოლიტიკას</a>. სერვისით სარგებლობა შეუძლია 18 წელს მიღწეულ პირს.</p>
<h2>2. შეკვეთა და გადახდა</h2>
<p>შეკვეთის ღირებულება მოიცავს პროდუქტის ფასს, მიწოდების საფასურს და მომსახურების საკომისიოს, რომლებიც შეკვეთის დადასტურებამდე ჩანს. გადახდა შესაძლებელია ნაღდი ფულით ან ბარათით (Flitt). ბარათით გადახდის შემთხვევაში შეკვეთა მომზადებაში გადადის გადახდის დადასტურების შემდეგ.</p>
<h2>3. გაუქმება და დაბრუნება</h2>
<p>შეკვეთის გაუქმება შესაძლებელია ობიექტის მიერ მომზადების დაწყებამდე. ტაქსის გამოძახების გაუქმებაზე მძღოლის ჩამოსვლის შემდეგ შეიძლება დაწესდეს საკომისიო. ობიექტის ან პლატფორმის მიზეზით გაუქმებული გადახდილი შეკვეთის თანხა უბრუნდება იმავე ბარათს 3–10 საბანკო დღეში.</p>
<h2>4. კურიერები და მძღოლები</h2>
<p>კურიერი და მძღოლი პლატფორმაზე რეგისტრირდება განაცხადით, რომელსაც ადმინისტრაცია ამოწმებს. ისინი ვალდებულნი არიან შეკვეთა შეასრულონ უსაფრთხოდ და დროულად და მომხმარებლის მონაცემები გამოიყენონ მხოლოდ მიმდინარე შეკვეთისთვის.</p>
<h2>5. პასუხისმგებლობა</h2>
<p>პროდუქტის ხარისხზე პასუხისმგებელია ობიექტი (რესტორანი/მაღაზია). პლატფორმა უზრუნველყოფს შეკვეთის გადაცემას, მიწოდების ორგანიზებას და პრეტენზიების განხილვას. პრეტენზია მიიღება შეკვეთიდან 24 საათის განმავლობაში <a href="mailto:${MAIL}">${MAIL}</a>-ზე.</p>
<h2>6. ანგარიში</h2>
<p>ანგარიში იდენტიფიცირდება ტელეფონის ნომრით. წესების დარღვევის (ყალბი შეკვეთები, შეურაცხყოფა, თაღლითობა) შემთხვევაში ანგარიში შეიძლება დაიბლოკოს. ანგარიშის წაშლა შესაძლებელია აპიდან ან <a href="delete-account.html">ამ გვერდით</a>.</p>
<h2>7. ცვლილებები</h2>
<p>პირობების განახლებისას ახალ ვერსიას ამ გვერდზე გამოვაქვეყნებთ. სერვისით სარგებლობის გაგრძელება განახლებულ პირობებზე თანხმობად ითვლება.</p>`));

fs.writeFileSync('delete-account.html', page('ანგარიშის წაშლა — Chqaro', 'როგორ წაშალოთ Chqaro ანგარიში და რა მონაცემები იშლება.', `
<h1>ანგარიშის წაშლა</h1><p class="sub">Chqaro, Chqaro Courier, Chqaro Driver</p>
<p class="en">English: To delete your Chqaro account open the app → Profile → “Delete account” and confirm; the account is deleted immediately. If you no longer have the app, email <a href="mailto:${MAIL}?subject=Delete%20account">${MAIL}</a> with the phone number you registered with; we verify it by SMS code and delete the account within 7 days.</p>
<h2>აპიდან (მყისიერად)</h2>
<ol><li>გახსენით აპი და გადადით <b>პროფილზე</b>.</li><li>დააჭირეთ <b>„ანგარიშის წაშლა“</b>.</li><li>დაადასტურეთ. ანგარიში იშლება მაშინვე და აპიდან გახვალთ.</li></ol>
<h2>აპის გარეშე</h2>
<p>მოგვწერეთ <a href="mailto:${MAIL}?subject=Delete%20account">${MAIL}</a>-ზე და მიუთითეთ ტელეფონის ნომერი, რომლითაც დარეგისტრირდით. ნომრის კუთვნილებას SMS კოდით გადავამოწმებთ და ანგარიშს 7 დღეში წავშლით.</p>
<h2>რა იშლება</h2>
<ul><li>ტელეფონის ნომერი, სახელი და გვარი, შენახული მისამართები, push-ტოკენი, მანქანის მონაცემები (მძღოლებისთვის).</li><li>აქტიური სესიები — ყველა მოწყობილობაზე გახვალთ.</li></ul>
<h2>რა რჩება</h2>
<ul><li>შესრულებული შეკვეთების, მგზავრობების და გადახდების ჩანაწერები <b>ანონიმური სახით</b> (პირადი მონაცემების გარეშე) — საბუღალტრო და საგადასახადო ვალდებულებების გამო.</li><li>SMS ლოგები, რომლებიც თავისთავად იშლება 90 დღეში.</li></ul>
<p>წაშლის შემდეგ იმავე ნომრით ხელახლა რეგისტრაცია ახალ, ცარიელ ანგარიშს ქმნის.</p>`));

fs.writeFileSync('vercel.json', '{ "cleanUrls": true, "trailingSlash": false }\n');
fs.writeFileSync('README.md', `# chqaro-site

Static public pages for the Chqaro apps (Google Play listing requirements): privacy policy, terms and
account-deletion instructions. Plain HTML, no build step; deployed on Vercel (\`cleanUrls\` → \`/privacy\`).

Contact address on every page: \`${MAIL}\` — change the constant in the generator script and regenerate, or edit all four files.
`);
console.log('generated');
