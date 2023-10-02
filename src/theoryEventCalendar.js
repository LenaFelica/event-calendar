//* Как обычно реакт и typescript
//* npx create-react-app . template typescript


//* там подчищаем ненужные файлы

//* далее библиотеки для работы:

//* $ npm i axios react-router-dom @types/react-router-dom moment

//* axios - для асинхронных запросов к серверу
//* react-router-dom - для постраничной навигации по приложению
//* @types/ - типы для путей

//* moment - библиотека для работы с датами!!
//* по адресу - https://momentjs.com/

//* Ant.design - одна из самых богатых библиотек компонентов для react
//* представляет готовые компоненты по типу модальных окон, инпутов, форм, таблиц
//* адрес - https://ant.design/

//* Также будем иссользовать Redux - установим все для него
//* сам редакс
//* Redux-thunk - чтобы делать асинхронные экшины
//* react-redux - для связки реакта и редакса!!!
//* antd - ant design - готовые компоненты с модалками, формами, инпутами
//* @types/react-redux - типы для реакт-редакс
//* @types/redux-thunk - типы для редакс-фанк

//* npm i redux redux-thunk ract-redux antd @types/react-redux @types/redux-thunk

//* мотрим на макет 
//* есть модалка, есть календарь и внизу кнопка - добавить событие
//* при нажатии на кнопку должно всплывать модаьное окно!

//* Запускаем приложение npm stat
//* делаем обертку над нашим приложением Арр в index.tsx

//! Навигация
//! Соответственно, чтобы была НАВИГАЦИЯ  подключим Redax и BrowserRouter!!!!!!!!

//! Provider - компонент, который связывает react c redux !!!
//* Оборачиваем все сначала в компоннт Provider , чтобы связать React c Redux !!!!
//* Provider импортируется из пакета React-Redux !!
//* Store создадим позже и проинем его в провайдер, а пока что оставим пустым!!
//* <Provider store={}>
//*       <BrowserRouter> - //* постраничная навигация!!!!
//*             <App
//*       </BrowserRouter>
//* </Provider>


//* В приложении будет 2 старицы
//* Страница с логином и с календарем!!!
//* поэтому создаем папку pages и в ней 2 компонента Login.tsx и Event.tsx

//* пример Login:
// import React, { FC } from 'react'
//? const Login: FC = () => { //* сразу указываем, что ттип компонента функциональный!!!
//   return (
//     <div>Login</div>
//   )
// }
// export default Login;

//* Со страницами закончили, теперь создадим файловую структуру
//* папка Components - в ней будут все компонент нашего приложения
//* папку store - вней мы будем работать с redux
//* папку modals - в ней мы будем описывать типы тех сущностей, с которыми мы будем работать



//! Настроим Redux
//* в папке store
//* сделаем всю необходимую конфигурацию!!
//* в store создаем index.ts
//* отсюда сразу экспортируем константу
//* и с помощью функции createStore мы эту константу инициализируем!!!


//* Первым паравметром константа принимает редьюсер
//* Надо его выше создать:
//* const rootReducer = combineReducers({}) //-создали редьюсер, сюда с помощью комбаинРедьюсер передаем объект, в котором в посследвии будут наши редьюеры
//* export const store = createStore(rootReducer, applyMiddleware) //* этот редьюсер(rootReducer, applyMiddleware) мы передаем в createStore и разу подключим Middleware()

//* Middleware в Redux подключается с помощью ф-и applyMiddleware
//* И у нас он будет один  - redux-thunk
//* мы его импортируем и передаем в applyMiddlewre(thunk)


//? import { applyMiddleware, combineReducers, createStore } from "redux"
//? import thunk from "redux-thunk";

//? const rootRducer = combineReducers({
//? })
//? export const store = createStore(rootRducer, applyMiddleware(thunk))


//* использования мидлваров является поддержка асинхронных экшенов

//* Mидлвар (middleware) - это предлагаемый способ расширения Redux с помощью настраиваемых функций. Mидлвар позволяет вам обернуть метод стора dispatch для пользы и дела. Ключевой особенностью мидлвара является то, что они компонуемы. Несколько мидлваров можно объединить вместе, где каждый мидлвар не должен знать, что происходит до или после него в цепочке.

//* redux-thunk позволяет генераторам экшенов инвертировать управление вызывая функции. Они будут получать dispatch как аргумент и могут вызывать его асинхронно. Такие функции называются преобразователями (thunks). Другим примером мидлвара является redux-promise. Он позволяет вам вызывать асинхронный экшен c Promise и вызывать обычные экшены, когда промис вернет resolve.


//* И так как мы работаем с typeScript, необходимо наш Store типизировать
//* знать с какими типами мы будем работать, когда будем получать какие-то данные или их изменять

//* поэтому первое - мы получаем тип нашего состояния State!!!
//* а само состояние мы достаем с помощью функции getStateвот такой вот конструкцией
//* этот тип будет знать о редьюсерах, с которыми мы работаем
//* и о тех данных , с которыми этот редьюсер работает
//? export type RootState = ReturnType<typeof store.getState>

//* также сразу получаем тип нашего диспатча:
//? export type AppDispatch = typeof store.dispatch;

//! index.ts

//? import { applyMiddleware, combineReducers, createStore } from "redux"
//? import thunk from "redux-thunk";

//? const rootRducer = combineReducers({

//? })

//? export const store = createStore(rootRducer, applyMiddleware(thunk))

//? export type RootState = ReturnType<typeof store.getState>
//? export type AppDispatch = typeof store.dispatch;

//* Документация
//* https://redux.js.org/usage/usage-with-typescript


//* Далее в папке store создадим папку reduces
//* И там будут все редьюсеры нашего приложения

//! Пострани чная навигация: 
//* в src создаем папку routes
//* в ней создаем index.ts файл
//* ЗДЕСЬ мы будем описывать все маршруты, все страницы. окторые будут в приложении

//* создаем массив routes
//* этот массив нобходимо типизировать - создать interface IRoute
//* можно взять готовый тип из библиотеки react-router-dom

//* но мы реализуем свой с минимальным набором полей:

//* Это ТИП :
// export interface IRoute {
//    path: string;
//    component: React.ComponentType; //* сам компонент
//    exact?: boolean;                //* булеан флаг exact, который позволяет отнозначно идентифицировать маршрут!
// }

//* теперь для этого массива указывем, что он будет состоять
//* из объектов, которые имеют тип IRoute
//* здесь будет два маршрута - страница с логином и с календарем!
//? export const routes: IRoute [] = [
//?   {}
//?]

//* НО дело в том, что на страницу с календарем могут попасть только авторизованные пользователи
//* поэтому создаем два массива с маршрутами publicRoutes и privatRoutes:
//* в зависимости о того авторизован пользователь или нет будем отображать тот или иной маршрут

// export const publicRoutes: IRoute [] = [
//    {}
// ]
// export const privateRoutes: IRoute [] = [
//    {}
// ]

//* 
// import React from "react";
// import Event from "../pages/Event";
// import Login from "../pages/Login";

// export interface IRoute {
//    path: string;
//    component: React.ComponentType;
//    exact?: boolean;
// }

// export const publicRoutes: IRoute[] = [
//    {path: '/login', component: Login, exact: true}
// ]

// export const privatRoutes: IRoute[] = [
//    {path: '/', component: Event, exact: true}
// ]

//* Так как приложение будет разрастаться - оздать здесь же некий словарь
//* где будут храниться все маршруты к тому или иному компоненту
//* создаем перечисление routeNames:
//? export enum RouteNames {}
//* и внутри него указываем маршруты по такой схеме
//* LOGIN = '/login'
//* EVENT = '/'

//* и теперь это перечислние можно использовать это перечисление RouteNames
// export const publicRoutes: IRoute[] = [
//    {path: RouteNames.LOGIN, component: Login, exact: true}
// ]

// export const privatRoutes: IRoute[] = [
//    {path: RouteNames.EVENT, component: Event, exact: true}
// ]

//* 
// import React from "react";
// import Event from "../pages/Event";
// import Login from "../pages/Login";

// export interface IRoute {
//    path: string;
//    element: React.ComponentType;
//    exact?: boolean;
// }

// export enum RouteNames {
//    LOGIN = '/login',
//    EVENT = '/'
// }
// //* и теперь это перечислние можно использовать это перечисление RouteNames
// export const publicRoutes: IRoute[] = [
//    {path: RouteNames.LOGIN, element: Login, exact: true}
// ]

// export const privateRoutes: IRoute[] = [
//    {path: RouteNames.EVENT, element: Event, exact: true}
// ]

//* и в дальнейшем, если мы захотим что-то поменять, при использовании словаря у нас будет меняться все во всем приложении!!

//! AppRouter.tsx
//* На данный момент мы описали маршруты, но не сделали их физически доступными
//* создаем в компонентс AppRouter.tsx
//* именно здесь мы будем описывать всю логику по маршрутизацции

//* в корень поместим компонент Routes , который импортируем из react-routr-dom
//* также понадобится Route и Redirect

//* Routes позволяет выбрать оди из маршрутов
//* ели ни оин не был найден , то мы можем сделлать Navigate!!!

//* Будем группировать логические куски по флагу auth - авторизован пользователь или нет
//* будем отображать два разных роутса - для пользователя оди маршруты будут доступны
//* а другие нет

//* пробигаемся по ммассиву privateRoutes с поощью map 
//* и надо преобразоваь объекты, которые у нас там находятся, в компонент Route 

//! AppRouter
//* когда  map !!! , то всегда  key !!!!!
// const AppRouter = () => {
//    const auth:boolean = true
//    return (
//        auth
//            ?
//            <Routes>
//                {privateRoutes.map((route) => (
//                      <Route path={route.path}
//                             element={<route.element />}
//!                             key={route.path} />))} - указываем путь до компонента - он всегда уникальный !!
//*                      <Route path="*"
//*                             element={<Navigate to='/' replace/>}/> //! раньшне эо был Редирект!!! сейчас Navigate
//            </Routes>
//            :
//            <Routes>
//                {publicRoutes.map((route) => (
//                      <Route path={route.path}
//                             element={<route.element />}
//!                            key={route.path} />))}
//*                     <Route path="*"
//*                           element={<Navigate to='/login' replace/>}/>
//            </Routes>
//    );
// };


//* Затем AppRouter вставляем в наше приложение App.tsx !!!!


//! «Shift + Alt + F»
//! Для форматирования кода в VS Code можно использовать комбинацию клавиш 

//*---------------------------------------------------

//! ****   Layout   ****
//* Layout - это макет в переводе  - позволяет выровнять, обработать страницу по заданным шаблонам
//* делаем Layout нашего приложения
//* Именно шапку, какую-то контентую часть!
//
//* в обзоре компонентов Components Overview в AntDesign есть вкладка Layout
//* Заходим в Лэйаут и смотрим примеры
//* по структуре все приложение обернуто в Layout
//* в нем есть вложенные лэйауты, еть контент - это все семантика

//* создаем Navbar.tsx компонент - это как раз будет header
//* можно сделать вот так:
// import { Header } from 'antd/es/layout/layout';
// import React, { FC } from 'react'

// const Navbar: FC = () => {
//   return (
//     <Header>

//     </Header>
//   )
// }

// export default Navbar;

//* а можно сделать вот так:
//* !!! импортировать Layout и у него уже взять компонент Header
//*
//* <Row></Row> - внутрь хэдера добавляем компонент Row - 
//* это по сути flex-контейнер с направлением в строку
//* <Row justify="end"></Row> - указываем в нем пропс 
//* justify="end" - чтобы все кнопки располагались в правом краю навбара!!!


//* Добавляем Navbr в компонент App.tsx над AppRouter
//* и обернем все приложение в Layout!!!

//* А сам AppRouter обернем в Layout.Content, так как там будет конентная часть прилоения

//! App.tsx:
// import { Layout } from 'antd';
// import React, { FC } from 'react'
// import AppRouter from './components/AppRouter';
// import Navbar from './components/Navbar';

// const App:FC = () => {
//   return (
//     <Layout>
//       <Navbar />
//       <Layout.Content>
//            <AppRouter />
//       </Layout.Content>
//     </Layout>
//   )
// }

// export default App;

///* Также можно добавить <Layout.Footer> но в нашем случае футера не будет


//* Чтобы импортировались стили Layout, нужно импортировать css файл
//* заходим в Ant design -> development -> import stylesheets manually:
//* https://ant.design/docs/react/introduce


//* Navbar.tsx
//* чтобы кнопка не была активной добавим в пропсы selectable={false}
//? import { Layout, Row } from 'antd';
//? import React, { FC } from 'react'

//? const Navbar: FC = () => {
//?   return (
//?     <Layout.Header>
//?          <Row justify="end">
//?             <Menu theme="dark" mode="horizontal" selectable={false}>
//?                     <Menu.Item key={1}>Логин</Menu.Item>
//?              </Menu>
//?          </Row>
//?     </Layout.Header>
//?   )
//? }

//? export default Navbar;


//* теперь сделаем так, чтоы при нажатии на кнопку нас перекидывало на страницу логина
//* напримр, появится какая-то информация еще о пиложнии

//* Устарело!!!
//* воспользуемся хуком useHistory() из react-router-dom - 
//* const router = useHistory()
//* с помощью него получаем некоторый объет роутера
//* console.log(router)
//* получаем объект, у которого есть ряд функций, информация о пути
//* нас интересует ф-я push - с помощью которой можно перемещаться по маршрутам
//* вещае функцию onClick на item.menu и вызываем фнкцию push у роутера!!
//* туда пердаем как раз маршрут, КОТОторый мы получаем из нашего перечисления - маршрут логина
//! useHistory() и push
//* Вместо этого:  !!!!!
//! import { useNavigate } from 'react-router-dom';
//! const navigate = useNavigate();
//! navigate('/home')

//! Nota Bene!!!
//* Замените useHistory на useNavigate , затем

//* const navigate = useNavigate();
//* а затем заменить history.push('/path')наnavigate('/path')
//* Изменить history.replace('/path')с помощьюnavigate('/path', { replace: true })
//* Хотите использовать stateв push/navigate donavigate('/path', { state: { name:'Xyz' }})

//* Тепеь опять же, в завиимости от того авторизоан ползователь или нет, необходимо отображать Navbar по-разному!!
//* либо показывать имя пользователя и кнопку Выйти
//* либо показывать кнопку Логин
//
//* const auth:boolean = true
//
//* Сооттвественно, опять же по условию будем по-разному рисовать шаблон
//
// {auth
//    ?
//
//    :
//}

//* сейчас Navbar
// import { useNavigate } from 'react-router-dom';
// import { Layout, Menu, Row } from "antd";
// import React, { FC } from "react";

// import { RouteNames } from "../routes";

// const Navbar: FC = () => {

// const router = useNavigate();
//! const auth: boolean = true; //* Lena Felica Выйти
//* если так, то:
//! const auth: boolean = false; //* Логин

//   return (
//     <Layout.Header>
//       <Row justify="end">
//           {auth
//               ?
//               <Menu theme="dark" mode="horizontal" selectable={false}>
//               <div style={{color: 'white'}}>Lena Felica</div> 
//               <Menu.Item 
//                      onClick={() => console.log('Выйти')} 
//                      key={1}>
//                      Выйти
//               </Menu.Item>
//           </Menu>              
//               :
//               <Menu theme="dark" mode="horizontal" selectable={false}>
//                   <Menu.Item 
//                      onClick={() => router(RouteNames.LOGIN)} 
//                      key={1}>
//                      Логин
//                   </Menu.Item>
//               </Menu>
//           }
//       </Row>
//     </Layout.Header>
//   );
// };

// export default Navbar;


//* сейчас <Menu вопринимает этот блок див как выпадающий список
//* поэтому его надо поместить выше - сразу под условием - ?
//* и также необходимо добаить корневой элемент - реакт фрагмент <></>

//! Теперь в Navbar так:
// import { useNavigate } from 'react-router-dom';
// import { Layout, Menu, Row } from "antd";
// import React, { FC } from "react";

// import { RouteNames } from "../routes";

// const Navbar: FC = () => {

// const router = useNavigate();
// const auth: boolean = false;

//   return (

//     <Layout.Header>
//       <Row justify="end">

//           {auth
//               ?
//!               <>  
//!               <div style={{color: 'white'}}>Lena Felica</div> 

//               <Menu theme="dark" mode="horizontal" selectable={false}>
//               <Menu.Item 
//                      onClick={() => console.log('Выйти')} 
//                      key={1}>
//                      Выйти
//               </Menu.Item>
//               </Menu>     
//!               </>
//               :
//               <Menu theme="dark" mode="horizontal" selectable={false}>
//                   <Menu.Item 
//                      onClick={() => router(RouteNames.LOGIN)} 
//                      key={1}>
//                      Логин
//                   </Menu.Item>
//               </Menu>
//           }
//       </Row>
//     </Layout.Header>

//   );
// };

// export default Navbar;

//* 

//!  selectable={false} - неактивноссть кнопки в блоки Menu.item

// *********************************************************

//! создадим Редьюсер -> потом объет, который будет хранить дефолтное значение состояни этого редьюсера 
//* который будет отвечать за авторизацию и за логику по работе с пользователем!
//* На данны момент флаг auth захардкожен у нас в Navbre и в Router 

//* в store создаем папку reducers -> auth -> index.ts файл
//* в нем по дефолту экспортируем функцию, которая прини мает state, action - authReducer()
//* 
//* Также сразу создаем объект initialState, который будет хранить дефолтное значение состояния этого редьюсера!
//* там будет пока одно auth: false

//* в authReducer создадим конструкцию switch case, которая в заиимости от типа экшена будет возвраать разное сотояние
//* сразу делаем дефолтный кейс, который просто возвращает неизмененное состояние

//* ТЕПЕРЬ++ чтобы этот редьюсер жил, надо его добавить в Корневой Рутовый Редюсер
//* в store/index.ts

//!  indexReducers.ts файл
//* НО!! чтобы не нагромождать этот файл, так как редюсеров может быть много
//* внутри папки reducers создадим еще одни indexReducers.ts файл
//* и все редьюсеры будем импортировать сюда, а потом одной пачкой отсюда экспортировать!!!

//* по итогу их может быть скольугодно много:
// import auth from './auth';

// export default {
//    auth,
//    event,
//    document,
//    et setra
// }

//* мы их соираем и добавляем в рутовый редьюсер (стор)
//* в котором мы можем их все импортировать 
//? import reducers from './reducers'
//* поскольку мы импортируем по дефолту
//* и при создании корневого редьюсера в функцию combineReducers (reducers):

//! Корневой store/index.ts :
// import { applyMiddleware, combineReducers, createStore } from "redux"
// import thunk from "redux-thunk";
//! import reducers from "./reducers";

//! const rootRducer = combineReducers(reducers)

// export const store = createStore(rootRducer, applyMiddleware(thunk))

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

//! autheducers
//* теперь на необходимо его типизировать
//* типизировать stte и все возможные экшены, с которыми предстаит работать!!

//* внутри auth создаем //! types.ts !!
//* в нем мы эксортируем интерфйс, который будет определять поля, которые будут в нашем состоянии!!!

//* Action, которым мы будем изменять значение этого поля на true и на false соответственно!!
//* в не будем описывать поля экшена
//* во-первых, это тип type:... - обязательное поле для экшена
//* во-вторых, payload:... - некоторые данные, которые будет этот экшн принимать!

// interface SetAuthAction {
//    type:  ;
//    payload: boolean;
// }

//* Чтобы не хардкодить строой тип экшена
//* создадим перечисление enum над interface SetAuthAction:
// export enum AuthActionsEnam {
//    SET_AUTH = 'SET_AUTH'
// }
//

//* и в качестве типа указываем его так:
// interface SetAuthAction {
//    type: AuthActionEnum.SET_AUTH;
//    payload: boolean;
// }

//! types.ts:

// export interface AuthState {
//    auth: boolean;
// }

// export enum AuthActionsEnam {
//    SET_AUTH = 'SET_AUTH'
// }

// //* Action, которым мы будем изменять значение этого поля на true и на false соответственно!!

// interface SetAuthAction {
//    type: AuthActionsEnam.SET_AUTH ;
//    payload: boolean;
// }


//* и соответствено, сколько бы экшенов у на не было, 
//* надо будет указывать некоторый уникальный тип и payload, который будет ожидать этот экшн!!!
//например:
//
// interface SetUser {
//    type: AuthActionsEnam.SET_USER ;
//    payload: boolean;
// }

// interface SetLoading {
//    type: AuthActionsEnam.SET_LOADING ;
//    payload: boolean;
// }

//* также в types.ts нужно сделать обобщающий тип, который все интерфейсы будет в себя принимать!
//
//* делаетс это таким образом
//* и если у нас их нескольо, то мы прото перечислим их через палочку разделитель

//? export type AuthAction = 
//? SetAuthAction | SetUserAction .....

//! types.ts :


// export interface AuthState {
//    auth: boolean;
// }

// export enum AuthActionsEnam {
//    SET_AUTH = 'SET_AUTH'
// }

// //* Action, которым мы будем изменять значение этого поля на true и на false соответственно!!

// interface SetAuthAction {
//    type: AuthActionsEnam.SET_AUTH ;
//    payload: boolean;
// }

// //* Обобщающий тип

// export type AuthAction = 
//       SetAuthAction 

//*********************************** */

//* Итак, на данный момнт все типы коготовы
//* экшн ипизировали, стэйт типизировали!

//* возвращаемя к редьюсеру!!

//* указываем AuthState
//! const initialState: AuthState = {
//    auth:  false
// }

//* указываем тот обобщающий тип, который сделали для экшена
//! export default function authReducer(state = initialState, action: AuthAction) {
//    switch (action.type) {

//* Также редьюсер должен всегда возвраать состояние
//* а так как authReducer - это функция
//* указываем AuthState - едьюсер всегда должен возвращать состояние этого типа
//! export default function authReducer(state = initialState, action: AuthAction): AuthState {
//    switch (action.type) {


//* внутри свитч мы можем создать кейс вот с таким типом
//* как раз типо получается из перечисления

//* и отсюда возвращаем состояние!! - разворачиваем страое состояние
//* но уже с измененным полем auth новыми данными, которые получаем из экшена!!

// export default function authReducer(state = initialState, action: AuthAction): AuthState {
//    switch (action.type) {
//!       case AuthActionsEnam.SET_AUTH:
//!            return {...state, auth: action.payload}


//* Идем в АппРоутер и там бираем строку:  const auth:boolean = false;
//* заменяем ее useSelector() - с помощью этого хука из нужное поле auth из состояния выцеить
//* но по умолчанию это хук не знает, с каким типом мы работаем, какие редьюссеры и какое состояние в них находится
//* ПОЭТОМУ, мы можем создать собственный хук, который будет работать с нашеми типами!!!

//* меняем везде auth на isAuth - для лучшей семантики лучше называть так (isLoading, isError и так дале)

//* создаем в сорсе папку хукс и там будем хранить все хуки
//* в ней будут все пользовательские хуки которые мы в хое разраотки ббудем создавать!!

//* Начнем  типизированного селектора!!
//! useTypedSelector.ts
//* в нем мы экспортируем одноименную константу 
//* и зададим ей тип - этот тип предоставляет редакс - импортируем его 
//* и в него пердаем <RootState> - в качестве джененрика указываем тот тип, который отвечает за состоние нашего приложения
//* и приравниваем его к useSelector !!

// import { useSelector } from "react-redux";
// import { TypedUseSelectorHook } from "react-redux";
// import { RootState } from "../store";

// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector


//* берем этот хук useTypedSelector и воспользуемся им в AppRouter.tsx
//* const AppRouter = () => {

   // // const auth:boolean = false;
   // const { isAuth } = useTypedSelector(state => state.auth)

   // return (
   //    isAuth

   //* теперь подобный флаг isAuth у нас во всем приложении
   //* мы можем его использовать и в АппРоутер, и в навбаре!!!

   //* копируем строку
   // const { isAuth } = useTypedSelector(state => state.auth)
//* и переносим ее в Навбар - меняем там на isAuth

//!**************************************

//* Перехоим к логике приложения

//! Login

//* в корень поещаем Layout, так как это будет страница!
//* внутрь добавляем строк - <Row jusify="center" align="middle"></Row>
//* выравниваем по центру и по вертикали
//* делаем чтобы блок был растянут на всю высоту эрана - className="h100"
//*  jusify="center" align="middle" className="h100"></Row>

//* Затем идем в Арр.css и пишем стили
//* высоту посчитаем с помощью функции calc
//* из вей высоты браузера будет отнимать высоту Навбара
//* высоту навбара мотрим в инсекторе - в консоле - она равна 64 пикселя
//*
// .h100 {
//    height: calc(100vh - 64px);
// }
//* смотрим - все по центр - здесь будет форма Логина
//* форма простая - логин, пароль, кнопка войти

//* создаем под эту форму отдельный компонент - 
//! LoginForm.tsx
//* сразу указывам, что это функционаьный компонт
//* оневой блок заменим на form
//* идем в ant design в документацию
//* ищем form !!


// import { Button, Form, Input } from 'antd';
// import React, { FC } from 'react';

// const LoginForm: FC = () => {
//   return (
//     <form>
//       <Form.Item
//          label="Username"
//          name="username"
//          rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]}
//     >
//          <Input />
//       </Form.Item>

//       <Form.Item
//          label="Password"
//          name="password"
//          rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
//     >
//          <Input />
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//             Submit
//         </Button>
//       </Form.Item>

//     </form>
//   )
// }

// export default LoginForm


//* Сейчас передаем вот тако объект rules(правила)
//* и мы должны помнить, что у него должно быть поле required, message
//* хотелось бы вызвать функцию, чтобы там все было!!
//* и не париться, какие поля там должны быть, на максимальную. на минимальную длину!!
//* проверку дат и так далее

//* создадим src -> utils -> rules.ts


// export const rules = {
//    required: (message: string) => ({
//       required: true, 
//       message
//    })
// }

//* Теперь, когда мы вызовем эту функцию, она нам врнет объект 
//* и этот обект по итогу вернет исходный массив - массив правил (rules)
//* здесь в массиве в LoginForm мы обращаемс к объекту rules вызываем функцию required
//* при таком подходе нам не важно знать, какие есть поля
//* ДОСТАТОЧНО вызваь соответствующую функцию!! required из rules.ts
//* и она вернет необходимый для нас объект
//* при этом мы передаем только сообщние, которое дошлжно появляться рядом с инпуттом, ЕСЛИ ПРАВИЛО НЕ СРАБОТАЛО
//! LoginForm.tsx
// import { Button, Form, Input } from 'antd';
// import React, { FC } from 'react';
// import { rules } from '../utils/rules';

// const LoginForm: FC = () => {
//   return (
//     <form>
//       <Form.Item
//          label="Username"
//          name="username"
//!          rules={[ rules.required('Пожалуйста, введите имя пользователя!')]}
//     >
//          <Input />
//       </Form.Item>

//       <Form.Item
//          label="Password"
//          name="password"
//!          rules={[ rules.required('Пожалуйста, введите пароль') ]}
//     >
//          <Input />
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//             Submit
//         </Button>
//       </Form.Item>

//     </form>
//   )
// }

// export default LoginForm


//*! Реализем Lgin
//* будем работать с моковыми данными, то есть, с реальным серваком работать не будем!
//* идем в папку public
//* там файл - users.json
//* и в нем у нас будет заготовленный массив объектов - пользователей - 
//* username и password
//* если пользователь введет одну из этих учеток, то он залогинится
//* имитация базы данных!!
// [
//    { "username": "user", "password": "123" },
//    { "username": "admin", "password": "123" },
//    { "username": "lena", "password": "123" }
//  ]


//! Submit формы

//* рекомендуется в ant.design ипользовать слушатель событий 
//* onFinish - когда успех
//* onFinishFailed - провал (правило не прошло и есть ошибки)

//* идем в компонент с формой и добавляем слушатель onFinish

//? const LoginForm: FC = () => {

//!    const submit = () => {
//?       console.log('submit')
//?    }

//?    return (
//?      <Form 
//!         onFinish={submit}
//?      >

//* Всю логику мы будем выносить в редаксовские экшены!!
//* store ->  reducers -> auth -> types.ts
//* там помимо флага isAuth будет хранить данные о пользоватли в интерфейсе
// export interface AuthState {
//    isAuth: boolean;
//    user: 
// }

//* и для пользователя (user) создадим отдельную модель, интерфейс IUser
//* опишем поля
//* model -> IUser.ts

//* в types.ts 
//* создаем поля:
// export interface AuthState {
//    isAuth: boolean;
//    user: IUser;
//    isLoading: boolean;
//    error: string;
// }

//* создаем типы экшенов в нашем перечисслении:
// export enum AuthActionsEnam {
//    SET_AUTH = 'SET_AUTH',
//    SET_ERROR = 'SET_ERROR',
//    SET_USER = 'SET_USER',
//    SET_IS_LOADING = 'SET_IS_LOADING',
// }

//* теперь здесь же создадим по отдельно взятому интерфейсу для каждого поля


//! types.ts: 

// import { IUser } from './../../../models/IUser';

// export interface AuthState {
//    isAuth: boolean;
//    user: IUser;
//    isLoading: boolean;
//    error: string;
// }

// export enum AuthActionsEnam {
//    SET_AUTH = 'SET_AUTH',
//    SET_ERROR = 'SET_ERROR',
//    SET_USER = 'SET_USER',
//    SET_IS_LOADING = 'SET_IS_LOADING',
// }

// //* Action, которым мы будем изменять значение этого поля на true и на false соответственно!!

// interface SetAuthAction {
//    type: AuthActionsEnam.SET_AUTH ;
//    payload: boolean;
// }

// interface SetErrorAction {
//    type: AuthActionsEnam.SET_ERROR ;
//    payload: string;
// }

// interface SetUserAction {
//    type: AuthActionsEnam.SET_USER ;
//    payload: IUser;
// }

// interface SetIsPayloadingAction {
//    type: AuthActionsEnam.SET_IS_LOADING ;
//    payload: boolean;
// }

// //* Обобщающий тип - сюда будем перечислять через |

// export type AuthAction = 
//       SetAuthAction | SetErrorAction | SetUserAction | SetIsPayloadingAction

//* Далее идем в редьюсер, там у нас неватает полей -обавляем их и сраз инициализируем
//* 

// import { IUser } from './../../../models/IUser';
// import { AuthAction, AuthActionsEnam, AuthState } from "./types";

//* добавили поля!!
// const initialState: AuthState = {
//    isAuth: false,
//    error: '',
//    isLoading: false,
//    user: {} as IUser,
// }

//* следующий этап - обработка вех экшенов!
// export default function authReducer(state = initialState, action: AuthAction): AuthState {
//    switch (action.type) {
//       case AuthActionsEnam.SET_AUTH:
//            return {...state, isAuth: action.payload, isLoading: false}
//       case AuthActionsEnam.SET_USER:
//          return {...state, user: action.payload}               

//       case AuthActionsEnam.SET_ERROR:
//          return {...state, error: action.payload, isLoading: false} //*когда ошибка - isLoading становится false - онуляем его

//       case AuthActionsEnam.SET_IS_LOADING:
//          return {...state, isLoading:  action.payload}
//       default:
//          return state;
//    }
// }

//! action-creators.ts
//* action-creators - это просто функция, которая принимает какой-то аргумент и возвращает объект!!

//* Итак. с экшенами  разобрались, теперь реализуем экшн креэйторы
//* внутри папки auth ссоздаем файл action-creators.ts
//* то есть, эти экшн креаторс конкретно в данном файле будут относиться к этому редьюсеру
//* 
//* здесь можно //! action-creators экспортироваь по отдельности
//* либо создать какой-либо объект и внутри него эти экшн креаторы
//* 
//* этот объект будет выступать в качестве обертки

//* action-creators - это просто функция, которая принимает какой-то аргумент и возвращает объект!!
//* у этого экшена есть какой-то ТИП и какой-то Payload
//* в нашем случае, для каждого экшена есть соответствующий интерфейс, который
//* который задает уже тип и пейлоад!!!
//* 
//* синхронные action creators закончили - которые как-то изменяют state:
// import { IUser } from "../../../models/IUser";
// import { SetUserAction, AuthActionsEnam, SetAuthAction, SetIsPayloadingAction, SetErrorAction } from "./types";


// export const AuthActionCreators = {
//    * ******     аргумент  *********  **************  объект   **************
//    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnam.SET_USER, payload: user}),
//    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnam.SET_AUTH, payload: auth}),
//    setIsLoading: (payload: boolean): SetIsPayloadingAction => ({type: AuthActionsEnam.SET_IS_LOADING, payload}),
//    setError: (payload: string): SetErrorAction => ({type: AuthActionsEnam.SET_ERROR, payload}),
//*   аинхронный экшн
//    login: ---- асинхронный
// }


//* Теперь реализуем асинхронные !!!! - будут отвечать за логику логина
//* аргументами соответственно этот экшн login будет принимать username и password
//* и то и то у нас строка - тип стринг
//* и поскольку мы будем использовать reduxThunk , 
//* нам нужно из этой функции вернуть НОВУЮ ф-ю, которая аргуменом принимает dispatch - AppDispatch
//* и сау логику мы будем описывать уже внутри этой возвращаемой функции

//* сразу создадим такую же функцию асинхронную для logout  - с помощью этой функции из приложения выходить
//* logout аргументами приниать ичего не будет

//* и в login и в loguot обернем все в try/catch - чтобы отлавливать возможные ошибки

//* login ***
//* в первую очредь надо показать индикатор загрузки, что идентификация проходит и запрос на сервер улетел
//* поэтому диспатчим action-creaor setIsLoading(true) - 
//* dispatch(AuthActionCreator.setIsLoading(true))
//* 
//* в catch диспатчим возможную ошибку при логине
//* dispatch(AuthActionCreator.setError('Произошла ошибка при логине'))


//* Далее в login в try, получим пользователей, которые находятся в файле users.json
//* const mockUsers = await axios.get('./users.json')
//* ниже выведем в консоле этот mockUsers

//* и попробуем в LoginForm.tsx этот экшнКреэйтор вызвать
//* в submit 
//* для этого нам понадобится диспатч
//* и чтобы этот диспатч получить, нужен хук useDispatch() от react-
//* и теперь в этот диспатч нам надо прокинуть асинхронный экшн креэйтор из action-creators.ts
//* 
//! const dispatch: any = useDispatch()
//* const submit = () => {
//!     dispatch(AuthActionCreators.login('', ''))
//* }

//* идем на страницу в форму  вводим данные любые -> submit
// {data: Array(3), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
// config
//..... и так далее
// в data как раз массив ттех заргистрированных пользователей - в users.json
//* теперь задача по ним пробежаться я и проверить, есть ли совпадния введенных логина и пароля

//* 
//* нужно из response выципить data и пробежаться о нему find
//* const response = await axios.get('./users.json');
//* const mockUsers = response.data.find()

//* но на данном этапе typeScript не понимает, что data - это массив пользователей
//* поэтому когда мы используем axios, мы в качестве дженерика указываем,
//!  что data - это массив типа <IUser[]>

//* const mockUsers = response.data.find(user => user.username === username && user.password === password )
//* нам понадобитс функция find  - мы обращаемся у юзера к юзернэйм и проверяем равен ли он тому юзернэйму, которого мы ввели  форму
//* И сразу проверяем и пароль


//* то есть мы саввнивае юзера из массива с теми данными, которые мы передали в функцию

//! localStorage
//* следующим этапом мы должны убедиться, что ф-я find нам то-то врнула!!
//* здесь же ниже мы проверяем if/else
//* если пользователь авторизовался(mockUser) - в mockUser что-то находится,
//*  то нам надо где-то информацию эту хранить - localStorage
//* если пользователь авторизовался, то нам надо где-то информацию хранить
//* в localStorage буду добавлять флаг 'auth' в значение true
//* и его юзернайм
//* помимо этого флаг auth необходимо добавлять в состояние - здсь это dispach
//* поэтому dispatch(AuthActionCreators.setIsAuth(true))
//* и в setUser передаем найденного из массива пользователя:
//* поэтому dispatch(AuthActionCreators.setUser(mockUser)) - 

//* if(mockUser) {
//*    localStorage.setItem('auth', 'true');
//*    localStorage.setItem('username', mockUser.username);
//*    dispatch(AuthActionCreators.setIsAuth(true))
//*    dispatch(AuthActionCreators.setUser(mockUSer))
//* }  else {
//*
//* }

//* login innner action-creators
// login: (username: string, password: string) => async (dispatch: AppDispatch) => {
//    try {
//      dispatch(AuthActionCreators.setIsLoading(true));
//      const response = await axios.get<IUser[]>('./users.json');
//      const mockUsers = response.data.find(user => user.username === username && user.password === password);
//* пользователь НАЙДЕН  !!!
//      if(mockUsers) {
//       localStorage.setItem('auth', 'true');
//       localStorage.setItem('username', mockUsers.username);
//       dispatch(AuthActionCreators.setIsAuth(true));
//       dispatch(AuthActionCreators.setUser(mockUsers))
//      } else {
//* пользователь НЕ НАЙДЕН !! - надо рокинуть ошибку     
//       dispatch(AuthActionCreators.setError('Неверный логин и пароль')) 
//      }
//       dispatch(AuthActionCreators.setIsLoading(false)) 
//    }
//    catch(e) {
//       dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
//    }
// },

//* И поле всех этих манипуляций после if/else необходимо убрать индикацию загрузки!!

//*! веть action-creators

// import { AppDispatch } from './../../index';
// import { IUser } from "../../../models/IUser";
// import { SetUserAction, AuthActionsEnum, SetAuthAction, SetIsPayloadingAction, SetErrorAction } from "./types";
// import axios from 'axios';


// export const AuthActionCreators = {
//    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
//    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
//    setIsLoading: (payload: boolean): SetIsPayloadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
//    setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),

//    //* async
//    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
//       try {
//         dispatch(AuthActionCreators.setIsLoading(true));
//         const response = await axios.get<IUser[]>('./users.json');
//         const mockUsers = response.data.find(user => user.username === username && user.password === password);
//         if(mockUsers) {
//          localStorage.setItem('auth', 'true');
//          localStorage.setItem('username', mockUsers.username);
//          dispatch(AuthActionCreators.setIsAuth(true));
//          dispatch(AuthActionCreators.setUser(mockUsers))
//         } else {
//          dispatch(AuthActionCreators.setError('Неверный логин или пароль'))
//         }
//         dispatch(AuthActionCreators.setIsLoading(false)) 
//       }
//       catch(e) {
//          dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
//       }
//    },
//    logout: () => async (dispatch: AppDispatch) => {
//        try {
//          // dispatch(AuthActionCreators.setIsAuth(false))

//        }
//        catch(e) {
//          console.log('error')
//        }
//    }
// }


//* появилось много лишнего кода в login
//* потому что у нас не реальное обращение к срверу, а некоторая имитация//

//* так же чтени пользователя изфайла бдет ратически мгновенным, и индикатор загрзки мы не увидим
//* поэтому используем setTimeout(async()) - и пусть о длитс 1-2 сек
//* и так как мы используем await внутри сеттаймаута, сделаем сам колбэк асинхронным

//* если пойти в LoginForm и там в submit dispatch добавить существующий в users.json user and password
//* и ввести на странице его, то нас перекидывает на страницу page event - все норм

//! LoginForm
//* Сразу же в LoginForm реализуем вывод ошибки в форме
//* и индикацию загрузки
//* используем 
//* const {error, isLoading} = useTypedSelector(state => state.auth) 
//* - достаем редьюсер auth
//* и нас интереуют поля error , isLoading
//* 
//* начнем с индикации загрузки
//* в ant design на button Войти можно прокинуть флаг loading={isLoading}
//* в зависимости от этого флага у нас будет появляться крутилка
//* и под формой касным будем выводить ошибку, конечно , если она имеется
//* поэтому блок div с ошибкой добавлям в условную конструкцию
//* {error && <div style={color: 'red'}>{error}</div>}

//* проверяем, когда в логин передается неправильный логин - идет крутилка и ошибка красным цвето

//* сейчас в метод login передается неправильный пароль 
// const submit = () => {
//    dispatch(AuthActionCreators.login('user', '1231'))
// }
//*и должна появиться ошибка. если ввети 123 и пароль 123

//! Login.tsx
//
//* также, чтобы форма логина выделялась на фоне макета, обернем ее в компонент Card 
//* <Card><LoginForm/></Card> - теперь она выглядит в белом квадрате

//* Далее , надо сдлать input ы управляемыми
//* Для этого создадим 2 состония
//* username и password
//* и функции, которое это состоянеи будут изменять - setUsername, setPassword

//* и с помощью хука useState() эти состояни инициализируются

//* теперь в функцию Login предаем состояния username И состояние с паролем
//* прямо ниже, под состояниями
// const submit = () => {
//!    dispatch(AuthActionCreators.login(username, password))
// }

//! правляемые инпуты!!
//* и дале, все чо нужно - это сделать инпуты управляемыми
//* как пропс value передаем туда состояние
//* также реализуем слушатель события onChange={e => setUsername()}
//* внури которого мы будем изменять состояние на то чо получаем из самомго инпута

{/* <Input 
value = {username} //* состояние
onChange={e => setUsername(e.target.value)} //* функция, которая это состояние изменяет
/> */}

//* для того, чтобы не видно было какие символы вводит юзер
//* надо сделать инпут для пароля типом password:
{/* <Input 
value = {password}
onChange={e => setPassword(e.target.value)}
type={"password"} //* чтобы скрыь символы
/> */}

//! logout
//* реализуем в action-creators
//* при нажатии кнопки Выйти, пользователь покидал главню страницу приложения
//* logout: () => async (dispatch: AppDispatch) => {
//*       localStorage.removeItem('auth'); //*- из локалстораджа удаляем флаг auth
//*       localStorage.removeItem('username'); //* - удалем юзернэйм пользователя, который мы туда сохранили
//* далее, необходимо обнулить состояние:  
//*       dispatch(AuthActionCreators.setUser({} as IUser));  - //* передаем пустой объект типа IUser
//*       dispatch(AuthActionCreators.setIsAuth(false));  - //* передаем в авторизацию false, чтобы нас редиректнуло на страницу с логином
//* }

//* Теперь функцию logout надо вызывать на соответствующую кнопку!!
//* Все что нужно в Навбаре задиспатчить ActionCreators.logout()
//* поэтому, можем прямо в инлайне то сделать:
//* идем в Navbar -> <Menu.Item onClick={() => dispatch(AuthActionCreators.logout())}>Выйти</Menu.Item>

//* кроме того, понадобитс dispatc => поэтому используем хук
//* const dispatch: any = useDispatch()

//* Navbar.tsx

// const Navbar: FC = () => {

//    const router = useNavigate();
   
// // const auth: boolean = false;
// const { isAuth } = useTypedSelector(state => state.auth)

//! const dispatch: any = useDispatch();

//   return (

//     <Layout.Header>
//       <Row justify="end">

// {isAuth
//    ?
//    <>
//    <div style={{color: 'white'}}>Lena Felica</div> 

//    <Menu theme="dark" mode="horizontal" selectable={false}>
//    <Menu.Item 
//!           onClick={() => dispatch(AuthActionCreators.logout())} 
//           key={1}>
//           Выйти
//    </Menu.Item>
//    </Menu>     
//    </>
//    :
//...

//* теперь логинимся, попадаем на Event PAGE, 
//*далее нажимаем Выйти и попадаем на страницу логина!!

//* Такж в навбаре захардкожино имя пользователя - Lena Felica
//* а мы его теперь смело можем получать из юзера, которого храним в состоянии
//* поле юзернэйм {user.username}

//* добавляем user в состоние:
//! const { isAuth, user } = useTypedSelector(state => state.auth)

// const dispatch: any = useDispatch();

//   return (

//     <Layout.Header>
//       <Row justify="end">

//           {isAuth
//               ?
//               <>
//               <div style={{color: 'white'}}>
//!                   {user.username}  // получаем
//               </div> 

//-----------------------------------
//! Кастомный хук! useActions.ts
//* также какждый раз приходится диспатчить actionCreators
//* это можно оптимизировать, создав свой катомный хук!!!

//* простой хук, с помощью которого к нашим action creators можно забиндить dispatch !!

//* идем в папку hooks -> useActions.ts
//* внутри с помощью useDispatch получаем этот диспатч, указав джинериком <AppDispatch>()
//* и по итогу из этого хука нам надо вернуть экшнКреэйторы, к которым прибиндин этот диспатч
//* для этого предназначена функция bindActionCreators() от redux!!
//* return bindActionCreators(actions, dispatch)
//* 1м аргументом эта функция ожидает actions, а 2м - dispatch

//* Экшены можно передавать в сам хук АРГУМЕНТОМ
//* Но можно ОБОБЩИТЬ экшены и передать все сразу!!!
//* пойдем вторым путем (без <AppDispatch>)

//* Сейчас у нас есть actionCreators Для одного редьюсера, - это AuthActionCreators !! 
//* но Редьюсеров может быть много!!!!
//* И по-хорошему, все эти экшнКреаторс собать все в одном мете

//! action-creators.ts
//* reducers -> action-creators.ts
//* поэтому в корне reducers создадим снова файл action-creators.ts
//* а внутри экспортируем некий обобщающий объект:
//* и в этот объект мы будем разворачивать те экшнКреэйторы, которые на данны  момент у нас созданы!!!
//* ...AuthActionCreators
//
//* Сколько бы не было создано, будем обобщать их с помощью такого объекта!!!!
//* export const allActionCreators = {
//*    ...AuthActionCreators,
//*    ...AuthActionCreators, //для примера как добавлять остальные другие редьюсеры
//*    ...AuthActionCreators,
//*    ...AuthActionCreators,
//* }
//*

//! возвращаемся к хуку useActions 
//* и в функцию bindActionCreators 1м аргументом добавляем allActionCreators
//* return bindActionCreators(allActionCreators, dispatch)

// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { allActionCreators } from '../store/reducers/action-creators';


// export const useActions = () => {
//    const dispatch: any = useDispatch();
//    return bindActionCreators(allActionCreators, dispatch);
// }

//*! LoginForm
//
//* теперь можно вместо dispatch воспользоватьс хуком useActions()
//* const {здесь возвращщает сразу все ЭкшнКреаторы} = useActions()
//* поэтому мы можем выцепить нужный (login) 
//* и просто как обычную функцию вызывать!!!!
//* никаких диспатчей!!!
//* аргументы - username и password
//*
//* было:
// const submit = () => {
//    dispatch(AuthActionCreators.login(username, password))
// }

//* стало 

// const {login} = useActions()

// const submit = () => {
//    login(username, password)
// }

//! NAvbar
//
//* тоже самое делаем для logout в Navbar - воспользуемся хуком useActions()
//* тольо достаем с помощью деструктуризации уже нужную для нас функцию!!!
//* вместь const dispatch = useDispatch()
//* const {logout} = useActions()
//* и в onClick там ниже от dispatch избавляемся

//* -----------------------------------
//*! ***    При обновлении страницы после логина оставаться на странице, а не выходитьт!!
//* На данный момент если мы залогнемся и обновим страницу, мы обатно попадаем на форму логина
//* хотя в localStorage мы сохраняем некоторый флаг auth И username
//* и в завиимости от того. есть в хранилеще это или нет
//* мы можем пользоателя залогинить или разлогинить!!!

//* Идем в App.tsx
//* и воспользуемся отслеживателем!!!!
//* хуком useEffect() с пустым массивом зависимости!!
//* чтобы колбэк, который в этот хук мы передаем , оттработал лишь единожды в омент загрузки!!!
//* при первом запуске приложения!!
//* а внури самого колбэка делаем простую проверку
//* если локалсторадж получает флаг - по ключу что-то находится
//* то тогда пользователя будем логинить
//* а если нет (else) - моно не делать, так как и так попадае на страницу с логином!!
//* useEffect(() => {
//*     if(localStorage.getItem('auth')) {   
//*         setUser({username: localStorage.getItem('username' || '')} as IUser)
//*         setAuth(true)
//*     }
//* }, [])

//* Над юзэффектом получае пару экшн креэйтеров - setUser и setIsAuth
//* const {setUser, setIsAuth} = useActions()

//* а внутри условия вызываем два этих экшн креатора!!
//* получаем их снова из localStorage
//* но это все имитация. если работать с сервером, то мы отправляли на проверку здесь какой-либо окен!!!!
//* и в зависимоти от этого устанавлилвали нужные для нас значения в состояния
//* setUser({username: localStorage.getItem('username' || '')} as IUser)
//* setAuth(true)

//*! App.tsx
// import { Layout } from 'antd';
// import React, { FC, useEffect } from 'react'
// import AppRouter from './components/AppRouter';
// import Navbar from './components/Navbar';
// import './App.css';
// import { useActions } from './hooks/useActions';
// import { IUser } from './models/IUser';

// const App:FC = () => {
  
//   const { setUser, setIsAuth} = useActions();
  
//   useEffect (() => {
//      if(localStorage.getItem('auth')) {
//         setUser({username: localStorage.getItem('username' || '')} as IUser)
//         setIsAuth(true)
//       }
//   }, [])

//   return (
//     <Layout>
//       <Navbar />
//       <Layout.Content>
//            <AppRouter />
//       </Layout.Content>
//     </Layout>
//   )
// }

// export default App;