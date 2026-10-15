/*
  Conteúdo padrão da página Contact (usado enquanto nada foi publicado pelo painel).
  Canais: { label, value, href?, copy? } — `copy` mostra o botão "Copiar" (copia o `value`).
*/
const EMAIL = 'lucascartaaxo@gmail.com';

// TODO: troque pelo seu número com DDI + DDD, só dígitos (ex.: 5583999999999)
const WHATSAPP = '5583000000000';
const WHATSAPP_MSG = 'Olá, Lucas! Vim pelo seu portfólio e quero conversar sobre um projeto.';

export const contact = {
  intro: [
    'Tem uma marca para nascer, um produto para tirar do papel ou um design system para organizar? Me conta sobre o seu projeto.',
    'Respondo em até 2 dias úteis. Trabalho com empresas e pessoas de qualquer lugar — remoto ou presencial em João Pessoa.'
  ],
  channels: [
    {
      label: 'WhatsApp',
      value: 'Conversar agora',
      href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`
    },
    { label: 'Instagram', value: '@lworks.co', href: 'https://www.instagram.com/lworks.co/' },
    { label: 'LinkedIn', value: 'Lucas Cartaxo', href: 'https://www.linkedin.com/in/lucas-cartaxo-015152181/' },
    { label: 'E-mail', value: EMAIL, href: `mailto:${EMAIL}`, copy: true },
    { label: 'Base', value: 'João Pessoa, Paraíba — Brasil' }
  ]
};
