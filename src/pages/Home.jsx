import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="header container">
        <img width={1500} src="reklama_img.webp" alt="" />
        <nav className="navbar">
          <a href="/">
            <img src="./site-logo.png" alt="" width={120} height={50} />
          </a>
          <ul>
            <li>
              <NavLink to={"/ozbekiston"}>O'zbekiston</NavLink>
            </li>
            <li>
              <NavLink to={"/jahon"}>Jahon</NavLink>
            </li>
            <li>
              <NavLink to={"/iqtisodiyot"}>Iqtisodiyot</NavLink>
            </li>
            <li>
              <NavLink to={"/jamiyat"}>Jamiyat</NavLink>
            </li>
            <li>
              <NavLink to={"/sport"}>Sport</NavLink>
            </li>
            <li>
              <NavLink to={"/fantexnika"}>Fan-texnika</NavLink>
            </li>
            <li>
              <NavLink to={"/nuqtayinazar"}>Nuqtayi nazar</NavLink>
            </li>
            <li>
              <NavLink to={"/audio"}>Audio</NavLink>
            </li>
          </ul>
          <div className="button_end">
            <button className="button_end_item btn_one btn btn-outline">
              <i class="fa-solid fa-globe"></i>
              O'zbekcha
            </button>
            <button className="button_end_item btn btn-outline">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="button_end_item btn btn-outline">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
        <ul className="list">
          <li className="list_item">Tramp Oq uyga qaytdi</li>
          <li className="list_item">G'azoda tinchlik sulhi</li>
          <li className="list_item">Koreyada siyosiy mojaro</li>
          <li className="list_item">Rossiya-Ukraina urushi</li>
        </ul>
        <div className="discription"></div>
      </header>
      <main className="main container">
        <section>
          <div className="left_right_wrapper">
            <div className="left">
              <img width={770} src="./tashkent_1979_01_960.jpg" alt="" />
              <div className="uzbekistan_img_Wrapper">
                <div className="item">
                  <img
                    width={138}
                    src="https://www.uzairways.com/sites/default/files/2023-06/%D1%81%D0%B0%D0%B9%D1%82%D1%82%D1%82.jpg"
                    alt=""
                  />
                  <h2 className="item_heading">
                    Uzbekistan Airways uchuvchilar jamoasiga ishga qabul
                    qilishni dav...
                  </h2>
                </div>
                <div className="item">
                  <img
                    width={198}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucjXTAN9_h3jGKNVnorDUcds-nySSh54ryQ&s"
                    alt=""
                  />
                  <h2 className="item_heading">
                    Toshkent viloyatidagi koloniyada jazo o‘tayotgan yana bir
                  </h2>
                </div>
                <div className="item">
                  <img
                    width={148}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sR69yvlZguur7SLOIkpjZSXyo6bXSifLEQ&s"
                    alt=""
                  />
                  <h2 className="item_heading">
                    O‘zbekiston Abu-Dabida biryo‘la NATO standartidagi uchta
                    harbiy
                  </h2>
                </div>
                <div className="item">
                  <img
                    width={108}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZ-K2UBCK8IFkQskKYeQBwzbumDoQnSvvnQ&s"
                    alt=""
                  />
                  <h2 className="item_heading">
                    O‘zbekistonning ayrim hududlarida 19-fevral kuni yomg‘ir
                    yog‘adi
                  </h2>
                </div>
                <div className="item">
                  <img
                    width={110}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqRLQi-xGm30fXG3bSc0uQIRodfCHgjk0xA&s"
                    alt=""
                  />
                  <h2 className="item_heading">
                    AQSHdagi noqonuniy o‘zbekistonlik migrantlar Kosta
                  </h2>
                </div>
              </div>
              {/*  */}
              <div className="daryo_news">
                <h2 className="daryo_heading"> Daryo +</h2>
                <div className="daryo_discription"></div>
                <div className="two_card_wrapper">
                  <div className="left_">
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={92}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdKptMTuxQjUdQ4_SDTVz7zQj3METrneFLw&s"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          “Kiraga ishonib, kafansiz qolish hech gapmas”:
                          O‘zbekistonda kreditga mashina olib, tirikchilik
                          qilayotganlar
                          <br />
                          MAHALLIY(O‘zb) | 14 fevral, 21:56
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsUz9Ihb9LP5CECxgaOrENz5-jy5zgyboAg&s"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Xitoy qarz qopqoni: u qanday qilib mamlakatlarning
                          hudud va infratuzilmasini egallab oladi? <br />
                          Dunyo | 14 fevral, 16:12
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVLu_6Xelv4qpUXbGGiF0z_olMOjyOBTK9Q&s"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          “Oyoqlar ostida yer yona boshladi”. Rossiya “Vagner”
                          kuchlarini Amerika o‘ljasiga aylantirgan Xashamdagi
                          jang
                          <br />
                          Dunyo | 13 fevral, 18:59
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={102}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XUKsEAw8-191EATGWRlirbvBebuxEPUa5Q&s"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Boshiga uch marta o‘q uzilgan vazir o‘rinbosari, 16
                          marta pichoqlangan viloyat rahbari, o‘zini osib
                          qo‘ygan
                          <br />
                          MAHALLIY(O‘zb) | 14 fevral, 21:56
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="right_">
                    <img
                      width={367}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGalrY_ZPrrbGt4eMj0q7kvUIAIrFQsg_lw&s"
                      alt=""
                    />
                    <h2 className="right__heading">
                      “Ozarbayjon endi kichik uka emas” — sovuqlashgan ozar-rus
                      munosabatlari qanday oqibatga olib keladi?
                    </h2>
                    <p className="right__p_kecha">Kecha, 16:56</p>
                    <p className="right_yilning_p">
                      2024-yilning 25-dekabr kuni Rossiya havo mudofaa kuchlari
                      tomonidan urib tushirilgani taxmin qilinay..
                    </p>
                  </div>
                </div>
                <button className="songi_habarlar_btn">
                  Daryo + – ENG SO‘NGGI XABARLAR
                </button>
              </div>
              <div className="daryo_news">
                <h2 className="daryo_heading"> Dunyo</h2>
                <div className="daryo_discription"></div>
                <div className="two_card_wrapper">
                  <div className="right_ ">
                    <img
                      width={367}
                      src="https://s11.stc.all.kpcdn.net/expert/wp-content/uploads/2022/11/d-c-tr-nh-nev65zxjulg-unsplash-960x540.jpg"
                      alt=""
                    />
                    <h2 className="right__heading">
                      Janubiy Koreya DeepSeek foydalanuvchi ma’lumotlarini
                      Xitoyga sizdirganini tasdiqladi
                    </h2>
                    <p className="right__p_kecha">Kecha, 23:50</p>
                    <p className="right_yilning_p">
                      Avvalroq Seul “ma’lumotlarni yig‘ish usullari” bilan
                      bog‘liq xavotirla...
                    </p>
                  </div>
                  <div className="left_">
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={110}
                          src="https://daryo.uz/static/2023/Gaza14.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Isroil armiyasi Livan janubidagi beshta hududda
                          qolishini ma’lum qildi Dunyo |
                          <br />
                          <span className="tavsiya_span">Kecha, 23:30</span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://grantlar.uz/wp-content/uploads/2019/12/%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          “Biz sizni topib, deportatsiya qilamiz”: AQSH
                          reklamalar yordamida <br />
                          <span className="tavsiya_span">
                            {" "}
                            Dunyo | 14 fevral, 16:12
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://www.gazeta.uz/media/img/2022/02/YRnXBo16454963010062_b.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          “Oyoqlar ostida yer yona boshladi”. Rossiya “Vagner”
                          kuchlarini Amerika
                          <br />
                          <span className="tavsiya_span">
                            {" "}
                            Dunyo | 13 fevral, 18:59
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={102}
                          src="https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d38313233303733"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Boshiga uch marta o‘q uzilgan vazir o‘rinbosari, 16
                          marta pichoqlangan viloyat rahbari, o‘zini osib
                          qo‘ygan
                          <br />
                          <span className="tavsiya_span">
                            {" "}
                            14 fevral, 21:56
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="songi_habarlar_btn">
                  Daryo + – ENG SO‘NGGI XABARLAR
                </button>
              </div>
              <div className="daryo_news">
                <h2 className="daryo_heading"> O'zbekiston</h2>
                <div className="daryo_discription"></div>
                <div className="two_card_wrapper">
                  <div className="left_">
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={92}
                          src="https://daryo.uz/static/2025/02/67b4ca3589cd2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Grand 420 ming dollar: sirdaryolik o‘quvchi Chikago
                          universitetiga 100 foizlik grant asosida qabul qilindi
                          <br />
                          <span className="tavsiya_span">
                            MAHALLIY(O‘zb) | 14 fevral, 21:56
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://daryo.uz/static/2025/02/67b4c264ca562.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Rikardo Martines Vaskes Ispaniyaning O‘zbekistondagi
                          elchisi etib tayinlandi <br />
                          <span className="tavsiya_span">
                            Dunyo | 14 fevral, 16:12
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://daryo.uz/static/2025/02/67b4c7387e158.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Koloniyada vafot etgan mahkumlar, Amir Temur
                          ko‘chasidan o‘chirilgan chiziqlar, Samarqandda ikki
                          piyodani urib
                          <br />
                          <span className="tavsiya_span">
                            Dunyo | 13 fevral, 18:59
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={102}
                          src="https://daryo.uz/static/2025/02/67b4aea6d2a58.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          Qoraqalpog‘istonning uchta hududida 845 mln so‘mlik
                          gazdan noqonuniy foydalanildi
                          <br />
                          <span className="tavsiya_span">
                            {" "}
                            MAHALLIY(O‘zb) | 14 fevral, 21:56
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="right_">
                    <img
                      width={367}
                      src="https://daryo.uz/static/2025/02/67b4cf60b8308.jpg"
                      alt=""
                    />
                    <h2 className="right__heading">
                      Farg‘onada o‘qituvchi dars vaqtida o‘quvchisini kaltakladi
                      (video)
                    </h2>
                    <p className="right__p_kecha">Bugun, 00:10</p>
                    <p className="right_yilning_p">
                      Dastlab u bolaga muntazam darslarga kirmay yurgani, ko‘p
                      sho‘xlik qilgani va o‘qit...
                    </p>
                  </div>
                </div>
                <button className="songi_habarlar_btn">
                  Daryo + – ENG SO‘NGGI XABARLAR
                </button>
              </div>
              <div className="daryo_news">
                <h2 className="daryo_heading"> Pul</h2>
                <div className="daryo_discription"></div>
                <div className="two_card_wrapper">
                  <div className="left_">
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={92}
                          src="https://daryo.uz/static/2025/02/67b486339180e.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          O‘zbekistonda xususiy sektordagi qancha ayolga
                          homiladorlik va tug‘ish nafaqasi berilgani ma’lum
                          bo‘ldi
                          <br />
                          <span className="tavsiya_span">
                            MAHALLIY(O‘zb) | 14 fevral, 21:56
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://daryo.uz/static/2025/02/67b482996e06a.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          O‘zbekistonda yoshga doir pensiya tayinlashda
                          o‘zgartirishlar kiritilmoqda <br />
                          <span className="tavsiya_span">
                            Dunyo | 14 fevral, 16:12
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={100}
                          src="https://daryo.uz/static/2025/02/67b46a7defafc.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          O‘zbekistonda dollar kursi yana tushdi
                          <br />
                          <span className="tavsiya_span">
                            Dunyo | 13 fevral, 18:59
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="left_card_wrapper">
                      <div className="img_">
                        <img
                          width={102}
                          src="https://daryo.uz/static/2025/02/67b2b00fb0cac.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text_">
                        <h2 className="text_heading">
                          O‘zbekistonda mart va avgustdan ish haqi, pensiya
                          hamda nafaqalar oshirilishi rad etildi
                          <br />
                          <span className="tavsiya_span">
                            {" "}
                            MAHALLIY(O‘zb) | 14 fevral, 21:56
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="right_">
                    <img
                      width={367}
                      src="https://daryo.uz/static/2025/02/67b3191986065.jpg"
                      alt=""
                    />
                    <h2 className="right__heading">
                      O‘zbekistonda dollar kursi pastladi
                    </h2>
                    <p className="right__p_kecha">Bugun, 00:10</p>
                    <p className="right_yilning_p">
                      Dastlab u bolaga muntazam darslarga kirmay yurgani, ko‘p
                      sho‘xlik qilgani va o‘qit...
                    </p>
                  </div>
                </div>
                <button className="songi_habarlar_btn">
                  Daryo + – ENG SO‘NGGI XABARLAR
                </button>
              </div>
            </div>

            <div className="right">
              <img width={336} src="./x450.webp" alt="" />
              <h2 className="right_reklama_heading">
                Поможем раскрыть талант вашего ребёнка в IT!
              </h2>
              <h2 className="right_tavsiya_etamiz">Tavsiya etamiz</h2>
              <div className="right_discription"></div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <img
                    width={110}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wMddKGzHetJx6J4gsEJeslEiXsD9SYE64Q&s"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading">
                    O‘zbekiston Abu-Dabida biryo‘la NATO standartidagi uchta
                    harbiy texnikasini namoyish qildi. Ular <br /> Bugun, 13:08
                  </h2>
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <img
                    width={110}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueNNOHAfiFjW3vRfC8tXGQku8TwDaNfk2Vw&s"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading">
                    Milliardlar sarflangan sayt va platformalar nega
                    ishlamayapti?
                    <br /> Kecha, 19:47
                  </h2>
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <img
                    width={110}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0obefcWCEm_1UDmVDKqi1lRwaMyuubrtZw&s"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading">
                    AQSHdagi o‘zbek sportchisi: og‘ir atletika bo‘yicha jahon
                    chempioni Farhodbek Sobirov hikoyasi
                    <br /> 14 fevral, 19:45
                  </h2>
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <img
                    width={110}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskWbk3SjHaZN213RvacWM-jnj1zl3FO7Vkw&s"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading">
                    Sunʼiy intellekt hayotimizni qanday o‘zgartiradi?
                    <br /> 13 fevral, 13:04
                  </h2>
                </div>
              </div>
              <img
                className="img"
                width={336}
                src="https://i.ytimg.com/vi/bfkS_9EmNCI/maxresdefault.jpg"
                alt=""
              />
              <h2 className="right_reklama_heading">
                Поможем раскрыть талант вашего ребёнка в IT!
              </h2>
              <h2 className="right_tavsiya_etamiz">SPORT</h2>
              <div className="right_discription"></div>
              <img
                width={336}
                src="https://daryo.uz/static/2025/02/thumb-67b5415db7ac5.jpg"
                alt=""
              />
              <h2 className="gvardiola_h">
                “Gvardiolaga qarshi o‘ynashdan charchadim” — Anchelotti <br />{" "}
                <span className="gvr_span">Bugun, 07:27</span>
              </h2>
              <div className="tavsiyaetamiz_div">
                <div>
                  <h2 className="tavsiyaetamiz_heading">
                    YCHL. “Milan” va “Atalanta” turnirni yakunladi, “Bavariya”
                    amalladi (video) <br />
                    <span className="tavsiya_span"> Bugun, 13:08</span>
                  </h2>
                </div>
                <div>
                  <img
                    width={110}
                    src="https://daryo.uz/static/2025/02/thumb-67b53ce0a9e27.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <h2 className="tavsiyaetamiz_heading">
                    Elit Chempionlar Ligasi. “Paxtakor” nimchorak finalda
                    “Al-Hilol” bilan o‘ynaydigan bo‘ldi <br />
                    <span className="tavsiya_span"> Kecha, 13:48</span>
                  </h2>
                </div>
                <div>
                  <img
                    width={110}
                    src="https://daryo.uz/static/2025/02/thumb-67b4cfc62657a.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <h2 className="tavsiyaetamiz_heading">
                    O‘lim jazosiga hukm qilingan SSSR futbol yulduzi. U qanday
                    qilib sportchidan haqiqiy jallodga aylangan?
                    <br />
                    <span className="tavsiya_span"> Kecha, 21:04</span>
                  </h2>
                </div>
                <div>
                  <img
                    width={110}
                    src="https://daryo.uz/static/2025/02/thumb-67aee7394d84e.jpg"
                    alt=""
                  />
                </div>
              </div>
              <img
                className="img-r"
                width={336}
                src="https://avatars.mds.yandex.net/get-direct/5720520/6EWEaM21Y0rB9Lfd7tQjiQ/x450"
                alt=""
              />
              <h2 className="right_reklama_heading">
                Поможем раскрыть талант вашего ребёнка в IT!
              </h2>
              <h2 className="right_tavsiya_etamiz">KO'P O'QILGANLAR</h2>
              <div className="right_discription"></div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <div className="oval">1</div>
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading sss">
                    O‘zbekistonda yoshga doir pensiya tayinlashda
                    o‘zgartirishlar kiritilmoqda
                    <br /> <span className="tavsiya_span">Bugun, 13:08</span>
                  </h2>
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <div className="oval">2</div>
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading sss">
                    Instagram: “Xalqlar do‘stligi”da konsert beradigan Yulduz
                    Turdiyeva, nevarali bo‘ladigan Valijon Shamshiyev, maktabda
                    yomon o‘qigan va “zo‘ravon” bo‘lgan Munisa Rizayeva
                    <br /> <span className="tavsiya_span">Bugun, 13:08</span>
                  </h2>
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <div className="oval">3</div>
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading sss">
                    Chevrolet Spark’ning ixcham krossover ko‘rinishdagi yangi
                    versiyasi taqdim etildi (foto)
                    <br /> <span className="tavsiya_span">Bugun, 13:08</span>
                  </h2>
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <div className="oval">4</div>
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading sss">
                    “Real” klubi La Ligani tark etishi mumkin
                    <br /> <span className="tavsiya_span">Bugun, 13:08</span>
                  </h2>
                </div>
              </div>
              <div className="tavsiyaetamiz_div">
                <div>
                  <div className="oval">5</div>
                </div>
                <div>
                  <h2 className="tavsiyaetamiz_heading sss">
                    O‘zbekistonning ayrim hududlarida 19-fevral kuni yomg‘ir
                    yog‘adi
                    <br /> <span className="tavsiya_span">Bugun, 13:08</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <div>
          <img
            className="logo"
            src="https://daryo.uz/logo/logo-white.svg"
            alt=""
          />
          <p className="parar">
            “Daryo” internet-nashrining (O‘zbekiston matbuot va axborot
            agentligi (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti
            Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar
            agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma
            bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli
            materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga,
            shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan
            foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan va/yoki
            “Daryo” internet-nashrining muallifligini ko‘rsatuvchi yozuv ilova
            qilingan taqdirda yo‘l qo‘yiladi. Chop etiladigan ba’zi ma’lumotlar
            18 yoshga to‘lmagan foydalanuvchilarga mo‘ljallanmagan bo‘lishi
            mumkin. Info@daryo.uz
          </p>
          <div className="social_w">
            <img
              className="sicial_item"
              src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/telegram-512.png"
              alt=""
            />
            <img
              className="sicial_item"
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png"
              alt=""
            />
            <img
              className="sicial_item"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png"
              alt=""
            />
            <img
              className="sicial_item"
              src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
              alt=""
            />
            <img
              className="sicial_item"
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
              alt=""
            />
            <img
              className="sicial_item"
              src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3-2/24/_w-512.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </>
  );
}
