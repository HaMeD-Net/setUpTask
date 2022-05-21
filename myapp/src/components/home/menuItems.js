import {
    HomeOutlined,
    CopyOutlined,
    YoutubeOutlined,
    VideoCameraOutlined,
    EditOutlined,
    AudioOutlined,
    ThunderboltOutlined,
    HistoryOutlined,
    BookOutlined,
    TagOutlined,
    ClusterOutlined,
    OrderedListOutlined,
    CalculatorOutlined,
    VideoCameraAddOutlined,
    PlayCircleOutlined,
    FieldTimeOutlined,
    ShopOutlined,
    AuditOutlined,
    RestOutlined,
    FileProtectOutlined,
    PercentageOutlined,
    EuroCircleOutlined,
    DollarOutlined
} from '@ant-design/icons';

export const MenuItems = [
    {
        name: 'داشبورد',
        key: "dashboard",
        id: "dashboard",
        icon: <HomeOutlined />,
    },
    {
        name: 'محتوا',
        icon: <CopyOutlined />,
        key: 'content',
        id: 'content',
        submenus: [
            {
                name: 'ویدئو',
                icon: <YoutubeOutlined />,
            },
            {
                name: 'اخبار',
                icon: <EditOutlined />,
            },
            {
                name: 'پادکست',
                icon: <AudioOutlined />,
            },
            {
                name: 'اخبار لحظه‌ای',
                icon: <ThunderboltOutlined />,
            },
            {
                name: 'استوری',
                icon: <HistoryOutlined />,
            },
            {
                name: 'صفحات',
                icon: <BookOutlined />,
            },
            {
                name: 'تگ',
                icon: <TagOutlined />,
            },
            {
                name: 'دسته‌بندی',
                icon: <ClusterOutlined />,
            },
            {
                name: 'گزارش ویژه',
                icon: <OrderedListOutlined />,
            },
            {
                name: 'ماشین حساب',
                icon: <CalculatorOutlined />,
            },
        ],
    },
    {
        name: 'رسانه',
        icon: <VideoCameraOutlined />,
        key: 'media',
        id: 'media',
        submenus: [
            {
                name: 'پخش زنده',
                icon: <VideoCameraAddOutlined />,
            },
            {
                name: 'برنامه‌ها',
                icon: <PlayCircleOutlined />,
            },
            {
                name: 'کنداکتور',
                icon: <FieldTimeOutlined />,
            },

        ],
    },
    {
        name: 'کسب و کار',
        icon: <ShopOutlined />,
        key: 'business',
        id: 'business',
        submenus: [
            {
                name: 'لایسنس',
                icon: <FileProtectOutlined />,
            },
            {
                name: 'پلن',
                icon: <CalculatorOutlined />,
            },
            {
                name: 'پرداخت',
                icon: <DollarOutlined />,
            },
            {
                name: 'اشتراک',
                icon: <AuditOutlined />,
            },
            {
                name: 'کد تخفیف',
                icon: <PercentageOutlined />,
            },
            {
                name: 'تخفیف مصرفی',
                icon: <RestOutlined />,
            },
            {
                name: 'گزارش SEP',
                icon: <EuroCircleOutlined />,
            },
        ],
    }
]