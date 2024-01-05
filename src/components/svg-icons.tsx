import React from 'react';

interface SVGIconProps {
  size: number;
  colorPrimary?: string;
  colorSecondary?: string
}


export const PendingIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g id="Group_13" transform="translate(-622.5 -937.459)">
        <g id="Ellipse_96" transform="translate(622.5 937.459)" fill="#fab9ad" stroke="#c63c3c" strokeLinecap="round" strokeWidth="1.5">
          <circle cx="9" cy="9" r="9" stroke="none" />
          <circle cx="9" cy="9" r="8.25" fill="none" />
        </g>
        <circle id="Ellipse_97" cx="5" cy="5" r="5" transform="translate(626.5 941.459)" fill="#fff" />
        <rect id="Rectangle_557" width="1.5" height="4.5" rx="0.75" transform="translate(630.75 943.209)" fill="#b53923" />
        <rect id="Rectangle_558" width="1.5" height="1.5" rx="0.75" transform="translate(630.75 948.209)" fill="#b53923" />
      </g>
    </svg>

  );
};

export const ConfirmedIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g id="Group_12" transform="translate(-645.5 -937.459)">
        <g id="Ellipse_98" transform="translate(645.5 937.459)" fill="#d0adff" stroke="#7631d3" strokeLinecap="round" strokeWidth="1">
          <circle cx="9" cy="9" r="9" stroke="none" />
          <circle cx="9" cy="9" r="8.5" fill="none" />
        </g>
        <g id="Ellipse_99" transform="translate(648.5 940.459)" fill="#fff" stroke="#7631d3" strokeLinecap="round" strokeWidth="1.5">
          <circle cx="6" cy="6" r="6" stroke="none" />
          <circle cx="6" cy="6" r="5.25" fill="none" />
        </g>
      </g>
    </svg>

  );
};

export const ReadyForShipIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g id="Group_11" transform="translate(-668.5 -937.459)">
        <g id="Ellipse_100" transform="translate(668.5 937.459)" fill="#ffe7cb" stroke="#e27900" strokeLinecap="round" strokeWidth="1">
          <circle cx="9" cy="9" r="9" stroke="none" />
          <circle cx="9" cy="9" r="8.5" fill="none" />
        </g>
        <circle id="Ellipse_101" cx="6" cy="6" r="6" transform="translate(671.5 940.459)" fill="#e27900" />
        <path id="Icon_open-box" d="M.438.066l-.475.7H6.026L5.5.066ZM-.037,1.524v3.74a8.174,8.174,0,0,0,.812.808h4.44a8.089,8.089,0,0,0,.8-.808V1.524H3.767v.781H2.229V1.524H-.045Z" transform="translate(674.51 943.39)" fill="#fff" />
      </g>
    </svg>
  );
};

export const ShippedIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g id="Group_9" transform="translate(-690.5 -937.459)">
        <g id="Ellipse_102" transform="translate(690.5 937.459)" fill="#b2e4ff" stroke="#0980fd" strokeLinecap="round" strokeWidth="1">
          <circle cx="9" cy="9" r="9" stroke="none" />
          <circle cx="9" cy="9" r="8.5" fill="none" />
        </g>
        <circle id="Ellipse_103" cx="6" cy="6" r="6" transform="translate(693.5 940.459)" fill="#0980fd" />
        <path id="Icon_ionic-ios-arrow-round-forward" d="M11.551,11.325a.262.262,0,0,0,0,.368l1.217,1.219H8.133a.26.26,0,0,0,0,.521h4.631l-1.217,1.219a.263.263,0,0,0,0,.368.259.259,0,0,0,.366,0l1.65-1.662h0a.292.292,0,0,0,.054-.082.248.248,0,0,0,.02-.1.261.261,0,0,0-.074-.182l-1.65-1.662A.255.255,0,0,0,11.551,11.325Z" transform="translate(682.313 945.039) rotate(-45)" fill="#fff" stroke="#fff" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

export const DeliveredIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g id="Group_10" transform="translate(-690.5 -937.459)">
        <g id="Ellipse_102" transform="translate(690.5 937.459)" fill="#D1F0E0" stroke="#2ba362" strokeLinecap="round" strokeWidth="1">
          <circle cx="9" cy="9" r="9" stroke="none" />
          <circle cx="9" cy="9" r="8.5" fill="none" />
        </g>
        <circle id="Ellipse_103" cx="6" cy="6" r="6" transform="translate(693.5 940.459)" fill="#2ba362" />
        <path id="Icon_awesome-check" d="M1.952,8.778.084,6.911a.287.287,0,0,1,0-.406L.491,6.1A.287.287,0,0,1,.9,6.1L2.155,7.356,4.85,4.661a.287.287,0,0,1,.406,0l.406.406a.287.287,0,0,1,0,.406l-3.3,3.3A.287.287,0,0,1,1.952,8.778Z" transform="translate(696.627 939.739)" fill="#fff" />
      </g>
    </svg>
  );
};

export const RetunredIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g id="Group_15" transform="translate(-622.5 -937.459)">
        <g id="Ellipse_96" transform="translate(622.5 937.459)" fill="#80faff" stroke="#00a3aa" strokeLinecap="round" strokeWidth="1">
          <circle cx="9" cy="9" r="9" stroke="none" />
          <circle cx="9" cy="9" r="8.5" fill="none" />
        </g>
        <circle id="Ellipse_97" data-name="Ellipse 97" cx="6" cy="6" r="6" transform="translate(625.5 940.459)" fill="#00a3aa" />
        <path id="Icon_ionic-md-undo" data-name="Icon ionic-md-undo" d="M5.941,11.523a3.66,3.66,0,0,0-2.415.91l-.886-.724-.39.135v2.442H4.8l.145-.421-.794-.809A2.8,2.8,0,0,1,8.6,14.285l.83-.237A3.681,3.681,0,0,0,5.941,11.523Z" transform="translate(622.038 935.939) rotate(-19)" fill="#fff" />
      </g>
    </svg>
  );
};

export const CancelledIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18">
      <g id="Group_14" transform="translate(-622.5 -937.459)">
        <g id="Ellipse_96" transform="translate(622.5 937.459)" fill="#fab9ad" stroke="#c63c3c" strokeLinecap="round" strokeWidth="1">
          <circle cx="9" cy="9" r="9" stroke="none" />
          <circle cx="9" cy="9" r="8.5" fill="none" />
        </g>
        <circle id="Ellipse_97" data-name="Ellipse 97" cx="6" cy="6" r="6" transform="translate(625.5 940.459)" fill="#c63c3c" />
        <path id="Icon_metro-cross" data-name="Icon metro-cross" d="M7.614,6.017h0L6.07,4.473,7.614,2.929h0a.159.159,0,0,0,0-.225l-.729-.729a.159.159,0,0,0-.225,0h0L5.116,3.519,3.572,1.975h0a.159.159,0,0,0-.225,0L2.617,2.7a.159.159,0,0,0,0,.225h0L4.161,4.473,2.617,6.017h0a.159.159,0,0,0,0,.225l.729.729a.159.159,0,0,0,.225,0h0L5.116,5.427,6.66,6.971h0a.159.159,0,0,0,.225,0l.729-.729a.159.159,0,0,0,0-.225Z" transform="translate(626.413 941.986)" fill="#fff" />
      </g>
    </svg>
  );
};

export const MovingTextIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="Group_19" transform="translate(-1349 -845)">
        <rect id="Rectangle_562" width="24" height="24" rx="6" transform="translate(1349 845)" fill="#e0e0e0" />
        <g id="Rectangle_563" transform="translate(1350 853)" fill="#fff" stroke="#141414" strokeWidth="1">
          <path d="M4.5,0H23a0,0,0,0,1,0,0V9a0,0,0,0,1,0,0H4.5A4.5,4.5,0,0,1,0,4.5v0A4.5,4.5,0,0,1,4.5,0Z" stroke="none" />
          <path d="M4.5.5h18a0,0,0,0,1,0,0v8a0,0,0,0,1,0,0H4.5a4,4,0,0,1-4-4v0A4,4,0,0,1,4.5.5Z" fill="none" />
        </g>
        <rect id="Rectangle_564" width="9" height="3" rx="1.5" transform="translate(1353 856)" fill="#141414" />
        <path id="Rectangle_566" d="M1.5,0H10a0,0,0,0,1,0,0V3a0,0,0,0,1,0,0H1.5A1.5,1.5,0,0,1,0,1.5v0A1.5,1.5,0,0,1,1.5,0Z" transform="translate(1363 856)" fill="#141414" />
      </g>
    </svg>
  );
};

export const TextBlockIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="Group_20" transform="translate(-1349 -845)">
        <rect id="Rectangle_562" width="24" height="24" rx="6" transform="translate(1349 845)" fill="#a7a7a7" />
        <rect id="Rectangle_564" width="6" height="2" rx="1" transform="translate(1353 856)" fill="#fff" />
        <rect id="Rectangle_565" width="10" height="2" rx="1" transform="translate(1353 861)" fill="#fff" />
        <rect id="Rectangle_566" width="16" height="3" rx="1.5" transform="translate(1353 851)" fill="#fff" />
        <rect id="Rectangle_567" width="9" height="2" rx="1" transform="translate(1360 856)" fill="#fff" />
      </g>
    </svg>
  );
};

export const ProductDisplayIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="Group_21" transform="translate(-1349 -845)">
        <rect id="Rectangle_562" width="24" height="24" rx="6" transform="translate(1349 845)" fill="#a7a7a7" />
        <rect id="Rectangle_568" width="6" height="2" rx="1" transform="translate(1354 862.5)" fill="#fff" />
        <rect id="Rectangle_569" width="3" height="2" rx="1" transform="translate(1361 862.5)" fill="#fff" />
        <rect id="Rectangle_570" width="16" height="10" rx="2" transform="translate(1353 849)" fill="#fff" />
      </g>
    </svg>
  );
};

export const ColumnsIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="Group_22" transform="translate(-1349 -845)">
        <rect id="Rectangle_562" width="24" height="24" rx="6" transform="translate(1349 845)" fill="none" />
        <rect id="Rectangle_570" width="7" height="20" rx="2" transform="translate(1349 847)" fill="#a7a7a7" />
        <rect id="Rectangle_571" width="8" height="20" rx="2" transform="translate(1357 847)" fill="#a7a7a7" />
        <rect id="Rectangle_572" width="7" height="20" rx="2" transform="translate(1366 847)" fill="#a7a7a7" />
      </g>
    </svg>
  );
};

export const HeroIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="Group_23" transform="translate(-1349 -845)">
        <rect id="Rectangle_562" width="24" height="24" rx="6" transform="translate(1349 845)" fill="#a7a7a7" />
        <path id="Icon_awesome-image" d="M17.446,18.938H1.8a1.8,1.8,0,0,1-1.8-1.8V6.3A1.8,1.8,0,0,1,1.8,4.5H17.446a1.8,1.8,0,0,1,1.8,1.8V17.133A1.8,1.8,0,0,1,17.446,18.938ZM4.211,6.606A2.106,2.106,0,1,0,6.317,8.711,2.106,2.106,0,0,0,4.211,6.606Zm-1.8,9.926H16.844V12.32l-3.29-3.29a.451.451,0,0,0-.638,0l-5.1,5.1L5.733,12.038a.451.451,0,0,0-.638,0L2.406,14.727Z" transform="translate(1351.375 845.281)" fill="#fff" />
      </g>
    </svg>
  );
};

export const HeaderIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="Group_24" transform="translate(-1349 -845)">
        <path id="Path_42" d="M6,0H18a6,6,0,0,1,6,6V18a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" transform="translate(1349 845)" fill="#fff" />
        <rect id="Rectangle_573" width="24" height="8" rx="1" transform="translate(1349 855)" fill="#888" />
        <rect id="Rectangle_574" width="4" height="4" rx="2" transform="translate(1351 857)" fill="#fff" />
        <rect id="Rectangle_575" width="13" height="2" rx="1" transform="translate(1358 858)" fill="#fff" />
      </g>
    </svg>
  );
};

export const CardsWidgetIcon: React.FC<SVGIconProps> = ({ colorPrimary, colorSecondary, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g id="Group_49" data-name="Group 49" transform="translate(-1349 -845)">
        <path id="Path_94" data-name="Path 94" d="M6,0H18a6,6,0,0,1,6,6V18a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" transform="translate(1349 845)" fill="#fff" />
        <rect id="Rectangle_562" data-name="Rectangle 562" width="11" height="15.5" rx="2" transform="translate(1349 847)" fill="#8d8d8d" />
        <rect id="Rectangle_568" data-name="Rectangle 568" width="5" height="2" rx="1" transform="translate(1351 858.5)" fill="#fff" />
        <rect id="Rectangle_570" data-name="Rectangle 570" width="7" height="8" rx="1" transform="translate(1351 849)" fill="#fff" />
        <rect id="Rectangle_656" data-name="Rectangle 656" width="11" height="15.5" rx="2" transform="translate(1362 851.5)" fill="#8d8d8d" />
        <rect id="Rectangle_657" data-name="Rectangle 657" width="5" height="2" rx="1" transform="translate(1364 863)" fill="#fff" />
        <rect id="Rectangle_658" data-name="Rectangle 658" width="7" height="8" rx="1" transform="translate(1364 853.5)" fill="#fff" />
      </g>
    </svg>
  );
};

