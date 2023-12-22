const size = {
  mobile: '480px',
  mobileSmall: '481px',
  tablets: '768px',
  tabletsSmall: '992px',
  desktop: '1200px',
  desktopSmall: '1920px',
  
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileSmall: `(min-width: ${size.mobileSmall})`,
  tablets: `(min-width: ${size.tablets})`,
  tabletsSmall: `(min-width: ${size.tabletsSmall})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopSmall: `(min-width: ${size.desktopSmall})`,
};
