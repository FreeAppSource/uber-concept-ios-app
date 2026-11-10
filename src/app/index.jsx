import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import {
  coronavirusAlert,
  recentDestinations,
  vehicleModes,
  carRentalOptions,
  bikeRentalData,
  simulatedPins,
} from '../data';

const { width, height } = Dimensions.get('window');

export default function UberMainScreen() {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();

  // Active top tab (Ride, Order food, Rent)
  const [activeTab, setActiveTab] = useState('Ride');
  // Selected vehicle type mode: 'ride' | 'car' | 'bike' | 'scooter'
  const [selectedVehicle, setSelectedVehicle] = useState('ride');
  // Selected car variant index: 0 | 1 | 2
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  // Schedule state
  const [scheduleTime, setScheduleTime] = useState('Now');
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  // Show vehicle selector modal
  const [showVehiclePicker, setShowVehiclePicker] = useState(false);

  const selectedCar = carRentalOptions[selectedCarIndex];

  const handleReserveAwto = () => {
    Alert.alert(
      'Reserve on the Awto app',
      `Opening Awto App to reserve ${selectedCar.name} (${selectedCar.range}) with fuel & insurance included!`,
      [{ text: 'OK' }]
    );
  };

  const handleScanBike = () => {
    Alert.alert(
      'Scan to ride',
      `Activating camera scanner for ${bikeRentalData.name}. Hold device near the QR code on the handlebars.`,
      [{ text: 'Open Scanner' }, { text: 'Cancel', style: 'cancel' }]
    );
  };

  const handleReserveBike = () => {
    Alert.alert(
      'JUMP Bike Reserved',
      `${bikeRentalData.name} has been held for you for 15 minutes (${bikeRentalData.distanceCallout} away).`,
      [{ text: 'Great' }]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Background Interactive Map (Sketch: Uber Map ef6c8e28463e70ff4b50fd43128e89dc1034f956.png) */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/images/uber_map.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Live Pins Based on Active Mode */}
        {selectedVehicle === 'ride' &&
          simulatedPins.uberCars.map((pin) => (
            <View key={pin.id} style={[styles.mapPinWrapper, { top: pin.top, left: pin.left }]}>
              <Image source={pin.image} style={styles.carPin} resizeMode="contain" />
            </View>
          ))}

        {selectedVehicle === 'car' &&
          simulatedPins.awtoCars.map((pin, i) => (
            <TouchableOpacity
              key={pin.id}
              style={[styles.mapPinWrapper, { top: pin.top, left: pin.left }]}
              onPress={() => setSelectedCarIndex(i)}
            >
              <Image source={pin.image} style={styles.awtoPin} resizeMode="contain" />
            </TouchableOpacity>
          ))}

        {selectedVehicle === 'bike' &&
          simulatedPins.jumpBikes.map((pin) => (
            <View key={pin.id} style={[styles.mapPinWrapper, { top: pin.top, left: pin.left }]}>
              <View style={styles.jumpCalloutBadge}>
                <Text style={styles.jumpCalloutText}>{pin.callout}</Text>
              </View>
              <Image source={pin.image} style={styles.bikePin} resizeMode="contain" />
            </View>
          ))}
      </View>

      {/* Top Floating App Bar */}
      <SafeAreaView style={styles.topSafeArea} edges={['top']}>
        {/* Top 3 Tabs (Sketch: Ride, Order food, Rent) */}
        <View style={[styles.topTabsBar, { backgroundColor: theme.surface }]}>
          {['Ride', 'Order food', 'Rent'].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.topTabBtn,
                  isActive && { borderBottomColor: theme.text, borderBottomWidth: 3 },
                ]}
                onPress={() => {
                  setActiveTab(tab);
                  if (tab === 'Rent') setSelectedVehicle('car');
                  if (tab === 'Ride') setSelectedVehicle('ride');
                }}
              >
                <Text
                  style={[
                    styles.topTabText,
                    isActive
                      ? [styles.activeTopTabText, { color: theme.text }]
                      : [styles.inactiveTopTabText, { color: theme.subText }],
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Vehicle Mode Floating Selector & Help Button (Sketch Vehicle Type) */}
        <View style={styles.vehicleTypeRow}>
          <TouchableOpacity
            style={[styles.vehicleTypeSelector, { backgroundColor: theme.surface }]}
            onPress={() => setShowVehiclePicker(!showVehiclePicker)}
            activeOpacity={0.85}
          >
            <View style={styles.vehicleSelectorContent}>
              <Image
                source={
                  selectedVehicle === 'ride'
                    ? require('../../assets/images/uber_car.png')
                    : selectedVehicle === 'car'
                    ? require('../../assets/images/awto_car.png')
                    : selectedVehicle === 'bike'
                    ? require('../../assets/images/jump_bike.png')
                    : require('../../assets/images/jump_scooter.png')
                }
                style={styles.vehicleSelectorIcon}
                resizeMode="contain"
              />
              <Text style={[styles.vehicleSelectorText, { color: theme.text }]}>
                {selectedVehicle === 'ride'
                  ? 'Ride'
                  : selectedVehicle === 'car'
                  ? 'Car'
                  : selectedVehicle === 'bike'
                  ? 'Bike'
                  : 'Scooter'}
              </Text>
              <Ionicons name="chevron-down" size={16} color={theme.text} />
            </View>
          </TouchableOpacity>

          <View style={styles.topRightControls}>
            <TouchableOpacity
              style={[styles.circleActionBtn, { backgroundColor: theme.surface, marginRight: 8 }]}
              onPress={toggleTheme}
            >
              <Ionicons name={isDark ? 'sunny' : 'moon'} size={18} color={theme.text} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.helpBadgeBtn, { backgroundColor: theme.surface }]}
              onPress={() =>
                Alert.alert(
                  'Uber Support & Help',
                  '24/7 dedicated safety support, trip assistance, and rental guidelines.',
                  [{ text: 'Close' }]
                )
              }
            >
              <Ionicons name="help-circle-outline" size={18} color={theme.text} />
              <Text style={[styles.helpText, { color: theme.text }]}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Vehicle Type Dropdown Drawer (Sketch: Rent - Bike / Car - Vehicle Type) */}
        {showVehiclePicker && (
          <View style={[styles.vehicleDropdownCard, { backgroundColor: theme.surface }]}>
            <Text style={[styles.dropdownTitle, { color: theme.subText }]}>
              SELECT TRANSPORTATION
            </Text>
            <View style={styles.dropdownGrid}>
              {vehicleModes.map((v) => {
                const isSelected = selectedVehicle === v.id;
                return (
                  <TouchableOpacity
                    key={v.id}
                    style={[
                      styles.vehicleCardItem,
                      {
                        backgroundColor: isSelected ? colors.accentBlueSoft : theme.surfaceSubtle,
                        borderColor: isSelected ? colors.accentBlue : 'transparent',
                      },
                    ]}
                    onPress={() => {
                      setSelectedVehicle(v.id);
                      if (v.id === 'ride') setActiveTab('Ride');
                      else setActiveTab('Rent');
                      setShowVehiclePicker(false);
                    }}
                  >
                    <Image source={v.icon} style={styles.vehicleModeImg} resizeMode="contain" />
                    <Text style={[styles.vehicleItemName, { color: theme.text }]}>{v.name}</Text>
                    <Text style={[styles.vehicleItemBadge, { color: colors.accentBlue }]}>
                      {v.badge}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}
      </SafeAreaView>

      {/* Bottom Sheet Based on Mode */}
      {selectedVehicle === 'ride' && (
        <View style={[styles.bottomSheet, { backgroundColor: theme.sheetBg }]}>
          {/* Coronavirus Alert (Sketch: Travel only if necessary / Limit the spread) */}
          <View style={[styles.covidAlertBox, { backgroundColor: colors.accentBlueSoft }]}>
            <Ionicons name="information-circle" size={18} color={colors.accentBlue} />
            <View style={styles.covidMeta}>
              <Text style={[styles.covidMainText, { color: colors.accentBlue }]}>
                {coronavirusAlert.title}
              </Text>
              <Text style={[styles.covidSubText, { color: colors.mediumGray }]}>
                {coronavirusAlert.subtitle}
              </Text>
            </View>
          </View>

          {/* Where to? Input Row (Sketch: Now / Where to?) */}
          <View style={[styles.whereToCard, { backgroundColor: theme.inputBg }]}>
            <TouchableOpacity
              style={styles.schedulePickerBtn}
              onPress={() =>
                setScheduleTime((s) => (s === 'Now' ? 'Schedule Later' : 'Now'))
              }
            >
              <Ionicons name="time" size={16} color={theme.text} />
              <Text style={[styles.scheduleText, { color: theme.text }]}>{scheduleTime}</Text>
              <Ionicons name="chevron-down" size={14} color={theme.text} />
            </TouchableOpacity>

            <View style={styles.verticalSep} />

            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Where to?"
              placeholderTextColor={theme.subText}
              style={[styles.whereToInput, { color: theme.text }]}
            />
          </View>

          {/* Destination Shortcuts (Sketch: Eliodoro Yañez 809 & Carmen Fariña) */}
          <View style={styles.destList}>
            {recentDestinations.map((d) => (
              <TouchableOpacity
                key={d.id}
                style={[styles.destRow, { borderBottomColor: theme.divider }]}
                onPress={() => setSearchQuery(d.name)}
              >
                <View style={[styles.destIconCircle, { backgroundColor: theme.surfaceSubtle }]}>
                  <Ionicons name="location" size={18} color={theme.text} />
                </View>
                <View style={styles.destMeta}>
                  <Text style={[styles.destName, { color: theme.text }]}>{d.name}</Text>
                  <Text style={[styles.destSubtext, { color: theme.subText }]}>{d.subtext}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {selectedVehicle === 'car' && (
        <View style={[styles.bottomSheet, { backgroundColor: theme.sheetBg }]}>
          {/* Header Row: Awto CityCar / Range / Logo */}
          <View style={styles.carHeaderRow}>
            <View style={styles.carTitleCol}>
              <Text style={[styles.carNameText, { color: theme.text }]}>
                {selectedCar.name}
              </Text>
              <View style={styles.carRangeBadge}>
                <Ionicons name="speedometer-outline" size={15} color={colors.accentGreen} />
                <Text style={[styles.carRangeText, { color: colors.accentGreen }]}>
                  {selectedCar.range}
                </Text>
              </View>
            </View>
            <Image source={selectedCar.logo} style={styles.awtoLogoImg} resizeMode="contain" />
          </View>

          {/* Car Variant Selector Pills (CityCar 254km, CityCar 850km, SUV 500km) */}
          <View style={styles.carVariantsRow}>
            {carRentalOptions.map((c, idx) => {
              const isSelected = selectedCarIndex === idx;
              return (
                <TouchableOpacity
                  key={c.id}
                  style={[
                    styles.carPillBtn,
                    {
                      backgroundColor: isSelected ? colors.primary : theme.surfaceSubtle,
                    },
                  ]}
                  onPress={() => setSelectedCarIndex(idx)}
                >
                  <Text
                    style={[
                      styles.carPillText,
                      { color: isSelected ? '#FFFFFF' : theme.text },
                    ]}
                  >
                    {c.type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Description & Included Perks (Sketch: Rent a car by the minute / Gas & Parking) */}
          <View style={[styles.includedPerksBox, { backgroundColor: theme.surfaceSubtle }]}>
            <Text style={[styles.perksTitle, { color: theme.text }]}>
              {selectedCar.tagline}
            </Text>
            <Text style={[styles.perksDesc, { color: theme.subText }]}>
              {selectedCar.serviceDesc}
            </Text>
          </View>

          {/* Action Button: Reserve on the Awto app (Sketch Reserve Button) */}
          <TouchableOpacity
            style={[styles.primaryActionBtn, { backgroundColor: colors.primary }]}
            onPress={handleReserveAwto}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryActionText}>Reserve on the Awto app</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      )}

      {selectedVehicle === 'bike' && (
        <View style={[styles.bottomSheet, { backgroundColor: theme.sheetBg }]}>
          {/* Bike Info Row (Sketch: JUMP Bike 13892 / 16 kilometers range) */}
          <View style={styles.bikeInfoRow}>
            <Image
              source={require('../../assets/images/jump_bike.png')}
              style={styles.bikeGraphic}
              resizeMode="contain"
            />
            <View style={styles.bikeMetaCol}>
              <Text style={[styles.bikeTitle, { color: theme.text }]}>
                {bikeRentalData.name}
              </Text>
              <View style={styles.bikeRangeRow}>
                <Ionicons name="battery-charging" size={16} color={colors.accentGreen} />
                <Text style={[styles.bikeRangeText, { color: colors.accentGreen }]}>
                  {bikeRentalData.range}
                </Text>
              </View>
              <Text style={[styles.bikePriceText, { color: theme.subText }]}>
                {bikeRentalData.priceUnlock} • {bikeRentalData.pricePerMin}
              </Text>
            </View>
          </View>

          {/* Dual Action Buttons: Scan to ride & Reserve (Sketch Artboard Rent - Bike - Reserve) */}
          <View style={styles.bikeActionButtons}>
            <TouchableOpacity
              style={[styles.scanBtn, { backgroundColor: colors.accentRed }]}
              onPress={handleScanBike}
              activeOpacity={0.85}
            >
              <Ionicons name="qr-code" size={18} color="#FFFFFF" />
              <Text style={styles.scanBtnText}>Scan to ride</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.reserveBikeBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.cardBorder }]}
              onPress={handleReserveBike}
              activeOpacity={0.85}
            >
              <Ionicons name="bookmark-outline" size={18} color={theme.text} />
              <Text style={[styles.reserveBikeText, { color: theme.text }]}>Reserve</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapPinWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carPin: { width: 34, height: 34 },
  awtoPin: { width: 38, height: 38 },
  bikePin: { width: 32, height: 32 },
  jumpCalloutBadge: {
    backgroundColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 4,
  },
  jumpCalloutText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  topSafeArea: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  topTabsBar: {
    flexDirection: 'row',
    borderRadius: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 10,
  },
  topTabBtn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTabText: { fontSize: 15 },
  activeTopTabText: { fontWeight: '900' },
  inactiveTopTabText: { fontWeight: '600' },
  vehicleTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleTypeSelector: {
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  vehicleSelectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  vehicleSelectorIcon: { width: 28, height: 28 },
  vehicleSelectorText: { fontSize: 14, fontWeight: '800' },
  topRightControls: { flexDirection: 'row', alignItems: 'center' },
  circleActionBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  helpBadgeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  helpText: { fontSize: 13, fontWeight: '700' },
  vehicleDropdownCard: {
    marginTop: 8,
    padding: 14,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 6,
  },
  dropdownTitle: { fontSize: 11, fontWeight: '800', letterSpacing: 1, marginBottom: 10 },
  dropdownGrid: { flexDirection: 'row', gap: 8 },
  vehicleCardItem: {
    flex: 1,
    padding: 10,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
  },
  vehicleModeImg: { width: 36, height: 36, marginBottom: 4 },
  vehicleItemName: { fontSize: 12, fontWeight: '800' },
  vehicleItemBadge: { fontSize: 10, fontWeight: '700', marginTop: 2 },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  covidAlertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    gap: 10,
    marginBottom: 14,
  },
  covidMeta: { flex: 1 },
  covidMainText: { fontSize: 13, fontWeight: '800' },
  covidSubText: { fontSize: 11, fontWeight: '500', marginTop: 1 },
  whereToCard: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 26,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  schedulePickerBtn: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  scheduleText: { fontSize: 13, fontWeight: '700' },
  verticalSep: { width: 1, height: 24, backgroundColor: '#CCC', marginHorizontal: 12 },
  whereToInput: { flex: 1, fontSize: 16, fontWeight: '700' },
  destList: { gap: 10 },
  destRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  destIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  destMeta: { marginLeft: 14, flex: 1 },
  destName: { fontSize: 15, fontWeight: '700' },
  destSubtext: { fontSize: 12, fontWeight: '500', marginTop: 2 },
  carHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  carTitleCol: { flex: 1 },
  carNameText: { fontSize: 20, fontWeight: '900' },
  carRangeBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  carRangeText: { fontSize: 13, fontWeight: '800' },
  awtoLogoImg: { width: 72, height: 32 },
  carVariantsRow: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  carPillBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: radius.full,
    alignItems: 'center',
  },
  carPillText: { fontSize: 12, fontWeight: '800' },
  includedPerksBox: {
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
  },
  perksTitle: { fontSize: 14, fontWeight: '800', marginBottom: 2 },
  perksDesc: { fontSize: 12, fontWeight: '500' },
  primaryActionBtn: {
    height: 52,
    borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  primaryActionText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  bikeInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bikeGraphic: { width: 74, height: 74 },
  bikeMetaCol: { marginLeft: 16, flex: 1 },
  bikeTitle: { fontSize: 18, fontWeight: '900' },
  bikeRangeRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginVertical: 4 },
  bikeRangeText: { fontSize: 13, fontWeight: '800' },
  bikePriceText: { fontSize: 12, fontWeight: '500' },
  bikeActionButtons: { flexDirection: 'row', gap: 12 },
  scanBtn: {
    flex: 1.2,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  scanBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  reserveBikeBtn: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  reserveBikeText: { fontSize: 15, fontWeight: '800' },
});
