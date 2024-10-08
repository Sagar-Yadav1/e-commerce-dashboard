import React from "react";
import styles from "./style.module.css";
import image from "../../assets/images/logo.png";
import MessageIcon from "../../icons/message";
import NotifictonIcon from "../../icons/notificton";
import SearchIcon from "../../icons/search";
import { Link } from "react-router-dom";
import HomeIcon from "../../icons/home";
import OrderIcon from "../../icons/order";
import ProductIcon from "../../icons/product";
import CategoriesIcon from "../../icons/categorie";
import CostomerIcon from "../../icons/costomer";
import ReportIcon from "../../icons/report";
import CouponsIcon from "../../icons/coupons";
import GlobalSettingIcon from "../../icons/globlSetting";
import PersnalSettingIcon from "../../icons/personalSetting";
import ProUpdetaIcon from "../../icons/proUpdeta";
import KnowlegIcon from "../../icons/knowleg";
import MainDashboardHeading from "../mainDashboardHeding";
import image1 from "../../assets/images/doler.png";
import image2 from "../../assets/images/card1.png";
import image3 from "../../assets/images/chart1.png";
import image4 from "../../assets/images/chart 2.png";
import banner from "../../assets/images/banner1.png";
import image5 from "../../assets/images/chart 3.png";
import image6 from "../../assets/images/chart4.png";
import image7 from "../../assets/images/graph1.png";
import img1 from "../../assets/images/table1.png";
import img2 from "../../assets/images/table2.png";
import img3 from "../../assets/images/table3.png";
import img4 from "../../assets/images/table4.png";
const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.d_wrapper}>
          <div className={styles.dw_header}>
            <div className={styles.dwh_navbar}>
              <div className={styles.dwhn_logo}>
                <img src={image} />
              </div>
              <div className={styles.dwhn_search}>
                <label for="search">
                  <SearchIcon />
                </label>
                <input type="search" id="search" placeholder="Search..." />
              </div>
              <div className={styles.dwhn_user}>
                <div className={styles.du_message}>
                  <MessageIcon />
                </div>
                <div className={styles.du_notifiction}>
                  <NotifictonIcon />
                </div>
                <div className={styles.du_userName}>
                  <span className={styles.dun_latter}>S</span>
                  <span className={styles.dun_name}>Sagar Yadav</span>
                  <span className={styles.dun_icon}></span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dw_maindeshboard}>
            <div className={styles.dwm_siderBar}>
              <div className={styles.dwms_wrapper}>
                <div className={styles.dwmsw_tab}>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <HomeIcon />
                      </span>
                      <span>Dashboard</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <OrderIcon />
                      </span>
                      <span>Orders</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <ProductIcon />
                      </span>
                      <span>Products</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <CategoriesIcon />
                      </span>
                      <span>Categories</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <CostomerIcon />
                      </span>
                      <span>Customers</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <ReportIcon />
                      </span>
                      <span>Reports</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <CouponsIcon />
                      </span>
                      <span>Coupons</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <MessageIcon />
                      </span>
                      <span>Inbox</span>
                    </Link>
                  </div>
                </div>
                <div className={styles.dwmsw_otherInfo}>
                  <h6>Other Information</h6>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <KnowlegIcon />
                      </span>
                      <span>Knowledge Base</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <ProUpdetaIcon />
                      </span>
                      <span>Product Updates</span>
                    </Link>
                  </div>
                </div>
                <div className={styles.dwmsw_settings}>
                  <h6>Settings</h6>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <PersnalSettingIcon />
                      </span>
                      <span>Personal Settings</span>
                    </Link>
                  </div>
                  <div className={styles.dsw_homeDashboard}>
                    <Link>
                      <span>
                        <GlobalSettingIcon />
                      </span>
                      <span>Global Settings</span>
                    </Link>
                  </div>
                </div>
                <div className={styles.s_banner}>
                  <img src={banner} />
                </div>
              </div>
            </div>
            <div className={styles.dwm_mainbody}>
              <div className={styles.dwmm_wrapper}>
                <MainDashboardHeading />
                <div className={styles.dw_growgrafhas}>
                  <div className={styles.dwg_inner}>
                    <div className={styles.dwgi_smallgrafh}>
                      <div className={styles.ds_totalreven}>
                        <div className={styles.dsr_doler}>
                          <h5>$10.540</h5>
                          <p>Total Revenue</p>
                          <span>22.45%</span>
                        </div>
                        <div className={styles.dsr_image}>
                          <img src={image1} />
                        </div>
                      </div>
                      <div className={styles.ds_orders}>
                        <div className={styles.dsr_doler}>
                          <h5>1,056</h5>
                          <p>Orders</p>
                          <span>15.34%</span>
                        </div>
                        <div className={styles.dsr_image}>
                          <img src={image2} />
                        </div>
                      </div>
                      <div className={styles.ds_unique_visit}>
                        <div className={styles.dsr_doler}>
                          <p>Unique Visits</p>
                          <h5>5.420</h5>
                          <span>10.24%</span>
                        </div>
                        <div className={styles.dsr_image}>
                          <img src={image3} />
                        </div>
                      </div>
                      <div className={styles.ds_newUsers}>
                        <div className={styles.dsr_doler}>
                          <p>New Users</p>
                          <h5>1.650</h5>
                          <span>15.34%</span>
                        </div>
                        <div className={styles.dsr_image}>
                          <img src={image4} />
                        </div>
                      </div>
                      <div className={styles.ds_existingUsers}>
                        <div className={styles.dsr_doler}>
                          <p> Existing Users</p>
                          <h5>9.653</h5>
                          <span>22.45%</span>
                        </div>
                        <div className={styles.dsr_image}>
                          <img src={image5} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.dwgi_bigGrafh}>
                      <div className={styles.dwgib_bigOrder1}>
                        <div className={styles.db_order_over_time}>
                          <h5>Orders Over Time</h5>
                          <select>
                            <option>Last 12 Hours</option>
                            <option>Last 12 Hours</option>
                            <option>Last 12 Hours</option>
                            <option>Last 12 Hours</option>
                          </select>
                        </div>
                        <div className={styles.db_order_month}>
                          <div className={styles.dom_month1}>
                            <h6>645</h6>
                            <p>Orders on May 22</p>
                          </div>
                          <div className={styles.dom_month2}>
                            <h6>472</h6>
                            <p>Orders on May 21</p>
                          </div>
                          <div className={styles.dom_month3}>
                            <p>
                              <span></span>May 21
                            </p>
                            <p>
                              <span></span>May 21
                            </p>
                          </div>
                        </div>
                        <div className={styles.db_chartImage}>
                          <img src={image6} />
                        </div>
                      </div>
                      <div className={styles.dwgib_bigOrder2}>
                        <div className={styles.dwb_inner}>
                          <h4>Last 7 Days Sales</h4>
                          <p className={styles.dwbi_sold}>
                            <h5>1,259</h5>
                            <span>Items Sold</span>
                          </p>
                          <p className={styles.dwbi_revenue}>
                            <h5>$12,546</h5>
                            <span>Revenue</span>
                          </p>
                          <div className={styles.dwbi_chartImg}>
                            <img src={image7} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.dwgi_Recent_Transactions}>
                      <div className={styles.drt_recent}>
                        <h5>Recent Transactions</h5>
                        <table>
                          <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>Jagarnath S.</td>
                            <td>24.05.2023</td>
                            <td>$124.97</td>
                            <td className={styles.jagarnathtr}>Paid</td>
                          </tr>
                          <tr>
                            <td>Anand G.</td>
                            <td>24.05.2023</td>
                            <td>$124.97</td>
                            <td className={styles.anandtr}>Pending</td>
                          </tr>
                          <tr>
                            <td>Kartik S.</td>
                            <td>24.05.2023</td>
                            <td>$124.97</td>
                            <td className={styles.jagarnathtr}>Paid</td>
                          </tr>
                          <tr>
                            <td> Rakesh S.</td>
                            <td>24.05.2023</td>
                            <td>$124.97</td>
                            <td className={styles.anandtr}>Pending</td>
                          </tr>
                          <tr>
                            <td>Anup S.</td>
                            <td>24.05.2023</td>
                            <td>$124.97</td>
                            <td className={styles.jagarnathtr}>Paid</td>
                          </tr>
                        </table>
                      </div>
                      <div className={styles.drt_productSold}>
                        <div className={styles.drt_recent}>
                          <h5>Top Products by Units Sold</h5>
                          <table className={styles.drtr_table}>
                            <tr>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Units Sold</th>
                            </tr>
                            <tr>
                              <td className={styles.t_row_img}>
                                <span>
                                  <img src={img1} />
                                </span>
                                Men Grey Hoodie
                              </td>
                              <td>$49.90</td>
                              <td>204</td>
                            </tr>
                            <tr>
                              <td className={styles.t_row_img}>
                                <span>
                                  <img src={img2} />
                                </span>
                                Men Grey Hoodie
                              </td>
                              <td>$49.90</td>
                              <td>204</td>
                            </tr>
                            <tr>
                              <td className={styles.t_row_img}>
                                <span>
                                  <img src={img3} />
                                </span>
                                Men Grey Hoodie
                              </td>
                              <td>$49.90</td>
                              <td>204</td>
                            </tr>
                            <tr>
                              <td className={styles.t_row_img}>
                                <span>
                                  <img src={img4} />
                                </span>
                                Men Grey Hoodie
                              </td>
                              <td>$49.90</td>
                              <td>204</td>
                            </tr>
                            <tr>
                              <td className={styles.t_row_img}>
                                <span>
                                  <img src={img1} />
                                </span>
                                Men Grey Hoodie
                              </td>
                              <td>$49.90</td>
                              <td>204</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
