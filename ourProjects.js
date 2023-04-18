│   .classpath
│   .factorypath
│   .gitignore
│   .project
│   mvn
│   mvn.cmd
│   pom.xml
│
├───export
│       2022-05-12_station_hourly.csv
│       2022-05-12_station_hourly.xlsx
│
├───src
│   ├───main
│   │   ├───java
│   │   │   ├───META-INF
│   │   │   │       MANIFEST.MF
│   │   │   │
│   │   │   └───pl
│   │   │       └───atmopolis
│   │   │           │   Constants.java
│   │   │           │   GeoServerMediaType.java
│   │   │           │   MaintenanceService.java
│   │   │           │   ScheduledConfiguration.java
│   │   │           │   ScheduledJob.java
│   │   │           │
│   │   │           ├───chart
│   │   │           │       ChartDTO.java
│   │   │           │       Data.java
│   │   │           │       DataLabels.java
│   │   │           │       Dataset.java
│   │   │           │       Hover.java
│   │   │           │       Label.java
│   │   │           │       Legend.java
│   │   │           │       Options.java
│   │   │           │       Plugins.java
│   │   │           │       ScaleLabel.java
│   │   │           │       Scales.java
│   │   │           │       Title.java
│   │   │           │       Tooltips.java
│   │   │           │       XAxis.java
│   │   │           │       YAxis.java
│   │   │           │
│   │   │           ├───ckan
│   │   │           │   │   CkanController.java
│   │   │           │   │   CkanControllerImpl.java
│   │   │           │   │   ResourceFormat.java
│   │   │           │   │
│   │   │           │   ├───entity
│   │   │           │   │       CkanDataset.java
│   │   │           │   │       CkanResource.java
│   │   │           │   │
│   │   │           │   ├───repository
│   │   │           │   │       CkanDatasetRepository.java
│   │   │           │   │       CkanResourceRepository.java
│   │   │           │   │
│   │   │           │   └───service
│   │   │           │           CkanDatasetService.java
│   │   │           │           CkanDatasetServiceImpl.java
│   │   │           │           CkanResourceService.java
│   │   │           │           CkanResourceServiceImpl.java
│   │   │           │
│   │   │           ├───config
│   │   │           │       CfgController.java
│   │   │           │       CFG_PROPERTY.java
│   │   │           │       CFG_REPOSITORY.java
│   │   │           │
│   │   │           ├───controller
│   │   │           │       ExceedStatController.java
│   │   │           │       GeoProcessController.java
│   │   │           │       PointDataController.java
│   │   │           │       PointDataControllerImpl.java
│   │   │           │       ProjectController.java
│   │   │           │       ProjectControllerImpl.java
│   │   │           │       RegionController.java
│   │   │           │       RegionControllerImpl.java
│   │   │           │       RegionStatController.java
│   │   │           │
│   │   │           ├───dataServiceApplication
│   │   │           │       CacheConfig.java
│   │   │           │       ConfService.java
│   │   │           │       DataServicesApplication.java
│   │   │           │       PersistenceJPAConfig.java
│   │   │           │       SecurityConfig.java
│   │   │           │       SwaggerConfig.java
│   │   │           │       TimeLogger.java
│   │   │           │       Tools.java
│   │   │           │
│   │   │           ├───dto
│   │   │           │       CsvDTO.java
│   │   │           │       PointDataDTO.java
│   │   │           │       PointDistanceDTO.java
│   │   │           │       ProjectInputDTO.java
│   │   │           │       RegionImportDTO.java
│   │   │           │       RegionImportDTOList.java
│   │   │           │       RegionStatDto.java
│   │   │           │
│   │   │           ├───entity
│   │   │           │       Configuration.java
│   │   │           │       ExceedStat.java
│   │   │           │       Isoline.java
│   │   │           │       IsolineOut.java
│   │   │           │       IsolineSet.java
│   │   │           │       PointData.java
│   │   │           │       PointGrid.java
│   │   │           │       Project.java
│   │   │           │       Region.java
│   │   │           │       RegionStat.java
│   │   │           │
│   │   │           ├───enums
│   │   │           │       GeoprocessingMode.java
│   │   │           │       RegionType.java
│   │   │           │       ValueType.java
│   │   │           │       ZasobEngine.java
│   │   │           │       ZasobMode.java
│   │   │           │
│   │   │           ├───export
│   │   │           │       ConvertXLSXToCSV.java
│   │   │           │       ExcelWriter.java
│   │   │           │       ExportController.java
│   │   │           │
│   │   │           ├───forecast
│   │   │           │   └───importer
│   │   │           │           DataFile.java
│   │   │           │           ForecastController.java
│   │   │           │           PointDataFile.java
│   │   │           │           PointDataFileRepository.java
│   │   │           │           PointDataFileService.java
│   │   │           │
│   │   │           ├───geoserver
│   │   │           │   │   CapabilitiesProxyController.java
│   │   │           │   │   Geometry.java
│   │   │           │   │   GeoserverController.java
│   │   │           │   │   GeoserverService.java
│   │   │           │   │   Granule.java
│   │   │           │   │
│   │   │           │   └───CoverageDTO
│   │   │           │           Crs.java
│   │   │           │           Feature.java
│   │   │           │           Granules.java
│   │   │           │           Properties.java
│   │   │           │           Properties_.java
│   │   │           │
│   │   │           ├───luma
│   │   │           │   └───services
│   │   │           │       │   AQIRecomendationMessageService.java
│   │   │           │       │   MeteoDTOMapper.java
│   │   │           │       │   MeteoService.java
│   │   │           │       │   MeteoServiceImpl.java
│   │   │           │       │
│   │   │           │       ├───internationalization
│   │   │           │       │       InternationalizationMessageConfig.java
│   │   │           │       │
│   │   │           │       └───public_api
│   │   │           │           └───rest
│   │   │           │                   PointDataModelService.java
│   │   │           │                   PointDataRangeApiController.java
│   │   │           │                   ProjektyApiController.java
│   │   │           │                   PunktProjektApiController.java
│   │   │           │
│   │   │           ├───luma-services-public-api
│   │   │           │   │   pom.xml
│   │   │           │   │   services-public-api.iml
│   │   │           │   │
│   │   │           │   ├───src
│   │   │           │   │   └───main
│   │   │           │   │       └───resources
│   │   │           │   │               luma_public_api.yaml
│   │   │           │   │
│   │   │           │   └───target
│   │   │           │       │   services-public-api-1.0.0-SNAPSHOT.jar
│   │   │           │       │
│   │   │           │       ├───classes
│   │   │           │       │   │   .netbeans_automatic_build
│   │   │           │       │   │   luma_public_api.yaml
│   │   │           │       │   │
│   │   │           │       │   └───pl
│   │   │           │       │       └───atmopolis
│   │   │           │       │           └───luma
│   │   │           │       │               └───services
│   │   │           │       │                   └───public_api
│   │   │           │       │                       │   DetektoryApi.class
│   │   │           │       │                       │   PointDataRangeApi.class
│   │   │           │       │                       │   ProjektyApi.class
│   │   │           │       │                       │   PunktProjektApi.class
│   │   │           │       │                       │
│   │   │           │       │                       └───model
│   │   │           │       │                               Detektor.class
│   │   │           │       │                               Meteo.class
│   │   │           │       │                               Poi.class
│   │   │           │       │                               PointData.class
│   │   │           │       │                               Projekt.class
│   │   │           │       │                               Zalecenie.class
│   │   │           │       │                               Zanieczyszczenie.class
│   │   │           │       │
│   │   │           │       ├───generated-sources
│   │   │           │       │   ├───annotations
│   │   │           │       │   └───swagger
│   │   │           │       │       │   .swagger-codegen-ignore
│   │   │           │       │       │   pom.xml
│   │   │           │       │       │   README.md
│   │   │           │       │       │
│   │   │           │       │       ├───.swagger-codegen
│   │   │           │       │       │       VERSION
│   │   │           │       │       │
│   │   │           │       │       └───src
│   │   │           │       │           └───main
│   │   │           │       │               └───java
│   │   │           │       │                   └───pl
│   │   │           │       │                       └───atmopolis
│   │   │           │       │                           └───luma
│   │   │           │       │                               └───services
│   │   │           │       │                                   └───public_api
│   │   │           │       │                                       │   DetektoryApi.java
│   │   │           │       │                                       │   PointDataRangeApi.java
│   │   │           │       │                                       │   ProjektyApi.java
│   │   │           │       │                                       │   PunktProjektApi.java
│   │   │           │       │                                       │
│   │   │           │       │                                       └───model
│   │   │           │       │                                               Detektor.java
│   │   │           │       │                                               Meteo.java
│   │   │           │       │                                               Poi.java
│   │   │           │       │                                               PointData.java
│   │   │           │       │                                               Projekt.java
│   │   │           │       │                                               Zalecenie.java
│   │   │           │       │                                               Zanieczyszczenie.java
│   │   │           │       │
│   │   │           │       ├───maven-archiver
│   │   │           │       │       pom.properties
│   │   │           │       │
│   │   │           │       ├───maven-status
│   │   │           │       │   └───maven-compiler-plugin
│   │   │           │       │       └───compile
│   │   │           │       │           └───default-compile
│   │   │           │       │                   createdFiles.lst
│   │   │           │       │                   inputFiles.lst
│   │   │           │       │
│   │   │           │       └───test-classes
│   │   │           │               .netbeans_automatic_build
│   │   │           │
│   │   │           ├───lumaapi
│   │   │           │       PomiarLuma.java
│   │   │           │       PomiarLumaController.java
│   │   │           │       PomiarLumaDTO.java
│   │   │           │       PomiarLumaRepository.java
│   │   │           │       PomiarLumaService.java
│   │   │           │
│   │   │           ├───mailing
│   │   │           │       MailingController.java
│   │   │           │       MailSender.java
│   │   │           │
│   │   │           ├───meteo
│   │   │           │       MeteoController.java
│   │   │           │       MeteoDTO.java
│   │   │           │
│   │   │           ├───OpenAQ
│   │   │           │   ├───controller
│   │   │           │   │       AQAggregatorController.java
│   │   │           │   │       AQAggregatorControllerImpl.java
│   │   │           │   │       AQCollectorController.java
│   │   │           │   │       AQCollectorControllerImpl.java
│   │   │           │   │       AQIndexController.java
│   │   │           │   │       AQIndexControllerImpl.java
│   │   │           │   │       AQStationController.java
│   │   │           │   │       AQStationControllerImpl.java
│   │   │           │   │
│   │   │           │   ├───DTO
│   │   │           │   │       AQMainIndexDTO.java
│   │   │           │   │       MeasurementDTO.java
│   │   │           │   │
│   │   │           │   ├───dtodates
│   │   │           │   │       DatesDTO.java
│   │   │           │   │
│   │   │           │   ├───DTOInput
│   │   │           │   │   │   AveragingPeriod.java
│   │   │           │   │   │   Coordinates.java
│   │   │           │   │   │   Date.java
│   │   │           │   │   │   IndexDTO.java
│   │   │           │   │   │   Measurement.java
│   │   │           │   │   │   Meta.java
│   │   │           │   │   │   OpenAQDTO.java
│   │   │           │   │   │   Result.java
│   │   │           │   │   │
│   │   │           │   │   └───measurements
│   │   │           │   │           OpenAQMDTO.java
│   │   │           │   │           ResultM.java
│   │   │           │   │
│   │   │           │   ├───entity
│   │   │           │   │       AQBaseMeasureEntity.java
│   │   │           │   │       AQCollector.java
│   │   │           │   │       AQIndex.java
│   │   │           │   │       AQIndexLevel.java
│   │   │           │   │       AQMeasurement.java
│   │   │           │   │       AQMeasurementImportLog.java
│   │   │           │   │       AQMeasurementSet.java
│   │   │           │   │       AQParameter.java
│   │   │           │   │       AQStat.java
│   │   │           │   │       AQStation.java
│   │   │           │   │       AQTimeResolution.java
│   │   │           │   │       AQTimeSet.java
│   │   │           │   │       CompleteStat.java
│   │   │           │   │       TimeFrame.java
│   │   │           │   │       TimeResolution.java
│   │   │           │   │
│   │   │           │   ├───enums
│   │   │           │   │       Lang.java
│   │   │           │   │
│   │   │           │   ├───repository
│   │   │           │   │       AQIndexLevelRepository.java
│   │   │           │   │       AQIndexRepository.java
│   │   │           │   │       AQMeasurementImportLogRepository.java
│   │   │           │   │       AQMeasurementRepository.java
│   │   │           │   │       AQMeasurementSetRepository.java
│   │   │           │   │       AQParameterRepository.java
│   │   │           │   │       AQStationRepository.java
│   │   │           │   │       AQStatRepository.java
│   │   │           │   │       AQTimeSetRepository.java
│   │   │           │   │       CompleteStatRepository.java
│   │   │           │   │       TimeResolutionRepository.java
│   │   │           │   │
│   │   │           │   └───service
│   │   │           │           AQIndexLevelService.java
│   │   │           │           AQIndexService.java
│   │   │           │           AQMeasurementImportLogService.java
│   │   │           │           AQMeasurementService.java
│   │   │           │           AQMeasurementSetService.java
│   │   │           │           AQParameterService.java
│   │   │           │           AQStationService.java
│   │   │           │           AQStatService.java
│   │   │           │           AQStatServiceImpl.java
│   │   │           │           AQTimeSetService.java
│   │   │           │           CompleteStatService.java
│   │   │           │           TimeResolutionService.java
│   │   │           │
│   │   │           ├───reporting
│   │   │           │   │   AQMeasureReportController.java
│   │   │           │   │   AQMeasureReportControllerImpl.java
│   │   │           │   │   AQStationReportController.java
│   │   │           │   │   AQStationsReportControllerImpl.java
│   │   │           │   │   OpenForecastController.java
│   │   │           │   │   PercentageStat.java
│   │   │           │   │   PomiarController.java
│   │   │           │   │   RegionReportController.java
│   │   │           │   │   ReportController.java
│   │   │           │   │   ReportService.java
│   │   │           │   │
│   │   │           │   └───dto
│   │   │           │           ForecastDTO.java
│   │   │           │           MeasureReportDTO.java
│   │   │           │           PomiarDTO.java
│   │   │           │           RegionDTO.java
│   │   │           │           RegionsReportDTO.java
│   │   │           │           StationDetailsDTO.java
│   │   │           │           StationsReportDTO.java
│   │   │           │           TimeRangeItem.java
│   │   │           │           TimeRanges.java
│   │   │           │           ValueTypeDTO.java
│   │   │           │
│   │   │           ├───repository
│   │   │           │       ConfigurationRepository.java
│   │   │           │       ExceedStatRepository.java
│   │   │           │       IsolineOutRepository.java
│   │   │           │       IsolineRepository.java
│   │   │           │       IsolineSetRepository.java
│   │   │           │       PointDataRepository.java
│   │   │           │       PointGridRepository.java
│   │   │           │       ProjectRepository.java
│   │   │           │       RegionRepository.java
│   │   │           │       RegionStatRepository.java
│   │   │           │
│   │   │           ├───service
│   │   │           │       ConfigurationService.java
│   │   │           │       ConfigurationServiceImpl.java
│   │   │           │       DataFileService.java
│   │   │           │       DataFileServiceImpl.java
│   │   │           │       DataTimeService.java
│   │   │           │       ExceedStatService.java
│   │   │           │       GdalService.java
│   │   │           │       GdalServiceImpl.java
│   │   │           │       GeometryService.java
│   │   │           │       GeometryServiceImpl.java
│   │   │           │       IsolineOutService.java
│   │   │           │       IsolineOutServiceImpl.java
│   │   │           │       IsolineService.java
│   │   │           │       IsolineServiceImpl.java
│   │   │           │       IsolineSetService.java
│   │   │           │       IsolineSetServiceImpl.java
│   │   │           │       PointDataService.java
│   │   │           │       PointDataServiceImpl.java
│   │   │           │       PointGridService.java
│   │   │           │       PointGridServiceImpl.java
│   │   │           │       ProjectService.java
│   │   │           │       ProjectServiceImpl.java
│   │   │           │       RegionService.java
│   │   │           │       RegionServiceImpl.java
│   │   │           │       RegionStatService.java
│   │   │           │       TestService.java
│   │   │           │
│   │   │           ├───spatial
│   │   │           │       SpatialDialect.java
│   │   │           │
│   │   │           ├───table
│   │   │           │       Col.java
│   │   │           │       Item.java
│   │   │           │       TableDTO.java
│   │   │           │       TableRegionsDTO.java
│   │   │           │       TableStationsDTO.java
│   │   │           │
│   │   │           └───views
│   │   │                   ViewService.java
│   │   │
│   │   └───resources
│   │       │   application.properties
│   │       │   aqi_messages.properties
│   │       │   aqi_messages_en.properties
│   │       │   aqi_messages_pl.properties
│   │       │   aqi_messages_sq.properties
│   │       │   aqi_messages_sr.properties
│   │       │   FeatureTypeTemplate.json
│   │       │   indexDefinition.json
│   │       │
│   │       ├───templates
│   │       │       PrognozaPowiadomienie.html
│   │       │
│   │       └───views
│   │               aqstation_data_view.sql
│   │               isolineout_view.sql
│   │               pointdata_view.sql
│   │               prod_settings.sql
│   │               regionstat_view.sql
│   │               widoki_tmp.sql
│   │
│   └───test
│       └───java
│           └───pl
│               └───atmopolis
│                   ├───dto
│                   │       CsvDTOTest.java
│                   │
│                   └───notificationservice
│                           NotificationServiceApplicationTests.java
│                           PersistenceJPAConfig.java
│
├───target
│   │   dataservices.jar
│   │   dataservices.jar.original
│   │
│   ├───classes
│   │   │   .netbeans_automatic_build
│   │   │   application.properties
│   │   │   aqi_messages.properties
│   │   │   aqi_messages_en.properties
│   │   │   aqi_messages_pl.properties
│   │   │   aqi_messages_sq.properties
│   │   │   aqi_messages_sr.properties
│   │   │   FeatureTypeTemplate.json
│   │   │   indexDefinition.json
│   │   │
│   │   ├───pl
│   │   │   └───atmopolis
│   │   │       │   Constants.class
│   │   │       │   GeoServerMediaType.class
│   │   │       │   MaintenanceService.class
│   │   │       │   ScheduledConfiguration.class
│   │   │       │   ScheduledJob.class
│   │   │       │
│   │   │       ├───chart
│   │   │       │       ChartDTO.class
│   │   │       │       Data.class
│   │   │       │       DataLabels.class
│   │   │       │       Dataset.class
│   │   │       │       Hover.class
│   │   │       │       Label.class
│   │   │       │       Legend.class
│   │   │       │       Options.class
│   │   │       │       Plugins.class
│   │   │       │       ScaleLabel.class
│   │   │       │       Scales.class
│   │   │       │       Title.class
│   │   │       │       Tooltips.class
│   │   │       │       XAxis.class
│   │   │       │       YAxis.class
│   │   │       │
│   │   │       ├───ckan
│   │   │       │   │   CkanController.class
│   │   │       │   │   CkanControllerImpl.class
│   │   │       │   │   ResourceFormat.class
│   │   │       │   │
│   │   │       │   ├───entity
│   │   │       │   │       CkanDataset.class
│   │   │       │   │       CkanResource.class
│   │   │       │   │
│   │   │       │   ├───repository
│   │   │       │   │       CkanDatasetRepository.class
│   │   │       │   │       CkanResourceRepository.class
│   │   │       │   │
│   │   │       │   └───service
│   │   │       │           CkanDatasetService.class
│   │   │       │           CkanDatasetServiceImpl.class
│   │   │       │           CkanResourceService.class
│   │   │       │           CkanResourceServiceImpl.class
│   │   │       │
│   │   │       ├───config
│   │   │       │       CfgController.class
│   │   │       │       CFG_PROPERTY.class
│   │   │       │       CFG_REPOSITORY.class
│   │   │       │
│   │   │       ├───controller
│   │   │       │       ExceedStatController$1.class
│   │   │       │       ExceedStatController.class
│   │   │       │       GeoProcessController.class
│   │   │       │       PointDataController.class
│   │   │       │       PointDataControllerImpl$1.class
│   │   │       │       PointDataControllerImpl.class
│   │   │       │       ProjectController.class
│   │   │       │       ProjectControllerImpl.class
│   │   │       │       RegionController.class
│   │   │       │       RegionControllerImpl.class
│   │   │       │       RegionStatController.class
│   │   │       │
│   │   │       ├───dataServiceApplication
│   │   │       │       CacheConfig$1.class
│   │   │       │       CacheConfig.class
│   │   │       │       ConfService$1.class
│   │   │       │       ConfService.class
│   │   │       │       DataServicesApplication.class
│   │   │       │       PersistenceJPAConfig.class
│   │   │       │       SecurityConfig.class
│   │   │       │       SwaggerConfig.class
│   │   │       │       TimeLogger.class
│   │   │       │       Tools.class
│   │   │       │
│   │   │       ├───dto
│   │   │       │       CsvDTO.class
│   │   │       │       PointDataDTO.class
│   │   │       │       PointDistanceDTO.class
│   │   │       │       ProjectInputDTO.class
│   │   │       │       RegionImportDTO.class
│   │   │       │       RegionImportDTOList.class
│   │   │       │       RegionStatDto.class
│   │   │       │
│   │   │       ├───entity
│   │   │       │       Configuration.class
│   │   │       │       ExceedStat.class
│   │   │       │       Isoline.class
│   │   │       │       IsolineOut.class
│   │   │       │       IsolineSet.class
│   │   │       │       PointData.class
│   │   │       │       PointGrid.class
│   │   │       │       Project.class
│   │   │       │       Region.class
│   │   │       │       RegionStat.class
│   │   │       │
│   │   │       ├───enums
│   │   │       │       GeoprocessingMode.class
│   │   │       │       RegionType.class
│   │   │       │       ValueType.class
│   │   │       │       ZasobEngine.class
│   │   │       │       ZasobMode.class
│   │   │       │
│   │   │       ├───export
│   │   │       │       ConvertXLSXToCSV$1.class
│   │   │       │       ConvertXLSXToCSV.class
│   │   │       │       ExcelWriter.class
│   │   │       │       ExportController.class
│   │   │       │
│   │   │       ├───forecast
│   │   │       │   └───importer
│   │   │       │           DataFile.class
│   │   │       │           ForecastController$1.class
│   │   │       │           ForecastController.class
│   │   │       │           PointDataFile.class
│   │   │       │           PointDataFileRepository.class
│   │   │       │           PointDataFileService.class
│   │   │       │
│   │   │       ├───geoserver
│   │   │       │   │   CapabilitiesProxyController.class
│   │   │       │   │   Geometry.class
│   │   │       │   │   GeoserverController.class
│   │   │       │   │   GeoserverService.class
│   │   │       │   │   Granule.class
│   │   │       │   │
│   │   │       │   └───CoverageDTO
│   │   │       │           Crs.class
│   │   │       │           Feature.class
│   │   │       │           Granules.class
│   │   │       │           Properties.class
│   │   │       │           Properties_.class
│   │   │       │
│   │   │       ├───luma
│   │   │       │   └───services
│   │   │       │       │   AQIRecomendationMessageService.class
│   │   │       │       │   MeteoDTOMapper.class
│   │   │       │       │   MeteoService.class
│   │   │       │       │   MeteoServiceImpl$1.class
│   │   │       │       │   MeteoServiceImpl.class
│   │   │       │       │
│   │   │       │       ├───internationalization
│   │   │       │       │       InternationalizationMessageConfig.class
│   │   │       │       │
│   │   │       │       └───public_api
│   │   │       │           │   DetektoryApi.class
│   │   │       │           │   PointDataRangeApi.class
│   │   │       │           │   ProjektyApi.class
│   │   │       │           │   PunktProjektApi.class
│   │   │       │           │
│   │   │       │           ├───model
│   │   │       │           │       Detektor.class
│   │   │       │           │       Meteo.class
│   │   │       │           │       Poi.class
│   │   │       │           │       PointData.class
│   │   │       │           │       Projekt.class
│   │   │       │           │       Zalecenie.class
│   │   │       │           │       Zanieczyszczenie.class
│   │   │       │           │
│   │   │       │           └───rest
│   │   │       │                   PointDataModelService.class
│   │   │       │                   PointDataRangeApiController$1.class
│   │   │       │                   PointDataRangeApiController.class
│   │   │       │                   ProjektyApiController.class
│   │   │       │                   PunktProjektApiController.class
│   │   │       │
│   │   │       ├───lumaapi
│   │   │       │       PomiarLuma.class
│   │   │       │       PomiarLumaController$1.class
│   │   │       │       PomiarLumaController.class
│   │   │       │       PomiarLumaDTO.class
│   │   │       │       PomiarLumaRepository.class
│   │   │       │       PomiarLumaService.class
│   │   │       │
│   │   │       ├───mailing
│   │   │       │       MailingController.class
│   │   │       │       MailSender$1.class
│   │   │       │       MailSender.class
│   │   │       │
│   │   │       ├───meteo
│   │   │       │       MeteoController.class
│   │   │       │       MeteoDTO.class
│   │   │       │
│   │   │       ├───OpenAQ
│   │   │       │   ├───controller
│   │   │       │   │       AQAggregatorController.class
│   │   │       │   │       AQAggregatorControllerImpl.class
│   │   │       │   │       AQCollectorController.class
│   │   │       │   │       AQCollectorControllerImpl$1.class
│   │   │       │   │       AQCollectorControllerImpl$2.class
│   │   │       │   │       AQCollectorControllerImpl$3.class
│   │   │       │   │       AQCollectorControllerImpl.class
│   │   │       │   │       AQIndexController.class
│   │   │       │   │       AQIndexControllerImpl.class
│   │   │       │   │       AQStationController.class
│   │   │       │   │       AQStationControllerImpl.class
│   │   │       │   │
│   │   │       │   ├───DTO
│   │   │       │   │       AQMainIndexDTO.class
│   │   │       │   │       MeasurementDTO.class
│   │   │       │   │
│   │   │       │   ├───dtodates
│   │   │       │   │       DatesDTO.class
│   │   │       │   │
│   │   │       │   ├───DTOInput
│   │   │       │   │   │   AveragingPeriod.class
│   │   │       │   │   │   Coordinates.class
│   │   │       │   │   │   Date.class
│   │   │       │   │   │   IndexDTO.class
│   │   │       │   │   │   Measurement.class
│   │   │       │   │   │   Meta.class
│   │   │       │   │   │   OpenAQDTO.class
│   │   │       │   │   │   Result.class
│   │   │       │   │   │
│   │   │       │   │   └───measurements
│   │   │       │   │           OpenAQMDTO.class
│   │   │       │   │           ResultM.class
│   │   │       │   │
│   │   │       │   ├───entity
│   │   │       │   │       AQBaseMeasureEntity.class
│   │   │       │   │       AQCollector.class
│   │   │       │   │       AQIndex.class
│   │   │       │   │       AQIndexLevel.class
│   │   │       │   │       AQMeasurement.class
│   │   │       │   │       AQMeasurementImportLog.class
│   │   │       │   │       AQMeasurementSet.class
│   │   │       │   │       AQParameter.class
│   │   │       │   │       AQStat.class
│   │   │       │   │       AQStation.class
│   │   │       │   │       AQTimeResolution.class
│   │   │       │   │       AQTimeSet.class
│   │   │       │   │       CompleteStat.class
│   │   │       │   │       TimeFrame.class
│   │   │       │   │       TimeResolution.class
│   │   │       │   │
│   │   │       │   ├───enums
│   │   │       │   │       Lang.class
│   │   │       │   │
│   │   │       │   ├───repository
│   │   │       │   │       AQIndexLevelRepository.class
│   │   │       │   │       AQIndexRepository.class
│   │   │       │   │       AQMeasurementImportLogRepository.class
│   │   │       │   │       AQMeasurementRepository.class
│   │   │       │   │       AQMeasurementSetRepository.class
│   │   │       │   │       AQParameterRepository.class
│   │   │       │   │       AQStationRepository.class
│   │   │       │   │       AQStatRepository.class
│   │   │       │   │       AQTimeSetRepository.class
│   │   │       │   │       CompleteStatRepository.class
│   │   │       │   │       TimeResolutionRepository.class
│   │   │       │   │
│   │   │       │   └───service
│   │   │       │           AQIndexLevelService.class
│   │   │       │           AQIndexService.class
│   │   │       │           AQMeasurementImportLogService.class
│   │   │       │           AQMeasurementService.class
│   │   │       │           AQMeasurementSetService.class
│   │   │       │           AQParameterService.class
│   │   │       │           AQStationService.class
│   │   │       │           AQStatService.class
│   │   │       │           AQStatServiceImpl.class
│   │   │       │           AQTimeSetService.class
│   │   │       │           CompleteStatService.class
│   │   │       │           TimeResolutionService.class
│   │   │       │
│   │   │       ├───reporting
│   │   │       │   │   AQMeasureReportController.class
│   │   │       │   │   AQMeasureReportControllerImpl.class
│   │   │       │   │   AQStationReportController.class
│   │   │       │   │   AQStationsReportControllerImpl$1.class
│   │   │       │   │   AQStationsReportControllerImpl$2.class
│   │   │       │   │   AQStationsReportControllerImpl.class
│   │   │       │   │   OpenForecastController.class
│   │   │       │   │   PercentageStat.class
│   │   │       │   │   PomiarController.class
│   │   │       │   │   RegionReportController$1.class
│   │   │       │   │   RegionReportController$2.class
│   │   │       │   │   RegionReportController.class
│   │   │       │   │   ReportController.class
│   │   │       │   │   ReportService.class
│   │   │       │   │
│   │   │       │   └───dto
│   │   │       │           ForecastDTO.class
│   │   │       │           MeasureReportDTO.class
│   │   │       │           PomiarDTO.class
│   │   │       │           RegionDTO.class
│   │   │       │           RegionsReportDTO.class
│   │   │       │           StationDetailsDTO.class
│   │   │       │           StationsReportDTO.class
│   │   │       │           TimeRangeItem.class
│   │   │       │           TimeRanges.class
│   │   │       │           ValueTypeDTO.class
│   │   │       │
│   │   │       ├───repository
│   │   │       │       ConfigurationRepository.class
│   │   │       │       ExceedStatRepository.class
│   │   │       │       IsolineOutRepository.class
│   │   │       │       IsolineRepository.class
│   │   │       │       IsolineSetRepository.class
│   │   │       │       PointDataRepository.class
│   │   │       │       PointGridRepository.class
│   │   │       │       ProjectRepository.class
│   │   │       │       RegionRepository.class
│   │   │       │       RegionStatRepository.class
│   │   │       │
│   │   │       ├───service
│   │   │       │       ConfigurationService.class
│   │   │       │       ConfigurationServiceImpl.class
│   │   │       │       DataFileService.class
│   │   │       │       DataFileServiceImpl.class
│   │   │       │       DataTimeService.class
│   │   │       │       ExceedStatService.class
│   │   │       │       GdalService.class
│   │   │       │       GdalServiceImpl.class
│   │   │       │       GeometryService.class
│   │   │       │       GeometryServiceImpl.class
│   │   │       │       IsolineOutService.class
│   │   │       │       IsolineOutServiceImpl.class
│   │   │       │       IsolineService.class
│   │   │       │       IsolineServiceImpl.class
│   │   │       │       IsolineSetService.class
│   │   │       │       IsolineSetServiceImpl.class
│   │   │       │       PointDataService.class
│   │   │       │       PointDataServiceImpl.class
│   │   │       │       PointGridService.class
│   │   │       │       PointGridServiceImpl.class
│   │   │       │       ProjectService.class
│   │   │       │       ProjectServiceImpl.class
│   │   │       │       RegionService.class
│   │   │       │       RegionServiceImpl.class
│   │   │       │       RegionStatService.class
│   │   │       │       TestService.class
│   │   │       │
│   │   │       ├───spatial
│   │   │       │       SpatialDialect.class
│   │   │       │
│   │   │       ├───table
│   │   │       │       Col.class
│   │   │       │       Item.class
│   │   │       │       TableDTO.class
│   │   │       │       TableRegionsDTO.class
│   │   │       │       TableStationsDTO.class
│   │   │       │
│   │   │       └───views
│   │   │               ViewService.class
│   │   │
│   │   ├───templates
│   │   │       PrognozaPowiadomienie.html
│   │   │
│   │   └───views
│   │           aqstation_data_view.sql
│   │           isolineout_view.sql
│   │           pointdata_view.sql
│   │           prod_settings.sql
│   │           regionstat_view.sql
│   │           widoki_tmp.sql
│   │
│   ├───generated-sources
│   │   └───annotations
│   ├───generated-test-sources
│   │   └───test-annotations
│   ├───javadoc-bundle-options
│   │       javadoc-options-javadoc-resources.xml
│   │       package-list
│   │
│   ├───maven-archiver
│   │       pom.properties
│   │
│   ├───maven-status
│   │   └───maven-compiler-plugin
│   │       ├───compile
│   │       │   └───default-compile
│   │       │           createdFiles.lst
│   │       │           inputFiles.lst
│   │       │
│   │       └───testCompile
│   │           └───default-testCompile
│   │                   createdFiles.lst
│   │                   inputFiles.lst
│   │
│   ├───site
│   │   └───apidocs
│   │           javadoc.bat
│   │           options
│   │           packages
│   │
│   └───test-classes
│       │   .netbeans_automatic_build
│       │
│       └───pl
│           └───atmopolis
│               ├───dto
│               │       CsvDTOTest.class
│               │
│               └───notificationservice
│                       NotificationServiceApplicationTests.class
│                       PersistenceJPAConfig.class
│
└───WEB-INF
    │   index.html
    │
    └───jps
            page.jsp
