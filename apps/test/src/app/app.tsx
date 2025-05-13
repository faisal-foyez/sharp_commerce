import React, { Suspense, useCallback, useState } from 'react';
import { useEffect, useContext } from 'react';
import {Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Drawer, DrawerAction, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DropdownCheckboxItem, DropdownRadioGroup, DropdownRadioItem, DropdownSub, IconButton, InputNumber, InputNumberBox, InputNumberButton, InputOTPDivider, InputOTPGroup, LinkButton, PaginationGoTo, PaginationNavigator, Skeleton, SkeletonLine, SocialButton, TagButton, toast} from '@dsc/shared_ui';
import { MsExcel, Microsoft, AppleMusic, Apple, Figma } from '@dsc/logos/lib/brand_logo/index.jsx';
import { AdmissionTickets, ThumbsUp, TickSymbol, Mountain, Hospital } from '@dsc/logos/lib/emoji/index.jsx';
import { ThemeContext } from "../ThemeContext";
import { Lock, CaretCircleDown, ArrowLeft, ArrowRight, AirplaneInFlight, Mailbox, Envelope, Plus, Minus, House, Bell, Gear, Calendar, Users, Phone, ChartPieSlice, Pen, Copy, UserCircle, SignOut, Globe, CloudArrowUp, DotsThree, CaretLeft, CaretRight, GoogleLogo, FacebookLogo, MagnifyingGlass, HouseLine, PresentationChart, Stack, CheckSquare, ChartPie, Lifebuoy, CaretDown, HourglassLow, Checks, Barcode, PencilLine, Check, DotsThreeOutlineVertical, Funnel, ShieldWarning, Buildings, User, Info, Trash } from "@dsc/phosphor_icons";
// import { Ambulance, ArrowLeft, ArrowRight, CaretRight } from "@dsc/phosphor_icons";
import { BrandGalaxyStoreTypeDefaultThemeWhite, BrandGalaxyStoreTypeOnlyLogoThemeWhite } from '@dsc/logos/lib/badge_app_store/index.jsx';
import {   BrandEpicGamesStoreTypeDefaultThemeWhite } from '@dsc/logos/lib/badge_game_store/index.jsx';
import { 
  Avatar, 
  AvatarIcon, 
  AvatarGroup, 
  Badge, 
  Label, 
  HelperText, 
  Input, 
  InputField, 
  InputIcon, 
  InputOTP, 
  InputOTPItem, 
  TextArea, 
  Checkbox,
  Radio,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  AlertContainer,
  AlertLink,
  AlertDismiss,

  Notification,
  NotificationContent,
  NotificationDescription,
  NotificationTitle,

  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,

  DatePicker,

  Popover,
  PopoverAction,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,

  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,

  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownArrow,
  DropdownItem,
  DropdownDivider,
  DropdownGroup,
  DropdownLabel,
  DropdownSubAction,
  DropdownSubContent,

  Empty,
  EmptyImage,
  EmptyTitle,
  EmptyDescription,

  Modal,
  ModalAction,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,

  Navbar,
  NavbarContainer,
  NavbarBrand,
  NavbarList,
  NavbarItem,
  NavbarCollapseBtn,
  NavbarCollapse,

  CircleProgress,
  CircleProgressLine,
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText,

  Pagination,
  PaginationList,
  PaginationItem,

  Carousel,
  CarouselSlides,
  CarouselItem,
  CarouselControl,
  CarouselButtons,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselIndicators,

  Divider,

  Rating,
  RatingStar,

  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
  SidebarDropdown,
  SidebarCollapse,
  SidebarDropdownList,

  Slider,

  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,

  Spinner,

  Steps,
  StepsItem,
  StepsPoint,
  StepsContent,
  StepsTitle,
  StepsDescription,

  Switch,

  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
  TableCaption,

  Tabs,
  TabsList,
  TabsItem,
  TabsContent,

  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,

  Upload,
  UploadBody,
  UploadIcon,
  UploadText,
  UploadFooter,

} from '@dsc/shared_ui';
import ImageTest from '../assets/image.jpg';
import PicOne from '../assets/pic_one.jpg';
import PicTwo from '../assets/pic_two.jpg';
import PicThree from '../assets/pic_three.jpg';
import PicFour from '../assets/pic_four.jpg';
import PicFive from '../assets/pic_five.jpg';
import PicSix from '../assets/pic_six.jpg';
import PicSeven from '../assets/pic_seven.jpg';
import FolderIcon from '../assets/folder.svg';
// import { DateRange } from 'react-day-picker';



//@ts-ignore
const loadIcons = (iconName: string) => React.lazy(() => import('@dsc/phosphor_icons').then(mod=>({default:mod[iconName]})));

export function App() {
  const { browserTheme, setBrowserTheme } = useContext(ThemeContext);
  const [value, setValue] = useState('');
  const [numberValue, setNumberValue] = useState(0);
  const [checkedValue, setCheckedValue] = useState('male');
  const [dismiss, setDismiss] = useState(false);
  const [date, setDate] = useState<Date>()
  const [ratingValue, setRatingValue] = useState<number | undefined>(0);
  const [files, setFiles] = useState<any>([])

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles)
  }, [])
  const data = [
    {
      id: 1,
      title: 'Personal Information',
      description: 'Enter your personal details to create an account.',
      isComplete: true,
    },
    {
      id: 2,
      title: 'Verify Email',
      description: 'Check email for a verification link to confirm your account.',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Setup Profile',
      description: 'Complete your profile by adding a profile picture and bio.',
      isComplete: false,
    },
  ]

  const tableData = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      price: 168,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
  ]
    
  useEffect(() => {
    const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setBrowserTheme(theme);
  }, []);
  // const s = React.createElement(Icon['ArrowLeft'])
  // console.log(s)
  const Ambulance = loadIcons('Ambulance');
  
  return (
    <>
    

    <Carousel>
      <CarouselSlides>
        {[1, 2, 3, 4, 5].map((slide) => (
          <CarouselItem key={slide}>
            <div style={{display: 'flex', height: '300px', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px solid gray', backgroundColor: 'gray'}} className="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
              <h1 style={{fontSize: '20px', fontWeight: 'bold', color: 'black'}}>{slide}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
    <section style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Divider color="primary" size="xl" variant="start" />
      <p>Hello</p>
      <Divider color="primary" size="2xl" variant="center" />
      <p>Hello</p>
      <Divider color="success" size="2xl" variant="end" />
      <p>Hello</p>
    </section>

    <Rating  handleRating={(value) => {console.log(value); setRatingValue(value)}}>
      <RatingStar value={1} />
      <RatingStar value={2} />
      <RatingStar value={3} />
      <RatingStar value={4} />
      <RatingStar value={5} />
    </Rating>


    <Sidebar>
      <SidebarBody>
        <a href="/" className="inline-flex items-center">
         <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
            K.
         </span>
        </a>

        <fieldset className="relative">
          <Input placeholder="Search" className="ps-11" onChange={() => {}} />
          <InputIcon>
            <MagnifyingGlass size={19} color="#AFBACA" />
          </InputIcon>
        </fieldset>

        <SidebarList className="space-y-0.5">
          <SidebarItem>
            <HouseLine size={20} />
            House
          </SidebarItem>
          <SidebarItem>
            <PresentationChart size={20} />
            Dashboard
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <UserCircle size={20} />
                  Account
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <PencilLine size={20} />
                  Update Info
                </SidebarItem>
                <SidebarItem>
                  <Barcode size={20} />
                  My Order
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <span>
                    <CheckSquare size={20} />
                  </span>
                  <span>Tasks</span>
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <HourglassLow size={20} />
                  In Progress
                </SidebarItem>
                <SidebarItem>
                  <Checks size={20} />
                  Completed
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>

          <SidebarItem>
            <ChartPie size={20} />
            Reporting
          </SidebarItem>
        </SidebarList>
      </SidebarBody>

      <SidebarFooter>
        <div className="flex items-center gap-2">
          <Avatar type="placeholder" />
          <div>
            <p className="text-body-4 font-medium text-metal-400">Enzo Farnandez</p>
            <p className="text-body-4 font-normal text-metal-300">enzo123@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>

    <Slider min={0} max={100} defaultValue={[33, 75]} />

      <Select>
        <SelectAction style={{width: '20rem'}}>
          <SelectValue placeholder="Select team" />
        </SelectAction>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Team</SelectLabel>
            <SelectItem value="gd">Graphic Designer</SelectItem>
            <SelectItem value="ud">UX Designer </SelectItem>
            <SelectItem value="pm">Product Manager</SelectItem>
            <SelectItem value="wde">Web Designer</SelectItem>
            <SelectItem value="swe">Software Engineer</SelectItem>
            <SelectItem value="mm">Marketing Manager</SelectItem>
            <SelectItem value="wd">Web Developer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="error" />
      <Spinner color="warning" />

      <Steps>
      {data.map((step) => (
        <StepsItem key={step.id}>
          <StepsPoint
            className="data-[completed=true]:bg-primary-500 data-[completed=true]:text-white"
            isComplete={step.isComplete}>
            <Check size={16} />
          </StepsPoint>
          <StepsContent>
            <StepsTitle>{step.title}</StepsTitle>
            <StepsDescription>{step.description}</StepsDescription>
          </StepsContent>
        </StepsItem>
      ))}
    </Steps>

    <Switch disabled />

    <Table>
      <TableCaption>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className="flex items-center justify-between">
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}} className="flex items-center gap-5">
            <h2 style={{fontSize: '16px', fontWeight: 'bold', color: '#1A202C'}} className="text-heading-6 font-semibold text-metal-900 dark:text-white">Total Product</h2>
            <Badge styleVariant='fill' colorVariant='blue' sizeVariant='large' style={{backgroundColor: '#1A202C', color: 'white'}}>
              500 Product
            </Badge>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}} className="flex items-center gap-5">
            <Button variant="border" color="primary" style={{display: 'flex', alignItems: 'center', gap: '10px'}} >
              <Plus size={16} color="#AFBACA" />
              Add Product
            </Button>
            <Button variant="border" color="primary" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Funnel size={16} color="#AFBACA" />
              Filter Product
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="w-[320px]">Product Name</div>
          </TableHead>
          <TableHead>
            <div className="w-[65px]">Price</div>
          </TableHead>
          <TableHead>
            <div className="w-[100px]">Category</div>
          </TableHead>
          <TableHead>
            <div className="w-[60px]">Rating</div>
          </TableHead>
          <TableHead>
            <div className="w-[60px]">Stock</div>
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.rating.rate}</TableCell>
            <TableCell>{item.rating.count}</TableCell>
            <TableCell>
              <Dropdown>
                <DropdownAction asChild>
                  <button>
                    <DotsThreeOutlineVertical size={16} color="#AFBACA" />
                  </button>
                </DropdownAction>
                <DropdownContent align="end" style={{width:200, border: '1px solid #AFBACA', padding: '10px'}} className="w-[200px] border border-metal-100 p-3 dark:border-metal-800">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Move</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <Tabs defaultValue="item-1" style={{margin: 'auto', maxWidth: '500px'}} className="mx-auto max-w-xl">
      <TabsList>
      <TabsItem value="item-1">
          <User size={16} />
          Profile
        </TabsItem>
        <TabsItem value="item-2">
          <Gear size={16} />
          Settings
        </TabsItem>
        <TabsItem value="item-3">
          <Buildings size={16} />
          Company
        </TabsItem>
        <TabsItem value="item-4">
          <ShieldWarning size={16} />
          Privacy
        </TabsItem>
      </TabsList>
      <TabsContent value="item-1">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} >
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '83.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '66.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-2">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} className="max-w-full space-y-2.5">
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '83.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '61.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '56.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-3">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} className="max-w-full space-y-2.5">
          <SkeletonLine style={{width: '40.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '83.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '30.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-4">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} className="max-w-full space-y-2.5">
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '20.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '70.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '55.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
    </Tabs>

    <Button onClick={() => {toast('Hello')}}>
      <p>Hello</p>
    </Button>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Timeline style={{borderStyle: 'dotted'}}>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}} >September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 1 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 2 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 3 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>


    <div>
    <Upload options={{ onDrop }}>
      <UploadBody>
        <UploadIcon>
          <img src={FolderIcon} alt="folder" style={{width: '28px', height: '28px'}} />
        </UploadIcon>
        <UploadText>
          <p className="text-body-3 font-medium text-metal-600 dark:text-white">Drag & Drop or Choose File to Upload</p>
          <p className="text-body-4 font-normal text-metal-400 dark:text-metal-300">
            DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
          </p>
        </UploadText>
      </UploadBody>
      <UploadFooter isFileExists={files.length > 0}>
        <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
          <Info size={16} />
          Uploaded Files
        </p>
        <ul className="space-y-1">
          {files?.map((file: any) => (
            <li
              key={file?.name}
              className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-metal-800 dark:text-metal-300 ">
              {file?.name}
              <Trash size={16} color="red" />
            </li>
          ))}
        </ul>
      </UploadFooter>
    </Upload>
    </div>
    </>
  );
}

export default App;