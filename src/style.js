const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  bg: "flex justify-center h-screen xl:max-w-[900px] w-full p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500",
  container: "bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4",
  heading3: "text-3xl font-bold text-center text-gray-900 p-2",
  form: "flex justify-between",
  input: "border p-4 w-full text xl",
  button1: "border p-4 ml-2 bg-slate-500 text-slate-100",
  count: "text-center p-2",  

  li: "flex justify-between bg-slate-200 p-4 my-2 capitalize",
  liComplete: "flex justify-between bg-slate-400 p-4 my-2 capitalize",
  row: "flex",
  text: "ml-2 cursor-pointer",
  textComplete: "ml-2 cursor-pointer line-through",
  button: "cursor-pointer flex items-center"
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
