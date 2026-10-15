var e={button:JSON.parse(`{"propriedades":[{"nome":"label","tipo":"string","opcional":false,"dono":"ButtonProps","descricao":""},{"nome":"variant","tipo":"ButtonVariant","opcional":true,"dono":"ButtonProps","descricao":""},{"nome":"size","tipo":"ButtonSize","opcional":true,"dono":"ButtonProps","descricao":""},{"nome":"fullWidth","tipo":"boolean","opcional":true,"dono":"ButtonProps","descricao":"Ocupa toda a largura disponível. Padrão do tamanho large."},{"nome":"loading","tipo":"boolean","opcional":true,"dono":"ButtonProps","descricao":"Operação em andamento: o ícone gira no lugar do ícone da esquerda e o toque fica\\nbloqueado, mas o botão não esmaece — ele está trabalhando, não indisponível.\\nTroque o \`label\` pelo andamento (\\"Conectando conta\\")."},{"nome":"leadingIcon","tipo":"IconSource","opcional":true,"dono":"ButtonProps","descricao":"Ícone Lucide (ex.: \`ArrowRight\`) ou elemento pronto, 20x20."},{"nome":"trailingIcon","tipo":"IconSource","opcional":true,"dono":"ButtonProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ButtonProps","descricao":""},{"nome":"labelStyle","tipo":"StyleProp<TextStyle>","opcional":true,"dono":"ButtonProps","descricao":""}],"tipos":"export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'soft';\\n\\nexport type ButtonSize = 'large' | 'medium' | 'small';\\n\\nexport type ButtonProps = Omit<PressableProps, 'style' | 'children'> & {\\n  label: string;\\n  variant?: ButtonVariant;\\n  size?: ButtonSize;\\n  /** Ocupa toda a largura disponível. Padrão do tamanho large. */\\n  fullWidth?: boolean;\\n  /**\\n   * Operação em andamento: o ícone gira no lugar do ícone da esquerda e o toque fica\\n   * bloqueado, mas o botão não esmaece — ele está trabalhando, não indisponível.\\n   * Troque o \`label\` pelo andamento (\\"Conectando conta\\").\\n   */\\n  loading?: boolean;\\n  /** Ícone Lucide (ex.: \`ArrowRight\`) ou elemento pronto, 20x20. */\\n  leadingIcon?: IconSource;\\n  trailingIcon?: IconSource;\\n  style?: StyleProp<ViewStyle>;\\n  labelStyle?: StyleProp<TextStyle>;\\n};","exemplo":"import React from 'react';\\nimport { View } from 'react-native';\\nimport { ArrowRight } from 'lucide-react-native';\\nimport { Button } from '@tessela/ui';\\nimport { Legenda, Secao, comum } from './_comum';\\n\\nexport default function TelaButton() {\\n  return (\\n    <>\\n      <Secao>Large</Secao>\\n      <View style={comum.coluna}>\\n        <Button label=\\"Primary\\" />\\n        <Button label=\\"Secondary\\" variant=\\"secondary\\" />\\n        <Button label=\\"Tertiary\\" variant=\\"tertiary\\" />\\n        <Button label=\\"Destructive\\" variant=\\"destructive\\" />\\n        <Button label=\\"Soft\\" variant=\\"soft\\" />\\n        <Button label=\\"Disabled\\" disabled />\\n      </View>\\n\\n      <Secao>Medium</Secao>\\n      <Legenda>Primary · Secondary · Tertiary · Destructive · Soft · Disabled</Legenda>\\n      <View style={comum.linha}>\\n        <Button label=\\"Button\\" size=\\"medium\\" />\\n        <Button label=\\"Button\\" size=\\"medium\\" variant=\\"secondary\\" />\\n      </View>\\n      <View style={comum.linha}>\\n        <Button label=\\"Button\\" size=\\"medium\\" variant=\\"tertiary\\" />\\n        <Button label=\\"Button\\" size=\\"medium\\" variant=\\"destructive\\" />\\n      </View>\\n      <View style={comum.linha}>\\n        <Button label=\\"Button\\" size=\\"medium\\" variant=\\"soft\\" />\\n        <Button label=\\"Button\\" size=\\"medium\\" disabled />\\n      </View>\\n\\n      <Secao>Small</Secao>\\n      <Legenda>rótulo SemiBold</Legenda>\\n      <View style={comum.grupo}>\\n        <Button label=\\"Button\\" size=\\"small\\" />\\n        <Button label=\\"Button\\" size=\\"small\\" variant=\\"secondary\\" />\\n        <Button label=\\"Button\\" size=\\"small\\" variant=\\"tertiary\\" />\\n        <Button label=\\"Button\\" size=\\"small\\" variant=\\"soft\\" />\\n        <Button label=\\"Button\\" size=\\"small\\" variant=\\"destructive\\" />\\n        <Button label=\\"Button\\" size=\\"small\\" disabled />\\n      </View>\\n\\n      <Secao>Loading</Secao>\\n      <View style={comum.coluna}>\\n        <Button label=\\"Conectando conta\\" loading />\\n        <Button label=\\"Salvando\\" variant=\\"soft\\" loading />\\n        <View style={comum.linha}>\\n          <Button label=\\"Enviando\\" loading variant=\\"secondary\\" size=\\"medium\\" />\\n          <Button label=\\"Ok\\" loading variant=\\"destructive\\" size=\\"small\\" />\\n        </View>\\n      </View>\\n\\n      <Secao>Com ícone</Secao>\\n      <View style={comum.coluna}>\\n        <Button label=\\"Continuar\\" trailingIcon={ArrowRight} />\\n        <Button label=\\"Continuar\\" variant=\\"tertiary\\" size=\\"medium\\" trailingIcon={ArrowRight} />\\n        <Button label=\\"Continuar\\" variant=\\"soft\\" size=\\"medium\\" trailingIcon={ArrowRight} />\\n      </View>\\n    </>\\n  );\\n}\\n","exemploEm":"apps/validador/telas/Button.tsx","fonte":"import React from 'react';\\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';\\nimport Animated, { useReducedMotion } from 'react-native-reanimated';\\nimport { LoaderCircle } from 'lucide-react-native';\\nimport { primitives, typography, type Theme } from '@tessela/tokens';\\nimport { useFont, useTheme, type FontWeightKey } from './theme';\\nimport { renderIcon, type IconSource } from './Icon';\\nimport { opticalOffset } from './metrics';\\nimport { DURATION, EASE_OUT_CSS } from './motion';\\n\\nexport type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'soft';\\nexport type ButtonSize = 'large' | 'medium' | 'small';\\n\\nexport type ButtonProps = Omit<PressableProps, 'style' | 'children'> & {\\n  label: string;\\n  variant?: ButtonVariant;\\n  size?: ButtonSize;\\n  /** Ocupa toda a largura disponível. Padrão do tamanho large. */\\n  fullWidth?: boolean;\\n  /**\\n   * Operação em andamento: o ícone gira no lugar do ícone da esquerda e o toque fica\\n   * bloqueado, mas o botão não esmaece — ele está trabalhando, não indisponível.\\n   * Troque o \`label\` pelo andamento (\\"Conectando conta\\").\\n   */\\n  loading?: boolean;\\n  /** Ícone Lucide (ex.: \`ArrowRight\`) ou elemento pronto, 20x20. */\\n  leadingIcon?: IconSource;\\n  trailingIcon?: IconSource;\\n  style?: StyleProp<ViewStyle>;\\n  labelStyle?: StyleProp<TextStyle>;\\n};\\n\\ntype SizeSpec = {\\n  height: number;\\n  radius: number;\\n  paddingHorizontal: number;\\n  hitSlop: number;\\n  weight: FontWeightKey;\\n  iconStroke: number;\\n  loaderStroke: number;\\n};\\n\\nconst SIZES: Record<ButtonSize, SizeSpec> = {\\n  large: {\\n    height: 60,\\n    radius: primitives.radius.controlLg,\\n    paddingHorizontal: primitives.space[10],\\n    hitSlop: 0,\\n    weight: '700',\\n    iconStroke: primitives.stroke.thick,\\n    loaderStroke: primitives.stroke.bold,\\n  },\\n  medium: {\\n    height: 50,\\n    radius: primitives.radius.controlMd,\\n    paddingHorizontal: primitives.space[24],\\n    hitSlop: 0,\\n    weight: '700',\\n    iconStroke: primitives.stroke.thick,\\n    loaderStroke: primitives.stroke.bold,\\n  },\\n  small: {\\n    height: 36,\\n    radius: primitives.radius.controlSm,\\n    paddingHorizontal: primitives.space[12],\\n    // O design entrega 36px de altura, abaixo dos 44pt de área de toque.\\n    // O hitSlop cobre a diferença sem mudar o desenho.\\n    hitSlop: 4,\\n    // No Figma, só o rótulo do Small é SemiBold; Large e Medium são Bold.\\n    weight: '600',\\n    iconStroke: primitives.stroke.icon,\\n    loaderStroke: primitives.stroke.icon,\\n  },\\n};\\n\\ntype Surface = { background: string; foreground: string; icon: string; border: string };\\n\\nfunction surfaceFor(\\n  theme: Theme,\\n  variant: ButtonVariant,\\n  size: ButtonSize,\\n  pressed: boolean,\\n  disabled: boolean,\\n): Surface {\\n  if (disabled) {\\n    return {\\n      background: theme.action.disabled.bg,\\n      foreground: theme.action.disabled.fg,\\n      icon: theme.action.disabled.fg,\\n      border: 'transparent',\\n    };\\n  }\\n  switch (variant) {\\n    case 'secondary':\\n      return {\\n        background: pressed ? theme.action.secondary.bgPressed : theme.action.secondary.bg,\\n        foreground: theme.action.secondary.fg,\\n        icon: theme.action.secondary.fg,\\n        border: 'transparent',\\n      };\\n    case 'tertiary':\\n      return {\\n        background: pressed ? theme.action.tertiary.bgPressed : theme.action.tertiary.bg,\\n        foreground: theme.action.tertiary.fg,\\n        // button/icon/tertiary e button/icon/tertiary-small no Figma.\\n        icon: size === 'small' ? theme.fg.secondary : theme.fg.subtle,\\n        border: theme.action.tertiary.border,\\n      };\\n    case 'soft':\\n      return {\\n        background: pressed ? theme.action.soft.bgPressed : theme.action.soft.bg,\\n        foreground: theme.action.soft.fg,\\n        icon: theme.action.soft.fg,\\n        border: 'transparent',\\n      };\\n    case 'destructive':\\n      return {\\n        background: pressed ? theme.action.destructive.bgPressed : theme.action.destructive.bg,\\n        foreground: theme.action.destructive.fg,\\n        icon: theme.action.destructive.fg,\\n        border: 'transparent',\\n      };\\n    default:\\n      return {\\n        background: pressed ? theme.action.primary.bgPressed : theme.action.primary.bg,\\n        foreground: theme.action.primary.fg,\\n        icon: theme.action.primary.fg,\\n        border: 'transparent',\\n      };\\n  }\\n}\\n\\nexport function Button({\\n  label,\\n  variant = 'primary',\\n  size = 'large',\\n  fullWidth,\\n  leadingIcon,\\n  trailingIcon,\\n  style,\\n  labelStyle,\\n  disabled,\\n  loading,\\n  ...rest\\n}: ButtonProps) {\\n  const theme = useTheme();\\n  const reduced = useReducedMotion();\\n  const spec = SIZES[size];\\n  const font = useFont(spec.weight);\\n  const stretch = fullWidth ?? size === 'large';\\n  // PressableProps.disabled aceita null; os cálculos abaixo precisam de boolean.\\n  const isDisabled = disabled ?? false;\\n  const isLoading = loading ?? false;\\n  const fontSize = typography.button.fontSize;\\n\\n  return (\\n    <Pressable\\n      accessibilityRole=\\"button\\"\\n      accessibilityState={{ disabled: isDisabled, busy: isLoading }}\\n      disabled={isDisabled || isLoading}\\n      hitSlop={spec.hitSlop}\\n      style={[{ alignSelf: stretch ? 'stretch' : 'flex-start' }, style]}\\n      {...rest}\\n    >\\n      {({ pressed }) => {\\n        const surface = surfaceFor(theme, variant, size, pressed && !isLoading, isDisabled);\\n        return (\\n          <Animated.View\\n            style={[\\n              styles.base,\\n              {\\n                height: spec.height,\\n                borderRadius: spec.radius,\\n                paddingHorizontal: spec.paddingHorizontal,\\n                backgroundColor: surface.background,\\n                borderColor: surface.border,\\n                borderWidth: variant === 'tertiary' && !isDisabled ? primitives.stroke.hairline : 0,\\n                // Feedback no toque: encolhe 3% no press-in e volta no press-out,\\n                // junto com a cor de pressed do Figma. Com movimento reduzido, só a cor.\\n                transform: [{ scale: pressed && !reduced && !isLoading ? 0.97 : 1 }],\\n                transitionProperty: ['transform', 'backgroundColor'],\\n                transitionDuration: DURATION.press,\\n                transitionTimingFunction: EASE_OUT_CSS,\\n              },\\n            ]}\\n          >\\n            {isLoading ? (\\n              <Animated.View\\n                style={[\\n                  styles.icon,\\n                  reduced\\n                    ? null\\n                    : {\\n                        animationName: SPIN,\\n                        animationDuration: DURATION.spin,\\n                        animationIterationCount: 'infinite',\\n                        animationTimingFunction: 'linear',\\n                      },\\n                ]}\\n              >\\n                <LoaderCircle\\n                  size={primitives.iconSize.md}\\n                  color={surface.foreground}\\n                  strokeWidth={spec.loaderStroke}\\n                  absoluteStrokeWidth\\n                />\\n              </Animated.View>\\n            ) : leadingIcon ? (\\n              <View style={styles.icon}>{renderIcon(leadingIcon, surface.icon, primitives.iconSize.md, spec.iconStroke)}</View>\\n            ) : null}\\n            {/* O centro óptico usa \`top\` (layout), não transform: medido no simulador,\\n                o transform de um Text se perde na montagem inicial e só vale depois\\n                de uma nova renderização. */}\\n            <Text\\n              numberOfLines={1}\\n              style={[\\n                font,\\n                styles.label,\\n                { fontSize, color: surface.foreground, top: opticalOffset(fontSize) },\\n                labelStyle,\\n              ]}\\n            >\\n              {label}\\n            </Text>\\n            {trailingIcon ? (\\n              <View style={styles.icon}>{renderIcon(trailingIcon, surface.icon, primitives.iconSize.md, spec.iconStroke)}</View>\\n            ) : null}\\n          </Animated.View>\\n        );\\n      }}\\n    </Pressable>\\n  );\\n}\\n\\nconst SPIN = {\\n  from: { transform: [{ rotate: '0deg' }] },\\n  to: { transform: [{ rotate: '360deg' }] },\\n};\\n\\nconst styles = StyleSheet.create({\\n  base: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    gap: primitives.space[10],\\n  },\\n  label: {\\n    includeFontPadding: false,\\n  },\\n  icon: {\\n    width: primitives.iconSize.md,\\n    height: primitives.iconSize.md,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n});\\n","hash":"e9388351eca32e311f15ee8dfc0205ffa50444f02f58403e1b4115120a1a473e"}`),input:JSON.parse(`{"propriedades":[{"nome":"type","tipo":"InputType","opcional":true,"dono":"InputProps","descricao":""},{"nome":"label","tipo":"string","opcional":true,"dono":"InputProps","descricao":"Rótulo dos tipos text, email, password, icon e multiline. Em repouso aparece grande,\\nno lugar do valor; com foco ou conteúdo, sobe e diminui.\\nSearch e phone não têm rótulo: usam \`placeholder\`."},{"nome":"error","tipo":"string","opcional":true,"dono":"InputProps","descricao":"Mensagem de erro. Presente, muda o campo para o estado de erro."},{"nome":"helper","tipo":"string","opcional":true,"dono":"InputProps","descricao":"Texto de ajuda abaixo do campo. Some enquanto há erro: a mensagem ocupa o lugar."},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"InputProps","descricao":""},{"nome":"icon","tipo":"IconSource","opcional":true,"dono":"InputProps","descricao":"Ícone à esquerda. Só vale para o tipo icon; os outros tipos têm ícone fixo."},{"nome":"countryCode","tipo":"string","opcional":true,"dono":"InputProps","descricao":"Código do país no prefixo do tipo phone."},{"nome":"onCountryPress","tipo":"() => void","opcional":true,"dono":"InputProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"InputProps","descricao":""},{"nome":"inputStyle","tipo":"StyleProp<TextStyle>","opcional":true,"dono":"InputProps","descricao":""}],"tipos":"export type InputType = 'text' | 'email' | 'password' | 'phone' | 'search' | 'icon' | 'multiline';\\n\\nexport type InputProps = Omit<TextInputProps, 'style' | 'editable' | 'secureTextEntry'> & {\\n  type?: InputType;\\n  /**\\n   * Rótulo dos tipos text, email, password, icon e multiline. Em repouso aparece grande,\\n   * no lugar do valor; com foco ou conteúdo, sobe e diminui.\\n   * Search e phone não têm rótulo: usam \`placeholder\`.\\n   */\\n  label?: string;\\n  /** Mensagem de erro. Presente, muda o campo para o estado de erro. */\\n  error?: string;\\n  /** Texto de ajuda abaixo do campo. Some enquanto há erro: a mensagem ocupa o lugar. */\\n  helper?: string;\\n  disabled?: boolean;\\n  /** Ícone à esquerda. Só vale para o tipo icon; os outros tipos têm ícone fixo. */\\n  icon?: IconSource;\\n  /** Código do país no prefixo do tipo phone. */\\n  countryCode?: string;\\n  onCountryPress?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n  inputStyle?: StyleProp<TextStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { View } from 'react-native';\\nimport { Handbag } from 'lucide-react-native';\\nimport { Input } from '@tessela/ui';\\nimport type { InputType } from '@tessela/ui';\\nimport { Legenda, Secao, comum } from './_comum';\\n\\n// Mesmos textos de exemplo das variantes do Figma, para comparar lado a lado.\\nconst REPOUSO: Record<InputType, { label?: string; placeholder?: string }> = {\\n  icon: { label: 'Digite seu email' },\\n  text: { label: 'Digite seu email' },\\n  email: { label: 'Digite seu email' },\\n  password: { label: 'Digite sua senha' },\\n  phone: { placeholder: '(00) 00000-0000' },\\n  search: { placeholder: 'Digite aqui o que você procura' },\\n  multiline: { label: 'Digite sua mensagem' },\\n};\\nexport const VALOR: Record<InputType, string> = {\\n  icon: 'Label',\\n  text: 'Label',\\n  email: 'Label',\\n  password: 'Label',\\n  phone: '(83) 99116-9082',\\n  search: 'História de hoje',\\n  multiline: 'Label com mais de uma linha, para mostrar como o texto quebra e a caixa cresce.',\\n};\\nconst TEM_ERRO: InputType[] = ['icon', 'text', 'email', 'password', 'multiline'];\\nconst TEM_DISABLED: InputType[] = ['icon', 'text', 'email', 'password', 'phone', 'multiline'];\\n\\nfunction GradeInput({ type }: { type: InputType }) {\\n  const extra = type === 'icon' ? { icon: Handbag } : {};\\n  const flutuante = REPOUSO[type].label ? { label: 'Input' } : {};\\n  return (\\n    <View style={comum.coluna}>\\n      <Secao>{type}</Secao>\\n      <Legenda>Default</Legenda>\\n      <Input type={type} {...REPOUSO[type]} {...extra} />\\n      <Legenda>Filled</Legenda>\\n      <Input type={type} {...flutuante} {...extra} value={VALOR[type]} />\\n      {TEM_ERRO.includes(type) ? (\\n        <>\\n          <Legenda>Error</Legenda>\\n          <Input type={type} {...flutuante} {...extra} value=\\"Label error\\" error=\\"Mensagem de Erro\\" />\\n        </>\\n      ) : null}\\n      {TEM_DISABLED.includes(type) ? (\\n        <>\\n          <Legenda>Disabled</Legenda>\\n          <Input type={type} {...flutuante} {...extra} value={VALOR[type]} disabled />\\n        </>\\n      ) : null}\\n    </View>\\n  );\\n}\\n\\n// Ajuda e erro se revezam: sem @, a mensagem de erro entra no lugar da ajuda.\\nfunction AjudaInterativa() {\\n  const [email, setEmail] = useState('');\\n  const invalido = email.length > 0 && !email.includes('@');\\n  return (\\n    <Input\\n      type=\\"email\\"\\n      label=\\"Email\\"\\n      value={email}\\n      onChangeText={setEmail}\\n      helper=\\"Usamos para recuperar sua conta\\"\\n      error={invalido ? 'Falta o @' : undefined}\\n    />\\n  );\\n}\\n\\nexport default function TelaInput() {\\n  return (\\n    <>\\n      <Secao>Ajuda</Secao>\\n      <View style={comum.coluna}>\\n        <Input label=\\"Nome\\" helper=\\"Texto de ajuda\\" />\\n        <Input type=\\"multiline\\" label=\\"Digite sua mensagem\\" helper=\\"Conte o que aconteceu com o máximo de detalhe que puder.\\" />\\n        <Input label=\\"Email\\" value=\\"fernando@\\" helper=\\"Texto de ajuda\\" error=\\"Mensagem de Erro\\" />\\n        <Legenda>digite sem @ para ver a troca</Legenda>\\n        <AjudaInterativa />\\n      </View>\\n      {(['multiline', 'text', 'email', 'password', 'icon', 'phone', 'search'] as InputType[]).map((type) => (\\n        <GradeInput key={type} type={type} />\\n      ))}\\n    </>\\n  );\\n}\\n","exemploEm":"apps/validador/telas/Input.tsx","fonte":"import React, { useEffect, useRef, useState } from 'react';\\nimport { AccessibilityInfo, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';\\nimport type { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';\\nimport Animated, { Keyframe, LayoutAnimationConfig, ReduceMotion, useReducedMotion } from 'react-native-reanimated';\\nimport { Ban, ChevronDown, Eye, EyeOff, Lock, Mail, Phone, Search } from 'lucide-react-native';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { useFont, useTheme } from './theme';\\nimport { renderIcon, type IconSource } from './Icon';\\nimport { FONTE, naturalLineHeight, opticalOffset } from './metrics';\\nimport { DURATION, EASE_IN_OUT_CSS, EASE_OUT, EASE_OUT_CSS } from './motion';\\n\\nexport type InputType = 'text' | 'email' | 'password' | 'phone' | 'search' | 'icon' | 'multiline';\\n\\nexport type InputProps = Omit<TextInputProps, 'style' | 'editable' | 'secureTextEntry'> & {\\n  type?: InputType;\\n  /**\\n   * Rótulo dos tipos text, email, password, icon e multiline. Em repouso aparece grande,\\n   * no lugar do valor; com foco ou conteúdo, sobe e diminui.\\n   * Search e phone não têm rótulo: usam \`placeholder\`.\\n   */\\n  label?: string;\\n  /** Mensagem de erro. Presente, muda o campo para o estado de erro. */\\n  error?: string;\\n  /** Texto de ajuda abaixo do campo. Some enquanto há erro: a mensagem ocupa o lugar. */\\n  helper?: string;\\n  disabled?: boolean;\\n  /** Ícone à esquerda. Só vale para o tipo icon; os outros tipos têm ícone fixo. */\\n  icon?: IconSource;\\n  /** Código do país no prefixo do tipo phone. */\\n  countryCode?: string;\\n  onCountryPress?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n  inputStyle?: StyleProp<TextStyle>;\\n};\\n\\nconst HEIGHT = 60;\\nconst RADIUS = primitives.radius.controlLg;\\nconst ICON = primitives.iconSize.md;\\nconst ERROR_ICON = primitives.iconSize.sm;\\nconst STROKE = primitives.stroke.icon;\\nconst LABEL_SIZE = typography.body.fontSize;\\nconst VALUE_SIZE = typography.bodyLarge.fontSize;\\nconst LABEL_SCALE = VALUE_SIZE / LABEL_SIZE;\\n\\n// No Figma, 8 separa as caixas de linha de 110% do rótulo e do valor. No iOS as\\n// caixas da Puffin têm 129,6% do corpo, então 8 afasta demais. 4,5 foi calibrado\\n// medindo o simulador em pixel: a distância entre as maiúsculas do rótulo e do\\n// valor fica em 23,5 pt, a mesma do Figma.\\nconst LABEL_VALUE_GAP = 4.5;\\n\\n// Multilinha: a caixa cresce para baixo, então o rótulo não centraliza. Levantado,\\n// a linha dele começa a 10 do topo e o valor vem 8 abaixo, em Body Large (16/23;\\n// o Figma arredonda os 145% para 23 por linha). Em repouso, o topo das maiúsculas\\n// fica a 24, como o leading trim do Figma.\\nconst MULTILINE_MIN_HEIGHT = 120;\\nconst MULTILINE_PAD_TOP = primitives.space[10];\\nconst MULTILINE_REST_CAP = primitives.space[24];\\nconst MULTILINE_VALUE_LINE = typography.bodyLarge.lineHeight;\\n// No TextInput do iOS, a entrelinha extra fica toda acima do texto; o Figma divide\\n// meio a meio. Subir meia entrelinha põe as linhas onde o Figma põe, sem mudar a altura.\\nconst MULTILINE_VALUE_SHIFT = -(MULTILINE_VALUE_LINE - naturalLineHeight(VALUE_SIZE)) / 2;\\n// O rótulo encolhe e cresce em torno do centro da própria linha; daqui ao topo das\\n// maiúsculas são 0,411 do corpo na Puffin.\\nconst CAP_FROM_CENTER = naturalLineHeight(1) / 2 - (FONTE.ascender - FONTE.capHeight);\\nconst MULTILINE_REST_Y =\\n  MULTILINE_REST_CAP - MULTILINE_PAD_TOP - naturalLineHeight(LABEL_SIZE) / 2 + VALUE_SIZE * CAP_FROM_CENTER;\\n\\nconst FLOATS: Record<InputType, boolean> = {\\n  text: true,\\n  email: true,\\n  password: true,\\n  icon: true,\\n  multiline: true,\\n  phone: false,\\n  search: false,\\n};\\n\\nconst KEYBOARD: Record<InputType, Partial<TextInputProps>> = {\\n  text: {},\\n  email: {\\n    keyboardType: 'email-address',\\n    autoCapitalize: 'none',\\n    autoCorrect: false,\\n    textContentType: 'emailAddress',\\n  },\\n  password: { autoCapitalize: 'none', autoCorrect: false, textContentType: 'password' },\\n  phone: { keyboardType: 'phone-pad', textContentType: 'telephoneNumber' },\\n  search: { returnKeyType: 'search', autoCorrect: false },\\n  icon: {},\\n  multiline: { multiline: true, textAlignVertical: 'top' },\\n};\\n\\n// Troca do olho da senha: o novo entra de 90% com fade, o antigo só some.\\nconst ICON_IN = new Keyframe({\\n  0: { opacity: 0, transform: [{ scale: 0.9 }] },\\n  100: { opacity: 1, transform: [{ scale: 1 }], easing: EASE_OUT },\\n})\\n  .duration(DURATION.state)\\n  .reduceMotion(ReduceMotion.System);\\nconst ICON_OUT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.System);\\n\\n// Mensagem de erro: desce 4 pt enquanto aparece, para ler como vinda do campo.\\nconst ERROR_IN = new Keyframe({\\n  0: { opacity: 0, transform: [{ translateY: -4 }] },\\n  100: { opacity: 1, transform: [{ translateY: 0 }], easing: EASE_OUT },\\n})\\n  .duration(DURATION.move)\\n  .reduceMotion(ReduceMotion.System);\\n// Saída da mensagem de erro e do texto de ajuda: só some.\\nconst FADE_OUT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.System);\\n\\n// A ajuda volta quando o erro sai; aparece no lugar, sem deslocamento.\\nconst HELPER_IN = new Keyframe({\\n  0: { opacity: 0 },\\n  100: { opacity: 1, easing: EASE_OUT },\\n})\\n  .duration(DURATION.state)\\n  .reduceMotion(ReduceMotion.System);\\n\\nexport function Input({\\n  type = 'text',\\n  label,\\n  error,\\n  helper,\\n  disabled = false,\\n  icon,\\n  countryCode = '+55',\\n  onCountryPress,\\n  style,\\n  inputStyle,\\n  value,\\n  defaultValue,\\n  placeholder,\\n  onChangeText,\\n  onFocus,\\n  onBlur,\\n  accessibilityLabel,\\n  accessibilityHint,\\n  ...rest\\n}: InputProps) {\\n  const theme = useTheme();\\n  const reduced = useReducedMotion();\\n  const inputRef = useRef<TextInput>(null);\\n  const [focused, setFocused] = useState(false);\\n  const [revealed, setRevealed] = useState(false);\\n  // Sem \`value\`, o campo é não-controlado: o texto digitado precisa ser\\n  // acompanhado aqui, senão peso da fonte e rótulo flutuante não reagem.\\n  const [typed, setTyped] = useState(defaultValue ?? '');\\n  // Altura real da linha do valor; muda com o tamanho de fonte do sistema.\\n  const [valueLine, setValueLine] = useState(naturalLineHeight(VALUE_SIZE));\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n\\n  const isPhone = type === 'phone';\\n  const isMultiline = type === 'multiline';\\n  const visibleError = disabled ? undefined : error;\\n  const hasError = Boolean(visibleError);\\n  const fieldLabel = accessibilityLabel ?? label ?? placeholder;\\n  const announcedError = useRef<string | undefined>(undefined);\\n  useEffect(() => {\\n    if (visibleError && visibleError !== announcedError.current) {\\n      AccessibilityInfo.announceForAccessibility([fieldLabel, visibleError].filter(Boolean).join('. '));\\n    }\\n    announcedError.current = visibleError;\\n  }, [visibleError, fieldLabel]);\\n  const hasValue = (value ?? typed).length > 0;\\n  const floats = FLOATS[type] && Boolean(label);\\n  const raised = floats && (focused || hasValue);\\n\\n  const iconColor = disabled ? theme.field.iconDisabled : theme.field.icon;\\n  const valueColor = disabled ? theme.field.fgDisabled : theme.field.fg;\\n  const fieldBackground = disabled\\n    ? theme.field.bgDisabled\\n    : hasError\\n      ? theme.field.bgError\\n      : theme.field.bg;\\n  const bordered = !disabled && (hasError || focused);\\n  const borderColor = hasError ? theme.feedback.error.fg : theme.field.border;\\n\\n  // Em repouso, o rótulo ocupa o lugar do valor em 16, com as maiúsculas no\\n  // centro do campo. Levantado, fica em 14 no topo. É um só elemento que se move.\\n  const restY = isMultiline\\n    ? MULTILINE_REST_Y\\n    : (LABEL_VALUE_GAP + valueLine) / 2 + opticalOffset(VALUE_SIZE);\\n  const labelColor = raised\\n    ? theme.fg.subtle\\n    : disabled\\n      ? theme.field.fgDisabled\\n      : theme.field.fg;\\n\\n  const colorTransition = {\\n    transitionProperty: 'backgroundColor' as const,\\n    transitionDuration: DURATION.state,\\n    transitionTimingFunction: EASE_OUT_CSS,\\n  };\\n\\n  let leading: React.ReactNode = null;\\n  if (type === 'email') leading = renderIcon(Mail, iconColor, ICON, STROKE);\\n  else if (type === 'password') leading = renderIcon(Lock, iconColor, ICON, STROKE);\\n  else if (type === 'phone') leading = renderIcon(Phone, iconColor, ICON, STROKE);\\n  // No Figma, o ícone do tipo icon não muda de cor no estado disabled.\\n  else if (type === 'icon') leading = renderIcon(icon, theme.field.icon, ICON, STROKE);\\n\\n  let trailing: React.ReactNode = null;\\n  if (type === 'password') {\\n    trailing = (\\n      <Pressable\\n        accessibilityRole=\\"button\\"\\n        accessibilityLabel={revealed ? 'Ocultar senha' : 'Mostrar senha'}\\n        disabled={disabled}\\n        onPress={() => setRevealed((r) => !r)}\\n        hitSlop={12}\\n        style={styles.icon}\\n      >\\n        <Animated.View\\n          key={revealed ? 'eye' : 'eye-off'}\\n          entering={ICON_IN}\\n          exiting={ICON_OUT}\\n          style={styles.iconLayer}\\n        >\\n          {renderIcon(revealed ? Eye : EyeOff, iconColor, ICON, STROKE)}\\n        </Animated.View>\\n      </Pressable>\\n    );\\n  } else if (type === 'search') {\\n    trailing = <View style={styles.icon}>{renderIcon(Search, iconColor, ICON, STROKE)}</View>;\\n  }\\n\\n  const field = (\\n    <Animated.View\\n      style={[\\n        styles.row,\\n        isMultiline ? styles.alignTop : null,\\n        isPhone\\n          ? [\\n              styles.phoneField,\\n              { backgroundColor: fieldBackground, paddingHorizontal: primitives.space[24] },\\n              colorTransition,\\n            ]\\n          : null,\\n      ]}\\n    >\\n      {leading ? <View style={styles.icon}>{leading}</View> : null}\\n\\n      <View\\n        style={[\\n          styles.column,\\n          isMultiline ? styles.multilineColumn : floats ? { gap: LABEL_VALUE_GAP } : null,\\n        ]}\\n      >\\n        {floats ? (\\n          // O movimento fica numa View: no iOS, transform em texto se perde na montagem\\n          // e o rótulo nascia em 14 no topo até o primeiro foco (visto no multilinha).\\n          <Animated.View\\n            style={{\\n              transformOrigin: 'left center',\\n              transform: [{ translateY: raised ? 0 : restY }, { scale: raised ? 1 : LABEL_SCALE }],\\n              // O rótulo sobe e encolhe; com movimento reduzido, só troca de cor.\\n              transitionProperty: 'transform',\\n              transitionDuration: reduced ? 0 : DURATION.move,\\n              transitionTimingFunction: EASE_IN_OUT_CSS,\\n            }}\\n          >\\n            <Animated.Text\\n              numberOfLines={1}\\n              style={[\\n                medium,\\n                styles.text,\\n                {\\n                  fontSize: LABEL_SIZE,\\n                  color: labelColor,\\n                  transitionProperty: 'color',\\n                  transitionDuration: DURATION.move,\\n                  transitionTimingFunction: EASE_IN_OUT_CSS,\\n                },\\n              ]}\\n            >\\n              {label}\\n            </Animated.Text>\\n          </Animated.View>\\n        ) : null}\\n\\n        <TextInput\\n          ref={inputRef}\\n          accessibilityLabel={fieldLabel}\\n          accessibilityHint={hasError ? [visibleError, accessibilityHint].filter(Boolean).join('. ') : accessibilityHint ?? helper}\\n          {...KEYBOARD[type]}\\n          {...rest}\\n          // O multilinha é sempre controlado por dentro: não controlado, o iOS perde o\\n          // texto já digitado quando ele quebra de linha e a caixa cresce.\\n          value={isMultiline ? value ?? typed : value}\\n          defaultValue={isMultiline ? undefined : defaultValue}\\n          onChangeText={(text) => {\\n            setTyped(text);\\n            onChangeText?.(text);\\n          }}\\n          onLayout={floats && !isMultiline ? (e) => setValueLine(e.nativeEvent.layout.height) : undefined}\\n          editable={!disabled}\\n          secureTextEntry={type === 'password' && !revealed}\\n          placeholder={floats ? undefined : placeholder ?? label}\\n          placeholderTextColor={disabled ? theme.field.fgDisabled : theme.field.fgPlaceholder}\\n          onFocus={(e) => {\\n            setFocused(true);\\n            onFocus?.(e);\\n          }}\\n          onBlur={(e) => {\\n            setFocused(false);\\n            onBlur?.(e);\\n          }}\\n          style={[\\n            styles.input,\\n            // Vazio é Medium, com ou sem foco; com texto, digitando ou preenchido, é SemiBold.\\n            // O multilinha fica sempre em SemiBold: vazio, ele não mostra valor (o rótulo\\n            // ocupa o lugar), e no iOS trocar a fonte durante a digitação deixa o trecho\\n            // já digitado no peso antigo e apaga texto quando se digita rápido.\\n            hasValue || isMultiline ? semibold : medium,\\n            { fontSize: VALUE_SIZE, color: valueColor },\\n            isMultiline ? { lineHeight: MULTILINE_VALUE_LINE, top: MULTILINE_VALUE_SHIFT } : null,\\n            // Numa linha só, centraliza pelas maiúsculas, como o leading trim do Figma.\\n            // \`top\` e não transform: o transform de texto se perde na montagem.\\n            floats ? null : { top: opticalOffset(VALUE_SIZE) },\\n            inputStyle,\\n          ]}\\n        />\\n      </View>\\n\\n      {trailing}\\n    </Animated.View>\\n  );\\n\\n  return (\\n    // skipEntering: o campo que já nasce com erro não anima a mensagem;\\n    // só erros que aparecem depois, por ação do usuário.\\n    <LayoutAnimationConfig skipEntering>\\n      <View style={style}>\\n        <Pressable accessible={false} disabled={disabled} onPress={() => inputRef.current?.focus()}>\\n          <Animated.View\\n            style={[\\n              styles.container,\\n              isMultiline ? styles.multiline : styles.singleLine,\\n              isPhone\\n                ? null\\n                : [\\n                    {\\n                      borderRadius: RADIUS,\\n                      backgroundColor: fieldBackground,\\n                      paddingHorizontal: primitives.space[24],\\n                    },\\n                    colorTransition,\\n                  ],\\n            ]}\\n          >\\n            {isPhone ? (\\n              <>\\n                <Pressable\\n                  accessibilityRole={onCountryPress ? 'button' : undefined}\\n                  accessibilityLabel={\`Código do país \${countryCode}\`}\\n                  disabled={disabled || !onCountryPress}\\n                  onPress={onCountryPress}\\n                  style={[\\n                    styles.prefix,\\n                    {\\n                      backgroundColor: disabled ? theme.field.prefixBgDisabled : theme.field.prefixBg,\\n                      borderRightColor: theme.field.border,\\n                    },\\n                  ]}\\n                >\\n                  {/* No Figma, o chevron não muda de cor no estado disabled. */}\\n                  <View style={styles.icon}>{renderIcon(ChevronDown, theme.field.icon, ICON, STROKE)}</View>\\n                  <Text\\n                    style={[\\n                      semibold,\\n                      styles.text,\\n                      {\\n                        fontSize: VALUE_SIZE,\\n                        color: valueColor,\\n                        top: opticalOffset(VALUE_SIZE),\\n                      },\\n                    ]}\\n                  >\\n                    {countryCode}\\n                  </Text>\\n                </Pressable>\\n                {field}\\n              </>\\n            ) : (\\n              field\\n            )}\\n\\n            {/* A borda é uma camada à parte: aparece por opacidade sem mexer no conteúdo.\\n                No phone ela fica por fora, como o stroke OUTSIDE do Figma. */}\\n            <Animated.View\\n              pointerEvents=\\"none\\"\\n              style={[\\n                styles.border,\\n                isPhone ? styles.borderOutside : null,\\n                {\\n                  borderRadius: isPhone ? RADIUS + 1 : RADIUS,\\n                  borderColor,\\n                  opacity: bordered ? 1 : 0,\\n                  transitionProperty: ['opacity', 'borderColor'],\\n                  transitionDuration: DURATION.state,\\n                  transitionTimingFunction: EASE_OUT_CSS,\\n                },\\n              ]}\\n            />\\n          </Animated.View>\\n        </Pressable>\\n\\n        {hasError ? (\\n          <Animated.View entering={ERROR_IN} exiting={FADE_OUT} style={styles.errorRow}>\\n            <View style={styles.errorIcon}>\\n              {renderIcon(Ban, theme.feedback.error.fg, ERROR_ICON, STROKE)}\\n            </View>\\n            <Text style={[medium, styles.text, { fontSize: LABEL_SIZE, color: theme.feedback.error.fg }]}>\\n              {error}\\n            </Text>\\n          </Animated.View>\\n        ) : helper ? (\\n          <Animated.View entering={HELPER_IN} exiting={FADE_OUT} style={styles.helper}>\\n            <Text style={[medium, styles.text, { fontSize: LABEL_SIZE, color: theme.fg.muted }]}>{helper}</Text>\\n          </Animated.View>\\n        ) : null}\\n      </View>\\n    </LayoutAnimationConfig>\\n  );\\n}\\n\\n// Coordenadas explícitas em vez de StyleSheet.absoluteFillObject, que o React Native\\n// 0.86 removeu: lá o spread vira nada, a camada perde o position absolute e a borda\\n// colapsa num ponto (visto no Contto).\\nconst FILL = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 } as const;\\n\\nconst styles = StyleSheet.create({\\n  container: {\\n    flexDirection: 'row',\\n  },\\n  singleLine: {\\n    height: HEIGHT,\\n    alignItems: 'center',\\n  },\\n  multiline: {\\n    minHeight: MULTILINE_MIN_HEIGHT,\\n    alignItems: 'stretch',\\n    paddingTop: MULTILINE_PAD_TOP,\\n    paddingBottom: primitives.space[16],\\n  },\\n  row: {\\n    flex: 1,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[12],\\n  },\\n  phoneField: {\\n    height: '100%',\\n    borderTopRightRadius: RADIUS,\\n    borderBottomRightRadius: RADIUS,\\n  },\\n  prefix: {\\n    height: '100%',\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    // 18 vem do Figma e não existe na escala space (16, 20): mantido por fidelidade.\\n    paddingHorizontal: 18,\\n    gap: primitives.space[12],\\n    borderRightWidth: primitives.stroke.hairline,\\n    borderTopLeftRadius: RADIUS,\\n    borderBottomLeftRadius: RADIUS,\\n  },\\n  alignTop: {\\n    alignItems: 'flex-start',\\n  },\\n  column: {\\n    flex: 1,\\n    justifyContent: 'center',\\n  },\\n  multilineColumn: {\\n    justifyContent: 'flex-start',\\n    gap: primitives.space[8],\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n  input: {\\n    padding: 0,\\n    margin: 0,\\n    includeFontPadding: false,\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  iconLayer: {\\n    ...FILL,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  border: {\\n    ...FILL,\\n    borderWidth: primitives.stroke.hairline,\\n  },\\n  borderOutside: {\\n    top: -1,\\n    left: -1,\\n    right: -1,\\n    bottom: -1,\\n  },\\n  errorRow: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[8],\\n    marginTop: primitives.space[12],\\n  },\\n  helper: {\\n    marginTop: primitives.space[12],\\n  },\\n  errorIcon: {\\n    width: ERROR_ICON,\\n    height: ERROR_ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n});\\n","hash":"7a39ff5864af93bdefee5259fa1fc4254d5f3ddd91a0b035ffbe813b58ef441b"}`),chip:{propriedades:[{nome:`label`,tipo:`string`,opcional:!1,dono:`ChipProps`,descricao:``},{nome:`selected`,tipo:`boolean`,opcional:!0,dono:`ChipProps`,descricao:`Escolhido: fundo da marca e borda contínua.`},{nome:`disabled`,tipo:`boolean`,opcional:!0,dono:`ChipProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`ChipProps`,descricao:``}],tipos:`export type ChipProps = Omit<PressableProps, 'style' | 'children'> & {
  label: string;
  /** Escolhido: fundo da marca e borda contínua. */
  selected?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { View } from 'react-native';
import { Chip } from '@tessela/ui';
import { Legenda, Secao, comum } from './_comum';

// Mesmos grupos do "Em uso" do Figma (65:14): escolha única e várias escolhas.
const TEMAS = ['Dinossauros', 'Caminhões', 'O espaço'];
const VALORES = ['Aventura', 'Amizade', 'Coragem', 'Natureza'];

export default function TelaChip() {
  const [tema, setTema] = useState('Dinossauros');
  const [valores, setValores] = useState<string[]>(['Amizade', 'Coragem']);
  const alternar = (v: string) =>
    setValores((atual) => (atual.includes(v) ? atual.filter((x) => x !== v) : [...atual, v]));
  return (
    <>
      <Secao>Estados</Secao>
      <Legenda>Default · Selected · Disabled (segure para ver o Pressed)</Legenda>
      <View style={comum.grupo}>
        <Chip label="Opção" />
        <Chip label="Opção" selected />
        <Chip label="Opção" disabled />
      </View>

      <Secao>Escolha única</Secao>
      <Legenda>tocar em outra troca a seleção</Legenda>
      <View style={comum.grupo}>
        {TEMAS.map((t) => (
          <Chip key={t} label={t} selected={tema === t} onPress={() => setTema(t)} />
        ))}
      </View>

      <Secao>Várias escolhas</Secao>
      <Legenda>cada toque liga ou desliga</Legenda>
      <View style={comum.grupo}>
        {VALORES.map((v) => (
          <Chip key={v} label={v} selected={valores.includes(v)} onPress={() => alternar(v)} />
        ))}
      </View>
    </>
  );
}
`,exemploEm:`apps/validador/telas/Chip.tsx`,fonte:`import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated, { useReducedMotion } from 'react-native-reanimated';
import Svg, { Rect } from 'react-native-svg';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { opticalOffset } from './metrics';
import { DURATION, EASE_OUT_CSS } from './motion';

export type ChipProps = Omit<PressableProps, 'style' | 'children'> & {
  label: string;
  /** Escolhido: fundo da marca e borda contínua. */
  selected?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

// Tamanho único do Figma: 44 de altura, que já é a área de toque mínima.
const HEIGHT = 44;
const BORDER = componentMetrics.chip.stroke.container;
// O raio do token é "full" (999). No SVG, rx e ry precisam do valor real da ponta,
// senão a curva vira elipse: metade da altura.
const RADIUS = Math.min(componentMetrics.chip.radius, HEIGHT / 2);
// Tracejado 2/2 do Figma. O dashed do React Native desenha 3/3 no iOS, por isso a
// borda é um SVG.
const DASH = '2 2';

/**
 * Opção curta para escolha única ou múltipla, filtros e respostas rápidas.
 * Em grupo, use space/12 entre chips, com quebra de linha.
 */
export function Chip({ label, selected = false, disabled, style, ...rest }: ChipProps) {
  const c = useComponentTheme().chip;
  const reduced = useReducedMotion();
  const semibold = useFont('600');
  const isDisabled = disabled ?? false;
  const fontSize = typography.label.fontSize;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected, disabled: isDisabled }}
      disabled={isDisabled}
      style={[styles.pressable, style]}
      {...rest}
    >
      {({ pressed }) => {
        const background = isDisabled
          ? c.surface.disabled
          : selected
            ? c.surface.selected
            : pressed
              ? c.surface.pressed
              : c.surface.default;
        return (
          <Animated.View
            style={[
              styles.chip,
              {
                backgroundColor: background,
                // Mesmo retorno de toque do Button: encolhe 3% junto com a cor de
                // pressed. Com movimento reduzido, só a cor.
                transform: [{ scale: pressed && !reduced && !isDisabled ? 0.97 : 1 }],
                transitionProperty: ['transform', 'backgroundColor'],
                transitionDuration: DURATION.press,
                transitionTimingFunction: EASE_OUT_CSS,
              },
            ]}
          >
            {isDisabled ? null : (
              // A borda do Figma é interna: o traço de 2 fica centrado na beirada e o
              // recorte arredondado do chip deixa só a metade de dentro, com 1.
              // O Svg fica dentro de uma View absoluta: sozinho, o 100% dele é medido
              // pela área interna do chip, sem o respiro lateral, e a borda encolhe.
              <View pointerEvents="none" style={styles.border}>
                <Svg width="100%" height="100%">
                  {/* A key remonta o retângulo ao selecionar: o react-native-svg não
                      limpa o tracejado quando strokeDasharray deixa de vir, e a borda
                      selecionada continuava tracejada (visto no simulador). */}
                  <Rect
                    key={selected ? 'contínua' : 'tracejada'}
                    x={0}
                    y={0}
                    width="100%"
                    height="100%"
                    rx={RADIUS}
                    ry={RADIUS}
                    fill="none"
                    stroke={selected ? c.border.selected : c.border.default}
                    strokeWidth={BORDER * 2}
                    strokeDasharray={selected ? undefined : DASH}
                  />
                </Svg>
              </View>
            )}
            <Text
              numberOfLines={1}
              style={[
                semibold,
                styles.label,
                {
                  fontSize,
                  color: isDisabled ? c.text.disabled : c.text.default,
                  // Maiúsculas no centro, como o leading trim do Figma (ver Button).
                  top: opticalOffset(fontSize),
                },
              ]}
            >
              {label}
            </Text>
          </Animated.View>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: 'flex-start',
  },
  chip: {
    height: HEIGHT,
    paddingHorizontal: primitives.space[16],
    borderRadius: componentMetrics.chip.radius,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Coordenadas explícitas: o React Native 0.86 removeu StyleSheet.absoluteFillObject.
  border: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  label: {
    includeFontPadding: false,
  },
});
`,hash:`0412b2ea4faefbc5bfd254db929f7281c93df62dc1ba345c8f2b106c4b3ad356`},"bottom-navigation":{propriedades:[{nome:`tabs`,tipo:`BottomNavigationTab[]`,opcional:!1,dono:`BottomNavigationProps`,descricao:`De 3 a 5 abas.`},{nome:`activeKey`,tipo:`string`,opcional:!1,dono:`BottomNavigationProps`,descricao:``},{nome:`onChange`,tipo:`(key: string) => void`,opcional:!1,dono:`BottomNavigationProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`BottomNavigationProps`,descricao:``}],tipos:`/** Ícones da barra no Figma (conjunto "Ícone de aba"): cada um tem a forma da aba ativa. */
export type TabIconName = 'house' | 'library-big' | 'book-open-text' | 'users' | 'user-round';

export type BottomNavigationTab = {
  key: string;
  label: string;
  icon: TabIconName;
};

export type BottomNavigationProps = {
  /** De 3 a 5 abas. */
  tabs: BottomNavigationTab[];
  activeKey: string;
  onChange: (key: string) => void;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { BottomNavigation } from '@tessela/ui';
import type { BottomNavigationTab } from '@tessela/ui';
import { Legenda, Secao } from './_comum';

// Mesmas abas do Figma (67:11).
const ABAS: BottomNavigationTab[] = [
  { key: 'hoje', label: 'Hoje', icon: 'house' },
  { key: 'estante', label: 'Estante', icon: 'library-big' },
  { key: 'criar', label: 'Criar', icon: 'book-open-text' },
  { key: 'familia', label: 'Família', icon: 'users' },
  { key: 'perfil', label: 'Perfil', icon: 'user-round' },
];

export default function TelaBottomNavigation() {
  const [aba, setAba] = useState('hoje');
  const [aba3, setAba3] = useState('estante');
  return (
    <>
      <Secao>5 abas</Secao>
      <Legenda>toque para trocar a ativa</Legenda>
      <BottomNavigation tabs={ABAS} activeKey={aba} onChange={setAba} />
      <Secao>3 abas</Secao>
      <Legenda>o mínimo recomendado</Legenda>
      <BottomNavigation tabs={ABAS.slice(0, 3)} activeKey={aba3} onChange={setAba3} />
    </>
  );
}
`,exemploEm:`apps/validador/telas/BottomNavigation.tsx`,fonte:`import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BookOpenText, House, LibraryBig, UserRound, Users } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import { componentMetrics, primitives, shadows, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { capTrim, naturalLineHeight } from './metrics';

/** Ícones da barra no Figma (conjunto "Ícone de aba"): cada um tem a forma da aba ativa. */
export type TabIconName = 'house' | 'library-big' | 'book-open-text' | 'users' | 'user-round';

export type BottomNavigationTab = {
  key: string;
  label: string;
  icon: TabIconName;
};

export type BottomNavigationProps = {
  /** De 3 a 5 abas. */
  tabs: BottomNavigationTab[];
  activeKey: string;
  onChange: (key: string) => void;
  style?: StyleProp<ViewStyle>;
};

const ICON = primitives.iconSize.md;
const STROKE = componentMetrics.tabbar.stroke.icon;
// 59 × 58 é o tamanho nominal de cada aba no Figma.
const TAB_WIDTH = 59;
const TAB_HEIGHT = 58;
// No Figma a borda é interna e não ocupa espaço; no React Native ela soma ao layout.
// O respiro desconta a borda para a barra ficar com 343 × 70, como no Figma.
const BORDER = componentMetrics.tabbar.stroke.container;
// O rótulo é aparado nas maiúsculas, como no Figma: sem o espaço do descendente
// embaixo, ícone e rótulo ficam centrados pela tinta na aba.
const LABEL_TRIM = capTrim(typography.body.fontSize);
const TAB_PADDING = (TAB_HEIGHT - ICON - primitives.space[6] - naturalLineHeight(typography.body.fontSize)
  - LABEL_TRIM.marginTop - LABEL_TRIM.marginBottom) / 2;

// Formas da aba ativa, copiadas das camadas "Forma" do Figma (70:83 a 70:99), já
// deslocadas para a grade de 20 do ícone. Ficam atrás do contorno do Lucide.
const TAB_ICONS: Record<TabIconName, { outline: LucideIcon; shape: string }> = {
  house: {
    outline: House,
    shape: 'M4.5 8.545 L12 2 L19.5 8.545 L19.5 18.909 L18 19.455 L6.5 20 L4.5 18.909 Z',
  },
  'library-big': {
    outline: LibraryBig,
    shape:
      'M3.986 5.412 L3.5 18.588 L5.929 20 L14.186 19.529 L14.186 15.294 L15.643 20 L19.043 20 L20.5 18.118 L15.157 4 L12.243 4.941 L10.3 4 L4.471 4.471 Z',
  },
  'book-open-text': {
    outline: BookOpenText,
    shape: 'M3.5 5.5 L10 5 L11.5 6.5 L13 5 L19 5.5 L19.5 17.5 L13 18 L11.5 19.5 L10 18 L4 17.5 Z',
  },
  users: {
    outline: Users,
    shape:
      'M9.5 3 L6 3.5 L5 7 C5.667 8 7.1 10 7.5 10 C7.9 10 11 9.333 12.5 9 L12.5 5.5 L11.5 3.5 Z M3 19 L4.5 13.5 L11.5 12.5 L14 13.5 L15.5 18 L15.5 19.5 L6.5 19 Z',
  },
  'user-round': {
    outline: UserRound,
    shape:
      'M11.5 3 L8 3.5 L7 7 C7.667 8 9.1 10 9.5 10 C9.9 10 13 9.333 14.5 9 L14.5 5.5 L13.5 3.5 Z M5 19 L6.5 13.5 L13.5 12.5 L16 13.5 L17.5 18 L17.5 19.5 L8.5 19 Z',
  },
};

/**
 * Barra de navegação principal, em pílula. Não se posiciona sozinha: coloque-a
 * no rodapé da tela, acima da área segura.
 *
 * Trocar de aba não anima: é uma ação de dezenas de vezes por dia, e a forma
 * atrás do ícone e o peso do rótulo já marcam a aba ativa.
 */
export function BottomNavigation({ tabs, activeKey, onChange, style }: BottomNavigationProps) {
  const c = useComponentTheme().tabbar;
  const medium = useFont('500');
  const semibold = useFont('600');
  const { fontScale } = useWindowDimensions();
  const nominalWidth = tabs.length * TAB_WIDTH + Math.max(0, tabs.length - 1) * primitives.space[6] + primitives.space[24];
  const [availableWidth, setAvailableWidth] = useState(nominalWidth);
  const innerWidth = Math.min(nominalWidth, availableWidth) - primitives.space[24];
  const enlarged = fontScale > 1;
  const gap = enlarged ? primitives.space[6]
    : Math.min(primitives.space[6], Math.max(0, (innerWidth - tabs.length * TAB_WIDTH) / Math.max(1, tabs.length - 1)));
  const capacity = Math.max(1, Math.floor((innerWidth + gap) / (44 * fontScale + gap)));
  const columns = Math.max(1, Math.min(tabs.length, capacity >= tabs.length ? tabs.length : Math.ceil(tabs.length / Math.ceil(tabs.length / capacity))));
  const tabWidth = enlarged ? Math.max(44, Math.min(TAB_WIDTH * fontScale, (innerWidth - gap * (columns - 1)) / columns))
    : Math.max(44, Math.min(TAB_WIDTH, (innerWidth - gap * Math.max(0, tabs.length - 1)) / Math.max(1, tabs.length)));

  return (
    <View
      accessibilityRole="tablist"
      onLayout={event => setAvailableWidth(event.nativeEvent.layout.width)}
      style={[
        styles.bar,
        { backgroundColor: c.surface, borderColor: c.border, width: nominalWidth, gap },
        Platform.OS === 'android' ? shadows.md.android : shadows.md.ios,
        style,
      ]}
    >
      {tabs.map((tab) => {
        const active = tab.key === activeKey;
        const { outline: Outline, shape } = TAB_ICONS[tab.icon];
        return (
          <Pressable
            key={tab.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={tab.label}
            onPress={() => onChange(tab.key)}
            style={[styles.tab, { width: tabWidth }, enlarged && styles.enlargedTab]}
          >
            <View style={styles.icon}>
              {active ? (
                <Svg width={ICON} height={ICON} viewBox={\`0 0 \${ICON} \${ICON}\`} style={styles.shape}>
                  <Path d={shape} fill={c.icon.active} />
                </Svg>
              ) : null}
              <Outline
                size={ICON}
                color={active ? c.icon.activeOutline : c.icon.inactive}
                strokeWidth={STROKE}
                absoluteStrokeWidth
              />
            </View>
            <Text
              style={[
                active ? semibold : medium,
                styles.label,
                !enlarged && LABEL_TRIM,
                { color: active ? c.text.active : c.text.inactive },
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignSelf: 'center',
    maxWidth: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: primitives.space[6],
    paddingVertical: primitives.space[6] - BORDER,
    paddingHorizontal: primitives.space[12] - BORDER,
    borderRadius: componentMetrics.tabbar.radius,
    borderWidth: BORDER,
  },
  tab: {
    width: TAB_WIDTH,
    minHeight: TAB_HEIGHT,
    paddingVertical: TAB_PADDING,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: primitives.space[6],
  },
  enlargedTab: { paddingVertical: primitives.space[6] },
  icon: {
    width: ICON,
    height: ICON,
    flexShrink: 0,
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  label: {
    width: '100%',
    textAlign: 'center',
    fontSize: typography.body.fontSize,
    includeFontPadding: false,
  },
});
`,hash:`e46b0ee304243face9035e930df62d1b13db876da10b862cc7f2a738979198ac`},header:JSON.parse(`{"propriedades":[{"nome":"type","tipo":"HeaderType","opcional":true,"dono":"HeaderProps","descricao":"default: telas internas, com voltar, título no centro e ação opcional.\\nlarge: telas principais, com título grande à esquerda e \`actions\` à direita.\\nchat: conversa, com voltar, \`avatar\`, título, \`status\` e \`actions\`."},{"nome":"title","tipo":"string","opcional":true,"dono":"HeaderProps","descricao":""},{"nome":"onBack","tipo":"() => void","opcional":true,"dono":"HeaderProps","descricao":"Mostra o voltar (default e chat). Sem ele, o voltar não aparece."},{"nome":"backLabel","tipo":"string","opcional":true,"dono":"HeaderProps","descricao":"Rótulo ao lado do chevron no tipo default. Vazio, fica só o chevron."},{"nome":"onAction","tipo":"() => void","opcional":true,"dono":"HeaderProps","descricao":"Mostra a ação à direita no tipo default."},{"nome":"actionIcon","tipo":"IconSource","opcional":true,"dono":"HeaderProps","descricao":"Ícone da ação. Padrão: ellipsis."},{"nome":"actionLabel","tipo":"string","opcional":true,"dono":"HeaderProps","descricao":"Nome da ação para leitores de tela."},{"nome":"status","tipo":"string","opcional":true,"dono":"HeaderProps","descricao":"Linha abaixo do título no tipo chat (ex.: \\"Online agora\\")."},{"nome":"avatar","tipo":"React.ReactNode","opcional":true,"dono":"HeaderProps","descricao":"Avatar do contato no tipo chat (Avatar Small, 32)."},{"nome":"actions","tipo":"React.ReactNode","opcional":true,"dono":"HeaderProps","descricao":"Slot à direita dos tipos large e chat: Profile Selector, Button ou Icon Button."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"HeaderProps","descricao":""}],"tipos":"export type HeaderType = 'default' | 'large' | 'chat';\\n\\nexport type HeaderProps = {\\n  /**\\n   * default: telas internas, com voltar, título no centro e ação opcional.\\n   * large: telas principais, com título grande à esquerda e \`actions\` à direita.\\n   * chat: conversa, com voltar, \`avatar\`, título, \`status\` e \`actions\`.\\n   */\\n  type?: HeaderType;\\n  title?: string;\\n  /** Mostra o voltar (default e chat). Sem ele, o voltar não aparece. */\\n  onBack?: () => void;\\n  /** Rótulo ao lado do chevron no tipo default. Vazio, fica só o chevron. */\\n  backLabel?: string;\\n  /** Mostra a ação à direita no tipo default. */\\n  onAction?: () => void;\\n  /** Ícone da ação. Padrão: ellipsis. */\\n  actionIcon?: IconSource;\\n  /** Nome da ação para leitores de tela. */\\n  actionLabel?: string;\\n  /** Linha abaixo do título no tipo chat (ex.: \\"Online agora\\"). */\\n  status?: string;\\n  /** Avatar do contato no tipo chat (Avatar Small, 32). */\\n  avatar?: React.ReactNode;\\n  /** Slot à direita dos tipos large e chat: Profile Selector, Button ou Icon Button. */\\n  actions?: React.ReactNode;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { Share } from 'lucide-react-native';\\nimport { Avatar, Button, Header } from '@tessela/ui';\\nimport { Legenda, Secao, comum } from './_comum';\\n\\n// Mesmos textos das variantes do Figma (75:21, 97:714, 97:716).\\nexport default function TelaHeader() {\\n  const [toque, setToque] = useState<string | null>(null);\\n  return (\\n    <>\\n      <Legenda>{toque ? \`último toque: \${toque}\` : 'toque no voltar e na ação'}</Legenda>\\n\\n      <Secao>Default</Secao>\\n      <Legenda>voltar e título</Legenda>\\n      <Header style={comum.bordaABorda} title=\\"Título da tela\\" onBack={() => setToque('voltar')} />\\n      <Legenda>com ação (desligada por padrão)</Legenda>\\n      <Header style={comum.bordaABorda} title=\\"Título da tela\\" onBack={() => setToque('voltar')} onAction={() => setToque('ação')} />\\n      <Legenda>só título, sem voltar</Legenda>\\n      <Header style={comum.bordaABorda} title=\\"Título da tela\\" />\\n      <Legenda>título longo e outro ícone de ação</Legenda>\\n      <Header\\n        style={comum.bordaABorda}\\n        title=\\"Um título comprido que não cabe na barra\\"\\n        onBack={() => setToque('voltar')}\\n        onAction={() => setToque('compartilhar')}\\n        actionIcon={Share}\\n        actionLabel=\\"Compartilhar\\"\\n      />\\n\\n      <Secao>Large</Secao>\\n      <Legenda>com ações (Button Small Soft)</Legenda>\\n      <Header\\n        style={comum.bordaABorda}\\n        type=\\"large\\"\\n        title=\\"Título da tela\\"\\n        actions={<Button label=\\"Editar\\" size=\\"small\\" variant=\\"soft\\" onPress={() => setToque('editar')} />}\\n      />\\n      <Legenda>sem ações</Legenda>\\n      <Header style={comum.bordaABorda} type=\\"large\\" title=\\"Título da tela\\" />\\n\\n      <Secao>Chat</Secao>\\n      <Legenda>com Avatar Small e status</Legenda>\\n      <Header\\n        style={comum.bordaABorda}\\n        type=\\"chat\\"\\n        title=\\"Título da tela\\"\\n        status=\\"Online agora\\"\\n        onBack={() => setToque('voltar')}\\n        avatar={<Avatar shape=\\"circle\\" initials=\\"C\\" />}\\n      />\\n    </>\\n  );\\n}\\n","exemploEm":"apps/validador/telas/Header.tsx","fonte":"import React from 'react';\\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport { ChevronLeft, Ellipsis } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon, type IconSource } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\n\\nexport type HeaderType = 'default' | 'large' | 'chat';\\n\\nexport type HeaderProps = {\\n  /**\\n   * default: telas internas, com voltar, título no centro e ação opcional.\\n   * large: telas principais, com título grande à esquerda e \`actions\` à direita.\\n   * chat: conversa, com voltar, \`avatar\`, título, \`status\` e \`actions\`.\\n   */\\n  type?: HeaderType;\\n  title?: string;\\n  /** Mostra o voltar (default e chat). Sem ele, o voltar não aparece. */\\n  onBack?: () => void;\\n  /** Rótulo ao lado do chevron no tipo default. Vazio, fica só o chevron. */\\n  backLabel?: string;\\n  /** Mostra a ação à direita no tipo default. */\\n  onAction?: () => void;\\n  /** Ícone da ação. Padrão: ellipsis. */\\n  actionIcon?: IconSource;\\n  /** Nome da ação para leitores de tela. */\\n  actionLabel?: string;\\n  /** Linha abaixo do título no tipo chat (ex.: \\"Online agora\\"). */\\n  status?: string;\\n  /** Avatar do contato no tipo chat (Avatar Small, 32). */\\n  avatar?: React.ReactNode;\\n  /** Slot à direita dos tipos large e chat: Profile Selector, Button ou Icon Button. */\\n  actions?: React.ReactNode;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst BAR_HEIGHT = 44;\\nconst TOUCH = 44;\\n// 88 vem do Figma e não existe na escala space: é a largura fixa de cada lado\\n// do tipo default, que mantém o título no centro com ou sem voltar e ação.\\nconst SIDE = 88;\\n// Largura do voltar do tipo chat no Figma; o hitSlop completa o toque de 44.\\nconst CHAT_BACK = 28;\\nconst ICON = primitives.iconSize.md;\\nconst STROKE = componentMetrics.header.stroke.icon;\\n// Caixas de linha dos estilos do Figma: Display 32/38, Label 16/19, Caption 11/17.\\nconst LARGE_TITLE_BOX = lineBoxMargin(typography.display.fontSize, typography.display.lineHeight);\\nconst CHAT_TITLE_BOX = lineBoxMargin(typography.label.fontSize, typography.label.lineHeight);\\nconst CHAT_STATUS_BOX = lineBoxMargin(typography.caption.fontSize, typography.caption.lineHeight);\\n\\n/**\\n * Topo das telas. Não tem fundo, borda nem sombra: usa o fundo da tela.\\n * Não inclui a área segura do sistema; coloque-o abaixo dela.\\n */\\nexport function Header({\\n  type = 'default',\\n  title,\\n  onBack,\\n  backLabel = 'Voltar',\\n  onAction,\\n  actionIcon = Ellipsis,\\n  actionLabel = 'Mais opções',\\n  status,\\n  avatar,\\n  actions,\\n  style,\\n}: HeaderProps) {\\n  const c = useComponentTheme().header;\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n\\n  if (type === 'large') {\\n    return (\\n      <View style={[styles.row, styles.large, style]}>\\n        {title ? (\\n          <Text\\n            accessibilityRole=\\"header\\"\\n            numberOfLines={1}\\n            style={[\\n              semibold,\\n              styles.text,\\n              styles.shrink,\\n              { fontSize: typography.display.fontSize, color: c.text.title, marginVertical: LARGE_TITLE_BOX },\\n            ]}\\n          >\\n            {title}\\n          </Text>\\n        ) : null}\\n        {actions ? <View style={styles.actions}>{actions}</View> : null}\\n      </View>\\n    );\\n  }\\n\\n  if (type === 'chat') {\\n    return (\\n      <View style={[styles.row, styles.chat, style]}>\\n        <View style={[styles.chatStart, styles.shrink]}>\\n          {onBack ? (\\n            <Pressable\\n              accessibilityRole=\\"button\\"\\n              accessibilityLabel=\\"Voltar\\"\\n              onPress={onBack}\\n              hitSlop={{ left: (TOUCH - CHAT_BACK) / 2, right: (TOUCH - CHAT_BACK) / 2 }}\\n              style={styles.chatBack}\\n            >\\n              {renderIcon(ChevronLeft, c.icon.back, ICON, STROKE)}\\n            </Pressable>\\n          ) : null}\\n          <View style={[styles.contact, styles.shrink]}>\\n            {avatar}\\n            <View style={[styles.texts, styles.shrink]}>\\n              {title ? (\\n                <Text\\n                  accessibilityRole=\\"header\\"\\n                  numberOfLines={1}\\n                  style={[\\n                    semibold,\\n                    styles.text,\\n                    { fontSize: typography.label.fontSize, color: c.text.title, marginVertical: CHAT_TITLE_BOX },\\n                  ]}\\n                >\\n                  {title}\\n                </Text>\\n              ) : null}\\n              {status ? (\\n                <Text\\n                  numberOfLines={1}\\n                  style={[\\n                    medium,\\n                    styles.text,\\n                    { fontSize: typography.caption.fontSize, color: c.text.status, marginVertical: CHAT_STATUS_BOX },\\n                  ]}\\n                >\\n                  {status}\\n                </Text>\\n              ) : null}\\n            </View>\\n          </View>\\n        </View>\\n        {actions ? <View style={styles.actions}>{actions}</View> : null}\\n      </View>\\n    );\\n  }\\n\\n  return (\\n    <View style={[styles.row, styles.bar, style]}>\\n      <View style={styles.side}>\\n        {onBack ? (\\n          <Pressable\\n            accessibilityRole=\\"button\\"\\n            accessibilityLabel={backLabel || 'Voltar'}\\n            onPress={onBack}\\n            style={styles.back}\\n          >\\n            {renderIcon(ChevronLeft, c.icon.back, ICON, STROKE)}\\n            {backLabel ? (\\n              <Text\\n                numberOfLines={1}\\n                style={[medium, styles.text, { fontSize: typography.body.fontSize, color: c.text.back }]}\\n              >\\n                {backLabel}\\n              </Text>\\n            ) : null}\\n          </Pressable>\\n        ) : null}\\n      </View>\\n\\n      {/* O título ocupa o meio entre dois lados de largura fixa: fica no centro\\n          da tela com ou sem voltar e ação. */}\\n      <View style={styles.middle}>\\n        {title ? (\\n          <Text\\n            accessibilityRole=\\"header\\"\\n            numberOfLines={1}\\n            style={[\\n              semibold,\\n              styles.text,\\n              { fontSize: typography.label.fontSize, color: c.text.title, textAlign: 'center' },\\n            ]}\\n          >\\n            {title}\\n          </Text>\\n        ) : null}\\n      </View>\\n\\n      <View style={[styles.side, styles.sideEnd]}>\\n        {onAction ? (\\n          <Pressable\\n            accessibilityRole=\\"button\\"\\n            accessibilityLabel={actionLabel}\\n            onPress={onAction}\\n            style={styles.action}\\n          >\\n            {renderIcon(actionIcon, c.icon.action, ICON, STROKE)}\\n          </Pressable>\\n        ) : null}\\n      </View>\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  row: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n  },\\n  bar: {\\n    height: BAR_HEIGHT,\\n    paddingHorizontal: primitives.space[8],\\n    gap: primitives.space[8],\\n  },\\n  side: {\\n    width: SIDE,\\n    height: BAR_HEIGHT,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n  },\\n  sideEnd: {\\n    justifyContent: 'flex-end',\\n  },\\n  middle: {\\n    flex: 1,\\n    justifyContent: 'center',\\n  },\\n  back: {\\n    height: TOUCH,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[4],\\n  },\\n  // Toque de 44 × 44 com o ícone encostado à direita: space/4 deixa o desenho\\n  // a 16 da borda, como o chevron do outro lado.\\n  action: {\\n    width: TOUCH,\\n    height: TOUCH,\\n    alignItems: 'flex-end',\\n    justifyContent: 'center',\\n    paddingRight: primitives.space[4],\\n  },\\n  large: {\\n    justifyContent: 'space-between',\\n    paddingHorizontal: primitives.space[16],\\n    paddingVertical: primitives.space[8],\\n    gap: primitives.space[12],\\n  },\\n  chat: {\\n    justifyContent: 'space-between',\\n    paddingLeft: primitives.space[8],\\n    paddingRight: primitives.space[16],\\n    paddingVertical: primitives.space[8],\\n    gap: primitives.space[12],\\n  },\\n  chatStart: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[4],\\n  },\\n  chatBack: {\\n    width: CHAT_BACK,\\n    height: TOUCH,\\n    justifyContent: 'center',\\n  },\\n  contact: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[8],\\n  },\\n  texts: {\\n    gap: primitives.space[2],\\n  },\\n  actions: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[8],\\n  },\\n  shrink: {\\n    flexShrink: 1,\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"8a8dd1eae764199aa8154bfa041c2b24e268799f96000a00f4dd83ec7852bd56"}`),"bottom-sheet":JSON.parse(`{"propriedades":[{"nome":"visible","tipo":"boolean","opcional":false,"dono":"BottomSheetProps","descricao":"Aberto ou fechado. O painel entra e sai animado; fechado, nada fica montado."},{"nome":"onClose","tipo":"() => void","opcional":false,"dono":"BottomSheetProps","descricao":"Pedido de fechamento: toque no véu, arraste para baixo ou voltar do Android."},{"nome":"title","tipo":"string","opcional":false,"dono":"BottomSheetProps","descricao":""},{"nome":"description","tipo":"string","opcional":true,"dono":"BottomSheetProps","descricao":"Frase curta abaixo do título. Sem ela, a descrição não aparece."},{"nome":"align","tipo":"BottomSheetAlign","opcional":true,"dono":"BottomSheetProps","descricao":"Alinhamento do cabeçalho (variante Alinhamento do Figma). Padrão: left."},{"nome":"showHandle","tipo":"boolean","opcional":true,"dono":"BottomSheetProps","descricao":"Mostra a alça no topo. Padrão: true."},{"nome":"onAction","tipo":"() => void","opcional":true,"dono":"BottomSheetProps","descricao":"Mostra o Button Primary Large na largura toda, com \`actionLabel\`."},{"nome":"actionLabel","tipo":"string","opcional":true,"dono":"BottomSheetProps","descricao":"Rótulo da ação. Padrão: \\"Continuar\\"."},{"nome":"actionDisabled","tipo":"boolean","opcional":true,"dono":"BottomSheetProps","descricao":""},{"nome":"children","tipo":"React.ReactNode","opcional":true,"dono":"BottomSheetProps","descricao":"Slot de conteúdo: lista, chips, campos ou botões, com space/12 entre eles."},{"nome":"bottomInset","tipo":"number","opcional":true,"dono":"BottomSheetProps","descricao":"Área segura de baixo, somada ao respiro de baixo. O Tessela não mede a área segura."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"BottomSheetProps","descricao":""}],"tipos":"export type BottomSheetAlign = 'left' | 'center';\\n\\nexport type BottomSheetProps = {\\n  /** Aberto ou fechado. O painel entra e sai animado; fechado, nada fica montado. */\\n  visible: boolean;\\n  /** Pedido de fechamento: toque no véu, arraste para baixo ou voltar do Android. */\\n  onClose: () => void;\\n  title: string;\\n  /** Frase curta abaixo do título. Sem ela, a descrição não aparece. */\\n  description?: string;\\n  /** Alinhamento do cabeçalho (variante Alinhamento do Figma). Padrão: left. */\\n  align?: BottomSheetAlign;\\n  /** Mostra a alça no topo. Padrão: true. */\\n  showHandle?: boolean;\\n  /** Mostra o Button Primary Large na largura toda, com \`actionLabel\`. */\\n  onAction?: () => void;\\n  /** Rótulo da ação. Padrão: \\"Continuar\\". */\\n  actionLabel?: string;\\n  actionDisabled?: boolean;\\n  /** Slot de conteúdo: lista, chips, campos ou botões, com space/12 entre eles. */\\n  children?: React.ReactNode;\\n  /** Área segura de baixo, somada ao respiro de baixo. O Tessela não mede a área segura. */\\n  bottomInset?: number;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { Text, View } from 'react-native';\\nimport { Button, Chip, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { BottomSheet, type BottomSheetProps } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\n// Área segura de baixo do iPhone 17 Pro do simulador (indicador de início).\\n// O validador não usa safe-area-context; no app, o valor vem dele.\\nconst AREA_SEGURA = 34;\\n\\n// O \\"Conteúdo de exemplo\\" do Figma (80:30): caixa tracejada de 120 em border/strong.\\nfunction Slot() {\\n  const theme = useTheme();\\n  return (\\n    <View\\n      style={{\\n        height: 120,\\n        borderRadius: primitives.radius.md,\\n        borderWidth: primitives.stroke.hairline,\\n        borderStyle: 'dashed',\\n        borderColor: theme.border.strong,\\n        alignItems: 'center',\\n        justifyContent: 'center',\\n      }}\\n    >\\n      <Text style={{ fontFamily: FONTS['500'], fontSize: typography.body.fontSize, color: theme.fg.muted }}>\\n        Conteúdo (slot)\\n      </Text>\\n    </View>\\n  );\\n}\\n\\ntype Exemplo = {\\n  chave: string;\\n  legenda: string;\\n  props: Omit<BottomSheetProps, 'visible' | 'onClose' | 'children'> & { slot?: boolean };\\n};\\n\\n// Mesmos textos das propriedades do component set (80:27).\\nconst PADRAO = { title: 'Título do sheet', description: 'Uma frase curta que explica a escolha.' };\\nconst EXEMPLOS: Exemplo[] = [\\n  { chave: 'esquerda', legenda: 'Alinhamento Esquerda (padrão)', props: { ...PADRAO, slot: true, onAction: () => {} } },\\n  { chave: 'centro', legenda: 'Alinhamento Centro', props: { ...PADRAO, align: 'center', slot: true, onAction: () => {} } },\\n  { chave: 'sem-alca', legenda: 'sem alça', props: { ...PADRAO, showHandle: false, slot: true, onAction: () => {} } },\\n  { chave: 'sem-descricao', legenda: 'sem descrição', props: { title: PADRAO.title, slot: true, onAction: () => {} } },\\n  { chave: 'sem-acao', legenda: 'sem ação', props: { ...PADRAO, slot: true } },\\n  { chave: 'so-titulo', legenda: 'só título, sem conteúdo e sem ação', props: { title: PADRAO.title } },\\n];\\n\\nconst PESSOAS = ['Alice', 'Laura'];\\n\\nexport default function TelaBottomSheet() {\\n  const [aberto, setAberto] = useState<string | null>(null);\\n  const [pessoa, setPessoa] = useState('Alice');\\n  const fechar = () => setAberto(null);\\n\\n  return (\\n    <>\\n      <Legenda>arraste para baixo, toque no véu ou na ação para fechar</Legenda>\\n\\n      <Secao>Variantes</Secao>\\n      {EXEMPLOS.map(({ chave, legenda, props: { slot, onAction, ...props } }) => (\\n        <View key={chave}>\\n          <Legenda>{legenda}</Legenda>\\n          <Button label=\\"Abrir\\" variant=\\"tertiary\\" size=\\"medium\\" onPress={() => setAberto(chave)} />\\n          <BottomSheet\\n            {...props}\\n            visible={aberto === chave}\\n            onClose={fechar}\\n            onAction={onAction ? fechar : undefined}\\n            bottomInset={AREA_SEGURA}\\n          >\\n            {slot ? <Slot /> : null}\\n          </BottomSheet>\\n        </View>\\n      ))}\\n\\n      <Secao>Em uso</Secao>\\n      {/* O Figma (81:83) usa Option Item, que ainda não está no código: a escolha\\n          aqui é feita com Chip. */}\\n      <Legenda>escolha · alinhado à esquerda</Legenda>\\n      <Button label=\\"Para quem é essa história?\\" variant=\\"tertiary\\" size=\\"medium\\" onPress={() => setAberto('escolha')} />\\n      <BottomSheet\\n        visible={aberto === 'escolha'}\\n        onClose={fechar}\\n        title=\\"Para quem é essa história?\\"\\n        description=\\"Escolha quem vai viver a história desta noite.\\"\\n        onAction={fechar}\\n        bottomInset={AREA_SEGURA}\\n      >\\n        <View style={comum.grupo}>\\n          {PESSOAS.map((p) => (\\n            <Chip key={p} label={p} selected={pessoa === p} onPress={() => setPessoa(p)} />\\n          ))}\\n        </View>\\n      </BottomSheet>\\n\\n      <Legenda>login · centralizado, sem descrição e sem ação</Legenda>\\n      <Button label=\\"Login\\" variant=\\"tertiary\\" size=\\"medium\\" onPress={() => setAberto('login')} />\\n      <BottomSheet\\n        visible={aberto === 'login'}\\n        onClose={fechar}\\n        title=\\"Login\\"\\n        align=\\"center\\"\\n        bottomInset={AREA_SEGURA}\\n      >\\n        <Button label=\\"Entrar com e-mail\\" variant=\\"tertiary\\" onPress={fechar} />\\n        <Button label=\\"Entrar com Google\\" variant=\\"tertiary\\" onPress={fechar} />\\n        <Button label=\\"Entrar com Apple\\" variant=\\"tertiary\\" onPress={fechar} />\\n      </BottomSheet>\\n      <Legenda>tema escuro: troque o tema no topo e abra de novo</Legenda>\\n    </>\\n  );\\n}\\n","exemploEm":"apps/validador/telas/BottomSheet.tsx","fonte":"import React, { useEffect, useState } from 'react';\\nimport { Modal, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';\\nimport type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, {\\n  Extrapolation,\\n  ReduceMotion,\\n  interpolate,\\n  runOnJS,\\n  useAnimatedStyle,\\n  useReducedMotion,\\n  useSharedValue,\\n  withSpring,\\n  withTiming,\\n} from 'react-native-reanimated';\\nimport { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { Button } from './Button';\\nimport { DURATION, EASE_OUT } from './motion';\\n\\nexport type BottomSheetAlign = 'left' | 'center';\\n\\nexport type BottomSheetProps = {\\n  /** Aberto ou fechado. O painel entra e sai animado; fechado, nada fica montado. */\\n  visible: boolean;\\n  /** Pedido de fechamento: toque no véu, arraste para baixo ou voltar do Android. */\\n  onClose: () => void;\\n  title: string;\\n  /** Frase curta abaixo do título. Sem ela, a descrição não aparece. */\\n  description?: string;\\n  /** Alinhamento do cabeçalho (variante Alinhamento do Figma). Padrão: left. */\\n  align?: BottomSheetAlign;\\n  /** Mostra a alça no topo. Padrão: true. */\\n  showHandle?: boolean;\\n  /** Mostra o Button Primary Large na largura toda, com \`actionLabel\`. */\\n  onAction?: () => void;\\n  /** Rótulo da ação. Padrão: \\"Continuar\\". */\\n  actionLabel?: string;\\n  actionDisabled?: boolean;\\n  /** Slot de conteúdo: lista, chips, campos ou botões, com space/12 entre eles. */\\n  children?: React.ReactNode;\\n  /** Área segura de baixo, somada ao respiro de baixo. O Tessela não mede a área segura. */\\n  bottomInset?: number;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n// 68 × 6 vem do Figma; a largura da alça não existe na escala space.\\nconst HANDLE_WIDTH = 68;\\nconst HANDLE_HEIGHT = primitives.space[6];\\nconst RADIUS = componentMetrics.sheet.radius;\\n// Mola do Figma para entrar, voltar e sair.\\nconst SPRING = { duration: 300, dampingRatio: 0.8 };\\n// Arraste que fecha: soltar descendo acima de 800 pt/s, ou parado depois de um terço\\n// da altura do painel.\\nconst DISMISS_VELOCITY = 800;\\nconst DISMISS_FRACTION = 1 / 3;\\n// Com movimento reduzido o painel não desliza: painel e véu só aparecem e somem.\\n// O withTiming pularia direto para o fim com o sistema em movimento reduzido;\\n// ReduceMotion.Never mantém o esmaecimento, que é o substituto do deslize.\\nconst FADE_IN = { duration: DURATION.move, easing: EASE_OUT, reduceMotion: ReduceMotion.Never };\\nconst FADE_OUT = { duration: DURATION.state, easing: EASE_OUT, reduceMotion: ReduceMotion.Never };\\n\\n/**\\n * Painel que sobe do rodapé sobre um véu escuro, para uma escolha ou ação curta sem\\n * sair da tela. Abre num Modal transparente, por cima de tudo.\\n */\\nexport function BottomSheet({\\n  visible,\\n  onClose,\\n  title,\\n  description,\\n  align = 'left',\\n  showHandle = true,\\n  onAction,\\n  actionLabel = 'Continuar',\\n  actionDisabled,\\n  children,\\n  bottomInset = 0,\\n  style,\\n}: BottomSheetProps) {\\n  const c = useComponentTheme().sheet;\\n  const reduced = useReducedMotion();\\n  const semibold = useFont('600');\\n  const medium = useFont('500');\\n  const { height: screenHeight } = useWindowDimensions();\\n  const [mounted, setMounted] = useState(visible);\\n\\n  // Deslocamento do painel para baixo, em pt: 0 aberto, a própria altura fechado.\\n  // Antes da primeira medida, fica abaixo da tela inteira.\\n  const offset = useSharedValue(screenHeight);\\n  const height = useSharedValue(0);\\n  const fade = useSharedValue(reduced ? 0 : 1);\\n  const closing = useSharedValue(false);\\n  const dragBase = useSharedValue(0);\\n\\n  const unmount = () => {\\n    height.value = 0;\\n    setMounted(false);\\n  };\\n\\n  const show = () => {\\n    'worklet';\\n    closing.value = false;\\n    if (reduced) {\\n      offset.value = 0;\\n      fade.value = withTiming(1, FADE_IN);\\n    } else {\\n      fade.value = 1;\\n      offset.value = withSpring(0, SPRING);\\n    }\\n  };\\n\\n  const hide = (velocity: number) => {\\n    'worklet';\\n    closing.value = true;\\n    const done = (finished?: boolean) => {\\n      'worklet';\\n      if (finished) runOnJS(unmount)();\\n    };\\n    if (reduced) fade.value = withTiming(0, FADE_OUT, done);\\n    else offset.value = withSpring(height.value, { ...SPRING, velocity }, done);\\n  };\\n\\n  useEffect(() => {\\n    if (visible) {\\n      setMounted(true);\\n      // Reaberto durante a saída: já está medido, então volta daqui mesmo.\\n      if (height.value > 0) show();\\n    } else if (!closing.value) {\\n      // Fechado antes da primeira medida: não há o que animar.\\n      if (height.value > 0) hide(0);\\n      else unmount();\\n    }\\n    // show e hide mudam a cada render; só a troca de \`visible\` dispara a animação.\\n  }, [visible]);\\n\\n  const onLayout = (e: LayoutChangeEvent) => {\\n    const first = height.value === 0;\\n    height.value = e.nativeEvent.layout.height;\\n    // A entrada só começa quando a altura é conhecida: parte de exatamente fora da tela.\\n    if (first && visible) {\\n      offset.value = reduced ? 0 : height.value;\\n      show();\\n    }\\n  };\\n\\n  const pan = Gesture.Pan()\\n    .withTestId('bottom-sheet-pan')\\n    // Só o arraste para baixo pega o gesto; para cima, o conteúdo continua livre.\\n    .activeOffsetY(primitives.space[8])\\n    .onStart((e) => {\\n      'worklet';\\n      // Desconta os 8 da ativação: o painel não pula quando o gesto começa.\\n      dragBase.value = offset.value - e.translationY;\\n    })\\n    .onUpdate((e) => {\\n      'worklet';\\n      offset.value = Math.max(0, dragBase.value + e.translationY);\\n    })\\n    .onEnd((e) => {\\n      'worklet';\\n      const y = Math.max(0, dragBase.value + e.translationY);\\n      const dismiss =\\n        e.velocityY > DISMISS_VELOCITY || (y > height.value * DISMISS_FRACTION && e.velocityY >= 0);\\n      if (dismiss) {\\n        hide(e.velocityY);\\n        runOnJS(onClose)();\\n      } else {\\n        offset.value = withSpring(0, { ...SPRING, velocity: e.velocityY });\\n      }\\n    });\\n\\n  // 'worklet' explícito em todo callback de gesto e estilo animado: o build do pacote\\n  // sai em CommonJS, e nesse formato o plugin do Reanimated não reconhece a chamada.\\n  const scrimStyle = useAnimatedStyle(() => {\\n    'worklet';\\n    // O véu acompanha o painel: clareia enquanto ele desce.\\n    return {\\n      opacity:\\n        fade.value * interpolate(offset.value, [0, Math.max(height.value, 1)], [1, 0], Extrapolation.CLAMP),\\n    };\\n  });\\n  const sheetStyle = useAnimatedStyle(() => {\\n    'worklet';\\n    return { opacity: fade.value, transform: [{ translateY: offset.value }] };\\n  });\\n\\n  if (!mounted) return null;\\n\\n  const textAlign = align === 'center' ? 'center' : 'left';\\n\\n  return (\\n    <Modal\\n      transparent\\n      visible\\n      animationType=\\"none\\"\\n      statusBarTranslucent\\n      navigationBarTranslucent\\n      onRequestClose={onClose}\\n    >\\n      {/* Dentro do Modal o gesture-handler precisa de uma raiz própria (Android). */}\\n      <GestureHandlerRootView style={styles.root} onAccessibilityEscape={onClose}>\\n        <Pressable\\n          accessibilityRole=\\"button\\"\\n          accessibilityLabel=\\"Fechar\\"\\n          onPress={onClose}\\n          style={FILL}\\n        >\\n          <Animated.View style={[FILL, { backgroundColor: c.scrim }, scrimStyle]} />\\n        </Pressable>\\n\\n        <GestureDetector gesture={pan}>\\n          <Animated.View\\n            onLayout={onLayout}\\n            style={[\\n              styles.sheet,\\n              {\\n                backgroundColor: c.surface,\\n                paddingBottom: primitives.space[24] + bottomInset,\\n              },\\n              sheetStyle,\\n              style,\\n            ]}\\n          >\\n            {showHandle ? <View style={[styles.handle, { backgroundColor: c.handle }]} /> : null}\\n\\n            <View style={styles.header}>\\n              <Text\\n                accessibilityRole=\\"header\\"\\n                style={[\\n                  semibold,\\n                  styles.text,\\n                  {\\n                    fontSize: typography.heading.fontSize,\\n                    lineHeight: typography.heading.lineHeight,\\n                    color: c.text.title,\\n                    textAlign,\\n                  },\\n                ]}\\n              >\\n                {title}\\n              </Text>\\n              {description ? (\\n                <Text\\n                  style={[\\n                    medium,\\n                    styles.text,\\n                    {\\n                      fontSize: typography.bodyLarge.fontSize,\\n                      lineHeight: typography.bodyLarge.lineHeight,\\n                      color: c.text.description,\\n                      textAlign,\\n                    },\\n                  ]}\\n                >\\n                  {description}\\n                </Text>\\n              ) : null}\\n            </View>\\n\\n            {children ? <View style={styles.content}>{children}</View> : null}\\n\\n            {onAction ? (\\n              <Button label={actionLabel} onPress={onAction} disabled={actionDisabled} />\\n            ) : null}\\n          </Animated.View>\\n        </GestureDetector>\\n      </GestureHandlerRootView>\\n    </Modal>\\n  );\\n}\\n\\n// Coordenadas explícitas: o React Native 0.86 removeu StyleSheet.absoluteFillObject.\\nconst FILL = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 } as const;\\n\\nconst styles = StyleSheet.create({\\n  root: {\\n    flex: 1,\\n    justifyContent: 'flex-end',\\n  },\\n  sheet: {\\n    borderTopLeftRadius: RADIUS,\\n    borderTopRightRadius: RADIUS,\\n    paddingTop: primitives.space[8],\\n    paddingHorizontal: primitives.space[16],\\n    gap: primitives.space[24],\\n  },\\n  handle: {\\n    alignSelf: 'center',\\n    width: HANDLE_WIDTH,\\n    height: HANDLE_HEIGHT,\\n    borderRadius: HANDLE_HEIGHT / 2,\\n  },\\n  header: {\\n    gap: primitives.space[8],\\n  },\\n  content: {\\n    gap: primitives.space[12],\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"3f6896468c05e8bf14dd01153dd69ba42a9b4f7286ab48b7facaa74f1d424d2b"}`),avatar:JSON.parse(`{"propriedades":[{"nome":"size","tipo":"AvatarSize","opcional":true,"dono":"AvatarProps","descricao":"small 32 (listas densas, chips), medium 40 (itens de lista), large 56 (topo de perfil)."},{"nome":"shape","tipo":"AvatarShape","opcional":true,"dono":"AvatarProps","descricao":"rounded usa os cantos do sistema; circle vai dentro de pílulas e do Header Chat."},{"nome":"source","tipo":"ImageSourcePropType","opcional":true,"dono":"AvatarProps","descricao":"Foto da pessoa, no modo cover. Enquanto não carrega, fica o fundo de placeholder."},{"nome":"initials","tipo":"string","opcional":true,"dono":"AvatarProps","descricao":"Até duas letras, mostradas quando não há foto. Sem foto e sem iniciais, aparece o ícone."},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"AvatarProps","descricao":"Nome da pessoa para leitores de tela. Use quando o avatar estiver sozinho; com o\\nnome escrito ao lado, deixe vazio e o avatar fica decorativo."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"AvatarProps","descricao":""}],"tipos":"export type AvatarSize = 'small' | 'medium' | 'large';\\n\\nexport type AvatarShape = 'rounded' | 'circle';\\n\\nexport type AvatarProps = {\\n  /** small 32 (listas densas, chips), medium 40 (itens de lista), large 56 (topo de perfil). */\\n  size?: AvatarSize;\\n  /** rounded usa os cantos do sistema; circle vai dentro de pílulas e do Header Chat. */\\n  shape?: AvatarShape;\\n  /** Foto da pessoa, no modo cover. Enquanto não carrega, fica o fundo de placeholder. */\\n  source?: ImageSourcePropType;\\n  /** Até duas letras, mostradas quando não há foto. Sem foto e sem iniciais, aparece o ícone. */\\n  initials?: string;\\n  /**\\n   * Nome da pessoa para leitores de tela. Use quando o avatar estiver sozinho; com o\\n   * nome escrito ao lado, deixe vazio e o avatar fica decorativo.\\n   */\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React from 'react';\\nimport { StyleSheet, View } from 'react-native';\\nimport type { ImageSourcePropType } from 'react-native';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { Avatar } from '@tessela/ui';\\nimport type { AvatarShape } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao } from './_comum';\\n\\n// Foto de exemplo (rede). Sem rede, o avatar fica no placeholder, como no Figma.\\nconst FOTO: ImageSourcePropType = { uri: 'https://picsum.photos/id/64/168/168' };\\n// Domínio .invalid nunca resolve: mostra o estado \\"sem foto carregada\\" do Figma.\\nconst SEM_FOTO: ImageSourcePropType = { uri: 'https://foto.invalid/avatar.jpg' };\\n\\n// Linhas do component set do Figma (82:35): Imagem, Iniciais, Ícone × Small, Medium, Large.\\nfunction Grade({ shape }: { shape: AvatarShape }) {\\n  return (\\n    <>\\n      <Legenda>Imagem · sem foto carregada (avatar/image-placeholder)</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar shape={shape} source={SEM_FOTO} />\\n        <Avatar shape={shape} size=\\"medium\\" source={SEM_FOTO} />\\n        <Avatar shape={shape} size=\\"large\\" source={SEM_FOTO} />\\n      </View>\\n      <Legenda>Imagem · com foto</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar shape={shape} source={FOTO} />\\n        <Avatar shape={shape} size=\\"medium\\" source={FOTO} />\\n        <Avatar shape={shape} size=\\"large\\" source={FOTO} />\\n      </View>\\n      <Legenda>Iniciais</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar shape={shape} initials=\\"AL\\" />\\n        <Avatar shape={shape} size=\\"medium\\" initials=\\"AL\\" />\\n        <Avatar shape={shape} size=\\"large\\" initials=\\"AL\\" />\\n      </View>\\n      <Legenda>Ícone</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar shape={shape} />\\n        <Avatar shape={shape} size=\\"medium\\" />\\n        <Avatar shape={shape} size=\\"large\\" />\\n      </View>\\n    </>\\n  );\\n}\\n\\n// Quadro do \\"Em uso\\" em modo Dark: bg/base do tema escuro, raio 16, respiro 24/32.\\nfunction QuadroEscuro({ children }: { children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View\\n      style={{\\n        alignSelf: 'flex-start',\\n        backgroundColor: theme.bg.base,\\n        borderRadius: primitives.radius.lg,\\n        paddingTop: primitives.space[24],\\n        paddingHorizontal: primitives.space[24],\\n        paddingBottom: primitives.space[32],\\n      }}\\n    >\\n      {children}\\n    </View>\\n  );\\n}\\n\\nexport default function TelaAvatar() {\\n  return (\\n    <>\\n      <Secao>Rounded</Secao>\\n      <Legenda>Small 32 · Medium 40 · Large 56</Legenda>\\n      <Grade shape=\\"rounded\\" />\\n\\n      <Secao>Circle</Secao>\\n      <Legenda>Small 32 · Medium 40 · Large 56</Legenda>\\n      <Grade shape=\\"circle\\" />\\n\\n      {/* Mesmos quadros do \\"Em uso\\" do Figma (82:106). */}\\n      <Secao>Em uso</Secao>\\n      <Legenda>Iniciais nos três tamanhos</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar initials=\\"LA\\" />\\n        <Avatar size=\\"medium\\" initials=\\"AL\\" />\\n        <Avatar size=\\"large\\" initials=\\"OT\\" />\\n      </View>\\n\\n      <Legenda>Circle nos três tamanhos</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar shape=\\"circle\\" initials=\\"LA\\" />\\n        <Avatar shape=\\"circle\\" size=\\"medium\\" initials=\\"AL\\" />\\n        <Avatar shape=\\"circle\\" size=\\"large\\" initials=\\"OT\\" />\\n      </View>\\n\\n      <Legenda>Sem nome: ícone</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar />\\n        <Avatar size=\\"medium\\" />\\n        <Avatar size=\\"large\\" />\\n      </View>\\n\\n      <Legenda>Imagem: troque o preenchimento pela foto</Legenda>\\n      <View style={styles.avatares}>\\n        <Avatar source={FOTO} accessibilityLabel=\\"Foto de perfil\\" />\\n        <Avatar size=\\"medium\\" source={FOTO} accessibilityLabel=\\"Foto de perfil\\" />\\n        <Avatar size=\\"large\\" source={FOTO} accessibilityLabel=\\"Foto de perfil\\" />\\n      </View>\\n\\n      <Legenda>Tema escuro (modo Dark no quadro)</Legenda>\\n      <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n        <QuadroEscuro>\\n          <View style={[styles.avatares, { marginBottom: 0 }]}>\\n            <Avatar size=\\"medium\\" initials=\\"GA\\" />\\n            <Avatar size=\\"medium\\" />\\n            <Avatar size=\\"medium\\" source={SEM_FOTO} />\\n          </View>\\n        </QuadroEscuro>\\n      </TesselaProvider>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  // Fila de avatares do \\"Em uso\\": space/16 entre eles, centrados na altura.\\n  avatares: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[16],\\n    marginBottom: primitives.space[12],\\n  },\\n});\\n","exemploEm":"apps/validador/telas/Avatar.tsx","fonte":"import React from 'react';\\nimport { Image, StyleSheet, Text, View } from 'react-native';\\nimport type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';\\nimport { UserRound } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\n\\nexport type AvatarSize = 'small' | 'medium' | 'large';\\nexport type AvatarShape = 'rounded' | 'circle';\\n\\nexport type AvatarProps = {\\n  /** small 32 (listas densas, chips), medium 40 (itens de lista), large 56 (topo de perfil). */\\n  size?: AvatarSize;\\n  /** rounded usa os cantos do sistema; circle vai dentro de pílulas e do Header Chat. */\\n  shape?: AvatarShape;\\n  /** Foto da pessoa, no modo cover. Enquanto não carrega, fica o fundo de placeholder. */\\n  source?: ImageSourcePropType;\\n  /** Até duas letras, mostradas quando não há foto. Sem foto e sem iniciais, aparece o ícone. */\\n  initials?: string;\\n  /**\\n   * Nome da pessoa para leitores de tela. Use quando o avatar estiver sozinho; com o\\n   * nome escrito ao lado, deixe vazio e o avatar fica decorativo.\\n   */\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\ntype SizeSpec = {\\n  box: number;\\n  radius: number;\\n  fontSize: number;\\n  lineHeight: number;\\n  icon: number;\\n};\\n\\n// 32, 40 e 56 vêm do Figma (lados fixos de cada tamanho).\\nconst SIZES: Record<AvatarSize, SizeSpec> = {\\n  small: {\\n    box: 32,\\n    radius: componentMetrics.avatar.radius[32],\\n    fontSize: typography.labelSmall.fontSize,\\n    lineHeight: typography.labelSmall.lineHeight,\\n    icon: primitives.iconSize.sm,\\n  },\\n  medium: {\\n    box: 40,\\n    radius: componentMetrics.avatar.radius[40],\\n    fontSize: typography.label.fontSize,\\n    lineHeight: typography.label.lineHeight,\\n    icon: primitives.iconSize.md,\\n  },\\n  large: {\\n    box: 56,\\n    radius: componentMetrics.avatar.radius[56],\\n    fontSize: typography.heading.fontSize,\\n    lineHeight: typography.heading.lineHeight,\\n    icon: primitives.iconSize.lg,\\n  },\\n};\\n\\nconst STROKE = componentMetrics.avatar.stroke.icon;\\n\\n/**\\n * Representa uma pessoa ou perfil. Mostra a foto quando ela existe; sem foto, as\\n * iniciais; sem nome, o ícone user-round.\\n */\\nexport function Avatar({\\n  size = 'small',\\n  shape = 'rounded',\\n  source,\\n  initials,\\n  accessibilityLabel,\\n  style,\\n}: AvatarProps) {\\n  const c = useComponentTheme().avatar;\\n  const semibold = useFont('600');\\n  const spec = SIZES[size];\\n  // \\"Até duas letras\\" (documentação do Figma). Array.from não parte acentos compostos.\\n  const letters = initials ? Array.from(initials.trim()).slice(0, 2).join('').toUpperCase() : '';\\n  const content = source ? 'image' : letters ? 'initials' : 'icon';\\n  const labelled = Boolean(accessibilityLabel);\\n\\n  return (\\n    <View\\n      accessible={labelled}\\n      accessibilityRole={labelled ? 'image' : undefined}\\n      accessibilityLabel={accessibilityLabel}\\n      // Sem rótulo, o avatar é decorativo: as iniciais não são lidas soltas.\\n      accessibilityElementsHidden={!labelled}\\n      importantForAccessibility={labelled ? 'yes' : 'no-hide-descendants'}\\n      style={[\\n        styles.avatar,\\n        {\\n          width: spec.box,\\n          height: spec.box,\\n          borderRadius: shape === 'circle' ? componentMetrics.avatar.radius.circle : spec.radius,\\n          backgroundColor: content === 'image' ? c.imagePlaceholder : c.surface,\\n        },\\n        style,\\n      ]}\\n    >\\n      {content === 'image' ? (\\n        <Image source={source!} resizeMode=\\"cover\\" style={{ width: spec.box, height: spec.box }} />\\n      ) : content === 'initials' ? (\\n        <Text\\n          numberOfLines={1}\\n          style={[\\n            semibold,\\n            styles.initials,\\n            {\\n              fontSize: spec.fontSize,\\n              color: c.text,\\n              // Trim NONE no Figma: a caixa de linha do estilo, sem lineHeight (regra 3).\\n              marginVertical: lineBoxMargin(spec.fontSize, spec.lineHeight),\\n            },\\n          ]}\\n        >\\n          {letters}\\n        </Text>\\n      ) : (\\n        renderIcon(UserRound, c.icon, spec.icon, STROKE)\\n      )}\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  avatar: {\\n    overflow: 'hidden',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  initials: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"bbb0006bca7f3d1901ab7b6c4adc779328fae918250645e75d8e01082073eb1d"}`),"option-item":{propriedades:[{nome:`selected`,tipo:`boolean`,opcional:!0,dono:`SelectionMarkerProps`,descricao:``},{nome:`disabled`,tipo:`boolean`,opcional:!0,dono:`SelectionMarkerProps`,descricao:``},{nome:`title`,tipo:`string`,opcional:!1,dono:`OptionItemProps`,descricao:``},{nome:`detail`,tipo:`string`,opcional:!1,dono:`OptionItemProps`,descricao:``},{nome:`highlight`,tipo:`string`,opcional:!0,dono:`OptionItemProps`,descricao:`Texto opcional depois do separador.`},{nome:`avatar`,tipo:`AvatarProps | false`,opcional:!0,dono:`OptionItemProps`,descricao:`O avatar padrão mostra o ícone de pessoa; false o remove.`},{nome:`selected`,tipo:`boolean`,opcional:!0,dono:`OptionItemProps`,descricao:``},{nome:`multiple`,tipo:`boolean`,opcional:!0,dono:`OptionItemProps`,descricao:`Escolha múltipla anuncia checkbox; a escolha única anuncia radio.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`OptionItemProps`,descricao:``}],tipos:`export type SelectionMarkerProps = {
  selected?: boolean;
  disabled?: boolean;
};

export type OptionItemProps = Omit<PressableProps, 'style' | 'children' | 'accessibilityRole'> & {
  title: string;
  detail: string;
  /** Texto opcional depois do separador. */
  highlight?: string;
  /** O avatar padrão mostra o ícone de pessoa; false o remove. */
  avatar?: AvatarProps | false;
  selected?: boolean;
  /** Escolha múltipla anuncia checkbox; a escolha única anuncia radio. */
  multiple?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { primitives } from '@tessela/tokens';
import { OptionItem } from '@tessela/ui';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

function Perfis() {
  const [selected, setSelected] = useState('Alice');
  return <View style={[comum.coluna, styles.list]}>
    <OptionItem title="Alice" detail="6 anos" highlight="12 histórias" avatar={{ initials: 'AL' }} selected={selected === 'Alice'} onPress={() => setSelected('Alice')} />
    <OptionItem title="Laura" detail="2 anos" highlight="6 histórias" avatar={{ initials: 'AL' }} selected={selected === 'Laura'} onPress={() => setSelected('Laura')} />
  </View>;
}
function Escuro() {
  const theme = useTheme();
  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><Perfis /></View>;
}

export default function TelaOptionItem() {
  const [language, setLanguage] = useState('pt');
  const [guest, setGuest] = useState(false);
  return <>
    <Secao>Estados</Secao>
    <Legenda>Default · Selected · Disabled. Segure a linha para ver Pressed.</Legenda>
    <View style={[comum.coluna, styles.list]}>
      <OptionItem title="Alice" detail="6 anos" highlight="12 histórias" avatar={{ initials: 'AL' }} />
      <OptionItem title="Alice" detail="6 anos" highlight="12 histórias" avatar={{ initials: 'AL' }} selected />
      <OptionItem title="Alice" detail="6 anos" highlight="12 histórias" avatar={{ initials: 'AL' }} disabled />
    </View>
    <Secao>Em uso</Secao>
    <Legenda>Lista de escolha</Legenda>
    <Perfis />
    <Legenda>Sem avatar e sem destaque</Legenda>
    <View style={[comum.coluna, styles.list]}>
      <OptionItem title="Português (Brasil)" detail="Idioma do app" avatar={false} selected={language === 'pt'} onPress={() => setLanguage('pt')} />
      <OptionItem title="English" detail="App language" avatar={false} selected={language === 'en'} onPress={() => setLanguage('en')} />
    </View>
    <Legenda>Avatar com ícone e opção desabilitada</Legenda>
    <View style={[comum.coluna, styles.list]}>
      <OptionItem title="Convidado" detail="Sem perfil" selected={guest} onPress={() => setGuest(true)} />
      <OptionItem title="Otto" detail="4 anos" highlight="Limite atingido" avatar={{ initials: 'AL' }} disabled />
    </View>
    <Legenda>Tema escuro</Legenda>
    <TesselaProvider theme="dark" fonts={FONTS}><Escuro /></TesselaProvider>
  </>;
}

const styles = StyleSheet.create({
  list: { gap: primitives.space[12] },
  dark: { paddingVertical: primitives.space[24], borderRadius: primitives.radius.lg },
});
`,exemploEm:`apps/validador/telas/OptionItem.tsx`,fonte:`import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { Check } from 'lucide-react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { Avatar, type AvatarProps } from './Avatar';
import { renderIcon } from './Icon';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT_CSS } from './motion';
import { useComponentTheme, useFont } from './theme';

export type SelectionMarkerProps = {
  selected?: boolean;
  disabled?: boolean;
};

/** Marcador decorativo; a linha que o contém anuncia a seleção. */
export function SelectionMarker({ selected = false, disabled = false }: SelectionMarkerProps) {
  const c = useComponentTheme().selection;
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={[
      styles.marker,
      { backgroundColor: selected ? c.surface.on : c.surface.off, opacity: disabled ? 0.5 : 1,
        borderWidth: selected ? 0 : componentMetrics.selection.stroke.border, borderColor: c.border.off },
    ]}>
      {selected ? renderIcon(Check, c.icon, primitives.iconSize.sm, componentMetrics.selection.stroke.icon) : null}
    </View>
  );
}

export type OptionItemProps = Omit<PressableProps, 'style' | 'children' | 'accessibilityRole'> & {
  title: string;
  detail: string;
  /** Texto opcional depois do separador. */
  highlight?: string;
  /** O avatar padrão mostra o ícone de pessoa; false o remove. */
  avatar?: AvatarProps | false;
  selected?: boolean;
  /** Escolha múltipla anuncia checkbox; a escolha única anuncia radio. */
  multiple?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function OptionItem({ title, detail, highlight, avatar = {}, selected = false, multiple = false,
  disabled = false, style, accessibilityLabel, onPress, ...rest }: OptionItemProps) {
  const c = useComponentTheme().item;
  const semibold = useFont('600');
  const medium = useFont('500');
  return (
    <Pressable {...rest} disabled={disabled} onPress={disabled ? undefined : onPress}
      accessibilityRole={multiple ? 'checkbox' : 'radio'}
      accessibilityLabel={accessibilityLabel ?? [title, detail, highlight].filter(Boolean).join(', ')}
      accessibilityState={{ checked: selected, selected, disabled: Boolean(disabled) }} style={style}>
      {({ pressed }) => (
        <Animated.View style={[styles.item, { backgroundColor: pressed && !disabled ? c.surfacePressed : c.surface,
          transitionProperty: 'backgroundColor', transitionDuration: DURATION.press, transitionTimingFunction: EASE_OUT_CSS }]}>
          {avatar !== false ? <Avatar {...avatar} size="medium" style={[avatar.style, disabled && styles.dimmed]} /> : null}
          <View style={styles.texts}>
            <Text numberOfLines={1} style={[semibold, styles.title, { color: disabled ? c.text.disabled : c.text.title }]}>{title}</Text>
            <View style={styles.details}>
              <Text numberOfLines={1} style={[medium, styles.body, { color: disabled ? c.text.disabled : c.text.meta }]}>{detail}</Text>
              {highlight ? <>
                <View style={[styles.separator, { backgroundColor: c.separator }]} />
                <Text numberOfLines={1} style={[medium, styles.body, { color: disabled ? c.text.disabled : c.text.highlight }]}>{highlight}</Text>
              </> : null}
            </View>
          </View>
          <SelectionMarker selected={selected} disabled={Boolean(disabled)} />
          <View pointerEvents="none" style={[styles.border, { borderColor: selected ? c.borderSelected : c.border }]} />
        </Animated.View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', gap: primitives.space[12], paddingVertical: primitives.space[12],
    paddingLeft: primitives.space[16], paddingRight: primitives.space[20], borderRadius: componentMetrics.item.radius },
  texts: { flex: 1, minWidth: 0, gap: primitives.space[4] },
  title: { includeFontPadding: false, fontSize: typography.label.fontSize,
    marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight) },
  details: { flexDirection: 'row', alignItems: 'center', gap: primitives.space[6], overflow: 'hidden' },
  body: { includeFontPadding: false, fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight, flexShrink: 1 },
  // O ponto mede 3 × 3 no Figma.
  separator: { width: 3, height: 3, borderRadius: primitives.radius.full },
  marker: { width: primitives.iconSize.md, height: primitives.iconSize.md, borderRadius: componentMetrics.selection.radius,
    alignItems: 'center', justifyContent: 'center' },
  dimmed: { opacity: 0.5 },
  border: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
    borderRadius: componentMetrics.item.radius, borderWidth: componentMetrics.item.stroke.container },
});
`,hash:`8a658002303b364cc5fa02846a4b9a7b88556fc9d40f6d5c874afa73cef92636`},"icon-button":JSON.parse(`{"propriedades":[{"nome":"accessibilityLabel","tipo":"string","opcional":false,"dono":"IconButtonProps","descricao":"Obrigatório: sem texto visível, é o que o leitor de tela anuncia (\\"Mais opções\\", \\"Fechar\\")."},{"nome":"icon","tipo":"IconSource","opcional":true,"dono":"IconButtonProps","descricao":"Ícone Lucide (ex.: \`X\`) ou elemento pronto. Padrão do Figma: ellipsis."},{"nome":"variant","tipo":"IconButtonVariant","opcional":true,"dono":"IconButtonProps","descricao":"neutral: ação discreta, como mais opções."},{"nome":"size","tipo":"IconButtonSize","opcional":true,"dono":"IconButtonProps","descricao":""},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"IconButtonProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"IconButtonProps","descricao":""}],"tipos":"export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'neutral';\\n\\nexport type IconButtonSize = 'large' | 'medium' | 'small';\\n\\nexport type IconButtonProps = Omit<PressableProps, 'style' | 'children' | 'accessibilityLabel'> & {\\n  /** Obrigatório: sem texto visível, é o que o leitor de tela anuncia (\\"Mais opções\\", \\"Fechar\\"). */\\n  accessibilityLabel: string;\\n  /** Ícone Lucide (ex.: \`X\`) ou elemento pronto. Padrão do Figma: ellipsis. */\\n  icon?: IconSource;\\n  /** neutral: ação discreta, como mais opções. */\\n  variant?: IconButtonVariant;\\n  size?: IconButtonSize;\\n  disabled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { Text, View } from 'react-native';\\nimport { Ellipsis, Play, Plus, X } from 'lucide-react-native';\\nimport { Button, TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { IconButton, type IconButtonVariant } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\nconst ESTILOS: { variant: IconButtonVariant; nome: string }[] = [\\n  { variant: 'primary', nome: 'Primary' },\\n  { variant: 'secondary', nome: 'Secondary' },\\n  { variant: 'tertiary', nome: 'Tertiary' },\\n  { variant: 'neutral', nome: 'Neutral' },\\n];\\n\\n// Quadro do \\"Em uso\\" do Figma (88:213): bg/base, raio 16, respiro 24/24/32/24, gap 16.\\nfunction Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View\\n      style={{\\n        alignSelf: 'flex-start',\\n        backgroundColor: theme.bg.base,\\n        borderRadius: primitives.radius.lg,\\n        paddingTop: primitives.space[24],\\n        paddingHorizontal: primitives.space[24],\\n        paddingBottom: primitives.space[32],\\n        gap: primitives.space[16],\\n        marginBottom: primitives.space[16],\\n      }}\\n    >\\n      <Text style={{ fontFamily: FONTS['600'], fontSize: typography.labelSmall.fontSize, color: theme.fg.muted }}>\\n        {titulo}\\n      </Text>\\n      <View style={{ flexDirection: 'row', alignItems: 'center', gap: primitives.space[12] }}>{children}</View>\\n    </View>\\n  );\\n}\\n\\nexport default function TelaIconButton() {\\n  const [toque, setToque] = useState<string | null>(null);\\n  const tocar = (nome: string) => () => setToque(nome);\\n  return (\\n    <>\\n      <Legenda>colunas Large, Medium, Small · segure para ver o Pressed</Legenda>\\n      {ESTILOS.map(({ variant, nome }) => (\\n        <React.Fragment key={variant}>\\n          <Secao>{nome}</Secao>\\n          <Legenda>Default</Legenda>\\n          <View style={comum.linha}>\\n            <IconButton accessibilityLabel=\\"Mais opções\\" variant={variant} size=\\"large\\" />\\n            <IconButton accessibilityLabel=\\"Mais opções\\" variant={variant} size=\\"medium\\" />\\n            <IconButton accessibilityLabel=\\"Mais opções\\" variant={variant} size=\\"small\\" />\\n          </View>\\n          <Legenda>Disabled</Legenda>\\n          <View style={comum.linha}>\\n            <IconButton accessibilityLabel=\\"Mais opções\\" variant={variant} size=\\"large\\" disabled />\\n            <IconButton accessibilityLabel=\\"Mais opções\\" variant={variant} size=\\"medium\\" disabled />\\n            <IconButton accessibilityLabel=\\"Mais opções\\" variant={variant} size=\\"small\\" disabled />\\n          </View>\\n        </React.Fragment>\\n      ))}\\n\\n      <Secao>Em uso</Secao>\\n      <Legenda>{toque ? \`último toque: \${toque}\` : 'toque nos botões'}</Legenda>\\n      <Quadro titulo=\\"Quatro estilos (Small)\\">\\n        <IconButton accessibilityLabel=\\"Tocar\\" icon={Play} size=\\"small\\" onPress={tocar('tocar')} />\\n        <IconButton accessibilityLabel=\\"Adicionar\\" icon={Plus} size=\\"small\\" variant=\\"secondary\\" onPress={tocar('adicionar')} />\\n        <IconButton accessibilityLabel=\\"Fechar\\" icon={X} size=\\"small\\" variant=\\"tertiary\\" onPress={tocar('fechar')} />\\n        <IconButton accessibilityLabel=\\"Mais opções\\" icon={Ellipsis} size=\\"small\\" variant=\\"neutral\\" onPress={tocar('mais opções')} />\\n      </Quadro>\\n      <Quadro titulo=\\"Três tamanhos\\">\\n        <IconButton accessibilityLabel=\\"Tocar\\" icon={Play} size=\\"large\\" onPress={tocar('tocar (large)')} />\\n        <IconButton accessibilityLabel=\\"Tocar\\" icon={Play} size=\\"medium\\" onPress={tocar('tocar (medium)')} />\\n        <IconButton accessibilityLabel=\\"Tocar\\" icon={Play} size=\\"small\\" onPress={tocar('tocar (small)')} />\\n      </Quadro>\\n      <Quadro titulo=\\"Ao lado de um Button Soft, como no app\\">\\n        <Button label=\\"Ouvir\\" size=\\"small\\" variant=\\"soft\\" trailingIcon={Play} onPress={tocar('ouvir')} />\\n        <IconButton accessibilityLabel=\\"Mais opções\\" size=\\"small\\" variant=\\"neutral\\" onPress={tocar('mais opções')} />\\n      </Quadro>\\n      <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n        <Quadro titulo=\\"Tema escuro (modo Dark no quadro)\\">\\n          <IconButton accessibilityLabel=\\"Tocar\\" icon={Play} size=\\"small\\" onPress={tocar('tocar (escuro)')} />\\n          <IconButton accessibilityLabel=\\"Adicionar\\" icon={Plus} size=\\"small\\" variant=\\"secondary\\" onPress={tocar('adicionar (escuro)')} />\\n          <IconButton accessibilityLabel=\\"Fechar\\" icon={X} size=\\"small\\" variant=\\"tertiary\\" onPress={tocar('fechar (escuro)')} />\\n          <IconButton accessibilityLabel=\\"Mais opções\\" size=\\"small\\" variant=\\"neutral\\" onPress={tocar('mais opções (escuro)')} />\\n          <IconButton accessibilityLabel=\\"Mais opções\\" size=\\"small\\" variant=\\"neutral\\" disabled />\\n        </Quadro>\\n      </TesselaProvider>\\n    </>\\n  );\\n}\\n","exemploEm":"apps/validador/telas/IconButton.tsx","fonte":"import React from 'react';\\nimport { Pressable, StyleSheet, View } from 'react-native';\\nimport type { PressableProps, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { useReducedMotion } from 'react-native-reanimated';\\nimport { Ellipsis } from 'lucide-react-native';\\nimport { componentMetrics, primitives, type ComponentTheme } from '@tessela/tokens';\\nimport { useComponentTheme } from './theme';\\nimport { renderIcon, type IconSource } from './Icon';\\nimport { DURATION, EASE_OUT_CSS } from './motion';\\n\\nexport type IconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'neutral';\\nexport type IconButtonSize = 'large' | 'medium' | 'small';\\n\\nexport type IconButtonProps = Omit<PressableProps, 'style' | 'children' | 'accessibilityLabel'> & {\\n  /** Obrigatório: sem texto visível, é o que o leitor de tela anuncia (\\"Mais opções\\", \\"Fechar\\"). */\\n  accessibilityLabel: string;\\n  /** Ícone Lucide (ex.: \`X\`) ou elemento pronto. Padrão do Figma: ellipsis. */\\n  icon?: IconSource;\\n  /** neutral: ação discreta, como mais opções. */\\n  variant?: IconButtonVariant;\\n  size?: IconButtonSize;\\n  disabled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\ntype SizeSpec = {\\n  side: number;\\n  radius: number;\\n  icon: number;\\n  stroke: number;\\n  hitSlop: number;\\n};\\n\\nconst SIZES: Record<IconButtonSize, SizeSpec> = {\\n  // Raios próprios, como no app: 26 no Large (radius/control-lg) e 16 no Medium e no\\n  // Small (radius/lg). O raio do Button (22 em 50) deixaria o quadrado quase um círculo.\\n  large: {\\n    side: 60,\\n    radius: componentMetrics.iconbutton.radius.large,\\n    icon: primitives.iconSize.lg,\\n    stroke: componentMetrics.button.stroke.icon,\\n    hitSlop: 0,\\n  },\\n  medium: {\\n    side: 50,\\n    radius: componentMetrics.iconbutton.radius.medium,\\n    icon: primitives.iconSize.md,\\n    stroke: componentMetrics.button.stroke.icon,\\n    hitSlop: 0,\\n  },\\n  small: {\\n    side: 36,\\n    radius: componentMetrics.iconbutton.radius.small,\\n    icon: primitives.iconSize.md,\\n    stroke: componentMetrics.button.stroke.iconSmall,\\n    // 36 de lado: o hitSlop de 4 completa os 44 de alvo sem mudar o desenho.\\n    hitSlop: 4,\\n  },\\n};\\n\\nconst BORDER = componentMetrics.button.stroke.container;\\n\\ntype Surface = { background: string; icon: string; border: string | null };\\n\\nfunction surfaceFor(c: ComponentTheme, variant: IconButtonVariant, pressed: boolean, disabled: boolean): Surface {\\n  if (disabled) {\\n    return { background: c.button.surface.disabled, icon: c.button.text.disabled, border: null };\\n  }\\n  switch (variant) {\\n    case 'secondary':\\n      return {\\n        background: pressed ? c.button.surface.secondaryPressed : c.button.surface.secondaryDefault,\\n        icon: c.button.icon.onDark,\\n        border: null,\\n      };\\n    case 'tertiary':\\n      return {\\n        background: pressed ? c.button.surface.tertiaryPressed : c.button.surface.tertiaryDefault,\\n        icon: c.iconbutton.icon.tertiary,\\n        border: c.button.border.tertiary,\\n      };\\n    case 'neutral':\\n      return {\\n        background: pressed ? c.iconbutton.surface.neutralPressed : c.iconbutton.surface.neutralDefault,\\n        icon: c.iconbutton.icon.neutral,\\n        border: null,\\n      };\\n    default:\\n      return {\\n        background: pressed ? c.button.surface.primaryPressed : c.button.surface.primaryDefault,\\n        icon: c.button.icon.primary,\\n        border: null,\\n      };\\n  }\\n}\\n\\n/**\\n * Botão só com ícone, para ações que se repetem ou que o ícone já explica: mais\\n * opções, fechar, adicionar, tocar. Mesmos tamanhos e estados do Button.\\n */\\nexport function IconButton({\\n  accessibilityLabel,\\n  icon = Ellipsis,\\n  variant = 'primary',\\n  size = 'large',\\n  disabled,\\n  style,\\n  ...rest\\n}: IconButtonProps) {\\n  const c = useComponentTheme();\\n  const reduced = useReducedMotion();\\n  const spec = SIZES[size];\\n  const isDisabled = disabled ?? false;\\n\\n  return (\\n    <Pressable\\n      accessibilityRole=\\"button\\"\\n      accessibilityLabel={accessibilityLabel}\\n      accessibilityState={{ disabled: isDisabled }}\\n      disabled={isDisabled}\\n      hitSlop={spec.hitSlop}\\n      style={[styles.pressable, style]}\\n      {...rest}\\n    >\\n      {({ pressed }) => {\\n        const surface = surfaceFor(c, variant, pressed, isDisabled);\\n        return (\\n          <Animated.View\\n            style={[\\n              styles.base,\\n              {\\n                width: spec.side,\\n                height: spec.side,\\n                borderRadius: spec.radius,\\n                backgroundColor: surface.background,\\n                // A borda do Figma é interna. Aqui ela ocupa espaço, mas o ícone fica\\n                // centrado do mesmo jeito: o lado é fixo e a borda é igual nos quatro.\\n                borderWidth: surface.border ? BORDER : 0,\\n                borderColor: surface.border ?? 'transparent',\\n                // Mesmo retorno de toque do Button: 0,97 com a cor de pressed.\\n                // Com movimento reduzido, só a cor.\\n                transform: [{ scale: pressed && !reduced && !isDisabled ? 0.97 : 1 }],\\n                transitionProperty: ['transform', 'backgroundColor'],\\n                transitionDuration: DURATION.press,\\n                transitionTimingFunction: EASE_OUT_CSS,\\n              },\\n            ]}\\n          >\\n            <View style={{ width: spec.icon, height: spec.icon }}>\\n              {renderIcon(icon, surface.icon, spec.icon, spec.stroke)}\\n            </View>\\n          </Animated.View>\\n        );\\n      }}\\n    </Pressable>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  pressable: {\\n    alignSelf: 'flex-start',\\n  },\\n  base: {\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n});\\n","hash":"3f38f2ceb31d4541d338cd2617ecb6f01f06e46faf61ec22b3bd525ad548b507"}`),alert:JSON.parse(`{"propriedades":[{"nome":"type","tipo":"AlertType","opcional":true,"dono":"AlertProps","descricao":"success: deu certo. error: algo falhou e a pessoa precisa agir.\\ninfo: informação neutra. neutral: aviso sem urgência, que não pede ação."},{"nome":"title","tipo":"string","opcional":false,"dono":"AlertProps","descricao":""},{"nome":"description","tipo":"string","opcional":true,"dono":"AlertProps","descricao":"Linha abaixo do título. Sem ela, o aviso fica só com o título."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"AlertProps","descricao":""}],"tipos":"export type AlertType = 'success' | 'error' | 'info' | 'neutral';\\n\\nexport type AlertProps = {\\n  /**\\n   * success: deu certo. error: algo falhou e a pessoa precisa agir.\\n   * info: informação neutra. neutral: aviso sem urgência, que não pede ação.\\n   */\\n  type?: AlertType;\\n  title: string;\\n  /** Linha abaixo do título. Sem ela, o aviso fica só com o título. */\\n  description?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, View } from 'react-native';\\nimport { Button, TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { Alert } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao } from './_comum';\\n\\n// Textos das variantes (89:70) e do \\"Em uso\\" (89:150) do Figma.\\nconst TITULO = 'O preparo terminou';\\nconst DESCRICAO = 'Confirme se esta pessoa está correta.';\\n\\n// O quadro escuro do \\"Em uso\\": o mesmo aviso no modo Dark, qualquer que seja o tema da tela.\\nfunction QuadroEscuro({ children }: { children: React.ReactNode }) {\\n  return (\\n    <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n      <FundoDoTema>{children}</FundoDoTema>\\n    </TesselaProvider>\\n  );\\n}\\n\\nfunction FundoDoTema({ children }: { children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>{children}</View>;\\n}\\n\\nexport default function TelaAlert() {\\n  const [visivel, setVisivel] = useState(true);\\n  return (\\n    <>\\n      <Secao>Tipos</Secao>\\n      <Legenda>Success</Legenda>\\n      <Alert type=\\"success\\" title={TITULO} description={DESCRICAO} />\\n      <Legenda>Error</Legenda>\\n      <Alert type=\\"error\\" title={TITULO} description={DESCRICAO} />\\n      <Legenda>Info</Legenda>\\n      <Alert type=\\"info\\" title={TITULO} description={DESCRICAO} />\\n      <Legenda>Neutral</Legenda>\\n      <Alert type=\\"neutral\\" title={TITULO} description={DESCRICAO} />\\n\\n      <Secao>Sem descrição</Secao>\\n      <Legenda>Mostrar descrição desligado: 60 de altura, pelo quadro do ícone</Legenda>\\n      <Alert type=\\"success\\" title={TITULO} />\\n\\n      <Secao>Entrada</Secao>\\n      <Legenda>opacidade e 8 de subida em 180 ms; com movimento reduzido, só opacidade</Legenda>\\n      <View style={styles.linha}>\\n        <Button\\n          label={visivel ? 'Esconder aviso' : 'Mostrar aviso'}\\n          size=\\"small\\"\\n          variant=\\"soft\\"\\n          onPress={() => setVisivel((v) => !v)}\\n        />\\n      </View>\\n      <View style={styles.reserva}>\\n        {visivel ? (\\n          <Alert type=\\"success\\" title={TITULO} description={DESCRICAO} />\\n        ) : null}\\n      </View>\\n\\n      <Secao>Em uso</Secao>\\n      <Legenda>Sucesso, como no app</Legenda>\\n      <Alert type=\\"success\\" title={TITULO} description={DESCRICAO} />\\n\\n      <Legenda>Erro</Legenda>\\n      <Alert type=\\"error\\" title=\\"Não deu para gravar\\" description=\\"Verifique a conexão e tente de novo.\\" />\\n\\n      <Legenda>Informação e neutro, sem descrição</Legenda>\\n      <View style={styles.avisos}>\\n        <Alert type=\\"info\\" title=\\"A história fica pronta em 2 minutos\\" />\\n        <Alert type=\\"neutral\\" title=\\"As fontes não puderam ser carregadas\\" />\\n      </View>\\n\\n      <Legenda>Tema escuro (modo Dark no quadro)</Legenda>\\n      <QuadroEscuro>\\n        <View style={styles.avisos}>\\n          <Alert type=\\"success\\" title={TITULO} description={DESCRICAO} />\\n          <Alert type=\\"error\\" title=\\"Não deu para gravar\\" description=\\"Verifique a conexão e tente de novo.\\" />\\n          <Alert\\n            type=\\"info\\"\\n            title=\\"A história fica pronta em 2 minutos\\"\\n            description=\\"Você pode sair desta tela enquanto isso.\\"\\n          />\\n        </View>\\n      </QuadroEscuro>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  // Avisos empilhados com space/12, como no \\"Em uso\\".\\n  avisos: {\\n    gap: primitives.space[12],\\n  },\\n  linha: {\\n    flexDirection: 'row',\\n    marginBottom: primitives.space[12],\\n  },\\n  // Guarda a altura do aviso para o botão não pular quando ele sai.\\n  reserva: {\\n    minHeight: 60,\\n  },\\n  quadro: {\\n    padding: primitives.space[16],\\n    borderRadius: primitives.radius.lg,\\n  },\\n});\\n","exemploEm":"apps/validador/telas/Alert.tsx","fonte":"import React, { useEffect } from 'react';\\nimport { AccessibilityInfo, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { Keyframe, ReduceMotion, useReducedMotion } from 'react-native-reanimated';\\nimport { CircleAlert, CloudCheck, Database, Info } from 'lucide-react-native';\\nimport type { LucideIcon } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT } from './motion';\\n\\nexport type AlertType = 'success' | 'error' | 'info' | 'neutral';\\n\\nexport type AlertProps = {\\n  /**\\n   * success: deu certo. error: algo falhou e a pessoa precisa agir.\\n   * info: informação neutra. neutral: aviso sem urgência, que não pede ação.\\n   */\\n  type?: AlertType;\\n  title: string;\\n  /** Linha abaixo do título. Sem ela, o aviso fica só com o título. */\\n  description?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n// O tipo aparece no ícone, não só na cor (Figma: Ícones do Alert, Lucide 20).\\nconst ICONS: Record<AlertType, LucideIcon> = {\\n  success: CloudCheck,\\n  error: CircleAlert,\\n  info: Info,\\n  neutral: Database,\\n};\\n\\n// Quadro fixo de 48 no Figma, sem variável ligada: vem do Figma.\\nconst ICON_BOX = 48;\\nconst ICON = primitives.iconSize.md;\\nconst STROKE = componentMetrics.alert.stroke.icon;\\nconst TITLE_SIZE = typography.label.fontSize;\\nconst DESCRIPTION_SIZE = typography.body.fontSize;\\n// Título Label 16/19, menor que a linha natural da Puffin (20,7): margem, não lineHeight.\\nconst TITLE_BOX = lineBoxMargin(TITLE_SIZE, typography.label.lineHeight);\\n\\n// Entra por opacidade e sobe 8 em 180 ms (Documentação — Alert).\\nconst ENTER = new Keyframe({\\n  0: { opacity: 0, transform: [{ translateY: primitives.space[8] }] },\\n  100: { opacity: 1, transform: [{ translateY: 0 }], easing: EASE_OUT },\\n})\\n  .duration(DURATION.move)\\n  .reduceMotion(ReduceMotion.System);\\n// Com movimento reduzido, o Figma pede só a opacidade: o fade continua rodando.\\nconst ENTER_REDUCED = new Keyframe({\\n  0: { opacity: 0 },\\n  100: { opacity: 1, easing: EASE_OUT },\\n})\\n  .duration(DURATION.move)\\n  .reduceMotion(ReduceMotion.Never);\\nconst EXIT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.Never);\\n\\n/**\\n * Aviso curto dentro da tela: confirma que algo deu certo, avisa de um erro ou dá\\n * uma informação. Preenche a largura do layout; a altura vem do texto (60 com uma\\n * linha de descrição). É anunciado pelo leitor de tela quando aparece, sem interromper.\\n */\\nexport function Alert({ type = 'success', title, description, style }: AlertProps) {\\n  const c = useComponentTheme().alert[type];\\n  const reduced = useReducedMotion();\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n  const announcement = description ? \`\${title}. \${description}\` : title;\\n\\n  // Região viva educada: entra na fila do leitor de tela, sem cortar a fala atual.\\n  useEffect(() => {\\n    AccessibilityInfo.announceForAccessibilityWithOptions(announcement, { queue: true });\\n  }, [announcement]);\\n\\n  return (\\n    <Animated.View\\n      entering={reduced ? ENTER_REDUCED : ENTER}\\n      exiting={EXIT}\\n      accessible\\n      accessibilityLabel={announcement}\\n      style={[styles.alert, { backgroundColor: c.surface }, style]}\\n    >\\n      <View style={[styles.iconBox, { backgroundColor: c.iconSurface }]}>\\n        {renderIcon(ICONS[type], c.icon, ICON, STROKE)}\\n      </View>\\n      <View style={styles.texts}>\\n        <Text\\n          style={[semibold, styles.text, { fontSize: TITLE_SIZE, color: c.text, marginVertical: TITLE_BOX }]}\\n        >\\n          {title}\\n        </Text>\\n        {description ? (\\n          <Text\\n            style={[\\n              medium,\\n              styles.text,\\n              // Body 14/20: a linha é maior que a natural (18,1), então lineHeight serve.\\n              { fontSize: DESCRIPTION_SIZE, lineHeight: typography.body.lineHeight, color: c.text },\\n            ]}\\n          >\\n            {description}\\n          </Text>\\n        ) : null}\\n      </View>\\n    </Animated.View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  alert: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[10],\\n    paddingVertical: primitives.space[6],\\n    paddingLeft: primitives.space[6],\\n    paddingRight: primitives.space[20],\\n    borderRadius: componentMetrics.alert.radius,\\n  },\\n  // Quadro de 48 com raio 20, concêntrico ao raio 26 do aviso (26 − 6 de respiro).\\n  iconBox: {\\n    width: ICON_BOX,\\n    height: ICON_BOX,\\n    borderRadius: componentMetrics.alert.iconRadius,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  texts: {\\n    flex: 1,\\n    gap: primitives.space[4],\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"408003b13e4bb337f754b5c673bf64141b49b7a5f413e592aa96ce902351e448"}`),"input-chip":{propriedades:[{nome:`label`,tipo:`string`,opcional:!1,dono:`InputChipProps`,descricao:`Valor já escolhido (um nome, um filtro, uma tag).`},{nome:`onRemove`,tipo:`() => void`,opcional:!0,dono:`InputChipProps`,descricao:`Toque no X.`},{nome:`disabled`,tipo:`boolean`,opcional:!0,dono:`InputChipProps`,descricao:`Bloqueado: tokens de disabled e o X não responde.`},{nome:`removeLabel`,tipo:`string`,opcional:!0,dono:`InputChipProps`,descricao:`Rótulo do X para o leitor de tela. Padrão: "Remover {label}".`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`InputChipProps`,descricao:``}],tipos:`export type InputChipProps = {
  /** Valor já escolhido (um nome, um filtro, uma tag). */
  label: string;
  /** Toque no X. */
  onRemove?: () => void;
  /** Bloqueado: tokens de disabled e o X não responde. */
  disabled?: boolean;
  /** Rótulo do X para o leitor de tela. Padrão: "Remover {label}". */
  removeLabel?: string;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { Plus } from 'lucide-react-native';
import { InputChip, IconButton } from '@tessela/ui';
import { comum, Legenda, Secao } from '../../validador/telas/_comum';

export default function Example() {
  const [names, setNames] = useState(['Alice', 'Laura']);
  const nextId = useRef(3);
  return <><Secao>Estados</Secao><Legenda>Padrão e desabilitado</Legenda><View style={comum.grupo}><InputChip label="Fantasia" /><InputChip label="Aventura" disabled /></View><Secao>Composição com IconButton</Secao><Legenda>Remova um nome ou adicione outro pelo botão.</Legenda><View style={comum.grupo}>{names.map(name => <InputChip key={name} label={name} onRemove={() => setNames(names.filter(item => item !== name))} />)}<IconButton icon={Plus} variant="neutral" size="small" accessibilityLabel="Adicionar pessoa" onPress={() => { const name = \`Pessoa \${nextId.current++}\`; setNames(current => [...current, name]); }} /></View></>;
}
`,exemploEm:`apps/catalogo/examples/InputChip.tsx`,fonte:`import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { useReducedMotion } from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { renderIcon } from './Icon';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT_CSS } from './motion';

export type InputChipProps = {
  /** Valor já escolhido (um nome, um filtro, uma tag). */
  label: string;
  /** Toque no X. */
  onRemove?: () => void;
  /** Bloqueado: tokens de disabled e o X não responde. */
  disabled?: boolean;
  /** Rótulo do X para o leitor de tela. Padrão: "Remover {label}". */
  removeLabel?: string;
  style?: StyleProp<ViewStyle>;
};

// A superfície mantém 36, dentro de um slot físico de 44.
const HEIGHT = 36;
const ICON = primitives.iconSize.md;
const STROKE = componentMetrics.inputchip.stroke.icon;
const FONT_SIZE = typography.label.fontSize;
const TOUCH = 44;

/**
 * Valor já escolhido que a pessoa pode remover pelo X. Para adicionar outro,
 * use um Icon Button Small Neutral ao lado. Em grupo, space/12 entre chips, com quebra.
 */
export function InputChip({ label, onRemove, disabled = false, removeLabel, style }: InputChipProps) {
  const c = useComponentTheme().inputchip;
  const reduced = useReducedMotion();
  const semibold = useFont('600');
  // O alvo é o X, mas o fundo pressionado é o do chip inteiro.
  const [pressed, setPressed] = useState(false);
  const isPressed = pressed && !disabled;

  const background = disabled ? c.surface.disabled : isPressed ? c.surface.pressed : c.surface.default;

  return (
    <View style={[styles.chip, style]}>
      <Animated.View
        pointerEvents="none"
        style={[
          styles.surface,
          {
            backgroundColor: background,
            // Só o fundo encolhe: a área de toque permanece 44 mesmo pressionada.
            transform: [{ scale: isPressed && !reduced ? 0.97 : 1 }],
            transitionProperty: ['transform', 'backgroundColor'],
            transitionDuration: DURATION.press,
            transitionTimingFunction: EASE_OUT_CSS,
          },
        ]}
      />
      <Text
        numberOfLines={1}
        style={[
          semibold,
          styles.label,
          {
            fontSize: FONT_SIZE,
            color: disabled ? c.text.disabled : c.text.default,
            // Linha de 19 (120%) sem trim no Figma, menor que a natural: margem, não lineHeight.
            marginVertical: lineBoxMargin(FONT_SIZE, typography.label.lineHeight),
          },
        ]}
      >
        {label}
      </Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={removeLabel ?? \`Remover \${label}\`}
        accessibilityState={{ disabled }}
        disabled={disabled}
        onPress={onRemove}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        style={styles.icon}
      >
        {renderIcon(X, disabled ? c.icon.disabled : c.icon.default, ICON, STROKE)}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: TOUCH,
    paddingLeft: primitives.space[12],
  },
  surface: {
    position: 'absolute',
    top: (TOUCH - HEIGHT) / 2,
    left: 0,
    right: 0,
    height: HEIGHT,
    borderRadius: componentMetrics.inputchip.radius,
  },
  label: {
    includeFontPadding: false,
    flexShrink: 1,
  },
  icon: {
    width: TOUCH,
    height: TOUCH,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`,hash:`b7fd4330dd90e8a6623b265e2e063c885e811b86a11f0f44917c6a5871877813`},"social-button":JSON.parse(`{"propriedades":[{"nome":"provider","tipo":"SocialProvider","opcional":false,"dono":"SocialButtonProps","descricao":""},{"nome":"label","tipo":"string","opcional":true,"dono":"SocialButtonProps","descricao":"Troca o rótulo do provedor (\\"Entrar com Google\\", \\"Entrar com Apple\\", \\"Entrar com e-mail\\")."},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"SocialButtonProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"SocialButtonProps","descricao":""}],"tipos":"export type SocialProvider = 'google' | 'apple' | 'email';\\n\\nexport type SocialButtonProps = Omit<PressableProps, 'style' | 'children'> & {\\n  provider: SocialProvider;\\n  /** Troca o rótulo do provedor (\\"Entrar com Google\\", \\"Entrar com Apple\\", \\"Entrar com e-mail\\"). */\\n  label?: string;\\n  disabled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { Text, View } from 'react-native';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { SocialButton, type SocialProvider } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\nconst PROVEDORES: { provider: SocialProvider; nome: string }[] = [\\n  { provider: 'google', nome: 'Google' },\\n  { provider: 'apple', nome: 'Apple' },\\n  { provider: 'email', nome: 'E-mail' },\\n];\\n\\n// Quadro do \\"Em uso\\" do Figma (92:192): bg/base, raio 16, respiro 24/24/32/24, gap 16,\\n// botões empilhados com space/12.\\nfunction Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View\\n      style={{\\n        backgroundColor: theme.bg.base,\\n        borderRadius: primitives.radius.lg,\\n        paddingTop: primitives.space[24],\\n        paddingHorizontal: primitives.space[24],\\n        paddingBottom: primitives.space[32],\\n        gap: primitives.space[16],\\n        marginBottom: primitives.space[16],\\n      }}\\n    >\\n      <Text style={{ fontFamily: FONTS['600'], fontSize: typography.labelSmall.fontSize, color: theme.fg.muted }}>\\n        {titulo}\\n      </Text>\\n      <View style={{ gap: primitives.space[12] }}>{children}</View>\\n    </View>\\n  );\\n}\\n\\nexport default function TelaSocialButton() {\\n  const [toque, setToque] = useState<string | null>(null);\\n  return (\\n    <>\\n      <Legenda>linhas por provedor e estado · segure para ver o Pressed</Legenda>\\n      {PROVEDORES.map(({ provider, nome }) => (\\n        <React.Fragment key={provider}>\\n          <Secao>{nome}</Secao>\\n          <View style={comum.coluna}>\\n            <Legenda>Default</Legenda>\\n            <SocialButton provider={provider} />\\n            <Legenda>Disabled</Legenda>\\n            <SocialButton provider={provider} disabled />\\n          </View>\\n        </React.Fragment>\\n      ))}\\n\\n      <Secao>Em uso</Secao>\\n      <Legenda>{toque ? \`último toque: \${toque}\` : 'toque nos botões'}</Legenda>\\n      <Quadro titulo=\\"Tela de login, como no app\\">\\n        <SocialButton provider=\\"google\\" onPress={() => setToque('Google')} />\\n        <SocialButton provider=\\"apple\\" onPress={() => setToque('Apple')} />\\n      </Quadro>\\n      <Quadro titulo=\\"Com e-mail\\">\\n        <SocialButton provider=\\"email\\" onPress={() => setToque('e-mail')} />\\n        <SocialButton provider=\\"google\\" onPress={() => setToque('Google')} />\\n        <SocialButton provider=\\"apple\\" onPress={() => setToque('Apple')} />\\n      </Quadro>\\n      <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n        <Quadro titulo=\\"Tema escuro (modo Dark no quadro)\\">\\n          <SocialButton provider=\\"google\\" onPress={() => setToque('Google (escuro)')} />\\n          <SocialButton provider=\\"apple\\" onPress={() => setToque('Apple (escuro)')} />\\n          <SocialButton provider=\\"email\\" onPress={() => setToque('e-mail (escuro)')} />\\n        </Quadro>\\n      </TesselaProvider>\\n    </>\\n  );\\n}\\n","exemploEm":"apps/validador/telas/SocialButton.tsx","fonte":"import React from 'react';\\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { PressableProps, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { useReducedMotion } from 'react-native-reanimated';\\nimport Svg, { Path } from 'react-native-svg';\\nimport { Mail } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT_CSS } from './motion';\\n\\nexport type SocialProvider = 'google' | 'apple' | 'email';\\n\\nexport type SocialButtonProps = Omit<PressableProps, 'style' | 'children'> & {\\n  provider: SocialProvider;\\n  /** Troca o rótulo do provedor (\\"Entrar com Google\\", \\"Entrar com Apple\\", \\"Entrar com e-mail\\"). */\\n  label?: string;\\n  disabled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst LABELS: Record<SocialProvider, string> = {\\n  google: 'Entrar com Google',\\n  apple: 'Entrar com Apple',\\n  email: 'Entrar com e-mail',\\n};\\n\\n// Altura e raio do Button Large; o Figma fixa a largura em 361, que aqui é a da tela.\\nconst HEIGHT = 60;\\nconst RADIUS = componentMetrics.button.radius.large;\\nconst BORDER = componentMetrics.button.stroke.container;\\n// 18 vem do Figma: os logos da marca ficam um pouco menores que o ícone de 20 do e-mail.\\nconst LOGO = 18;\\nconst ICON = primitives.iconSize.md;\\nconst ICON_STROKE = componentMetrics.button.stroke.icon;\\n// 0,5 vem do Figma: no Disabled o logo fica a 50%, com as cores originais.\\nconst DISABLED_LOGO_OPACITY = 0.5;\\nconst FONT_SIZE = typography.button.fontSize;\\n// Rótulo com altura de linha 19 (120%) e sem leading trim no Figma.\\nconst LABEL_BOX = lineBoxMargin(FONT_SIZE, typography.button.lineHeight);\\n\\n// Formas copiadas das camadas do Figma (Logo/Google 92:15 e Logo/Apple 92:18), na\\n// grade de 20 do componente; a instância no botão é a mesma forma reduzida a 18.\\n// vem do Figma: as quatro cores do G são as da marca Google e não passam por token.\\nconst GOOGLE: { d: string; fill: string }[] = [\\n  {\\n    fill: '#EA4335',\\n    d: 'M10 3.958C11.475 3.958 12.796 4.467 13.837 5.458L16.692 2.604C14.958 0.992 12.696 0 10 0C6.092 0 2.712 2.242 1.067 5.508L4.392 8.087C5.179 5.717 7.392 3.958 10 3.958Z',\\n  },\\n  {\\n    fill: '#4285F4',\\n    d: 'M19.575 10.229C19.575 9.575 19.512 8.942 19.417 8.333L10 8.333L10 12.092L15.392 12.092C15.15 13.325 14.45 14.375 13.4 15.083L16.621 17.583C18.5 15.842 19.575 13.267 19.575 10.229Z',\\n  },\\n  {\\n    fill: '#FBBC05',\\n    d: 'M4.387 11.913C4.187 11.308 4.071 10.667 4.071 10C4.071 9.333 4.183 8.692 4.387 8.087L1.062 5.508C0.383 6.858 0 8.383 0 10C0 11.617 0.383 13.142 1.067 14.492L4.387 11.913Z',\\n  },\\n  {\\n    fill: '#34A853',\\n    d: 'M10 20C12.7 20 14.971 19.112 16.621 17.579L13.4 15.079C12.504 15.683 11.35 16.038 10 16.038C7.392 16.038 5.179 14.279 4.387 11.908L1.063 14.487C2.713 17.758 6.092 20 10 20Z',\\n  },\\n];\\n\\nconst APPLE =\\n  'M18.071 15.586C17.769 16.285 17.411 16.928 16.996 17.519C16.43 18.325 15.967 18.884 15.611 19.193C15.058 19.702 14.465 19.962 13.83 19.977C13.375 19.977 12.826 19.848 12.186 19.585C11.544 19.323 10.955 19.193 10.416 19.193C9.85 19.193 9.244 19.323 8.595 19.585C7.946 19.848 7.422 19.985 7.022 19.998C6.414 20.024 5.807 19.756 5.202 19.193C4.815 18.856 4.332 18.279 3.753 17.46C3.132 16.586 2.621 15.572 2.221 14.417C1.793 13.169 1.578 11.96 1.578 10.79C1.578 9.45 1.867 8.294 2.448 7.325C2.903 6.547 3.51 5.933 4.269 5.483C5.028 5.032 5.848 4.802 6.732 4.788C7.215 4.788 7.849 4.937 8.636 5.231C9.422 5.526 9.926 5.675 10.147 5.675C10.313 5.675 10.873 5.5 11.823 5.152C12.721 4.829 13.479 4.695 14.1 4.748C15.782 4.883 17.046 5.547 17.887 6.742C16.382 7.654 15.638 8.931 15.653 10.569C15.666 11.845 16.129 12.907 17.039 13.75C17.451 14.142 17.912 14.444 18.424 14.659C18.313 14.981 18.196 15.29 18.071 15.586Z' +\\n  'M14.212 0.4C14.212 1.4 13.847 2.334 13.118 3.199C12.239 4.226 11.176 4.82 10.023 4.726C10.008 4.606 10 4.48 10 4.347C10 3.387 10.418 2.36 11.16 1.519C11.531 1.094 12.002 0.74 12.574 0.458C13.144 0.18 13.684 0.026 14.191 0C14.206 0.134 14.212 0.267 14.212 0.4Z';\\n\\nfunction Logo({ provider, mono }: { provider: SocialProvider; mono: string }) {\\n  if (provider === 'email') {\\n    return <View style={styles.icon}>{renderIcon(Mail, mono, ICON, ICON_STROKE)}</View>;\\n  }\\n  return (\\n    <Svg width={LOGO} height={LOGO} viewBox=\\"0 0 20 20\\">\\n      {provider === 'google' ? (\\n        GOOGLE.map((p) => <Path key={p.fill} d={p.d} fill={p.fill} />)\\n      ) : (\\n        <Path d={APPLE} fill={mono} />\\n      )}\\n    </Svg>\\n  );\\n}\\n\\n/**\\n * Botão para entrar ou criar conta com um provedor: Google, Apple ou e-mail.\\n * Altura, raio e cores do Button Tertiary Large, com o logo antes do rótulo, como\\n * pedem as diretrizes do Google e da Apple. Ocupa a largura disponível.\\n */\\nexport function SocialButton({ provider, label, disabled, style, ...rest }: SocialButtonProps) {\\n  const c = useComponentTheme().socialbutton;\\n  const reduced = useReducedMotion();\\n  const bold = useFont('700');\\n  const isDisabled = disabled ?? false;\\n\\n  return (\\n    <Pressable\\n      accessibilityRole=\\"button\\"\\n      accessibilityState={{ disabled: isDisabled }}\\n      disabled={isDisabled}\\n      style={[styles.pressable, style]}\\n      {...rest}\\n    >\\n      {({ pressed }) => (\\n        <Animated.View\\n          style={[\\n            styles.button,\\n            {\\n              backgroundColor: isDisabled ? c.surface.disabled : pressed ? c.surface.pressed : c.surface.default,\\n              // Mesmo retorno de toque do Button: 0,97 com a cor de pressed.\\n              // Com movimento reduzido, só a cor.\\n              transform: [{ scale: pressed && !reduced && !isDisabled ? 0.97 : 1 }],\\n              transitionProperty: ['transform', 'backgroundColor'],\\n              transitionDuration: DURATION.press,\\n              transitionTimingFunction: EASE_OUT_CSS,\\n            },\\n          ]}\\n        >\\n          {/* A borda do Figma é interna e não ocupa espaço. Desenhada por cima, ela\\n              não empurra o conteúdo nem muda o respiro de 24. Disabled não tem borda. */}\\n          {isDisabled ? null : <View pointerEvents=\\"none\\" style={[styles.border, { borderColor: c.border }]} />}\\n          <View style={isDisabled ? styles.disabledLogo : null}>\\n            <Logo provider={provider} mono={c.logo.mono} />\\n          </View>\\n          <Text\\n            numberOfLines={1}\\n            style={[\\n              bold,\\n              styles.label,\\n              { fontSize: FONT_SIZE, marginVertical: LABEL_BOX, color: isDisabled ? c.textDisabled : c.text },\\n            ]}\\n          >\\n            {label ?? LABELS[provider]}\\n          </Text>\\n        </Animated.View>\\n      )}\\n    </Pressable>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  pressable: {\\n    alignSelf: 'stretch',\\n  },\\n  button: {\\n    height: HEIGHT,\\n    borderRadius: RADIUS,\\n    paddingHorizontal: primitives.space[24],\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n    gap: primitives.space[10],\\n  },\\n  // Coordenadas explícitas: o React Native 0.86 removeu StyleSheet.absoluteFillObject.\\n  border: {\\n    position: 'absolute',\\n    top: 0,\\n    right: 0,\\n    bottom: 0,\\n    left: 0,\\n    borderRadius: RADIUS,\\n    borderWidth: BORDER,\\n  },\\n  disabledLogo: {\\n    opacity: DISABLED_LOGO_OPACITY,\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n  },\\n  label: {\\n    flexShrink: 1,\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"56bc5d21c0285f3d9a55d61e9c8729497bc342d71d12cc396c14d777a76f9a6f"}`),badge:{propriedades:[{nome:`label`,tipo:`string`,opcional:!1,dono:`BadgeProps`,descricao:`Rótulo curto, em uma linha: duração, contagem, categoria ou destaque.`},{nome:`tone`,tipo:`BadgeTone`,opcional:!0,dono:`BadgeProps`,descricao:`brand: contagens e categorias ("12 capítulos").
accent: destaque único na tela ("História da Noite").
neutral: estado ou metadado discreto ("Rascunho").
overlay: só sobre imagem, com o véu scrim/image por baixo.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`BadgeProps`,descricao:``}],tipos:`export type BadgeTone = 'brand' | 'accent' | 'neutral' | 'overlay';

export type BadgeProps = {
  /** Rótulo curto, em uma linha: duração, contagem, categoria ou destaque. */
  label: string;
  /**
   * brand: contagens e categorias ("12 capítulos").
   * accent: destaque único na tela ("História da Noite").
   * neutral: estado ou metadado discreto ("Rascunho").
   * overlay: só sobre imagem, com o véu scrim/image por baixo.
   */
  tone?: BadgeTone;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { primitives } from '@tessela/tokens';
import { Badge } from '@tessela/ui';
import { FONTS, Legenda, Secao } from './_comum';

// Quadro do "Em uso" em modo Dark: bg/base do tema escuro, raio 16, respiro 24/32.
function QuadroEscuro({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>{children}</View>;
}

export default function TelaBadge() {
  return (
    <>
      <Secao>Tons</Secao>
      <Legenda>Brand · Accent · Neutral · Overlay (component set 93:22)</Legenda>
      <View style={styles.badges}>
        <Badge label="Rótulo" />
        <Badge label="Rótulo" tone="accent" />
        <Badge label="Rótulo" tone="neutral" />
        <Badge label="Rótulo" tone="overlay" />
      </View>
      <Legenda>Overlay sobre imagem (sem o desfoque de fundo do Figma)</Legenda>
      <View style={[styles.badges, styles.faixa]}>
        <Badge label="Rótulo" tone="overlay" />
      </View>

      {/* Mesmos quadros do "Em uso" do Figma (93:125). */}
      <Secao>Em uso</Secao>
      <Legenda>Sobre imagem, como no card da tela Hoje</Legenda>
      <View style={styles.imagem}>
        <View style={styles.badges}>
          <Badge label="4min" tone="overlay" />
          <Badge label="Voz padrão" tone="overlay" />
          <Badge label="Capítulo disponível" tone="overlay" />
        </View>
        <Badge label="História da Noite" tone="accent" />
      </View>

      <Legenda>Contagem e estado</Legenda>
      <View style={styles.badges}>
        <Badge label="12 capítulos" />
        <Badge label="3 capítulos" />
        <Badge label="Rascunho" tone="neutral" />
      </View>

      <Legenda>Tema escuro (modo Dark no quadro)</Legenda>
      <TesselaProvider theme="dark" fonts={FONTS}>
        <QuadroEscuro>
          <View style={styles.badges}>
            <Badge label="12 capítulos" />
            <Badge label="História da Noite" tone="accent" />
            <Badge label="Rascunho" tone="neutral" />
          </View>
        </QuadroEscuro>
      </TesselaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  // Em grupo: space/8 entre badges.
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: primitives.space[8],
  },
  faixa: {
    alignSelf: 'flex-start',
    padding: primitives.space[16],
    borderRadius: primitives.radius.xl,
    backgroundColor: primitives.brand[800],
  },
  // "Imagem de exemplo" do Figma: 329 × 180, radius/xl, brand/800, space/16 de respiro.
  imagem: {
    width: 329,
    height: 180,
    justifyContent: 'space-between',
    padding: primitives.space[16],
    borderRadius: primitives.radius.xl,
    backgroundColor: primitives.brand[800],
  },
  quadro: {
    alignSelf: 'flex-start',
    borderRadius: primitives.radius.lg,
    paddingTop: primitives.space[24],
    paddingHorizontal: primitives.space[24],
    paddingBottom: primitives.space[32],
  },
});
`,exemploEm:`apps/validador/telas/Badge.tsx`,fonte:`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { lineBoxMargin } from './metrics';

export type BadgeTone = 'brand' | 'accent' | 'neutral' | 'overlay';

export type BadgeProps = {
  /** Rótulo curto, em uma linha: duração, contagem, categoria ou destaque. */
  label: string;
  /**
   * brand: contagens e categorias ("12 capítulos").
   * accent: destaque único na tela ("História da Noite").
   * neutral: estado ou metadado discreto ("Rascunho").
   * overlay: só sobre imagem, com o véu scrim/image por baixo.
   */
  tone?: BadgeTone;
  style?: StyleProp<ViewStyle>;
};

const FONT_SIZE = typography.labelSmall.fontSize;
// Label-Small 12/14 com trim NONE: a caixa de linha do Figma, sem lineHeight.
// Com space/6 em cima e embaixo, o badge fica com 26 de altura.
const TEXT_BOX = lineBoxMargin(FONT_SIZE, typography.labelSmall.lineHeight);

/**
 * Rótulo curto que informa e não é tocável. Para escolher, use Chip; para remover,
 * Input Chip. Em grupo, use space/8 entre badges.
 */
export function Badge({ label, tone = 'brand', style }: BadgeProps) {
  const c = useComponentTheme().badge[tone];
  const semibold = useFont('600');

  return (
    // O overlay do Figma tem desfoque de fundo (12). Sem dependência nova não há
    // equivalente no React Native: fica só a cor do token (glass/23).
    <View style={[styles.badge, { backgroundColor: c.surface }, style]}>
      <Text
        numberOfLines={1}
        style={[semibold, styles.label, { fontSize: FONT_SIZE, color: c.text, marginVertical: TEXT_BOX }]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: primitives.space[6],
    paddingHorizontal: primitives.space[10],
    borderRadius: componentMetrics.badge.radius,
  },
  // Encolhe e corta com reticências quando o rótulo passa da largura disponível.
  label: {
    flexShrink: 1,
    includeFontPadding: false,
  },
});
`,hash:`ce1841d9903bd8d3b8d64708175be88d008baa278147143611a818fa0972889e`},link:{propriedades:[{nome:`label`,tipo:`string`,opcional:!1,dono:`LinkProps`,descricao:`Rótulo do link (ex.: "Ver todas").`},{nome:`tone`,tipo:`LinkTone`,opcional:!0,dono:`LinkProps`,descricao:`primary: ação de uma seção, como "Ver todas" (Body-Strong).
muted: ação dentro de um card, como "Ler história" (Body).`},{nome:`arrow`,tipo:`boolean`,opcional:!0,dono:`LinkProps`,descricao:`Seta à direita, que indica que o link leva a outra tela. Padrão: ligada.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`LinkProps`,descricao:``}],tipos:`export type LinkTone = 'primary' | 'muted';

export type LinkProps = Omit<PressableProps, 'style' | 'children'> & {
  /** Rótulo do link (ex.: "Ver todas"). */
  label: string;
  /**
   * primary: ação de uma seção, como "Ver todas" (Body-Strong).
   * muted: ação dentro de um card, como "Ler história" (Body).
   */
  tone?: LinkTone;
  /** Seta à direita, que indica que o link leva a outra tela. Padrão: ligada. */
  arrow?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { primitives, typography } from '@tessela/tokens';
import { Link } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

// Quadro do "Em uso" do Figma (94:123): bg/base, raio 16, respiro 24/24/32/24, gap 16,
// links lado a lado com space/24.
function Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        backgroundColor: theme.bg.base,
        borderRadius: primitives.radius.lg,
        paddingTop: primitives.space[24],
        paddingHorizontal: primitives.space[24],
        paddingBottom: primitives.space[32],
        gap: primitives.space[16],
        marginBottom: primitives.space[16],
      }}
    >
      <Text style={{ fontFamily: FONTS['600'], fontSize: typography.labelSmall.fontSize, color: theme.fg.muted }}>
        {titulo}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: primitives.space[24] }}>{children}</View>
    </View>
  );
}

export default function TelaLink() {
  const [toque, setToque] = useState<string | null>(null);
  return (
    <>
      <Legenda>segure para ver o Pressed</Legenda>

      <Secao>Primary</Secao>
      <Legenda>Body-Strong · com seta e sem seta</Legenda>
      <View style={comum.linha}>
        <Link label="Ver todas" />
        <Link label="Ver todas" arrow={false} />
      </View>

      <Secao>Muted</Secao>
      <Legenda>Body · com seta e sem seta</Legenda>
      <View style={comum.linha}>
        <Link label="Ver todas" tone="muted" />
        <Link label="Ver todas" tone="muted" arrow={false} />
      </View>

      <Secao>Em uso</Secao>
      <Legenda>{toque ? \`último toque: \${toque}\` : 'toque nos links'}</Legenda>
      <Quadro titulo="Primary e Muted">
        <Link label="Ver todas" onPress={() => setToque('Ver todas')} />
        <Link label="Ler história" tone="muted" onPress={() => setToque('Ler história')} />
      </Quadro>
      <Quadro titulo="Sem seta">
        <Link label="Já tenho uma conta" arrow={false} onPress={() => setToque('Já tenho uma conta')} />
      </Quadro>
      <TesselaProvider theme="dark" fonts={FONTS}>
        <Quadro titulo="Tema escuro (modo Dark no quadro)">
          <Link label="Ver todas" onPress={() => setToque('Ver todas (escuro)')} />
          <Link label="Ler história" tone="muted" onPress={() => setToque('Ler história (escuro)')} />
        </Quadro>
      </TesselaProvider>
    </>
  );
}
`,exemploEm:`apps/validador/telas/Link.tsx`,fonte:`import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont, type FontWeightKey } from './theme';
import { renderIcon } from './Icon';
import { lineBoxMargin } from './metrics';

export type LinkTone = 'primary' | 'muted';

export type LinkProps = Omit<PressableProps, 'style' | 'children'> & {
  /** Rótulo do link (ex.: "Ver todas"). */
  label: string;
  /**
   * primary: ação de uma seção, como "Ver todas" (Body-Strong).
   * muted: ação dentro de um card, como "Ler história" (Body).
   */
  tone?: LinkTone;
  /** Seta à direita, que indica que o link leva a outra tela. Padrão: ligada. */
  arrow?: boolean;
  style?: StyleProp<ViewStyle>;
};

type ToneSpec = { fontSize: number; lineHeight: number; weight: FontWeightKey };

// Primary usa Body-Strong (14/18, SemiBold) e Muted usa Body (14/20, Medium).
const TONES: Record<LinkTone, ToneSpec> = {
  primary: {
    fontSize: typography.bodyStrong.fontSize,
    lineHeight: typography.bodyStrong.lineHeight,
    weight: '600',
  },
  muted: {
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    weight: '500',
  },
};

const ARROW = primitives.iconSize.sm;
const STROKE = componentMetrics.link.stroke.icon;
const TOUCH = 44;

/**
 * Ação em texto, sem fundo nem borda, para ações leves que não competem com o
 * Button: ver todas, abrir uma história, ir para a conta. O alvo físico tem no
 * mínimo 44 × 44, sem alterar o tamanho do texto.
 */
export function Link({ label, tone = 'primary', arrow = true, style, ...rest }: LinkProps) {
  const c = useComponentTheme().link;
  const spec = TONES[tone];
  const font = useFont(spec.weight);

  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={label}
      style={[styles.link, style]}
      {...rest}
    >
      {({ pressed }) => {
        // Pressed só troca a cor do texto e da seta: o link não tem fundo para escalar.
        const color = pressed ? c.text.pressed : tone === 'muted' ? c.text.muted : c.text.primary;
        return (
          <>
            <Text
              numberOfLines={1}
              style={[
                font,
                styles.label,
                {
                  fontSize: spec.fontSize,
                  color,
                  // Sem leading trim no Figma: a caixa de linha (18 ou 20) vem por margem,
                  // sem lineHeight, para o iOS não cortar o topo do texto.
                  marginVertical: lineBoxMargin(spec.fontSize, spec.lineHeight),
                },
              ]}
            >
              {label}
            </Text>
            {arrow ? renderIcon(ArrowRight, color, ARROW, STROKE) : null}
          </>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    minHeight: TOUCH,
    minWidth: TOUCH,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: primitives.space[4],
  },
  label: {
    flexShrink: 1,
    includeFontPadding: false,
  },
});
`,hash:`6e96899d4d497126de6ce0430d1c8fcb38d392458dfe38d0812c19c927e9ea22`},"section-header":{propriedades:[{nome:`title`,tipo:`string`,opcional:!1,dono:`SectionHeaderProps`,descricao:``},{nome:`icon`,tipo:`IconSource`,opcional:!0,dono:`SectionHeaderProps`,descricao:`Ícone opcional à esquerda do título.`},{nome:`onAction`,tipo:`() => void`,opcional:!0,dono:`SectionHeaderProps`,descricao:`Ação opcional à direita; sem callback, o link não aparece.`},{nome:`actionLabel`,tipo:`string`,opcional:!0,dono:`SectionHeaderProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`SectionHeaderProps`,descricao:``}],tipos:`export type SectionHeaderProps = {
  title: string;
  /** Ícone opcional à esquerda do título. */
  icon?: IconSource;
  /** Ação opcional à direita; sem callback, o link não aparece. */
  onAction?: () => void;
  actionLabel?: string;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Sparkles } from 'lucide-react-native';
import { primitives } from '@tessela/tokens';
import { SectionHeader } from '@tessela/ui';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

function Exemplo({ icon = false }: { icon?: boolean }) {
  const theme = useTheme();
  const [pressed, setPressed] = useState(false);
  return <View style={styles.example}>
    <SectionHeader title={icon ? 'Histórias criadas pelo Contto' : 'Histórias criadas para hoje'} icon={icon ? Sparkles : undefined} onAction={icon ? undefined : () => setPressed(!pressed)} />
    <View accessibilityLabel={pressed ? 'Todas as histórias' : 'Conteúdo de exemplo'} style={[styles.placeholder, { backgroundColor: theme.bg.subtle }]} />
  </View>;
}

export default function TelaSectionHeader() {
  const [action, setAction] = useState('');
  return <>
    <Secao>Variantes</Secao>
    <View style={comum.coluna}>
      <Legenda>Com Link</Legenda>
      <SectionHeader title="Histórias criadas para hoje" onAction={() => setAction('Ver todas')} />
      <Legenda>Com ícone e sem Link</Legenda>
      <SectionHeader title="Histórias criadas pelo Contto" icon={Sparkles} />
      <Legenda>Só título</Legenda>
      <SectionHeader title="Histórias criadas para hoje" />
      <Legenda>Título longo: uma linha com reticências</Legenda>
      <SectionHeader title="Histórias criadas especialmente para a família e todas as crianças da casa" onAction={() => setAction('Título longo')} />
      <Legenda>{action ? \`Ação: \${action}\` : 'Toque no link'}</Legenda>
    </View>
    <Secao>Em uso</Secao>
    <Legenda>Com Link, como na tela Hoje</Legenda><Exemplo />
    <Legenda>Com ícone e sem Link</Legenda><Exemplo icon />
    <Legenda>Tema escuro</Legenda><TesselaProvider theme="dark" fonts={FONTS}><ExemploEscuro /></TesselaProvider>
  </>;
}

function ExemploEscuro() {
  const theme = useTheme();
  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><Exemplo /></View>;
}

const styles = StyleSheet.create({
  example: { gap: primitives.space[16] },
  // Altura do conteúdo demonstrativo vem do frame Em uso, 94:282.
  placeholder: { height: 72, borderRadius: primitives.radius.xl },
  dark: { padding: primitives.space[16], borderRadius: primitives.radius.lg },
});
`,exemploEm:`apps/validador/telas/SectionHeader.tsx`,fonte:`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { primitives, typography } from '@tessela/tokens';
import { renderIcon, type IconSource } from './Icon';
import { Link } from './Link';
import { useComponentTheme, useFont } from './theme';

export type SectionHeaderProps = {
  title: string;
  /** Ícone opcional à esquerda do título. */
  icon?: IconSource;
  /** Ação opcional à direita; sem callback, o link não aparece. */
  onAction?: () => void;
  actionLabel?: string;
  style?: StyleProp<ViewStyle>;
};

export function SectionHeader({ title, icon, onAction, actionLabel = 'Ver todas', style }: SectionHeaderProps) {
  const c = useComponentTheme().sectionheader;
  const font = useFont('500');
  return (
    <View style={[styles.header, onAction ? styles.actionHeader : null, style]}>
      <View style={styles.titleRow}>
        {icon ? renderIcon(icon, c.icon, primitives.iconSize.sm, primitives.stroke.icon) : null}
        <Text accessibilityRole="header" numberOfLines={1} ellipsizeMode="tail" style={[font, styles.title, { color: c.text }]}>{title}</Text>
      </View>
      {onAction ? <Link label={actionLabel} onPress={onAction} style={styles.link} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  actionHeader: { minHeight: 44 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: primitives.space[12] },
  titleRow: { flex: 1, minWidth: 0, flexDirection: 'row', alignItems: 'center', gap: primitives.space[6] },
  title: { flex: 1, includeFontPadding: false, fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight },
  link: { alignSelf: 'center', flexShrink: 0 },
});
`,hash:`eb60222b4a9b2fa712d7a2857ed74c2ed6064e0ee3786c59db317184919e6309`},divider:{propriedades:[{nome:`label`,tipo:`string`,opcional:!0,dono:`DividerProps`,descricao:`Rótulo no meio: alternativas ("ou") ou o início de uma lista ("Capítulos").`},{nome:`showLabel`,tipo:`boolean`,opcional:!0,dono:`DividerProps`,descricao:`Desligado, fica uma linha só na largura toda. Padrão do Figma: ligado.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`DividerProps`,descricao:``}],tipos:`export type DividerProps = {
  /** Rótulo no meio: alternativas ("ou") ou o início de uma lista ("Capítulos"). */
  label?: string;
  /** Desligado, fica uma linha só na largura toda. Padrão do Figma: ligado. */
  showLabel?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { primitives } from '@tessela/tokens';
import { Divider } from '@tessela/ui';
import { FONTS, Legenda, Secao } from './_comum';

// Quadro do "Em uso" em modo Dark: bg/base do tema escuro, raio 16, respiro 24/32.
function QuadroEscuro({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>{children}</View>;
}

export default function TelaDivider() {
  return (
    <>
      <Secao>Variações</Secao>
      <Legenda>Com rótulo (padrão do Figma: "ou")</Legenda>
      <Divider />
      <Legenda>Só linha (Mostrar rótulo desligado)</Legenda>
      <Divider showLabel={false} />
      <Legenda>Rótulo longo: as linhas cedem espaço</Legenda>
      <Divider label="Um rótulo comprido demais para caber ao lado das duas linhas" />

      {/* Mesmos quadros do "Em uso" do Figma (94:413). */}
      <Secao>Em uso</Secao>
      <Legenda>Entre opções de login</Legenda>
      <Divider label="ou" />

      <Legenda>Abrindo uma lista</Legenda>
      <Divider label="Capítulos" />

      <Legenda>Só linha</Legenda>
      <Divider showLabel={false} />

      <Legenda>Tema escuro (modo Dark no quadro)</Legenda>
      <TesselaProvider theme="dark" fonts={FONTS}>
        <QuadroEscuro>
          <Divider label="Capítulos" />
        </QuadroEscuro>
      </TesselaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  quadro: {
    borderRadius: primitives.radius.lg,
    paddingTop: primitives.space[24],
    paddingHorizontal: primitives.space[24],
    paddingBottom: primitives.space[32],
  },
});
`,exemploEm:`apps/validador/telas/Divider.tsx`,fonte:`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { lineBoxMargin } from './metrics';

export type DividerProps = {
  /** Rótulo no meio: alternativas ("ou") ou o início de uma lista ("Capítulos"). */
  label?: string;
  /** Desligado, fica uma linha só na largura toda. Padrão do Figma: ligado. */
  showLabel?: boolean;
  style?: StyleProp<ViewStyle>;
};

const LINE = primitives.stroke.hairline;
const FONT_SIZE = typography.labelSmall.fontSize;
// Label-Small 12/14 com trim NONE: a caixa de linha do Figma, sem lineHeight.
const TEXT_BOX = lineBoxMargin(FONT_SIZE, typography.labelSmall.lineHeight);

/**
 * Linha fina que separa grupos de conteúdo. Preenche a largura. No layout, deixe
 * space/16 em cima e embaixo.
 */
export function Divider({ label = 'ou', showLabel = true, style }: DividerProps) {
  const c = useComponentTheme().divider;
  const semibold = useFont('600');
  const withLabel = showLabel && Boolean(label);
  // A linha é decorativa: só o rótulo chega ao leitor de tela, como texto.
  const line = <View style={[styles.line, { backgroundColor: c.line }]} />;

  return (
    <View style={[styles.divider, style]}>
      {line}
      {withLabel ? (
        <>
          <Text
            numberOfLines={1}
            style={[semibold, styles.label, { fontSize: FONT_SIZE, color: c.text, marginVertical: TEXT_BOX }]}
          >
            {label}
          </Text>
          {line}
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: primitives.space[12],
  },
  line: {
    flex: 1,
    height: LINE,
  },
  label: {
    flexShrink: 1,
    includeFontPadding: false,
  },
});
`,hash:`1754d11dc01123e045f275e86986e3138227386fbf6ab99c9aa2edcae1b0554b`},"story-card":JSON.parse(`{"propriedades":[{"nome":"title","tipo":"string","opcional":false,"dono":"StoryCardProps","descricao":""},{"nome":"source","tipo":"ImageSourcePropType","opcional":true,"dono":"StoryCardProps","descricao":"Capa fornecida pelo app; sem fonte, usa o placeholder canônico."},{"nome":"duration","tipo":"string","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"onPress","tipo":"() => void","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"size","tipo":"'large' | 'small'","opcional":false,"dono":"StoryCardProps","descricao":""},{"nome":"state","tipo":"'ready' | 'loading' | 'preparing'","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"badges","tipo":"React.ReactNode","opcional":true,"dono":"StoryCardProps","descricao":"Selos sobre a capa. Use null para ocultar."},{"nome":"highlight","tipo":"React.ReactNode","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"loadingLabel","tipo":"string","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"progress","tipo":"number","opcional":true,"dono":"StoryCardProps","descricao":"Percentual controlado de 0 a 100."},{"nome":"favorite","tipo":"boolean","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"onFavoriteChange","tipo":"(favorite: boolean) => void","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"readLabel","tipo":"string","opcional":true,"dono":"StoryCardProps","descricao":""},{"nome":"preparingLabel","tipo":"string","opcional":true,"dono":"StoryCardProps","descricao":""}],"tipos":"export type StoryCardProps = {\\n  title: string;\\n  /** Capa fornecida pelo app; sem fonte, usa o placeholder canônico. */\\n  source?: ImageSourcePropType;\\n  duration?: string;\\n  onPress?: () => void;\\n  accessibilityLabel?: string;\\n  disabled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n} & ({\\n  size?: 'large';\\n  state?: 'ready' | 'loading';\\n  /** Selos sobre a capa. Use null para ocultar. */\\n  badges?: React.ReactNode;\\n  highlight?: React.ReactNode;\\n  loadingLabel?: string;\\n} | {\\n  size: 'small';\\n  state?: 'ready' | 'preparing';\\n  /** Percentual controlado de 0 a 100. */\\n  progress?: number;\\n  favorite?: boolean;\\n  onFavoriteChange?: (favorite: boolean) => void;\\n  readLabel?: string;\\n  preparingLabel?: string;\\n});","exemplo":"import React, { useState } from 'react';\\nimport { ScrollView, StyleSheet, View } from 'react-native';\\nimport { primitives } from '@tessela/tokens';\\nimport { StoryCard } from '@tessela/ui';\\nimport { Button } from '@tessela/ui';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\nconst TITLE = 'Laurinha em: A viagem para a lua';\\n\\nfunction Prateleira() {\\n  const [favorite, setFavorite] = useState(false);\\n  const [progress, setProgress] = useState(34);\\n  const [opened, setOpened] = useState(false);\\n  return <View style={comum.coluna}>\\n    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.shelf}>\\n      <StoryCard size=\\"small\\" title={TITLE} duration=\\"4min\\" favorite={favorite} onFavoriteChange={setFavorite} onPress={() => setOpened(true)} />\\n      <StoryCard size=\\"small\\" title={TITLE} state=\\"preparing\\" progress={progress} />\\n    </ScrollView>\\n    <Legenda>{opened ? 'História aberta pelo callback' : \`Preparando: \${progress}%\`}</Legenda>\\n    <Button label=\\"Atualizar preparo\\" size=\\"small\\" variant=\\"soft\\" onPress={() => setProgress(value => value >= 100 ? 0 : Math.min(100, value + 33))} />\\n  </View>;\\n}\\n\\nfunction Escuro() {\\n  const theme = useTheme();\\n  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><Prateleira /></View>;\\n}\\n\\nexport default function TelaStoryCard() {\\n  const [opened, setOpened] = useState(false);\\n  return <>\\n    <Secao>Large</Secao>\\n    <Legenda>Ready</Legenda><StoryCard title={TITLE} duration=\\"4min\\" onPress={() => setOpened(!opened)} />\\n    <Legenda>{opened ? 'História aberta pelo callback' : 'Loading'}</Legenda><StoryCard title={TITLE} state=\\"loading\\" />\\n    <Legenda>Sem selos e destaque</Legenda><StoryCard title={TITLE} badges={null} highlight={null} onPress={() => setOpened(!opened)} />\\n    <Secao>Small</Secao><Legenda>Ready e Preparing</Legenda><Prateleira />\\n    <Secao>Em uso</Secao>\\n    <Legenda>Tela Hoje</Legenda><StoryCard title={TITLE} duration=\\"4min\\" onPress={() => setOpened(!opened)} />\\n    <Legenda>Prateleira da Estante</Legenda><Prateleira />\\n    <Legenda>Carregando a história do dia</Legenda><StoryCard title={TITLE} state=\\"loading\\" />\\n    <Legenda>Tema escuro</Legenda><TesselaProvider theme=\\"dark\\" fonts={FONTS}><Escuro /></TesselaProvider>\\n  </>;\\n}\\n\\nconst styles = StyleSheet.create({\\n  shelf: { gap: primitives.space[16] },\\n  dark: { padding: primitives.space[16], borderRadius: primitives.radius.lg },\\n});\\n","exemploEm":"apps/validador/telas/StoryCard.tsx","fonte":"import React, { useEffect, useState } from 'react';\\nimport { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { cancelAnimation, Easing, useAnimatedStyle, useReducedMotion, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';\\nimport { Heart, LoaderCircle } from 'lucide-react-native';\\nimport { componentMetrics, primitives, shadows, typography } from '@tessela/tokens';\\nimport { Badge } from './Badge';\\nimport { Link } from './Link';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT_CSS } from './motion';\\nimport { useComponentTheme, useFont } from './theme';\\n\\nexport type StoryCardProps = {\\n  title: string;\\n  /** Capa fornecida pelo app; sem fonte, usa o placeholder canônico. */\\n  source?: ImageSourcePropType;\\n  duration?: string;\\n  onPress?: () => void;\\n  accessibilityLabel?: string;\\n  disabled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n} & ({\\n  size?: 'large';\\n  state?: 'ready' | 'loading';\\n  /** Selos sobre a capa. Use null para ocultar. */\\n  badges?: React.ReactNode;\\n  highlight?: React.ReactNode;\\n  loadingLabel?: string;\\n} | {\\n  size: 'small';\\n  state?: 'ready' | 'preparing';\\n  /** Percentual controlado de 0 a 100. */\\n  progress?: number;\\n  favorite?: boolean;\\n  onFavoriteChange?: (favorite: boolean) => void;\\n  readLabel?: string;\\n  preparingLabel?: string;\\n});\\n\\n// Dimensões fixas das capas vêm do Figma (95:27 e 95:44).\\nconst LARGE_HEIGHT = 319;\\nconst SMALL_WIDTH = 137;\\nconst SMALL_HEIGHT = 175;\\nconst TITLE_WIDTH = 240;\\nconst FAVORITE_SIZE = 36;\\n\\nexport function StoryCard(props: StoryCardProps) {\\n  const { title, source, duration, onPress, accessibilityLabel, disabled = false, style } = props;\\n  const c = useComponentTheme().storycard;\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n  const reduced = useReducedMotion();\\n  const [pressed, setPressed] = useState(false);\\n  const small = props.size === 'small';\\n  const busy = props.state === 'loading' || props.state === 'preparing';\\n  const label = accessibilityLabel ?? [title, duration].filter(Boolean).join(', ');\\n  const rotation = useSharedValue(0);\\n  useEffect(() => {\\n    rotation.value = props.state === 'loading' && !reduced\\n      ? withRepeat(withTiming(360, { duration: DURATION.spin, easing: Easing.linear }), -1, false)\\n      : 0;\\n    return () => cancelAnimation(rotation);\\n  }, [props.state, reduced, rotation]);\\n  const spinner = useAnimatedStyle(() => {\\n    'worklet';\\n    return { transform: [{ rotate: \`\${rotation.value}deg\` }] };\\n  });\\n  const pressProps = {\\n    accessibilityRole: 'button' as const,\\n    accessibilityLabel: label,\\n    accessibilityState: { disabled: disabled || busy || !onPress, busy },\\n    disabled: disabled || busy || !onPress,\\n    onPress,\\n    onPressIn: () => setPressed(true),\\n    onPressOut: () => setPressed(false),\\n  };\\n  const motion = {\\n    // 0,98 e 120 ms vêm da documentação específica do Story Card.\\n    transform: [{ scale: pressed && !reduced ? 0.98 : 1 }],\\n    transitionProperty: 'transform' as const,\\n    transitionDuration: reduced ? 0 : DURATION.press,\\n    transitionTimingFunction: EASE_OUT_CSS,\\n  };\\n\\n  if (small) {\\n    const preparing = props.state === 'preparing';\\n    const progress = Math.min(100, Math.max(0, props.progress ?? 0));\\n    return (\\n      <Animated.View style={[styles.small, motion, style]}>\\n        <Pressable {...pressProps} accessibilityValue={preparing ? { min: 0, max: 100, now: progress, text: \`\${Math.round(progress)}%\` } : undefined} style={styles.smallMain}>\\n          <View style={[styles.cover, { backgroundColor: preparing ? c.progress.track : c.imagePlaceholder }]}>\\n            {preparing ? <>\\n              <Animated.View style={[styles.fill, { backgroundColor: c.progress.fill, height: \`\${progress}%\`, transitionProperty: 'height', transitionDuration: reduced ? 0 : DURATION.move, transitionTimingFunction: EASE_OUT_CSS }]} />\\n              <Text accessibilityRole=\\"progressbar\\" accessibilityValue={{ min: 0, max: 100, now: progress }} style={[semibold, styles.percent, { color: c.text.title }]}>{Math.round(progress)}%</Text>\\n            </> : source ? <Image source={source} resizeMode=\\"cover\\" style={styles.absolute} accessible={false} /> : null}\\n          </View>\\n          <Text numberOfLines={2} style={[semibold, styles.smallTitle, { color: c.text.title }]}>{title}</Text>\\n        </Pressable>\\n        {preparing ? <Text style={[medium, styles.meta, { color: c.text.meta }]}>{props.preparingLabel ?? 'Ficando pronto…'}</Text> : <Link label={props.readLabel ?? 'Ler história'} tone=\\"muted\\" onPress={onPress} disabled={disabled || !onPress} accessibilityState={{ disabled: disabled || !onPress }} />}\\n        {!preparing && props.onFavoriteChange ? <Pressable\\n          accessibilityRole=\\"button\\"\\n          accessibilityLabel={props.favorite ? 'Desfavoritar história' : 'Favoritar história'}\\n          accessibilityState={{ selected: props.favorite ?? false, disabled }}\\n          disabled={disabled}\\n          hitSlop={primitives.space[4]}\\n          onPress={() => props.onFavoriteChange?.(!props.favorite)}\\n          style={[styles.favorite, { backgroundColor: c.favorite.surface }]}\\n        ><Heart fill={props.favorite ? c.text.onImage : 'none'} color={c.text.onImage} size={primitives.iconSize.md} strokeWidth={primitives.stroke.icon} absoluteStrokeWidth /></Pressable> : null}\\n      </Animated.View>\\n    );\\n  }\\n\\n  const loading = props.state === 'loading';\\n  return (\\n    <Animated.View style={[styles.largeOuter, !loading && Platform.select<ViewStyle>({ ios: shadows.md.ios, android: shadows.md.android }), motion, style]}>\\n      <Pressable {...pressProps} style={[styles.large, loading && styles.loading, { backgroundColor: loading ? c.surface.loading : c.imagePlaceholder }]}>\\n        {loading ? <>\\n          <Animated.View style={spinner}>{renderIcon(LoaderCircle, c.icon.loading, primitives.iconSize.md, primitives.stroke.icon)}</Animated.View>\\n          <Text numberOfLines={2} style={[semibold, styles.loadingLabel, { color: c.text.title }]}>{props.loadingLabel ?? 'Preparando a história desta noite…'}</Text>\\n        </> : <>\\n          {source ? <Image source={source} resizeMode=\\"cover\\" style={styles.absolute} accessible={false} /> : null}\\n          <View pointerEvents=\\"none\\" style={[styles.absolute, { backgroundColor: c.scrim }]} />\\n          <View style={styles.badges}>{props.badges === undefined ? <>\\n            {duration ? <Badge tone=\\"overlay\\" label={duration} /> : null}\\n            <Badge tone=\\"overlay\\" label=\\"Voz padrão\\" />\\n            <Badge tone=\\"overlay\\" label=\\"Capítulo disponível\\" />\\n          </> : props.badges}</View>\\n          <View style={styles.bottom}>\\n            {props.highlight === undefined ? <Badge tone=\\"accent\\" label=\\"História da Noite\\" /> : props.highlight}\\n            <Text numberOfLines={3} style={[semibold, styles.largeTitle, { color: c.text.onImage }]}>{title}</Text>\\n          </View>\\n        </>}\\n      </Pressable>\\n    </Animated.View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  largeOuter: { borderRadius: componentMetrics.storycard.radius.large },\\n  large: { height: LARGE_HEIGHT, padding: primitives.space[24], borderRadius: componentMetrics.storycard.radius.large, overflow: 'hidden', justifyContent: 'space-between' },\\n  loading: { paddingHorizontal: primitives.space[48], alignItems: 'center', justifyContent: 'center', gap: primitives.space[12] },\\n  absolute: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },\\n  badges: { flexDirection: 'row', flexWrap: 'wrap', gap: primitives.space[8] },\\n  bottom: { gap: primitives.space[12], alignItems: 'flex-start' },\\n  largeTitle: { maxWidth: TITLE_WIDTH, includeFontPadding: false, fontSize: typography.title.fontSize, marginVertical: lineBoxMargin(typography.title.fontSize, typography.title.lineHeight) },\\n  loadingLabel: { includeFontPadding: false, fontSize: typography.bodyStrong.fontSize, marginVertical: lineBoxMargin(typography.bodyStrong.fontSize, typography.bodyStrong.lineHeight), textAlign: 'center' },\\n  small: { width: SMALL_WIDTH, gap: primitives.space[8] },\\n  smallMain: { gap: primitives.space[16] },\\n  cover: { width: '100%', height: SMALL_HEIGHT, borderRadius: componentMetrics.storycard.radius.small, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },\\n  smallTitle: { includeFontPadding: false, fontSize: typography.bodyStrong.fontSize, marginVertical: lineBoxMargin(typography.bodyStrong.fontSize, typography.bodyStrong.lineHeight) },\\n  meta: { includeFontPadding: false, fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight },\\n  fill: { position: 'absolute', left: 0, right: 0, bottom: 0 },\\n  percent: { includeFontPadding: false, fontSize: typography.display.fontSize, marginVertical: lineBoxMargin(typography.display.fontSize, typography.display.lineHeight) },\\n  favorite: { position: 'absolute', top: primitives.space[10], right: primitives.space[10], width: FAVORITE_SIZE, height: FAVORITE_SIZE, alignItems: 'center', justifyContent: 'center', borderRadius: componentMetrics.storycard.radius.favorite },\\n});\\n","hash":"d3a8569e231333480fb82b3c4d46b288ad6a4e1209d56d9d8d1e9a7ea562e7d4"}`),"profile-selector":{propriedades:[{nome:`name`,tipo:`string`,opcional:!1,dono:`ProfileSelectorProps`,descricao:`Perfil ativo; a troca é controlada pelo aplicativo em onPress.`},{nome:`avatar`,tipo:`Pick<AvatarProps, 'source' | 'initials'>`,opcional:!0,dono:`ProfileSelectorProps`,descricao:``},{nome:`expanded`,tipo:`boolean`,opcional:!0,dono:`ProfileSelectorProps`,descricao:`Estado do seletor aberto pelo aplicativo.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`ProfileSelectorProps`,descricao:``}],tipos:`export type ProfileSelectorProps = Omit<PressableProps, 'style' | 'children'> & {
  /** Perfil ativo; a troca é controlada pelo aplicativo em onPress. */
  name: string;
  avatar?: Pick<AvatarProps, 'source' | 'initials'>;
  /** Estado do seletor aberto pelo aplicativo. */
  expanded?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { primitives, typography } from '@tessela/tokens';
import { ProfileSelector } from '@tessela/ui';
import { lineBoxMargin } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

function Hoje() {
  const theme = useTheme();
  const [name, setName] = useState('Laura');
  return <View style={[styles.today, { backgroundColor: theme.bg.base }]}>
    <Text style={[styles.title, { color: theme.fg.primary }]}>Hoje</Text>
    <ProfileSelector name={name} avatar={{ initials: name === 'Laura' ? 'LA' : 'TO' }} onPress={() => setName(name === 'Laura' ? 'Tomás' : 'Laura')} />
  </View>;
}

export default function TelaProfileSelector() {
  return <>
    <Secao>Estados</Secao>
    <Legenda>Default · segure para ver Pressed</Legenda>
    <View style={comum.linha}><ProfileSelector name="Laura" avatar={{ initials: 'LA' }} /></View>
    <Legenda>Pressed</Legenda>
    <ProfileSelector name="Laura" avatar={{ initials: 'LA' }} testOnly_pressed />
    <Secao>Em uso</Secao>
    <Legenda>No topo da tela Hoje · toque para trocar o perfil</Legenda>
    <Hoje />
    <Legenda>Nome longo</Legenda>
    <ProfileSelector name="Gabriela" avatar={{ initials: 'LA' }} />
    <TesselaProvider theme="dark" fonts={FONTS}>
      <Legenda>Tema escuro (modo Dark no quadro)</Legenda><Hoje />
    </TesselaProvider>
  </>;
}
const styles = StyleSheet.create({
  today: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: primitives.space[12], borderRadius: primitives.radius.lg },
  title: { fontFamily: FONTS['600'], fontSize: typography.display.fontSize,
    marginVertical: lineBoxMargin(typography.display.fontSize, typography.display.lineHeight), includeFontPadding: false },
});
`,exemploEm:`apps/validador/telas/ProfileSelector.tsx`,fonte:`import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated, { useReducedMotion } from 'react-native-reanimated';
import { ChevronDown } from 'lucide-react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { Avatar, type AvatarProps } from './Avatar';
import { renderIcon } from './Icon';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT_CSS } from './motion';
import { useComponentTheme, useFont } from './theme';

export type ProfileSelectorProps = Omit<PressableProps, 'style' | 'children'> & {
  /** Perfil ativo; a troca é controlada pelo aplicativo em onPress. */
  name: string;
  avatar?: Pick<AvatarProps, 'source' | 'initials'>;
  /** Estado do seletor aberto pelo aplicativo. */
  expanded?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** Pílula que identifica e abre a troca do perfil ativo. */
export function ProfileSelector({ name, avatar, expanded = false, disabled = false, style, accessibilityLabel, ...rest }: ProfileSelectorProps) {
  const c = useComponentTheme().profileselector;
  const font = useFont('600');
  const reduced = useReducedMotion();
  return (
    <Pressable {...rest} disabled={disabled} accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? \`Perfil: \${name}. Trocar perfil\`}
      accessibilityState={{ expanded, disabled: Boolean(disabled) }} style={[styles.pressable, style]}>
      {({ pressed }) => (
        <Animated.View style={[styles.pill, {
          backgroundColor: pressed ? c.surface.pressed : c.surface.default,
          transform: [{ scale: pressed && !reduced && !disabled ? 0.97 : 1 }],
          transitionProperty: ['transform', 'backgroundColor'], transitionDuration: DURATION.press,
          transitionTimingFunction: EASE_OUT_CSS,
        }]}>
          {renderIcon(ChevronDown, c.icon, primitives.iconSize.md, primitives.stroke.icon)}
          <Text numberOfLines={1} style={[font, styles.name, { color: c.text }]}>{name}</Text>
          <Avatar {...avatar} size="small" shape="circle" />
        </Animated.View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: { alignSelf: 'flex-start', maxWidth: '100%' },
  pill: {
    height: 44, // vem do Figma
    flexDirection: 'row', alignItems: 'center', gap: primitives.space[8],
    paddingLeft: primitives.space[16], paddingRight: primitives.space[6], paddingVertical: primitives.space[6],
    borderRadius: componentMetrics.profileselector.radius,
  },
  name: {
    includeFontPadding: false, flexShrink: 1, fontSize: typography.label.fontSize,
    marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight),
  },
});
`,hash:`0a60e0d6e85672556bc6ca60254f043ac51b4d63d72a889e8b7103baaeb80147`},"segmented-control":JSON.parse(`{"propriedades":[{"nome":"label","tipo":"string","opcional":false,"dono":"SegmentProps","descricao":""},{"nome":"selected","tipo":"boolean","opcional":true,"dono":"SegmentProps","descricao":"Ativo: fundo segmented/segment/selected com Shadow/xs e rótulo Label."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"SegmentProps","descricao":""},{"nome":"options","tipo":"SegmentedControlOption[]","opcional":false,"dono":"SegmentedControlProps","descricao":"Duas ou três opções, como a variante Opções do Figma. A largura é dividida por igual."},{"nome":"selectedKey","tipo":"string","opcional":false,"dono":"SegmentedControlProps","descricao":"Chave do segmento ativo. Só um fica ativo."},{"nome":"onChange","tipo":"(key: string) => void","opcional":false,"dono":"SegmentedControlProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"SegmentedControlProps","descricao":""}],"tipos":"export type SegmentProps = Omit<PressableProps, 'style' | 'children'> & {\\n  label: string;\\n  /** Ativo: fundo segmented/segment/selected com Shadow/xs e rótulo Label. */\\n  selected?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type SegmentedControlOption = {\\n  key: string;\\n  label: string;\\n};\\n\\nexport type SegmentedControlProps = {\\n  /** Duas ou três opções, como a variante Opções do Figma. A largura é dividida por igual. */\\n  options: SegmentedControlOption[];\\n  /** Chave do segmento ativo. Só um fica ativo. */\\n  selectedKey: string;\\n  onChange: (key: string) => void;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, Text, View } from 'react-native';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { Segment, SegmentedControl } from '@tessela/ui';\\nimport type { SegmentedControlOption } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao } from './_comum';\\n\\n// Mesmos rótulos do Figma (99:26 e \\"Em uso\\" 99:127).\\nconst DUAS: SegmentedControlOption[] = [\\n  { key: 'historias', label: 'Histórias' },\\n  { key: 'personagens', label: 'Personagens' },\\n];\\nconst TRES: SegmentedControlOption[] = [...DUAS, { key: 'favoritos', label: 'Favoritos' }];\\n\\n// Quadro do \\"Em uso\\": bg/base, raio 16, rótulo em 12 SemiBold fg/muted.\\nfunction Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>\\n      <Text style={[styles.titulo, { color: theme.fg.muted }]}>{titulo}</Text>\\n      {children}\\n    </View>\\n  );\\n}\\n\\nexport default function TelaSegmentedControl() {\\n  const [duas, setDuas] = useState('historias');\\n  const [tres, setTres] = useState('historias');\\n  const [estante, setEstante] = useState('historias');\\n  const [personagens, setPersonagens] = useState('personagens');\\n  const [tresEmUso, setTresEmUso] = useState('historias');\\n  const [escuro, setEscuro] = useState('historias');\\n  return (\\n    <>\\n      <Secao>Segment</Secao>\\n      <Legenda>Selected · Unselected</Legenda>\\n      <View style={styles.segmentos}>\\n        <Segment label=\\"Opção\\" selected style={styles.segmento} />\\n        <Segment label=\\"Opção\\" style={styles.segmento} />\\n      </View>\\n\\n      <Secao>Segmented Control</Secao>\\n      <Legenda>Opções=2 (toque para trocar; o fundo desliza)</Legenda>\\n      <SegmentedControl options={DUAS} selectedKey={duas} onChange={setDuas} />\\n      <Legenda>Opções=3</Legenda>\\n      <SegmentedControl options={TRES} selectedKey={tres} onChange={setTres} />\\n\\n      <Secao>Em uso</Secao>\\n      <View style={styles.quadros}>\\n        <Quadro titulo=\\"Estante: Histórias ativa\\">\\n          <SegmentedControl options={DUAS} selectedKey={estante} onChange={setEstante} />\\n        </Quadro>\\n        <Quadro titulo=\\"Personagens ativa\\">\\n          <SegmentedControl options={DUAS} selectedKey={personagens} onChange={setPersonagens} />\\n        </Quadro>\\n        <Quadro titulo=\\"Três opções\\">\\n          <SegmentedControl options={TRES} selectedKey={tresEmUso} onChange={setTresEmUso} />\\n        </Quadro>\\n        <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n          <Quadro titulo=\\"Tema escuro (modo Dark no quadro)\\">\\n            <SegmentedControl options={DUAS} selectedKey={escuro} onChange={setEscuro} />\\n          </Quadro>\\n        </TesselaProvider>\\n      </View>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  segmentos: {\\n    flexDirection: 'row',\\n    gap: primitives.space[16],\\n  },\\n  segmento: {\\n    flex: 1,\\n  },\\n  quadros: {\\n    gap: primitives.space[16],\\n  },\\n  quadro: {\\n    borderRadius: primitives.radius.lg,\\n    paddingTop: primitives.space[24],\\n    paddingHorizontal: primitives.space[24],\\n    paddingBottom: primitives.space[32],\\n    gap: primitives.space[16],\\n  },\\n  titulo: {\\n    fontFamily: FONTS['600'],\\n    fontSize: typography.labelSmall.fontSize,\\n    includeFontPadding: false,\\n  },\\n});\\n","exemploEm":"apps/validador/telas/SegmentedControl.tsx","fonte":"import React from 'react';\\nimport { Platform, Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { PressableProps, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { useReducedMotion } from 'react-native-reanimated';\\nimport { componentMetrics, primitives, shadows, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_IN_OUT_CSS } from './motion';\\n\\nexport type SegmentProps = Omit<PressableProps, 'style' | 'children'> & {\\n  label: string;\\n  /** Ativo: fundo segmented/segment/selected com Shadow/xs e rótulo Label. */\\n  selected?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type SegmentedControlOption = {\\n  key: string;\\n  label: string;\\n};\\n\\nexport type SegmentedControlProps = {\\n  /** Duas ou três opções, como a variante Opções do Figma. A largura é dividida por igual. */\\n  options: SegmentedControlOption[];\\n  /** Chave do segmento ativo. Só um fica ativo. */\\n  selectedKey: string;\\n  onChange: (key: string) => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n// Trilho de 60 com space/6 por dentro: segmentos de 48.\\nconst TRACK_PADDING = primitives.space[6];\\nconst SEGMENT_HEIGHT = 48; // vem do Figma\\nconst FONT_SIZE = typography.label.fontSize;\\n// Sem leading trim no Figma. Ativo em Label (16/19): a linha é menor que a natural da\\n// Puffin, então a margem ajusta o espaço sem cortar o topo. Inativo em Body Large\\n// (16/23): lineHeight maior que o natural funciona.\\nconst SELECTED_TEXT = { marginVertical: lineBoxMargin(FONT_SIZE, typography.label.lineHeight) };\\nconst UNSELECTED_TEXT = { lineHeight: typography.bodyLarge.lineHeight };\\nconst SHADOW = Platform.OS === 'android' ? shadows.xs.android : shadows.xs.ios;\\n\\ntype SegmentBaseProps = SegmentProps & {\\n  /** Desenha o fundo do ativo. No SegmentedControl, o fundo é uma camada que desliza. */\\n  surface: boolean;\\n};\\n\\nfunction SegmentBase({ label, selected = false, surface, style, ...rest }: SegmentBaseProps) {\\n  const c = useComponentTheme().segmented;\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n  return (\\n    <Pressable\\n      accessibilityRole=\\"tab\\"\\n      accessibilityState={{ selected }}\\n      style={[styles.segment, surface && selected ? [SHADOW, { backgroundColor: c.segment.selected }] : null, style]}\\n      {...rest}\\n    >\\n      <Text\\n        numberOfLines={1}\\n        style={[\\n          selected ? semibold : medium,\\n          styles.label,\\n          selected ? SELECTED_TEXT : UNSELECTED_TEXT,\\n          { color: selected ? c.text.selected : c.text.unselected },\\n        ]}\\n      >\\n        {label}\\n      </Text>\\n    </Pressable>\\n  );\\n}\\n\\n/** Um segmento isolado, com o próprio fundo quando ativo. Dentro do trilho, use o SegmentedControl. */\\nexport function Segment(props: SegmentProps) {\\n  return <SegmentBase {...props} surface />;\\n}\\n\\n/**\\n * Alterna entre duas ou três vistas da mesma área sem sair da tela. Só um segmento\\n * fica ativo. Para navegar entre áreas do app, use a BottomNavigation.\\n */\\nexport function SegmentedControl({ options, selectedKey, onChange, style }: SegmentedControlProps) {\\n  const c = useComponentTheme().segmented;\\n  const reduced = useReducedMotion();\\n  const index = options.findIndex((o) => o.key === selectedKey);\\n  const count = Math.max(options.length, 1);\\n\\n  return (\\n    <View accessibilityRole=\\"tablist\\" style={[styles.track, { backgroundColor: c.surface }, style]}>\\n      <View style={styles.row}>\\n        {index < 0 ? null : (\\n          // O fundo do ativo desliza até o novo segmento em 180 ms ease-in-out; os\\n          // rótulos trocam sem deslizar. Com movimento reduzido, o fundo salta.\\n          // O deslocamento em % é da própria largura: um segmento por passo.\\n          <Animated.View\\n            pointerEvents=\\"none\\"\\n            style={[\\n              styles.indicator,\\n              SHADOW,\\n              {\\n                width: \`\${100 / count}%\`,\\n                backgroundColor: c.segment.selected,\\n                transform: [{ translateX: \`\${index * 100}%\` as \`\${number}%\` }],\\n                transitionProperty: 'transform',\\n                transitionDuration: reduced ? 0 : DURATION.move,\\n                transitionTimingFunction: EASE_IN_OUT_CSS,\\n              },\\n            ]}\\n          />\\n        )}\\n        {options.map((option) => (\\n          <SegmentBase\\n            key={option.key}\\n            label={option.label}\\n            selected={option.key === selectedKey}\\n            surface={false}\\n            onPress={() => onChange(option.key)}\\n            style={styles.fill}\\n          />\\n        ))}\\n      </View>\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  track: {\\n    height: SEGMENT_HEIGHT + TRACK_PADDING * 2,\\n    padding: TRACK_PADDING,\\n    borderRadius: componentMetrics.segmented.radius.container,\\n  },\\n  row: {\\n    flex: 1,\\n    flexDirection: 'row',\\n  },\\n  indicator: {\\n    position: 'absolute',\\n    top: 0,\\n    bottom: 0,\\n    left: 0,\\n    borderRadius: componentMetrics.segmented.radius.segment,\\n  },\\n  segment: {\\n    height: SEGMENT_HEIGHT,\\n    paddingHorizontal: primitives.space[14],\\n    borderRadius: componentMetrics.segmented.radius.segment,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  fill: {\\n    flex: 1,\\n  },\\n  label: {\\n    fontSize: FONT_SIZE,\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"e6e609dae98c039daa158dac152bafffeac0d307350ac7a4e0b14e24aea6524e"}`),switch:{propriedades:[{nome:`value`,tipo:`boolean`,opcional:!1,dono:`SwitchProps`,descricao:`Ligado (On) ou desligado (Off). Controlado: o Switch não guarda o valor.`},{nome:`onValueChange`,tipo:`(value: boolean) => void`,opcional:!0,dono:`SwitchProps`,descricao:`Recebe o valor novo a cada toque.`},{nome:`disabled`,tipo:`boolean`,opcional:!0,dono:`SwitchProps`,descricao:`Trilho e bolinha em action/disabled/*, nas duas posições; não responde ao toque.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`SwitchProps`,descricao:``}],tipos:`export type SwitchProps = Omit<PressableProps, 'style' | 'children' | 'onPress' | 'disabled'> & {
  /** Ligado (On) ou desligado (Off). Controlado: o Switch não guarda o valor. */
  value: boolean;
  /** Recebe o valor novo a cada toque. */
  onValueChange?: (value: boolean) => void;
  /** Trilho e bolinha em action/disabled/*, nas duas posições; não responde ao toque. */
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { primitives, typography } from '@tessela/tokens';
import { Switch } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

// Quadro do "Em uso" do Figma (100:112): bg/base, raio 16, rótulo em 12 SemiBold fg/muted.
function Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>
      <Text style={[styles.titulo, { color: theme.fg.muted }]}>{titulo}</Text>
      <View style={styles.switches}>{children}</View>
    </View>
  );
}

export default function TelaSwitch() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const [escuroA, setEscuroA] = useState(false);
  const [escuroB, setEscuroB] = useState(true);
  return (
    <>
      <Secao>Estados</Secao>
      <Legenda>Off · On (Default)</Legenda>
      <View style={comum.linha}>
        <Switch value={false} accessibilityLabel="Off" />
        <Switch value accessibilityLabel="On" />
      </View>
      <Legenda>Off · On (Disabled)</Legenda>
      <View style={comum.linha}>
        <Switch value={false} disabled accessibilityLabel="Off desabilitado" />
        <Switch value disabled accessibilityLabel="On desabilitado" />
      </View>

      <Secao>Em uso</Secao>
      <Legenda>toque para ligar e desligar</Legenda>
      <View style={styles.quadros}>
        <Quadro titulo="Desligado e ligado">
          <Switch value={a} onValueChange={setA} accessibilityLabel="Primeiro" />
          <Switch value={b} onValueChange={setB} accessibilityLabel="Segundo" />
        </Quadro>
        <Quadro titulo="Desabilitado">
          <Switch value={false} disabled accessibilityLabel="Desligado" />
          <Switch value disabled accessibilityLabel="Ligado" />
        </Quadro>
        <TesselaProvider theme="dark" fonts={FONTS}>
          <Quadro titulo="Tema escuro (modo Dark no quadro)">
            <Switch value={escuroA} onValueChange={setEscuroA} accessibilityLabel="Primeiro" />
            <Switch value={escuroB} onValueChange={setEscuroB} accessibilityLabel="Segundo" />
            <Switch value={false} disabled accessibilityLabel="Desabilitado" />
          </Quadro>
        </TesselaProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  quadros: {
    gap: primitives.space[16],
  },
  quadro: {
    alignSelf: 'flex-start',
    borderRadius: primitives.radius.lg,
    paddingTop: primitives.space[24],
    paddingHorizontal: primitives.space[24],
    paddingBottom: primitives.space[32],
    gap: primitives.space[16],
  },
  titulo: {
    fontFamily: FONTS['600'],
    fontSize: typography.labelSmall.fontSize,
    includeFontPadding: false,
  },
  switches: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: primitives.space[24],
  },
});
`,exemploEm:`apps/validador/telas/Switch.tsx`,fonte:`import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated, { useReducedMotion } from 'react-native-reanimated';
import { componentMetrics, primitives } from '@tessela/tokens';
import { useComponentTheme } from './theme';
import { DURATION, EASE_OUT_CSS } from './motion';

export type SwitchProps = Omit<PressableProps, 'style' | 'children' | 'onPress' | 'disabled'> & {
  /** Ligado (On) ou desligado (Off). Controlado: o Switch não guarda o valor. */
  value: boolean;
  /** Recebe o valor novo a cada toque. */
  onValueChange?: (value: boolean) => void;
  /** Trilho e bolinha em action/disabled/*, nas duas posições; não responde ao toque. */
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

// 44 × 26 vem do Figma e não está na escala: é o tamanho fixo do trilho.
const WIDTH = 44;
const HEIGHT = 26;
// Bolinha de 18 com space/4 do trilho em volta, nos quatro lados.
const PADDING = primitives.space[4];
const KNOB = 18; // vem do Figma
// Da esquerda (Off) para a direita (On): 44 − 4 − 4 − 18 = 18.
const TRAVEL = WIDTH - PADDING * 2 - KNOB;
// O trilho tem 26 de altura: 9 acima e abaixo completam a área de toque de 44.
const HIT_SLOP = { top: (44 - HEIGHT) / 2, bottom: (44 - HEIGHT) / 2 };

/**
 * Liga e desliga uma opção com efeito imediato. Sempre acompanhado de um rótulo:
 * dentro de um List Item, a linha inteira deve ligar e desligar, não só o Switch.
 */
export function Switch({ value, onValueChange, disabled = false, style, ...rest }: SwitchProps) {
  const c = useComponentTheme().switch;
  const reduced = useReducedMotion();

  const track = disabled ? c.track.disabled : value ? c.track.on : c.track.off;
  const knob = disabled ? c.knob.disabled : value ? c.knob.on : c.knob.off;
  const colorTransition = {
    transitionDuration: DURATION.state,
    transitionTimingFunction: EASE_OUT_CSS,
  };

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      disabled={disabled}
      hitSlop={HIT_SLOP}
      onPress={() => onValueChange?.(!value)}
      style={[styles.pressable, style]}
      {...rest}
    >
      <Animated.View
        style={[styles.track, { backgroundColor: track, transitionProperty: 'backgroundColor' }, colorTransition]}
      >
        {/* A bolinha desliza em 150 ms e as cores trocam juntas. Com movimento
            reduzido, só as cores: a bolinha salta de lado. */}
        <Animated.View
          style={[
            styles.knob,
            {
              backgroundColor: knob,
              transform: [{ translateX: value ? TRAVEL : 0 }],
              transitionProperty: reduced ? 'backgroundColor' : ['transform', 'backgroundColor'],
            },
            colorTransition,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: 'flex-start',
  },
  track: {
    width: WIDTH,
    height: HEIGHT,
    padding: PADDING,
    borderRadius: componentMetrics.switch.radius.track,
    flexDirection: 'row',
    alignItems: 'center',
  },
  knob: {
    width: KNOB,
    height: KNOB,
    borderRadius: componentMetrics.switch.radius.knob,
  },
});
`,hash:`0653e675231c4e79889e9ebe839b4f4ce4f92225c43ef442c52368bd35fcf906`},"list-item":JSON.parse(`{"propriedades":[{"nome":"title","tipo":"string","opcional":false,"dono":"ListItemProps","descricao":""},{"nome":"detail","tipo":"string","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"overline","tipo":"string","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"avatar","tipo":"Pick<AvatarProps, 'source' | 'initials'> | false","opcional":true,"dono":"ListItemProps","descricao":"false oculta o avatar; sem dados, usa o ícone de pessoa."},{"nome":"trailing","tipo":"ListItemTrailing","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"action","tipo":"React.ReactNode","opcional":true,"dono":"ListItemProps","descricao":"Slot da ponta Action. Padrão: IconButton Small Neutral."},{"nome":"actionLabel","tipo":"string","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"onActionPress","tipo":"(event: GestureResponderEvent) => void","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"onPress","tipo":"(event: GestureResponderEvent) => void","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"value","tipo":"boolean","opcional":true,"dono":"ListItemProps","descricao":"Estado controlado da ponta Switch."},{"nome":"onValueChange","tipo":"(value: boolean) => void","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ListItemProps","descricao":""},{"nome":"testID","tipo":"string","opcional":true,"dono":"ListItemProps","descricao":""}],"tipos":"export type ListItemTrailing = 'chevron' | 'action' | 'switch' | 'none';\\n\\nexport type ListItemProps = {\\n  title: string;\\n  detail?: string;\\n  overline?: string;\\n  /** false oculta o avatar; sem dados, usa o ícone de pessoa. */\\n  avatar?: Pick<AvatarProps, 'source' | 'initials'> | false;\\n  trailing?: ListItemTrailing;\\n  /** Slot da ponta Action. Padrão: IconButton Small Neutral. */\\n  action?: React.ReactNode;\\n  actionLabel?: string;\\n  onActionPress?: (event: GestureResponderEvent) => void;\\n  onPress?: (event: GestureResponderEvent) => void;\\n  /** Estado controlado da ponta Switch. */\\n  value?: boolean;\\n  onValueChange?: (value: boolean) => void;\\n  disabled?: boolean;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n  testID?: string;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { View } from 'react-native';\\nimport { ArrowRight } from 'lucide-react-native';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { ListItem, type ListItemTrailing } from '@tessela/ui';\\nimport { IconButton } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\nfunction ModoInfantil({ darkExample = false }: { darkExample?: boolean }) {\\n  const [alice, setAlice] = useState(false);\\n  const [laura, setLaura] = useState(true);\\n  const theme = useTheme();\\n  return <View style={{ backgroundColor: theme.bg.base, borderRadius: primitives.radius.lg }}>\\n    <ListItem title=\\"Alice\\" detail={alice ? 'Ligado' : 'Desligado'} avatar={{ initials: 'AL' }} trailing=\\"switch\\" value={alice} onValueChange={setAlice} />\\n    {darkExample ? <><ListItem title=\\"Laura\\" detail=\\"2 anos · 6 histórias\\" avatar={{ initials: 'LA' }} trailing=\\"action\\" />\\n      <ListItem title=\\"Conta e privacidade\\" avatar={false} /></> :\\n      <ListItem title=\\"Laura\\" detail={laura ? 'Ligado' : 'Desligado'} avatar={{ initials: 'LA' }} trailing=\\"switch\\" value={laura} onValueChange={setLaura} />}\\n  </View>;\\n}\\nexport default function TelaListItem() {\\n  const [value, setValue] = useState(false);\\n  const [last, setLast] = useState('Toque na linha ou na ação');\\n  return <>\\n    <Secao>Trailing × State</Secao>\\n    <Legenda>Default · segure para ver Pressed</Legenda>\\n    <View style={comum.coluna}>{(['chevron', 'action', 'switch', 'none'] as ListItemTrailing[]).map(trailing => <React.Fragment key={trailing}>\\n      <Legenda>{trailing}</Legenda><ListItem title=\\"Título do item\\" detail=\\"Detalhe do item\\" avatar={{ initials: 'AL' }} trailing={trailing}\\n        value={value} onValueChange={setValue} onPress={() => setLast(\`Linha \${trailing}\`)} onActionPress={() => setLast('Mais opções')} />\\n    </React.Fragment>)}</View>\\n    <Legenda>{last}</Legenda>\\n    <Secao>Em uso</Secao>\\n    <Legenda>Capítulos de uma série</Legenda>\\n    {['bronze', 'ouro'].map((material, index) => <ListItem key={material} title={\`Nina e a chave de \${material}\`} overline={\`Capítulo \${index + 1}\`} trailing=\\"action\\"\\n      onPress={() => setLast(\`Capítulo \${index + 1}\`)} action={<IconButton icon={ArrowRight} size=\\"medium\\" accessibilityLabel={\`Abrir capítulo \${index + 1}\`} onPress={() => setLast(\`Abrir capítulo \${index + 1}\`)} />} />)}\\n    <Legenda>Crianças da casa</Legenda>\\n    <ListItem title=\\"Alice\\" detail=\\"2 anos · 6 histórias\\" avatar={{ initials: 'AL' }} trailing=\\"action\\" onActionPress={() => setLast('Mais opções de Alice')} />\\n    <ListItem title=\\"Laura\\" detail=\\"2 anos · 6 histórias\\" avatar={{ initials: 'LA' }} trailing=\\"action\\" onActionPress={() => setLast('Mais opções de Laura')} />\\n    <Legenda>Modo Infantil</Legenda><ModoInfantil />\\n    <TesselaProvider theme=\\"dark\\" fonts={FONTS}><Legenda>Tema escuro (modo Dark no quadro)</Legenda><ModoInfantil darkExample /></TesselaProvider>\\n  </>;\\n}\\n","exemploEm":"apps/validador/telas/ListItem.tsx","fonte":"import React, { useState } from 'react';\\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';\\nimport Animated from 'react-native-reanimated';\\nimport { ChevronRight } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { Avatar, type AvatarProps } from './Avatar';\\nimport { IconButton } from './IconButton';\\nimport { Switch } from './Switch';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT_CSS } from './motion';\\nimport { useComponentTheme, useFont } from './theme';\\n\\nexport type ListItemTrailing = 'chevron' | 'action' | 'switch' | 'none';\\nexport type ListItemProps = {\\n  title: string;\\n  detail?: string;\\n  overline?: string;\\n  /** false oculta o avatar; sem dados, usa o ícone de pessoa. */\\n  avatar?: Pick<AvatarProps, 'source' | 'initials'> | false;\\n  trailing?: ListItemTrailing;\\n  /** Slot da ponta Action. Padrão: IconButton Small Neutral. */\\n  action?: React.ReactNode;\\n  actionLabel?: string;\\n  onActionPress?: (event: GestureResponderEvent) => void;\\n  onPress?: (event: GestureResponderEvent) => void;\\n  /** Estado controlado da ponta Switch. */\\n  value?: boolean;\\n  onValueChange?: (value: boolean) => void;\\n  disabled?: boolean;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n  testID?: string;\\n};\\n\\n/** Linha informativa, de navegação ou de opção; ação e linha são alvos separados. */\\nexport function ListItem({ title, detail, overline, avatar, trailing = 'chevron', action, actionLabel,\\n  onActionPress, onPress, value = false, onValueChange, disabled = false, accessibilityLabel, style, testID }: ListItemProps) {\\n  const c = useComponentTheme().listitem;\\n  const semibold = useFont('600');\\n  const medium = useFont('500');\\n  const [pressed, setPressed] = useState(false);\\n  const interactive = trailing !== 'none' && (trailing !== 'action' || Boolean(onPress));\\n  const body = (\\n    <>\\n      {avatar !== false && <Avatar {...avatar} size=\\"medium\\" />}\\n      <View style={styles.texts}>\\n        {overline !== undefined && <Text numberOfLines={1} style={[medium, styles.meta, { color: c.text.meta }]}>{overline}</Text>}\\n        <Text numberOfLines={1} ellipsizeMode=\\"tail\\" style={[semibold, styles.title, { color: c.text.title }]}>{title}</Text>\\n        {detail !== undefined && <Text numberOfLines={1} style={[medium, styles.meta, { color: c.text.meta }]}>{detail}</Text>}\\n      </View>\\n      {trailing === 'chevron' && renderIcon(ChevronRight, c.icon.chevron, primitives.iconSize.md, primitives.stroke.icon)}\\n      {trailing === 'switch' && <View pointerEvents=\\"none\\" accessibilityElementsHidden importantForAccessibility=\\"no-hide-descendants\\">\\n        <Switch value={value} disabled={disabled} accessible={false} />\\n      </View>}\\n    </>\\n  );\\n  return (\\n    <Animated.View testID={testID} style={[styles.container, {\\n      backgroundColor: pressed ? c.surface.pressed : 'transparent',\\n      transitionProperty: 'backgroundColor', transitionDuration: DURATION.press, transitionTimingFunction: EASE_OUT_CSS,\\n    }, style]}>\\n      {interactive ? <Pressable disabled={disabled} style={styles.main}\\n        accessibilityRole={trailing === 'switch' ? 'switch' : 'button'} accessibilityLabel={accessibilityLabel ?? title}\\n        accessibilityState={trailing === 'switch' ? { checked: value, disabled } : { disabled }}\\n        onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}\\n        onPress={event => { if (disabled) return; if (trailing === 'switch') onValueChange?.(!value); else onPress?.(event); }}>\\n        {body}\\n      </Pressable> : <View style={styles.main} accessible accessibilityRole=\\"text\\" accessibilityLabel={accessibilityLabel ?? [overline, title, detail].filter(Boolean).join('. ')}>{body}</View>}\\n      {trailing === 'action' && <View style={styles.action}>{action ?? <IconButton size=\\"small\\" variant=\\"neutral\\"\\n        accessibilityLabel={actionLabel ?? \`Mais opções de \${title}\`} onPress={onActionPress} disabled={disabled} />}</View>}\\n    </Animated.View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  container: { flexDirection: 'row', alignItems: 'center', borderRadius: componentMetrics.listitem.radius },\\n  main: { flex: 1, minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: primitives.space[12], padding: primitives.space[12] }, // 44 vem do alvo mínimo\\n  action: { paddingRight: primitives.space[12], paddingVertical: primitives.space[12] },\\n  texts: { flex: 1, minWidth: 0, gap: primitives.space[4] },\\n  title: { fontSize: typography.label.fontSize, marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight), includeFontPadding: false },\\n  meta: { fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight, includeFontPadding: false },\\n});\\n","hash":"4e7a33b5aa81e551e4e6fb69283d9780dcad3ba95f712aa688f3a97d6da65a7e"}`),"section-card":{propriedades:[{nome:`title`,tipo:`string`,opcional:!0,dono:`SectionCardProps`,descricao:`O título opcional mantém o papel de cabeçalho.`},{nome:`children`,tipo:`React.ReactNode`,opcional:!1,dono:`SectionCardProps`,descricao:`Conteúdo livre: linhas, divisores ou parágrafos.`},{nome:`footer`,tipo:`string`,opcional:!0,dono:`SectionCardProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`SectionCardProps`,descricao:``}],tipos:`export type SectionCardProps = {
  /** O título opcional mantém o papel de cabeçalho. */
  title?: string;
  /** Conteúdo livre: linhas, divisores ou parágrafos. */
  children: React.ReactNode;
  footer?: string;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primitives, typography } from '@tessela/tokens';
import { SectionCard } from '@tessela/ui';
import { ListItem } from '@tessela/ui';
import { Divider } from '@tessela/ui';
import { TesselaProvider, useComponentTheme, useFont, useTheme } from '@tessela/ui';
import { FONTS, Legenda, Secao } from './_comum';

function Crianças({ count = 3 }: { count?: number }) {
  const [action, setAction] = useState('');
  return <>
    {['Alice', 'Laura', 'Tomás'].slice(0, count).map((name, index) => <React.Fragment key={name}>
      {index ? <Divider showLabel={false} style={styles.divider} /> : null}
      <ListItem title={name} detail="2 anos · 6 histórias" avatar={{ initials: ['AL', 'LA', 'TO'][index] }} trailing="action" onActionPress={() => setAction(name)} />
    </React.Fragment>)}
    {action ? <Legenda>{\`Mais opções de \${action}\`}</Legenda> : null}
  </>;
}

function ModoInfantil({ footer = true }: { footer?: boolean }) {
  const [alice, setAlice] = useState(false);
  const [laura, setLaura] = useState(true);
  return <SectionCard title="Modo Infantil" footer={footer ? 'Ao ligar, o app abre direto numa história. Para sair, é preciso passar pelo portão parental.' : undefined}>
    <ListItem title="Alice" detail={alice ? 'Ligado' : 'Desligado'} avatar={{ initials: 'AL' }} trailing="switch" value={alice} onValueChange={setAlice} />
    <Divider showLabel={false} style={styles.divider} />
    <ListItem title="Laura" detail={laura ? 'Ligado' : 'Desligado'} avatar={{ initials: 'LA' }} trailing="switch" value={laura} onValueChange={setLaura} />
  </SectionCard>;
}

function Consentimento() {
  const c = useComponentTheme().sectioncard;
  const font = useFont('500');
  return <SectionCard title="Quem cedeu a voz"><Text style={[font, styles.paragraph, { color: c.text.body }]}>Lourdes Silva emprestou a voz para a família Cartaxo, onde moram Alice e Tomás.</Text></SectionCard>;
}

function Escuro() {
  const theme = useTheme();
  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><ModoInfantil footer={false} /></View>;
}

export default function TelaSectionCard() {
  return <>
    <Secao>Variantes</Secao>
    <Legenda>Com título</Legenda><SectionCard title="As crianças da casa"><Crianças count={2} /></SectionCard>
    <Legenda>Sem título, com rodapé</Legenda><SectionCard footer="Texto de apoio sobre a seção."><Crianças count={2} /></SectionCard>
    <Secao>Em uso</Secao>
    <View style={styles.examples}>
      <View><Legenda>As crianças da casa</Legenda><SectionCard title="As crianças da casa"><Crianças /></SectionCard></View>
      <View><Legenda>Modo Infantil com rodapé</Legenda><ModoInfantil /></View>
      <View><Legenda>Consentimento: texto no conteúdo</Legenda><Consentimento /></View>
      <View><Legenda>Tema escuro</Legenda><TesselaProvider theme="dark" fonts={FONTS}><Escuro /></TesselaProvider></View>
    </View>
  </>;
}

const styles = StyleSheet.create({
  divider: { marginHorizontal: primitives.space[12] },
  examples: { gap: primitives.space[24] },
  paragraph: { padding: primitives.space[12], fontSize: typography.bodyLarge.fontSize, lineHeight: typography.bodyLarge.lineHeight, includeFontPadding: false },
  dark: { padding: primitives.space[16], borderRadius: primitives.radius.lg },
});
`,exemploEm:`apps/validador/telas/SectionCard.tsx`,fonte:`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { lineBoxMargin } from './metrics';
import { useComponentTheme, useFont } from './theme';

export type SectionCardProps = {
  /** O título opcional mantém o papel de cabeçalho. */
  title?: string;
  /** Conteúdo livre: linhas, divisores ou parágrafos. */
  children: React.ReactNode;
  footer?: string;
  style?: StyleProp<ViewStyle>;
};

export function SectionCard({ title, children, footer, style }: SectionCardProps) {
  const c = useComponentTheme().sectioncard;
  const medium = useFont('500');
  const semibold = useFont('600');
  return (
    <View style={[styles.card, { backgroundColor: c.surface }, style]}>
      {title ? <View style={styles.titleWrap}><Text accessibilityRole="header" style={[semibold, styles.title, { color: c.text.title }]}>{title}</Text></View> : null}
      <View style={[styles.content, { backgroundColor: c.contentSurface }]}>{children}</View>
      {footer ? <View style={styles.footerWrap}><Text style={[medium, styles.footer, { color: c.text.footer }]}>{footer}</Text></View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: primitives.space[4], borderRadius: componentMetrics.sectioncard.radius },
  titleWrap: { paddingHorizontal: primitives.space[12], paddingTop: primitives.space[8], paddingBottom: primitives.space[12] },
  // A árvore do Figma usa NONE, com caixa 16/19, apesar da descrição de trim óptico.
  title: { includeFontPadding: false, fontSize: typography.label.fontSize, marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight) },
  content: { padding: primitives.space[4], borderRadius: componentMetrics.sectioncard.contentRadius, overflow: 'hidden' },
  footerWrap: { paddingHorizontal: primitives.space[12], paddingVertical: primitives.space[8] },
  footer: { includeFontPadding: false, fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight },
});
`,hash:`77b5b8572bed32b5d92df7459ca8ef76f542508502d23e11381772c93d91aabf`},"action-tile":{propriedades:[{nome:`label`,tipo:`string`,opcional:!1,dono:`ActionTileProps`,descricao:`Rótulo em até 3 linhas; o excedente termina em reticências.`},{nome:`icon`,tipo:`IconSource`,opcional:!1,dono:`ActionTileProps`,descricao:"Ícone Lucide (ex.: `Lock`) ou elemento pronto, 20x20. Decorativo."},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`ActionTileProps`,descricao:"172 de largura por padrão. Em grade de dois, passe `{ flex: 1 }` e ponha\nspace/16 entre os tiles."}],tipos:`export type ActionTileProps = Omit<PressableProps, 'style' | 'children'> & {
  /** Rótulo em até 3 linhas; o excedente termina em reticências. */
  label: string;
  /** Ícone Lucide (ex.: \`Lock\`) ou elemento pronto, 20x20. Decorativo. */
  icon: IconSource;
  /**
   * 172 de largura por padrão. Em grade de dois, passe \`{ flex: 1 }\` e ponha
   * space/16 entre os tiles.
   */
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { View } from 'react-native';
import { CreditCard, Lock } from 'lucide-react-native';
import { primitives } from '@tessela/tokens';
import { ActionTile } from '@tessela/ui';
import { Legenda, Secao, comum } from './_comum';

// Mesmos textos e ícones das variantes do Figma (105:28) e do "Em uso" (105:121).
export default function TelaActionTile() {
  const [toque, setToque] = useState<string | null>(null);
  return (
    <>
      <Legenda>{toque ? \`último toque: \${toque}\` : 'toque num tile'}</Legenda>

      <Secao>Estados</Secao>
      <Legenda>Default · Pressed fixo para comparar com o Figma · 172 × 129</Legenda>
      <View style={comum.grupo}>
        <ActionTile label="Conta e privacidade" icon={Lock} onPress={() => setToque('Conta e privacidade')} />
        <ActionTile label="Conta e privacidade" icon={Lock} testOnly_pressed />
      </View>
      <Legenda>rótulo longo: até 3 linhas, com reticências</Legenda>
      <ActionTile label="Um rótulo bem comprido que passa de três linhas e termina cortado no fim" icon={Lock} />

      <Secao>Em uso</Secao>
      <Legenda>mais opções, como no Perfil: grade de dois</Legenda>
      <View style={{ flexDirection: 'row', gap: primitives.space[16] }}>
        <ActionTile
          style={{ flex: 1 }}
          label="Conta e privacidade"
          icon={Lock}
          onPress={() => setToque('Conta e privacidade')}
        />
        <ActionTile
          style={{ flex: 1 }}
          label="Abrir área adulta de assinatura"
          icon={CreditCard}
          onPress={() => setToque('Abrir área adulta de assinatura')}
        />
      </View>
      <Legenda>tema escuro: troque o tema no topo</Legenda>
    </>
  );
}
`,exemploEm:`apps/validador/telas/ActionTile.tsx`,fonte:`import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated, { useReducedMotion } from 'react-native-reanimated';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { renderIcon, type IconSource } from './Icon';
import { DURATION, EASE_OUT_CSS } from './motion';

export type ActionTileProps = Omit<PressableProps, 'style' | 'children'> & {
  /** Rótulo em até 3 linhas; o excedente termina em reticências. */
  label: string;
  /** Ícone Lucide (ex.: \`Lock\`) ou elemento pronto, 20x20. Decorativo. */
  icon: IconSource;
  /**
   * 172 de largura por padrão. Em grade de dois, passe \`{ flex: 1 }\` e ponha
   * space/16 entre os tiles.
   */
  style?: StyleProp<ViewStyle>;
};

// 172 × 129 vem do Figma; na grade a largura acompanha a coluna e a altura fica.
const WIDTH = 172;
const HEIGHT = 129;
const ICON = primitives.iconSize.md;
const STROKE = primitives.stroke.icon;
const MAX_LINES = 3;

/**
 * Atalho para uma área secundária, como Conta e privacidade. Fica em grade de dois
 * por linha, no fim de telas como Perfil. Ícone no canto de cima, rótulo embaixo.
 */
export function ActionTile({ label, icon, style, ...rest }: ActionTileProps) {
  const c = useComponentTheme().actiontile;
  const reduced = useReducedMotion();
  const medium = useFont('500');

  return (
    <Pressable accessibilityRole="button" style={[styles.pressable, style]} {...rest}>
      {({ pressed }) => (
        <Animated.View
          style={[
            styles.tile,
            {
              backgroundColor: pressed ? c.surface.pressed : c.surface.default,
              // Pressed do Figma: cor e escala 0,97 em 120 ms. Com movimento reduzido, só a cor.
              transform: [{ scale: pressed && !reduced ? 0.97 : 1 }],
              transitionProperty: ['transform', 'backgroundColor'],
              transitionDuration: DURATION.press,
              transitionTimingFunction: EASE_OUT_CSS,
            },
          ]}
        >
          {renderIcon(icon, c.text, ICON, STROKE)}
          <Text
            numberOfLines={MAX_LINES}
            style={[
              medium,
              styles.label,
              {
                fontSize: typography.bodyLarge.fontSize,
                lineHeight: typography.bodyLarge.lineHeight,
                color: c.text,
              },
            ]}
          >
            {label}
          </Text>
        </Animated.View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: WIDTH,
  },
  tile: {
    height: HEIGHT,
    padding: primitives.space[16],
    borderRadius: componentMetrics.actiontile.radius,
    // Ícone em cima e rótulo embaixo, separados pelo espaço que sobrar.
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  label: {
    includeFontPadding: false,
    alignSelf: 'stretch',
  },
});
`,hash:`3d696a9dc38412322328bd4225f6540b6f8fde5d2777739c5fc34c649e9b7ba7`},"state-message":{propriedades:[{nome:`tone`,tipo:`StateMessageTone`,opcional:!0,dono:`StateMessageProps`,descricao:`neutral: vazio ou sem resultado. brand: convite para começar.
danger: confirmação de algo permanente. Padrão: neutral.`},{nome:`title`,tipo:`string`,opcional:!1,dono:`StateMessageProps`,descricao:``},{nome:`description`,tipo:`string`,opcional:!1,dono:`StateMessageProps`,descricao:``},{nome:`icon`,tipo:`IconSource`,opcional:!0,dono:`StateMessageProps`,descricao:`Ícone Lucide ou elemento, 20x20. Padrão do tom: Search, BookOpen ou Trash2.`},{nome:`showIcon`,tipo:`boolean`,opcional:!0,dono:`StateMessageProps`,descricao:`Mostra o ícone em moldura dupla. Padrão: true.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`StateMessageProps`,descricao:``}],tipos:`export type StateMessageTone = 'neutral' | 'brand' | 'danger';

export type StateMessageProps = StateMessageAction & {
  /**
   * neutral: vazio ou sem resultado. brand: convite para começar.
   * danger: confirmação de algo permanente. Padrão: neutral.
   */
  tone?: StateMessageTone;
  title: string;
  description: string;
  /** Ícone Lucide ou elemento, 20x20. Padrão do tom: Search, BookOpen ou Trash2. */
  icon?: IconSource;
  /** Mostra o ícone em moldura dupla. Padrão: true. */
  showIcon?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StateMessage } from '@tessela/ui';
import { Legenda, Secao } from './_comum';

// Mesmos textos e ícones das variantes do Figma (106:67) e do "Em uso" (106:191).
const TITULO = 'Título do estado';
const DESCRICAO = 'Uma ou duas frases que explicam o que aconteceu e o que fazer.';

export default function TelaStateMessage() {
  const [toques, setToques] = useState(0);
  return (
    <>
      <Secao>Tons</Secao>
      <Legenda>Neutral · ícone search</Legenda>
      <StateMessage tone="neutral" title={TITULO} description={DESCRICAO} />
      <Legenda>Brand · ícone book-open</Legenda>
      <StateMessage tone="brand" title={TITULO} description={DESCRICAO} />
      <Legenda>Danger · ícone trash-2</Legenda>
      <StateMessage tone="danger" title={TITULO} description={DESCRICAO} />

      <Secao>Opções</Secao>
      <Legenda>com ação (desligada por padrão)</Legenda>
      <StateMessage title={TITULO} description={DESCRICAO} actionLabel="Ação" onAction={() => setToques((n) => n + 1)} />
      <Legenda>sem ícone</Legenda>
      <StateMessage title={TITULO} description={DESCRICAO} showIcon={false} />

      <Secao>Em uso</Secao>
      <Legenda>{toques ? \`estante vazia, com ação · \${toques} toque(s)\` : 'estante vazia, com ação'}</Legenda>
      <StateMessage
        tone="brand"
        showIcon={false}
        title="A estante começa hoje"
        description="Ainda não há nenhuma história guardada aqui. A primeira é a desta noite."
        actionLabel="Ver a história de hoje"
        onAction={() => setToques((n) => n + 1)}
      />
      <Legenda>busca sem resultado</Legenda>
      <StateMessage tone="neutral" title="Explore o Contto" description="Procure histórias, capítulos e personagens." />
      <Legenda>retirada permanente</Legenda>
      <StateMessage
        tone="danger"
        title="Esta retirada é permanente."
        description="A voz não poderá ser reativada, e as crianças que usam essa voz voltarão à voz padrão."
      />
      <Legenda>tema escuro: troque o tema no topo</Legenda>
      <StateMessage tone="danger" title="Esta retirada é permanente." description="A voz não poderá ser reativada." />
    </>
  );
}
`,exemploEm:`apps/validador/telas/StateMessage.tsx`,fonte:`import React, { useEffect } from 'react';
import { AccessibilityInfo, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { BookOpen, Search, Trash2 } from 'lucide-react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { Button } from './Button';
import { renderIcon, type IconSource } from './Icon';
import { lineBoxMargin } from './metrics';

export type StateMessageTone = 'neutral' | 'brand' | 'danger';

type StateMessageAction =
  | {
      /** Button Primary Medium abaixo dos textos. Só aparece com \`actionLabel\`. */
      onAction: () => void;
      actionLabel: string;
    }
  | { onAction?: undefined; actionLabel?: undefined };

export type StateMessageProps = StateMessageAction & {
  /**
   * neutral: vazio ou sem resultado. brand: convite para começar.
   * danger: confirmação de algo permanente. Padrão: neutral.
   */
  tone?: StateMessageTone;
  title: string;
  description: string;
  /** Ícone Lucide ou elemento, 20x20. Padrão do tom: Search, BookOpen ou Trash2. */
  icon?: IconSource;
  /** Mostra o ícone em moldura dupla. Padrão: true. */
  showIcon?: boolean;
  style?: StyleProp<ViewStyle>;
};

// 263, 60, 52 e 170 vêm do Figma: largura do bloco, anel e quadro do ícone e
// largura do botão.
const WIDTH = 263;
const RING = 60;
const FRAME = 52;
const ACTION_WIDTH = 170;
const ICON = primitives.iconSize.md;
const STROKE = primitives.stroke.icon;
// Title (24/29) com leading trim NONE: a linha do Figma é menor que a natural do iOS.
const TITLE_BOX = lineBoxMargin(typography.title.fontSize, typography.title.lineHeight);

const DEFAULT_ICON: Record<StateMessageTone, IconSource> = {
  neutral: Search,
  brand: BookOpen,
  danger: Trash2,
};

/**
 * Mensagem que ocupa o lugar do conteúdo quando não há o que mostrar ou algo precisa
 * de atenção. Os botões principais da tela ficam fora dele, no rodapé.
 */
export function StateMessage({
  tone = 'neutral',
  title,
  description,
  icon,
  showIcon = true,
  onAction,
  actionLabel,
  style,
}: StateMessageProps) {
  const c = useComponentTheme().statemessage;
  const semibold = useFont('600');
  const medium = useFont('500');
  const colors = c[tone];

  // O título é anunciado quando o estado aparece.
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <View style={[styles.container, style]}>
      {showIcon ? (
        <View style={[styles.ring, { backgroundColor: colors.iconRing }]}>
          <View style={[styles.frame, { backgroundColor: colors.iconSurface }]}>
            {renderIcon(icon ?? DEFAULT_ICON[tone], colors.icon, ICON, STROKE)}
          </View>
        </View>
      ) : null}

      <View style={styles.texts}>
        <Text
          accessibilityRole="header"
          style={[
            semibold,
            styles.text,
            {
              fontSize: typography.title.fontSize,
              marginVertical: TITLE_BOX,
              color: c.text.title,
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            medium,
            styles.text,
            {
              fontSize: typography.bodyLarge.fontSize,
              lineHeight: typography.bodyLarge.lineHeight,
              color: c.text.description,
            },
          ]}
        >
          {description}
        </Text>
      </View>

      {onAction && actionLabel ? (
        // No Figma o botão tem 170 fixos e o rótulo longo do "Em uso" estoura o respiro.
        // Aqui 170 é o mínimo: rótulos curtos ficam como no Figma, os longos crescem.
        <Button label={actionLabel} size="medium" onPress={onAction} style={styles.action} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignSelf: 'center',
    alignItems: 'center',
    gap: primitives.space[24],
  },
  ring: {
    width: RING,
    height: RING,
    borderRadius: componentMetrics.statemessage.iconRingRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    width: FRAME,
    height: FRAME,
    borderRadius: componentMetrics.statemessage.iconRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    alignSelf: 'stretch',
    gap: primitives.space[24],
  },
  text: {
    includeFontPadding: false,
    textAlign: 'center',
  },
  action: {
    alignSelf: 'center',
    minWidth: ACTION_WIDTH,
  },
});
`,hash:`cbf365b8c8b46989b5758f2de2938cce0fcfca7291231c695b4b7544e3073656`},chat:JSON.parse(`{"propriedades":[{"nome":"message","tipo":"string","opcional":false,"dono":"ChatMessageProps","descricao":"Texto do balão."},{"nome":"sender","tipo":"ChatSender","opcional":true,"dono":"ChatMessageProps","descricao":"Padrão do Figma: contto."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ChatMessageProps","descricao":""},{"nome":"value","tipo":"string","opcional":true,"dono":"ChatComposerProps","descricao":"Texto do campo. Sem ele, o campo guarda o texto por dentro e se limpa ao enviar."},{"nome":"defaultValue","tipo":"string","opcional":true,"dono":"ChatComposerProps","descricao":""},{"nome":"onChangeText","tipo":"(text: string) => void","opcional":true,"dono":"ChatComposerProps","descricao":""},{"nome":"onSend","tipo":"(text: string) => void","opcional":true,"dono":"ChatComposerProps","descricao":"Toque no Enviar, com o texto do campo. Com o campo vazio, o Enviar fica desabilitado."},{"nome":"sendLabel","tipo":"string","opcional":true,"dono":"ChatComposerProps","descricao":"Nome do Enviar para leitores de tela."},{"nome":"disclaimer","tipo":"string","opcional":true,"dono":"ChatComposerProps","descricao":"Aviso de IA abaixo do campo, em Caption centralizado (ex.: \\"O Contto pode cometer erros.\\")."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ChatComposerProps","descricao":""},{"nome":"options","tipo":"string[]","opcional":false,"dono":"ChatSuggestionsProps","descricao":"Respostas sugeridas, uma por Chip."},{"nome":"selected","tipo":"string","opcional":true,"dono":"ChatSuggestionsProps","descricao":"Opção escolhida (Chip selecionado)."},{"nome":"onSelect","tipo":"(option: string) => void","opcional":true,"dono":"ChatSuggestionsProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ChatSuggestionsProps","descricao":""}],"tipos":"/** Quem fala: o Contto (balão à esquerda) ou a pessoa (balão à direita). */\\nexport type ChatSender = 'contto' | 'person';\\n\\nexport type ChatMessageProps = {\\n  /** Texto do balão. */\\n  message: string;\\n  /** Padrão do Figma: contto. */\\n  sender?: ChatSender;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ChatComposerProps = Omit<\\n  TextInputProps,\\n  'style' | 'value' | 'defaultValue' | 'onChangeText' | 'multiline' | 'editable'\\n> & {\\n  /** Texto do campo. Sem ele, o campo guarda o texto por dentro e se limpa ao enviar. */\\n  value?: string;\\n  defaultValue?: string;\\n  onChangeText?: (text: string) => void;\\n  /** Toque no Enviar, com o texto do campo. Com o campo vazio, o Enviar fica desabilitado. */\\n  onSend?: (text: string) => void;\\n  /** Nome do Enviar para leitores de tela. */\\n  sendLabel?: string;\\n  /** Aviso de IA abaixo do campo, em Caption centralizado (ex.: \\"O Contto pode cometer erros.\\"). */\\n  disclaimer?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ChatSuggestionsProps = {\\n  /** Respostas sugeridas, uma por Chip. */\\n  options: string[];\\n  /** Opção escolhida (Chip selecionado). */\\n  selected?: string;\\n  onSelect?: (option: string) => void;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, Text, View } from 'react-native';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { ChatComposer, ChatMessage, ChatSuggestions } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao } from './_comum';\\n\\n// Mesmos textos das variantes (107:18, 107:33) e do \\"Em uso\\" (107:143) do Figma.\\nconst SUGESTOES = ['Dinossauros', 'Caminhões', 'O espaço'];\\nconst AVISO = 'O Contto pode cometer erros. Confira informações importantes.';\\n\\n// Quadro do \\"Em uso\\": bg/base, raio 16, respiro 24/24/32/24, rótulo em 12 SemiBold fg/muted.\\nfunction Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>\\n      <Text style={[styles.titulo, { color: theme.fg.muted }]}>{titulo}</Text>\\n      {children}\\n    </View>\\n  );\\n}\\n\\nfunction Conversa() {\\n  const [tema, setTema] = useState('Dinossauros');\\n  return (\\n    <View style={styles.conversa}>\\n      <ChatMessage message=\\"Para quem é a história de hoje?\\" />\\n      <ChatMessage message=\\"Para a Laura\\" sender=\\"person\\" />\\n      <ChatMessage message=\\"Ótimo! Do que a Laura mais gosta?\\" />\\n      <ChatSuggestions options={SUGESTOES} selected={tema} onSelect={setTema} />\\n    </View>\\n  );\\n}\\n\\nexport default function TelaChat() {\\n  const [vazio, setVazio] = useState('');\\n  const [cheio, setCheio] = useState('A Laura adora dinossauros');\\n  const [enviadas, setEnviadas] = useState<string[]>([]);\\n  const [resposta, setResposta] = useState('');\\n  return (\\n    <>\\n      <Secao>Chat Message</Secao>\\n      <Legenda>Sender=Contto · Sender=Pessoa</Legenda>\\n      <View style={styles.conversa}>\\n        <ChatMessage message=\\"Mensagem\\" />\\n        <ChatMessage message=\\"Mensagem\\" sender=\\"person\\" />\\n      </View>\\n      <Legenda>texto longo: quebra a partir de 280 de texto</Legenda>\\n      <View style={styles.conversa}>\\n        <ChatMessage message=\\"Era uma vez um dinossauro que adorava caminhões e sonhava em conhecer o espaço.\\" />\\n        <ChatMessage\\n          message=\\"Ela também gosta de histórias com muitos bichos e um final bem calmo para dormir.\\"\\n          sender=\\"person\\"\\n        />\\n      </View>\\n\\n      <Secao>Chat Composer</Secao>\\n      <Legenda>State=Empty (Enviar desabilitado)</Legenda>\\n      <ChatComposer value={vazio} onChangeText={setVazio} onSend={() => setVazio('')} />\\n      <Legenda>State=Filled (segure o Enviar para ver o Pressed)</Legenda>\\n      <ChatComposer value={cheio} onChangeText={setCheio} onSend={() => setCheio('')} />\\n\\n      <Secao>Em uso</Secao>\\n      <Legenda>toque nas sugestões; digite e envie no campo</Legenda>\\n      <View style={styles.quadros}>\\n        <Quadro titulo=\\"Conversa com sugestões (Chip)\\">\\n          <Conversa />\\n        </Quadro>\\n        <Quadro titulo=\\"Campo vazio e aviso de IA\\">\\n          {enviadas.length ? (\\n            <View style={styles.conversa}>\\n              {enviadas.map((m, i) => (\\n                <ChatMessage key={i} message={m} sender=\\"person\\" />\\n              ))}\\n            </View>\\n          ) : null}\\n          <ChatComposer\\n            value={resposta}\\n            onChangeText={setResposta}\\n            onSend={(t) => {\\n              setEnviadas((atual) => [...atual, t.trim()]);\\n              setResposta('');\\n            }}\\n            disclaimer={AVISO}\\n          />\\n        </Quadro>\\n        <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n          <Quadro titulo=\\"Tema escuro (modo Dark no quadro)\\">\\n            <Conversa />\\n          </Quadro>\\n        </TesselaProvider>\\n      </View>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  quadros: {\\n    gap: primitives.space[16],\\n  },\\n  quadro: {\\n    borderRadius: primitives.radius.lg,\\n    paddingTop: primitives.space[24],\\n    paddingHorizontal: primitives.space[24],\\n    paddingBottom: primitives.space[32],\\n    gap: primitives.space[16],\\n  },\\n  titulo: {\\n    fontFamily: FONTS['600'],\\n    fontSize: typography.labelSmall.fontSize,\\n    includeFontPadding: false,\\n  },\\n  // Fio da conversa do Figma: space/8 entre as peças.\\n  conversa: {\\n    gap: primitives.space[8],\\n  },\\n});\\n","exemploEm":"apps/validador/telas/Chat.tsx","fonte":"import React, { useState } from 'react';\\nimport { StyleSheet, Text, TextInput, View } from 'react-native';\\nimport type { StyleProp, TextInputProps, ViewStyle } from 'react-native';\\nimport { ArrowRight } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { lineBoxMargin, naturalLineHeight } from './metrics';\\nimport { Chip } from './Chip';\\nimport { IconButton } from './IconButton';\\n\\n/** Quem fala: o Contto (balão à esquerda) ou a pessoa (balão à direita). */\\nexport type ChatSender = 'contto' | 'person';\\n\\nexport type ChatMessageProps = {\\n  /** Texto do balão. */\\n  message: string;\\n  /** Padrão do Figma: contto. */\\n  sender?: ChatSender;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ChatComposerProps = Omit<\\n  TextInputProps,\\n  'style' | 'value' | 'defaultValue' | 'onChangeText' | 'multiline' | 'editable'\\n> & {\\n  /** Texto do campo. Sem ele, o campo guarda o texto por dentro e se limpa ao enviar. */\\n  value?: string;\\n  defaultValue?: string;\\n  onChangeText?: (text: string) => void;\\n  /** Toque no Enviar, com o texto do campo. Com o campo vazio, o Enviar fica desabilitado. */\\n  onSend?: (text: string) => void;\\n  /** Nome do Enviar para leitores de tela. */\\n  sendLabel?: string;\\n  /** Aviso de IA abaixo do campo, em Caption centralizado (ex.: \\"O Contto pode cometer erros.\\"). */\\n  disclaimer?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ChatSuggestionsProps = {\\n  /** Respostas sugeridas, uma por Chip. */\\n  options: string[];\\n  /** Opção escolhida (Chip selecionado). */\\n  selected?: string;\\n  onSelect?: (option: string) => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst RADIUS = componentMetrics.chat.radius;\\nconst TAIL = componentMetrics.chat.radiusTail;\\n// \\"Largura pelo texto até 280\\" (documentação do Figma). No \\"Em uso\\", o balão de\\n// \\"Ótimo! Do que a Laura mais gosta?\\" tem 296 numa linha só: o limite vale para o\\n// texto, e o balão soma os respiros laterais.\\nconst TEXT_MAX = 280; // vem do Figma\\nconst MESSAGE_SIZE = typography.label.fontSize;\\n// Label é 16/19 sem trim: a caixa de 19 é menor que a linha natural da Puffin.\\nconst MESSAGE_BOX = lineBoxMargin(MESSAGE_SIZE, typography.label.lineHeight);\\n\\nconst COMPOSER_RADIUS = componentMetrics.chat.composer.radius;\\n// Enviar: Icon Button Medium Primary (50 × 50). No Figma a instância troca o raio\\n// próprio (16) por radius/xl (20), concêntrico ao campo (26 − 6 de respiro). O\\n// IconButton não aceita outro raio: um recorte de 20 em volta dá o mesmo desenho.\\nconst SEND_RADIUS = primitives.radius.xl;\\nconst INPUT_SIZE = typography.bodyLarge.fontSize;\\nconst INPUT_LINE = typography.bodyLarge.lineHeight;\\n// No TextInput do iOS a entrelinha extra fica toda acima do texto; o Figma divide\\n// meio a meio. Subir meia entrelinha põe as linhas onde o Figma põe (padrão do Input).\\nconst INPUT_SHIFT = -(INPUT_LINE - naturalLineHeight(INPUT_SIZE)) / 2;\\nconst PLACEHOLDER = 'Responda com poucas palavras…';\\n\\n/**\\n * Balão de uma fala da conversa. O do Contto fica à esquerda, o da pessoa à direita,\\n * com o canto de cima menor apontando para quem fala.\\n * Numa conversa: space/8 entre balões seguidos, space/24 ao trocar quem fala.\\n */\\nexport function ChatMessage({ message, sender = 'contto', style }: ChatMessageProps) {\\n  const c = useComponentTheme().chat;\\n  const semibold = useFont('600');\\n  const contto = sender === 'contto';\\n\\n  return (\\n    <View\\n      accessible\\n      style={[\\n        styles.bubble,\\n        contto ? styles.contto : styles.person,\\n        { backgroundColor: contto ? c.bubble.contto : c.bubble.person },\\n        style,\\n      ]}\\n    >\\n      <Text\\n        style={[\\n          semibold,\\n          styles.text,\\n          {\\n            fontSize: MESSAGE_SIZE,\\n            color: contto ? c.text.contto : c.text.person,\\n            marginVertical: MESSAGE_BOX,\\n          },\\n        ]}\\n      >\\n        {message}\\n      </Text>\\n    </View>\\n  );\\n}\\n\\n/**\\n * Campo de resposta da conversa, com o Enviar à direita. Cresce para baixo quando o\\n * texto quebra de linha. O Enviar só habilita com texto.\\n */\\nexport function ChatComposer({\\n  value,\\n  defaultValue,\\n  onChangeText,\\n  onSend,\\n  sendLabel = 'Enviar',\\n  disclaimer,\\n  placeholder = PLACEHOLDER,\\n  style,\\n  ...rest\\n}: ChatComposerProps) {\\n  const c = useComponentTheme();\\n  const medium = useFont('500');\\n  // O campo é multilinha e sempre controlado: não controlado, o iOS perde o texto já\\n  // digitado quando ele quebra de linha e a caixa cresce.\\n  const [typed, setTyped] = useState(defaultValue ?? '');\\n  const text = value ?? typed;\\n  const filled = text.trim().length > 0;\\n\\n  const send = () => {\\n    onSend?.(text);\\n    if (value === undefined) setTyped('');\\n  };\\n\\n  return (\\n    <View style={[styles.footer, style]}>\\n      <View style={[styles.composer, { backgroundColor: c.chat.composer.surface }]}>\\n        <TextInput\\n          accessibilityLabel={placeholder}\\n          {...rest}\\n          multiline\\n          value={text}\\n          onChangeText={(t) => {\\n            setTyped(t);\\n            onChangeText?.(t);\\n          }}\\n          placeholder={placeholder}\\n          placeholderTextColor={c.chat.composer.placeholder}\\n          // Body Large nos dois estados: o peso não muda durante a digitação.\\n          style={[\\n            medium,\\n            styles.input,\\n            {\\n              fontSize: INPUT_SIZE,\\n              lineHeight: INPUT_LINE,\\n              top: INPUT_SHIFT,\\n              color: c.chat.composer.text,\\n            },\\n          ]}\\n        />\\n        <View style={styles.send}>\\n          <IconButton\\n            accessibilityLabel={sendLabel}\\n            icon={ArrowRight}\\n            variant=\\"primary\\"\\n            size=\\"medium\\"\\n            disabled={!filled}\\n            onPress={send}\\n          />\\n        </View>\\n      </View>\\n      {disclaimer ? (\\n        <Text\\n          style={[\\n            medium,\\n            styles.text,\\n            styles.disclaimer,\\n            {\\n              fontSize: typography.caption.fontSize,\\n              lineHeight: typography.caption.lineHeight,\\n              color: c.chat.text.disclaimer,\\n            },\\n          ]}\\n        >\\n          {disclaimer}\\n        </Text>\\n      ) : null}\\n    </View>\\n  );\\n}\\n\\n/** Respostas sugeridas: Chips em grade, space/12 entre eles, com quebra de linha. */\\nexport function ChatSuggestions({ options, selected, onSelect, style }: ChatSuggestionsProps) {\\n  return (\\n    <View style={[styles.suggestions, style]}>\\n      {options.map((option) => (\\n        <Chip\\n          key={option}\\n          label={option}\\n          selected={option === selected}\\n          onPress={onSelect ? () => onSelect(option) : undefined}\\n        />\\n      ))}\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  bubble: {\\n    maxWidth: TEXT_MAX + primitives.space[16] * 2,\\n    paddingHorizontal: primitives.space[16],\\n    paddingVertical: primitives.space[12],\\n    borderRadius: RADIUS,\\n  },\\n  contto: {\\n    alignSelf: 'flex-start',\\n    borderTopLeftRadius: TAIL,\\n  },\\n  person: {\\n    alignSelf: 'flex-end',\\n    borderTopRightRadius: TAIL,\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n  footer: {\\n    gap: primitives.space[8],\\n  },\\n  composer: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[12],\\n    paddingLeft: primitives.space[24],\\n    paddingRight: primitives.space[6],\\n    paddingVertical: primitives.space[6],\\n    borderRadius: COMPOSER_RADIUS,\\n  },\\n  input: {\\n    flex: 1,\\n    padding: 0,\\n    margin: 0,\\n    includeFontPadding: false,\\n  },\\n  send: {\\n    borderRadius: SEND_RADIUS,\\n    overflow: 'hidden',\\n  },\\n  disclaimer: {\\n    textAlign: 'center',\\n  },\\n  suggestions: {\\n    flexDirection: 'row',\\n    flexWrap: 'wrap',\\n    gap: primitives.space[12],\\n  },\\n});\\n","hash":"85e65c85b350e3bcdd14eb409c2b0b2fb1cd8d5674a1a40b4e43b00b305d8a7d"}`),"audio-message":JSON.parse(`{"propriedades":[{"nome":"time","tipo":"string","opcional":false,"dono":"AudioMessageProps","descricao":"Duração em mm:ss (ex.: \\"00:05\\")."},{"nome":"playing","tipo":"boolean","opcional":true,"dono":"AudioMessageProps","descricao":"Tocando: mostra o pause. Pausado (padrão): mostra o play."},{"nome":"progress","tipo":"number","opcional":true,"dono":"AudioMessageProps","descricao":"Parte já tocada, de 0 a 1: as barras até esse ponto ficam em audio/bar/played e as\\nque faltam em audio/bar/unplayed. Sem ele (áudio ainda não tocado), a onda inteira\\nfica em audio/bar/played."},{"nome":"onPlay","tipo":"() => void","opcional":true,"dono":"AudioMessageProps","descricao":"Toque com o áudio pausado. O app começa a tocar e passa \`playing\`."},{"nome":"onPause","tipo":"() => void","opcional":true,"dono":"AudioMessageProps","descricao":"Toque com o áudio tocando."},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"AudioMessageProps","descricao":"Padrão: \\"Tocar áudio, 5 segundos\\" ou \\"Pausar\\"."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"AudioMessageProps","descricao":""}],"tipos":"export type AudioMessageProps = {\\n  /** Duração em mm:ss (ex.: \\"00:05\\"). */\\n  time: string;\\n  /** Tocando: mostra o pause. Pausado (padrão): mostra o play. */\\n  playing?: boolean;\\n  /**\\n   * Parte já tocada, de 0 a 1: as barras até esse ponto ficam em audio/bar/played e as\\n   * que faltam em audio/bar/unplayed. Sem ele (áudio ainda não tocado), a onda inteira\\n   * fica em audio/bar/played.\\n   */\\n  progress?: number;\\n  /** Toque com o áudio pausado. O app começa a tocar e passa \`playing\`. */\\n  onPlay?: () => void;\\n  /** Toque com o áudio tocando. */\\n  onPause?: () => void;\\n  /** Padrão: \\"Tocar áudio, 5 segundos\\" ou \\"Pausar\\". */\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useEffect, useState } from 'react';\\nimport { StyleSheet, Text, View } from 'react-native';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { AudioMessage } from '@tessela/ui';\\nimport { ChatMessage } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\n// Mesmos textos das variantes (114:212) e do \\"Em uso\\" (114:290) do Figma.\\nconst DURACAO = 5000;\\nconst PASSO = 100;\\n\\n// Simula o app: a reprodução é dele, o componente só recebe tocando e progresso.\\nfunction useAudioSimulado() {\\n  const [playing, setPlaying] = useState(false);\\n  const [progress, setProgress] = useState<number | undefined>(undefined);\\n  useEffect(() => {\\n    if (!playing) return;\\n    const id = setInterval(() => setProgress((p) => Math.min((p ?? 0) + PASSO / DURACAO, 1)), PASSO);\\n    return () => clearInterval(id);\\n  }, [playing]);\\n  // Chegou ao fim: volta ao play com a onda inteira tocada.\\n  useEffect(() => {\\n    if (playing && progress !== undefined && progress >= 1) setPlaying(false);\\n  }, [playing, progress]);\\n  const onPlay = () => {\\n    setProgress((p) => (p === undefined || p >= 1 ? 0 : p));\\n    setPlaying(true);\\n  };\\n  const onPause = () => setPlaying(false);\\n  return { playing, progress, onPlay, onPause };\\n}\\n\\n// Quadro do \\"Em uso\\": bg/base, raio 16, respiro 24/24/32/24, rótulo em 12 SemiBold fg/muted.\\nfunction Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>\\n      <Text style={[styles.titulo, { color: theme.fg.muted }]}>{titulo}</Text>\\n      {children}\\n    </View>\\n  );\\n}\\n\\nfunction Conversa() {\\n  const audio = useAudioSimulado();\\n  return (\\n    <View style={styles.conversa}>\\n      <ChatMessage message=\\"Pronto, só confirma uma coisa:\\" />\\n      <AudioMessage time=\\"00:05\\" {...audio} />\\n      <ChatMessage message=\\"A pronúncia do nome está correta?\\" />\\n      <ChatMessage message=\\"Está!\\" sender=\\"person\\" />\\n    </View>\\n  );\\n}\\n\\nexport default function TelaAudioMessage() {\\n  const audio = useAudioSimulado();\\n  return (\\n    <>\\n      <Secao>Estados</Secao>\\n      <Legenda>State=Paused (ainda não tocado)</Legenda>\\n      <AudioMessage time=\\"00:05\\" />\\n      <Legenda>State=Playing (13 de 28 barras tocadas)</Legenda>\\n      <AudioMessage time=\\"00:05\\" playing progress={13 / 28} />\\n      <Legenda>toque para tocar e pausar (5 s simulados)</Legenda>\\n      <View style={comum.linha}>\\n        <AudioMessage time=\\"00:05\\" {...audio} />\\n      </View>\\n\\n      <Secao>Em uso</Secao>\\n      <Legenda>toque no áudio para tocar e pausar</Legenda>\\n      <View style={styles.quadros}>\\n        <Quadro titulo=\\"Na conversa, como no app\\">\\n          <Conversa />\\n        </Quadro>\\n        <Quadro titulo=\\"Pausado e tocando\\">\\n          <View style={styles.estados}>\\n            <AudioMessage time=\\"00:05\\" />\\n            <AudioMessage time=\\"00:05\\" playing progress={13 / 28} />\\n          </View>\\n        </Quadro>\\n        <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n          <Quadro titulo=\\"Tema escuro (modo Dark no quadro)\\">\\n            <Conversa />\\n          </Quadro>\\n        </TesselaProvider>\\n      </View>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  quadros: {\\n    gap: primitives.space[16],\\n  },\\n  quadro: {\\n    borderRadius: primitives.radius.lg,\\n    paddingTop: primitives.space[24],\\n    paddingHorizontal: primitives.space[24],\\n    paddingBottom: primitives.space[32],\\n    gap: primitives.space[16],\\n  },\\n  titulo: {\\n    fontFamily: FONTS['600'],\\n    fontSize: typography.labelSmall.fontSize,\\n    includeFontPadding: false,\\n  },\\n  // Fio da conversa do Figma: space/8 entre as peças.\\n  conversa: {\\n    gap: primitives.space[8],\\n  },\\n  estados: {\\n    gap: primitives.space[12],\\n  },\\n});\\n","exemploEm":"apps/validador/telas/AudioMessage.tsx","fonte":"import React from 'react';\\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { Keyframe, LayoutAnimationConfig, ReduceMotion } from 'react-native-reanimated';\\nimport Svg, { Path, Rect } from 'react-native-svg';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { DURATION, EASE_OUT, EASE_OUT_CSS } from './motion';\\n\\nexport type AudioMessageProps = {\\n  /** Duração em mm:ss (ex.: \\"00:05\\"). */\\n  time: string;\\n  /** Tocando: mostra o pause. Pausado (padrão): mostra o play. */\\n  playing?: boolean;\\n  /**\\n   * Parte já tocada, de 0 a 1: as barras até esse ponto ficam em audio/bar/played e as\\n   * que faltam em audio/bar/unplayed. Sem ele (áudio ainda não tocado), a onda inteira\\n   * fica em audio/bar/played.\\n   */\\n  progress?: number;\\n  /** Toque com o áudio pausado. O app começa a tocar e passa \`playing\`. */\\n  onPlay?: () => void;\\n  /** Toque com o áudio tocando. */\\n  onPause?: () => void;\\n  /** Padrão: \\"Tocar áudio, 5 segundos\\" ou \\"Pausar\\". */\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst ICON = primitives.iconSize.md;\\nconst BAR_WIDTH = 3; // vem do Figma\\nconst WAVE_HEIGHT = 19; // vem do Figma\\n// Alturas das 28 barras da onda, na ordem do Figma (114:145).\\nconst BARS = [\\n  11, 6.5, 4, 8.5, 11.5, 15.5, 11.5, 8, 19, 15.5, 13, 16, 19, 16, 7, 4, 8, 14.5, 17, 13, 8.5, 13, 15.5, 8, 14, 9.5, 14,\\n  11.5,\\n];\\n\\n// Ícones preenchidos do Figma (114:139 e 114:143), na grade de 20. Não são do Lucide.\\nconst PLAY =\\n  'M5 3.75C4.999 3.529 5.056 3.312 5.167 3.121C5.277 2.93 5.435 2.771 5.627 2.661C5.818 2.551 6.035 2.493 6.256 2.494' +\\n  'C6.477 2.495 6.693 2.555 6.883 2.667L16.467 8.417C16.657 8.526 16.815 8.684 16.925 8.874C17.035 9.064 17.093 9.28 17.093 9.5' +\\n  'C17.093 9.72 17.035 9.936 16.925 10.126C16.815 10.316 16.657 10.474 16.467 10.583L6.883 16.333' +\\n  'C6.693 16.445 6.477 16.505 6.256 16.506C6.035 16.507 5.818 16.449 5.627 16.339C5.435 16.229 5.277 16.07 5.167 15.879' +\\n  'C5.056 15.688 4.999 15.471 5 15.25L5 3.75Z';\\nconst PAUSE_BAR = { y: 10 / 3, width: 12.5 / 3, height: 40 / 3, r: 1.25 };\\nconst PAUSE_X = [12.5 / 3, 35 / 3];\\n\\n// Troca play/pause: o novo entra de 90% com fade, o antigo só some (padrão do Input).\\nconst ICON_IN = new Keyframe({\\n  0: { opacity: 0, transform: [{ scale: 0.9 }] },\\n  100: { opacity: 1, transform: [{ scale: 1 }], easing: EASE_OUT },\\n})\\n  .duration(DURATION.state)\\n  .reduceMotion(ReduceMotion.System);\\nconst ICON_OUT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.System);\\n\\n/** \\"00:05\\" → \\"5 segundos\\"; \\"01:30\\" → \\"1 minuto e 30 segundos\\". */\\nfunction spokenTime(time: string): string {\\n  const [m, s] = time.split(':').map((p) => parseInt(p, 10));\\n  if (s === undefined || Number.isNaN(m) || Number.isNaN(s)) return time;\\n  const parts: string[] = [];\\n  if (m > 0) parts.push(\`\${m} \${m === 1 ? 'minuto' : 'minutos'}\`);\\n  if (s > 0 || m === 0) parts.push(\`\${s} \${s === 1 ? 'segundo' : 'segundos'}\`);\\n  return parts.join(' e ');\\n}\\n\\n/**\\n * Balão de áudio curto na conversa com o Contto, com o fundo e o raio do balão dele.\\n * O balão inteiro é o botão de tocar e pausar; a reprodução fica com o app.\\n */\\nexport function AudioMessage({\\n  time,\\n  playing = false,\\n  progress,\\n  onPlay,\\n  onPause,\\n  accessibilityLabel,\\n  style,\\n}: AudioMessageProps) {\\n  const c = useComponentTheme();\\n  const medium = useFont('500');\\n  const played = progress === undefined ? BARS.length : Math.round(Math.min(Math.max(progress, 0), 1) * BARS.length);\\n\\n  return (\\n    <Pressable\\n      accessibilityRole=\\"button\\"\\n      accessibilityLabel={accessibilityLabel ?? (playing ? 'Pausar' : \`Tocar áudio, \${spokenTime(time)}\`)}\\n      onPress={playing ? onPause : onPlay}\\n      style={[styles.bubble, { backgroundColor: c.chat.bubble.contto }, style]}\\n    >\\n      {/* skipEntering: o ícone que já nasce na tela não anima; só a troca pelo toque. */}\\n      <LayoutAnimationConfig skipEntering>\\n        <View style={styles.icon}>\\n          <Animated.View\\n            key={playing ? 'pause' : 'play'}\\n            entering={ICON_IN}\\n            exiting={ICON_OUT}\\n            style={styles.iconLayer}\\n          >\\n            <Svg width={ICON} height={ICON} viewBox=\\"0 0 20 20\\">\\n              {playing ? (\\n                PAUSE_X.map((x) => (\\n                  <Rect\\n                    key={x}\\n                    x={x}\\n                    y={PAUSE_BAR.y}\\n                    width={PAUSE_BAR.width}\\n                    height={PAUSE_BAR.height}\\n                    rx={PAUSE_BAR.r}\\n                    ry={PAUSE_BAR.r}\\n                    fill={c.audio.icon}\\n                  />\\n                ))\\n              ) : (\\n                <Path d={PLAY} fill={c.audio.icon} />\\n              )}\\n            </Svg>\\n          </Animated.View>\\n        </View>\\n      </LayoutAnimationConfig>\\n\\n      {/* A onda é decorativa: o leitor de tela lê só o botão. */}\\n      <View style={styles.wave} importantForAccessibility=\\"no-hide-descendants\\" accessibilityElementsHidden>\\n        {BARS.map((height, i) => (\\n          <Animated.View\\n            key={i}\\n            style={[\\n              styles.bar,\\n              {\\n                height,\\n                backgroundColor: i < played ? c.audio.bar.played : c.audio.bar.unplayed,\\n                // O limite anda com o áudio: cada barra troca de cor sem salto.\\n                transitionProperty: 'backgroundColor',\\n                transitionDuration: DURATION.state,\\n                transitionTimingFunction: EASE_OUT_CSS,\\n              },\\n            ]}\\n          />\\n        ))}\\n      </View>\\n\\n      <Text\\n        numberOfLines={1}\\n        style={[\\n          medium,\\n          styles.time,\\n          {\\n            fontSize: typography.caption.fontSize,\\n            lineHeight: typography.caption.lineHeight,\\n            color: c.audio.text.time,\\n          },\\n        ]}\\n      >\\n        {time}\\n      </Text>\\n    </Pressable>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  bubble: {\\n    alignSelf: 'flex-start',\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[10],\\n    paddingHorizontal: primitives.space[16],\\n    paddingVertical: primitives.space[12],\\n    borderRadius: componentMetrics.chat.radius,\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n  },\\n  iconLayer: {\\n    position: 'absolute',\\n    top: 0,\\n    right: 0,\\n    bottom: 0,\\n    left: 0,\\n  },\\n  wave: {\\n    height: WAVE_HEIGHT,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[2],\\n  },\\n  bar: {\\n    width: BAR_WIDTH,\\n    borderRadius: componentMetrics.audio.bar.radius,\\n  },\\n  time: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"825291a2b3763a890f3612e80c0eb47db1a72612a4705ca7a7e3163a61c04886"}`),"copy-field":JSON.parse(`{"propriedades":[{"nome":"value","tipo":"string","opcional":false,"dono":"CopyFieldProps","descricao":"Valor mostrado e entregue a \`onCopy\` (ex.: o link de um convite)."},{"nome":"onCopy","tipo":"((value: string) => void) | ((value: string) => Promise<void>)","opcional":true,"dono":"CopyFieldProps","descricao":"Toque em qualquer parte do campo. O Tessela não copia: o app grava \`value\` na\\nárea de transferência (ex.: expo-clipboard) dentro deste callback.\\nUma Promise adia a confirmação até concluir; rejeitar informa onCopyError."},{"nome":"onCopyError","tipo":"(error: unknown) => void","opcional":true,"dono":"CopyFieldProps","descricao":"Falha da integração de cópia; não exibe confirmação."},{"nome":"copiedText","tipo":"string","opcional":true,"dono":"CopyFieldProps","descricao":"Confirmação no lugar do valor depois do toque."},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"CopyFieldProps","descricao":"Rótulo do botão para o leitor de tela."},{"nome":"copiedDuration","tipo":"number","opcional":true,"dono":"CopyFieldProps","descricao":"Quanto tempo a confirmação fica, em ms."},{"nome":"copied","tipo":"boolean","opcional":true,"dono":"CopyFieldProps","descricao":"Controla o estado Copied por fora. Com a prop definida, o campo não volta\\nsozinho: quem controla decide quando desligar."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"CopyFieldProps","descricao":""}],"tipos":"export type CopyFieldProps = {\\n  /** Valor mostrado e entregue a \`onCopy\` (ex.: o link de um convite). */\\n  value: string;\\n  /**\\n   * Toque em qualquer parte do campo. O Tessela não copia: o app grava \`value\` na\\n   * área de transferência (ex.: expo-clipboard) dentro deste callback.\\n   * Uma Promise adia a confirmação até concluir; rejeitar informa onCopyError.\\n   */\\n  onCopy?: ((value: string) => void) | ((value: string) => Promise<void>);\\n  /** Falha da integração de cópia; não exibe confirmação. */\\n  onCopyError?: (error: unknown) => void;\\n  /** Confirmação no lugar do valor depois do toque. */\\n  copiedText?: string;\\n  /** Rótulo do botão para o leitor de tela. */\\n  accessibilityLabel?: string;\\n  /** Quanto tempo a confirmação fica, em ms. */\\n  copiedDuration?: number;\\n  /**\\n   * Controla o estado Copied por fora. Com a prop definida, o campo não volta\\n   * sozinho: quem controla decide quando desligar.\\n   */\\n  copied?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { Clipboard, Text, View } from 'react-native';\\nimport { TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { CopyField } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao } from './_comum';\\n\\nconst LINK = 'https://contto.ai/convite/1239847';\\n\\n// Quadro dos exemplos do \\"Em uso\\": bg/base, raio 16, legenda em 12 SemiBold.\\nfunction Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View\\n      style={{\\n        backgroundColor: theme.bg.base,\\n        borderRadius: primitives.radius.lg,\\n        paddingTop: primitives.space[24],\\n        paddingHorizontal: primitives.space[24],\\n        paddingBottom: primitives.space[32],\\n        gap: primitives.space[16],\\n        marginTop: primitives.space[16],\\n      }}\\n    >\\n      <Text style={{ fontFamily: FONTS['600'], fontSize: typography.labelSmall.fontSize, color: theme.fg.muted }}>{titulo}</Text>\\n      {children}\\n    </View>\\n  );\\n}\\n\\n// Mesmos textos das variantes do Figma (108:393) e do \\"Em uso\\" (108:479).\\nexport default function TelaCopyField() {\\n  const [copias, setCopias] = useState(0);\\n  const [erro, setErro] = useState<string>();\\n  const copiar = async (value: string) => {\\n    setErro(undefined);\\n    Clipboard.setString(value);\\n    if (await Clipboard.getString() !== value) throw new Error('A área de transferência não confirmou o valor.');\\n    setCopias((n) => n + 1);\\n  };\\n  const falhou = () => setErro('Não foi possível copiar. Tente novamente.');\\n  return (\\n    <>\\n      <Secao>Estados</Secao>\\n      <Legenda>Default (toque para ver o Copied por 2 s)</Legenda>\\n      <CopyField value={LINK} onCopy={copiar} onCopyError={falhou} />\\n      <Legenda>Copied</Legenda>\\n      <CopyField value={LINK} copied />\\n      <Legenda>valor longo: uma linha com reticências</Legenda>\\n      <CopyField value=\\"https://contto.ai/convite/1239847?origem=whatsapp&campanha=primavera\\" onCopy={copiar} onCopyError={falhou} />\\n\\n      <Secao>Em uso</Secao>\\n      <Quadro titulo=\\"Convite criado\\">\\n        <CopyField value={LINK} onCopy={copiar} onCopyError={falhou} />\\n      </Quadro>\\n      <Legenda>{\`Área de transferência conferida: \${copias} \${copias === 1 ? 'cópia' : 'cópias'}\`}</Legenda>\\n      {erro ? <Text accessibilityRole=\\"alert\\">{erro}</Text> : null}\\n      <Quadro titulo=\\"Depois de tocar\\">\\n        <CopyField value={LINK} copied />\\n      </Quadro>\\n      <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n        <Quadro titulo=\\"Tema escuro (modo Dark no quadro)\\">\\n          <CopyField value={LINK} onCopy={copiar} onCopyError={falhou} />\\n        </Quadro>\\n      </TesselaProvider>\\n    </>\\n  );\\n}\\n","exemploEm":"apps/validador/telas/CopyField.tsx","fonte":"import React, { useEffect, useRef, useState } from 'react';\\nimport { AccessibilityInfo, Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport Animated from 'react-native-reanimated';\\nimport { Check, Copy } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT_CSS } from './motion';\\n\\nexport type CopyFieldProps = {\\n  /** Valor mostrado e entregue a \`onCopy\` (ex.: o link de um convite). */\\n  value: string;\\n  /**\\n   * Toque em qualquer parte do campo. O Tessela não copia: o app grava \`value\` na\\n   * área de transferência (ex.: expo-clipboard) dentro deste callback.\\n   * Uma Promise adia a confirmação até concluir; rejeitar informa onCopyError.\\n   */\\n  onCopy?: ((value: string) => void) | ((value: string) => Promise<void>);\\n  /** Falha da integração de cópia; não exibe confirmação. */\\n  onCopyError?: (error: unknown) => void;\\n  /** Confirmação no lugar do valor depois do toque. */\\n  copiedText?: string;\\n  /** Rótulo do botão para o leitor de tela. */\\n  accessibilityLabel?: string;\\n  /** Quanto tempo a confirmação fica, em ms. */\\n  copiedDuration?: number;\\n  /**\\n   * Controla o estado Copied por fora. Com a prop definida, o campo não volta\\n   * sozinho: quem controla decide quando desligar.\\n   */\\n  copied?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst ICON = primitives.iconSize.md;\\n// O Figma liga stroke/icon no copy e selection/stroke/icon no check: os dois valem 1,6.\\nconst STROKE = primitives.stroke.icon;\\nconst VALUE_SIZE = typography.bodyLarge.fontSize;\\nconst COPIED_SIZE = typography.label.fontSize;\\nconst PAD_LEFT = primitives.space[12];\\nconst PAD_RIGHT = primitives.space[16];\\n\\n/**\\n * Valor pronto para copiar, como o link de um convite. Tocar em qualquer parte\\n * copia; a confirmação aparece no próprio campo e some depois de 2 segundos.\\n * Para editar um valor, use Input.\\n */\\nexport function CopyField({\\n  value,\\n  onCopy,\\n  onCopyError,\\n  copiedText = 'Link copiado',\\n  accessibilityLabel = 'Copiar link',\\n  copiedDuration = 2000,\\n  copied: copiedProp,\\n  style,\\n}: CopyFieldProps) {\\n  const c = useComponentTheme().copyfield;\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n  const [copiedState, setCopiedState] = useState(false);\\n  const [pending, setPending] = useState(false);\\n  const pendingRef = useRef(false);\\n  const generation = useRef(0);\\n  const mounted = useRef(false);\\n  const currentValue = useRef(value);\\n  const controlled = useRef(copiedProp !== undefined);\\n  currentValue.current = value;\\n  controlled.current = copiedProp !== undefined;\\n  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);\\n  const copied = copiedProp ?? copiedState;\\n  const announced = useRef(false);\\n\\n  useEffect(() => {\\n    mounted.current = true;\\n    generation.current += 1;\\n    pendingRef.current = false;\\n    setPending(false);\\n    setCopiedState(false);\\n    return () => {\\n      mounted.current = false;\\n      generation.current += 1;\\n      if (timer.current) clearTimeout(timer.current);\\n    };\\n  }, [value]);\\n\\n  useEffect(() => {\\n    if (copied && !announced.current) AccessibilityInfo.announceForAccessibility(copiedText);\\n    announced.current = copied;\\n  }, [copied, copiedText]);\\n\\n  const handlePress = () => {\\n    if (!onCopy || pendingRef.current) return;\\n    const request = ++generation.current;\\n    const isCurrent = () => mounted.current && generation.current === request && currentValue.current === value;\\n    pendingRef.current = true;\\n    setPending(true);\\n    setCopiedState(false);\\n    if (timer.current) clearTimeout(timer.current);\\n    const finish = () => {\\n      if (!isCurrent()) return;\\n      pendingRef.current = false;\\n      setPending(false);\\n      if (controlled.current) return;\\n      setCopiedState(true);\\n      if (timer.current) clearTimeout(timer.current);\\n      timer.current = setTimeout(() => setCopiedState(false), copiedDuration);\\n    };\\n    const fail = (error: unknown) => {\\n      if (!isCurrent()) return;\\n      pendingRef.current = false;\\n      setPending(false);\\n      onCopyError?.(error);\\n    };\\n    let result: void | Promise<void>;\\n    try {\\n      result = onCopy(value);\\n    } catch (error) {\\n      fail(error);\\n      return;\\n    }\\n    if (result && typeof result.then === 'function') return result.then(finish, fail);\\n    finish();\\n  };\\n\\n  // Troca por cruzamento de opacidade, 150 ms. Só opacidade: vale também com\\n  // movimento reduzido.\\n  const fade = {\\n    transitionProperty: 'opacity' as const,\\n    transitionDuration: DURATION.state,\\n    transitionTimingFunction: EASE_OUT_CSS,\\n  };\\n\\n  return (\\n    <Pressable\\n      accessibilityRole=\\"button\\"\\n      accessibilityLabel={accessibilityLabel}\\n      accessibilityValue={{ text: copied ? copiedText : value }}\\n      accessibilityState={{ busy: pending, disabled: !onCopy || pending }}\\n      disabled={!onCopy || pending}\\n      onPress={handlePress}\\n      style={[styles.field, { backgroundColor: c.surface }, style]}\\n    >\\n      {/* O valor fica no fluxo e dá a altura do campo; a confirmação cobre o mesmo lugar. */}\\n      <Animated.View style={[styles.row, { opacity: copied ? 0 : 1 }, fade]}>\\n        <View style={styles.icon}>{renderIcon(Copy, c.icon.default, ICON, STROKE)}</View>\\n        <Text\\n          numberOfLines={1}\\n          style={[\\n            medium,\\n            styles.text,\\n            // Body Large: linha de 23 (145%), maior que a natural, então lineHeight funciona.\\n            { fontSize: VALUE_SIZE, lineHeight: typography.bodyLarge.lineHeight, color: c.text.default },\\n          ]}\\n        >\\n          {value}\\n        </Text>\\n      </Animated.View>\\n\\n      <Animated.View\\n        pointerEvents=\\"none\\"\\n        style={[styles.row, styles.copiedLayer, { opacity: copied ? 1 : 0 }, fade]}\\n      >\\n        <View style={styles.icon}>{renderIcon(Check, c.icon.copied, ICON, STROKE)}</View>\\n        <Text\\n          numberOfLines={1}\\n          style={[\\n            semibold,\\n            styles.text,\\n            {\\n              fontSize: COPIED_SIZE,\\n              color: c.text.copied,\\n              // Label: linha de 19 (120%), menor que a natural: margem, não lineHeight.\\n              marginVertical: lineBoxMargin(COPIED_SIZE, typography.label.lineHeight),\\n            },\\n          ]}\\n        >\\n          {copiedText}\\n        </Text>\\n      </Animated.View>\\n\\n      {/* Borda INSIDE do Figma: camada por cima, sem ocupar o respiro. */}\\n      <View pointerEvents=\\"none\\" style={[styles.border, { borderColor: c.border }]} />\\n    </Pressable>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  field: {\\n    borderRadius: componentMetrics.copyfield.radius,\\n    paddingVertical: primitives.space[12],\\n    paddingLeft: PAD_LEFT,\\n    paddingRight: PAD_RIGHT,\\n  },\\n  row: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[10],\\n  },\\n  // Coordenadas explícitas: o React Native 0.86 removeu StyleSheet.absoluteFillObject.\\n  copiedLayer: {\\n    position: 'absolute',\\n    top: 0,\\n    bottom: 0,\\n    left: PAD_LEFT,\\n    right: PAD_RIGHT,\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  text: {\\n    flex: 1,\\n    includeFontPadding: false,\\n  },\\n  border: {\\n    position: 'absolute',\\n    top: 0,\\n    right: 0,\\n    bottom: 0,\\n    left: 0,\\n    borderRadius: componentMetrics.copyfield.radius,\\n    borderWidth: primitives.stroke.hairline,\\n  },\\n});\\n","hash":"104b9cb12dc3edc9df50b55d1e9404d9f32dc231bb10ad908a2b71a5b8033634"}`),toast:JSON.parse(`{"propriedades":[{"nome":"type","tipo":"ToastType","opcional":true,"dono":"ToastProps","descricao":"success: deu certo. error: não deu certo. info: informação neutra."},{"nome":"message","tipo":"string","opcional":false,"dono":"ToastProps","descricao":"Mensagem curta, em até 2 linhas (ex.: \\"Voz salva\\")."},{"nome":"actionLabel","tipo":"string","opcional":true,"dono":"ToastProps","descricao":"Texto da ação (ex.: \\"Desfazer\\"). Sem ele, a ação não aparece."},{"nome":"onAction","tipo":"() => void","opcional":true,"dono":"ToastProps","descricao":"Toque na ação. Depois dele, o Toast chama \`onDismiss\`."},{"nome":"onDismiss","tipo":"() => void","opcional":true,"dono":"ToastProps","descricao":"Chamado quando o tempo acaba (4 s, ou 6 s com ação): tire o Toast da árvore aqui\\npara ele sair. Sem \`onDismiss\`, o Toast fica na tela."},{"nome":"duration","tipo":"number","opcional":true,"dono":"ToastProps","descricao":"Tempo na tela em ms. Padrão: 4000, ou 6000 com ação."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ToastProps","descricao":""}],"tipos":"export type ToastType = 'success' | 'error' | 'info';\\n\\nexport type ToastProps = {\\n  /** success: deu certo. error: não deu certo. info: informação neutra. */\\n  type?: ToastType;\\n  /** Mensagem curta, em até 2 linhas (ex.: \\"Voz salva\\"). */\\n  message: string;\\n  /** Texto da ação (ex.: \\"Desfazer\\"). Sem ele, a ação não aparece. */\\n  actionLabel?: string;\\n  /** Toque na ação. Depois dele, o Toast chama \`onDismiss\`. */\\n  onAction?: () => void;\\n  /**\\n   * Chamado quando o tempo acaba (4 s, ou 6 s com ação): tire o Toast da árvore aqui\\n   * para ele sair. Sem \`onDismiss\`, o Toast fica na tela.\\n   */\\n  onDismiss?: () => void;\\n  /** Tempo na tela em ms. Padrão: 4000, ou 6000 com ação. */\\n  duration?: number;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, View } from 'react-native';\\nimport { BottomNavigation, Button, TesselaProvider, useTheme } from '@tessela/ui';\\nimport type { BottomNavigationTab } from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { Toast, type ToastType } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\n// Textos das variantes (116:34) e do \\"Em uso\\" (116:204) do Figma.\\nconst ABAS: BottomNavigationTab[] = [\\n  { key: 'hoje', label: 'Hoje', icon: 'house' },\\n  { key: 'estante', label: 'Estante', icon: 'library-big' },\\n  { key: 'criar', label: 'Criar', icon: 'book-open-text' },\\n  { key: 'familia', label: 'Família', icon: 'users' },\\n  { key: 'perfil', label: 'Perfil', icon: 'user-round' },\\n];\\n\\ntype Disparo = { id: number; type: ToastType; message: string; actionLabel?: string };\\n\\nconst DISPAROS: { rotulo: string; type: ToastType; message: string; actionLabel?: string }[] = [\\n  { rotulo: 'Success', type: 'success', message: 'Voz salva' },\\n  { rotulo: 'Error', type: 'error', message: 'Não deu para salvar. Tente de novo.' },\\n  { rotulo: 'Info', type: 'info', message: 'Link copiado' },\\n  { rotulo: 'Com ação', type: 'info', message: 'História removida da estante', actionLabel: 'Desfazer' },\\n];\\n\\n// Largura da Bottom Navigation: o Toast acima dela acompanha os 343.\\nconst RODAPE = 343;\\n// Lugar do Toast no palco: cabe a mensagem de 2 linhas (16 + 36 + 16).\\nconst LUGAR_DO_TOAST = 68;\\n\\nfunction Quadro({ children }: { children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>{children}</View>;\\n}\\n\\nexport default function TelaToast() {\\n  const [aba, setAba] = useState('hoje');\\n  const [atual, setAtual] = useState<Disparo | null>(null);\\n  const [contador, setContador] = useState(0);\\n  const [aviso, setAviso] = useState('toque num botão: o Toast entra acima da barra e some sozinho');\\n\\n  const disparar = (d: (typeof DISPAROS)[number]) => {\\n    setContador((n) => n + 1);\\n    setAtual({ id: contador + 1, type: d.type, message: d.message, actionLabel: d.actionLabel });\\n    setAviso(d.actionLabel ? 'some em 6 s, ou ao tocar em Desfazer' : 'some em 4 s');\\n  };\\n\\n  return (\\n    <>\\n      <Secao>Disparar</Secao>\\n      <Legenda>{aviso}</Legenda>\\n      <View style={comum.grupo}>\\n        {DISPAROS.map((d) => (\\n          <Button key={d.rotulo} label={d.rotulo} size=\\"small\\" variant=\\"soft\\" onPress={() => disparar(d)} />\\n        ))}\\n      </View>\\n      <Legenda>entra subindo 8 com opacidade (180 ms); sai só com opacidade (100 ms)</Legenda>\\n      <Quadro>\\n        <View style={styles.rodape}>\\n          <View style={styles.lugarDoToast}>\\n            {/* A camada fica sempre montada: só o Toast entra e sai, com a animação dele. */}\\n            <View style={styles.camada}>\\n              {atual ? (\\n                <Toast\\n                  key={atual.id}\\n                  type={atual.type}\\n                  message={atual.message}\\n                  actionLabel={atual.actionLabel}\\n                  onAction={() => setAviso('Desfazer tocado')}\\n                  onDismiss={() => setAtual((a) => (a?.id === atual.id ? null : a))}\\n                />\\n              ) : null}\\n            </View>\\n          </View>\\n          <BottomNavigation tabs={ABAS} activeKey={aba} onChange={setAba} />\\n        </View>\\n      </Quadro>\\n\\n      <Secao>Tipos</Secao>\\n      <Legenda>Success · Error · Info (ficam na tela: sem onDismiss)</Legenda>\\n      <View style={styles.pilha}>\\n        <Toast type=\\"success\\" message=\\"Mensagem curta\\" />\\n        <Toast type=\\"error\\" message=\\"Mensagem curta\\" />\\n        <Toast type=\\"info\\" message=\\"Mensagem curta\\" />\\n      </View>\\n      <Legenda>com ação</Legenda>\\n      <Toast type=\\"success\\" message=\\"Mensagem curta\\" actionLabel=\\"Desfazer\\" />\\n      <Legenda>mensagem em duas linhas (o máximo)</Legenda>\\n      <Toast\\n        type=\\"info\\"\\n        message=\\"A história foi para a estante da família e já pode ser ouvida por todos.\\"\\n        actionLabel=\\"Desfazer\\"\\n      />\\n\\n      <Secao>Em uso</Secao>\\n      <Legenda>Acima da Bottom Navigation (space/16)</Legenda>\\n      <Quadro>\\n        <View style={[styles.rodape, styles.pilhaRodape]}>\\n          <Toast type=\\"success\\" message=\\"Voz salva\\" />\\n          <BottomNavigation tabs={ABAS} activeKey=\\"hoje\\" onChange={() => {}} />\\n        </View>\\n      </Quadro>\\n\\n      <Legenda>Com ação</Legenda>\\n      <Toast type=\\"info\\" message=\\"História removida da estante\\" actionLabel=\\"Desfazer\\" />\\n\\n      <Legenda>Erro</Legenda>\\n      <Toast type=\\"error\\" message=\\"Não deu para salvar. Tente de novo.\\" />\\n\\n      <Legenda>Tema escuro (modo Dark no quadro)</Legenda>\\n      <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n        <Quadro>\\n          <View style={[styles.rodape, styles.pilhaRodape]}>\\n            <Toast type=\\"success\\" message=\\"Voz salva\\" actionLabel=\\"Desfazer\\" />\\n            <BottomNavigation tabs={ABAS} activeKey=\\"hoje\\" onChange={() => {}} />\\n          </View>\\n        </Quadro>\\n      </TesselaProvider>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  pilha: {\\n    gap: primitives.space[12],\\n  },\\n  quadro: {\\n    paddingVertical: primitives.space[24],\\n    borderRadius: primitives.radius.lg,\\n    alignItems: 'center',\\n  },\\n  rodape: {\\n    width: RODAPE,\\n  },\\n  // Toast e barra com space/16 entre eles, como no \\"Rodapé com Toast\\".\\n  pilhaRodape: {\\n    gap: primitives.space[16],\\n  },\\n  lugarDoToast: {\\n    height: LUGAR_DO_TOAST,\\n    marginBottom: primitives.space[16],\\n  },\\n  // Camada por cima do conteúdo, presa embaixo: o Toast fica space/16 acima da barra.\\n  camada: {\\n    position: 'absolute',\\n    left: 0,\\n    right: 0,\\n    bottom: 0,\\n  },\\n});\\n","exemploEm":"apps/validador/telas/Toast.tsx","fonte":"import React, { useEffect, useRef } from 'react';\\nimport { AccessibilityInfo, Platform, Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { Keyframe, ReduceMotion, useReducedMotion } from 'react-native-reanimated';\\nimport { CircleAlert, CircleCheck, Info } from 'lucide-react-native';\\nimport type { LucideIcon } from 'lucide-react-native';\\nimport { componentMetrics, primitives, shadows, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT } from './motion';\\n\\nexport type ToastType = 'success' | 'error' | 'info';\\n\\nexport type ToastProps = {\\n  /** success: deu certo. error: não deu certo. info: informação neutra. */\\n  type?: ToastType;\\n  /** Mensagem curta, em até 2 linhas (ex.: \\"Voz salva\\"). */\\n  message: string;\\n  /** Texto da ação (ex.: \\"Desfazer\\"). Sem ele, a ação não aparece. */\\n  actionLabel?: string;\\n  /** Toque na ação. Depois dele, o Toast chama \`onDismiss\`. */\\n  onAction?: () => void;\\n  /**\\n   * Chamado quando o tempo acaba (4 s, ou 6 s com ação): tire o Toast da árvore aqui\\n   * para ele sair. Sem \`onDismiss\`, o Toast fica na tela.\\n   */\\n  onDismiss?: () => void;\\n  /** Tempo na tela em ms. Padrão: 4000, ou 6000 com ação. */\\n  duration?: number;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n// Figma: Success → circle-check, Error → circle-alert, Info → info.\\nconst ICONS: Record<ToastType, LucideIcon> = {\\n  success: CircleCheck,\\n  error: CircleAlert,\\n  info: Info,\\n};\\n\\nconst ICON = primitives.iconSize.md;\\nconst STROKE = componentMetrics.toast.stroke.icon;\\nconst TEXT_SIZE = typography.bodyStrong.fontSize;\\n// Body Strong 14/18: a linha do Figma é menor que a natural da Puffin (18,1).\\nconst TEXT_BOX = lineBoxMargin(TEXT_SIZE, typography.bodyStrong.lineHeight);\\n// A ação tem 18 de linha; o hitSlop completa os 44 de toque.\\nconst ACTION_SLOP = (44 - typography.bodyStrong.lineHeight) / 2;\\nconst SHADOW = Platform.OS === 'android' ? shadows.lg.android : shadows.lg.ios;\\n// Tempo na tela (Documentação — Toast).\\nconst TIME = 4000;\\nconst TIME_WITH_ACTION = 6000;\\n\\n// Entra subindo 8 com opacidade em 180 ms ease-out.\\nconst ENTER = new Keyframe({\\n  0: { opacity: 0, transform: [{ translateY: primitives.space[8] }] },\\n  100: { opacity: 1, transform: [{ translateY: 0 }], easing: EASE_OUT },\\n})\\n  .duration(DURATION.move)\\n  .reduceMotion(ReduceMotion.System);\\n// Com movimento reduzido, só a opacidade: o fade continua rodando.\\nconst ENTER_REDUCED = new Keyframe({\\n  0: { opacity: 0 },\\n  100: { opacity: 1, easing: EASE_OUT },\\n})\\n  .duration(DURATION.move)\\n  .reduceMotion(ReduceMotion.Never);\\n// Sai só com opacidade em 100 ms, com ou sem movimento reduzido.\\nconst EXIT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.Never);\\n\\n/**\\n * Confirmação curta sobre a tela, que some sozinha (\\"Voz salva\\", \\"Link copiado\\").\\n * Não se posiciona: coloque-o numa camada por cima do conteúdo, space/16 acima da\\n * Bottom Navigation (343 de largura) ou do rodapé. Entra ao montar e sai ao\\n * desmontar; um \`key\` novo a cada disparo reinicia a entrada e o tempo.\\n */\\nexport function Toast({ type = 'success', message, actionLabel, onAction, onDismiss, duration, style }: ToastProps) {\\n  const c = useComponentTheme().toast;\\n  const reduced = useReducedMotion();\\n  const semibold = useFont('600');\\n  const time = duration ?? (actionLabel ? TIME_WITH_ACTION : TIME);\\n\\n  // O tempo recomeça só quando a mensagem ou o tempo mudam, não a cada render do pai.\\n  const dismiss = useRef(onDismiss);\\n  useEffect(() => {\\n    dismiss.current = onDismiss;\\n  });\\n  useEffect(() => {\\n    const timer = setTimeout(() => dismiss.current?.(), time);\\n    return () => clearTimeout(timer);\\n  }, [message, time]);\\n\\n  // Região viva educada. Com ação, o foco não pula para o Toast.\\n  useEffect(() => {\\n    AccessibilityInfo.announceForAccessibilityWithOptions(message, { queue: true });\\n  }, [message]);\\n\\n  const text = [semibold, styles.text, { fontSize: TEXT_SIZE, marginVertical: TEXT_BOX }];\\n\\n  return (\\n    <Animated.View\\n      entering={reduced ? ENTER_REDUCED : ENTER}\\n      exiting={EXIT}\\n      style={[styles.toast, SHADOW, { backgroundColor: c.surface }, style]}\\n    >\\n      <View style={styles.icon}>{renderIcon(ICONS[type], c.icon[type], ICON, STROKE)}</View>\\n      <Text numberOfLines={2} ellipsizeMode=\\"tail\\" style={[text, styles.message, { color: c.text }]}>\\n        {message}\\n      </Text>\\n      {actionLabel ? (\\n        <Pressable\\n          accessibilityRole=\\"button\\"\\n          accessibilityLabel={actionLabel}\\n          hitSlop={ACTION_SLOP}\\n          onPress={() => {\\n            onAction?.();\\n            dismiss.current?.();\\n          }}\\n          style={styles.action}\\n        >\\n          <Text numberOfLines={1} style={[text, { color: c.action }]}>\\n            {actionLabel}\\n          </Text>\\n        </Pressable>\\n      ) : null}\\n    </Animated.View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  toast: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[12],\\n    paddingVertical: primitives.space[16],\\n    paddingLeft: primitives.space[16],\\n    paddingRight: primitives.space[20],\\n    borderRadius: componentMetrics.toast.radius,\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  message: {\\n    flex: 1,\\n  },\\n  action: {\\n    flexShrink: 0,\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"f64439ca06e95fe3b7485bb8172e5a89435fdfca5509445d24b80673f1553252"}`),"radio-group":{propriedades:[{nome:`value`,tipo:`string`,opcional:!0,dono:`RadioGroupProps`,descricao:`Valor controlado da opção escolhida.`},{nome:`onValueChange`,tipo:`(value: string) => void`,opcional:!1,dono:`RadioGroupProps`,descricao:``},{nome:`accessibilityLabel`,tipo:`string`,opcional:!1,dono:`RadioGroupProps`,descricao:``},{nome:`options`,tipo:`readonly RadioOption[]`,opcional:!0,dono:`RadioGroupProps`,descricao:``},{nome:`children`,tipo:`React.ReactNode`,opcional:!0,dono:`RadioGroupProps`,descricao:`Slot Opções do Figma; aceita RadioItem e conteúdo complementar.`},{nome:`disabled`,tipo:`boolean`,opcional:!0,dono:`RadioGroupProps`,descricao:``},{nome:`inset`,tipo:`boolean`,opcional:!0,dono:`RadioGroupProps`,descricao:`Remove o recuo lateral quando o grupo fica dentro de um sheet.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`RadioGroupProps`,descricao:``},{nome:`selected`,tipo:`boolean`,opcional:!0,dono:`RadioItemProps`,descricao:`Fora do grupo, seleção e callback são controlados diretamente.`},{nome:`onSelect`,tipo:`(value: string) => void`,opcional:!0,dono:`RadioItemProps`,descricao:``},{nome:`inset`,tipo:`boolean`,opcional:!0,dono:`RadioItemProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`RadioItemProps`,descricao:``}],tipos:`export type RadioOption = { value: string; label: string; description?: string; disabled?: boolean };

export type RadioGroupProps = {
  /** Valor controlado da opção escolhida. */
  value?: string;
  onValueChange: (value: string) => void;
  accessibilityLabel: string;
  options?: readonly RadioOption[];
  /** Slot Opções do Figma; aceita RadioItem e conteúdo complementar. */
  children?: React.ReactNode;
  disabled?: boolean;
  /** Remove o recuo lateral quando o grupo fica dentro de um sheet. */
  inset?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type RadioItemProps = RadioOption & Omit<PressableProps, 'style' | 'children' | 'onPress' | 'disabled'> & {
  /** Fora do grupo, seleção e callback são controlados diretamente. */
  selected?: boolean;
  onSelect?: (value: string) => void;
  inset?: boolean;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { primitives } from '@tessela/tokens';
import { RadioGroup, RadioItem } from '@tessela/ui';
import { SectionCard } from '@tessela/ui';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

function Velocidade() {
  const [value, setValue] = useState('normal');
  return <SectionCard title="Velocidade da leitura">
    <RadioGroup accessibilityLabel="Velocidade da leitura" value={value} onValueChange={setValue}
      options={[{ value: 'lenta', label: 'Lenta' }, { value: 'normal', label: 'Normal' }, { value: 'rapida', label: 'Rápida' }]} />
  </SectionCard>;
}
function Escuro() {
  const theme = useTheme();
  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><Velocidade /></View>;
}

export default function TelaRadioGroup() {
  const [length, setLength] = useState('curta');
  return <>
    <Secao>Estados</Secao>
    <Legenda>Off · On · Disabled. Segure a linha para ver Pressed.</Legenda>
    <View style={comum.coluna}>
      <RadioItem value="off" label="Opção" />
      <RadioItem value="on" label="Opção" selected />
      <RadioItem value="off-disabled" label="Opção" disabled />
      <RadioItem value="on-disabled" label="Opção" selected disabled />
    </View>
    <Secao>Em uso</Secao>
    <Legenda>Velocidade da leitura</Legenda>
    <Velocidade />
    <Legenda>Com descrição</Legenda>
    <SectionCard title="Tamanho da história">
      <RadioGroup accessibilityLabel="Tamanho da história" value={length} onValueChange={setLength}>
        <RadioItem value="curta" label="Curta" description="Cerca de 5 minutos. Boa para dias corridos." />
        <RadioItem value="media" label="Média" description="Cerca de 10 minutos." />
        <RadioItem value="longa" label="Longa" description="Disponível no plano Família." disabled />
      </RadioGroup>
    </SectionCard>
    <Legenda>Tema escuro</Legenda>
    <TesselaProvider theme="dark" fonts={FONTS}><Escuro /></TesselaProvider>
  </>;
}

const styles = StyleSheet.create({ dark: { paddingVertical: primitives.space[24], borderRadius: primitives.radius.lg } });
`,exemploEm:`apps/validador/telas/RadioGroup.tsx`,fonte:`import React, { createContext, useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { SelectionMarker } from './OptionItem';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT_CSS } from './motion';
import { useComponentTheme, useFont } from './theme';

export type RadioOption = { value: string; label: string; description?: string; disabled?: boolean };
export type RadioGroupProps = {
  /** Valor controlado da opção escolhida. */
  value?: string;
  onValueChange: (value: string) => void;
  accessibilityLabel: string;
  options?: readonly RadioOption[];
  /** Slot Opções do Figma; aceita RadioItem e conteúdo complementar. */
  children?: React.ReactNode;
  disabled?: boolean;
  /** Remove o recuo lateral quando o grupo fica dentro de um sheet. */
  inset?: boolean;
  style?: StyleProp<ViewStyle>;
};
type GroupContext = Pick<RadioGroupProps, 'value' | 'onValueChange' | 'disabled' | 'inset'>;
const RadioContext = createContext<GroupContext | null>(null);

export type RadioItemProps = RadioOption & Omit<PressableProps, 'style' | 'children' | 'onPress' | 'disabled'> & {
  /** Fora do grupo, seleção e callback são controlados diretamente. */
  selected?: boolean;
  onSelect?: (value: string) => void;
  inset?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function RadioItem({ value, label, description, disabled = false, selected = false, onSelect,
  inset, style, ...rest }: RadioItemProps) {
  const group = useContext(RadioContext);
  const c = useComponentTheme().radio;
  const semibold = useFont('600');
  const medium = useFont('500');
  const checked = group ? group.value === value : selected;
  const inactive = disabled || Boolean(group?.disabled);
  const padded = inset ?? group?.inset ?? true;
  return (
    <Pressable {...rest} accessibilityRole="radio" accessibilityLabel={label} accessibilityHint={description}
      accessibilityState={{ checked, selected: checked, disabled: inactive }} disabled={inactive}
      onPress={() => { if (!inactive && !checked) (group?.onValueChange ?? onSelect)?.(value); }} style={style}>
      {({ pressed }) => (
        <Animated.View style={[styles.item, { paddingHorizontal: padded ? primitives.space[12] : 0,
          backgroundColor: pressed && !inactive ? c.surface.pressed : undefined,
          transitionProperty: 'backgroundColor', transitionDuration: DURATION.press, transitionTimingFunction: EASE_OUT_CSS }]}>
          <SelectionMarker selected={checked} disabled={inactive} />
          <View style={styles.texts}>
            <Text style={[semibold, styles.label, { color: inactive ? c.text.disabled : c.text.label }]}>{label}</Text>
            {description ? <Text style={[medium, styles.description, { color: inactive ? c.text.disabled : c.text.description }]}>{description}</Text> : null}
          </View>
        </Animated.View>
      )}
    </Pressable>
  );
}

export function RadioGroup({ value, onValueChange, accessibilityLabel, options, children, disabled = false,
  inset = true, style }: RadioGroupProps) {
  return (
    <RadioContext.Provider value={{ value, onValueChange, disabled, inset }}>
      <View accessibilityRole="radiogroup" accessibilityLabel={accessibilityLabel} accessible={false} style={style}>
        {options?.map(option => <RadioItem key={option.value} {...option} />)}
        {children}
      </View>
    </RadioContext.Provider>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'flex-start', gap: primitives.space[12], paddingVertical: primitives.space[12],
    borderRadius: componentMetrics.radio.radius },
  texts: { flex: 1, minWidth: 0, gap: primitives.space[2] },
  label: { includeFontPadding: false, fontSize: typography.label.fontSize,
    marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight) },
  description: { includeFontPadding: false, fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight },
});
`,hash:`a35e766d4087a8c55750396b3e1129bea83e2ce84a6adf74dc542a2af305045f`},select:JSON.parse(`{"propriedades":[{"nome":"label","tipo":"string","opcional":false,"dono":"SelectProps","descricao":"Nome do campo. Sem valor, aparece grande no lugar dele; com valor, fica pequeno em cima."},{"nome":"value","tipo":"string","opcional":true,"dono":"SelectProps","descricao":"Valor escolhido. Vazio ou ausente: estado Default."},{"nome":"onPress","tipo":"() => void","opcional":true,"dono":"SelectProps","descricao":"Toque no campo. O Select não abre a lista sozinho: o app abre as opções (Bottom\\nSheet com Radio Group ou Option Item, com o rótulo como título) e liga \`open\`."},{"nome":"open","tipo":"boolean","opcional":true,"dono":"SelectProps","descricao":"Lista de opções aberta: borda input/border/subtle e seta para cima."},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"SelectProps","descricao":""},{"nome":"error","tipo":"string","opcional":true,"dono":"SelectProps","descricao":"Mensagem de erro. Presente, muda o campo para o estado de erro."},{"nome":"helper","tipo":"string","opcional":true,"dono":"SelectProps","descricao":"Texto de ajuda abaixo do campo. Some enquanto há erro: a mensagem ocupa o lugar."},{"nome":"icon","tipo":"IconSource","opcional":true,"dono":"SelectProps","descricao":"Ícone opcional à esquerda (ex.: calendário numa data)."},{"nome":"accessibilityHint","tipo":"string","opcional":true,"dono":"SelectProps","descricao":"Dica do leitor de tela depois do rótulo e do valor."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"SelectProps","descricao":""}],"tipos":"export type SelectProps = {\\n  /** Nome do campo. Sem valor, aparece grande no lugar dele; com valor, fica pequeno em cima. */\\n  label: string;\\n  /** Valor escolhido. Vazio ou ausente: estado Default. */\\n  value?: string;\\n  /**\\n   * Toque no campo. O Select não abre a lista sozinho: o app abre as opções (Bottom\\n   * Sheet com Radio Group ou Option Item, com o rótulo como título) e liga \`open\`.\\n   */\\n  onPress?: () => void;\\n  /** Lista de opções aberta: borda input/border/subtle e seta para cima. */\\n  open?: boolean;\\n  disabled?: boolean;\\n  /** Mensagem de erro. Presente, muda o campo para o estado de erro. */\\n  error?: string;\\n  /** Texto de ajuda abaixo do campo. Some enquanto há erro: a mensagem ocupa o lugar. */\\n  helper?: string;\\n  /** Ícone opcional à esquerda (ex.: calendário numa data). */\\n  icon?: IconSource;\\n  /** Dica do leitor de tela depois do rótulo e do valor. */\\n  accessibilityHint?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { Select, BottomSheet, RadioGroup } from '@tessela/ui';\\nimport { Legenda, Secao } from '../../validador/telas/_comum';\\n\\nexport default function Example() {\\n  const [value, setValue] = useState('Português');\\n  const [open, setOpen] = useState(false);\\n  return <><Secao>Estados</Secao><Legenda>Vazio</Legenda><Select label=\\"Idioma\\" /><Legenda>Preenchido</Legenda><Select label=\\"Idioma\\" value={value} /><Legenda>Erro</Legenda><Select label=\\"Idioma\\" error=\\"Escolha um idioma para continuar.\\" /><Legenda>Desabilitado</Legenda><Select label=\\"Idioma\\" value=\\"Português\\" disabled /><Secao>Composição com BottomSheet e RadioGroup</Secao><Select label=\\"Escolher idioma\\" value={value} open={open} onPress={() => setOpen(true)} /><BottomSheet visible={open} onClose={() => setOpen(false)} title=\\"Escolher idioma\\" actionLabel=\\"Concluir\\" onAction={() => setOpen(false)}><RadioGroup accessibilityLabel=\\"Idiomas\\" value={value} onValueChange={setValue} inset={false} options={['Português', 'Inglês', 'Espanhol'].map(label => ({ label, value: label }))} /></BottomSheet></>;\\n}\\n","exemploEm":"apps/catalogo/examples/Select.tsx","fonte":"import React, { useEffect, useRef } from 'react';\\nimport { AccessibilityInfo, Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { Keyframe, LayoutAnimationConfig, ReduceMotion, useReducedMotion } from 'react-native-reanimated';\\nimport { Ban, ChevronDown } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon, type IconSource } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT, EASE_OUT_CSS } from './motion';\\n\\nexport type SelectProps = {\\n  /** Nome do campo. Sem valor, aparece grande no lugar dele; com valor, fica pequeno em cima. */\\n  label: string;\\n  /** Valor escolhido. Vazio ou ausente: estado Default. */\\n  value?: string;\\n  /**\\n   * Toque no campo. O Select não abre a lista sozinho: o app abre as opções (Bottom\\n   * Sheet com Radio Group ou Option Item, com o rótulo como título) e liga \`open\`.\\n   */\\n  onPress?: () => void;\\n  /** Lista de opções aberta: borda input/border/subtle e seta para cima. */\\n  open?: boolean;\\n  disabled?: boolean;\\n  /** Mensagem de erro. Presente, muda o campo para o estado de erro. */\\n  error?: string;\\n  /** Texto de ajuda abaixo do campo. Some enquanto há erro: a mensagem ocupa o lugar. */\\n  helper?: string;\\n  /** Ícone opcional à esquerda (ex.: calendário numa data). */\\n  icon?: IconSource;\\n  /** Dica do leitor de tela depois do rótulo e do valor. */\\n  accessibilityHint?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst HEIGHT = 60;\\nconst ICON = primitives.iconSize.md;\\nconst ERROR_ICON = primitives.iconSize.sm;\\nconst STROKE = componentMetrics.input.stroke.icon;\\nconst LABEL_SMALL = typography.body.fontSize;\\nconst VALUE_SIZE = typography.label.fontSize;\\nconst MESSAGE_SIZE = typography.body.fontSize;\\n// A mensagem de erro tem linha de 110% no Figma (15 em 14), menor que a natural.\\nconst MESSAGE_LINE = 15; // vem do Figma\\n\\n// Mesmas entradas e saídas das mensagens do Input.\\nconst ERROR_IN = new Keyframe({\\n  0: { opacity: 0, transform: [{ translateY: -4 }] },\\n  100: { opacity: 1, transform: [{ translateY: 0 }], easing: EASE_OUT },\\n})\\n  .duration(DURATION.move)\\n  .reduceMotion(ReduceMotion.System);\\nconst FADE_OUT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.System);\\nconst HELPER_IN = new Keyframe({\\n  0: { opacity: 0 },\\n  100: { opacity: 1, easing: EASE_OUT },\\n})\\n  .duration(DURATION.state)\\n  .reduceMotion(ReduceMotion.System);\\n\\n/**\\n * Campo para escolher um valor de uma lista (idade, idioma, voz). Tem o desenho\\n * do Input; o toque abre as opções, que ficam com o app (Bottom Sheet).\\n */\\nexport function Select({\\n  label,\\n  value,\\n  onPress,\\n  open = false,\\n  disabled = false,\\n  error,\\n  helper,\\n  icon,\\n  accessibilityHint = 'Escolher',\\n  style,\\n}: SelectProps) {\\n  const c = useComponentTheme().input;\\n  const reduced = useReducedMotion();\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n\\n  const hasValue = Boolean(value);\\n  const visibleError = disabled ? undefined : error;\\n  const hasError = Boolean(visibleError);\\n  const announcedError = useRef<string | undefined>(undefined);\\n  useEffect(() => {\\n    if (visibleError && visibleError !== announcedError.current) {\\n      AccessibilityInfo.announceForAccessibility(\`\${label}. \${visibleError}\`);\\n    }\\n    announcedError.current = visibleError;\\n  }, [visibleError, label]);\\n  const background = disabled ? c.surface.disabled : hasError ? c.surface.error : c.surface.default;\\n  const iconColor = disabled ? c.icon.disabled : c.icon.default;\\n  const mainColor = disabled ? c.text.disabled : c.text.primary;\\n  const bordered = !disabled && (hasError || open);\\n  const borderColor = hasError ? c.feedback.error : c.border.subtle;\\n\\n  return (\\n    // skipEntering: o campo que já nasce com erro não anima a mensagem.\\n    <LayoutAnimationConfig skipEntering>\\n      <View style={style}>\\n        <Pressable\\n          accessibilityRole=\\"button\\"\\n          accessibilityLabel={hasValue ? \`\${label}, \${value}\` : label}\\n          accessibilityHint={hasError ? [visibleError, accessibilityHint].filter(Boolean).join('. ') : accessibilityHint}\\n          accessibilityState={{ expanded: open, disabled }}\\n          disabled={disabled}\\n          onPress={onPress}\\n        >\\n          <Animated.View\\n            style={[\\n              styles.field,\\n              {\\n                backgroundColor: background,\\n                transitionProperty: 'backgroundColor',\\n                transitionDuration: DURATION.state,\\n                transitionTimingFunction: EASE_OUT_CSS,\\n              },\\n            ]}\\n          >\\n            {icon ? <View style={styles.icon}>{renderIcon(icon, iconColor, ICON, STROKE)}</View> : null}\\n\\n            <View style={styles.texts}>\\n              {hasValue ? (\\n                <>\\n                  {/* No Figma, o rótulo pequeno fica em input/text/secondary também no disabled. */}\\n                  <Text numberOfLines={1} style={[medium, styles.text, { fontSize: LABEL_SMALL, color: c.text.secondary }]}>\\n                    {label}\\n                  </Text>\\n                  <Text numberOfLines={1} style={[semibold, styles.text, { fontSize: VALUE_SIZE, color: mainColor }]}>\\n                    {value}\\n                  </Text>\\n                </>\\n              ) : (\\n                // Vazio é Medium, como o Input vazio (o Figma desenha SemiBold; regra do Input).\\n                <Text numberOfLines={1} style={[medium, styles.text, { fontSize: VALUE_SIZE, color: mainColor }]}>\\n                  {label}\\n                </Text>\\n              )}\\n            </View>\\n\\n            {/* Aberto, a seta gira para cima: o chevron-up do Figma é o chevron-down virado. */}\\n            <Animated.View\\n              style={[\\n                styles.icon,\\n                {\\n                  transform: [{ rotate: open ? '180deg' : '0deg' }],\\n                  transitionProperty: 'transform',\\n                  transitionDuration: reduced ? 0 : DURATION.state,\\n                  transitionTimingFunction: EASE_OUT_CSS,\\n                },\\n              ]}\\n            >\\n              {renderIcon(ChevronDown, iconColor, ICON, STROKE)}\\n            </Animated.View>\\n\\n            {/* Borda INSIDE do Figma: camada por cima, aparece por opacidade sem mexer no conteúdo. */}\\n            <Animated.View\\n              pointerEvents=\\"none\\"\\n              style={[\\n                styles.border,\\n                {\\n                  borderColor,\\n                  opacity: bordered ? 1 : 0,\\n                  transitionProperty: ['opacity', 'borderColor'],\\n                  transitionDuration: DURATION.state,\\n                  transitionTimingFunction: EASE_OUT_CSS,\\n                },\\n              ]}\\n            />\\n          </Animated.View>\\n        </Pressable>\\n\\n        {hasError ? (\\n          <Animated.View entering={ERROR_IN} exiting={FADE_OUT} style={styles.errorRow}>\\n            <View style={styles.errorIcon}>{renderIcon(Ban, c.feedback.error, ERROR_ICON, STROKE)}</View>\\n            <Text\\n              style={[\\n                medium,\\n                styles.text,\\n                {\\n                  fontSize: MESSAGE_SIZE,\\n                  color: c.feedback.error,\\n                  marginVertical: lineBoxMargin(MESSAGE_SIZE, MESSAGE_LINE),\\n                },\\n              ]}\\n            >\\n              {error}\\n            </Text>\\n          </Animated.View>\\n        ) : helper ? (\\n          <Animated.View entering={HELPER_IN} exiting={FADE_OUT} style={styles.helper}>\\n            <Text style={[medium, styles.text, { fontSize: MESSAGE_SIZE, color: c.text.helper }]}>{helper}</Text>\\n          </Animated.View>\\n        ) : null}\\n      </View>\\n    </LayoutAnimationConfig>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  field: {\\n    height: HEIGHT,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    paddingHorizontal: primitives.space[24],\\n    gap: primitives.space[12],\\n    borderRadius: componentMetrics.input.radius.container,\\n  },\\n  texts: {\\n    flex: 1,\\n    justifyContent: 'center',\\n    // Linhas naturais (altura \\"auto\\" no Figma) com space/8 entre rótulo e valor.\\n    gap: primitives.space[8],\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  // Coordenadas explícitas: o React Native 0.86 removeu StyleSheet.absoluteFillObject.\\n  border: {\\n    position: 'absolute',\\n    top: 0,\\n    right: 0,\\n    bottom: 0,\\n    left: 0,\\n    borderRadius: componentMetrics.input.radius.container,\\n    borderWidth: componentMetrics.input.stroke.container,\\n  },\\n  errorRow: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[8],\\n    marginTop: primitives.space[12],\\n  },\\n  errorIcon: {\\n    width: ERROR_ICON,\\n    height: ERROR_ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  helper: {\\n    marginTop: primitives.space[12],\\n  },\\n});\\n","hash":"6f2ca804e2ca2e35bd57b436b2a73f57f3312987cb18368a2d4cb3cb625a12dd"}`),"date-picker":JSON.parse(`{"propriedades":[{"nome":"value","tipo":"Date","opcional":false,"dono":"DatePickerProps","descricao":"Data escolhida (controlado). Só dia, mês e ano mudam; a hora do valor é mantida."},{"nome":"onChange","tipo":"(date: Date) => void","opcional":false,"dono":"DatePickerProps","descricao":"Recebe a nova data quando uma coluna para numa linha, num toque ou pelo leitor de tela."},{"nome":"minDate","tipo":"Date","opcional":true,"dono":"DatePickerProps","descricao":"Primeira data permitida. As anteriores não aparecem na roda. Padrão: 1º de janeiro de 1900."},{"nome":"maxDate","tipo":"Date","opcional":true,"dono":"DatePickerProps","descricao":"Última data permitida (ex.: hoje, para nascimento). As posteriores não aparecem. Padrão: 31 de dezembro de 2100."},{"nome":"onTick","tipo":"() => void","opcional":true,"dono":"DatePickerProps","descricao":"Chamado a cada linha que passa pelo centro enquanto a pessoa rola. Ligue aqui o\\nháptico leve de seleção do app (ex.: \`Haptics.selectionAsync\`)."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"DatePickerProps","descricao":""}],"tipos":"export type DatePickerProps = {\\n  /** Data escolhida (controlado). Só dia, mês e ano mudam; a hora do valor é mantida. */\\n  value: Date;\\n  /** Recebe a nova data quando uma coluna para numa linha, num toque ou pelo leitor de tela. */\\n  onChange: (date: Date) => void;\\n  /** Primeira data permitida. As anteriores não aparecem na roda. Padrão: 1º de janeiro de 1900. */\\n  minDate?: Date;\\n  /** Última data permitida (ex.: hoje, para nascimento). As posteriores não aparecem. Padrão: 31 de dezembro de 2100. */\\n  maxDate?: Date;\\n  /**\\n   * Chamado a cada linha que passa pelo centro enquanto a pessoa rola. Ligue aqui o\\n   * háptico leve de seleção do app (ex.: \`Haptics.selectionAsync\`).\\n   */\\n  onTick?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { Calendar } from 'lucide-react-native';\\nimport { DatePicker, Select, BottomSheet } from '@tessela/ui';\\nimport { Legenda, Secao } from '../../validador/telas/_comum';\\n\\nexport default function Example() {\\n  const [date, setDate] = useState(new Date(2020, 2, 12));\\n  const [draft, setDraft] = useState(date);\\n  const [open, setOpen] = useState(false);\\n  const format = (value: Date) => value.toLocaleDateString('pt-BR');\\n  return <><Secao>Seleção de data</Secao><Legenda>Role as colunas ou toque nas opções.</Legenda><DatePicker value={date} onChange={setDate} /><Legenda>{\`Selecionado: \${format(date)}\`}</Legenda><Secao>Limites</Secao><DatePicker value={date} onChange={setDate} minDate={new Date(2018, 0, 1)} maxDate={new Date(2025, 11, 31)} /><Secao>Composição com Select e BottomSheet</Secao><Select label=\\"Data de nascimento\\" value={format(date)} icon={Calendar} open={open} onPress={() => { setDraft(date); setOpen(true); }} /><BottomSheet visible={open} onClose={() => setOpen(false)} title=\\"Data de nascimento\\" actionLabel=\\"Confirmar data\\" onAction={() => { setDate(draft); setOpen(false); }}><DatePicker value={draft} onChange={setDraft} /></BottomSheet></>;\\n}\\n","exemploEm":"apps/catalogo/examples/DatePicker.tsx","fonte":"import React, { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';\\nimport { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';\\nimport type {\\n  AccessibilityActionEvent,\\n  NativeScrollEvent,\\n  NativeSyntheticEvent,\\n  StyleProp,\\n  ViewStyle,\\n} from 'react-native';\\nimport { useReducedMotion } from 'react-native-reanimated';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { lineBoxMargin } from './metrics';\\n\\nexport type DatePickerProps = {\\n  /** Data escolhida (controlado). Só dia, mês e ano mudam; a hora do valor é mantida. */\\n  value: Date;\\n  /** Recebe a nova data quando uma coluna para numa linha, num toque ou pelo leitor de tela. */\\n  onChange: (date: Date) => void;\\n  /** Primeira data permitida. As anteriores não aparecem na roda. Padrão: 1º de janeiro de 1900. */\\n  minDate?: Date;\\n  /** Última data permitida (ex.: hoje, para nascimento). As posteriores não aparecem. Padrão: 31 de dezembro de 2100. */\\n  maxDate?: Date;\\n  /**\\n   * Chamado a cada linha que passa pelo centro enquanto a pessoa rola. Ligue aqui o\\n   * háptico leve de seleção do app (ex.: \`Haptics.selectionAsync\`).\\n   */\\n  onTick?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n// Cinco linhas de 44 (o alvo mínimo de toque): o valor no centro e dois vizinhos de cada lado.\\nconst ROW = 44;\\nconst HEIGHT = ROW * 5;\\n// Linhas acima e abaixo do centro: o respiro que deixa a primeira e a última no meio.\\nconst EDGE = ROW * 2;\\n// Larguras das colunas Dia e Ano; Mês preenche o resto. Vêm do Figma.\\nconst DAY_WIDTH = 72;\\nconst YEAR_WIDTH = 96;\\nconst FONT_SIZE = typography.label.fontSize;\\n// Sem leading trim no Figma: a caixa de linha fica no centro da linha de 44. Valor em\\n// Label (16/19) e vizinhos em Body Large (16/23), sem lineHeight abaixo da linha natural.\\nconst SELECTED_BOX = lineBoxMargin(typography.label.fontSize, typography.label.lineHeight);\\nconst NEIGHBOR_BOX = lineBoxMargin(typography.bodyLarge.fontSize, typography.bodyLarge.lineHeight);\\n\\n// Nomes fixos em pt-BR, com a maiúscula do Figma. Não dependem do Intl do Hermes.\\nconst MONTHS = [\\n  'Janeiro',\\n  'Fevereiro',\\n  'Março',\\n  'Abril',\\n  'Maio',\\n  'Junho',\\n  'Julho',\\n  'Agosto',\\n  'Setembro',\\n  'Outubro',\\n  'Novembro',\\n  'Dezembro',\\n];\\n\\nconst DEFAULT_MIN = { y: 1900, m: 0, d: 1 };\\nconst DEFAULT_MAX = { y: 2100, m: 11, d: 31 };\\n\\ntype Ymd = { y: number; m: number; d: number };\\ntype Tone = 'selected' | 'near' | 'far';\\n\\nconst clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));\\nconst toYmd = (date: Date): Ymd => ({ y: date.getFullYear(), m: date.getMonth(), d: date.getDate() });\\nconst sameDay = (a: Ymd, b: Ymd) => a.y === b.y && a.m === b.m && a.d === b.d;\\n\\nfunction daysInMonth(y: number, m: number): number {\\n  // setFullYear, não o construtor: new Date(y, ...) leva os anos 0 a 99 para 1900.\\n  const date = new Date(2000, 0, 1);\\n  date.setFullYear(y, m + 1, 0);\\n  return date.getDate();\\n}\\n\\nfunction monthRange(y: number, min: Ymd, max: Ymd): [number, number] {\\n  return [y === min.y ? min.m : 0, y === max.y ? max.m : 11];\\n}\\n\\nfunction dayRange(y: number, m: number, min: Ymd, max: Ymd): [number, number] {\\n  const first = y === min.y && m === min.m ? min.d : 1;\\n  const last = daysInMonth(y, m);\\n  return [first, y === max.y && m === max.m ? Math.min(max.d, last) : last];\\n}\\n\\n/** Leva a data para dentro dos limites, coluna por coluna: ano, depois mês, depois dia. */\\nfunction fit(p: Ymd, min: Ymd, max: Ymd): Ymd {\\n  const y = clamp(p.y, min.y, max.y);\\n  const [m0, m1] = monthRange(y, min, max);\\n  const m = clamp(p.m, m0, m1);\\n  const [d0, d1] = dayRange(y, m, min, max);\\n  return { y, m, d: clamp(p.d, d0, d1) };\\n}\\n\\nfunction numbers(from: number, to: number): string[] {\\n  return Array.from({ length: to - from + 1 }, (_, i) => String(from + i));\\n}\\n\\n/**\\n * Roda de dia, mês e ano para escolher uma data (ex.: nascimento de uma criança).\\n * Vai no slot Conteúdo do Bottom Sheet, aberto por um Select com o ícone calendar.\\n * Datas fora de \`minDate\` e \`maxDate\` não aparecem.\\n */\\nexport function DatePicker({ value, onChange, minDate, maxDate, onTick, style }: DatePickerProps) {\\n  const c = useComponentTheme().datepicker;\\n  const min = minDate ? toYmd(minDate) : DEFAULT_MIN;\\n  const max = maxDate ? toYmd(maxDate) : DEFAULT_MAX;\\n  const current = fit(toYmd(value), min, max);\\n  const [m0, m1] = monthRange(current.y, min, max);\\n  const [d0, d1] = dayRange(current.y, current.m, min, max);\\n\\n  const years = useMemo(() => numbers(min.y, max.y), [min.y, max.y]);\\n  const months = useMemo(() => MONTHS.slice(m0, m1 + 1), [m0, m1]);\\n  const days = useMemo(() => numbers(d0, d1), [d0, d1]);\\n\\n  const commit = (next: Ymd) => {\\n    const fitted = fit(next, min, max);\\n    if (sameDay(fitted, toYmd(value))) return;\\n    const date = new Date(value.getTime());\\n    date.setFullYear(fitted.y, fitted.m, fitted.d);\\n    onChange(date);\\n  };\\n\\n  return (\\n    <View style={[styles.picker, style]}>\\n      <View pointerEvents=\\"none\\" style={[styles.band, { backgroundColor: c.selection }]} />\\n      <View style={styles.columns}>\\n        <WheelColumn\\n          name=\\"Dia\\"\\n          labels={days}\\n          selected={current.d - d0}\\n          onSelect={(i) => commit({ ...current, d: d0 + i })}\\n          onTick={onTick}\\n          style={styles.day}\\n        />\\n        <WheelColumn\\n          name=\\"Mês\\"\\n          labels={months}\\n          selected={current.m - m0}\\n          onSelect={(i) => commit({ ...current, m: m0 + i })}\\n          onTick={onTick}\\n          style={styles.month}\\n        />\\n        <WheelColumn\\n          name=\\"Ano\\"\\n          labels={years}\\n          selected={current.y - min.y}\\n          onSelect={(i) => commit({ ...current, y: min.y + i })}\\n          onTick={onTick}\\n          style={styles.year}\\n        />\\n      </View>\\n    </View>\\n  );\\n}\\n\\ntype WheelColumnProps = {\\n  /** Nome da coluna para o leitor de tela (\\"Mês\\"): ele anuncia o valor e o nome. */\\n  name: string;\\n  labels: string[];\\n  selected: number;\\n  onSelect: (index: number) => void;\\n  onTick?: () => void;\\n  style: StyleProp<ViewStyle>;\\n};\\n\\nfunction WheelColumn({ name, labels, selected, onSelect, onTick, style }: WheelColumnProps) {\\n  const ref = useRef<ScrollView>(null);\\n  const reduced = useReducedMotion();\\n  // Linha no centro agora, durante a rolagem: pinta o valor e os vizinhos.\\n  const [center, setCenter] = useState(selected);\\n  const centerRef = useRef(selected);\\n  // Linha onde a roda parou ou para onde foi mandada. Quando \`selected\` muda por fora\\n  // (o dia 31 que vira 29 em fevereiro), a roda anda até ele.\\n  const target = useRef(selected);\\n  const firstLabel = useRef(labels[0]);\\n  const dragging = useRef(false);\\n  const coasting = useRef(false);\\n  // Só a posição inicial: o contentOffset do Fabric reposiciona a roda a cada mudança da prop.\\n  const initialOffset = useRef({ x: 0, y: selected * ROW }).current;\\n  const last = labels.length - 1;\\n  const indexAt = (y: number) => clamp(Math.round(y / ROW), 0, last);\\n\\n  const moveCenter = (i: number) => {\\n    centerRef.current = i;\\n    setCenter(i);\\n  };\\n\\n  useLayoutEffect(() => {\\n    // A lista começou em outro item (limite mínimo entrou ou saiu): o conteúdo mudou\\n    // debaixo da roda, então ela salta para o valor sem animar.\\n    const shifted = firstLabel.current !== labels[0];\\n    firstLabel.current = labels[0];\\n    if (dragging.current || coasting.current || target.current === selected) return;\\n    target.current = selected;\\n    moveCenter(selected);\\n    ref.current?.scrollTo({ y: selected * ROW, animated: !shifted && !reduced });\\n  });\\n\\n  const settle = (y: number) => {\\n    const i = indexAt(y);\\n    target.current = i;\\n    moveCenter(i);\\n    if (i !== selected) onSelect(i);\\n  };\\n\\n  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {\\n    const i = indexAt(e.nativeEvent.contentOffset.y);\\n    if (i === centerRef.current) return;\\n    moveCenter(i);\\n    if (dragging.current || coasting.current) onTick?.();\\n  };\\n\\n  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {\\n    dragging.current = false;\\n    const { contentOffset, velocity } = e.nativeEvent;\\n    // Soltou parada exatamente numa linha: não haverá inércia para avisar o fim.\\n    const still = Math.abs(velocity?.y ?? 0) < 0.01;\\n    const aligned = Math.abs(contentOffset.y - Math.round(contentOffset.y / ROW) * ROW) < 0.5;\\n    if (still && aligned) settle(contentOffset.y);\\n  };\\n\\n  const press = (i: number) => {\\n    if (i === target.current && i === centerRef.current) return;\\n    target.current = i;\\n    moveCenter(i);\\n    ref.current?.scrollTo({ y: i * ROW, animated: !reduced });\\n    onTick?.();\\n    if (i !== selected) onSelect(i);\\n  };\\n  // As linhas são memorizadas: o toque passa por uma ref para não mudar a cada render.\\n  const pressRef = useRef(press);\\n  pressRef.current = press;\\n  const onRowPress = useCallback((i: number) => pressRef.current(i), []);\\n\\n  const onAccessibilityAction = (e: AccessibilityActionEvent) => {\\n    const step = e.nativeEvent.actionName === 'increment' ? 1 : -1;\\n    const i = clamp(selected + step, 0, last);\\n    if (i !== selected) onSelect(i);\\n  };\\n\\n  return (\\n    <View\\n      accessible\\n      accessibilityRole=\\"adjustable\\"\\n      accessibilityLabel={name}\\n      accessibilityValue={{ text: labels[selected] }}\\n      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}\\n      onAccessibilityAction={onAccessibilityAction}\\n      style={style}\\n    >\\n      <ScrollView\\n        ref={ref}\\n        // A coluna inteira é um controle ajustável; as linhas não entram no leitor de tela.\\n        accessibilityElementsHidden\\n        importantForAccessibility=\\"no-hide-descendants\\"\\n        showsVerticalScrollIndicator={false}\\n        // Para sempre numa linha, com a desaceleração natural do sistema.\\n        snapToInterval={ROW}\\n        decelerationRate=\\"normal\\"\\n        nestedScrollEnabled\\n        contentOffset={initialOffset}\\n        contentContainerStyle={styles.content}\\n        scrollEventThrottle={16}\\n        onScroll={onScroll}\\n        onScrollBeginDrag={() => {\\n          dragging.current = true;\\n        }}\\n        onScrollEndDrag={onScrollEndDrag}\\n        onMomentumScrollBegin={() => {\\n          coasting.current = true;\\n        }}\\n        onMomentumScrollEnd={(e) => {\\n          coasting.current = false;\\n          settle(e.nativeEvent.contentOffset.y);\\n        }}\\n      >\\n        {labels.map((label, i) => {\\n          const distance = Math.abs(i - center);\\n          const tone: Tone = distance === 0 ? 'selected' : distance === 1 ? 'near' : 'far';\\n          return <WheelRow key={label} label={label} index={i} tone={tone} onPress={onRowPress} />;\\n        })}\\n      </ScrollView>\\n    </View>\\n  );\\n}\\n\\ntype WheelRowProps = {\\n  label: string;\\n  index: number;\\n  tone: Tone;\\n  onPress: (index: number) => void;\\n};\\n\\n// Memorizada: numa rolagem, só as linhas que mudam de tom renderizam de novo.\\nconst WheelRow = memo(function WheelRow({ label, index, tone, onPress }: WheelRowProps) {\\n  const c = useComponentTheme().datepicker;\\n  const font = useFont(tone === 'selected' ? '600' : '500');\\n  return (\\n    <Pressable onPress={() => onPress(index)} style={styles.row}>\\n      <Text\\n        numberOfLines={1}\\n        style={[\\n          font,\\n          styles.text,\\n          {\\n            fontSize: FONT_SIZE,\\n            color: c.text[tone],\\n            marginVertical: tone === 'selected' ? SELECTED_BOX : NEIGHBOR_BOX,\\n          },\\n        ]}\\n      >\\n        {label}\\n      </Text>\\n    </Pressable>\\n  );\\n});\\n\\nconst styles = StyleSheet.create({\\n  picker: {\\n    height: HEIGHT,\\n    overflow: 'hidden',\\n  },\\n  // Faixa de seleção atrás do valor, na largura toda.\\n  band: {\\n    position: 'absolute',\\n    top: EDGE,\\n    right: 0,\\n    left: 0,\\n    height: ROW,\\n    borderRadius: componentMetrics.datepicker.radius,\\n  },\\n  columns: {\\n    flex: 1,\\n    flexDirection: 'row',\\n    gap: primitives.space[8],\\n  },\\n  day: {\\n    width: DAY_WIDTH,\\n  },\\n  month: {\\n    flex: 1,\\n  },\\n  year: {\\n    width: YEAR_WIDTH,\\n  },\\n  content: {\\n    paddingVertical: EDGE,\\n  },\\n  row: {\\n    height: ROW,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"2f42e9f36a92108ca558fc4de6633c4fa171d22e86b6763813e543d3ae4626d3"}`),slider:JSON.parse(`{"propriedades":[{"nome":"value","tipo":"number","opcional":false,"dono":"SliderProps","descricao":"Valor atual, entre \`minimumValue\` e \`maximumValue\`. Controlado: o Slider não guarda o valor."},{"nome":"minimumValue","tipo":"number","opcional":true,"dono":"SliderProps","descricao":""},{"nome":"maximumValue","tipo":"number","opcional":true,"dono":"SliderProps","descricao":""},{"nome":"step","tipo":"number","opcional":true,"dono":"SliderProps","descricao":"Passo entre valores. Com passo, a bolinha para em cada um e \`onValueChange\` vem a\\ncada passo durante o arraste (vibre ali, se o app quiser o toque háptico leve).\\nSem passo (0), o valor é contínuo e \`onValueChange\` vem no fim do arraste."},{"nome":"onValueChange","tipo":"(value: number) => void","opcional":true,"dono":"SliderProps","descricao":""},{"nome":"label","tipo":"string","opcional":true,"dono":"SliderProps","descricao":"Rótulo do cabeçalho, à esquerda. Também nomeia o Slider para leitores de tela."},{"nome":"valueLabel","tipo":"string","opcional":true,"dono":"SliderProps","descricao":"Valor já formatado no cabeçalho, à direita (ex.: \\"1,0×\\")."},{"nome":"accessibilityValueText","tipo":"string","opcional":true,"dono":"SliderProps","descricao":"Valor falado pelo leitor de tela quando difere do cabeçalho (ex.: \\"1,25 vezes\\")."},{"nome":"header","tipo":"boolean","opcional":true,"dono":"SliderProps","descricao":"Mostra o cabeçalho com rótulo e valor. Padrão: true."},{"nome":"icons","tipo":"boolean","opcional":true,"dono":"SliderProps","descricao":"Mostra os ícones nas pontas; tocar neles anda um passo. Padrão: true."},{"nome":"leftIcon","tipo":"IconSource","opcional":true,"dono":"SliderProps","descricao":"Ícone da esquerda. Padrão: minus (ex.: volume)."},{"nome":"rightIcon","tipo":"IconSource","opcional":true,"dono":"SliderProps","descricao":"Ícone da direita. Padrão: plus (ex.: volume-2)."},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"SliderProps","descricao":""},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"SliderProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"SliderProps","descricao":""}],"tipos":"export type SliderProps = {\\n  /** Valor atual, entre \`minimumValue\` e \`maximumValue\`. Controlado: o Slider não guarda o valor. */\\n  value: number;\\n  minimumValue?: number;\\n  maximumValue?: number;\\n  /**\\n   * Passo entre valores. Com passo, a bolinha para em cada um e \`onValueChange\` vem a\\n   * cada passo durante o arraste (vibre ali, se o app quiser o toque háptico leve).\\n   * Sem passo (0), o valor é contínuo e \`onValueChange\` vem no fim do arraste.\\n   */\\n  step?: number;\\n  onValueChange?: (value: number) => void;\\n  /** Rótulo do cabeçalho, à esquerda. Também nomeia o Slider para leitores de tela. */\\n  label?: string;\\n  /** Valor já formatado no cabeçalho, à direita (ex.: \\"1,0×\\"). */\\n  valueLabel?: string;\\n  /** Valor falado pelo leitor de tela quando difere do cabeçalho (ex.: \\"1,25 vezes\\"). */\\n  accessibilityValueText?: string;\\n  /** Mostra o cabeçalho com rótulo e valor. Padrão: true. */\\n  header?: boolean;\\n  /** Mostra os ícones nas pontas; tocar neles anda um passo. Padrão: true. */\\n  icons?: boolean;\\n  /** Ícone da esquerda. Padrão: minus (ex.: volume). */\\n  leftIcon?: IconSource;\\n  /** Ícone da direita. Padrão: plus (ex.: volume-2). */\\n  rightIcon?: IconSource;\\n  disabled?: boolean;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { View } from 'react-native';\\nimport { Volume, Volume2 } from 'lucide-react-native';\\nimport { Slider, SectionCard } from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { Legenda, Secao } from '../../validador/telas/_comum';\\n\\nexport default function Example() {\\n  const [value, setValue] = useState(1);\\n  const [volume, setVolume] = useState(0.5);\\n  return <><Secao>Estados</Secao><Legenda>Interativo · passos de 0,25</Legenda><Slider label=\\"Velocidade da leitura\\" valueLabel={\`\${value.toFixed(2)}×\`} value={value} minimumValue={0.5} maximumValue={1.5} step={0.25} onValueChange={setValue} /><Legenda>Desabilitado</Legenda><Slider label=\\"Volume desabilitado\\" value={0.5} disabled /><Secao>Ícones personalizados</Secao><Slider label=\\"Volume\\" valueLabel={\`\${Math.round(volume * 100)}%\`} value={volume} onValueChange={setVolume} leftIcon={Volume} rightIcon={Volume2} /><Secao>Composição com SectionCard</Secao><SectionCard title=\\"Ajustes de leitura\\"><View style={{ padding: primitives.space[12], gap: primitives.space[16] }}><Slider label=\\"Velocidade\\" valueLabel={\`\${value.toFixed(2)}×\`} value={value} minimumValue={0.5} maximumValue={1.5} step={0.25} onValueChange={setValue} /><Slider value={volume} onValueChange={setVolume} header={false} icons={false} accessibilityLabel=\\"Volume sem ícones\\" /></View></SectionCard></>;\\n}\\n","exemploEm":"apps/catalogo/examples/Slider.tsx","fonte":"import React, { useEffect, useMemo, useRef } from 'react';\\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { AccessibilityActionEvent, LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';\\nimport { Gesture, GestureDetector } from 'react-native-gesture-handler';\\nimport Animated, {\\n  ReduceMotion,\\n  useAnimatedStyle,\\n  useReducedMotion,\\n  useSharedValue,\\n  withSpring,\\n  withTiming,\\n} from 'react-native-reanimated';\\nimport { runOnJS } from 'react-native-worklets';\\nimport { Minus, Plus } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon, type IconSource } from './Icon';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT } from './motion';\\n\\nexport type SliderProps = {\\n  /** Valor atual, entre \`minimumValue\` e \`maximumValue\`. Controlado: o Slider não guarda o valor. */\\n  value: number;\\n  minimumValue?: number;\\n  maximumValue?: number;\\n  /**\\n   * Passo entre valores. Com passo, a bolinha para em cada um e \`onValueChange\` vem a\\n   * cada passo durante o arraste (vibre ali, se o app quiser o toque háptico leve).\\n   * Sem passo (0), o valor é contínuo e \`onValueChange\` vem no fim do arraste.\\n   */\\n  step?: number;\\n  onValueChange?: (value: number) => void;\\n  /** Rótulo do cabeçalho, à esquerda. Também nomeia o Slider para leitores de tela. */\\n  label?: string;\\n  /** Valor já formatado no cabeçalho, à direita (ex.: \\"1,0×\\"). */\\n  valueLabel?: string;\\n  /** Valor falado pelo leitor de tela quando difere do cabeçalho (ex.: \\"1,25 vezes\\"). */\\n  accessibilityValueText?: string;\\n  /** Mostra o cabeçalho com rótulo e valor. Padrão: true. */\\n  header?: boolean;\\n  /** Mostra os ícones nas pontas; tocar neles anda um passo. Padrão: true. */\\n  icons?: boolean;\\n  /** Ícone da esquerda. Padrão: minus (ex.: volume). */\\n  leftIcon?: IconSource;\\n  /** Ícone da direita. Padrão: plus (ex.: volume-2). */\\n  rightIcon?: IconSource;\\n  disabled?: boolean;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n// A linha de controle tem 44 de altura, o alvo de toque.\\nconst CONTROL_HEIGHT = 44; // vem do Figma\\n// A bolinha é fixa (24 × 24) e nunca muda de tamanho; o trilho tem 6 de altura.\\nconst THUMB = 24; // vem do Figma\\nconst RAIL = 6; // vem do Figma\\nconst ICON = primitives.iconSize.md;\\nconst STROKE = primitives.stroke.icon;\\n// Ícone de 20 numa linha de 44: 12 em volta completam a área de toque.\\nconst ICON_HIT_SLOP = (CONTROL_HEIGHT - ICON) / 2;\\n// Ao arrastar, a bolinha cresce para 28 (escala 1,15) em 120 ms.\\nconst DRAG_SCALE = 1.15;\\nconst GROW = { duration: DURATION.press, easing: EASE_OUT, reduceMotion: ReduceMotion.System };\\nconst SPRING = { duration: 300, dampingRatio: 0.8, reduceMotion: ReduceMotion.System };\\n// Sem leading trim no Figma. Rótulo em Label (16/19) e valor em Body Strong (14/18):\\n// as duas linhas são menores que a natural da Puffin, então a margem ajusta o espaço.\\nconst LABEL_BOX = lineBoxMargin(typography.label.fontSize, typography.label.lineHeight);\\nconst VALUE_BOX = lineBoxMargin(typography.bodyStrong.fontSize, typography.bodyStrong.lineHeight);\\n\\nfunction clamp(v: number, lo: number, hi: number) {\\n  'worklet';\\n  return Math.min(hi, Math.max(lo, v));\\n}\\n\\n// Valor → posição da bolinha: ela anda de 0 até a largura do trilho menos ela mesma,\\n// como o auto layout do Figma (preenchimento, bolinha, trilho vazio).\\nfunction toOffset(value: number, min: number, max: number, width: number) {\\n  'worklet';\\n  const range = width - THUMB;\\n  if (range <= 0 || max <= min) return 0;\\n  return ((clamp(value, min, max) - min) / (max - min)) * range;\\n}\\n\\nfunction toValue(offset: number, min: number, max: number, width: number) {\\n  'worklet';\\n  const range = width - THUMB;\\n  if (range <= 0) return min;\\n  return min + (clamp(offset, 0, range) / range) * (max - min);\\n}\\n\\nfunction snap(value: number, min: number, max: number, step: number, precision: number) {\\n  'worklet';\\n  const v = clamp(value, min, max);\\n  if (step <= 0) return v;\\n  // Arredonda para as casas do passo: 0,1 + 0,2 não vira 0,30000000000000004.\\n  return Number(clamp(min + Math.round((v - min) / step) * step, min, max).toFixed(precision));\\n}\\n\\nfunction decimals(n: number) {\\n  const text = String(n);\\n  const dot = text.indexOf('.');\\n  return dot < 0 ? 0 : text.length - dot - 1;\\n}\\n\\n/**\\n * Ajuste de um valor dentro de uma faixa, como a velocidade da leitura, o volume ou o\\n * tamanho do texto. Arraste a bolinha ou toque nos ícones das pontas.\\n */\\nexport function Slider({\\n  value,\\n  minimumValue = 0,\\n  maximumValue = 1,\\n  step = 0,\\n  onValueChange,\\n  label,\\n  valueLabel,\\n  accessibilityValueText,\\n  header = true,\\n  icons = true,\\n  leftIcon = Minus,\\n  rightIcon = Plus,\\n  disabled = false,\\n  accessibilityLabel,\\n  style,\\n}: SliderProps) {\\n  const theme = useComponentTheme();\\n  const c = theme.slider;\\n  const reduced = useReducedMotion();\\n  const semibold = useFont('600');\\n  const min = minimumValue;\\n  const max = maximumValue;\\n  const precision = Math.max(decimals(step), decimals(min));\\n\\n  const width = useSharedValue(0);\\n  const offset = useSharedValue(0);\\n  const scale = useSharedValue(1);\\n  const dragging = useSharedValue(false);\\n  const emitted = useSharedValue(value);\\n\\n  // O gesto roda na thread de UI e só chama o JS para avisar um valor novo. A ref\\n  // mantém o gesto estável quando o app passa um callback novo a cada render.\\n  const onChangeRef = useRef(onValueChange);\\n  onChangeRef.current = onValueChange;\\n  const emit = useRef((v: number) => onChangeRef.current?.(v)).current;\\n\\n  // Valor vindo de fora (ícones, leitor de tela, o próprio app): a bolinha vai com a\\n  // mola. Durante o arraste, quem manda é o dedo.\\n  useEffect(() => {\\n    emitted.value = value;\\n    if (dragging.value || width.value <= 0) return;\\n    offset.value = withSpring(toOffset(value, min, max, width.value), SPRING);\\n  }, [value, min, max, dragging, emitted, offset, width]);\\n\\n  const gesture = useMemo(() => {\\n    const move = (x: number) => {\\n      'worklet';\\n      const raw = toValue(x - THUMB / 2, min, max, width.value);\\n      if (step > 0) {\\n        // A bolinha para em cada passo.\\n        const v = snap(raw, min, max, step, precision);\\n        if (v !== emitted.value) {\\n          emitted.value = v;\\n          offset.value = withSpring(toOffset(v, min, max, width.value), SPRING);\\n          runOnJS(emit)(v);\\n        }\\n      } else {\\n        offset.value = clamp(x - THUMB / 2, 0, Math.max(width.value - THUMB, 0));\\n      }\\n    };\\n    // Arraste horizontal a partir de qualquer ponto do trilho: a bolinha vai até o dedo.\\n    // Na vertical, o gesto falha e deixa a tela rolar.\\n    const pan = Gesture.Pan()\\n      .enabled(!disabled)\\n      .activeOffsetX([-4, 4])\\n      .failOffsetY([-10, 10])\\n      .onStart((e) => {\\n        'worklet';\\n        dragging.value = true;\\n        if (!reduced) scale.value = withTiming(DRAG_SCALE, GROW);\\n        move(e.x);\\n      })\\n      .onUpdate((e) => {\\n        'worklet';\\n        move(e.x);\\n      })\\n      .onEnd(() => {\\n        'worklet';\\n        if (step <= 0) runOnJS(emit)(toValue(offset.value, min, max, width.value));\\n      })\\n      .onFinalize(() => {\\n        'worklet';\\n        dragging.value = false;\\n        scale.value = withTiming(1, GROW);\\n      });\\n    return pan;\\n  }, [disabled, reduced, min, max, step, precision, emit, dragging, emitted, offset, scale, width]);\\n\\n  const fillStyle = useAnimatedStyle(() => {\\n    'worklet';\\n    // O preenchimento ocupa o trilho inteiro e anda para a esquerda: o recorte do\\n    // trilho mostra só até o centro da bolinha, que cobre a ponta reta.\\n    return { transform: [{ translateX: offset.value + THUMB / 2 - width.value }] };\\n  });\\n  const thumbStyle = useAnimatedStyle(() => {\\n    'worklet';\\n    // Escondida até a primeira medida, para não nascer no começo do trilho.\\n    return {\\n      opacity: width.value > 0 ? 1 : 0,\\n      transform: [{ translateX: offset.value }, { scale: scale.value }],\\n    };\\n  });\\n\\n  const onLayout = (e: LayoutChangeEvent) => {\\n    const w = e.nativeEvent.layout.width;\\n    width.value = w;\\n    offset.value = toOffset(value, min, max, w);\\n  };\\n\\n  // Ícones e leitor de tela andam um passo; sem passo, um décimo da faixa.\\n  const nudge = (direction: 1 | -1) => {\\n    const size = step > 0 ? step : (max - min) / 10;\\n    const next = snap(value + direction * size, min, max, step, precision);\\n    if (next !== value) onValueChange?.(next);\\n  };\\n  const onAccessibilityAction = (e: AccessibilityActionEvent) => {\\n    if (disabled) return;\\n    if (e.nativeEvent.actionName === 'increment') nudge(1);\\n    else if (e.nativeEvent.actionName === 'decrement') nudge(-1);\\n  };\\n\\n  const textColor = disabled ? theme.radio.text.disabled : null;\\n  const showHeader = header && Boolean(label || valueLabel);\\n  const icon = (source: IconSource, direction: 1 | -1) => (\\n    <Pressable\\n      accessible={false}\\n      disabled={disabled}\\n      hitSlop={ICON_HIT_SLOP}\\n      onPress={() => nudge(direction)}\\n      // No Figma, o ícone desabilitado fica a 50%, na mesma cor.\\n      style={[styles.icon, disabled ? styles.dimmed : null]}\\n    >\\n      {renderIcon(source, c.icon, ICON, STROKE)}\\n    </Pressable>\\n  );\\n\\n  return (\\n    <View\\n      accessible\\n      accessibilityRole=\\"adjustable\\"\\n      accessibilityLabel={accessibilityLabel ?? label}\\n      accessibilityState={{ disabled }}\\n      accessibilityValue={{ min, max, now: value, text: accessibilityValueText ?? valueLabel }}\\n      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}\\n      onAccessibilityAction={onAccessibilityAction}\\n      style={[styles.root, style]}\\n    >\\n      {showHeader ? (\\n        <View style={styles.header}>\\n          <Text\\n            numberOfLines={1}\\n            style={[semibold, styles.label, { color: textColor ?? c.text.label }]}\\n          >\\n            {label}\\n          </Text>\\n          <Text numberOfLines={1} style={[semibold, styles.value, { color: textColor ?? c.text.value }]}>\\n            {valueLabel}\\n          </Text>\\n        </View>\\n      ) : null}\\n\\n      <View style={styles.control}>\\n        {icons ? icon(leftIcon, -1) : null}\\n        <GestureDetector gesture={gesture}>\\n          <View style={styles.track} onLayout={onLayout}>\\n            {/* Trilho vazio por baixo; o preenchimento anda dentro dele, recortado. */}\\n            <View style={[styles.rail, { backgroundColor: disabled ? c.trackDisabled : c.track }]}>\\n              <Animated.View\\n                style={[styles.fill, { backgroundColor: disabled ? c.trackDisabled : c.fill }, fillStyle]}\\n              />\\n            </View>\\n            <Animated.View\\n              style={[styles.thumb, { backgroundColor: disabled ? c.thumbDisabled : c.thumb }, thumbStyle]}\\n            />\\n          </View>\\n        </GestureDetector>\\n        {icons ? icon(rightIcon, 1) : null}\\n      </View>\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  root: {\\n    gap: primitives.space[4],\\n  },\\n  header: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    justifyContent: 'space-between',\\n  },\\n  label: {\\n    flexShrink: 1,\\n    fontSize: typography.label.fontSize,\\n    marginVertical: LABEL_BOX,\\n    includeFontPadding: false,\\n  },\\n  value: {\\n    fontSize: typography.bodyStrong.fontSize,\\n    marginVertical: VALUE_BOX,\\n    includeFontPadding: false,\\n  },\\n  control: {\\n    height: CONTROL_HEIGHT,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[12],\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  dimmed: {\\n    opacity: 0.5, // vem do Figma\\n  },\\n  track: {\\n    flex: 1,\\n    height: CONTROL_HEIGHT,\\n    justifyContent: 'center',\\n  },\\n  rail: {\\n    height: RAIL,\\n    borderRadius: componentMetrics.slider.radius.track,\\n    overflow: 'hidden',\\n  },\\n  fill: {\\n    position: 'absolute',\\n    top: 0,\\n    bottom: 0,\\n    left: 0,\\n    width: '100%',\\n  },\\n  thumb: {\\n    position: 'absolute',\\n    top: (CONTROL_HEIGHT - THUMB) / 2,\\n    left: 0,\\n    width: THUMB,\\n    height: THUMB,\\n    borderRadius: componentMetrics.slider.radius.thumb,\\n  },\\n});\\n","hash":"d4fd41cd74afb6151306bf71181563fe67993e5162c2e978c9c711a30ac38537"}`),stepper:{propriedades:[{nome:`totalSteps`,tipo:`3 | 4 | 5`,opcional:!0,dono:`StepperProps`,descricao:``},{nome:`currentStep`,tipo:`number`,opcional:!1,dono:`StepperProps`,descricao:`Etapa atual, começando em 1.`},{nome:`showHeader`,tipo:`boolean`,opcional:!0,dono:`StepperProps`,descricao:``},{nome:`label`,tipo:`string`,opcional:!0,dono:`StepperProps`,descricao:``},{nome:`actionLabel`,tipo:`string`,opcional:!0,dono:`StepperProps`,descricao:``},{nome:`onActionPress`,tipo:`() => void`,opcional:!0,dono:`StepperProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`StepperProps`,descricao:``}],tipos:`export type StepperProps = {
  totalSteps?: 3 | 4 | 5;
  /** Etapa atual, começando em 1. */
  currentStep: number;
  showHeader?: boolean;
  label?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { primitives } from '@tessela/tokens';
import { Stepper } from '@tessela/ui';
import { Button } from '@tessela/ui';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

function Escuro() {
  const theme = useTheme();
  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><Stepper currentStep={2} /></View>;
}

export default function TelaStepper() {
  const [step, setStep] = useState(2);
  const [optional, setOptional] = useState(3);
  return <>
    <Secao>Variantes</Secao>
    {([3, 4, 5] as const).map(total => <View key={total} style={comum.coluna}>
      <Legenda>{\`\${total} passos\`}</Legenda><Stepper currentStep={1} totalSteps={total} />
    </View>)}
    <Secao>Em uso</Secao>
    <Legenda>Criação de história, passo 2 de 3</Legenda>
    <Stepper currentStep={step} />
    <View style={styles.action}><Button label={step === 3 ? 'Recomeçar' : 'Avançar'} onPress={() => setStep(step === 3 ? 1 : step + 1)} /></View>
    <Legenda>Onboarding com etapa opcional</Legenda>
    <Stepper totalSteps={5} currentStep={optional} onActionPress={() => setOptional(optional === 5 ? 1 : optional + 1)} />
    <Legenda>Só os segmentos</Legenda>
    <Stepper totalSteps={4} currentStep={1} showHeader={false} />
    <Legenda>Tema escuro</Legenda>
    <TesselaProvider theme="dark" fonts={FONTS}><Escuro /></TesselaProvider>
  </>;
}

const styles = StyleSheet.create({
  action: { marginTop: primitives.space[24] },
  dark: { paddingVertical: primitives.space[24], borderRadius: primitives.radius.lg },
});
`,exemploEm:`apps/validador/telas/Stepper.tsx`,fonte:`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { useReducedMotion } from 'react-native-reanimated';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { Link } from './Link';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT_CSS } from './motion';
import { useComponentTheme, useFont } from './theme';

export type StepperProps = {
  totalSteps?: 3 | 4 | 5;
  /** Etapa atual, começando em 1. */
  currentStep: number;
  showHeader?: boolean;
  label?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Stepper({ totalSteps = 3, currentStep, showHeader = true, label, actionLabel = 'Pular',
  onActionPress, style }: StepperProps) {
  const c = useComponentTheme().stepper;
  const semibold = useFont('600');
  const reduced = useReducedMotion();
  const step = Math.max(1, Math.min(totalSteps, Math.round(currentStep)));
  const title = label ?? \`Passo \${step} de \${totalSteps}\`;
  return (
    <View style={[styles.container, style]}>
      {showHeader ? <View style={[styles.header, onActionPress ? styles.actionHeader : null]}>
        <Text accessible={false} style={[semibold, styles.label, { color: c.text }]}>{title}</Text>
        {onActionPress ? <Link label={actionLabel} tone="muted" arrow={false} onPress={onActionPress} /> : null}
      </View> : null}
      <View accessible accessibilityRole="progressbar" accessibilityLabel={title}
        accessibilityValue={{ min: 1, max: totalSteps, now: step, text: title }} style={styles.segments}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <View key={index} style={[styles.segment, { backgroundColor: c.segment.empty }]}>
            <Animated.View style={[styles.fill, { backgroundColor: c.segment.filled, width: index < step ? '100%' : '0%',
              transitionProperty: 'width', transitionDuration: reduced ? 0 : DURATION.move, transitionTimingFunction: EASE_OUT_CSS }]} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionHeader: { minHeight: 44 },
  container: { gap: primitives.space[8] },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { includeFontPadding: false, fontSize: typography.bodyStrong.fontSize,
    marginVertical: lineBoxMargin(typography.bodyStrong.fontSize, typography.bodyStrong.lineHeight) },
  segments: { flexDirection: 'row', gap: primitives.space[4] },
  segment: { flex: 1, height: primitives.space[6], borderRadius: componentMetrics.stepper.radius, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: componentMetrics.stepper.radius },
});
`,hash:`72fe7cc7298bc906c6201a6e1331c2216b9d572f6e26327c2da1c2e78c1f2103`},carousel:JSON.parse(`{"propriedades":[{"nome":"active","tipo":"boolean","opcional":true,"dono":"PageDotProps","descricao":""},{"nome":"count","tipo":"number","opcional":false,"dono":"PageIndicatorProps","descricao":""},{"nome":"activeIndex","tipo":"number","opcional":false,"dono":"PageIndicatorProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"PageIndicatorProps","descricao":""},{"nome":"children","tipo":"React.ReactNode","opcional":false,"dono":"CarouselProps","descricao":""},{"nome":"activeIndex","tipo":"number","opcional":false,"dono":"CarouselProps","descricao":"Índice controlado, começando em zero."},{"nome":"onIndexChange","tipo":"(index: number) => void","opcional":false,"dono":"CarouselProps","descricao":""},{"nome":"fullWidth","tipo":"boolean","opcional":true,"dono":"CarouselProps","descricao":"Páginas de onboarding ocupam toda a largura, sem prévia do próximo item."},{"nome":"itemWidth","tipo":"number","opcional":true,"dono":"CarouselProps","descricao":"Largura explícita opcional dos itens; padrão: largura disponível menos 24."},{"nome":"indicator","tipo":"boolean","opcional":true,"dono":"CarouselProps","descricao":""},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"CarouselProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"CarouselProps","descricao":""}],"tipos":"export type PageDotProps = { active?: boolean };\\n\\nexport type PageIndicatorProps = { count: number; activeIndex: number; style?: StyleProp<ViewStyle> };\\n\\nexport type CarouselProps = {\\n  children: React.ReactNode;\\n  /** Índice controlado, começando em zero. */\\n  activeIndex: number;\\n  onIndexChange: (index: number) => void;\\n  /** Páginas de onboarding ocupam toda a largura, sem prévia do próximo item. */\\n  fullWidth?: boolean;\\n  /** Largura explícita opcional dos itens; padrão: largura disponível menos 24. */\\n  itemWidth?: number;\\n  indicator?: boolean;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, Text, View } from 'react-native';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { Carousel, PageDot, PageIndicator } from '@tessela/ui';\\nimport { StoryCard } from '@tessela/ui';\\nimport { Button } from '@tessela/ui';\\nimport { TesselaProvider, useFont, useTheme } from '@tessela/ui';\\nimport { lineBoxMargin } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\nfunction Destaques() {\\n  const [index, setIndex] = useState(0);\\n  const [opened, setOpened] = useState(false);\\n  return <>\\n    <Carousel activeIndex={index} onIndexChange={setIndex}>{[0, 1, 2].map(key => <StoryCard key={key} title=\\"Laurinha em: A viagem para a lua\\" duration=\\"4min\\" onPress={() => setOpened(true)} />)}</Carousel>\\n    {opened ? <Legenda>História aberta pelo callback</Legenda> : null}\\n  </>;\\n}\\n\\nfunction Onboarding() {\\n  const theme = useTheme();\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n  const [index, setIndex] = useState(0);\\n  const slides = [\\n    { title: 'Histórias com a voz de quem ama', body: 'Avós, tios e padrinhos gravam uma vez e narram todas as noites.' },\\n    { title: 'Uma história nova por noite', body: 'Feita para a idade e o momento de cada criança.' },\\n  ];\\n  return <View style={styles.onboarding}>\\n    <Carousel fullWidth activeIndex={index} onIndexChange={setIndex} accessibilityLabel=\\"Apresentação\\">\\n      {slides.map(slide => <View key={slide.title} style={styles.page}>\\n        <View style={[styles.illustration, { backgroundColor: theme.bg.brandSubtle }]} />\\n        <Text style={[semibold, styles.title, { color: theme.fg.primary }]}>{slide.title}</Text>\\n        <Text style={[medium, styles.body, { color: theme.fg.secondary }]}>{slide.body}</Text>\\n      </View>)}\\n    </Carousel>\\n    <Button label=\\"Continuar\\" onPress={() => setIndex(value => (value + 1) % slides.length)} />\\n  </View>;\\n}\\n\\nfunction Escuro() {\\n  const theme = useTheme();\\n  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><Destaques /></View>;\\n}\\n\\nexport default function TelaCarousel() {\\n  return <>\\n    <Secao>Page Dot</Secao><View style={comum.linha}><PageDot active /><PageDot /></View>\\n    <Secao>Page Indicator</Secao>\\n    {[3, 4, 5].map(count => <View key={count}><Legenda>{\`\${count} páginas\`}</Legenda><PageIndicator count={count} activeIndex={0} /></View>)}\\n    <Secao>Carousel</Secao><Legenda>Deslize para trocar de item</Legenda><Destaques />\\n    <Secao>Em uso</Secao>\\n    <Legenda>Destaques na tela Hoje</Legenda><Destaques />\\n    <Legenda>Onboarding</Legenda><Onboarding />\\n    <Legenda>Indicador em outras páginas</Legenda><View style={styles.indicators}><PageIndicator count={3} activeIndex={1} /><PageIndicator count={5} activeIndex={3} /></View>\\n    <Legenda>Tema escuro</Legenda><TesselaProvider theme=\\"dark\\" fonts={FONTS}><Escuro /></TesselaProvider>\\n  </>;\\n}\\n\\nconst styles = StyleSheet.create({\\n  onboarding: { gap: primitives.space[24] },\\n  page: { gap: primitives.space[16] },\\n  // Placeholder 200 de altura vem do frame de onboarding, 123:254.\\n  illustration: { height: 200, borderRadius: primitives.radius['2xl'] },\\n  title: { fontSize: typography.title.fontSize, marginVertical: lineBoxMargin(typography.title.fontSize, typography.title.lineHeight), includeFontPadding: false },\\n  body: { fontSize: typography.bodyLarge.fontSize, lineHeight: typography.bodyLarge.lineHeight, includeFontPadding: false },\\n  indicators: { alignItems: 'flex-start', gap: primitives.space[16] },\\n  dark: { padding: primitives.space[16], borderRadius: primitives.radius.lg },\\n});\\n","exemploEm":"apps/validador/telas/Carousel.tsx","fonte":"import React, { useEffect, useRef, useState } from 'react';\\nimport { ScrollView, StyleSheet, View } from 'react-native';\\nimport type { NativeScrollEvent, NativeSyntheticEvent, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { useReducedMotion } from 'react-native-reanimated';\\nimport { componentMetrics, primitives } from '@tessela/tokens';\\nimport { DURATION, EASE_IN_OUT_CSS } from './motion';\\nimport { useComponentTheme } from './theme';\\n\\nexport type PageDotProps = { active?: boolean };\\nexport type PageIndicatorProps = { count: number; activeIndex: number; style?: StyleProp<ViewStyle> };\\nexport type CarouselProps = {\\n  children: React.ReactNode;\\n  /** Índice controlado, começando em zero. */\\n  activeIndex: number;\\n  onIndexChange: (index: number) => void;\\n  /** Páginas de onboarding ocupam toda a largura, sem prévia do próximo item. */\\n  fullWidth?: boolean;\\n  /** Largura explícita opcional dos itens; padrão: largura disponível menos 24. */\\n  itemWidth?: number;\\n  indicator?: boolean;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport function PageDot({ active = false }: PageDotProps) {\\n  const c = useComponentTheme().carousel;\\n  const reduced = useReducedMotion();\\n  return <Animated.View style={{ height: primitives.space[8], width: active ? primitives.space[24] : primitives.space[8], borderRadius: componentMetrics.carousel.dot.radius, backgroundColor: active ? c.dot.active : c.dot.inactive, transitionProperty: ['width', 'backgroundColor'], transitionDuration: reduced ? 0 : DURATION.move, transitionTimingFunction: EASE_IN_OUT_CSS }} />;\\n}\\n\\nexport function PageIndicator({ count, activeIndex, style }: PageIndicatorProps) {\\n  return <View accessible={false} accessibilityElementsHidden importantForAccessibility=\\"no-hide-descendants\\" style={[styles.dots, style]}>{Array.from({ length: Math.max(0, count) }, (_, index) => <PageDot key={index} active={index === activeIndex} />)}</View>;\\n}\\n\\nexport function Carousel({ children, activeIndex, onIndexChange, fullWidth = false, itemWidth, indicator = true, accessibilityLabel = 'Destaque', style }: CarouselProps) {\\n  const items = React.Children.toArray(children);\\n  const [width, setWidth] = useState(0);\\n  const [settledRevision, setSettledRevision] = useState(0);\\n  const scroll = useRef<ScrollView>(null);\\n  const offset = useRef(0);\\n  const reduced = useReducedMotion();\\n  const current = Math.min(Math.max(0, activeIndex), Math.max(0, items.length - 1));\\n  const pageWidth = fullWidth ? width : itemWidth ?? Math.max(0, width - primitives.space[24]);\\n  const gap = fullWidth ? 0 : primitives.space[12];\\n  const step = pageWidth + gap;\\n  useEffect(() => {\\n    const target = current * step;\\n    if (width > 0 && Math.abs(offset.current - target) > 0.5) {\\n      offset.current = target;\\n      scroll.current?.scrollTo({ x: target, animated: !reduced });\\n    }\\n  }, [current, step, width, reduced, settledRevision]);\\n  const change = (index: number) => {\\n    const next = Math.min(Math.max(0, index), Math.max(0, items.length - 1));\\n    if (next !== current) onIndexChange(next);\\n  };\\n  const settleOffset = (nextOffset: number) => {\\n    if (step > 0) {\\n      offset.current = nextOffset;\\n      change(Math.round(offset.current / step));\\n      // O pai pode recusar a mudança: o índice controlado continua sendo a fonte.\\n      setSettledRevision(revision => revision + 1);\\n    }\\n  };\\n  const settled = (event: NativeSyntheticEvent<NativeScrollEvent>) => settleOffset(event.nativeEvent.contentOffset.x);\\n  const dragEnded = (event: NativeSyntheticEvent<NativeScrollEvent>) => {\\n    const { contentOffset, targetContentOffset, velocity } = event.nativeEvent;\\n    // Sem desaceleração, o iOS não emite onMomentumScrollEnd.\\n    if (!velocity?.x) settleOffset(targetContentOffset?.x ?? contentOffset.x);\\n  };\\n  return (\\n    <View onLayout={event => setWidth(event.nativeEvent.layout.width)} style={[styles.carousel, style]}>\\n      <ScrollView\\n        ref={scroll}\\n        horizontal\\n        pagingEnabled={fullWidth}\\n        snapToInterval={step || undefined}\\n        snapToAlignment=\\"start\\"\\n        disableIntervalMomentum\\n        decelerationRate=\\"fast\\"\\n        showsHorizontalScrollIndicator={false}\\n        onMomentumScrollEnd={settled}\\n        onScrollEndDrag={dragEnded}\\n        contentContainerStyle={{ gap, paddingRight: Math.max(0, width - pageWidth) }}\\n        style={styles.scroll}\\n        accessibilityRole=\\"adjustable\\"\\n        accessibilityLabel={accessibilityLabel}\\n        accessibilityValue={{ min: items.length ? 1 : 0, max: items.length, now: items.length ? current + 1 : 0, text: \`\${accessibilityLabel} \${items.length ? current + 1 : 0} de \${items.length}\` }}\\n        accessibilityActions={[{ name: 'increment', label: 'Próximo item' }, { name: 'decrement', label: 'Item anterior' }]}\\n        onAccessibilityAction={event => { if (event.nativeEvent.actionName === 'increment') change(current + 1); if (event.nativeEvent.actionName === 'decrement') change(current - 1); }}\\n      >\\n        {items.map((item, index) => <View key={React.isValidElement(item) ? item.key ?? index : index} style={pageWidth > 0 ? { width: pageWidth } : undefined} accessibilityElementsHidden={index !== current} importantForAccessibility={index === current ? 'auto' : 'no-hide-descendants'}>{item}</View>)}\\n      </ScrollView>\\n      {indicator && items.length > 1 ? <PageIndicator count={items.length} activeIndex={current} /> : null}\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  carousel: { gap: primitives.space[16], overflow: 'hidden' },\\n  scroll: { flexGrow: 0 },\\n  dots: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: primitives.space[6] },\\n});\\n","hash":"e8bcd3a1d423e462d2962153161ff9e65188619faaee23291d1aae3aa066abc4"}`),coachmark:JSON.parse(`{"propriedades":[{"nome":"arrow","tipo":"CoachmarkArrow","opcional":true,"dono":"CoachmarkProps","descricao":""},{"nome":"arrowPosition","tipo":"CoachmarkArrowPosition","opcional":true,"dono":"CoachmarkProps","descricao":"Onde fica a seta: início, centro ou fim do balão, com space/20 da ponta."},{"nome":"title","tipo":"string","opcional":true,"dono":"CoachmarkProps","descricao":"Título em Label. Sem ele, o balão começa pelo texto."},{"nome":"text","tipo":"string","opcional":false,"dono":"CoachmarkProps","descricao":"Uma frase que explica o recurso."},{"nome":"counter","tipo":"string","opcional":true,"dono":"CoachmarkProps","descricao":"Posição numa sequência curta, no rodapé (ex.: \\"1 de 3\\")."},{"nome":"actionLabel","tipo":"string","opcional":true,"dono":"CoachmarkProps","descricao":"Texto da ação do rodapé."},{"nome":"onAction","tipo":"() => void","opcional":true,"dono":"CoachmarkProps","descricao":"Toque na ação (\\"Entendi\\"): feche o balão aqui. Com ela, o rodapé aparece e a ação\\nrecebe o foco do leitor de tela. Sem título e sem rodapé, o balão vira Tooltip:\\nlargura do texto mais space/16 de cada lado."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"CoachmarkProps","descricao":""}],"tipos":"/** up: o balão fica abaixo do alvo, com a seta em cima. down: acima, com a seta embaixo. */\\nexport type CoachmarkArrow = 'up' | 'down';\\n\\nexport type CoachmarkArrowPosition = 'start' | 'center' | 'end';\\n\\nexport type CoachmarkProps = {\\n  arrow?: CoachmarkArrow;\\n  /** Onde fica a seta: início, centro ou fim do balão, com space/20 da ponta. */\\n  arrowPosition?: CoachmarkArrowPosition;\\n  /** Título em Label. Sem ele, o balão começa pelo texto. */\\n  title?: string;\\n  /** Uma frase que explica o recurso. */\\n  text: string;\\n  /** Posição numa sequência curta, no rodapé (ex.: \\"1 de 3\\"). */\\n  counter?: string;\\n  /** Texto da ação do rodapé. */\\n  actionLabel?: string;\\n  /**\\n   * Toque na ação (\\"Entendi\\"): feche o balão aqui. Com ela, o rodapé aparece e a ação\\n   * recebe o foco do leitor de tela. Sem título e sem rodapé, o balão vira Tooltip:\\n   * largura do texto mais space/16 de cada lado.\\n   */\\n  onAction?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { View } from 'react-native';\\nimport { Info } from 'lucide-react-native';\\nimport { Coachmark, IconButton } from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { Legenda, Secao } from '../../validador/telas/_comum';\\n\\nexport default function Example() {\\n  const [visible, setVisible] = useState(false);\\n  return <><Secao>Direções e posições</Secao>{(['up', 'down'] as const).map(arrow => <React.Fragment key={arrow}><Legenda>{arrow}</Legenda><View style={{ gap: primitives.space[16] }}>{(['start', 'center', 'end'] as const).map(position => <Coachmark key={position} arrow={arrow} arrowPosition={position} title=\\"Sua biblioteca\\" text=\\"Encontre aqui as histórias que você salvou.\\" />)}</View></React.Fragment>)}<Secao>Composição com IconButton</Secao><Legenda>Toque no ícone para mostrar a orientação.</Legenda><View style={{ gap: primitives.space[8] }}><IconButton icon={Info} size=\\"small\\" variant=\\"neutral\\" accessibilityLabel=\\"Mostrar dica\\" onPress={() => setVisible(!visible)} />{visible && <Coachmark title=\\"Uma dica\\" text=\\"Use os filtros para encontrar uma história.\\" counter=\\"1 de 1\\" actionLabel=\\"Entendi\\" onAction={() => setVisible(false)} />}</View></>;\\n}\\n","exemploEm":"apps/catalogo/examples/Coachmark.tsx","fonte":"import React, { useEffect, useRef } from 'react';\\nimport { AccessibilityInfo, Platform, Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { Keyframe, ReduceMotion, useReducedMotion } from 'react-native-reanimated';\\nimport Svg, { Path } from 'react-native-svg';\\nimport { componentMetrics, primitives, shadows, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT } from './motion';\\n\\n/** up: o balão fica abaixo do alvo, com a seta em cima. down: acima, com a seta embaixo. */\\nexport type CoachmarkArrow = 'up' | 'down';\\nexport type CoachmarkArrowPosition = 'start' | 'center' | 'end';\\n\\nexport type CoachmarkProps = {\\n  arrow?: CoachmarkArrow;\\n  /** Onde fica a seta: início, centro ou fim do balão, com space/20 da ponta. */\\n  arrowPosition?: CoachmarkArrowPosition;\\n  /** Título em Label. Sem ele, o balão começa pelo texto. */\\n  title?: string;\\n  /** Uma frase que explica o recurso. */\\n  text: string;\\n  /** Posição numa sequência curta, no rodapé (ex.: \\"1 de 3\\"). */\\n  counter?: string;\\n  /** Texto da ação do rodapé. */\\n  actionLabel?: string;\\n  /**\\n   * Toque na ação (\\"Entendi\\"): feche o balão aqui. Com ela, o rodapé aparece e a ação\\n   * recebe o foco do leitor de tela. Sem título e sem rodapé, o balão vira Tooltip:\\n   * largura do texto mais space/16 de cada lado.\\n   */\\n  onAction?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n// 280 de largura, a mesma do balão do chat.\\nconst WIDTH = 280;\\n// Seta de 16 × 8 com space/20 da ponta do balão.\\nconst ARROW_WIDTH = 16;\\nconst ARROW_HEIGHT = 8;\\nconst ARROW_INSET = primitives.space[20];\\n// Caminhos da camada \\"Seta\\" do Figma (124:7 e 124:37), com a ponta arredondada.\\n// Na seta de cima, o vetor tem 7,375 de altura e fica no topo da linha de 8, como no\\n// Figma: sobra 0,625 entre a base e o balão (ver relatório).\\nconst ARROW_UP =\\n  'M 0 7.375 L 6.4 0.675 C 7.3 -0.225 8.7 -0.225 9.6 0.675 L 16 7.375 L 0 7.375 Z';\\nconst ARROW_DOWN = 'M 0 0 L 6.4 6.7 C 7.3 7.6 8.7 7.6 9.6 6.7 L 16 0 L 0 0 Z';\\n\\nconst TITLE_SIZE = typography.label.fontSize;\\nconst TEXT_SIZE = typography.body.fontSize;\\nconst ACTION_SIZE = typography.bodyStrong.fontSize;\\n// Label 16/19 e Body Strong 14/18 são menores que a linha natural da Puffin: margem.\\nconst TITLE_BOX = lineBoxMargin(TITLE_SIZE, typography.label.lineHeight);\\nconst ACTION_BOX = lineBoxMargin(ACTION_SIZE, typography.bodyStrong.lineHeight);\\nconst SHADOW = Platform.OS === 'android' ? shadows.lg.android : shadows.lg.ios;\\n\\nconst JUSTIFY = { start: 'flex-start', center: 'center', end: 'flex-end' } as const;\\n\\n/**\\n * Distância da borda esquerda do balão até a ponta da seta. Para apontar para o centro\\n * do alvo: \`left = centroDoAlvo - coachmarkArrowOffset(posição, larguraDoBalão)\`.\\n * O balão fica space/8 distante do alvo.\\n */\\nexport function coachmarkArrowOffset(position: CoachmarkArrowPosition, width: number = WIDTH): number {\\n  if (position === 'center') return width / 2;\\n  if (position === 'end') return width - ARROW_INSET - ARROW_WIDTH / 2;\\n  return ARROW_INSET + ARROW_WIDTH / 2;\\n}\\n\\n// Entra com opacidade e 4 de deslocamento na direção da seta, em 180 ms ease-out.\\nfunction enterToward(arrow: CoachmarkArrow) {\\n  return new Keyframe({\\n    0: { opacity: 0, transform: [{ translateY: arrow === 'up' ? primitives.space[4] : -primitives.space[4] }] },\\n    100: { opacity: 1, transform: [{ translateY: 0 }], easing: EASE_OUT },\\n  })\\n    .duration(DURATION.move)\\n    .reduceMotion(ReduceMotion.System);\\n}\\nconst ENTER_UP = enterToward('up');\\nconst ENTER_DOWN = enterToward('down');\\n// Com movimento reduzido, só a opacidade: o fade continua rodando.\\nconst ENTER_REDUCED = new Keyframe({\\n  0: { opacity: 0 },\\n  100: { opacity: 1, easing: EASE_OUT },\\n})\\n  .duration(DURATION.move)\\n  .reduceMotion(ReduceMotion.Never);\\nconst EXIT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.Never);\\n\\n/**\\n * Balão que aponta para um recurso e o explica em uma frase, na primeira vez que a\\n * pessoa vê a tela. Uma sequência tem no máximo 3 balões. Não se posiciona: coloque-o\\n * numa camada por cima da tela, space/8 distante do alvo, sem cobri-lo, com a seta\\n * no centro do alvo (\`coachmarkArrowOffset\`).\\n */\\nexport function Coachmark({\\n  arrow = 'up',\\n  arrowPosition = 'start',\\n  title,\\n  text,\\n  counter,\\n  actionLabel = 'Entendi',\\n  onAction,\\n  style,\\n}: CoachmarkProps) {\\n  const c = useComponentTheme().coachmark;\\n  const reduced = useReducedMotion();\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n  const actionRef = useRef<View>(null);\\n  const hasFooter = Boolean(onAction);\\n  const tooltip = !title && !hasFooter;\\n  const announcement = title ? \`\${title}. \${text}\` : text;\\n\\n  // A ação recebe o foco; o texto entra na fila e é lido em seguida.\\n  useEffect(() => {\\n    if (actionRef.current) AccessibilityInfo.sendAccessibilityEvent(actionRef.current, 'focus');\\n    AccessibilityInfo.announceForAccessibilityWithOptions(announcement, { queue: true });\\n  }, [announcement]);\\n\\n  const arrowRow = (\\n    <View style={[styles.arrowRow, { justifyContent: JUSTIFY[arrowPosition] }]}>\\n      <Svg width={ARROW_WIDTH} height={ARROW_HEIGHT} viewBox={\`0 0 \${ARROW_WIDTH} \${ARROW_HEIGHT}\`}>\\n        <Path d={arrow === 'up' ? ARROW_UP : ARROW_DOWN} fill={c.surface} />\\n      </Svg>\\n    </View>\\n  );\\n\\n  return (\\n    <Animated.View\\n      entering={reduced ? ENTER_REDUCED : arrow === 'up' ? ENTER_UP : ENTER_DOWN}\\n      exiting={EXIT}\\n      style={[tooltip ? styles.tooltip : styles.coachmark, style]}\\n    >\\n      {arrow === 'up' ? arrowRow : null}\\n      <View style={[styles.balloon, SHADOW, { backgroundColor: c.surface }]}>\\n        <View style={styles.texts}>\\n          {title ? (\\n            <Text\\n              style={[semibold, styles.text, { fontSize: TITLE_SIZE, color: c.text, marginVertical: TITLE_BOX }]}\\n            >\\n              {title}\\n            </Text>\\n          ) : null}\\n          <Text\\n            style={[\\n              medium,\\n              styles.text,\\n              // Body 14/20: a linha é maior que a natural (18,1), então lineHeight serve.\\n              { fontSize: TEXT_SIZE, lineHeight: typography.body.lineHeight, color: c.text },\\n            ]}\\n          >\\n            {text}\\n          </Text>\\n        </View>\\n        {hasFooter ? (\\n          <View style={styles.footer}>\\n            {counter ? (\\n              <Text\\n                style={[\\n                  medium,\\n                  styles.text,\\n                  // Caption 11/17, maior que a linha natural (14,3).\\n                  { fontSize: typography.caption.fontSize, lineHeight: typography.caption.lineHeight, color: c.text },\\n                ]}\\n              >\\n                {counter}\\n              </Text>\\n            ) : (\\n              <View />\\n            )}\\n            <Pressable\\n              ref={actionRef}\\n              accessibilityRole=\\"button\\"\\n              accessibilityLabel={actionLabel}\\n              onPress={onAction}\\n              style={styles.action}\\n            >\\n              <Text\\n                numberOfLines={1}\\n                style={[\\n                  semibold,\\n                  styles.text,\\n                  { fontSize: ACTION_SIZE, color: c.action, marginVertical: ACTION_BOX },\\n                ]}\\n              >\\n                {actionLabel}\\n              </Text>\\n            </Pressable>\\n          </View>\\n        ) : null}\\n      </View>\\n      {arrow === 'down' ? arrowRow : null}\\n    </Animated.View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  action: { minHeight: 44, minWidth: 44, justifyContent: 'center', alignItems: 'center' },\\n  coachmark: {\\n    width: WIDTH,\\n  },\\n  // Tooltip: a largura do texto, até a do balão completo.\\n  tooltip: {\\n    alignSelf: 'flex-start',\\n    maxWidth: WIDTH,\\n  },\\n  arrowRow: {\\n    height: ARROW_HEIGHT,\\n    flexDirection: 'row',\\n    paddingHorizontal: ARROW_INSET,\\n  },\\n  balloon: {\\n    padding: primitives.space[16],\\n    gap: primitives.space[12],\\n    borderRadius: componentMetrics.coachmark.radius,\\n  },\\n  texts: {\\n    gap: primitives.space[4],\\n  },\\n  footer: {\\n    flexDirection: 'row',\\n    justifyContent: 'space-between',\\n    alignItems: 'center',\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"ea37e23dd94048b1bd945ee79edf09739e789bd892b09c6d11db385d016a7a75"}`),"avatar-group":{propriedades:[{nome:`people`,tipo:`readonly AvatarGroupPerson[]`,opcional:!1,dono:`AvatarGroupProps`,descricao:`Até três pessoas ficam visíveis; as demais entram no contador.`},{nome:`size`,tipo:`'small' | 'medium'`,opcional:!0,dono:`AvatarGroupProps`,descricao:``},{nome:`totalCount`,tipo:`number`,opcional:!0,dono:`AvatarGroupProps`,descricao:`Total quando a lista contém apenas as pessoas carregadas.`},{nome:`ringColor`,tipo:`string`,opcional:!0,dono:`AvatarGroupProps`,descricao:`Cor do fundo sob o grupo, usada no anel de separação.`},{nome:`accessibilityLabel`,tipo:`string`,opcional:!0,dono:`AvatarGroupProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`AvatarGroupProps`,descricao:``}],tipos:`export type AvatarGroupPerson = Pick<AvatarProps, 'source' | 'initials'> & { id: string; name: string };

export type AvatarGroupProps = {
  /** Até três pessoas ficam visíveis; as demais entram no contador. */
  people: readonly AvatarGroupPerson[];
  size?: 'small' | 'medium';
  /** Total quando a lista contém apenas as pessoas carregadas. */
  totalCount?: number;
  /** Cor do fundo sob o grupo, usada no anel de separação. */
  ringColor?: string;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React from 'react';
import { View } from 'react-native';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { primitives } from '@tessela/tokens';
import { AvatarGroup } from '@tessela/ui';
import { ListItem } from '@tessela/ui';
import { FONTS, Legenda, Secao, comum } from './_comum';

const PEOPLE = [{ id: 'alice', name: 'Alice', initials: 'AL' }, { id: 'laura', name: 'Laura', initials: 'LA' }, { id: 'tomas', name: 'Tomás', initials: 'TO' }];
function Narradores() {
  const theme = useTheme();
  return <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg.base, borderRadius: primitives.radius.lg }}>
    <ListItem style={{ flex: 1 }} trailing="none" avatar={false} title="Vovó Lourdes" detail="Narra para 5 crianças" />
    <AvatarGroup people={PEOPLE} totalCount={5} style={{ alignSelf: 'center' }} />
  </View>;
}
export default function TelaAvatarGroup() {
  return <>
    <Secao>Tamanhos</Secao>
    <Legenda>Small · avatares 32 e anéis de 36</Legenda><AvatarGroup people={PEOPLE} totalCount={5} />
    <Legenda>Medium · avatares 40 e anéis de 44</Legenda><AvatarGroup people={PEOPLE} totalCount={5} size="medium" />
    <Secao>Em uso</Secao>
    <Legenda>Narradores numa linha de lista</Legenda><Narradores />
    <Legenda>Sem excedente, 3 e 2 avatares</Legenda>
    <View style={comum.linha}><AvatarGroup people={PEOPLE} size="medium" /><AvatarGroup people={PEOPLE.slice(0, 2)} /></View>
    <TesselaProvider theme="dark" fonts={FONTS}>
      <Legenda>Tema escuro (modo Dark no quadro)</Legenda><Narradores />
    </TesselaProvider>
  </>;
}
`,exemploEm:`apps/validador/telas/AvatarGroup.tsx`,fonte:`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { Avatar, type AvatarProps } from './Avatar';
import { lineBoxMargin } from './metrics';
import { useComponentTheme, useFont } from './theme';

export type AvatarGroupPerson = Pick<AvatarProps, 'source' | 'initials'> & { id: string; name: string };
export type AvatarGroupProps = {
  /** Até três pessoas ficam visíveis; as demais entram no contador. */
  people: readonly AvatarGroupPerson[];
  size?: 'small' | 'medium';
  /** Total quando a lista contém apenas as pessoas carregadas. */
  totalCount?: number;
  /** Cor do fundo sob o grupo, usada no anel de separação. */
  ringColor?: string;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

/** Grupo compacto de pessoas, anunciado como uma frase única. */
export function AvatarGroup({ people, size = 'small', totalCount, ringColor, accessibilityLabel, style }: AvatarGroupProps) {
  const c = useComponentTheme().avatargroup;
  const font = useFont('600');
  const visible = people.slice(0, 3);
  const remaining = Math.max(0, (totalCount ?? people.length) - visible.length);
  const type = size === 'small' ? typography.labelSmall : typography.label;
  const box = size === 'small' ? 32 : 40; // vem do Figma
  const label = visible.map(person => person.name).join(', ') + (remaining ? \` e mais \${remaining}\` : '');
  return (
    <View accessible accessibilityRole="text" accessibilityLabel={accessibilityLabel ?? label} style={[styles.group, style]}>
      {visible.map((person, index) => (
        <View key={person.id} style={[styles.ring, { backgroundColor: ringColor ?? c.ring,
          marginLeft: index ? -primitives.space[8] : 0, zIndex: visible.length - index + 1 }]}>
          <Avatar size={size} shape="circle" source={person.source} initials={person.initials} />
        </View>
      ))}
      {remaining > 0 && (
        <View style={[styles.ring, { backgroundColor: ringColor ?? c.ring, marginLeft: visible.length ? -primitives.space[8] : 0 }]}>
          <View style={[styles.counter, { width: box, height: box, backgroundColor: c.more.surface }]}>
            <Text numberOfLines={1} style={[font, styles.text, { color: c.more.text, fontSize: type.fontSize,
              marginVertical: lineBoxMargin(type.fontSize, type.lineHeight) }]}>{\`+\${remaining}\`}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  group: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' },
  ring: { padding: primitives.space[2], borderRadius: componentMetrics.avatargroup.radius, overflow: 'hidden' },
  counter: { borderRadius: componentMetrics.avatargroup.radius, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  text: { includeFontPadding: false },
});
`,hash:`cbb7059afef401457283a8b2832d006fc1a00bc7ab7f5a81b53e746090347e7d`},"counter-badge":{propriedades:[{nome:`type`,tipo:`CounterBadgeType`,opcional:!0,dono:`CounterBadgeProps`,descricao:`count mostra quantas novidades; dot só avisa que há algo.`},{nome:`count`,tipo:`number`,opcional:!0,dono:`CounterBadgeProps`,descricao:`Quantidade no tipo count. Acima de 99, mostra "99+".`},{nome:`ringColor`,tipo:`string`,opcional:!0,dono:`CounterBadgeProps`,descricao:`Cor do anel: sempre a do fundo sob a marca. Padrão counterbadge/ring (bg/surface);
sobre um Icon Button Neutral, passe iconbutton/surface/neutral-default.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`CounterBadgeProps`,descricao:``}],tipos:`export type CounterBadgeType = 'count' | 'dot';

export type CounterBadgeProps = {
  /** count mostra quantas novidades; dot só avisa que há algo. */
  type?: CounterBadgeType;
  /** Quantidade no tipo count. Acima de 99, mostra "99+". */
  count?: number;
  /**
   * Cor do anel: sempre a do fundo sob a marca. Padrão counterbadge/ring (bg/surface);
   * sobre um Icon Button Neutral, passe iconbutton/surface/neutral-default.
   */
  ringColor?: string;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { View } from 'react-native';
import { Bell } from 'lucide-react-native';
import { CounterBadge, IconButton, Button, useComponentTheme } from '@tessela/ui';
import { comum, Legenda, Secao } from '../../validador/telas/_comum';

export default function Example() {
  const [count, setCount] = useState(2);
  const theme = useComponentTheme();
  return <><Secao>Contagem</Secao><View style={comum.grupo}>{[0, 1, 9, 42, 100].map(value => <CounterBadge key={value} count={value} />)}</View><Secao>Ponto</Secao><CounterBadge type="dot" /><Secao>Composição com IconButton</Secao><Legenda>Toque no sino para zerar a contagem.</Legenda><View style={comum.grupo}><View><IconButton icon={Bell} size="medium" variant="neutral" accessibilityLabel={\`Notificações: \${count} pendentes\`} onPress={() => setCount(0)} /><CounterBadge count={count} ringColor={theme.iconbutton.surface.neutralDefault} style={{ position: 'absolute', top: 5, right: 5 }} /></View><Button label="Adicionar" variant="soft" size="small" onPress={() => setCount(count + 1)} /></View></>;
}
`,exemploEm:`apps/catalogo/examples/CounterBadge.tsx`,fonte:`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { Keyframe, ReduceMotion, useReducedMotion } from 'react-native-reanimated';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT } from './motion';

export type CounterBadgeType = 'count' | 'dot';

export type CounterBadgeProps = {
  /** count mostra quantas novidades; dot só avisa que há algo. */
  type?: CounterBadgeType;
  /** Quantidade no tipo count. Acima de 99, mostra "99+". */
  count?: number;
  /**
   * Cor do anel: sempre a do fundo sob a marca. Padrão counterbadge/ring (bg/surface);
   * sobre um Icon Button Neutral, passe iconbutton/surface/neutral-default.
   */
  ringColor?: string;
  style?: StyleProp<ViewStyle>;
};

// Largura mínima e altura da marca do tipo count (vem do Figma): um dígito vira círculo.
const MARK = 18;
// Diâmetro do ponto do tipo dot (vem do Figma).
const DOT = 8;
const RADIUS = componentMetrics.counterbadge.radius;
const FONT_SIZE = typography.labelSmall.fontSize;
// Label-Small 12/14 com trim NONE: a caixa de linha do Figma, sem lineHeight.
const TEXT_BOX = lineBoxMargin(FONT_SIZE, typography.labelSmall.lineHeight);

// Ao aparecer ou mudar de número, a marca cresce de 0,9 para 1 com opacidade.
const GROW_IN = new Keyframe({
  0: { opacity: 0, transform: [{ scale: 0.9 }] },
  100: { opacity: 1, transform: [{ scale: 1 }], easing: EASE_OUT },
})
  .duration(DURATION.state)
  .reduceMotion(ReduceMotion.System);
// Com movimento reduzido, o Figma pede só a opacidade: por isso Never, e não System,
// que cortaria também o fade.
const FADE_IN = new Keyframe({
  0: { opacity: 0 },
  100: { opacity: 1, easing: EASE_OUT },
})
  .duration(DURATION.state)
  .reduceMotion(ReduceMotion.Never);

/**
 * Marca pequena sobre um ícone para avisar que há novidade. Para rótulos em texto,
 * use Badge.
 *
 * Posição: o centro da marca fica no canto de cima à direita do ícone de 20, em
 * posição absoluta, sem mudar o tamanho nem o alvo de toque do ícone.
 *
 * Leitor de tela: a marca não é lida sozinha. Ponha a quantidade no rótulo do
 * elemento que ela marca ("Família, 2 convites pendentes"; no dot, "Família, com
 * novidades").
 */
export function CounterBadge({ type = 'count', count = 0, ringColor, style }: CounterBadgeProps) {
  const c = useComponentTheme().counterbadge;
  const reduced = useReducedMotion();
  const semibold = useFont('600');
  const display = count > 99 ? '99+' : String(count);

  return (
    <Animated.View
      // A key remonta a marca quando o número muda, e a entrada toca de novo.
      key={type === 'dot' ? 'dot' : display}
      entering={reduced ? FADE_IN : GROW_IN}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[styles.ring, { backgroundColor: ringColor ?? c.ring }, style]}
    >
      {type === 'dot' ? (
        <View style={[styles.dot, { backgroundColor: c.surface }]} />
      ) : (
        <View style={[styles.mark, { backgroundColor: c.surface }]}>
          <Text
            numberOfLines={1}
            style={[semibold, styles.number, { fontSize: FONT_SIZE, color: c.text, marginVertical: TEXT_BOX }]}
          >
            {display}
          </Text>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  // Anel de space/2 na cor do fundo: separa a marca do ícone, sem sombra.
  ring: {
    alignSelf: 'flex-start',
    padding: primitives.space[2],
    borderRadius: RADIUS,
  },
  mark: {
    minWidth: MARK,
    paddingVertical: primitives.space[2],
    paddingHorizontal: primitives.space[4],
    borderRadius: RADIUS,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: DOT,
    height: DOT,
    borderRadius: RADIUS,
  },
  number: {
    includeFontPadding: false,
  },
});
`,hash:`81e291305aa9638f9e3e95ca815286921589afcf892cd2dbf0e86d63d72249e8`},"mini-player":{propriedades:[{nome:`title`,tipo:`string`,opcional:!1,dono:`MiniPlayerProps`,descricao:``},{nome:`narrator`,tipo:`string`,opcional:!1,dono:`MiniPlayerProps`,descricao:``},{nome:`cover`,tipo:`ImageSourcePropType`,opcional:!0,dono:`MiniPlayerProps`,descricao:``},{nome:`progress`,tipo:`number`,opcional:!1,dono:`MiniPlayerProps`,descricao:`Fração tocada, entre 0 e 1. O consumidor controla o áudio.`},{nome:`playing`,tipo:`boolean`,opcional:!0,dono:`MiniPlayerProps`,descricao:``},{nome:`visible`,tipo:`boolean`,opcional:!0,dono:`MiniPlayerProps`,descricao:``},{nome:`onOpen`,tipo:`() => void`,opcional:!1,dono:`MiniPlayerProps`,descricao:``},{nome:`onPlayingChange`,tipo:`(playing: boolean) => void`,opcional:!1,dono:`MiniPlayerProps`,descricao:``},{nome:`onClose`,tipo:`() => void`,opcional:!0,dono:`MiniPlayerProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`MiniPlayerProps`,descricao:``}],tipos:`export type MiniPlayerProps = {
  title: string;
  narrator: string;
  cover?: ImageSourcePropType;
  /** Fração tocada, entre 0 e 1. O consumidor controla o áudio. */
  progress: number;
  playing?: boolean;
  visible?: boolean;
  onOpen: () => void;
  onPlayingChange: (playing: boolean) => void;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { BottomNavigation, Button } from '@tessela/ui';
import { MiniPlayer } from '@tessela/ui';
import { Legenda, Secao } from './_comum';

export default function TelaMiniPlayer() {
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState('hoje');
  return <>
    <Secao>Em uso</Secao>
    <Legenda>Player sobre a navegação · interativo</Legenda>
    <View style={{ gap: 8, alignItems: 'center' }}>
      <MiniPlayer title="Laurinha e a viagem para a lua" narrator="Vovó Lourdes" progress={106 / 169}
        playing={playing} visible={visible} onPlayingChange={setPlaying} onClose={() => setVisible(false)}
        onOpen={() => Alert.alert('Abrir história', 'O aplicativo consumidor abre a leitura.')} />
      <BottomNavigation activeKey={tab} onChange={setTab} tabs={[
        { key: 'hoje', label: 'Hoje', icon: 'house' }, { key: 'estante', label: 'Estante', icon: 'library-big' },
        { key: 'criar', label: 'Criar', icon: 'book-open-text' }, { key: 'familia', label: 'Família', icon: 'users' },
        { key: 'perfil', label: 'Perfil', icon: 'user-round' },
      ]} />
    </View>
    {!visible ? <Button label="Mostrar player" size="medium" onPress={() => setVisible(true)} /> : null}
    <Secao>Estados</Secao>
    <Legenda>Pausado</Legenda>
    <MiniPlayer title="Laurinha e a viagem para a lua" narrator="Vovó Lourdes" progress={106 / 169}
      playing={false} onPlayingChange={setPlaying} onOpen={() => {}} onClose={() => {}} />
    <Legenda>Sem ação de fechar · progresso completo</Legenda>
    <MiniPlayer title="Uma história inteira" narrator="Papai" progress={1} playing={false}
      onPlayingChange={setPlaying} onOpen={() => {}} />
  </>;
}
`,exemploEm:`apps/validador/telas/MiniPlayer.tsx`,fonte:`import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import type { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import Animated, { Keyframe, ReduceMotion, useReducedMotion } from 'react-native-reanimated';
import { Pause, Play, X } from 'lucide-react-native';
import { componentMetrics, primitives, shadows, typography } from '@tessela/tokens';
import { Avatar } from './Avatar';
import { IconButton } from './IconButton';
import { useComponentTheme, useFont } from './theme';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT } from './motion';

export type MiniPlayerProps = {
  title: string;
  narrator: string;
  cover?: ImageSourcePropType;
  /** Fração tocada, entre 0 e 1. O consumidor controla o áudio. */
  progress: number;
  playing?: boolean;
  visible?: boolean;
  onOpen: () => void;
  onPlayingChange: (playing: boolean) => void;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
};

// Figma 129:17: 343 × 70, borda incluída no auto-layout (capa em x=13).
const HEIGHT = 70;
function transition(enter: boolean, reduced: boolean) {
  return new Keyframe({
    0: { opacity: enter ? 0 : 1, transform: [{ translateY: !enter || reduced ? 0 : HEIGHT }] },
    100: { opacity: enter ? 1 : 0, transform: [{ translateY: enter || reduced ? 0 : HEIGHT }], easing: EASE_OUT },
  }).duration(enter ? DURATION.move : DURATION.exit).reduceMotion(ReduceMotion.Never);
}
const ENTER = transition(true, false);
const EXIT = transition(false, false);
const FADE_IN = transition(true, true);
const FADE_OUT = transition(false, true);

/** Player compacto. Posicione-o 8 acima da navegação, fora da área rolável. */
export function MiniPlayer({ title, narrator, cover, progress, playing = true, visible = true,
  onOpen, onPlayingChange, onClose, style }: MiniPlayerProps) {
  const c = useComponentTheme();
  const medium = useFont('500');
  const semibold = useFont('600');
  const reduced = useReducedMotion();
  const value = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0));
  if (!visible) return null;
  return (
    <Animated.View entering={reduced ? FADE_IN : ENTER} exiting={reduced ? FADE_OUT : EXIT}
      style={[styles.player, { backgroundColor: c.miniplayer.surface, borderColor: c.miniplayer.border },
        Platform.OS === 'android' ? shadows.md.android : shadows.md.ios, style]}>
      <Pressable accessibilityRole="button" accessibilityLabel={\`Abrir história: \${title}, \${narrator}\`}
        accessibilityValue={{ text: \`\${Math.round(value * 100)}% reproduzido\` }} onPress={onOpen} style={styles.body}>
        {cover ? <Avatar source={cover} size="medium" shape="circle" /> :
          <View style={[styles.cover, { backgroundColor: c.avatar.surface }]} />}
        <View style={styles.texts}>
          <Text numberOfLines={1} style={[semibold, styles.title, { color: c.miniplayer.text.title }]}>{title}</Text>
          <Text numberOfLines={1} style={[medium, styles.narrator, { color: c.miniplayer.text.subtitle }]}>{narrator}</Text>
          <View style={[styles.track, { backgroundColor: c.miniplayer.progress.track }]}>
            <View style={[styles.fill, { width: \`\${value * 100}%\`, backgroundColor: c.miniplayer.progress.fill }]} />
          </View>
        </View>
      </Pressable>
      <IconButton size="small" variant="primary" icon={playing ? Pause : Play}
        accessibilityLabel={playing ? 'Pausar história' : 'Reproduzir história'} onPress={() => onPlayingChange(!playing)} />
      {onClose ? <IconButton size="small" variant="neutral" icon={X} accessibilityLabel="Fechar player" onPress={onClose} /> : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  player: { width: 343, maxWidth: '100%', minHeight: HEIGHT, flexDirection: 'row', alignItems: 'center',
    padding: primitives.space[12], gap: primitives.space[12], borderRadius: componentMetrics.miniplayer.radius,
    borderWidth: componentMetrics.miniplayer.stroke.container },
  body: { flex: 1, minWidth: 0, minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: primitives.space[12] },
  cover: { width: 40, height: 40, borderRadius: primitives.radius.full },
  texts: { flex: 1, minWidth: 0, gap: primitives.space[2] },
  title: { fontSize: typography.label.fontSize, includeFontPadding: false,
    marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight) },
  narrator: { fontSize: typography.caption.fontSize, lineHeight: typography.caption.lineHeight, includeFontPadding: false },
  track: { height: primitives.space[4], borderRadius: primitives.radius.full, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: primitives.radius.full },
});
`,hash:`956f645d2998a48edc74f948c158f797b77d67b278dc89ca4fadc6c249056bd1`},reader:JSON.parse(`{"propriedades":[{"nome":"title","tipo":"string","opcional":false,"dono":"ReaderHeaderProps","descricao":""},{"nome":"chapter","tipo":"string","opcional":false,"dono":"ReaderHeaderProps","descricao":""},{"nome":"cover","tipo":"ImageSourcePropType","opcional":true,"dono":"ReaderHeaderProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ReaderHeaderProps","descricao":""},{"nome":"progress","tipo":"number","opcional":false,"dono":"ReaderProgressProps","descricao":""},{"nome":"elapsed","tipo":"string","opcional":false,"dono":"ReaderProgressProps","descricao":""},{"nome":"remaining","tipo":"string","opcional":false,"dono":"ReaderProgressProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ReaderProgressProps","descricao":""},{"nome":"level","tipo":"number","opcional":false,"dono":"ReaderVolumeProps","descricao":""},{"nome":"onLevelChange","tipo":"(level: number) => void","opcional":true,"dono":"ReaderVolumeProps","descricao":"Toque e acessibilidade publicam imediatamente; arraste publica uma vez ao soltar."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ReaderVolumeProps","descricao":""},{"nome":"onExit","tipo":"() => void","opcional":true,"dono":"ReaderActionsProps","descricao":""},{"nome":"onChapters","tipo":"() => void","opcional":true,"dono":"ReaderActionsProps","descricao":""},{"nome":"onRestart","tipo":"() => void","opcional":true,"dono":"ReaderActionsProps","descricao":""},{"nome":"onFavorite","tipo":"() => void","opcional":true,"dono":"ReaderActionsProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ReaderActionsProps","descricao":""},{"nome":"text","tipo":"string","opcional":false,"dono":"ReaderParagraphProps","descricao":"Texto do parágrafo."},{"nome":"state","tipo":"ReaderParagraphState","opcional":true,"dono":"ReaderParagraphProps","descricao":"Padrão do Figma: current."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ReaderParagraphProps","descricao":""},{"nome":"playing","tipo":"boolean","opcional":false,"dono":"ReaderControlsProps","descricao":"Tocando: o botão do meio mostra o pause. Pausado: mostra o play."},{"nome":"onPlay","tipo":"() => void","opcional":true,"dono":"ReaderControlsProps","descricao":"Toque no play, com a narração pausada."},{"nome":"onPause","tipo":"() => void","opcional":true,"dono":"ReaderControlsProps","descricao":"Toque no pause, com a narração tocando."},{"nome":"onRewind","tipo":"() => void","opcional":true,"dono":"ReaderControlsProps","descricao":""},{"nome":"onForward","tipo":"() => void","opcional":true,"dono":"ReaderControlsProps","descricao":""},{"nome":"rewindLabel","tipo":"string","opcional":true,"dono":"ReaderControlsProps","descricao":"Nome do voltar para leitores de tela."},{"nome":"forwardLabel","tipo":"string","opcional":true,"dono":"ReaderControlsProps","descricao":"Nome do avançar para leitores de tela."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ReaderControlsProps","descricao":""}],"tipos":"export type ReaderHeaderProps = {\\n  title: string;\\n  chapter: string;\\n  cover?: ImageSourcePropType;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ReaderProgressProps = {\\n  progress: number;\\n  elapsed: string;\\n  remaining: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ReaderVolumeProps = {\\n  level: number;\\n  /** Toque e acessibilidade publicam imediatamente; arraste publica uma vez ao soltar. */\\n  onLevelChange?: (level: number) => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ReaderActionsProps = {\\n  onExit?: () => void;\\n  onChapters?: () => void;\\n  onRestart?: () => void;\\n  onFavorite?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n/** current: o parágrafo que a voz está lendo. context: os de antes e depois. */\\nexport type ReaderParagraphState = 'current' | 'context';\\n\\nexport type ReaderParagraphProps = {\\n  /** Texto do parágrafo. */\\n  text: string;\\n  /** Padrão do Figma: current. */\\n  state?: ReaderParagraphState;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ReaderControlsProps = {\\n  /** Tocando: o botão do meio mostra o pause. Pausado: mostra o play. */\\n  playing: boolean;\\n  /** Toque no play, com a narração pausada. */\\n  onPlay?: () => void;\\n  /** Toque no pause, com a narração tocando. */\\n  onPause?: () => void;\\n  onRewind?: () => void;\\n  onForward?: () => void;\\n  /** Nome do voltar para leitores de tela. */\\n  rewindLabel?: string;\\n  /** Nome do avançar para leitores de tela. */\\n  forwardLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, View } from 'react-native';\\nimport Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';\\nimport {\\n  ReaderActions,\\n  ReaderControls,\\n  ReaderHeader,\\n  ReaderParagraph,\\n  ReaderProgress,\\n  ReaderVolume,\\n  TesselaProvider,\\n  useTheme,\\n} from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\n// Mesmos textos das variantes (138:243, 138:427) e do \\"Em uso\\" (140:119) do Figma.\\nconst PADRAO =\\n  'Toda manhã era aquela correria: mochilas jogadas no chão, roupas espalhadas pelo sofá e pais exaustos correndo de um lado para o outro.';\\nconst HISTORIA = [\\n  'Na casa da família Nogueira, os dias pareciam um verdadeiro furacão.',\\n  'Toda manhã era aquela correria: mochilas jogadas no chão, roupas espalhadas pelo sofá e pais exaustos correndo de um lado para o outro para deixar tudo pronto.',\\n  'Os quatro irmãos, Alice, de 13 anos, os gêmeos Bruno e Camila, de 10, e o caçula Dudu, de 6, sempre achavam algo mais divertido para fazer do que ajudar nas tarefas de casa.',\\n];\\n// Área do texto na tela de 852 do Figma.\\nconst AREA = 410;\\n\\n// Esmaecimento do Figma: o texto some nos 30% de cima e nos 35% de baixo. Sem\\n// MaskedView, uma camada no bg/base da tela faz o mesmo sobre fundo liso.\\nfunction Esmaecimento() {\\n  const fundo = useTheme().bg.base;\\n  return (\\n    <View pointerEvents=\\"none\\" style={styles.camada}>\\n      <Svg width=\\"100%\\" height=\\"100%\\">\\n        <Defs>\\n          <LinearGradient id=\\"esmaecimento\\" x1=\\"0\\" y1=\\"0\\" x2=\\"0\\" y2=\\"1\\">\\n            <Stop offset=\\"0\\" stopColor={fundo} stopOpacity={1} />\\n            <Stop offset=\\"0.3\\" stopColor={fundo} stopOpacity={0} />\\n            <Stop offset=\\"0.65\\" stopColor={fundo} stopOpacity={0} />\\n            <Stop offset=\\"1\\" stopColor={fundo} stopOpacity={1} />\\n          </LinearGradient>\\n        </Defs>\\n        <Rect x={0} y={0} width=\\"100%\\" height=\\"100%\\" fill=\\"url(#esmaecimento)\\" />\\n      </Svg>\\n    </View>\\n  );\\n}\\n\\nfunction TelaDeLeitura() {\\n  const theme = useTheme();\\n  const [atual, setAtual] = useState(1);\\n  const [tocando, setTocando] = useState(true);\\n  const [volume, setVolume] = useState(212 / 287);\\n  return (\\n    <View style={[comum.bordaABorda, styles.tela, { backgroundColor: theme.bg.base }]}>\\n      <ReaderHeader title=\\"A Grande Greve da Família\\" chapter=\\"Capítulo 01 de 12\\" />\\n      <View style={styles.area}>\\n        {HISTORIA.map((texto, i) => (\\n          <ReaderParagraph key={i} text={texto} state={i === atual ? 'current' : 'context'} />\\n        ))}\\n        <Esmaecimento />\\n      </View>\\n      <View style={styles.player}>\\n        <ReaderProgress progress={155 / 361} elapsed=\\"0:29\\" remaining=\\"-2:52\\" />\\n        <ReaderControls\\n          playing={tocando}\\n          onPlay={() => setTocando(true)}\\n          onPause={() => setTocando(false)}\\n          onRewind={() => setAtual((i) => Math.max(i - 1, 0))}\\n          onForward={() => setAtual((i) => Math.min(i + 1, HISTORIA.length - 1))}\\n        />\\n        <ReaderVolume level={volume} onLevelChange={setVolume} />\\n      </View>\\n      <ReaderActions onRestart={() => setAtual(0)} />\\n    </View>\\n  );\\n}\\n\\nexport default function TelaReader() {\\n  const [tocando, setTocando] = useState(true);\\n  return (\\n    <>\\n      <Secao>Reader Paragraph</Secao>\\n      <Legenda>State=Current (Reading, 20/27)</Legenda>\\n      <ReaderParagraph text={PADRAO} />\\n      <Legenda>State=Context (Reading Small, 16/23)</Legenda>\\n      <ReaderParagraph text={PADRAO} state=\\"context\\" />\\n\\n      <Secao>Reader Controls</Secao>\\n      <Legenda>State=Playing</Legenda>\\n      <ReaderControls playing />\\n      <Legenda>State=Paused</Legenda>\\n      <ReaderControls playing={false} />\\n      <Legenda>toque no meio para tocar e pausar</Legenda>\\n      <ReaderControls playing={tocando} onPlay={() => setTocando(true)} onPause={() => setTocando(false)} />\\n\\n      <Secao>Em uso</Secao>\\n      <Legenda>tela de leitura no modo Dark; voltar e avançar trocam o parágrafo atual</Legenda>\\n      <Legenda>Header, Progress, Volume e Actions usam os componentes do pacote</Legenda>\\n      <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n        <TelaDeLeitura />\\n      </TesselaProvider>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  // Tela do Figma: space/32 em cima e embaixo e entre os blocos, space/16 nas laterais.\\n  tela: {\\n    paddingVertical: primitives.space[32],\\n    paddingHorizontal: primitives.space[16],\\n    gap: primitives.space[32],\\n  },\\n  // Parágrafos centrados na área, space/24 entre eles; o que passa das bordas some.\\n  area: {\\n    height: AREA,\\n    justifyContent: 'center',\\n    gap: primitives.space[24],\\n    overflow: 'hidden',\\n  },\\n  camada: {\\n    position: 'absolute',\\n    top: 0,\\n    right: 0,\\n    bottom: 0,\\n    left: 0,\\n  },\\n  player: {\\n    gap: primitives.space[32],\\n  },\\n});\\n","exemploEm":"apps/validador/telas/Reader.tsx","fonte":"import React, { useEffect, useMemo, useReducer, useRef } from 'react';\\nimport { Image, Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { AccessibilityActionEvent, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { Keyframe, LayoutAnimationConfig, ReduceMotion, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';\\nimport { Gesture, GestureDetector } from 'react-native-gesture-handler';\\nimport { scheduleOnRN } from 'react-native-worklets';\\nimport Svg, { Path, Rect } from 'react-native-svg';\\nimport { Heart, List, RotateCcw, Volume, Volume2 } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { DURATION, EASE_OUT } from './motion';\\nimport { lineBoxMargin } from './metrics';\\nimport { Button } from './Button';\\nimport { IconButton } from './IconButton';\\n\\nexport type ReaderHeaderProps = {\\n  title: string;\\n  chapter: string;\\n  cover?: ImageSourcePropType;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport function ReaderHeader({ title, chapter, cover, style }: ReaderHeaderProps) {\\n  const c = useComponentTheme();\\n  const semibold = useFont('600');\\n  const medium = useFont('500');\\n\\n  return (\\n    <View style={[styles.header, style]}>\\n      <View style={[styles.cover, { backgroundColor: c.avatar.imagePlaceholder }]}>\\n        {cover ? <Image source={cover} resizeMode=\\"cover\\" style={styles.cover} /> : null}\\n      </View>\\n      <View style={styles.headerTexts}>\\n        <Text\\n          numberOfLines={1}\\n          style={[\\n            styles.text,\\n            semibold,\\n            {\\n              fontSize: typography.label.fontSize,\\n              marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight),\\n              color: c.reader.text.title,\\n            },\\n          ]}\\n        >\\n          {title}\\n        </Text>\\n        <Text\\n          style={[\\n            styles.text,\\n            medium,\\n            {\\n              fontSize: typography.bodyLarge.fontSize,\\n              lineHeight: typography.bodyLarge.lineHeight,\\n              color: c.reader.text.meta,\\n            },\\n          ]}\\n        >\\n          {chapter}\\n        </Text>\\n      </View>\\n    </View>\\n  );\\n}\\n\\nexport type ReaderProgressProps = {\\n  progress: number;\\n  elapsed: string;\\n  remaining: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport function ReaderProgress({ progress, elapsed, remaining, style }: ReaderProgressProps) {\\n  const c = useComponentTheme().reader;\\n  const medium = useFont('500');\\n  const value = Math.max(0, Math.min(1, progress));\\n  const timeStyle = [\\n    styles.text,\\n    medium,\\n    { fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight, color: c.text.time },\\n  ];\\n\\n  return (\\n    <View style={[styles.progress, style]}>\\n      <View\\n        accessibilityRole=\\"progressbar\\"\\n        accessibilityValue={{ min: 0, max: 100, now: Math.round(value * 100) }}\\n        style={[styles.progressTrack, { backgroundColor: c.track }]}\\n      >\\n        <View style={[styles.progressFill, { width: \`\${value * 100}%\`, backgroundColor: c.trackFill }]} />\\n      </View>\\n      <View style={styles.times}>\\n        <Text style={timeStyle}>{elapsed}</Text>\\n        <Text style={timeStyle}>{remaining}</Text>\\n      </View>\\n    </View>\\n  );\\n}\\n\\nexport type ReaderVolumeProps = {\\n  level: number;\\n  /** Toque e acessibilidade publicam imediatamente; arraste publica uma vez ao soltar. */\\n  onLevelChange?: (level: number) => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst VOLUME_THUMB = 18;\\nconst VOLUME_TOUCH = 44;\\nconst VOLUME_SPRING = { duration: 300, dampingRatio: 0.8, reduceMotion: ReduceMotion.System };\\n\\nfunction volumeClamp(value: number) {\\n  'worklet';\\n  return Math.max(0, Math.min(1, value));\\n}\\n\\nexport function ReaderVolume({ level, onLevelChange, style }: ReaderVolumeProps) {\\n  const c = useComponentTheme().reader;\\n  const value = volumeClamp(level);\\n  const measuredWidth = useRef(0);\\n  const width = useSharedValue(0);\\n  const offset = useSharedValue(0);\\n  const dragging = useSharedValue(false);\\n  const controlled = useSharedValue(value);\\n  const [commitRevision, reconcile] = useReducer((revision: number) => revision + 1, 0);\\n  const changeRef = useRef(onLevelChange);\\n  changeRef.current = onLevelChange;\\n  const emit = useRef((next: number) => {\\n    changeRef.current?.(next);\\n    // Uma reconciliação por gesto, após o callback: inclui props inalteradas ou rejeitadas.\\n    reconcile();\\n  }).current;\\n  const change = (next: number) => changeRef.current?.(Math.round(volumeClamp(next) * 100) / 100);\\n  useEffect(() => {\\n    controlled.value = value;\\n    if (!dragging.value && measuredWidth.current > 0) {\\n      offset.value = withSpring(value * Math.max(measuredWidth.current - VOLUME_THUMB, 0), VOLUME_SPRING);\\n    }\\n  }, [value, commitRevision, controlled, dragging, offset]);\\n\\n  const gesture = useMemo(() => {\\n    const move = (x: number) => {\\n      'worklet';\\n      offset.value = Math.max(0, Math.min(Math.max(width.value - VOLUME_THUMB, 0), x - VOLUME_THUMB / 2));\\n    };\\n    const commit = () => {\\n      'worklet';\\n      const travel = width.value - VOLUME_THUMB;\\n      if (travel <= 0) return;\\n      const next = Math.round(volumeClamp(offset.value / travel) * 100) / 100;\\n      offset.value = withSpring(next * travel, VOLUME_SPRING);\\n      scheduleOnRN(emit, next);\\n    };\\n    const pan = Gesture.Pan().activeOffsetX([-4, 4]).failOffsetY([-10, 10])\\n      .onStart(event => {\\n        'worklet';\\n        dragging.value = true;\\n        move(event.x);\\n      })\\n      .onUpdate(event => {\\n        'worklet';\\n        move(event.x);\\n      })\\n      .onEnd((_event, success) => {\\n        'worklet';\\n        if (success) commit();\\n      })\\n      .onFinalize((_event, success) => {\\n        'worklet';\\n        dragging.value = false;\\n        if (!success) offset.value = withSpring(controlled.value * Math.max(width.value - VOLUME_THUMB, 0), VOLUME_SPRING);\\n      });\\n    const tap = Gesture.Tap().maxDistance(4).onEnd((event, success) => {\\n      'worklet';\\n      if (!success) return;\\n      move(event.x);\\n      commit();\\n    });\\n    return Gesture.Exclusive(pan, tap);\\n  }, [controlled, dragging, emit, offset, width]);\\n  const fillStyle = useAnimatedStyle(() => {\\n    'worklet';\\n    return { transform: [{ translateX: offset.value + VOLUME_THUMB / 2 - width.value }] };\\n  });\\n  const thumbStyle = useAnimatedStyle(() => {\\n    'worklet';\\n    return { opacity: width.value > 0 ? 1 : 0, transform: [{ translateX: offset.value }] };\\n  });\\n  const nudge = (direction: -1 | 1) => change(value + direction * 0.1);\\n  const onAccessibilityAction = (event: AccessibilityActionEvent) => {\\n    if (event.nativeEvent.actionName === 'increment') nudge(1);\\n    if (event.nativeEvent.actionName === 'decrement') nudge(-1);\\n  };\\n  const iconProps = {\\n    size: primitives.iconSize.md,\\n    color: c.icon,\\n    strokeWidth: primitives.stroke.icon,\\n    absoluteStrokeWidth: true,\\n  };\\n\\n  return (\\n    <View\\n      accessible\\n      accessibilityRole=\\"adjustable\\"\\n      accessibilityLabel=\\"Volume\\"\\n      accessibilityValue={{ min: 0, max: 100, now: Math.round(value * 100) }}\\n      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}\\n      onAccessibilityAction={onAccessibilityAction}\\n      style={[styles.volume, style]}\\n    >\\n      <Pressable accessible={false} style={styles.volumeButton} onPress={() => nudge(-1)}>\\n        <Volume {...iconProps} />\\n      </Pressable>\\n      <GestureDetector gesture={gesture}>\\n        <View\\n          accessible={false}\\n          onLayout={(event) => {\\n            const measured = event.nativeEvent.layout.width;\\n            measuredWidth.current = measured;\\n            width.value = measured;\\n            offset.value = value * Math.max(measured - VOLUME_THUMB, 0);\\n          }}\\n          style={styles.volumeTrack}\\n        >\\n          <View style={[styles.volumeRail, { backgroundColor: c.track }]}>\\n            <Animated.View style={[styles.volumeFill, { backgroundColor: c.trackFill }, fillStyle]} />\\n          </View>\\n          <Animated.View style={[styles.volumeThumb, { backgroundColor: c.trackFill }, thumbStyle]} />\\n        </View>\\n      </GestureDetector>\\n      <Pressable accessible={false} style={styles.volumeButton} onPress={() => nudge(1)}>\\n        <Volume2 {...iconProps} />\\n      </Pressable>\\n    </View>\\n  );\\n}\\n\\nexport type ReaderActionsProps = {\\n  onExit?: () => void;\\n  onChapters?: () => void;\\n  onRestart?: () => void;\\n  onFavorite?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport function ReaderActions({ onExit, onChapters, onRestart, onFavorite, style }: ReaderActionsProps) {\\n  return (\\n    <View style={[styles.actions, style]}>\\n      <Button label=\\"Sair\\" accessibilityLabel=\\"Sair\\" onPress={onExit} style={styles.exit} />\\n      <IconButton accessibilityLabel=\\"Capítulos\\" icon={List} variant=\\"neutral\\" onPress={onChapters} />\\n      <IconButton accessibilityLabel=\\"Recomeçar\\" icon={RotateCcw} variant=\\"neutral\\" onPress={onRestart} />\\n      <IconButton accessibilityLabel=\\"Favoritar\\" icon={Heart} variant=\\"neutral\\" onPress={onFavorite} />\\n    </View>\\n  );\\n}\\n\\n/** current: o parágrafo que a voz está lendo. context: os de antes e depois. */\\nexport type ReaderParagraphState = 'current' | 'context';\\n\\nexport type ReaderParagraphProps = {\\n  /** Texto do parágrafo. */\\n  text: string;\\n  /** Padrão do Figma: current. */\\n  state?: ReaderParagraphState;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type ReaderControlsProps = {\\n  /** Tocando: o botão do meio mostra o pause. Pausado: mostra o play. */\\n  playing: boolean;\\n  /** Toque no play, com a narração pausada. */\\n  onPlay?: () => void;\\n  /** Toque no pause, com a narração tocando. */\\n  onPause?: () => void;\\n  onRewind?: () => void;\\n  onForward?: () => void;\\n  /** Nome do voltar para leitores de tela. */\\n  rewindLabel?: string;\\n  /** Nome do avançar para leitores de tela. */\\n  forwardLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n/**\\n * Parágrafo da tela de leitura. O atual fica em Reading (20/27) e destaque; os outros\\n * em Reading Small (16/23), mais apagados. Entre parágrafos, space/24.\\n */\\nexport function ReaderParagraph({ text, state = 'current', style }: ReaderParagraphProps) {\\n  const c = useComponentTheme().reader;\\n  const semibold = useFont('600');\\n  const current = state === 'current';\\n  const type = current ? typography.reading : typography.readingSmall;\\n\\n  return (\\n    <View style={style}>\\n      <Text\\n        style={[\\n          semibold,\\n          styles.text,\\n          {\\n            fontSize: type.fontSize,\\n            // As duas entrelinhas são maiores que a linha natural da Puffin: lineHeight\\n            // funciona, e o React Native centraliza cada linha como o Figma.\\n            lineHeight: type.lineHeight,\\n            color: current ? c.text.current : c.text.other,\\n          },\\n        ]}\\n      >\\n        {text}\\n      </Text>\\n    </View>\\n  );\\n}\\n\\n// Ícones preenchidos do Figma (138:125, 138:131, 138:134, 138:128), com os cantos\\n// arredondados já aplicados. Não são do Lucide.\\nconst SKIP_WIDTH = 43; // vem do Figma\\nconst SKIP_HEIGHT = primitives.iconSize.lg;\\nconst PLAY_SIZE = 48; // vem do Figma\\nconst REWIND =\\n  'M21.3 3.422C21.3 1.892 19.651 0.929 18.318 1.68L3.093 10.258C1.735 11.022 1.735 12.978 3.093 13.742L18.318 22.32' +\\n  'C19.651 23.071 21.3 22.108 21.3 20.578L21.3 3.422Z' +\\n  'M42.7 3.422C42.7 1.892 41.051 0.929 39.718 1.68L24.493 10.258C23.135 11.022 23.135 12.978 24.493 13.742L39.718 22.32' +\\n  'C41.051 23.071 42.7 22.108 42.7 20.578L42.7 3.422Z';\\nconst FORWARD =\\n  'M0 3.422C0 1.892 1.648 0.929 2.982 1.68L18.207 10.258C19.565 11.022 19.565 12.978 18.207 13.742L2.982 22.32' +\\n  'C1.648 23.071 0 22.108 0 20.578L0 3.422Z' +\\n  'M21.4 3.422C21.4 1.892 23.048 0.929 24.382 1.68L39.607 10.258C40.965 11.022 40.965 12.978 39.607 13.742L24.382 22.32' +\\n  'C23.048 23.071 21.4 22.108 21.4 20.578L21.4 3.422Z';\\nconst PLAY =\\n  'M12 9.663C12 8.081 13.75 7.125 15.082 7.981L37.383 22.318C38.608 23.105 38.608 24.895 37.383 25.682L15.082 40.019' +\\n  'C13.75 40.875 12 39.919 12 38.337L12 9.663Z';\\n// Pause: duas barras de 10 × 36 com radius/xs.\\nconst PAUSE_X = [10, 28];\\nconst PAUSE_BAR = { y: 6, width: 10, height: 36, r: primitives.radius.xs };\\n// Alvo de toque mínimo de 48 (documentação do Figma): o voltar e o avançar têm 43 × 24.\\nconst TOUCH = 48; // vem do Figma\\nconst SKIP_SLOP = {\\n  top: (TOUCH - SKIP_HEIGHT) / 2,\\n  bottom: (TOUCH - SKIP_HEIGHT) / 2,\\n  left: (TOUCH - SKIP_WIDTH) / 2,\\n  right: (TOUCH - SKIP_WIDTH) / 2,\\n};\\n\\n// Troca play/pause: o novo entra de 90% com fade, o antigo só some (padrão do Input).\\nconst ICON_IN = new Keyframe({\\n  0: { opacity: 0, transform: [{ scale: 0.9 }] },\\n  100: { opacity: 1, transform: [{ scale: 1 }], easing: EASE_OUT },\\n})\\n  .duration(DURATION.state)\\n  .reduceMotion(ReduceMotion.System);\\nconst ICON_OUT = new Keyframe({\\n  0: { opacity: 1 },\\n  100: { opacity: 0, easing: EASE_OUT },\\n})\\n  .duration(DURATION.exit)\\n  .reduceMotion(ReduceMotion.System);\\n\\n/** Voltar, tocar ou pausar e avançar da narração. A reprodução fica com o app. */\\nexport function ReaderControls({\\n  playing,\\n  onPlay,\\n  onPause,\\n  onRewind,\\n  onForward,\\n  rewindLabel = 'Voltar 15 segundos',\\n  forwardLabel = 'Avançar 15 segundos',\\n  style,\\n}: ReaderControlsProps) {\\n  const color = useComponentTheme().reader.control;\\n\\n  return (\\n    <View style={[styles.controls, style]}>\\n      <Pressable\\n        accessibilityRole=\\"button\\"\\n        accessibilityLabel={rewindLabel}\\n        onPress={onRewind}\\n        hitSlop={SKIP_SLOP}\\n        style={styles.skip}\\n      >\\n        <Svg width={SKIP_WIDTH} height={SKIP_HEIGHT} viewBox={\`0 0 \${SKIP_WIDTH} \${SKIP_HEIGHT}\`}>\\n          <Path d={REWIND} fill={color} />\\n        </Svg>\\n      </Pressable>\\n\\n      <Pressable\\n        accessibilityRole=\\"button\\"\\n        accessibilityLabel={playing ? 'Pausar' : 'Tocar'}\\n        onPress={playing ? onPause : onPlay}\\n        style={styles.play}\\n      >\\n        {/* skipEntering: o ícone que já nasce na tela não anima; só a troca pelo toque. */}\\n        <LayoutAnimationConfig skipEntering>\\n          <Animated.View\\n            key={playing ? 'pause' : 'play'}\\n            entering={ICON_IN}\\n            exiting={ICON_OUT}\\n            style={styles.playLayer}\\n          >\\n            <Svg width={PLAY_SIZE} height={PLAY_SIZE} viewBox={\`0 0 \${PLAY_SIZE} \${PLAY_SIZE}\`}>\\n              {playing ? (\\n                PAUSE_X.map((x) => (\\n                  <Rect\\n                    key={x}\\n                    x={x}\\n                    y={PAUSE_BAR.y}\\n                    width={PAUSE_BAR.width}\\n                    height={PAUSE_BAR.height}\\n                    rx={PAUSE_BAR.r}\\n                    ry={PAUSE_BAR.r}\\n                    fill={color}\\n                  />\\n                ))\\n              ) : (\\n                <Path d={PLAY} fill={color} />\\n              )}\\n            </Svg>\\n          </Animated.View>\\n        </LayoutAnimationConfig>\\n      </Pressable>\\n\\n      <Pressable\\n        accessibilityRole=\\"button\\"\\n        accessibilityLabel={forwardLabel}\\n        onPress={onForward}\\n        hitSlop={SKIP_SLOP}\\n        style={styles.skip}\\n      >\\n        <Svg width={SKIP_WIDTH} height={SKIP_HEIGHT} viewBox={\`0 0 \${SKIP_WIDTH} \${SKIP_HEIGHT}\`}>\\n          <Path d={FORWARD} fill={color} />\\n        </Svg>\\n      </Pressable>\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  header: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[12],\\n  },\\n  cover: {\\n    width: 56,\\n    height: 56,\\n    borderRadius: componentMetrics.avatar.radius[56],\\n    overflow: 'hidden',\\n  },\\n  headerTexts: {\\n    flex: 1,\\n    gap: primitives.space[4],\\n  },\\n  progress: {\\n    gap: primitives.space[8],\\n  },\\n  progressTrack: {\\n    height: 6,\\n    borderRadius: primitives.radius.full,\\n    overflow: 'hidden',\\n  },\\n  progressFill: {\\n    height: 6,\\n    borderRadius: primitives.radius.full,\\n  },\\n  times: {\\n    flexDirection: 'row',\\n    justifyContent: 'space-between',\\n  },\\n  volume: {\\n    minHeight: VOLUME_TOUCH,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[8],\\n  },\\n  volumeTrack: {\\n    flex: 1,\\n    minWidth: VOLUME_TOUCH,\\n    height: VOLUME_TOUCH,\\n    justifyContent: 'center',\\n  },\\n  volumeButton: {\\n    width: VOLUME_TOUCH,\\n    height: VOLUME_TOUCH,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  volumeRail: {\\n    height: 6,\\n    borderRadius: primitives.radius.full,\\n    overflow: 'hidden',\\n  },\\n  volumeFill: {\\n    width: '100%',\\n    height: 6,\\n  },\\n  volumeThumb: {\\n    position: 'absolute',\\n    left: 0,\\n    top: (VOLUME_TOUCH - VOLUME_THUMB) / 2,\\n    width: VOLUME_THUMB,\\n    height: VOLUME_THUMB,\\n    borderRadius: primitives.radius.full,\\n  },\\n  actions: {\\n    flexDirection: 'row',\\n    gap: primitives.space[8],\\n  },\\n  exit: {\\n    flex: 1,\\n  },\\n  text: {\\n    includeFontPadding: false,\\n  },\\n  controls: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    alignSelf: 'center',\\n    gap: primitives.space[48],\\n  },\\n  skip: {\\n    width: SKIP_WIDTH,\\n    height: SKIP_HEIGHT,\\n  },\\n  play: {\\n    width: PLAY_SIZE,\\n    height: PLAY_SIZE,\\n  },\\n  playLayer: {\\n    position: 'absolute',\\n    top: 0,\\n    right: 0,\\n    bottom: 0,\\n    left: 0,\\n  },\\n});\\n","hash":"34b6ec22335735cbcfbd09e4c1b468319f8c337b16300e7f14239a2cd587668d"}`),"action-menu":JSON.parse(`{"propriedades":[{"nome":"children","tipo":"React.ReactNode","opcional":false,"dono":"ActionMenuProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ActionMenuProps","descricao":""},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"ActionMenuProps","descricao":""},{"nome":"visible","tipo":"boolean","opcional":false,"dono":"ActionMenuPopoverProps","descricao":""},{"nome":"anchor","tipo":"ActionMenuAnchor","opcional":false,"dono":"ActionMenuPopoverProps","descricao":"Coordenadas de measureInWindow do botão que abre o menu."},{"nome":"onClose","tipo":"() => void","opcional":false,"dono":"ActionMenuPopoverProps","descricao":""},{"nome":"insets","tipo":"{ top: number; bottom: number; left: number; right: number }","opcional":true,"dono":"ActionMenuPopoverProps","descricao":"Área segura já medida pelo aplicativo."},{"nome":"onDismiss","tipo":"() => void","opcional":true,"dono":"ActionMenuPopoverProps","descricao":"Após fechar, devolva aqui o foco acessível ao botão de origem."},{"nome":"label","tipo":"string","opcional":false,"dono":"ActionMenuItemProps","descricao":""},{"nome":"icon","tipo":"IconSource","opcional":true,"dono":"ActionMenuItemProps","descricao":""},{"nome":"tone","tipo":"'default' | 'destructive'","opcional":true,"dono":"ActionMenuItemProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"ActionMenuItemProps","descricao":""}],"tipos":"export type ActionMenuAnchor = { x: number; y: number; width: number; height: number };\\n\\nexport type ActionMenuProps = {\\n  children: React.ReactNode;\\n  style?: StyleProp<ViewStyle>;\\n  accessibilityLabel?: string;\\n};\\n\\nexport type ActionMenuPopoverProps = ActionMenuProps & {\\n  visible: boolean;\\n  /** Coordenadas de measureInWindow do botão que abre o menu. */\\n  anchor: ActionMenuAnchor;\\n  onClose: () => void;\\n  /** Área segura já medida pelo aplicativo. */\\n  insets?: { top: number; bottom: number; left: number; right: number };\\n  /** Após fechar, devolva aqui o foco acessível ao botão de origem. */\\n  onDismiss?: () => void;\\n};\\n\\nexport type ActionMenuItemProps = Omit<PressableProps, 'style' | 'children'> & {\\n  label: string;\\n  icon?: IconSource;\\n  tone?: 'default' | 'destructive';\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useRef, useState } from 'react';\\nimport { AccessibilityInfo, Text, View } from 'react-native';\\nimport { Download, Ellipsis, Pencil, Share2, Trash2 } from 'lucide-react-native';\\nimport { BottomSheet, Button, IconButton, useTheme } from '@tessela/ui';\\nimport { ActionMenu, ActionMenuDivider, ActionMenuItem, ActionMenuPopover, type ActionMenuAnchor } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao } from './_comum';\\n\\nexport default function TelaActionMenu() {\\n  const theme = useTheme();\\n  const trigger = useRef<View>(null);\\n  const [anchor, setAnchor] = useState<ActionMenuAnchor>({ x: 0, y: 0, width: 36, height: 36 });\\n  const [visible, setVisible] = useState(false);\\n  const [sheet, setSheet] = useState(false);\\n  const [last, setLast] = useState('Nenhuma ação selecionada');\\n  const select = (label: string) => { setLast(label); setVisible(false); setSheet(false); };\\n  const actions = <>\\n    <ActionMenuItem label=\\"Editar nome\\" icon={Pencil} onPress={() => select('Editar nome')} />\\n    <ActionMenuItem label=\\"Compartilhar\\" icon={Share2} onPress={() => select('Compartilhar')} />\\n    <ActionMenuItem label=\\"Baixar para ouvir offline\\" icon={Download} onPress={() => select('Baixar para ouvir offline')} />\\n    <ActionMenuDivider />\\n    <ActionMenuItem label=\\"Retirar voz\\" icon={Trash2} tone=\\"destructive\\" onPress={() => select('Retirar voz')} />\\n  </>;\\n  return <>\\n    <Secao>Em uso</Secao>\\n    <Legenda>Menu ancorado · toque em Mais ações</Legenda>\\n    <View ref={trigger} collapsable={false} accessible accessibilityRole=\\"button\\" accessibilityLabel=\\"Mais ações\\" style={{ alignSelf: 'flex-end' }}>\\n      <IconButton icon={Ellipsis} size=\\"small\\" variant=\\"neutral\\" accessibilityLabel=\\"Mais ações\\" accessible={false}\\n        onPress={() => trigger.current?.measureInWindow((x, y, width, height) => { setAnchor({ x, y, width, height }); setVisible(true); })} />\\n    </View>\\n    <ActionMenuPopover visible={visible} anchor={anchor} onClose={() => setVisible(false)}\\n      onDismiss={() => { if (trigger.current) AccessibilityInfo.sendAccessibilityEvent(trigger.current, 'focus'); }}>{actions}</ActionMenuPopover>\\n    <Text accessibilityLiveRegion=\\"polite\\" style={{ color: theme.fg.primary, fontFamily: FONTS['500'] }}>{last}</Text>\\n    <Legenda>Mesmas ações no Bottom Sheet</Legenda>\\n    <Button label=\\"Abrir ações no rodapé\\" size=\\"medium\\" onPress={() => setSheet(true)} />\\n    <BottomSheet visible={sheet} onClose={() => setSheet(false)} title=\\"Vovó Lourdes\\">{actions}</BottomSheet>\\n    <Secao>Variantes</Secao>\\n    <ActionMenu>{actions}</ActionMenu>\\n    <Legenda>Pressed e disabled</Legenda>\\n    <ActionMenu>\\n      <ActionMenuItem label=\\"Editar\\" icon={Pencil} testOnly_pressed />\\n      <ActionMenuItem label=\\"Editar\\" icon={Pencil} disabled />\\n      <ActionMenuItem label=\\"Excluir\\" icon={Trash2} tone=\\"destructive\\" testOnly_pressed />\\n      <ActionMenuItem label=\\"Excluir\\" icon={Trash2} tone=\\"destructive\\" disabled />\\n    </ActionMenu>\\n  </>;\\n}\\n","exemploEm":"apps/validador/telas/ActionMenu.tsx","fonte":"import React, { createContext, useContext, useEffect, useRef, useState } from 'react';\\nimport { AccessibilityInfo, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';\\nimport type { PressableProps, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withTiming } from 'react-native-reanimated';\\nimport { componentMetrics, primitives, shadows, typography } from '@tessela/tokens';\\nimport { renderIcon, type IconSource } from './Icon';\\nimport { Divider } from './Divider';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { DURATION, EASE_OUT, EASE_OUT_CSS } from './motion';\\n\\nexport type ActionMenuAnchor = { x: number; y: number; width: number; height: number };\\nexport type ActionMenuProps = {\\n  children: React.ReactNode;\\n  style?: StyleProp<ViewStyle>;\\n  accessibilityLabel?: string;\\n};\\nexport type ActionMenuPopoverProps = ActionMenuProps & {\\n  visible: boolean;\\n  /** Coordenadas de measureInWindow do botão que abre o menu. */\\n  anchor: ActionMenuAnchor;\\n  onClose: () => void;\\n  /** Área segura já medida pelo aplicativo. */\\n  insets?: { top: number; bottom: number; left: number; right: number };\\n  /** Após fechar, devolva aqui o foco acessível ao botão de origem. */\\n  onDismiss?: () => void;\\n};\\nexport type ActionMenuItemProps = Omit<PressableProps, 'style' | 'children'> & {\\n  label: string;\\n  icon?: IconSource;\\n  tone?: 'default' | 'destructive';\\n  style?: StyleProp<ViewStyle>;\\n};\\nconst FirstAction = createContext<React.MutableRefObject<View | null> | null>(null);\\nconst WIDTH = 240;\\nconst GAP = primitives.space[8];\\nconst NO_INSETS = { top: 0, bottom: 0, left: 0, right: 0 };\\n\\n/** Superfície e slot de ações. Para sobreposição ancorada use ActionMenuPopover. */\\nexport function ActionMenu({ children, style, accessibilityLabel = 'Ações' }: ActionMenuProps) {\\n  const c = useComponentTheme().actionmenu;\\n  return <View accessibilityRole=\\"menu\\" accessibilityLabel={accessibilityLabel}\\n    style={[styles.menu, { backgroundColor: c.surface, borderColor: c.border },\\n      Platform.OS === 'android' ? shadows.lg.android : shadows.lg.ios, style]}>{children}</View>;\\n}\\n\\nexport function ActionMenuItem({ label, icon, tone = 'default', disabled = false, onPress, style,\\n  accessibilityLabel = label, ...props }: ActionMenuItemProps) {\\n  const c = useComponentTheme().actionmenu.item;\\n  const medium = useFont('500');\\n  const first = useContext(FirstAction);\\n  const color = disabled ? c.disabled : tone === 'destructive' ? c.destructive : c.text;\\n  return <Pressable {...props} ref={node => { if (node && first && !first.current && !disabled) first.current = node; }}\\n    accessibilityRole=\\"menuitem\\" accessibilityLabel={accessibilityLabel} accessibilityState={{ disabled: Boolean(disabled) }}\\n    disabled={disabled} onPress={disabled ? undefined : onPress}>\\n    {({ pressed }) => <Animated.View style={[styles.item, {\\n      backgroundColor: pressed && !disabled ? c.pressed : 'transparent', transitionProperty: 'backgroundColor',\\n      transitionDuration: DURATION.press, transitionTimingFunction: EASE_OUT_CSS,\\n    }, style]}>\\n      {icon ? renderIcon(icon, color, primitives.iconSize.md, primitives.stroke.icon) : null}\\n      <Text numberOfLines={2} style={[medium, styles.label, { color }]}>{label}</Text>\\n    </Animated.View>}\\n  </Pressable>;\\n}\\n\\nexport function ActionMenuDivider() {\\n  return <Divider showLabel={false} style={styles.divider} />;\\n}\\n\\nexport function ActionMenuPopover({ visible, anchor, onClose, insets = NO_INSETS, onDismiss,\\n  children, style, accessibilityLabel }: ActionMenuPopoverProps) {\\n  const { width, height } = useWindowDimensions();\\n  const [mounted, setMounted] = useState(visible);\\n  const [menuHeight, setMenuHeight] = useState(0);\\n  const first = useRef<View | null>(null);\\n  const reduced = useReducedMotion();\\n  const opacity = useSharedValue(0);\\n  const scale = useSharedValue(reduced ? 1 : 0.95);\\n  const below = height - insets.bottom - GAP - (anchor.y + anchor.height + GAP);\\n  const above = anchor.y - GAP - insets.top - GAP;\\n  const placeAbove = menuHeight > below && above > below;\\n  const available = Math.max(0, placeAbove ? above : below);\\n  const menuWidth = Math.min(WIDTH, width - insets.left - insets.right - GAP * 2);\\n  const left = Math.max(insets.left + GAP, Math.min(anchor.x + anchor.width - menuWidth, width - insets.right - GAP - menuWidth));\\n  const top = placeAbove ? Math.max(insets.top + GAP, anchor.y - GAP - Math.min(menuHeight, available)) : anchor.y + anchor.height + GAP;\\n\\n  useEffect(() => {\\n    if (visible) setMounted(true);\\n    opacity.value = withTiming(visible && menuHeight > 0 ? 1 : 0, { duration: visible ? DURATION.state : DURATION.exit, easing: EASE_OUT });\\n    scale.value = withTiming(visible || reduced ? 1 : 0.95, { duration: visible ? DURATION.state : DURATION.exit, easing: EASE_OUT });\\n    if (!visible) {\\n      const timer = setTimeout(() => { setMounted(false); first.current = null; }, DURATION.exit);\\n      return () => clearTimeout(timer);\\n    }\\n  }, [visible, menuHeight, reduced, opacity, scale]);\\n  const animated = useAnimatedStyle(() => {\\n    'worklet';\\n    return { opacity: opacity.value, transform: [{ scale: scale.value }] };\\n  });\\n  return <Modal transparent visible={mounted} animationType=\\"none\\" statusBarTranslucent\\n    onRequestClose={onClose} onDismiss={onDismiss}\\n    onShow={() => { if (first.current) AccessibilityInfo.sendAccessibilityEvent(first.current, 'focus'); }}>\\n    <View style={styles.overlay} accessibilityViewIsModal onAccessibilityEscape={onClose}>\\n      <Pressable style={styles.backdrop} accessible={false} onPress={onClose} testID=\\"action-menu-outside\\" />\\n      <Animated.View style={[styles.position, { top, left, width: menuWidth,\\n        transformOrigin: placeAbove ? 'right bottom' : 'right top' }, animated]}>\\n        <FirstAction.Provider value={first}>\\n          <ActionMenu accessibilityLabel={accessibilityLabel} style={[{ width: menuWidth }, style]}>\\n            <ScrollView bounces={false} style={{ maxHeight: Math.max(0, available - 10) }}\\n              onContentSizeChange={(_, contentHeight) => setMenuHeight(contentHeight + 10)}>{children}</ScrollView>\\n          </ActionMenu>\\n        </FirstAction.Provider>\\n      </Animated.View>\\n    </View>\\n  </Modal>;\\n}\\n\\nconst styles = StyleSheet.create({\\n  // Figma 133:68: borda mais padding/4; o slot começa em (5,5), com 230 de largura.\\n  menu: { width: WIDTH, maxWidth: '100%', padding: primitives.space[4], borderWidth: primitives.stroke.hairline,\\n    borderRadius: componentMetrics.actionmenu.radius },\\n  // Variante real 133:43 mede 47 (12 + 23 + 12), apesar de a documentação citar 44.\\n  item: { flexDirection: 'row', alignItems: 'center', gap: primitives.space[12], padding: primitives.space[12],\\n    minHeight: 44, borderRadius: componentMetrics.actionmenu.itemRadius },\\n  label: { flex: 1, fontSize: typography.bodyLarge.fontSize, lineHeight: typography.bodyLarge.lineHeight, includeFontPadding: false },\\n  divider: { marginVertical: primitives.space[4], marginHorizontal: primitives.space[12] },\\n  overlay: { flex: 1 },\\n  backdrop: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },\\n  position: { position: 'absolute' },\\n});\\n","hash":"688bf40b0692e2678ffd97945edf056d0fa108678304869795ac64fa4c6135e7"}`),"search-bar":JSON.parse(`{"propriedades":[{"nome":"filters","tipo":"React.ReactNode","opcional":true,"dono":"SearchBarProps","descricao":"Slot dos filtros: Chips em linha, com space/12 entre eles, rolando para o lado\\nquando não cabem. Um filtro por vez, com \\"Tudo\\" primeiro."},{"nome":"showFilters","tipo":"boolean","opcional":true,"dono":"SearchBarProps","descricao":"Mostra a linha de filtros (quando há \`filters\`)."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"SearchBarProps","descricao":""},{"nome":"type","tipo":"SearchSuggestionType","opcional":true,"dono":"SearchSuggestionProps","descricao":"recent: busca já feita, com X para remover. suggestion: sugestão enquanto digita."},{"nome":"text","tipo":"string","opcional":false,"dono":"SearchSuggestionProps","descricao":""},{"nome":"onPress","tipo":"() => void","opcional":true,"dono":"SearchSuggestionProps","descricao":"Toque na linha: buscar o texto."},{"nome":"onRemove","tipo":"() => void","opcional":true,"dono":"SearchSuggestionProps","descricao":"Recent: toque no X, que tira a busca da lista."},{"nome":"onFill","tipo":"() => void","opcional":true,"dono":"SearchSuggestionProps","descricao":"Suggestion: toque na seta, que preenche o campo sem buscar."},{"nome":"inset","tipo":"boolean","opcional":true,"dono":"SearchSuggestionProps","descricao":"Recuo lateral de 12. Desligue nas linhas soltas na coluna da tela ou num\\nBottom Sheet, para o ícone alinhar com os títulos; dentro de um Section Card, ligado."},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"SearchSuggestionProps","descricao":"Rótulo da linha para o leitor de tela. Padrão: \\"Buscar {text}\\"."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"SearchSuggestionProps","descricao":""}],"tipos":"export type SearchBarProps = Omit<\\n  InputProps,\\n  'type' | 'label' | 'error' | 'disabled' | 'icon' | 'countryCode' | 'onCountryPress' | 'style'\\n> & {\\n  /**\\n   * Slot dos filtros: Chips em linha, com space/12 entre eles, rolando para o lado\\n   * quando não cabem. Um filtro por vez, com \\"Tudo\\" primeiro.\\n   */\\n  filters?: React.ReactNode;\\n  /** Mostra a linha de filtros (quando há \`filters\`). */\\n  showFilters?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type SearchSuggestionType = 'recent' | 'suggestion';\\n\\nexport type SearchSuggestionProps = {\\n  /** recent: busca já feita, com X para remover. suggestion: sugestão enquanto digita. */\\n  type?: SearchSuggestionType;\\n  text: string;\\n  /** Toque na linha: buscar o texto. */\\n  onPress?: () => void;\\n  /** Recent: toque no X, que tira a busca da lista. */\\n  onRemove?: () => void;\\n  /** Suggestion: toque na seta, que preenche o campo sem buscar. */\\n  onFill?: () => void;\\n  /**\\n   * Recuo lateral de 12. Desligue nas linhas soltas na coluna da tela ou num\\n   * Bottom Sheet, para o ícone alinhar com os títulos; dentro de um Section Card, ligado.\\n   */\\n  inset?: boolean;\\n  /** Rótulo da linha para o leitor de tela. Padrão: \\"Buscar {text}\\". */\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { View } from 'react-native';\\nimport { SearchBar, SearchSuggestion, SectionHeader, Chip } from '@tessela/ui';\\nimport { primitives } from '@tessela/tokens';\\nimport { Legenda, Secao } from '../../validador/telas/_comum';\\n\\nexport default function Example() {\\n  const [query, setQuery] = useState('');\\n  const [filter, setFilter] = useState('Tudo');\\n  const [recent, setRecent] = useState(['Nina e o Jardim', 'Senhor Coruja']);\\n  return <><Secao>Com filtros</Secao><SearchBar value={query} onChangeText={setQuery} placeholder=\\"Buscar histórias\\" filters={['Tudo', 'Histórias', 'Personagens'].map(name => <Chip key={name} label={name} selected={filter === name} onPress={() => setFilter(name)} />)} /><Secao>Sem filtros</Secao><SearchBar showFilters={false} placeholder=\\"Digite aqui o que você procura\\" /><Secao>Sugestões</Secao><SearchSuggestion text=\\"Nina e o Jardim das Tocas\\" type=\\"suggestion\\" onPress={() => setQuery('Nina e o Jardim das Tocas')} onFill={() => setQuery('Nina e o Jardim das Tocas')} /><Secao>Composição com SectionHeader</Secao><View style={{ gap: primitives.space[8] }}><SectionHeader title=\\"Buscas recentes\\" actionLabel=\\"Limpar\\" onAction={() => setRecent([])} />{recent.map(text => <SearchSuggestion key={text} text={text} onPress={() => setQuery(text)} onRemove={() => setRecent(recent.filter(item => item !== text))} />)}{!recent.length && <Legenda>Nenhuma busca recente.</Legenda>}</View></>;\\n}\\n","exemploEm":"apps/catalogo/examples/SearchBar.tsx","fonte":"import React, { useState } from 'react';\\nimport { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';\\nimport type { StyleProp, ViewStyle } from 'react-native';\\nimport { ArrowUpLeft, History, Search, X } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { renderIcon } from './Icon';\\nimport { Input, type InputProps } from './Input';\\n\\nexport type SearchBarProps = Omit<\\n  InputProps,\\n  'type' | 'label' | 'error' | 'disabled' | 'icon' | 'countryCode' | 'onCountryPress' | 'style'\\n> & {\\n  /**\\n   * Slot dos filtros: Chips em linha, com space/12 entre eles, rolando para o lado\\n   * quando não cabem. Um filtro por vez, com \\"Tudo\\" primeiro.\\n   */\\n  filters?: React.ReactNode;\\n  /** Mostra a linha de filtros (quando há \`filters\`). */\\n  showFilters?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\n/**\\n * Busca de listas grandes: o Input de busca e, abaixo, os filtros em Chips.\\n * Antes de digitar, mostre as buscas recentes com SearchSuggestion.\\n */\\nexport function SearchBar({ filters, showFilters = true, style, ...input }: SearchBarProps) {\\n  return (\\n    <View style={[styles.bar, style]}>\\n      <Input type=\\"search\\" {...input} />\\n      {showFilters && filters ? (\\n        <ScrollView\\n          horizontal\\n          showsHorizontalScrollIndicator={false}\\n          keyboardShouldPersistTaps=\\"handled\\"\\n          contentContainerStyle={styles.filters}\\n        >\\n          {filters}\\n        </ScrollView>\\n      ) : null}\\n    </View>\\n  );\\n}\\n\\nexport type SearchSuggestionType = 'recent' | 'suggestion';\\n\\nexport type SearchSuggestionProps = {\\n  /** recent: busca já feita, com X para remover. suggestion: sugestão enquanto digita. */\\n  type?: SearchSuggestionType;\\n  text: string;\\n  /** Toque na linha: buscar o texto. */\\n  onPress?: () => void;\\n  /** Recent: toque no X, que tira a busca da lista. */\\n  onRemove?: () => void;\\n  /** Suggestion: toque na seta, que preenche o campo sem buscar. */\\n  onFill?: () => void;\\n  /**\\n   * Recuo lateral de 12. Desligue nas linhas soltas na coluna da tela ou num\\n   * Bottom Sheet, para o ícone alinhar com os títulos; dentro de um Section Card, ligado.\\n   */\\n  inset?: boolean;\\n  /** Rótulo da linha para o leitor de tela. Padrão: \\"Buscar {text}\\". */\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst ICON = primitives.iconSize.md;\\nconst STROKE = primitives.stroke.icon;\\nconst FONT_SIZE = typography.bodyLarge.fontSize;\\nconst GAP = primitives.space[12];\\n// Ícones de 20: 12 de cada lado completam a área de toque de 44.\\nconst HIT_SLOP = (44 - ICON) / 2;\\n\\n/** Linha de busca recente ou de sugestão, abaixo do Search Bar. */\\nexport function SearchSuggestion({\\n  type = 'recent',\\n  text,\\n  onPress,\\n  onRemove,\\n  onFill,\\n  inset = true,\\n  accessibilityLabel,\\n  style,\\n}: SearchSuggestionProps) {\\n  const c = useComponentTheme().search.suggestion;\\n  const medium = useFont('500');\\n  // O fundo pressionado cobre a linha toda, inclusive a área do ícone da direita.\\n  const [pressed, setPressed] = useState(false);\\n  const recent = type === 'recent';\\n  const pad = inset ? GAP : primitives.space[0];\\n\\n  return (\\n    // Linha com Pressed no Figma: só a cor, sem escala nem transição (ação repetida).\\n    <View\\n      style={[\\n        styles.row,\\n        { paddingRight: pad, backgroundColor: pressed ? c.pressed : undefined },\\n        style,\\n      ]}\\n    >\\n      <Pressable\\n        accessibilityRole=\\"button\\"\\n        accessibilityLabel={accessibilityLabel ?? \`Buscar \${text}\`}\\n        onPress={onPress}\\n        onPressIn={() => setPressed(true)}\\n        onPressOut={() => setPressed(false)}\\n        style={[styles.main, { paddingLeft: pad }]}\\n      >\\n        <View style={styles.icon}>{renderIcon(recent ? History : Search, c.icon, ICON, STROKE)}</View>\\n        <Text\\n          numberOfLines={1}\\n          style={[\\n            medium,\\n            styles.text,\\n            // Body Large: linha de 23 (145%), maior que a natural, então lineHeight funciona.\\n            { fontSize: FONT_SIZE, lineHeight: typography.bodyLarge.lineHeight, color: c.text },\\n          ]}\\n        >\\n          {text}\\n        </Text>\\n      </Pressable>\\n      {/* O ícone da direita é outro alvo, irmão da linha, para o leitor de tela alcançar os dois. */}\\n      <Pressable\\n        accessibilityRole=\\"button\\"\\n        accessibilityLabel={recent ? 'Remover da lista' : \`Preencher com \${text}\`}\\n        hitSlop={HIT_SLOP}\\n        onPress={recent ? onRemove : onFill}\\n        style={styles.icon}\\n      >\\n        {renderIcon(recent ? X : ArrowUpLeft, c.icon, ICON, STROKE)}\\n      </Pressable>\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  bar: {\\n    gap: primitives.space[12],\\n  },\\n  filters: {\\n    gap: primitives.space[12],\\n  },\\n  row: {\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    borderRadius: componentMetrics.search.suggestion.radius,\\n  },\\n  main: {\\n    flex: 1,\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: GAP,\\n    paddingVertical: primitives.space[12],\\n    // O vão entre o texto e o ícone da direita faz parte da linha tocável.\\n    paddingRight: GAP,\\n  },\\n  icon: {\\n    width: ICON,\\n    height: ICON,\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  text: {\\n    flex: 1,\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"e2c6bc15d4cbfb5b1303fef43fb1f5488523fb3a4b533a9aeccd20bef8f14742"}`),accordion:{propriedades:[{nome:`question`,tipo:`string`,opcional:!1,dono:`AccordionItemProps`,descricao:`Pergunta: o botão que abre e fecha. Quebra linha; a seta fica alinhada pelo topo.`},{nome:`answer`,tipo:`string`,opcional:!1,dono:`AccordionItemProps`,descricao:`Resposta, mostrada abaixo da pergunta quando aberto.`},{nome:`expanded`,tipo:`boolean`,opcional:!0,dono:`AccordionItemProps`,descricao:`Aberto (controlado). Sem ele, o item guarda o próprio estado.`},{nome:`defaultExpanded`,tipo:`boolean`,opcional:!0,dono:`AccordionItemProps`,descricao:`Estado inicial quando não controlado. Padrão: fechado.`},{nome:`onChange`,tipo:`(expanded: boolean) => void`,opcional:!0,dono:`AccordionItemProps`,descricao:`Chamado a cada toque com o novo estado.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`AccordionItemProps`,descricao:``}],tipos:`export type AccordionItemProps = {
  /** Pergunta: o botão que abre e fecha. Quebra linha; a seta fica alinhada pelo topo. */
  question: string;
  /** Resposta, mostrada abaixo da pergunta quando aberto. */
  answer: string;
  /** Aberto (controlado). Sem ele, o item guarda o próprio estado. */
  expanded?: boolean;
  /** Estado inicial quando não controlado. Padrão: fechado. */
  defaultExpanded?: boolean;
  /** Chamado a cada toque com o novo estado. */
  onChange?: (expanded: boolean) => void;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { AccordionItem, Divider, SectionCard } from '@tessela/ui';
import { Legenda, Secao } from '../../validador/telas/_comum';

export default function Example() {
  const [open, setOpen] = useState(false);
  const answer = 'As histórias salvas ficam disponíveis na biblioteca para ouvir novamente.';
  return <><Secao>Estados</Secao><Legenda>Recolhido</Legenda><AccordionItem question="Onde ficam as histórias?" answer={answer} /><Legenda>Expandido</Legenda><AccordionItem question="Posso ouvir novamente?" answer={answer} defaultExpanded /><Legenda>Controlado</Legenda><AccordionItem question="Como funciona a biblioteca?" answer={answer} expanded={open} onChange={setOpen} /><Secao>Composição com SectionCard</Secao><SectionCard title="Perguntas frequentes"><AccordionItem question="Como acessar minhas histórias?" answer={answer} /><Divider /><AccordionItem question="Posso favoritar uma história?" answer="Sim. Abra a história e use a ação de favoritar." /></SectionCard></>;
}
`,exemploEm:`apps/catalogo/examples/Accordion.tsx`,fonte:`import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ChevronDown } from 'lucide-react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { renderIcon } from './Icon';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_IN_OUT_CSS, EASE_OUT_CSS } from './motion';

export type AccordionItemProps = {
  /** Pergunta: o botão que abre e fecha. Quebra linha; a seta fica alinhada pelo topo. */
  question: string;
  /** Resposta, mostrada abaixo da pergunta quando aberto. */
  answer: string;
  /** Aberto (controlado). Sem ele, o item guarda o próprio estado. */
  expanded?: boolean;
  /** Estado inicial quando não controlado. Padrão: fechado. */
  defaultExpanded?: boolean;
  /** Chamado a cada toque com o novo estado. */
  onChange?: (expanded: boolean) => void;
  style?: StyleProp<ViewStyle>;
};

const PAD = primitives.space[12];
const ICON = primitives.iconSize.md;
const STROKE = primitives.stroke.icon;
// Label (16/19) com leading trim NONE: a linha do Figma é menor que a natural do iOS.
const QUESTION_BOX = lineBoxMargin(typography.label.fontSize, typography.label.lineHeight);
// Mesma curva de EASE_IN_OUT_CSS, na forma que o withTiming aceita.
const EASE_IN_OUT = Easing.bezier(0.77, 0, 0.175, 1);

/**
 * Pergunta que abre a resposta no próprio lugar, como nas perguntas frequentes.
 * Mais de um item pode ficar aberto. Em grupo, fica dentro de um Section Card com
 * Divider (space/12 nas laterais) entre os itens.
 */
export function AccordionItem({
  question,
  answer,
  expanded,
  defaultExpanded = false,
  onChange,
  style,
}: AccordionItemProps) {
  const c = useComponentTheme().accordion;
  const reduced = useReducedMotion();
  const semibold = useFont('600');
  const medium = useFont('500');
  const [own, setOwn] = useState(defaultExpanded);
  const [pressed, setPressed] = useState(false);
  const open = expanded ?? own;

  // Abertura de 0 a 1 e altura medida da resposta: sem altura fixa, a resposta
  // mede a si mesma e o item cresce até ela.
  const progress = useSharedValue(open ? 1 : 0);
  const contentHeight = useSharedValue(0);

  useEffect(() => {
    // Com movimento reduzido, o withTiming (ReduceMotion.System) vai direto ao fim.
    progress.value = withTiming(open ? 1 : 0, { duration: DURATION.move, easing: EASE_IN_OUT });
  }, [open, progress]);

  const answerStyle = useAnimatedStyle(() => {
    'worklet';
    // A resposta empurra os itens de baixo e aparece por opacidade.
    return { height: contentHeight.value * progress.value, opacity: progress.value };
  });

  const toggle = () => {
    const next = !open;
    if (expanded === undefined) setOwn(next);
    onChange?.(next);
  };

  const onLayout = (e: LayoutChangeEvent) => {
    contentHeight.value = e.nativeEvent.layout.height;
  };

  return (
    <Animated.View
      style={[
        styles.item,
        {
          // Pressed do Figma: só a cor, como no List Item.
          backgroundColor: pressed ? c.surface.pressed : 'transparent',
          transitionProperty: 'backgroundColor',
          transitionDuration: DURATION.press,
          transitionTimingFunction: EASE_OUT_CSS,
        },
        style,
      ]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        onPress={toggle}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        // Cobre o respiro de baixo do item: 12 + 20 + 12 = 44 na pergunta de uma linha.
        hitSlop={{ bottom: PAD }}
        style={styles.header}
      >
        <Text
          style={[
            semibold,
            styles.text,
            styles.question,
            { fontSize: typography.label.fontSize, marginVertical: QUESTION_BOX, color: c.text.title },
          ]}
        >
          {question}
        </Text>
        <Animated.View
          style={[
            styles.icon,
            {
              // Um chevron só, que gira 180° (no Figma, cada estado usa o ícone certo).
              transform: [{ rotate: open ? '180deg' : '0deg' }],
              transitionProperty: 'transform',
              transitionDuration: reduced ? 0 : DURATION.move,
              transitionTimingFunction: EASE_IN_OUT_CSS,
            },
          ]}
        >
          {renderIcon(ChevronDown, c.icon, ICON, STROKE)}
        </Animated.View>
      </Pressable>

      <Animated.View
        style={[styles.answer, answerStyle]}
        // Fechada, a resposta sai da leitura de tela; aberta, é lida logo após a pergunta.
        accessibilityElementsHidden={!open}
        importantForAccessibility={open ? 'auto' : 'no-hide-descendants'}
      >
        <View onLayout={onLayout} style={styles.answerContent}>
          <Text
            style={[
              medium,
              styles.text,
              {
                fontSize: typography.bodyLarge.fontSize,
                lineHeight: typography.bodyLarge.lineHeight,
                color: c.text.content,
              },
            ]}
          >
            {answer}
          </Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: componentMetrics.accordion.radius,
    paddingBottom: PAD,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: primitives.space[12],
    paddingTop: PAD,
    paddingHorizontal: PAD,
  },
  question: {
    flex: 1,
  },
  icon: {
    width: ICON,
    height: ICON,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answer: {
    overflow: 'hidden',
  },
  // Fora do fluxo: mede a altura inteira mesmo com a caixa de fora fechada.
  // O space/8 entre pergunta e resposta fica aqui, para sumir junto quando fecha.
  answerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: primitives.space[8],
    paddingHorizontal: PAD,
  },
  text: {
    includeFontPadding: false,
  },
});
`,hash:`94973935fdb242b746b5fb463b22e552b65a661f445cb01e2f3834bcaaebab58`},rating:JSON.parse(`{"propriedades":[{"nome":"size","tipo":"RatingSize","opcional":true,"dono":"RatingStarProps","descricao":"small: 16, só leitura. large: 32 num alvo de 44 × 44."},{"nome":"filled","tipo":"boolean","opcional":true,"dono":"RatingStarProps","descricao":"Preenchida e contornada (Filled) ou só o contorno (Empty)."},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"RatingStarProps","descricao":""},{"nome":"value","tipo":"number","opcional":false,"dono":"RatingProps","descricao":"Nota de 0 a 5. Small arredonda (sem meias estrelas); Large marca o inteiro."},{"nome":"size","tipo":"RatingSize","opcional":true,"dono":"RatingProps","descricao":"small: nota de uma história, só leitura. large: recebe a avaliação da pessoa."},{"nome":"onChange","tipo":"(value: number) => void","opcional":true,"dono":"RatingProps","descricao":"Large: recebe a nota tocada, de 1 a 5. Vibre aqui, se o app quiser o toque háptico de seleção."},{"nome":"valueLabel","tipo":"string","opcional":true,"dono":"RatingProps","descricao":"Small: nota escrita ao lado das estrelas. Padrão: o valor com uma casa (\\"4,2\\")."},{"nome":"reviews","tipo":"string","opcional":true,"dono":"RatingProps","descricao":"Small: número de avaliações, ex.: \\"(120)\\". Sem ele, a parte não aparece."},{"nome":"accessibilityLabel","tipo":"string","opcional":true,"dono":"RatingProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"RatingProps","descricao":""}],"tipos":"export type RatingSize = 'small' | 'large';\\n\\nexport type RatingStarProps = {\\n  /** small: 16, só leitura. large: 32 num alvo de 44 × 44. */\\n  size?: RatingSize;\\n  /** Preenchida e contornada (Filled) ou só o contorno (Empty). */\\n  filled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type RatingProps = {\\n  /** Nota de 0 a 5. Small arredonda (sem meias estrelas); Large marca o inteiro. */\\n  value: number;\\n  /** small: nota de uma história, só leitura. large: recebe a avaliação da pessoa. */\\n  size?: RatingSize;\\n  /** Large: recebe a nota tocada, de 1 a 5. Vibre aqui, se o app quiser o toque háptico de seleção. */\\n  onChange?: (value: number) => void;\\n  /** Small: nota escrita ao lado das estrelas. Padrão: o valor com uma casa (\\"4,2\\"). */\\n  valueLabel?: string;\\n  /** Small: número de avaliações, ex.: \\"(120)\\". Sem ele, a parte não aparece. */\\n  reviews?: string;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, Text, View } from 'react-native';\\nimport { Button, TesselaProvider, useTheme } from '@tessela/ui';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { Rating, RatingStar } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\n// Quadro do \\"Em uso\\" do Figma (141:215): bg/base, raio 16, rótulo em 12 SemiBold fg/muted.\\nfunction Quadro({ titulo, children }: { titulo: string; children: React.ReactNode }) {\\n  const theme = useTheme();\\n  return (\\n    <View style={[styles.quadro, { backgroundColor: theme.bg.base }]}>\\n      <Text style={[styles.titulo, { color: theme.fg.muted }]}>{titulo}</Text>\\n      {children}\\n    </View>\\n  );\\n}\\n\\n// \\"Avaliar ao fim da leitura\\": pergunta, Rating Large e Button Primary.\\nfunction AvaliarHistoria() {\\n  const theme = useTheme();\\n  const [nota, setNota] = useState(3);\\n  const [enviada, setEnviada] = useState<number | null>(null);\\n  return (\\n    <View style={styles.avaliar}>\\n      <Text style={[styles.pergunta, { color: theme.fg.primary }]}>O que a Laura achou da história?</Text>\\n      <Rating\\n        size=\\"large\\"\\n        value={nota}\\n        onChange={(n) => {\\n          setNota(n);\\n          setEnviada(null);\\n        }}\\n      />\\n      <Button label={enviada === null ? 'Enviar' : \`Enviada: \${enviada}\`} fullWidth onPress={() => setEnviada(nota)} />\\n    </View>\\n  );\\n}\\n\\nexport default function TelaRating() {\\n  const theme = useTheme();\\n  const [grande, setGrande] = useState(4);\\n  return (\\n    <>\\n      <Secao>Rating Star</Secao>\\n      <Legenda>Small Filled · Small Empty · Large Filled · Large Empty</Legenda>\\n      <View style={comum.linha}>\\n        <RatingStar />\\n        <RatingStar filled={false} />\\n        <RatingStar size=\\"large\\" />\\n        <RatingStar size=\\"large\\" filled={false} />\\n      </View>\\n\\n      <Secao>Rating</Secao>\\n      <Legenda>Small: 4,2 com avaliações (arredonda para 4)</Legenda>\\n      <Rating value={4.2} reviews=\\"(120)\\" />\\n      <Legenda>Small sem avaliações</Legenda>\\n      <Rating value={4.2} />\\n      <Legenda>Large: toque numa estrela (ela pulsa)</Legenda>\\n      <Rating size=\\"large\\" value={grande} onChange={setGrande} />\\n\\n      <Secao>Em uso</Secao>\\n      <View style={styles.quadros}>\\n        <Quadro titulo=\\"Avaliar ao fim da leitura\\">\\n          <AvaliarHistoria />\\n        </Quadro>\\n        <Quadro titulo=\\"Nota ao lado do título\\">\\n          <View style={styles.detalhe}>\\n            <Text style={[styles.historia, { color: theme.fg.primary }]}>Nina e a chave de bronze</Text>\\n            <Rating value={4.8} reviews=\\"(120)\\" />\\n          </View>\\n        </Quadro>\\n        <TesselaProvider theme=\\"dark\\" fonts={FONTS}>\\n          <Quadro titulo=\\"Tema escuro (modo Dark no quadro)\\">\\n            <AvaliarHistoria />\\n          </Quadro>\\n        </TesselaProvider>\\n      </View>\\n    </>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  quadros: {\\n    gap: primitives.space[16],\\n  },\\n  quadro: {\\n    borderRadius: primitives.radius.lg,\\n    paddingTop: primitives.space[24],\\n    paddingHorizontal: primitives.space[24],\\n    paddingBottom: primitives.space[32],\\n    gap: primitives.space[16],\\n  },\\n  titulo: {\\n    fontFamily: FONTS['600'],\\n    fontSize: typography.labelSmall.fontSize,\\n    includeFontPadding: false,\\n  },\\n  avaliar: {\\n    alignItems: 'center',\\n    gap: primitives.space[16],\\n  },\\n  pergunta: {\\n    alignSelf: 'stretch',\\n    textAlign: 'center',\\n    fontFamily: FONTS['600'],\\n    fontSize: typography.heading.fontSize,\\n    lineHeight: typography.heading.lineHeight,\\n    includeFontPadding: false,\\n  },\\n  detalhe: {\\n    gap: primitives.space[4],\\n  },\\n  historia: {\\n    fontFamily: FONTS['600'],\\n    fontSize: typography.label.fontSize,\\n    includeFontPadding: false,\\n  },\\n});\\n","exemploEm":"apps/validador/telas/Rating.tsx","fonte":"import React, { useEffect, useState } from 'react';\\nimport { Pressable, StyleSheet, Text, View } from 'react-native';\\nimport type { AccessibilityActionEvent, StyleProp, ViewStyle } from 'react-native';\\nimport Animated, {\\n  useAnimatedStyle,\\n  useReducedMotion,\\n  useSharedValue,\\n  withSequence,\\n  withTiming,\\n} from 'react-native-reanimated';\\nimport { Star } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { useComponentTheme, useFont } from './theme';\\nimport { lineBoxMargin } from './metrics';\\nimport { DURATION, EASE_OUT } from './motion';\\n\\nexport type RatingSize = 'small' | 'large';\\n\\nexport type RatingStarProps = {\\n  /** small: 16, só leitura. large: 32 num alvo de 44 × 44. */\\n  size?: RatingSize;\\n  /** Preenchida e contornada (Filled) ou só o contorno (Empty). */\\n  filled?: boolean;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport type RatingProps = {\\n  /** Nota de 0 a 5. Small arredonda (sem meias estrelas); Large marca o inteiro. */\\n  value: number;\\n  /** small: nota de uma história, só leitura. large: recebe a avaliação da pessoa. */\\n  size?: RatingSize;\\n  /** Large: recebe a nota tocada, de 1 a 5. Vibre aqui, se o app quiser o toque háptico de seleção. */\\n  onChange?: (value: number) => void;\\n  /** Small: nota escrita ao lado das estrelas. Padrão: o valor com uma casa (\\"4,2\\"). */\\n  valueLabel?: string;\\n  /** Small: número de avaliações, ex.: \\"(120)\\". Sem ele, a parte não aparece. */\\n  reviews?: string;\\n  accessibilityLabel?: string;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nconst MAX = 5;\\nconst STARS = [1, 2, 3, 4, 5];\\nconst STROKE = componentMetrics.rating.stroke.star;\\nconst STAR_SIZE: Record<RatingSize, number> = {\\n  small: primitives.iconSize.sm,\\n  large: primitives.iconSize.xl,\\n};\\n// O Large põe cada estrela num alvo de 44 × 44, sem espaço entre os alvos.\\nconst LARGE_TARGET = 44; // vem do Figma\\n// Ao tocar, a estrela cresce para 1,15 e volta em 150 ms.\\nconst PULSE_SCALE = 1.15;\\nconst PULSE_HALF = { duration: DURATION.state / 2, easing: EASE_OUT };\\n// Sem leading trim no Figma. Nota em Body Strong (14/18): linha menor que a natural\\n// da Puffin, então a margem ajusta o espaço. Avaliações em Body (14/20): lineHeight basta.\\nconst NOTE_BOX = lineBoxMargin(typography.bodyStrong.fontSize, typography.bodyStrong.lineHeight);\\n\\ntype StarBaseProps = RatingStarProps & {\\n  /** Muda a cada toque: a estrela pulsa. */\\n  pulse?: number;\\n};\\n\\nfunction StarBase({ size = 'small', filled = true, pulse = 0, style }: StarBaseProps) {\\n  const c = useComponentTheme().rating;\\n  const reduced = useReducedMotion();\\n  const scale = useSharedValue(1);\\n  const color = filled ? c.star.filled : c.star.empty;\\n  const starSize = STAR_SIZE[size];\\n\\n  useEffect(() => {\\n    // Com movimento reduzido, só a cor muda.\\n    if (pulse === 0 || reduced) return;\\n    scale.value = withSequence(withTiming(PULSE_SCALE, PULSE_HALF), withTiming(1, PULSE_HALF));\\n  }, [pulse, reduced, scale]);\\n\\n  const animated = useAnimatedStyle(() => {\\n    'worklet';\\n    return { transform: [{ scale: scale.value }] };\\n  });\\n\\n  const box = size === 'large' ? LARGE_TARGET : starSize;\\n  return (\\n    <View style={[styles.star, { width: box, height: box }, style]}>\\n      <Animated.View style={animated}>\\n        {/* A estrela do Figma é a do Lucide, com traço absoluto de 1,6 e cantos redondos. */}\\n        <Star\\n          size={starSize}\\n          color={color}\\n          fill={filled ? color : 'none'}\\n          strokeWidth={STROKE}\\n          absoluteStrokeWidth\\n        />\\n      </Animated.View>\\n    </View>\\n  );\\n}\\n\\n/** Uma estrela do Rating, cheia ou vazia. */\\nexport function RatingStar(props: RatingStarProps) {\\n  return <StarBase {...props} />;\\n}\\n\\n/**\\n * Nota de 1 a 5 estrelas. Small mostra a nota de uma história, só leitura; Large\\n * recebe a avaliação da pessoa ao fim de uma leitura.\\n */\\nexport function Rating({ value, size = 'small', onChange, valueLabel, reviews, accessibilityLabel, style }: RatingProps) {\\n  const c = useComponentTheme().rating;\\n  const medium = useFont('500');\\n  const semibold = useFont('600');\\n  // Conta os toques por estrela, para só a escolhida pulsar.\\n  const [pulses, setPulses] = useState<Record<number, number>>({});\\n\\n  if (size === 'large') {\\n    const chosen = Math.round(value);\\n    const choose = (star: number) => {\\n      setPulses((p) => ({ ...p, [star]: (p[star] ?? 0) + 1 }));\\n      onChange?.(star);\\n    };\\n    const onAccessibilityAction = (e: AccessibilityActionEvent) => {\\n      const next =\\n        e.nativeEvent.actionName === 'increment'\\n          ? Math.min(MAX, chosen + 1)\\n          : e.nativeEvent.actionName === 'decrement'\\n            ? Math.max(1, chosen - 1)\\n            : chosen;\\n      if (next !== chosen) onChange?.(next);\\n    };\\n    return (\\n      <View\\n        accessible\\n        accessibilityRole=\\"adjustable\\"\\n        accessibilityLabel={accessibilityLabel ?? 'Avaliação'}\\n        accessibilityValue={{ min: 0, max: MAX, now: chosen, text: \`\${chosen} de \${MAX} estrelas\` }}\\n        accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}\\n        onAccessibilityAction={onAccessibilityAction}\\n        style={[styles.large, style]}\\n      >\\n        {STARS.map((star) => (\\n          <Pressable key={star} accessible={false} onPress={() => choose(star)}>\\n            <StarBase size=\\"large\\" filled={star <= chosen} pulse={pulses[star] ?? 0} />\\n          </Pressable>\\n        ))}\\n      </View>\\n    );\\n  }\\n\\n  // Sem meias estrelas: a nota exibida é arredondada.\\n  const shown = Math.round(value);\\n  const note = valueLabel ?? value.toFixed(1).replace('.', ',');\\n  const count = reviews?.replace(/[()]/g, '').trim();\\n  return (\\n    <View\\n      accessible\\n      accessibilityRole=\\"text\\"\\n      accessibilityLabel={\\n        accessibilityLabel ?? \`Nota \${note} de \${MAX}\${count ? \`, \${count} avaliações\` : ''}\`\\n      }\\n      style={[styles.small, style]}\\n    >\\n      <View style={styles.stars}>\\n        {STARS.map((star) => (\\n          <StarBase key={star} size=\\"small\\" filled={star <= shown} />\\n        ))}\\n      </View>\\n      <Text style={[semibold, styles.note, { color: c.text.default }]}>{note}</Text>\\n      {reviews ? <Text style={[medium, styles.reviews, { color: c.text.meta }]}>{reviews}</Text> : null}\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  star: {\\n    alignItems: 'center',\\n    justifyContent: 'center',\\n  },\\n  large: {\\n    alignSelf: 'flex-start',\\n    flexDirection: 'row',\\n  },\\n  small: {\\n    alignSelf: 'flex-start',\\n    flexDirection: 'row',\\n    alignItems: 'center',\\n    gap: primitives.space[8],\\n  },\\n  stars: {\\n    flexDirection: 'row',\\n    gap: primitives.space[2],\\n  },\\n  note: {\\n    fontSize: typography.bodyStrong.fontSize,\\n    marginVertical: NOTE_BOX,\\n    includeFontPadding: false,\\n  },\\n  reviews: {\\n    fontSize: typography.body.fontSize,\\n    lineHeight: typography.body.lineHeight,\\n    includeFontPadding: false,\\n  },\\n});\\n","hash":"0de5d10536bcc0eedcd89d6d12f04d15cc06484a23bd45a8ced9644fa7ba80b9"}`),"notification-item":{propriedades:[{nome:`title`,tipo:`string`,opcional:!1,dono:`NotificationItemProps`,descricao:``},{nome:`body`,tipo:`string`,opcional:!1,dono:`NotificationItemProps`,descricao:``},{nome:`time`,tipo:`string`,opcional:!1,dono:`NotificationItemProps`,descricao:``},{nome:`timeLabel`,tipo:`string`,opcional:!0,dono:`NotificationItemProps`,descricao:`Rótulo falado completo, por exemplo "há 5 minutos".`},{nome:`unread`,tipo:`boolean`,opcional:!0,dono:`NotificationItemProps`,descricao:`Controlado pelo aplicativo: onPress não altera o estado de leitura.`},{nome:`avatar`,tipo:`Pick<AvatarProps, 'source' | 'initials'>`,opcional:!0,dono:`NotificationItemProps`,descricao:``},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`NotificationItemProps`,descricao:``}],tipos:`export type NotificationItemProps = Omit<PressableProps, 'children' | 'style'> & {
  title: string;
  body: string;
  time: string;
  /** Rótulo falado completo, por exemplo "há 5 minutos". */
  timeLabel?: string;
  /** Controlado pelo aplicativo: onPress não altera o estado de leitura. */
  unread?: boolean;
  avatar?: Pick<AvatarProps, 'source' | 'initials'>;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { View } from 'react-native';
import { TesselaProvider, useTheme } from '@tessela/ui';
import { primitives } from '@tessela/tokens';
import { NotificationItem } from '@tessela/ui';
import { Divider } from '@tessela/ui';
import { SectionHeader } from '@tessela/ui';
import { FONTS, Legenda, Secao } from './_comum';

const TITLE = 'Vovó Lourdes gravou uma nova voz';
const BODY = 'A voz já está disponível para as histórias da Laura e do Tomás.';
function Central() {
  const theme = useTheme();
  const [read, setRead] = useState<string[]>([]);
  return <View style={{ backgroundColor: theme.bg.base, borderRadius: primitives.radius.lg, padding: primitives.space[12], gap: primitives.space[8] }}>
    <SectionHeader title="Hoje" />
    <NotificationItem title={TITLE} body={BODY} time="há 5 min" timeLabel="há 5 minutos" avatar={{ initials: 'VL' }} unread={!read.includes('voz')} onPress={() => setRead([...read, 'voz'])} style={{ paddingHorizontal: 0 }} />
    <Divider showLabel={false} />
    <NotificationItem title="A história de hoje está pronta" body={'"Nina e a chave de bronze" espera pela Laura.'} time="há 1 h" unread={!read.includes('historia')} onPress={() => setRead([...read, 'historia'])} style={{ paddingHorizontal: 0 }} />
    <Divider showLabel={false} />
    <NotificationItem title="Tio Beto aceitou o convite" body="Agora ele pode narrar para a Laura." time="ontem" avatar={{ initials: 'TB' }} unread={false} style={{ paddingHorizontal: 0 }} />
  </View>;
}
export default function TelaNotificationItem() {
  return <>
    <Secao>State × Interaction</Secao>
    {[true, false].map(unread => <React.Fragment key={String(unread)}>
      <Legenda>{unread ? 'Unread · Default' : 'Read · Default'}</Legenda>
      <NotificationItem title={TITLE} body={BODY} time="há 5 min" avatar={{ initials: 'AL' }} unread={unread} />
      <Legenda>{unread ? 'Unread · Pressed' : 'Read · Pressed'}</Legenda>
      <NotificationItem title={TITLE} body={BODY} time="há 5 min" avatar={{ initials: 'AL' }} unread={unread} testOnly_pressed />
    </React.Fragment>)}
    <Secao>Em uso</Secao><Legenda>Central de avisos · toque para marcar como lido</Legenda><Central />
    <TesselaProvider theme="dark" fonts={FONTS}><Legenda>Tema escuro (modo Dark no quadro)</Legenda><Central /></TesselaProvider>
  </>;
}
`,exemploEm:`apps/validador/telas/NotificationItem.tsx`,fonte:`import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { Avatar, type AvatarProps } from './Avatar';
import { CounterBadge } from './CounterBadge';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT_CSS } from './motion';
import { useComponentTheme, useFont } from './theme';

export type NotificationItemProps = Omit<PressableProps, 'children' | 'style'> & {
  title: string;
  body: string;
  time: string;
  /** Rótulo falado completo, por exemplo "há 5 minutos". */
  timeLabel?: string;
  /** Controlado pelo aplicativo: onPress não altera o estado de leitura. */
  unread?: boolean;
  avatar?: Pick<AvatarProps, 'source' | 'initials'>;
  style?: StyleProp<ViewStyle>;
};

/** Aviso com título, hora, descrição e indicador de leitura. */
export function NotificationItem({ title, body, time, timeLabel, unread = true, avatar,
  disabled = false, accessibilityLabel, style, ...rest }: NotificationItemProps) {
  const c = useComponentTheme().notification;
  const semibold = useFont('600');
  const medium = useFont('500');
  const [titleLines, setTitleLines] = useState(1);
  return <Pressable {...rest} disabled={disabled} accessibilityRole="button" accessibilityState={{ disabled: Boolean(disabled) }}
    accessibilityLabel={accessibilityLabel ?? \`\${unread ? 'Não lido. ' : ''}\${title}, \${timeLabel ?? time}. \${body}\`}>
    {({ pressed }) => <Animated.View style={[styles.row, {
      backgroundColor: pressed ? c.surface.pressed : 'transparent', transitionProperty: 'backgroundColor',
      transitionDuration: DURATION.press, transitionTimingFunction: EASE_OUT_CSS,
    }, style]}>
      <Avatar {...avatar} size="medium" />
      <View style={styles.texts}>
        <View style={styles.header}>
          <Text numberOfLines={2} ellipsizeMode="tail"
            onTextLayout={event => setTitleLines(Math.max(1, Math.min(2, event.nativeEvent.lines.length)))}
            style={[semibold, styles.title, { color: c.text.title,
              // Compensa cada linha visível sem encurtar a linha natural da Puffin.
              marginVertical: lineBoxMargin(typography.label.fontSize, typography.label.lineHeight) * titleLines,
            }]}>{title}</Text>
          <Text numberOfLines={1} style={[medium, styles.time, { color: c.text.time }]}>{time}</Text>
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={[medium, styles.body, { color: c.text.body }]}>{body}</Text>
      </View>
      <View style={styles.unread}>{unread && <CounterBadge type="dot" />}</View>
    </Animated.View>}
  </Pressable>;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: primitives.space[12], padding: primitives.space[12], borderRadius: componentMetrics.notification.radius },
  texts: { flex: 1, minWidth: 0, gap: primitives.space[2] },
  header: { flexDirection: 'row', alignItems: 'baseline', gap: primitives.space[8] },
  title: { flex: 1, fontSize: typography.label.fontSize, includeFontPadding: false },
  time: { fontSize: typography.caption.fontSize, lineHeight: typography.caption.lineHeight, includeFontPadding: false },
  body: { fontSize: typography.body.fontSize, lineHeight: typography.body.lineHeight, includeFontPadding: false },
  unread: { width: primitives.space[12], height: primitives.space[20], alignItems: 'center', justifyContent: 'center' },
});
`,hash:`ca30afa083acf313dde475082689e2c4c038b2de9519e989df89c14fb29bb4b1`},"otp-input":JSON.parse(`{"propriedades":[{"nome":"state","tipo":"OTPCellState","opcional":true,"dono":"OTPCellProps","descricao":""},{"nome":"digit","tipo":"string","opcional":true,"dono":"OTPCellProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"OTPCellProps","descricao":""},{"nome":"value","tipo":"string","opcional":false,"dono":"OTPInputProps","descricao":""},{"nome":"onChangeText","tipo":"(value: string) => void","opcional":false,"dono":"OTPInputProps","descricao":""},{"nome":"digits","tipo":"4 | 6","opcional":true,"dono":"OTPInputProps","descricao":""},{"nome":"disabled","tipo":"boolean","opcional":true,"dono":"OTPInputProps","descricao":""},{"nome":"error","tipo":"boolean","opcional":true,"dono":"OTPInputProps","descricao":""},{"nome":"errorMessage","tipo":"string","opcional":true,"dono":"OTPInputProps","descricao":""},{"nome":"onComplete","tipo":"(value: string) => void","opcional":true,"dono":"OTPInputProps","descricao":""},{"nome":"showResend","tipo":"boolean","opcional":true,"dono":"OTPInputProps","descricao":""},{"nome":"resendDelay","tipo":"number","opcional":true,"dono":"OTPInputProps","descricao":"Segundos até permitir o primeiro reenvio e entre os seguintes."},{"nome":"onResend","tipo":"() => void","opcional":true,"dono":"OTPInputProps","descricao":""},{"nome":"style","tipo":"StyleProp<ViewStyle>","opcional":true,"dono":"OTPInputProps","descricao":""}],"tipos":"export type OTPCellState = 'empty' | 'active' | 'filled' | 'error' | 'disabled';\\n\\nexport type OTPCellProps = { state?: OTPCellState; digit?: string; style?: StyleProp<ViewStyle> };\\n\\nexport type OTPInputProps = Pick<TextInputProps, 'autoFocus' | 'onFocus' | 'onBlur' | 'testID' | 'accessibilityLabel'> & {\\n  value: string;\\n  onChangeText: (value: string) => void;\\n  digits?: 4 | 6;\\n  disabled?: boolean;\\n  error?: boolean;\\n  errorMessage?: string;\\n  onComplete?: (value: string) => void;\\n  showResend?: boolean;\\n  /** Segundos até permitir o primeiro reenvio e entre os seguintes. */\\n  resendDelay?: number;\\n  onResend?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};","exemplo":"import React, { useState } from 'react';\\nimport { StyleSheet, Text, View } from 'react-native';\\nimport { primitives, typography } from '@tessela/tokens';\\nimport { OTPCell, OTPInput } from '@tessela/ui';\\nimport { TesselaProvider, useFont, useTheme } from '@tessela/ui';\\nimport { FONTS, Legenda, Secao, comum } from './_comum';\\n\\nfunction Verificacao({ initialError = false }: { initialError?: boolean }) {\\n  const [value, setValue] = useState(initialError ? '381502' : '38');\\n  const [error, setError] = useState(initialError);\\n  const theme = useTheme();\\n  const semibold = useFont('600');\\n  const medium = useFont('500');\\n  return <View style={styles.verification}>\\n    <Text style={[semibold, styles.title, { color: theme.fg.primary }]}>Digite o código</Text>\\n    <Text style={[medium, styles.description, { color: theme.fg.secondary }]}>Enviamos 6 números para l•••@email.com.</Text>\\n    <OTPInput digits={6} value={value} error={error} showResend={!error} onChangeText={next => { setValue(next); setError(false); }}\\n      onResend={() => setValue('')} />\\n  </View>;\\n}\\nfunction Escuro() {\\n  const theme = useTheme();\\n  return <View style={[styles.dark, { backgroundColor: theme.bg.base }]}><Verificacao /></View>;\\n}\\n\\nexport default function TelaOTPInput() {\\n  const [four, setFour] = useState('');\\n  const [six, setSix] = useState('');\\n  return <>\\n    <Secao>Estados da casa</Secao>\\n    <Legenda>Empty · Active · Filled · Error · Disabled</Legenda>\\n    <View style={comum.grupo}>\\n      <OTPCell /><OTPCell state=\\"active\\" /><OTPCell state=\\"filled\\" digit=\\"4\\" />\\n      <OTPCell state=\\"error\\" digit=\\"4\\" /><OTPCell state=\\"disabled\\" digit=\\"4\\" />\\n    </View>\\n    <Secao>Variantes</Secao>\\n    <Legenda>4 dígitos</Legenda>\\n    <OTPInput value={four} onChangeText={setFour} onResend={() => setFour('')} resendDelay={0} />\\n    <Legenda>6 dígitos</Legenda>\\n    <OTPInput digits={6} value={six} onChangeText={setSix} onResend={() => setSix('')} resendDelay={0} />\\n    <Legenda>Desabilitado</Legenda>\\n    <OTPInput value=\\"3815\\" onChangeText={() => {}} disabled />\\n    <Secao>Em uso</Secao>\\n    <Legenda>Digitando — toque nas casas para abrir o teclado</Legenda>\\n    <Verificacao />\\n    <Legenda>Código incorreto</Legenda>\\n    <Verificacao initialError />\\n    <Legenda>Tema escuro</Legenda>\\n    <TesselaProvider theme=\\"dark\\" fonts={FONTS}><Escuro /></TesselaProvider>\\n  </>;\\n}\\n\\nconst styles = StyleSheet.create({\\n  verification: { alignItems: 'center', gap: primitives.space[16] },\\n  title: { includeFontPadding: false, fontSize: typography.heading.fontSize, lineHeight: typography.heading.lineHeight },\\n  description: { includeFontPadding: false, fontSize: typography.bodyLarge.fontSize, lineHeight: typography.bodyLarge.lineHeight, textAlign: 'center' },\\n  dark: { paddingVertical: primitives.space[24], borderRadius: primitives.radius.lg },\\n});\\n","exemploEm":"apps/validador/telas/OTPInput.tsx","fonte":"import React, { useEffect, useRef, useState } from 'react';\\nimport { AppState, Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';\\nimport type { StyleProp, TextInputProps, ViewStyle } from 'react-native';\\nimport Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';\\nimport { Ban } from 'lucide-react-native';\\nimport { componentMetrics, primitives, typography } from '@tessela/tokens';\\nimport { renderIcon } from './Icon';\\nimport { lineBoxMargin, naturalLineHeight } from './metrics';\\nimport { DURATION, EASE_OUT, EASE_OUT_CSS } from './motion';\\nimport { useComponentTheme, useFont } from './theme';\\n\\nexport type OTPCellState = 'empty' | 'active' | 'filled' | 'error' | 'disabled';\\nexport type OTPCellProps = { state?: OTPCellState; digit?: string; style?: StyleProp<ViewStyle> };\\n\\n/** Casa decorativa. O OTPInput mantém um único campo acessível. */\\nexport function OTPCell({ state = 'empty', digit, style }: OTPCellProps) {\\n  const c = useComponentTheme();\\n  const font = useFont('600');\\n  const reduced = useReducedMotion();\\n  const disabled = state === 'disabled';\\n  const error = state === 'error';\\n  const active = state === 'active';\\n  const { fontScale } = useWindowDimensions();\\n  const enlarged = fontScale > 1;\\n  return (\\n    <Animated.View style={[styles.cell, {\\n      width: Math.max(48, typography.title.fontSize * fontScale),\\n      height: Math.max(60, naturalLineHeight(typography.title.fontSize) * fontScale + primitives.space[24]),\\n      backgroundColor: disabled ? c.input.surface.disabled : error ? c.input.surface.error : c.input.surface.default,\\n      transitionProperty: 'backgroundColor', transitionDuration: DURATION.state, transitionTimingFunction: EASE_OUT_CSS,\\n    }, style]}>\\n      {digit ? <Text style={[font, styles.digit, enlarged && { marginVertical: 0 }, { color: disabled ? c.input.text.disabled : c.input.text.primary }]}>{digit.slice(0, 1)}</Text> : active ? (\\n        <Animated.View style={[styles.caret, { backgroundColor: c.otp.caret }, !reduced && {\\n          animationName: { '0%': { opacity: 1 }, '49%': { opacity: 1 }, '50%': { opacity: 0 }, '100%': { opacity: 0 } },\\n          animationDuration: 1000, animationIterationCount: 'infinite', animationTimingFunction: 'linear',\\n        }]} />\\n      ) : null}\\n      {active || error ? <View pointerEvents=\\"none\\" style={[styles.border, {\\n        borderColor: error ? c.input.feedback.error : c.otp.border.active,\\n        borderWidth: error ? componentMetrics.input.stroke.container : componentMetrics.otp.stroke.active,\\n      }]} /> : null}\\n    </Animated.View>\\n  );\\n}\\n\\nexport type OTPInputProps = Pick<TextInputProps, 'autoFocus' | 'onFocus' | 'onBlur' | 'testID' | 'accessibilityLabel'> & {\\n  value: string;\\n  onChangeText: (value: string) => void;\\n  digits?: 4 | 6;\\n  disabled?: boolean;\\n  error?: boolean;\\n  errorMessage?: string;\\n  onComplete?: (value: string) => void;\\n  showResend?: boolean;\\n  /** Segundos até permitir o primeiro reenvio e entre os seguintes. */\\n  resendDelay?: number;\\n  onResend?: () => void;\\n  style?: StyleProp<ViewStyle>;\\n};\\n\\nexport function OTPInput({ value, onChangeText, digits = 4, disabled = false, error = false,\\n  errorMessage = 'Código incorreto. Confira e tente de novo.', onComplete, showResend = true,\\n  resendDelay = 30, onResend, autoFocus, onFocus, onBlur, testID, accessibilityLabel, style }: OTPInputProps) {\\n  const c = useComponentTheme();\\n  const medium = useFont('500');\\n  const reduced = useReducedMotion();\\n  const { fontScale } = useWindowDimensions();\\n  const [availableWidth, setAvailableWidth] = useState<number | null>(null);\\n  // Reduz o gap até 2, depois a casa até 44; o campo continua único ao quebrar linhas.\\n  const minGap = primitives.space[2];\\n  const minCellWidth = Math.max(44, typography.title.fontSize * fontScale);\\n  const nominalCellWidth = Math.max(48, minCellWidth);\\n  const nominalWidth = nominalCellWidth * digits + primitives.space[8] * (digits - 1);\\n  const width = Math.max(minCellWidth, Math.min(nominalWidth, availableWidth ?? nominalWidth));\\n  const capacity = Math.max(1, Math.floor((width + minGap) / (minCellWidth + minGap)));\\n  const columns = capacity >= digits ? digits : Math.ceil(digits / Math.ceil(digits / capacity));\\n  const gap = Math.min(primitives.space[8], Math.max(minGap, (width - nominalCellWidth * columns) / Math.max(1, columns - 1)));\\n  const cellWidth = Math.max(minCellWidth, Math.min(nominalCellWidth, (width - gap * (columns - 1)) / columns));\\n  const rowWidth = cellWidth * columns + gap * (columns - 1);\\n  const [focused, setFocused] = useState(false);\\n  const delay = Math.max(0, Math.floor(resendDelay));\\n  const [remaining, setRemaining] = useState(delay);\\n  const resendDeadline = useRef(Date.now() + delay * 1000);\\n  const offset = useSharedValue(0);\\n  const code = value.replace(/\\\\D/g, '').slice(0, digits);\\n  const activeIndex = Math.min(code.length, digits - 1);\\n  useEffect(() => {\\n    resendDeadline.current = Date.now() + delay * 1000;\\n    setRemaining(delay);\\n  }, [delay]);\\n  useEffect(() => {\\n    if (!showResend || remaining <= 0) return;\\n    const refresh = () => setRemaining(Math.max(0, Math.ceil((resendDeadline.current - Date.now()) / 1000)));\\n    const timer = setInterval(refresh, 1000);\\n    // O relógio continua durante a consulta ao SMS, mesmo com timers suspensos.\\n    const subscription = AppState.addEventListener('change', state => { if (state === 'active') refresh(); });\\n    return () => { clearInterval(timer); subscription.remove(); };\\n  }, [remaining, showResend]);\\n  useEffect(() => {\\n    // Amplitude 4 e duração total 150 ms vêm do Figma.\\n    offset.value = error && !disabled && !reduced ? withSequence(\\n      withTiming(-4, { duration: 37.5, easing: EASE_OUT }),\\n      withTiming(4, { duration: 37.5, easing: EASE_OUT }),\\n      withTiming(-4, { duration: 37.5, easing: EASE_OUT }),\\n      withTiming(0, { duration: 37.5, easing: EASE_OUT }),\\n    ) : 0;\\n  }, [error, disabled, reduced, offset]);\\n  const shake = useAnimatedStyle(() => {\\n    'worklet';\\n    return { transform: [{ translateX: offset.value }] };\\n  });\\n  const resendDisabled = disabled || remaining > 0 || !onResend;\\n  const resendLabel = remaining > 0\\n    ? \`Reenviar código em \${Math.floor(remaining / 60)}:\${String(remaining % 60).padStart(2, '0')}\`\\n    : 'Reenviar código';\\n  return (\\n    <View onLayout={event => setAvailableWidth(event.nativeEvent.layout.width)} style={[styles.container, style]}>\\n      <Animated.View style={shake}>\\n        <View accessibilityElementsHidden importantForAccessibility=\\"no-hide-descendants\\" style={[styles.cells, { width: rowWidth, gap }]}>\\n          {Array.from({ length: digits }, (_, index) => (\\n            <OTPCell key={index} digit={code[index]} style={{ width: cellWidth }} state={disabled ? 'disabled' : error ? 'error'\\n              : focused && index === activeIndex ? 'active' : code[index] ? 'filled' : 'empty'} />\\n          ))}\\n        </View>\\n        <TextInput testID={testID} value={code} onChangeText={text => {\\n          if (disabled) return;\\n          // Com o cursor no fim, o evento nativo inclui o prefixo já digitado.\\n          // Um novo código inteiro colado substitui esse prefixo.\\n          const appended = text.startsWith(code) ? text.slice(code.length).replace(/\\\\D/g, '') : '';\\n          const next = (appended.length >= digits ? appended : text.replace(/\\\\D/g, '')).slice(0, digits);\\n          if (next === code) return;\\n          onChangeText(next);\\n          if (next.length === digits) onComplete?.(next);\\n        }} editable={!disabled} autoFocus={autoFocus} keyboardType=\\"number-pad\\" textContentType=\\"oneTimeCode\\"\\n          autoComplete=\\"sms-otp\\" autoCorrect={false} caretHidden contextMenuHidden={false} selectionColor=\\"transparent\\"\\n          selection={{ start: code.length, end: code.length }}\\n          accessibilityLabel={accessibilityLabel ?? \`Código de verificação, \${digits} dígitos\`}\\n          accessibilityHint={error ? errorMessage : undefined} accessibilityState={{ disabled }}\\n          onFocus={event => { setFocused(true); onFocus?.(event); }}\\n          onBlur={event => { setFocused(false); onBlur?.(event); }} style={styles.nativeInput} />\\n      </Animated.View>\\n      {error && !disabled ? <View accessibilityRole=\\"alert\\" accessibilityLiveRegion=\\"polite\\" style={styles.error}>\\n        {renderIcon(Ban, c.input.feedback.error, primitives.iconSize.sm, componentMetrics.input.stroke.icon)}\\n        <Text style={[medium, styles.errorText, { color: c.input.feedback.error }]}>{errorMessage}</Text>\\n      </View> : null}\\n      {showResend ? <Pressable accessibilityRole=\\"link\\" accessibilityLabel={resendLabel} disabled={resendDisabled}\\n        hitSlop={{ top: primitives.space[12], bottom: primitives.space[12] }}\\n        accessibilityState={{ disabled: resendDisabled }} style={styles.resend} onPress={() => {\\n          if (resendDisabled) return;\\n          resendDeadline.current = Date.now() + delay * 1000;\\n          setRemaining(delay);\\n          onResend?.();\\n        }}>{({ pressed }) => <Text style={[medium, styles.resendText, { color: pressed ? c.link.text.pressed : c.link.text.muted }]}>{resendLabel}</Text>}</Pressable> : null}\\n    </View>\\n  );\\n}\\n\\nconst styles = StyleSheet.create({\\n  container: { alignSelf: 'stretch', maxWidth: '100%', alignItems: 'center', gap: primitives.space[16] },\\n  cells: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: primitives.space[8] },\\n  // 48 × 60 é o tamanho fixo da OTP Cell no Figma.\\n  cell: { width: 48, height: 60, borderRadius: componentMetrics.otp.radius, alignItems: 'center', justifyContent: 'center' },\\n  digit: { includeFontPadding: false, fontSize: typography.title.fontSize,\\n    marginVertical: lineBoxMargin(typography.title.fontSize, typography.title.lineHeight) },\\n  caret: { width: primitives.space[2], height: primitives.space[24], borderRadius: primitives.radius.full },\\n  border: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, borderRadius: componentMetrics.otp.radius },\\n  // Campo único sobre toda a fileira: mantém autofill e colagem nativos.\\n  nativeInput: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, color: 'transparent', padding: 0, includeFontPadding: false },\\n  error: { flexDirection: 'row', alignItems: 'center', gap: primitives.space[8], maxWidth: '100%' },\\n  // A mensagem do Figma usa 14/15, sem token de tipografia próprio.\\n  errorText: { includeFontPadding: false, fontSize: typography.body.fontSize,\\n    marginVertical: lineBoxMargin(typography.body.fontSize, 15), flexShrink: 1 },\\n  resend: { alignSelf: 'center', maxWidth: '100%' },\\n  // O Link padrão é de uma linha; aqui o prazo deve continuar legível com fonte ampliada.\\n  resendText: { flexShrink: 1, textAlign: 'center', includeFontPadding: false, fontSize: typography.body.fontSize,\\n    marginVertical: lineBoxMargin(typography.body.fontSize, typography.body.lineHeight) },\\n});\\n","hash":"c1e280522727d220893e21067a405911b0c2fbff15576516fc3b3bfcaaf2dfdf"}`),banner:{propriedades:[{nome:`tone`,tipo:`BannerTone`,opcional:!0,dono:`BannerProps`,descricao:`info: assinatura vencendo. error: falha ao sincronizar. neutral: sem conexão.`},{nome:`layout`,tipo:`BannerLayout`,opcional:!0,dono:`BannerProps`,descricao:`inline: tudo numa linha de 44; a mensagem nunca quebra e corta com reticências
(até cerca de 30 caracteres). stacked: mensagem em até 2 linhas e a ação embaixo.`},{nome:`message`,tipo:`string`,opcional:!1,dono:`BannerProps`,descricao:``},{nome:`actionLabel`,tipo:`string`,opcional:!0,dono:`BannerProps`,descricao:`Texto da ação sublinhada. Sem ele, a ação não aparece.`},{nome:`onAction`,tipo:`() => void`,opcional:!0,dono:`BannerProps`,descricao:``},{nome:`onClose`,tipo:`() => void`,opcional:!0,dono:`BannerProps`,descricao:`Mostra o X de fechar à direita.`},{nome:`closeLabel`,tipo:`string`,opcional:!0,dono:`BannerProps`,descricao:`Nome do X para leitores de tela.`},{nome:`style`,tipo:`StyleProp<ViewStyle>`,opcional:!0,dono:`BannerProps`,descricao:``}],tipos:`export type BannerTone = 'info' | 'error' | 'neutral';

export type BannerLayout = 'inline' | 'stacked';

export type BannerProps = {
  /** info: assinatura vencendo. error: falha ao sincronizar. neutral: sem conexão. */
  tone?: BannerTone;
  /**
   * inline: tudo numa linha de 44; a mensagem nunca quebra e corta com reticências
   * (até cerca de 30 caracteres). stacked: mensagem em até 2 linhas e a ação embaixo.
   */
  layout?: BannerLayout;
  message: string;
  /** Texto da ação sublinhada. Sem ele, a ação não aparece. */
  actionLabel?: string;
  onAction?: () => void;
  /** Mostra o X de fechar à direita. */
  onClose?: () => void;
  /** Nome do X para leitores de tela. */
  closeLabel?: string;
  style?: StyleProp<ViewStyle>;
};`,exemplo:`import React, { useState } from 'react';
import { Banner, Header, ProfileSelector, Button } from '@tessela/ui';
import { Legenda, Secao } from '../../validador/telas/_comum';

export default function Example() {
  const [visible, setVisible] = useState(true);
  const [profile, setProfile] = useState('Alice');
  return <><Secao>Tons e layouts</Secao>{(['info', 'error', 'neutral'] as const).map(tone => <React.Fragment key={tone}><Legenda>{\`\${tone} · inline\`}</Legenda><Banner tone={tone} message="Uma mensagem importante" /><Legenda>{\`\${tone} · stacked\`}</Legenda><Banner tone={tone} layout="stacked" message="Uma mensagem mais longa, com espaço para explicar o próximo passo." /></React.Fragment>)}<Secao>Composição com Header e ProfileSelector</Secao><Header type="large" title="Estante" actions={<ProfileSelector name={profile} avatar={{ initials: profile.slice(0, 2) }} onPress={() => setProfile(profile === 'Alice' ? 'Laura' : 'Alice')} />} />{visible ? <Banner tone="neutral" message="Você está sem conexão" onClose={() => setVisible(false)} /> : <Button label="Mostrar aviso" size="small" variant="soft" onPress={() => setVisible(true)} />}</>;
}
`,exemploEm:`apps/catalogo/examples/Banner.tsx`,fonte:`import React, { useEffect } from 'react';
import { AccessibilityInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { ReduceMotion, withTiming } from 'react-native-reanimated';
import type { EntryAnimationsValues, ExitAnimationsValues, LayoutAnimation } from 'react-native-reanimated';
import { CircleAlert, Info, WifiOff, X } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import { componentMetrics, primitives, typography } from '@tessela/tokens';
import { useComponentTheme, useFont } from './theme';
import { renderIcon } from './Icon';
import { lineBoxMargin } from './metrics';
import { DURATION, EASE_OUT } from './motion';

export type BannerTone = 'info' | 'error' | 'neutral';
export type BannerLayout = 'inline' | 'stacked';

export type BannerProps = {
  /** info: assinatura vencendo. error: falha ao sincronizar. neutral: sem conexão. */
  tone?: BannerTone;
  /**
   * inline: tudo numa linha de 44; a mensagem nunca quebra e corta com reticências
   * (até cerca de 30 caracteres). stacked: mensagem em até 2 linhas e a ação embaixo.
   */
  layout?: BannerLayout;
  message: string;
  /** Texto da ação sublinhada. Sem ele, a ação não aparece. */
  actionLabel?: string;
  onAction?: () => void;
  /** Mostra o X de fechar à direita. */
  onClose?: () => void;
  /** Nome do X para leitores de tela. */
  closeLabel?: string;
  style?: StyleProp<ViewStyle>;
};

// Figma: Info → info, Error → circle-alert, Neutral → wifi-off.
const ICONS: Record<BannerTone, LucideIcon> = {
  info: Info,
  error: CircleAlert,
  neutral: WifiOff,
};

const ICON = primitives.iconSize.md;
const STROKE = primitives.stroke.icon;
const TEXT_SIZE = typography.bodyStrong.fontSize;
// Body Strong 14/18: a linha do Figma é menor que a natural da Puffin (18,1).
const TEXT_BOX = lineBoxMargin(TEXT_SIZE, typography.bodyStrong.lineHeight);
const TOUCH = 44;
// Completa a área de toque de 44 em volta da ação (linha de 18) e do X (20).
const ACTION_SLOP_Y = (TOUCH - typography.bodyStrong.lineHeight) / 2;
const ACTION_SLOP = {
  top: ACTION_SLOP_Y,
  bottom: ACTION_SLOP_Y,
  left: primitives.space[8],
  right: primitives.space[8],
};
const CLOSE_SLOP = (TOUCH - ICON) / 2;

// Entra abrindo a altura em 180 ms ease-out (Documentação — Banner). Com movimento
// reduzido, o withTiming pula para o fim: aparece direto.
function openHeight(values: EntryAnimationsValues): LayoutAnimation {
  'worklet';
  return {
    initialValues: { height: 0 },
    animations: {
      height: withTiming(values.targetHeight, {
        duration: DURATION.move,
        easing: EASE_OUT,
        reduceMotion: ReduceMotion.System,
      }),
    },
  };
}

// Sai fechando a altura, mais rápido que a entrada.
function closeHeight(values: ExitAnimationsValues): LayoutAnimation {
  'worklet';
  return {
    initialValues: { height: values.currentHeight },
    animations: {
      height: withTiming(0, { duration: DURATION.exit, easing: EASE_OUT, reduceMotion: ReduceMotion.System }),
    },
  };
}

/**
 * Aviso que vale para a tela inteira e fica enquanto a situação durar. Fica logo
 * abaixo do Header, com space/8 antes e depois, na margem de 16 da tela, e empurra
 * o conteúdo para baixo. Um Banner por vez; para avisos sobre uma parte da tela, use Alert.
 */
export function Banner({
  tone = 'info',
  layout = 'inline',
  message,
  actionLabel,
  onAction,
  onClose,
  closeLabel = 'Fechar aviso',
  style,
}: BannerProps) {
  const c = useComponentTheme().banner[tone];
  const semibold = useFont('600');
  const stacked = layout === 'stacked';

  // Região viva educada: entra na fila do leitor de tela, sem cortar a fala atual.
  useEffect(() => {
    AccessibilityInfo.announceForAccessibilityWithOptions(message, { queue: true });
  }, [message]);

  const text = [semibold, styles.text, { fontSize: TEXT_SIZE, color: c.text, marginVertical: TEXT_BOX }];

  const action = actionLabel ? (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={actionLabel}
      onPress={onAction}
      hitSlop={ACTION_SLOP}
      style={stacked ? styles.actionStacked : styles.action}
    >
      {/* Sublinhada na cor do texto: não depende de uma cor extra sobre o fundo do tom. */}
      <Text numberOfLines={1} style={[text, styles.underline]}>
        {actionLabel}
      </Text>
    </Pressable>
  ) : null;

  return (
    <Animated.View
      entering={openHeight}
      exiting={closeHeight}
      style={[styles.banner, stacked ? styles.top : styles.center, { backgroundColor: c.surface }, style]}
    >
      <View style={styles.icon}>{renderIcon(ICONS[tone], c.text, ICON, STROKE)}</View>

      {stacked ? (
        <View style={styles.texts}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={text}>
            {message}
          </Text>
          {action}
        </View>
      ) : (
        <>
          <Text numberOfLines={1} ellipsizeMode="tail" style={[text, styles.message]}>
            {message}
          </Text>
          {action}
        </>
      )}

      {onClose ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={closeLabel}
          onPress={onClose}
          hitSlop={CLOSE_SLOP}
          style={styles.icon}
        >
          {renderIcon(X, c.text, ICON, STROKE)}
        </Pressable>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    gap: primitives.space[12],
    paddingVertical: primitives.space[12],
    paddingHorizontal: primitives.space[16],
    borderRadius: componentMetrics.banner.radius,
    // A entrada abre a altura: o conteúdo aparece de cima para baixo, recortado.
    overflow: 'hidden',
  },
  center: {
    alignItems: 'center',
  },
  // Stacked: ícone e X alinhados pelo topo.
  top: {
    alignItems: 'flex-start',
  },
  icon: {
    width: ICON,
    height: ICON,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    flex: 1,
  },
  texts: {
    flex: 1,
    gap: primitives.space[4],
  },
  action: {
    flexShrink: 0,
  },
  actionStacked: {
    alignSelf: 'flex-start',
  },
  text: {
    includeFontPadding: false,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
`,hash:`1f3cb02a4373190337b7722c4456f93749ff2bf9802f33977e90f638e7f487ef`}};export{e as default};