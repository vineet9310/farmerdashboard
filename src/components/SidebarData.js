import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faCircleInfo, faArrowsToCircle} from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
  {
    title: 'Personal Details',
    path: '/overview',
    icon: <FontAwesomeIcon icon={faUser} />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: '',
    //     path: '/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Land Details',
    //     path: '/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Land Details',
    path: '/Land Details',
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Reports',
    //     path: '/reports/reports1',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 2',
    //     path: '/reports/reports2',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 3',
    //     path: '/reports/reports3',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Raise Concern',
    path: '/products',
    icon: <FontAwesomeIcon icon={faArrowsToCircle} />
  },
  {
    title: 'Status',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  
];
