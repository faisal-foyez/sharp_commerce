const SocialButtonPlatform = {
  "Facebook":"Facebook",
  "Apple":"Apple",
  "Google":"Google",
  "Linkedin":"Linkedin",
  "Microsoft":"Microsoft",
  "X":"X",
  "Github":"Github"
}

const SocialButtonSize = {
  "md":"md",
  "lg":"lg"
}

const SocialButtonTheme = {
  "brand":"brand",
  "gray":"gray",
  "light":"light",
}


const frozenSocialButtonPlatform = Object.freeze(SocialButtonPlatform);
const frozenSocialButtonSize = Object.freeze(SocialButtonSize);
const frozenSocialButtonTheme = Object.freeze(SocialButtonTheme);

export {
  frozenSocialButtonPlatform as SocialButtonPlatform,
  frozenSocialButtonSize as SocialButtonSize,
  frozenSocialButtonTheme as SocialButtonTheme
}