
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  background: '#0B1120',
  panel: '#111B2E',
  card: '#172338',
  border: '#26354C',
  primary: '#6D5DFB',
  primaryLight: '#A69BFF',
  text: '#F4F7FC',
  muted: '#94A3B8',
  green: '#34D399',
  orange: '#FBBF24',
  red: '#FB7185',
};

type MenuItem = {
  icon: string;
  label: string;
};

const menuItems: MenuItem[] = [
  { icon: '▦', label: 'Dashboard' },
  { icon: '♙', label: 'Usuarios' },
  { icon: '▤', label: 'Reportes' },
  { icon: '⚙', label: 'Configuración' },
];

function Brand({ small = false }: { small?: boolean }) {
  return (
    <View style={styles.brand}>
      <View style={styles.brandIcon}>
        <Text style={styles.brandIconText}>N</Text>
      </View>
      <View>
        <Text style={[styles.brandName, small && { fontSize: 16 }]}>
          NOVA<Text style={{ color: COLORS.primaryLight }}>.</Text>
        </Text>
        {!small && (
          <Text style={styles.brandCaption}>BUSINESS PLATFORM</Text>
        )}
      </View>
    </View>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password) {
      setError('Ingresa tu usuario y contraseña.');
      return;
    }

    if (username.trim() === 'admin' && password === 'admin') {
      setError('');
      onLogin();
      return;
    }

    setError('Usuario o contraseña incorrectos.');
  };

  return (
    <SafeAreaView style={styles.loginSafe}>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        style={styles.loginKeyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.loginScroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.loginContainer}>
            <View style={styles.loginHeader}>
              <Brand />
              <View style={styles.secureBadge}>
                <View style={styles.onlineDot} />
                <Text style={styles.secureBadgeText}>PORTAL DE ACCESO</Text>
              </View>
            </View>

            <View style={styles.loginMain}>
              <View style={styles.loginVisual}>
                <View style={styles.visualGlow} />
                <View style={styles.visualCard}>
                  <View style={styles.visualTop}>
                    <View style={styles.visualDot} />
                    <View style={[styles.visualDot, { opacity: 0.6 }]} />
                    <View style={[styles.visualDot, { opacity: 0.3 }]} />
                    <View style={{ flex: 1 }} />
                    <Text style={styles.visualMenu}>•••</Text>
                  </View>

                  <View style={styles.visualGraph}>
                    <View style={styles.graphBarSmall} />
                    <View style={styles.graphBarMedium} />
                    <View style={styles.graphBarTall} />
                    <View style={styles.graphBarMedium} />
                    <View style={styles.graphBarHighest} />
                    <View style={styles.graphBarTall} />
                    <View style={styles.graphBarSmall} />
                  </View>

                  <View style={styles.visualFooter}>
                    <View>
                      <Text style={styles.visualLabel}>RENDIMIENTO</Text>
                      <Text style={styles.visualValue}>+24.8%</Text>
                    </View>
                    <View style={styles.visualArrow}>
                      <Text style={styles.visualArrowText}>↗</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.floatingCard}>
                  <Text style={styles.floatingIcon}>✓</Text>
                  <View>
                    <Text style={styles.floatingTitle}>Todo bajo control</Text>
                    <Text style={styles.floatingSubtitle}>Tu espacio de trabajo</Text>
                  </View>
                </View>

                <Text style={styles.visualHeading}>
                  Todo tu negocio.
                  {'\n'}
                  <Text style={styles.visualHighlight}>En un solo lugar.</Text>
                </Text>
                <Text style={styles.visualDescription}>
                  Una plataforma para gestionar, analizar y hacer crecer tus
                  operaciones con una visión clara de cada detalle.
                </Text>
              </View>

              <View style={styles.loginFormPanel}>
                <View style={styles.welcomeIcon}>
                  <Text style={styles.welcomeIconText}>↗</Text>
                </View>

                <Text style={styles.eyebrow}>BIENVENIDO DE NUEVO</Text>
                <Text style={styles.loginTitle}>Inicia sesión</Text>
                <Text style={styles.loginDescription}>
                  Introduce tus credenciales para acceder a tu cuenta.
                </Text>

                <View style={styles.fieldGroup}>
                  <Text style={styles.fieldLabel}>Usuario</Text>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputIcon}>♙</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Tu nombre de usuario"
                      placeholderTextColor="#64748B"
                      value={username}
                      onChangeText={(value) => {
                        setUsername(value);
                        setError('');
                      }}
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoComplete="username"
                      returnKeyType="next"
                      accessibilityLabel="Usuario"
                    />
                  </View>
                </View>

                <View style={styles.fieldGroup}>
                  <Text style={styles.fieldLabel}>Contraseña</Text>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.inputIcon}>▣</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Tu contraseña"
                      placeholderTextColor="#64748B"
                      value={password}
                      onChangeText={(value) => {
                        setPassword(value);
                        setError('');
                      }}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoComplete="current-password"
                      returnKeyType="done"
                      onSubmitEditing={handleLogin}
                      accessibilityLabel="Contraseña"
                    />
                    <Pressable
                      onPress={() => setShowPassword(!showPassword)}
                      style={styles.passwordToggle}
                      accessibilityRole="button"
                      accessibilityLabel={
                        showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                      }
                    >
                      <Text style={styles.passwordToggleText}>
                        {showPassword ? 'Ocultar' : 'Ver'}
                      </Text>
                    </Pressable>
                  </View>
                </View>

                {error ? (
                  <View style={styles.errorBox}>
                    <Text style={styles.errorText}>ⓘ  {error}</Text>
                  </View>
                ) : null}

                <Pressable
                  style={({ pressed }) => [
                    styles.loginButton,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={handleLogin}
                  accessibilityRole="button"
                >
                  <Text style={styles.loginButtonText}>Ingresar</Text>
                  <Text style={styles.loginButtonArrow}>→</Text>
                </Pressable>

                <View style={styles.demoBox}>
                  <View style={styles.demoIcon}>
                    <Text style={styles.demoIconText}>i</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.demoTitle}>Modo demostración</Text>
                    <Text style={styles.demoText}>
                      Usuario: admin  ·  Contraseña: admin
                    </Text>
                  </View>
                </View>

                <View style={styles.formDivider} />
                <Text style={styles.loginFootnote}>
                  Acceso de prueba · NOVA Business Platform
                </Text>
              </View>
            </View>

            <View style={styles.loginFooter}>
              <Text style={styles.footerText}>© 2026 NOVA</Text>
              <Text style={styles.footerText}>Plataforma de demostración</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function MetricCard({
  label,
  value,
  change,
  icon,
  color,
}: {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}) {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricTop}>
        <Text style={styles.metricLabel}>{label}</Text>
        <View style={[styles.metricIcon, { backgroundColor: `${color}20` }]}>
          <Text style={[styles.metricIconText, { color }]}>{icon}</Text>
        </View>
      </View>
      <Text style={styles.metricValue}>{value}</Text>
      <View style={styles.metricBottom}>
        <Text style={[styles.metricChange, { color }]}>{change}</Text>
        <Text style={styles.metricCompared}>vs. mes anterior</Text>
      </View>
    </View>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const { width } = useWindowDimensions();
  const isWide = width >= 900;
  const isSmall = width < 560;
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const showNotice = (section: string) => {
    setActiveMenu(section);

    if (section !== 'Dashboard') {
      if (Platform.OS === 'web') {
        // Se muestra la sección seleccionada en la navegación.
      } else {
        Alert.alert(section, 'Esta sección estará disponible próximamente.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.dashboardSafe}>
      <StatusBar barStyle="light-content" />

      <View style={styles.dashboardRoot}>
        {isWide && (
          <View style={styles.sidebar}>
            <Brand />
            <Text style={styles.sidebarSection}>MENÚ PRINCIPAL</Text>

            {menuItems.map((item) => (
              <Pressable
                key={item.label}
                onPress={() => showNotice(item.label)}
                style={[
                  styles.navItem,
                  activeMenu === item.label && styles.navItemActive,
                ]}
              >
                <Text
                  style={[
                    styles.navIcon,
                    activeMenu === item.label && styles.navIconActive,
                  ]}
                >
                  {item.icon}
                </Text>
                <Text
                  style={[
                    styles.navText,
                    activeMenu === item.label && styles.navTextActive,
                  ]}
                >
                  {item.label}
                </Text>
                {activeMenu === item.label && <View style={styles.navIndicator} />}
              </Pressable>
            ))}

            <View style={{ flex: 1 }} />

            <View style={styles.sidebarProfile}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>AD</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.profileName}>Administrador</Text>
                <Text style={styles.profileRole}>Cuenta de demostración</Text>
              </View>
              <Pressable onPress={onLogout} accessibilityLabel="Cerrar sesión">
                <Text style={styles.logoutIcon}>↪</Text>
              </Pressable>
            </View>
          </View>
        )}

        <View style={styles.dashboardMain}>
          <View style={styles.topbar}>
            {!isWide && <Brand small />}
            {isWide && (
              <View>
                <Text style={styles.breadcrumb}>Workspace / General</Text>
                <Text style={styles.topbarHeading}>Panel de control</Text>
              </View>
            )}
            <View style={styles.topbarRight}>
              <View style={styles.statusBadge}>
                <View style={styles.onlineDot} />
                <Text style={styles.statusText}>Sistema activo</Text>
              </View>
              {!isWide && (
                <Pressable
                  onPress={onLogout}
                  style={styles.mobileLogout}
                >
                  <Text style={styles.mobileLogoutText}>Salir ↪</Text>
                </Pressable>
              )}
              <View style={styles.topAvatar}>
                <Text style={styles.avatarText}>AD</Text>
              </View>
            </View>
          </View>

          {!isWide && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.mobileNav}
            >
              {menuItems.map((item) => (
                <Pressable
                  key={item.label}
                  onPress={() => showNotice(item.label)}
                  style={[
                    styles.mobileNavItem,
                    activeMenu === item.label && styles.mobileNavItemActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.mobileNavText,
                      activeMenu === item.label && styles.mobileNavTextActive,
                    ]}
                  >
                    {item.icon}  {item.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          )}

          <ScrollView
            style={styles.dashboardScroll}
            contentContainerStyle={styles.dashboardContent}
          >
            <View style={styles.greetingRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.greetingEyebrow}>MARTES, 28 DE OCTUBRE</Text>
                <Text style={styles.greetingTitle}>
                  ¡Hola, Administrador! 👋
                </Text>
                <Text style={styles.greetingDescription}>
                  Aquí tienes el resumen de tu negocio.
                </Text>
              </View>
              <View style={styles.dateBadge}>
                <Text style={styles.dateIcon}>▦</Text>
                <Text style={styles.dateText}>Últimos 30 días</Text>
              </View>
            </View>

            <View
              style={[
                styles.metricsGrid,
                { flexDirection: isSmall ? 'column' : 'row' },
              ]}
            >
              <MetricCard
                label="Ingresos totales"
                value="S/ 48,290"
                change="↑ 12.8%"
                icon="S/"
                color={COLORS.green}
              />
              <MetricCard
                label="Usuarios activos"
                value="2,840"
                change="↑ 8.2%"
                icon="♙"
                color={COLORS.primaryLight}
              />
              <MetricCard
                label="Operaciones"
                value="1,248"
                change="↑ 18.4%"
                icon="▤"
                color={COLORS.orange}
              />
              <MetricCard
                label="Pendientes"
                value="24"
                change="↓ 4.6%"
                icon="◷"
                color={COLORS.red}
              />
            </View>

            <View style={styles.contentGrid}>
              <View style={styles.chartCard}>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.cardTitle}>Resumen de ingresos</Text>
                    <Text style={styles.cardSubtitle}>
                      Rendimiento durante los últimos 7 meses
                    </Text>
                  </View>
                  <View style={styles.chartLegend}>
                    <View style={styles.legendDot} />
                    <Text style={styles.legendText}>Ingresos</Text>
                  </View>
                </View>

                <View style={styles.chartSummary}>
                  <Text style={styles.chartAmount}>S/ 48,290</Text>
                  <Text style={styles.chartIncrease}>+12.8%</Text>
                </View>

                <View style={styles.chart}>
                  {[38, 55, 43, 70, 50, 82, 62, 93, 72, 100, 78, 88].map(
                    (height, index) => (
                      <View key={index} style={styles.chartColumn}>
                        <View style={styles.chartBarBackground}>
                          <View
                            style={[
                              styles.chartBar,
                              {
                                height: `${height}%`,
                                opacity: index === 9 ? 1 : 0.45 + index * 0.035,
                              },
                            ]}
                          />
                        </View>
                        {index % 2 === 0 && (
                          <Text style={styles.chartMonth}>
                            {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][index / 2]}
                          </Text>
                        )}
                      </View>
                    ),
                  )}
                </View>
              </View>

              <View style={styles.activityCard}>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.cardTitle}>Actividad reciente</Text>
                    <Text style={styles.cardSubtitle}>
                      Últimos movimientos
                    </Text>
                  </View>
                  <Text style={styles.activityMore}>•••</Text>
                </View>

                {[
                  {
                    icon: '✓',
                    title: 'Pago recibido',
                    description: 'Orden #ORD-2048',
                    amount: '+ S/ 1,250',
                    color: COLORS.green,
                  },
                  {
                    icon: '♙',
                    title: 'Nuevo usuario',
                    description: 'Carlos Mendoza',
                    amount: 'Registro',
                    color: COLORS.primaryLight,
                  },
                  {
                    icon: '▤',
                    title: 'Reporte generado',
                    description: 'Reporte mensual',
                    amount: 'Completado',
                    color: COLORS.orange,
                  },
                  {
                    icon: '↗',
                    title: 'Nueva operación',
                    description: 'Orden #ORD-2047',
                    amount: '+ S/ 890',
                    color: COLORS.green,
                  },
                ].map((item, index) => (
                  <View
                    key={item.title}
                    style={[
                      styles.activityItem,
                      index === 3 && { borderBottomWidth: 0 },
                    ]}
                  >
                    <View
                      style={[
                        styles.activityIcon,
                        { backgroundColor: `${item.color}20` },
                      ]}
                    >
                      <Text style={{ color: item.color, fontWeight: '700' }}>
                        {item.icon}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.activityTitle}>{item.title}</Text>
                      <Text style={styles.activityDescription}>
                        {item.description}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.activityAmount,
                        { color: item.amount.startsWith('+') ? COLORS.green : COLORS.muted },
                      ]}
                    >
                      {item.amount}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.bottomBanner}>
              <View style={styles.bannerIcon}>
                <Text style={styles.bannerIconText}>✦</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.bannerTitle}>
                  Tu espacio de trabajo está listo
                </Text>
                <Text style={styles.bannerText}>
                  Esta es una vista de demostración. Personaliza los módulos
                  para adaptarlos a tu negocio.
                </Text>
              </View>
              <Text style={styles.bannerArrow}>↗</Text>
            </View>

            <Text style={styles.dashboardCopyright}>
              NOVA BUSINESS PLATFORM  ·  VERSIÓN 1.0.0
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function HomeScreen() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogout = () => setAuthenticated(false);

  if (authenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return <LoginScreen onLogin={() => setAuthenticated(true)} />;
}

const styles = StyleSheet.create({
  loginSafe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loginKeyboard: {
    flex: 1,
  },
  loginScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 22,
  },
  loginContainer: {
    width: '100%',
    maxWidth: 1180,
    alignSelf: 'center',
  },
  loginHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brandIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandIconText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  brandName: {
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: 2,
    color: COLORS.text,
  },
  brandCaption: {
    fontSize: 9,
    letterSpacing: 2,
    color: COLORS.muted,
    marginTop: 3,
  },
  secureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.green,
  },
  secureBadgeText: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  loginMain: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: COLORS.panel,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 24,
    overflow: 'hidden',
  },
  loginVisual: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 38,
    paddingVertical: 44,
    backgroundColor: '#101A30',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  visualGlow: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: '#4338CA',
    opacity: 0.12,
    top: 50,
    left: 40,
  },
  visualCard: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#1A2840',
    borderWidth: 1,
    borderColor: '#34435F',
    borderRadius: 18,
    padding: 20,
    marginBottom: 36,
  },
  visualTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  visualDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.primaryLight,
  },
  visualMenu: {
    color: COLORS.muted,
    fontSize: 17,
  },
  visualGraph: {
    height: 112,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 24,
    marginBottom: 22,
  },
  graphBarSmall: {
    height: '30%',
    flex: 1,
    backgroundColor: '#6557D9',
    borderRadius: 5,
  },
  graphBarMedium: {
    height: '54%',
    flex: 1,
    backgroundColor: '#8175EF',
    borderRadius: 5,
  },
  graphBarTall: {
    height: '72%',
    flex: 1,
    backgroundColor: '#A69BFF',
    borderRadius: 5,
  },
  graphBarHighest: {
    height: '100%',
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  visualFooter: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  visualLabel: {
    color: COLORS.muted,
    fontSize: 10,
    letterSpacing: 1,
  },
  visualValue: {
    color: COLORS.text,
    fontSize: 25,
    fontWeight: '800',
    marginTop: 4,
  },
  visualArrow: {
    width: 40,
    height: 40,
    backgroundColor: '#273854',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  visualArrowText: {
    fontSize: 24,
    color: COLORS.green,
  },
  floatingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    alignSelf: 'center',
    backgroundColor: '#22334A',
    borderWidth: 1,
    borderColor: '#3D4D68',
    borderRadius: 14,
    padding: 13,
    marginTop: -57,
    marginBottom: 32,
    zIndex: 2,
  },
  floatingIcon: {
    width: 32,
    height: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#145747',
    color: '#6EE7B7',
    fontWeight: '800',
    fontSize: 19,
    paddingTop: 3,
  },
  floatingTitle: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '700',
  },
  floatingSubtitle: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 3,
  },
  visualHeading: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.text,
    lineHeight: 42,
    letterSpacing: -0.8,
  },
  visualHighlight: {
    color: COLORS.primaryLight,
  },
  visualDescription: {
    fontSize: 13,
    lineHeight: 22,
    color: COLORS.muted,
    marginTop: 14,
    maxWidth: 390,
  },
  loginFormPanel: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 38,
    paddingVertical: 38,
    justifyContent: 'center',
  },
  welcomeIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#292552',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  welcomeIconText: {
    color: COLORS.primaryLight,
    fontSize: 28,
    fontWeight: '600',
  },
  eyebrow: {
    color: COLORS.primaryLight,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },
  loginTitle: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.7,
  },
  loginDescription: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 9,
    marginBottom: 29,
  },
  fieldGroup: {
    marginBottom: 19,
  },
  fieldLabel: {
    color: '#DCE4F0',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 9,
  },
  inputWrapper: {
    minHeight: 51,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C1526',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 11,
    paddingHorizontal: 13,
  },
  inputIcon: {
    color: '#8B9BB5',
    fontSize: 18,
    width: 28,
  },
  textInput: {
    flex: 1,
    minWidth: 0,
    color: COLORS.text,
    fontSize: 13,
    paddingVertical: 14,
    outlineStyle: 'none',
  } as any,
  passwordToggle: {
    paddingVertical: 12,
    paddingLeft: 8,
  },
  passwordToggleText: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '700',
  },
  errorBox: {
    backgroundColor: '#431C2B',
    borderColor: '#7F3045',
    borderWidth: 1,
    borderRadius: 9,
    padding: 11,
    marginBottom: 15,
  },
  errorText: {
    color: '#FDA4AF',
    fontSize: 12,
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 11,
    paddingHorizontal: 18,
    paddingVertical: 16,
    minHeight: 52,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  loginButtonArrow: {
    color: '#FFFFFF',
    fontSize: 21,
    position: 'absolute',
    right: 17,
  },
  demoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    padding: 13,
    marginTop: 20,
    borderRadius: 11,
    backgroundColor: '#17243A',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  demoIcon: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#283754',
    alignItems: 'center',
    justifyContent: 'center',
  },
  demoIconText: {
    color: COLORS.primaryLight,
    fontSize: 15,
    fontWeight: '800',
  },
  demoTitle: {
    color: '#DCE4F0',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 4,
  },
  demoText: {
    color: COLORS.muted,
    fontSize: 10,
  },
  formDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginTop: 24,
    marginBottom: 15,
  },
  loginFootnote: {
    color: '#71819A',
    fontSize: 10,
    textAlign: 'center',
  },
  loginFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    gap: 12,
  },
  footerText: {
    color: '#65738A',
    fontSize: 10,
  },

  // Dashboard
  dashboardSafe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  dashboardRoot: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 245,
    backgroundColor: '#0E1728',
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  sidebarSection: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#64748B',
    marginTop: 43,
    marginBottom: 16,
    marginLeft: 10,
  },
  navItem: {
    minHeight: 47,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingHorizontal: 12,
    marginBottom: 7,
    borderRadius: 10,
    position: 'relative',
  },
  navItemActive: {
    backgroundColor: '#282451',
  },
  navIcon: {
    width: 22,
    color: '#8290A7',
    fontSize: 20,
    textAlign: 'center',
  },
  navIconActive: {
    color: COLORS.primaryLight,
  },
  navText: {
    color: '#96A4B9',
    fontSize: 13,
    flex: 1,
  },
  navTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  navIndicator: {
    position: 'absolute',
    left: 0,
    width: 3,
    height: 25,
    borderRadius: 4,
    backgroundColor: COLORS.primaryLight,
  },
  sidebarProfile: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 12,
    backgroundColor: '#4338A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 11,
  },
  profileName: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '700',
  },
  profileRole: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 4,
  },
  logoutIcon: {
    fontSize: 21,
    color: COLORS.muted,
    padding: 5,
  },
  dashboardMain: {
    flex: 1,
    minWidth: 0,
  },
  topbar: {
    minHeight: 79,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingHorizontal: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  breadcrumb: {
    color: COLORS.muted,
    fontSize: 10,
    marginBottom: 5,
  },
  topbarHeading: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '700',
  },
  topbarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  statusText: {
    color: '#B8C5D8',
    fontSize: 10,
  },
  topAvatar: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: '#4338A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileLogout: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: COLORS.card,
    borderRadius: 8,
  },
  mobileLogoutText: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '700',
  },
  mobileNav: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    gap: 8,
  },
  mobileNavItem: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 9,
    backgroundColor: COLORS.panel,
  },
  mobileNavItemActive: {
    backgroundColor: '#292552',
  },
  mobileNavText: {
    color: COLORS.muted,
    fontSize: 11,
  },
  mobileNavTextActive: {
    color: COLORS.primaryLight,
    fontWeight: '700',
  },
  dashboardScroll: {
    flex: 1,
  },
  dashboardContent: {
    padding: 26,
    paddingBottom: 20,
    maxWidth: 1600,
    width: '100%',
    alignSelf: 'center',
  },
  greetingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 25,
  },
  greetingEyebrow: {
    color: COLORS.primaryLight,
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.7,
    marginBottom: 9,
  },
  greetingTitle: {
    color: COLORS.text,
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: -0.6,
  },
  greetingDescription: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 8,
  },
  dateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: COLORS.panel,
  },
  dateIcon: {
    color: COLORS.primaryLight,
    fontSize: 17,
  },
  dateText: {
    color: '#CFD8E7',
    fontSize: 11,
  },
  metricsGrid: {
    gap: 14,
    marginBottom: 20,
  },
  metricCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 18,
  },
  metricTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  metricLabel: {
    color: COLORS.muted,
    fontSize: 11,
    flexShrink: 1,
  },
  metricIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricIconText: {
    fontSize: 16,
    fontWeight: '800',
  },
  metricValue: {
    color: COLORS.text,
    fontSize: 27,
    fontWeight: '800',
    letterSpacing: -0.8,
    marginTop: 17,
    marginBottom: 12,
  },
  metricBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 7,
  },
  metricChange: {
    fontSize: 10,
    fontWeight: '800',
  },
  metricCompared: {
    fontSize: 9,
    color: '#74839A',
  },
  contentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    marginBottom: 20,
  },
  chartCard: {
    flex: 1.35,
    minWidth: 280,
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 21,
  },
  activityCard: {
    flex: 1,
    minWidth: 280,
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 21,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 6,
  },
  chartLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.primaryLight,
  },
  legendText: {
    color: COLORS.muted,
    fontSize: 10,
  },
  chartSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 25,
  },
  chartAmount: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '800',
  },
  chartIncrease: {
    color: COLORS.green,
    fontSize: 11,
    fontWeight: '700',
  },
  chart: {
    height: 175,
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 8,
    marginTop: 20,
  },
  chartColumn: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
  },
  chartBarBackground: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#1B2A40',
    borderRadius: 5,
    overflow: 'hidden',
  },
  chartBar: {
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  chartMonth: {
    color: COLORS.muted,
    fontSize: 9,
    marginTop: 9,
  },
  activityMore: {
    color: COLORS.muted,
    fontSize: 18,
    letterSpacing: 2,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  activityIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityTitle: {
    color: '#E8EEF8',
    fontSize: 11,
    fontWeight: '700',
  },
  activityDescription: {
    color: COLORS.muted,
    fontSize: 9,
    marginTop: 5,
  },
  activityAmount: {
    fontSize: 9,
    fontWeight: '700',
    textAlign: 'right',
  },
  bottomBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    padding: 18,
    borderRadius: 13,
    backgroundColor: '#1C2040',
    borderWidth: 1,
    borderColor: '#383765',
  },
  bannerIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: '#383265',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerIconText: {
    fontSize: 22,
    color: COLORS.primaryLight,
  },
  bannerTitle: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '700',
  },
  bannerText: {
    color: COLORS.muted,
    fontSize: 10,
    lineHeight: 17,
    marginTop: 5,
  },
  bannerArrow: {
    color: COLORS.primaryLight,
    fontSize: 22,
  },
  dashboardCopyright: {
    color: '#64748B',
    fontSize: 9,
    letterSpacing: 1.2,
    textAlign: 'center',
    marginTop: 23,
    marginBottom: 10,
  },
});
