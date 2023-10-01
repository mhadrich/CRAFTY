import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Path, Svg } from "react-native-svg";
import { fireBaseAuth } from "../../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const auth = fireBaseAuth;
  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      alert("login failed ")
    }
  };
  return (
    <View>
    <Svg className="absolute mt-12 w-full justify-stretch items-stretch"
            width="375"
            height="188"
            viewBox="0 0 375 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M12.1809 151.716C3.2474 151.716 -3.98746 149.46 -9.52369 144.948C-14.9341 140.561 -18.8976 134.859 -21.414 127.84C-23.8047 120.821 -25 113.489 -25 105.844C-25 95.9427 -23.4901 85.9787 -20.4703 75.952C-17.4506 65.9253 -13.3613 56.4 -8.20255 47.376C-2.91795 38.2267 3.05867 30.1427 9.72732 23.124C16.396 15.98 23.3792 10.4027 30.677 6.392C38.1005 2.256 45.3983 0.187998 52.5703 0.187998C57.729 0.187998 61.8812 1.44133 65.0268 3.94799C68.2982 6.32933 69.9339 10.4653 69.9339 16.356C69.9339 19.9907 69.3048 24.1267 68.0466 28.764C66.7883 33.276 65.0897 37.6627 62.9507 41.924C60.8117 46.06 58.4211 49.5067 55.7788 52.264C53.2623 55.0213 50.6829 56.4 48.0406 56.4C47.034 56.4 45.9645 56.0867 44.8321 55.46C43.8255 54.8333 42.9448 53.7053 42.1898 52.076C44.0772 49.9453 46.1533 47.3133 48.4181 44.18C50.8087 40.9213 53.0736 37.5373 55.2126 34.028C57.3516 30.3933 59.0502 26.884 60.3084 23.5C61.6925 19.9907 62.3845 16.92 62.3845 14.288C62.3845 11.7813 61.6296 9.776 60.1197 8.27199C58.7356 6.64267 56.4079 5.828 53.1365 5.828C47.7261 5.828 42.064 8.02133 36.1503 12.408C30.3624 16.7947 24.7003 22.6853 19.1641 30.08C13.7537 37.3493 8.84656 45.496 4.44273 54.52C0.0389023 63.544 -3.48416 72.756 -6.12646 82.156C-8.64293 91.556 -9.90117 100.517 -9.90117 109.04C-9.90117 115.181 -9.0204 121.072 -7.25887 126.712C-5.49734 132.227 -2.66631 136.676 1.23423 140.06C5.26058 143.569 10.4193 145.324 16.7105 145.324C23.3792 145.324 29.9849 143.444 36.5278 139.684C43.1964 135.924 49.2989 130.973 54.8351 124.832C60.3713 118.691 64.7752 112.048 68.0466 104.904L70.6889 106.784C66.5367 114.931 61.5037 122.451 55.59 129.344C49.6763 136.112 43.0706 141.501 35.7728 145.512C28.475 149.648 20.6111 151.716 12.1809 151.716Z"
              fill="#8C633F"
              opacity="0.02"
            />
            <Path
              d="M96.7609 140.248C92.4829 140.248 89.0856 139.12 86.5692 136.864C84.1785 134.608 82.9832 131.663 82.9832 128.028C82.9832 124.268 83.864 120.32 85.6255 116.184C87.387 112.048 89.0857 107.975 90.7214 103.964C92.4829 99.828 93.3637 96.1307 93.3637 92.872C93.3637 88.8613 92.1683 85.916 89.7777 84.036C87.5129 82.0307 85.1851 80.2133 82.7945 78.584C79.9005 85.9787 76.8808 92.9973 73.7352 99.64C70.5896 106.283 68.0102 111.296 65.997 114.68L64.2984 111.484C66.0599 108.225 68.3248 103.463 71.0929 97.196C73.9868 90.9293 76.8179 83.7853 79.586 75.764C78.3277 74.5107 77.6986 73.0067 77.6986 71.252C77.6986 67.492 78.7681 64.4213 80.9071 62.04C83.0461 59.6587 84.6189 58.468 85.6255 58.468C87.0096 58.468 87.7645 59.0947 87.8903 60.348C88.142 61.476 88.2678 62.3533 88.2678 62.98C88.2678 63.6067 87.8903 64.86 87.1354 66.74C86.5063 68.4947 86.1917 69.56 86.1917 69.936C86.1917 71.6907 87.1354 73.32 89.0227 74.824C91.0359 76.2027 93.3008 77.832 95.8172 79.712C98.3337 81.4667 100.536 83.66 102.423 86.292C104.436 88.7987 105.443 92.0573 105.443 96.068C105.443 99.828 104.625 103.651 102.989 107.536C101.479 111.421 99.9065 115.119 98.2708 118.628C96.7609 122.137 96.006 125.208 96.006 127.84C96.006 130.096 96.5722 131.6 97.7046 132.352C98.837 133.104 100.158 133.48 101.668 133.48C104.688 133.48 107.77 132.54 110.916 130.66C114.187 128.78 117.333 126.399 120.353 123.516C123.373 120.633 126.078 117.625 128.468 114.492C130.859 111.233 132.621 108.225 133.753 105.468L136.207 107.348C133.816 112.612 130.545 117.813 126.392 122.952C122.24 127.965 117.585 132.101 112.426 135.36C107.393 138.619 102.171 140.248 96.7609 140.248Z"
              fill="#8C633F"
              opacity="0.02"
            />
            <Path
              d="M138.784 144.196C134.883 144.196 131.612 142.88 128.97 140.248C126.202 137.741 124.818 133.856 124.818 128.592C124.818 124.08 125.824 119.255 127.837 114.116C129.851 108.852 132.619 103.713 136.142 98.7C139.665 93.5613 143.628 88.924 148.032 84.788C152.562 80.5267 157.28 77.1427 162.187 74.636C167.22 72.1293 172.19 70.876 177.097 70.876C182.004 70.876 186.094 72.192 189.365 74.824C192.637 77.3307 194.272 80.7147 194.272 84.976C194.272 88.1093 193.391 90.24 191.63 91.368C189.994 92.496 187.792 93.06 185.024 93.06C185.276 92.0573 185.465 90.992 185.59 89.864C185.842 88.6107 185.968 87.4827 185.968 86.48C185.968 83.5973 185.276 81.1533 183.892 79.148C182.508 77.0173 180.117 75.952 176.72 75.952C173.197 75.952 169.611 77.2053 165.962 79.712C162.313 82.0933 158.79 85.352 155.393 89.488C151.995 93.4987 148.976 97.8853 146.333 102.648C143.691 107.411 141.615 112.111 140.105 116.748C138.595 121.385 137.84 125.521 137.84 129.156C137.84 134.044 139.539 136.488 142.936 136.488C145.83 136.488 148.976 135.172 152.373 132.54C155.77 129.783 159.23 126.336 162.753 122.2C166.402 117.939 169.862 113.552 173.134 109.04C176.405 104.528 179.299 100.392 181.816 96.632C182.319 95.88 182.634 95.504 182.759 95.504C183.514 95.6293 184.458 95.88 185.59 96.256C186.849 96.632 187.918 97.1333 188.799 97.76C189.68 98.3867 190.12 99.2013 190.12 100.204C190.12 101.332 189.554 102.899 188.421 104.904C187.289 106.784 186.031 108.977 184.647 111.484C183.263 113.991 182.004 116.56 180.872 119.192C179.74 121.699 179.173 124.08 179.173 126.336C179.173 128.216 179.677 130.096 180.683 131.976C181.69 133.731 183.326 134.608 185.59 134.608C188.988 134.608 193.454 132.164 198.991 127.276C204.527 122.263 210.126 114.805 215.788 104.904L217.675 106.784C215.033 113.552 211.636 119.505 207.484 124.644C203.332 129.783 198.865 133.793 194.083 136.676C189.428 139.559 184.835 141 180.306 141C175.65 141 172.19 139.621 169.925 136.864C167.786 134.107 166.717 131.099 166.717 127.84C166.717 127.088 166.78 126.273 166.906 125.396C167.031 124.393 167.157 123.391 167.283 122.388C161.873 129.657 156.903 135.109 152.373 138.744C147.969 142.379 143.439 144.196 138.784 144.196Z"
              fill="#8C633F"
              opacity="0.02"
            />
            <Path
              d="M209.474 188C208.216 188 206.769 187.561 205.133 186.684C203.498 185.932 202.114 184.365 200.981 181.984C199.723 179.603 199.094 176.093 199.094 171.456C199.094 165.941 200.038 158.735 201.925 149.836C203.812 141.063 206.392 131.349 209.663 120.696C212.934 110.043 216.709 99.1387 220.987 87.984C225.265 76.704 229.858 65.8627 234.765 55.46C239.798 44.932 244.894 35.532 250.052 27.26C255.337 18.8627 260.496 12.22 265.529 7.33199C270.562 2.444 275.343 0 279.873 0C282.515 0 284.214 0.814667 284.968 2.444C285.849 4.07334 286.29 6.016 286.29 8.27199C286.29 13.6613 284.78 19.552 281.76 25.944C278.866 32.336 274.965 38.7907 270.058 45.308C265.151 51.7 259.741 57.8413 253.827 63.732C247.913 69.4973 241.937 74.448 235.897 78.584C235.268 80.088 234.639 81.6547 234.01 83.284C233.507 84.788 232.94 86.3547 232.311 87.984C233.695 88.2347 234.765 88.9867 235.52 90.24C236.401 91.368 236.904 92.6213 237.03 94C237.91 99.64 238.854 104.716 239.861 109.228C240.867 113.615 242.377 117.061 244.39 119.568C246.529 122.075 249.549 123.328 253.45 123.328C257.853 123.328 261.565 121.761 264.585 118.628C267.605 115.369 270.876 110.795 274.399 104.904L277.23 106.784C274.085 114.304 270.058 119.756 265.151 123.14C260.37 126.524 256.155 128.216 252.506 128.216C250.241 128.216 247.85 127.652 245.334 126.524C242.943 125.396 240.679 123.892 238.54 122.012C238.54 129.908 237.659 137.741 235.897 145.512C234.262 153.283 232.06 160.364 229.292 166.756C226.523 173.148 223.441 178.287 220.043 182.172C216.646 186.057 213.123 188 209.474 188ZM214.381 178.976C215.765 178.976 217.338 177.723 219.1 175.216C220.861 172.709 222.56 169.388 224.196 165.252C225.957 161.241 227.53 156.792 228.914 151.904C230.298 147.016 231.431 142.128 232.311 137.24C233.192 132.352 233.632 127.965 233.632 124.08C233.632 120.195 233.129 116.685 232.123 113.552C231.116 110.293 229.48 106.471 227.215 102.084C224.07 111.484 221.239 120.571 218.722 129.344C216.206 138.117 214.256 146.013 212.872 153.032C211.487 160.051 210.795 165.691 210.795 169.952C210.795 175.968 211.991 178.976 214.381 178.976ZM238.917 70.876C247.096 63.356 254.142 55.836 260.055 48.316C266.095 40.6707 270.75 33.9027 274.022 28.012C277.293 21.996 278.929 17.7347 278.929 15.228C278.929 13.4733 278.048 12.596 276.287 12.596C273.015 12.596 269.303 15.2907 265.151 20.68C260.999 25.944 256.658 32.9627 252.128 41.736C247.599 50.5093 243.195 60.2227 238.917 70.876Z"
              fill="#8C633F"
              opacity="0.02"
            />
            <Path
              d="M286.766 144.008C281.355 144.008 277.203 142.441 274.309 139.308C271.415 136.175 269.968 131.537 269.968 125.396C269.968 119.881 270.975 113.113 272.988 105.092C275.127 96.9453 277.769 88.6107 280.915 80.088C279.657 79.8373 278.462 79.6493 277.329 79.524C276.197 79.2733 275.127 78.96 274.121 78.584V75.2C275.127 75.3253 276.323 75.4507 277.707 75.576C279.091 75.7013 280.663 75.8267 282.425 75.952C285.067 69.184 287.898 62.6667 290.918 56.4C293.938 50.008 296.895 44.368 299.789 39.48C302.808 34.4667 305.639 30.5187 308.282 27.636C311.05 24.628 313.378 23.124 315.265 23.124C316.272 23.124 317.152 23.5 317.907 24.252C318.788 24.8787 319.228 25.8813 319.228 27.26C319.228 29.3907 317.907 32.9 315.265 37.788C312.623 42.5507 309.351 48.2533 305.451 54.896C301.55 61.5387 297.775 68.7453 294.127 76.516C295.259 76.516 296.391 76.516 297.524 76.516C298.782 76.516 299.977 76.516 301.11 76.516C305.262 76.516 309.603 76.4533 314.133 76.328C318.788 76.2027 323.443 75.8893 328.099 75.388V78.772C321.179 79.524 314.95 80.088 309.414 80.464C304.004 80.84 299.159 81.028 294.882 81.028C294.378 81.028 293.875 81.028 293.372 81.028C292.994 81.028 292.554 81.028 292.05 81.028C289.156 87.6707 286.703 94.5013 284.69 101.52C282.677 108.539 281.67 115.369 281.67 122.012C281.67 127.401 282.488 131.287 284.124 133.668C285.759 135.924 288.464 137.052 292.239 137.052C298.782 137.052 305.199 134.169 311.49 128.404C317.781 122.639 323.318 114.805 328.099 104.904L330.552 106.784C327.533 113.803 323.695 120.132 319.04 125.772C314.51 131.412 309.477 135.861 303.941 139.12C298.405 142.379 292.68 144.008 286.766 144.008Z"
              fill="#8C633F"
              opacity="0.02"
            />
            <Path
              d="M332.658 188C329.512 188 326.744 187.123 324.354 185.368C321.963 183.739 320.768 181.295 320.768 178.036C320.768 174.025 321.774 170.453 323.788 167.32C325.801 164.187 328.506 161.304 331.903 158.672C335.3 156.04 339.201 153.533 343.605 151.152C348.009 148.771 352.601 146.389 357.382 144.008C359.144 139.371 360.905 134.232 362.667 128.592C364.554 122.827 366.316 116.497 367.952 109.604C363.925 116.121 359.584 121.761 354.929 126.524C350.399 131.161 345.555 133.48 340.396 133.48C338.006 133.48 335.615 132.979 333.224 131.976C330.959 130.848 329.072 129.156 327.562 126.9C326.052 124.644 325.297 121.761 325.297 118.252C325.297 114.743 325.864 110.669 326.996 106.032C328.254 101.395 329.764 96.8827 331.526 92.496C333.287 88.1093 335.112 84.4747 336.999 81.592C338.886 78.7093 340.522 77.268 341.906 77.268C342.409 77.268 343.29 77.456 344.548 77.832C345.932 78.208 347.191 78.772 348.323 79.524C349.581 80.1507 350.21 80.84 350.21 81.592C349.078 83.2213 347.82 85.54 346.436 88.548C345.052 91.556 343.668 94.94 342.284 98.7C341.025 102.335 339.956 105.907 339.075 109.416C338.194 112.925 337.754 115.933 337.754 118.44C337.754 120.696 338.257 122.513 339.264 123.892C340.27 125.271 342.032 125.96 344.548 125.96C346.939 125.96 349.581 124.832 352.475 122.576C355.495 120.195 358.452 117.187 361.346 113.552C364.366 109.917 367.134 106.032 369.65 101.896C370.028 100.517 370.342 99.1387 370.594 97.76C370.971 96.256 371.286 94.752 371.538 93.248C371.915 91.4933 372.796 89.488 374.18 87.232C375.69 84.8507 378.017 83.66 381.163 83.66C381.792 83.66 382.421 83.7227 383.05 83.848C383.68 83.848 384.372 83.9733 385.126 84.224C385.126 86.2293 384.497 89.9893 383.239 95.504C382.107 100.893 380.408 107.223 378.143 114.492C376.004 121.761 373.425 129.219 370.405 136.864C376.319 134.608 382.107 130.911 387.769 125.772C393.431 120.508 398.023 113.552 401.546 104.904L404 106.784C402.113 112.8 399.219 118.064 395.318 122.576C391.543 126.963 387.265 130.785 382.484 134.044C377.703 137.177 372.985 139.809 368.329 141.94C365.058 149.961 361.472 157.481 357.571 164.5C353.796 171.519 349.77 177.159 345.492 181.42C341.34 185.807 337.062 188 332.658 188ZM331.714 181.984C333.602 181.984 336.747 179.477 341.151 174.464C345.681 169.576 350.462 160.928 355.495 148.52C350.336 151.277 345.555 153.972 341.151 156.604C336.747 159.361 333.224 162.307 330.582 165.44C327.94 168.573 326.619 172.208 326.619 176.344C326.619 177.347 326.996 178.537 327.751 179.916C328.506 181.295 329.827 181.984 331.714 181.984Z"
              fill="#8C633F"
              opacity="0.02"
            />
            <Path
              d="M133.14 112.22C130.3 112.22 128 111.5 126.24 110.06C124.52 108.66 123.26 106.84 122.46 104.6C121.7 102.36 121.32 100.02 121.32 97.58C121.32 94.42 121.8 91.2401 122.76 88.0401C123.72 84.84 125.02 81.8 126.66 78.92C128.34 76 130.24 73.4201 132.36 71.1801C134.48 68.9 136.7 67.12 139.02 65.84C141.38 64.52 143.7 63.86 145.98 63.86C147.62 63.86 148.94 64.26 149.94 65.06C150.98 65.82 151.5 67.14 151.5 69.02C151.5 70.18 151.3 71.5 150.9 72.98C150.5 74.42 149.96 75.8201 149.28 77.1801C148.6 78.5001 147.84 79.6 147 80.48C146.2 81.36 145.38 81.8 144.54 81.8C144.22 81.8 143.88 81.7 143.52 81.5C143.2 81.3 142.92 80.94 142.68 80.42C143.28 79.74 143.94 78.9001 144.66 77.9001C145.42 76.86 146.14 75.78 146.82 74.66C147.5 73.5 148.04 72.3801 148.44 71.3C148.88 70.18 149.1 69.2 149.1 68.36C149.1 67.56 148.86 66.92 148.38 66.44C147.94 65.92 147.2 65.6601 146.16 65.6601C144.44 65.6601 142.64 66.36 140.76 67.76C138.92 69.16 137.12 71.04 135.36 73.4001C133.64 75.72 132.08 78.32 130.68 81.2001C129.28 84.0801 128.16 87.0201 127.32 90.0201C126.52 93.0201 126.12 95.88 126.12 98.6C126.12 100.56 126.4 102.44 126.96 104.24C127.52 106 128.42 107.42 129.66 108.5C130.94 109.62 132.58 110.18 134.58 110.18C136.7 110.18 138.8 109.58 140.88 108.38C143 107.18 144.94 105.6 146.7 103.64C148.46 101.68 149.86 99.56 150.9 97.28L151.74 97.8801C150.42 100.48 148.82 102.88 146.94 105.08C145.06 107.24 142.96 108.96 140.64 110.24C138.32 111.56 135.82 112.22 133.14 112.22Z"
              fill="#8C633F"
            />
            <Path
              d="M160.029 108.56C158.669 108.56 157.589 108.2 156.789 107.48C156.029 106.76 155.649 105.82 155.649 104.66C155.649 103.46 155.929 102.2 156.489 100.88C157.049 99.5601 157.589 98.26 158.109 96.98C158.669 95.66 158.949 94.48 158.949 93.44C158.949 92.16 158.569 91.22 157.809 90.62C157.089 89.98 156.349 89.4 155.589 88.88C154.669 91.24 153.709 93.48 152.709 95.6C151.709 97.72 150.889 99.32 150.249 100.4L149.709 99.3801C150.269 98.3401 150.989 96.82 151.869 94.82C152.789 92.82 153.689 90.54 154.569 87.98C154.169 87.58 153.969 87.1 153.969 86.54C153.969 85.34 154.309 84.36 154.989 83.6C155.669 82.84 156.169 82.46 156.489 82.46C156.929 82.46 157.169 82.6601 157.209 83.0601C157.289 83.4201 157.329 83.7001 157.329 83.9001C157.329 84.1001 157.209 84.5 156.969 85.1C156.769 85.66 156.669 86 156.669 86.12C156.669 86.68 156.969 87.2001 157.569 87.68C158.209 88.1201 158.929 88.64 159.729 89.24C160.529 89.8 161.229 90.5 161.829 91.34C162.469 92.14 162.789 93.18 162.789 94.46C162.789 95.66 162.529 96.88 162.009 98.12C161.529 99.36 161.029 100.54 160.509 101.66C160.029 102.78 159.789 103.76 159.789 104.6C159.789 105.32 159.969 105.8 160.329 106.04C160.689 106.28 161.109 106.4 161.589 106.4C162.549 106.4 163.529 106.1 164.529 105.5C165.569 104.9 166.569 104.14 167.529 103.22C168.489 102.3 169.349 101.34 170.109 100.34C170.869 99.3 171.429 98.34 171.789 97.46L172.569 98.0601C171.809 99.7401 170.769 101.4 169.449 103.04C168.129 104.64 166.649 105.96 165.009 107C163.409 108.04 161.749 108.56 160.029 108.56Z"
              fill="#8C633F"
            />
            <Path
              d="M173.388 109.82C172.148 109.82 171.108 109.4 170.268 108.56C169.388 107.76 168.948 106.52 168.948 104.84C168.948 103.4 169.268 101.86 169.908 100.22C170.548 98.5401 171.428 96.9 172.548 95.3C173.668 93.66 174.928 92.18 176.328 90.86C177.768 89.5 179.268 88.42 180.828 87.62C182.428 86.82 184.008 86.42 185.568 86.42C187.128 86.42 188.428 86.84 189.468 87.68C190.508 88.4801 191.028 89.56 191.028 90.92C191.028 91.92 190.748 92.6 190.188 92.96C189.668 93.32 188.968 93.5 188.088 93.5C188.168 93.18 188.228 92.84 188.268 92.48C188.348 92.08 188.388 91.72 188.388 91.4C188.388 90.48 188.168 89.7 187.728 89.06C187.288 88.38 186.528 88.0401 185.448 88.0401C184.328 88.0401 183.188 88.44 182.028 89.24C180.868 90 179.748 91.0401 178.668 92.3601C177.588 93.6401 176.628 95.04 175.788 96.56C174.948 98.08 174.288 99.5801 173.808 101.06C173.328 102.54 173.088 103.86 173.088 105.02C173.088 106.58 173.628 107.36 174.708 107.36C175.628 107.36 176.628 106.94 177.708 106.1C178.788 105.22 179.888 104.12 181.008 102.8C182.168 101.44 183.268 100.04 184.308 98.6C185.348 97.16 186.268 95.84 187.068 94.64C187.228 94.4 187.328 94.28 187.368 94.28C187.608 94.32 187.908 94.4 188.268 94.5201C188.668 94.64 189.008 94.8 189.288 95C189.568 95.2 189.708 95.46 189.708 95.78C189.708 96.14 189.528 96.64 189.168 97.28C188.808 97.88 188.408 98.5801 187.968 99.3801C187.528 100.18 187.128 101 186.768 101.84C186.408 102.64 186.228 103.4 186.228 104.12C186.228 104.72 186.388 105.32 186.708 105.92C187.028 106.48 187.548 106.76 188.268 106.76C189.348 106.76 190.768 105.98 192.528 104.42C194.288 102.82 196.068 100.44 197.868 97.28L198.468 97.8801C197.628 100.04 196.548 101.94 195.228 103.58C193.908 105.22 192.488 106.5 190.968 107.42C189.488 108.34 188.028 108.8 186.588 108.8C185.108 108.8 184.008 108.36 183.288 107.48C182.608 106.6 182.268 105.64 182.268 104.6C182.268 104.36 182.288 104.1 182.328 103.82C182.368 103.5 182.408 103.18 182.448 102.86C180.728 105.18 179.148 106.92 177.708 108.08C176.308 109.24 174.868 109.82 173.388 109.82Z"
              fill="#8C633F"
            />
            <Path
              d="M195.861 123.8C195.461 123.8 195.001 123.66 194.481 123.38C193.961 123.14 193.521 122.64 193.161 121.88C192.761 121.12 192.561 120 192.561 118.52C192.561 116.76 192.861 114.46 193.461 111.62C194.061 108.82 194.881 105.72 195.921 102.32C196.961 98.92 198.161 95.4401 199.521 91.8801C200.881 88.2801 202.341 84.82 203.901 81.5C205.501 78.14 207.121 75.14 208.761 72.5C210.441 69.82 212.081 67.7 213.681 66.14C215.281 64.58 216.801 63.8 218.241 63.8C219.081 63.8 219.621 64.06 219.861 64.58C220.141 65.1 220.281 65.72 220.281 66.44C220.281 68.16 219.801 70.04 218.841 72.08C217.921 74.12 216.681 76.18 215.121 78.26C213.561 80.3 211.841 82.26 209.961 84.14C208.081 85.98 206.181 87.56 204.261 88.88C204.061 89.36 203.861 89.8601 203.661 90.3801C203.501 90.8601 203.321 91.3601 203.121 91.8801C203.561 91.9601 203.901 92.2 204.141 92.6C204.421 92.96 204.581 93.36 204.621 93.8C204.901 95.6 205.201 97.22 205.521 98.66C205.841 100.06 206.321 101.16 206.961 101.96C207.641 102.76 208.601 103.16 209.841 103.16C211.241 103.16 212.421 102.66 213.381 101.66C214.341 100.62 215.381 99.16 216.501 97.28L217.401 97.8801C216.401 100.28 215.121 102.02 213.561 103.1C212.041 104.18 210.701 104.72 209.541 104.72C208.821 104.72 208.061 104.54 207.261 104.18C206.501 103.82 205.781 103.34 205.101 102.74C205.101 105.26 204.821 107.76 204.261 110.24C203.741 112.72 203.041 114.98 202.161 117.02C201.281 119.06 200.301 120.7 199.221 121.94C198.141 123.18 197.021 123.8 195.861 123.8ZM197.421 120.92C197.861 120.92 198.361 120.52 198.921 119.72C199.481 118.92 200.021 117.86 200.541 116.54C201.101 115.26 201.601 113.84 202.041 112.28C202.481 110.72 202.841 109.16 203.121 107.6C203.401 106.04 203.541 104.64 203.541 103.4C203.541 102.16 203.381 101.04 203.061 100.04C202.741 99.0001 202.221 97.7801 201.501 96.3801C200.501 99.3801 199.601 102.28 198.801 105.08C198.001 107.88 197.381 110.4 196.941 112.64C196.501 114.88 196.281 116.68 196.281 118.04C196.281 119.96 196.661 120.92 197.421 120.92ZM205.221 86.42C207.821 84.02 210.061 81.62 211.941 79.22C213.861 76.78 215.341 74.62 216.381 72.74C217.421 70.82 217.941 69.46 217.941 68.66C217.941 68.1 217.661 67.82 217.101 67.82C216.061 67.82 214.881 68.68 213.561 70.4001C212.241 72.08 210.861 74.32 209.421 77.12C207.981 79.92 206.581 83.02 205.221 86.42Z"
              fill="#8C633F"
            />
            <Path
              d="M220.432 109.76C218.712 109.76 217.392 109.26 216.472 108.26C215.552 107.26 215.092 105.78 215.092 103.82C215.092 102.06 215.412 99.9001 216.052 97.34C216.732 94.74 217.572 92.08 218.572 89.3601C218.172 89.2801 217.792 89.2201 217.432 89.18C217.072 89.1 216.732 89 216.412 88.88V87.8C216.732 87.84 217.112 87.88 217.552 87.92C217.992 87.96 218.492 88.0001 219.052 88.0401C219.892 85.8801 220.792 83.8 221.752 81.8C222.712 79.76 223.652 77.96 224.572 76.4C225.532 74.8 226.432 73.54 227.272 72.62C228.152 71.66 228.892 71.1801 229.492 71.1801C229.812 71.1801 230.092 71.3001 230.332 71.54C230.612 71.74 230.752 72.06 230.752 72.5C230.752 73.18 230.332 74.3 229.492 75.86C228.652 77.38 227.612 79.2 226.372 81.32C225.132 83.44 223.932 85.74 222.772 88.22C223.132 88.22 223.492 88.22 223.852 88.22C224.252 88.22 224.632 88.22 224.992 88.22C226.312 88.22 227.692 88.2 229.132 88.16C230.612 88.12 232.092 88.02 233.572 87.8601V88.94C231.372 89.18 229.392 89.36 227.632 89.48C225.912 89.6 224.372 89.66 223.012 89.66C222.852 89.66 222.692 89.66 222.532 89.66C222.412 89.66 222.272 89.66 222.112 89.66C221.192 91.78 220.412 93.9601 219.772 96.2001C219.132 98.4401 218.812 100.62 218.812 102.74C218.812 104.46 219.072 105.7 219.592 106.46C220.112 107.18 220.972 107.54 222.172 107.54C224.252 107.54 226.292 106.62 228.292 104.78C230.292 102.94 232.052 100.44 233.572 97.28L234.352 97.8801C233.392 100.12 232.172 102.14 230.692 103.94C229.252 105.74 227.652 107.16 225.892 108.2C224.132 109.24 222.312 109.76 220.432 109.76Z"
              fill="#8C633F"
            />
            <Path
              d="M235.021 123.8C234.021 123.8 233.141 123.52 232.381 122.96C231.621 122.44 231.241 121.66 231.241 120.62C231.241 119.34 231.561 118.2 232.201 117.2C232.841 116.2 233.701 115.28 234.781 114.44C235.861 113.6 237.101 112.8 238.501 112.04C239.901 111.28 241.361 110.52 242.881 109.76C243.441 108.28 244.001 106.64 244.561 104.84C245.161 103 245.721 100.98 246.241 98.78C244.961 100.86 243.581 102.66 242.101 104.18C240.661 105.66 239.121 106.4 237.481 106.4C236.721 106.4 235.961 106.24 235.201 105.92C234.481 105.56 233.881 105.02 233.401 104.3C232.921 103.58 232.681 102.66 232.681 101.54C232.681 100.42 232.861 99.12 233.221 97.64C233.621 96.16 234.101 94.72 234.661 93.32C235.221 91.92 235.801 90.76 236.401 89.84C237.001 88.92 237.521 88.46 237.961 88.46C238.121 88.46 238.401 88.52 238.801 88.64C239.241 88.76 239.641 88.9401 240.001 89.18C240.401 89.38 240.601 89.6 240.601 89.84C240.241 90.3601 239.841 91.1 239.401 92.06C238.961 93.02 238.521 94.1 238.081 95.3C237.681 96.46 237.341 97.6001 237.061 98.7201C236.781 99.8401 236.641 100.8 236.641 101.6C236.641 102.32 236.801 102.9 237.121 103.34C237.441 103.78 238.001 104 238.801 104C239.561 104 240.401 103.64 241.321 102.92C242.281 102.16 243.221 101.2 244.141 100.04C245.101 98.8801 245.981 97.64 246.781 96.32C246.901 95.88 247.001 95.44 247.081 95C247.201 94.52 247.301 94.0401 247.381 93.5601C247.501 93.0001 247.781 92.36 248.221 91.64C248.701 90.88 249.441 90.5 250.441 90.5C250.641 90.5 250.841 90.52 251.041 90.56C251.241 90.56 251.461 90.6 251.701 90.68C251.701 91.3201 251.501 92.52 251.101 94.28C250.741 96 250.201 98.02 249.481 100.34C248.801 102.66 247.981 105.04 247.021 107.48C248.901 106.76 250.741 105.58 252.541 103.94C254.341 102.26 255.801 100.04 256.921 97.28L257.701 97.8801C257.101 99.8001 256.181 101.48 254.941 102.92C253.741 104.32 252.381 105.54 250.861 106.58C249.341 107.58 247.841 108.42 246.361 109.1C245.321 111.66 244.181 114.06 242.941 116.3C241.741 118.54 240.461 120.34 239.101 121.7C237.781 123.1 236.421 123.8 235.021 123.8ZM234.721 121.88C235.321 121.88 236.321 121.08 237.721 119.48C239.161 117.92 240.681 115.16 242.281 111.2C240.641 112.08 239.121 112.94 237.721 113.78C236.321 114.66 235.201 115.6 234.361 116.6C233.521 117.6 233.101 118.76 233.101 120.08C233.101 120.4 233.221 120.78 233.461 121.22C233.701 121.66 234.121 121.88 234.721 121.88Z"
              fill="#8C633F"
            />
          </Svg>
    <View className="flex flex-col w-full mt-10 bg-[f9f9f9] items-center justify-center ">
      <View>
        <Text className="font-bold text-2xl mb-2">Login</Text>
     
      <TextInput
        className="mb-4 w-96 h-16 pl-3 bg-white rounded-md"
        placeholder="Email"
      />
      <TextInput
        className="mb-4 w-96 h-16 pl-3 bg-white rounded-md"
        placeholder="Password"
      />
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate("ForgetPassword")}>
      <Text className="ml-16"> Forgot your passeword ? </Text>
      
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
        onPress={()=>navigation.navigate("Home")}
      >
        <Text className="text-center text-white font-bold">Login</Text>
      </TouchableOpacity>

    </View>
    </View>
  );
}
