import config from "@/config/config";
import { ISocialMedia } from "@/config/type";

export const Footer = (): JSX.Element => (
  <footer
    className='mt-auto h-24  bg-current py-5 text-white'
    style={{ backgroundColor: config.UI.theme.palette.primary.main }}
  >
    <div className='flex h-auto flex-row justify-center p-3'>
      {config.socialMedia.map((item: ISocialMedia) => (
        <div className='h-12 w-12 px-3' key={item.name} style={{ color: "#000000" }}>
          {item.icon.large}
        </div>
      ))}
    </div>
  </footer>
);
