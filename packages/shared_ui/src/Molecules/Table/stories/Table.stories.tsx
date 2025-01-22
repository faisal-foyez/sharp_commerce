import { Meta, StoryObj } from '@storybook/react';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { Plus, Funnel, DotsThreeOutlineVertical, ArrowsDownUp, Calendar, Flag, Spinner, DotsNine, CurrencyDollar, NavigationArrow } from '@dsc/phosphor_icons';
import { Dropdown, DropdownAction, DropdownContent, DropdownItem } from '../../Dropdown';
import Button from '../../../Atoms/Button';
import Badge from '../../../Atoms/Badge';
import Checkbox from '../../../Atoms/Checkbox';
import countryOne from '../../../../assets/country/country-1.svg';
import countryTwo from '../../../../assets/country/country-2.svg';
import countryThree from '../../../../assets/country/country-3.svg';
import countryFour from '../../../../assets/country/country-4.svg';
import countryFive from '../../../../assets/country/country-5.svg';


const meta: Meta<typeof Table> = {
  title: 'Components/Molecules/Table',
  component: Table,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;


type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => {
    const tableData = [
      {
        id: 1,
        fileName: 'Landscape-Beach.png',
        fileFormat: 'Png',
        ratio: '16:9',
        resolution: '1920x1080',
        fileSize: '43 KB',
        status: 'In Progress',
      },
      {
        id: 2,
        fileName: 'Portrait-Sunset.jpg',
        fileFormat: 'Jpg',
        ratio: '4:3',
        resolution: '1024x768',
        fileSize: '128 KB',
        status: 'Complete',
      },
      {
        id: 3,
        fileName: 'Cityscape-Night.png',
        fileFormat: 'Png',
        ratio: '16:9',
        resolution: '3840x2160',
        fileSize: '210 KB',
        status: 'Pending',
      },
      {
        id: 4,
        fileName: 'Animation-Loading.gif',
        fileFormat: 'Gif',
        ratio: '1:1',
        resolution: '800x800',
        fileSize: '76 KB',
        status: 'In Progress',
      },
      {
        id: 5,
        fileName: 'Mountain-Peak.jpg',
        fileFormat: 'Jpg',
        ratio: '16:9',
        resolution: '2560x1440',
        fileSize: '312 KB',
        status: 'Complete',
      },
    ]
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="max-w-[250px]">File Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">File Format</div>
            </TableHead>
            <TableHead>
              <div className="w-[85px]">Aspect Ratio</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Resolution</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">File Size</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Status</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="max-w-[250px] truncate">{item.fileName}</div>
              </TableCell>
              <TableCell>{item.fileFormat}</TableCell>
              <TableCell>{item.ratio}</TableCell>
              <TableCell>{item.resolution}</TableCell>
              <TableCell>{item.fileSize}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};


export const ProductTable: Story = {
  render: (args) => {
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
    return (
      <Table>
      <TableCaption>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
            <h2 style={{fontSize: '16px', fontWeight: '600', color: '#1A202C'}}>Total Product</h2>
            <Badge style={{backgroundColor:'blue', color: 'white'}}>
              500 Product
            </Badge>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
            <Button variant="border" style={{display: 'flex', gap: '1.5px'}}>
              <Plus size={16} color="#AFBACA" />
              Add Product
            </Button>
            <Button variant="border" style={{display: 'flex', gap: '1.5px'}}>
              <Funnel size={16} color="#AFBACA" />
              Filter Product
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div style={{width: '320px'}}>Product Name</div>
          </TableHead>
          <TableHead>
            <div style={{width: '65px'}}>Price</div>
          </TableHead>
          <TableHead>
            <div style={{width: '100px'}}>Category</div>
          </TableHead>
          <TableHead>
            <div style={{width: '60px'}}>Rating</div>
          </TableHead>
          <TableHead>
            <div style={{width: '60px'}}>Stock</div>
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
                  <button style={{display: 'flex', alignItems: 'center', gap: '1.5px', border: 'none', background: 'none'}}>
                    <DotsThreeOutlineVertical size={16} color="#AFBACA" />
                  </button>
                </DropdownAction>
                <DropdownContent align="end" style={{width:200, border: '1px solid #AFBACA', padding: '10px'}} >
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
    );
  },
};

export const OrdersTable: Story = {
  render: (args) => {
    const tableData = [
      {
        id: 1,
        type: 'DL-19266755',
        date: {
          day: 'Feb 28, 2024',
          time: '10:00 am',
        },
        country: countryOne,
        status: 'Delivered',
        quant: 100,
        price: 21000,
        location: 'New York, USA',
      },
      {
        id: 2,
        type: 'DL-19266756',
        date: {
          day: 'Mar 1, 2024',
          time: '11:00 am',
        },
        country: countryTwo,
        status: 'In Transit',
        quant: 200,
        price: 42000,
        location: 'Los Angeles, USA',
      },
      {
        id: 3,
        type: 'DL-19266757',
        date: {
          day: 'Mar 2, 2024',
          time: '12:00 pm',
        },
        country: countryThree,
        status: 'Pending',
        quant: 150,
        price: 31500,
        location: 'Chicago, USA',
      },
      {
        id: 4,
        type: 'DL-19266758',
        date: {
          day: 'Mar 3, 2024',
          time: '1:00 pm',
        },
        country: countryFour,
        status: 'Delivered',
        quant: 300,
        price: 63000,
        location: 'Houston, USA',
      },
      {
        id: 5,
        type: 'DL-19266759',
        date: {
          day: 'Mar 4, 2024',
          time: '2:00 pm',
        },
        country: countryFive,
        status: 'In Transit',
        quant: 250,
        price: 52500,
        location: 'Phoenix, USA',
      },
    ]
    return (
      <Table>
        <TableCaption>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <h2 style={{fontSize: '16px', fontWeight: '600', color: '#1A202C'}}>Total Orders</h2>
              <Badge style={{backgroundColor:'blue', color: 'white'}}>
                200 Orders
              </Badge>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <Button variant="border" style={{display: 'flex', gap: '1.5px'}}>
                <Plus size={16} color="#AFBACA" />
                Add Order
              </Button>
              <Button variant="border" style={{display: 'flex', gap: '1.5px'}}>
                <Funnel size={16} color="#AFBACA" />
                Filter Order
              </Button>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>
              <p style={{display: 'flex', alignItems: 'center', gap: '1.5px', width: '100px'}}>
                <ArrowsDownUp size={16} color="#AFBACA" />
                Type
              </p>
            </TableHead>
            <TableHead>
              <p style={{display: 'flex', alignItems: 'center', gap: '1.5px', width: '100px'}}>
                <Calendar size={16} color="#AFBACA" />
                Date
              </p>
            </TableHead>
            <TableHead>
              <p style={{display: 'flex', alignItems: 'center', gap: '1.5px', width: '100px'}}>
                <Flag size={16} color="#AFBACA" />
                Country
              </p>
            </TableHead>
            <TableHead>
              <p style={{display: 'flex', alignItems: 'center', gap: '1.5px', width: '100px'}}>
                <Spinner size={16} color="#AFBACA" />
                Status
              </p>
            </TableHead>
            <TableHead>
              <p style={{display: 'flex', alignItems: 'center', gap: '1.5px', width: '100px'}}>
                <DotsNine size={16} color="#AFBACA" />
                Quant.
              </p>
            </TableHead>
            <TableHead>
              <p style={{display: 'flex', alignItems: 'center', gap: '1.5px', width: '100px'}}>
                <CurrencyDollar size={16} color="#AFBACA" />
                Total Price
              </p>
            </TableHead>
            <TableHead>
              <p style={{display: 'flex', alignItems: 'center', gap: '1.5px', width: '120px'}}>
                <NavigationArrow size={16} color="#AFBACA" />
                Location
              </p>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.id} style={{borderBottom: '1px solid #AFBACA'}}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <div>
                  <p>{item.date.day}</p>
                  <p style={{fontSize: '14px', fontWeight: '400', color: '#AFBACA'}}>{item.date.time}</p>
              </div>
              </TableCell>
              <TableCell style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={item.country} alt="flag" />
              </TableCell>
              <TableCell>
                <Badge
                  style={{fontSize: '14px', fontWeight: '600'}}
                  colorVariant={item.status === 'Delivered' ? 'green' : item.status === 'In Transit' ? 'yellow' : 'red'}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell style={{textAlign: 'center'}}>{item.quant}</TableCell>
              <TableCell style={{textAlign: 'center'}}>{item.price.toLocaleString()}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>
                <Dropdown>
                  <DropdownAction asChild>
                    <button style={{display: 'flex', alignItems: 'center', gap: '1.5px', border: 'none', background: 'none'}}>
                      <DotsThreeOutlineVertical size={16} color="#AFBACA" />
                    </button>
                  </DropdownAction>
                  <DropdownContent align="end" style={{width:200, border: '1px solid #AFBACA', padding: '10px'}} >
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
    )
  },
};