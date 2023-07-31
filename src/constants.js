import philospherStone from "../public/assets/philospher_stone.jpg";
import chamberOfSecrets from "../public/assets/chamber_of_secrets.png";
import prisonerAzkaban from "../public/assets/prisoner_azkaban.jpg";
import gobletOfFire from "../public/assets/goblet_of_fire.png";
import orderOfPhoenix from "../public/assets/order_of_phoenix.jpg";
import halfBloodPrince from "../public/assets/half_blood_prince.jpg";
import deathlyHallows from "../public/assets/deathly_hallows.jpg";
import jkRowling from "../public/assets/jk_rowling.jpg";
import profile from "../public/assets/dummyProfile.webp";
import fellowshipOfRing from "../public/assets/fellowship_of_rings.jpg";
import theTwoTowers from "../public/assets/the_two_towers.jpg";
import returnOfKing from "../public/assets/return_of_king.jpg";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const navigation = [
  {
    title: "Home",
    icon: <HomeOutlinedIcon/>,
    link: "/",
  },
  {
    title: "Discover",
    icon: <SearchOutlinedIcon/>,
    link: "/discover",
  },
  {
    title: "My Books",
    icon: <LibraryBooksOutlinedIcon/>,
    link: "/mybooks",
  },
  {
    title: "Wishlist",
    icon: <FavoriteBorderOutlinedIcon/>,
    link: "/wishlist",
  },
  {
    title: "Settings",
    icon: <SettingsOutlinedIcon/>,
    link: "/settings",
  },
];

export const bookList = [
  {
    bookId:"order_of_phoenix",
    bookPrice:350,
    bookTitle: "Harry Potter and the order of phoenix",
    bookCover: orderOfPhoenix,
    author: "J K Rowling",
    authorImage: jkRowling,
    shortDescription: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling's magical classic Harry Potter and the Philosopher's Stone!",
    description: "The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime …",
    editors: ["J K Rowling", "Christopher Reath","Alena Gestabon","Steve Korg"],
    language: "English",
    paperback: "pdf, full color, 345 pages",
    reviews:[
      {
        userName:"Alan Rick",
        userImage:profile,
        comments:"Into the fantasy land"
      }
    ]
  },
  {
    bookId:"fellowship_of_ring",
    bookPrice:425,
    bookTitle: "The Lord of the Rings - The Fellowship of the Ring",
    bookCover: fellowshipOfRing,
    author: "J R R Tolkien",
    authorImage: jkRowling,
    shortDescription: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
    description: `In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, 
      filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him.`,
    editors: ["J R R Tolkien", "Christopher Reath","Ken Liu"],
    language: "English",
    paperback: "pdf, full color, 432 pages",
    reviews:[
      {
        userName:"Alan Rick",
        userImage:profile,
        comments:"Into the fantasy land"
      }
    ]
  },
  {
    bookId:"prisoner_of_azkaban",
    bookPrice:378,
    bookTitle: "Harry Potter and the prisoner of azkaban",
    bookCover: prisonerAzkaban,
    author: "J K Rowling",
    authorImage: jkRowling,
    shortDescription: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling's magical classic Harry Potter and the Philosopher's Stone!",
    description: "The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime …",
    editors: ["J K Rowling", "Christopher Reath","Alena Gestabon","Steve Korg"],
    language: "English",
    paperback: "pdf, full color, 345 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      },
      {
        userName:"Alan Rick",
        userImage:profile,
        comments:"Into the fantasy land"
      }
    ]
  },
  {
    bookId:"philospher_stone",
    bookPrice:290,
    bookTitle: "Harry Potter and the philosopher's stone",
    bookCover: philospherStone,
    author: "J K Rowling",
    authorImage: jkRowling,
    shortDescription: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling's magical classic Harry Potter and the Philosopher's Stone!",
    description: "The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime …",
    editors: ["J K Rowling", "Christopher Reath","Alena Gestabon","Steve Korg"],
    language: "English",
    paperback: "pdf, full color, 345 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      },
      {
        userName:"Alan Rick",
        userImage:profile,
        comments:"Into the fantasy land"
      }
    ]
  },
  {
    bookId:"the_two_towers",
    bookPrice:450,
    bookTitle: "The Lord of the Rings - The Two Towers",
    bookCover: theTwoTowers,
    author: "J R R Tolkien",
    authorImage: jkRowling,
    shortDescription: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
    description: `In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, 
      filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him.`,
      editors: ["J R R Tolkien", "Christopher Reath","Ken Liu"],
    language: "English",
    paperback: "pdf, full color, 450 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      },
      {
        userName:"Alan Rick",
        userImage:profile,
        comments:"Into the fantasy land"
      }
    ]
  },
  {
    bookId:"goblet_of_fire",
    bookPrice:375,
    bookTitle: "Harry Potter and the goblet of fire",
    bookCover: gobletOfFire,
    author: "J K Rowling",
    authorImage: jkRowling,
    shortDescription: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling's magical classic Harry Potter and the Philosopher's Stone!",
    description: "The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime …",
    editors: ["J K Rowling", "Christopher Reath","Alena Gestabon","Steve Korg"],
    language: "English",
    paperback: "pdf, full color, 345 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      }
    ]
  },
  {
    bookId:"half_blood_prince",
    bookPrice:354,
    bookTitle: "Harry Potter and the half blood prince",
    bookCover: halfBloodPrince,
    author: "J K Rowling",
    authorImage: jkRowling,
    shortDescription: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling's magical classic Harry Potter and the Philosopher's Stone!",
    description: "The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime …",
    editors: ["J K Rowling", "Christopher Reath","Alena Gestabon","Steve Korg"],
    language: "English",
    paperback: "pdf, full color, 345 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      }
    ]
  },
  {
    bookId:"chamber_of_secrets",
    bookPrice:289,
    bookTitle: "Harry Potter and the chamber of secrets",
    bookCover: chamberOfSecrets,
    author: "J K Rowling",
    authorImage: jkRowling,
    shortDescription: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling's magical classic Harry Potter and the Philosopher's Stone!",
    description: "The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime …",
    editors: ["J K Rowling", "Christopher Reath","Alena Gestabon","Steve Korg"],
    language: "English",
    paperback: "pdf, full color, 345 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      }
    ]
  },
  {
    bookId:"return_of_king",
    bookPrice:435,
    bookTitle: "The Lord of the Rings - The Return Of King",
    bookCover: returnOfKing,
    author: "J R R Tolkien",
    authorImage: jkRowling,
    shortDescription: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",
    description: `In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, 
      filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him.`,
      editors: ["J R R Tolkien", "Christopher Reath","Ken Liu"],
    language: "English",
    paperback: "pdf, full color, 470 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      },
      {
        userName:"Alan Rick",
        userImage:profile,
        comments:"Into the fantasy land"
      }
    ]
  },
  {
    bookId:"deathly_hallows",
    bookPrice:425,
    bookTitle: "Harry Potter and the deathly hallows",
    bookCover: deathlyHallows,
    author: "J K Rowling",
    authorImage: jkRowling,
    shortDescription: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling's magical classic Harry Potter and the Philosopher's Stone!",
    description: "The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It's time to take the magical journey of a lifetime …",
    editors: ["J K Rowling", "Christopher Reath","Alena Gestabon","Steve Korg"],
    language: "English",
    paperback: "pdf, full color, 345 pages",
    reviews:[
      {
        userName:"Max Schwenger",
        userImage:profile,
        comments:"Good book and amazing"
      },
      {
        userName:"Alan Rick",
        userImage:profile,
        comments:"Into the fantasy land"
      }
    ]
  },
];
