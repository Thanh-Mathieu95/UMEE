'use client';
import styles from './Menu.module.css';

const PHIN_ITEMS = [
  {
    name: 'Phin Đen / Black Phin',
    desc: 'Single-origin Đà Lạt Robusta, slow-dripped. Bold, intense, with cacao notes.',
    price: '$6.50',
    badge: 'Signature',
  },
  {
    name: 'Phin Sữa Đá / Condensed Milk Phin',
    desc: 'Flagship Robusta slow-dripped over sweet condensed milk, served with ice.',
    price: '$7.00',
    badge: 'Classic',
  },
  {
    name: 'Bạc Xỉu / White Coffee',
    desc: 'A gentle drop of Robusta paired with plenty of sweet fresh milk and crushed ice.',
    price: '$7.50',
  },
  {
    name: 'Cà Phê Trứng / Egg Coffee',
    desc: 'Rich Robusta base capped with a sweet, warm, whipped egg cream custard.',
    price: '$8.50',
    badge: 'Must Try',
  },
];

const ESPRESSO_ITEMS = [
  {
    name: 'Espresso Double Shot',
    desc: 'A robust double-shot extraction of our custom highland Robusta roast.',
    price: '$5.00',
  },
  {
    name: 'Flat White',
    desc: 'Double shot Robusta with velvety micro-foam, served in a ceramic cup.',
    price: '$6.00',
  },
  {
    name: 'Caffè Latte',
    desc: 'Steamed milk poured over a rich double Robusta shot, topped with foam.',
    price: '$6.00',
  },
  {
    name: 'Slow Letter Cold Brew',
    desc: '16-hour slow steeped cold extraction. Crisp, notes of orange peel and cacao.',
    price: '$7.00',
  },
];

const TEA_PASTRY_ITEMS = [
  {
    name: 'Trà Sen Vàng / Golden Lotus Tea',
    desc: 'Oolong tea topped with salted milk foam, lotus seeds, and crunchy chestnuts.',
    price: '$8.00',
    badge: 'Popular',
  },
  {
    name: 'Trà Đào Cam Sả / Peach Orange Lemongrass',
    desc: 'Black tea blend, fresh orange slices, sweet peach, and lemongrass.',
    price: '$8.00',
  },
  {
    name: 'Croissant Bơ Tỏi / Garlic Croissant',
    desc: 'Flaky French pastry baked fresh daily, brushed with sweet honey-garlic butter.',
    price: '$6.50',
  },
  {
    name: 'Bánh Mì Kẹp Pate / Mini Baguette',
    desc: 'Crispy mini baguette filled with homemade liver pate, sweet butter, and pickles.',
    price: '$8.50',
  },
];

export default function Menu() {
  return (
    <section id="menu" className={styles.section}>
      {/* Decorative background patterns and glows */}
      <div className={styles.bgGlowRed}></div>
      <div className={styles.bgGlowGold}></div>
      <div className={styles.bgGlowGreen}></div>
      <div className={styles.vectorCircle}></div>
      <div className={styles.vectorLines}></div>
      <div className={styles.decorLeft}></div>
      <div className={styles.decorRight}></div>

      <div className={styles.container}>
        
        {/* Decorative Leather-bound Book Wrapper */}
        <div className={styles.menuBook}>
          
          {/* Central binding shadow seam */}
          <div className={styles.bookSpine}></div>
          
          {/* LEFT PAGE */}
          <div className={`${styles.bookPage} ${styles.leftPage}`}>
            <div className={styles.pageBorder}>
              
              {/* Header Branding */}
              <div className={styles.pageHeader}>
                <span className={styles.estLabel}>EST. 2024</span>
                <h2 className={styles.brandTitle}>UMEE CAFE</h2>
                <p className={styles.brandSub}>THE ART OF SLOW DRIP</p>
                <div className={styles.decorativeLine}></div>
              </div>

              {/* Category 1: Traditional Phin */}
              <div className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.sectionNum}>01 //</span> TRADITIONAL PHIN
                </h3>
                
                <div className={styles.itemsList}>
                  {PHIN_ITEMS.map((item, idx) => (
                    <div key={idx} className={styles.menuItem}>
                      <div className={styles.itemHeader}>
                        <div className={styles.nameBlock}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          {item.badge && <span className={styles.badge}>{item.badge}</span>}
                        </div>
                        <span className={styles.lineSpacer}></span>
                        <span className={styles.price}>{item.price}</span>
                      </div>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: Modern Espresso */}
              <div className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.sectionNum}>02 //</span> MODERN ESPRESSO
                </h3>
                
                <div className={styles.itemsList}>
                  {ESPRESSO_ITEMS.map((item, idx) => (
                    <div key={idx} className={styles.menuItem}>
                      <div className={styles.itemHeader}>
                        <div className={styles.nameBlock}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          {item.badge && <span className={styles.badge}>{item.badge}</span>}
                        </div>
                        <span className={styles.lineSpacer}></span>
                        <span className={styles.price}>{item.price}</span>
                      </div>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          {/* RIGHT PAGE */}
          <div className={`${styles.bookPage} ${styles.rightPage}`}>
            <div className={styles.pageBorder}>
              
              {/* Category 3: Teas & Pastries */}
              <div className={styles.menuSection} style={{ marginTop: '20px' }}>
                <h3 className={styles.sectionTitle}>
                  <span className={styles.sectionNum}>03 //</span> TRÀ & BÁNH / TEAS & PASTRIES
                </h3>
                
                <div className={styles.itemsList}>
                  {TEA_PASTRY_ITEMS.map((item, idx) => (
                    <div key={idx} className={styles.menuItem}>
                      <div className={styles.itemHeader}>
                        <div className={styles.nameBlock}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          {item.badge && <span className={styles.badge}>{item.badge}</span>}
                        </div>
                        <span className={styles.lineSpacer}></span>
                        <span className={styles.price}>{item.price}</span>
                      </div>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poetic highlight card: The Phin Ritual */}
              <div className={styles.ritualCard}>
                <h4 className={styles.ritualTitle}>THE PHIN RITUAL</h4>
                <p className={styles.ritualText}>
                  At Umee, we believe patience is the finest ingredient. The traditional Vietnamese Phin filter takes exactly six minutes to complete its slow-drip extraction. 
                </p>
                <p className={styles.ritualText}>
                  It is a daily ritual of patience—a brief moment to slow down, watch the drops fall, and find yourself in the stillness.
                </p>
                <div className={styles.signature}>
                  <span>Warmly, UMEE</span>
                </div>
              </div>

              {/* Footer Stamp */}
              <div className={styles.pageFooter}>
                <div className={styles.decorativeLine}></div>
                <p className={styles.footnote}>SYDNEY • MELBOURNE • HỒ CHÍ MINH</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
