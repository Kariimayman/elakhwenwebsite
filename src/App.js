import pic1 from './first.jpeg';
import pic2 from './Second.jpeg';
import pic3 from './Third.jpeg';
import pic4 from './fourth.jpeg';
import pic5 from './Fifth.jpeg';
import pic6 from './sixth.jpeg';
import pic7 from './seventh.jpeg';


import './App.css';
import Product from './Product';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <header className="App-header">
        <Product image={pic1} name={"رولات البيوت المحمية"} description={"رولات بلاستيك الاخوين صنعت من مواد عالية الجودة وبتركيبة خاصة تجمع بين القوة والمتانة تسهم في الحفاظ على المحصول وتنتج بمقاسات متعددة منها    70 * 5.5 متر و200 ميكرون "} price={"price 1"}/>
        <Product image={pic2} name={"رولات المالش الاسود"} description={"وتستخدم رولات المالش الاسود في القضاء على الحشائش عن طريق تقليل الضوء النافذ الى التربة حيث تزيد من امتصاص التربة للطاقة والاشعة تحت الحمراء وزيادة حراره التربة في الجو البارد وهذا يساعد في تسريع نمو المحصول وزيادة حجم انتاجه "} price={"price 2"}/>
        <Product image={pic3} name={"رولات الانفاق الزراعية"} description={"تستخدم لحماية النباتات القصيرة من البرد الذي يتلف النباتات ويقض على المحصول , وتساعد على جني الثمار مبكرا "} price={"price 3"}/>
        <Product image={pic4} name={"رولات التغليف الصناعية (شرنك فيلم)"} description={"ويستخدم هذا النوع من الرولات في تغليف البلاط والمنتجات الاسمنتية وايضا في تعبئة المواد الغذائية وتغليف عبوات العصائر  والالبان "} price={"price 4"}/>
        <Product image={pic5} name={"اكياس التسوق والدعاية والاعلان"} description={"وهذا النوع يستخدم في تعبئة المنتجات في مختلف المحلات التجارية مثل المعارض ومهرجانات التسوق ويتم طباعتها بي مختلف الالوان والاشكال "} price={"price 4"}/>
        <Product image={pic6} name={"اكياس تعبئة اللحوم والدواجن"} description={"تستخدم في تعبئة وتغليف اللحوم والدواجن الطازجة والمجمدة وتكون مطبوعة طباعة تلبي متطلبات العميل  ويتم تصنيعها من مواد خام تتناسب مع استخدام المواد الغذائية ومعتمدة من جهات الاختصاص "} price={"price 4"}/>
        <Product image={pic7} name={"المنتجات الاستهلاكية"} description={"اكياس النفاية الطبية مطبوعة بشعار البيئة خاصة النفايات الخطرة"} price={"price 4"}/>
      </header>
    </div>
  );
}

export default App;
