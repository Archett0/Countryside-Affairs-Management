import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import PostElection from "@/pages/PostElection.vue";
import ElectionList from "@/pages/ElectionList.vue";
import FixingNewPage from "@/pages/FixingNewPage.vue";
import FixingOrderList from "@/pages/FixingOrderList.vue";
import FixingMyOrderList from "@/pages/FixingMyOrderList.vue";
import NewDelivery from "@/pages/NewDelivery.vue";
import OngoingDelivery from "@/pages/OngoingDelivery.vue";
import FinishedDelivery from "@/pages/FinishedDelivery.vue";
import CoursesManage from "@/pages/CoursesManage.vue";
import CourseTypeManage from "@/pages/CourseTypeManage.vue";
import ElectionTypeManagement from "../pages/ElectionTypeManagement";
import Cockpit from "../pages/Cockpit";
import CopeMatter from "../pages/HospitalPage/CopeMatter";
import HospitalCrowdedSituation from "../pages/HospitalPage/HospitalCrowdedSituation";
import HospitalCrowdedSituation2 from "../pages/HospitalPage/HospitalCrowdedSituation2.vue";
import checkInf from "../components/Hospital/checkInf.vue";
import CheckInformation from "../components/Hospital/CheckInformation.vue";
import AskOnlineDetail from "../components/Hospital/AskOnlineDetail.vue";
import AppointmentDetail from "../components/Hospital/AppointmentDetail.vue";
import HotelAppointment from "../pages/HotelPage/HotelAppointment.vue";
import HotelRoomManage from "../pages/HotelPage/HotelRoomManage.vue";
import HotelCope from "../pages/HotelPage/HotelCope.vue";
import RestAppointment from "../pages/RestaurantPage/RestAppointment.vue";
import RestDue from "../pages/RestaurantPage/RestDue.vue";
import RestBusiness from "../pages/RestaurantPage/RestBusiness.vue";
import Login from "../pages/Login.vue";
import RentHouseInformation from "../pages/HouseRental/RentHouseInformation.vue";
import Dashboard from "../pages/Dashboard.vue";
import BusStopList from "../pages/BusStopList.vue";
import BusLineList from "../pages/BusLineList.vue";
import BusLineMapC from "../pages/BusLineMapC.vue";
import AllBusStopList from "../pages/AllBusStopList.vue";
import UserManage from "../pages/UserManage";
import AllStopMap from "../pages/AllStopMap";
import OneStopMap from "../pages/OneStopMap";


const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        // ??????????????????????????????
        path: "/",
        redirect: 'login',
        component: DashboardLayout,
        meta: {
            requireAuth: true
        },
        children: [
            {
                path: "dashboard",
                name: "??????",
                component: Dashboard,
            },
            // {
            //   path: "cockpit",
            //   name: "Cockpit",
            //   component: Cockpit,
            // },
            {
                path: "new-deliverys",
                name: "?????????????????????",
                component: NewDelivery,
            },
            {
                path: "user-manage",
                name: "??????????????????",
                component: UserManage,
            },
            {
                path: "RentHouseInformation",
                name: "RentHouseInformation",
                component: RentHouseInformation,
            },
            {
                path: "ongoing-deliverys",
                name: "???????????????????????????",
                component: OngoingDelivery,
            },
            {

                path: "RestAppointment",
                name: "RestAppointment",
                component: RestAppointment,
            },
            {
                path: "RestDue",
                name: "RestDue",
                component: RestDue,
            },
            {
                path: "finished-deliverys",
                name: "???????????????????????????",
                component: FinishedDelivery,
            },
            {
                path: "fix-my-order",
                name: "????????????????????????",
                component: FixingMyOrderList,
            },

            {
                path: "RestBusiness",
                name: "RestBusiness",
                component: RestBusiness,
            },
            {
                path: "courses-type",
                name: "??????????????????",
                component: CourseTypeManage,
            },
            {
                path: "courses",
                name: "????????????",
                component: CoursesManage,
            },
            {
                path: "HotelAppointment",
                name: "HotelAppointment",
                component: HotelAppointment,
            },
            {
                path: "appointmentDetail",
                name: "AppointmentDetail",
                component: AppointmentDetail,
            },
            {
                path: "HotelRoomManage",
                name: "HotelRoomManage",
                component: HotelRoomManage,
            },
            {

                path: "manage-election-type",
                name: "??????????????????",
                component: ElectionTypeManagement,
            },
            {
                path: "fix-new-order",
                name: "?????????????????????",
                component: FixingNewPage,
            },
            {

                path: "HotelCope",
                name: "HotelCope",
                component: HotelCope,
            },
            {
                path: "AskOnlineDetail",
                name: "AskOnlineDetail",
                component: AskOnlineDetail,
            },
            {

                path: "fix-all-order",
                name: "??????????????????",
                component: FixingOrderList,
            },
            {

                path: "post-election",
                name: "??????????????????",
                component: PostElection,
            },
            {
                path: "checkInf",
                name: "checkInf",
                component: checkInf,
            },
            {
                path: "HospitalCrowdedSituation",
                name: "??????????????????",
                component: HospitalCrowdedSituation,
            },
            {
                path: "HospitalCrowdedSituation2",
                name: "??????????????????????????????",
                component: HospitalCrowdedSituation2,
            },
            {
                path: "CopeMatter",
                name: "??????????????????",
                component: CopeMatter,
            },
            {
                path: "buslinemapc",
                name: "????????????",
                component: BusLineMapC,
            },
            {
                path: "election-list",
                name: "??????????????????",
                component: ElectionList,
            },
            {
                path: "CheckInformation",
                name: "CheckInformation",
                component: CheckInformation,
            },
            {
                path: "CopeMatter",
                name: "??????????????????",
                component: CopeMatter,
            },
            {
                path: "busstoplist",
                name: "????????????",
                component: BusStopList,
            },
            {
                path: "allstoplist",
                name: "????????????",
                component: AllBusStopList,
            },
            {
                path: "buslinelist",
                name: "????????????",
                component: BusLineList,
            },
            {
                path: "stopmap",
                name:"????????????",
                component: AllStopMap,
            },
            {
                path: "onestopmap",
                name:"????????????",
                component: OneStopMap,
            }
        ],
    },
];

export default routes;
