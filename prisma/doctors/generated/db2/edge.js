
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.CashierDataScalarFieldEnum = {
  Id: 'Id',
  IdChiNhanh: 'IdChiNhanh',
  ChiNhanh: 'ChiNhanh',
  IdPhieuThu: 'IdPhieuThu',
  IdNhanVien: 'IdNhanVien',
  HoTenNhanVien: 'HoTenNhanVien',
  NgayThu: 'NgayThu',
  IdBenhNhan: 'IdBenhNhan',
  HoTenBenhNhan: 'HoTenBenhNhan',
  NamSinh: 'NamSinh',
  TinhThanh: 'TinhThanh',
  IdTiepNhan: 'IdTiepNhan',
  DoiTuong: 'DoiTuong',
  LoaiTiepNhan: 'LoaiTiepNhan',
  KhamBenhVe: 'KhamBenhVe',
  LoaiPhieu: 'LoaiPhieu',
  IdPCD: 'IdPCD',
  TienTamUng: 'TienTamUng',
  TUConLai: 'TUConLai',
  DenTu: 'DenTu',
  ChuyenKhoa: 'ChuyenKhoa',
  IdChiTiet: 'IdChiTiet',
  IdDichVu: 'IdDichVu',
  TenDichVu: 'TenDichVu',
  PhanLoai: 'PhanLoai',
  LoaiHang: 'LoaiHang',
  CoBHYT: 'CoBHYT',
  SoLuong: 'SoLuong',
  DonVi: 'DonVi',
  DonGia: 'DonGia',
  GiaBHYT: 'GiaBHYT',
  ThanhTien: 'ThanhTien',
  BHYTChi: 'BHYTChi',
  ThanhTienBHYT: 'ThanhTienBHYT',
  TongTien: 'TongTien',
  ChenhLech: 'ChenhLech',
  GiamGia: 'GiamGia',
  TienGiam: 'TienGiam',
  ThanhToan: 'ThanhToan',
  TienGuiMau: 'TienGuiMau'
};

exports.Prisma.DrugRevenueDataScalarFieldEnum = {
  Id: 'Id',
  IdChiNhanh: 'IdChiNhanh',
  ChiNhanh: 'ChiNhanh',
  IdXuatKho: 'IdXuatKho',
  IdToaThuoc: 'IdToaThuoc',
  IdNhanVien: 'IdNhanVien',
  HoTenNhanVien: 'HoTenNhanVien',
  IdPhongKham: 'IdPhongKham',
  TenPhongKham: 'TenPhongKham',
  IdBenhNhan: 'IdBenhNhan',
  HoTenBenhNhan: 'HoTenBenhNhan',
  DoiTuong: 'DoiTuong',
  NgayXuat: 'NgayXuat',
  LoaiPhieu: 'LoaiPhieu',
  MaNghiepVu: 'MaNghiepVu',
  IdKho: 'IdKho',
  TenKho: 'TenKho',
  TongTien: 'TongTien',
  ChietKhau: 'ChietKhau',
  TienTruocThue: 'TienTruocThue',
  ThanhTien: 'ThanhTien'
};

exports.Prisma.PC_BangluongScalarFieldEnum = {
  id_bangluong: 'id_bangluong',
  id_chinhanh: 'id_chinhanh',
  id_nhanvien: 'id_nhanvien',
  nam_luong: 'nam_luong',
  thang_luong: 'thang_luong',
  chitiet_luong: 'chitiet_luong',
  luong_sanpham: 'luong_sanpham',
  id_nhanvien_upload: 'id_nhanvien_upload',
  ngay_upload: 'ngay_upload'
};

exports.Prisma.PC_BantinScalarFieldEnum = {
  id_Bantin: 'id_Bantin',
  Tieude: 'Tieude',
  Tomtat: 'Tomtat',
  Noidung: 'Noidung',
  Url_Images: 'Url_Images',
  id_Chinhanh: 'id_Chinhanh',
  id_KP_Banhanh: 'id_KP_Banhanh',
  Ten_KP_Banhanh: 'Ten_KP_Banhanh',
  id_To_Banhanh: 'id_To_Banhanh',
  Ten_To_Banhanh: 'Ten_To_Banhanh',
  id_NV_Them: 'id_NV_Them',
  Ngaydang: 'Ngaydang',
  Ngay_Hethan: 'Ngay_Hethan',
  Hienthi_Home: 'Hienthi_Home',
  Sudung: 'Sudung',
  Luotxem: 'Luotxem',
  Ghim_Bantin: 'Ghim_Bantin',
  Bantin_Tapdoan: 'Bantin_Tapdoan',
  id_DMPhanloai: 'id_DMPhanloai',
  TenPhanloai: 'TenPhanloai',
  id_DMPhanloaiCT: 'id_DMPhanloaiCT',
  TenChitiet: 'TenChitiet',
  Url_Video: 'Url_Video'
};

exports.Prisma.PC_BenhnhanScalarFieldEnum = {
  id_Benhnhan: 'id_Benhnhan',
  Hoten: 'Hoten',
  Ten: 'Ten',
  Hotenkhongdau: 'Hotenkhongdau',
  Ngaythangnamsinh: 'Ngaythangnamsinh',
  Namsinh: 'Namsinh',
  Gioitinh: 'Gioitinh',
  Noilamviec: 'Noilamviec',
  SoCMND: 'SoCMND',
  Email: 'Email',
  Dienthoai_didong: 'Dienthoai_didong',
  Tamtru_diachi: 'Tamtru_diachi',
  Tamtru_xaphuong: 'Tamtru_xaphuong',
  Tamtru_idXaphuong: 'Tamtru_idXaphuong',
  Tamtru_quanhuyen: 'Tamtru_quanhuyen',
  Tamtru_idQuanhuyen: 'Tamtru_idQuanhuyen',
  Tamtru_tinhthanh: 'Tamtru_tinhthanh',
  Tamtru_idTinhthanh: 'Tamtru_idTinhthanh',
  id_DMQuoctich: 'id_DMQuoctich',
  Quoctich: 'Quoctich',
  id_DMNghenghiep: 'id_DMNghenghiep',
  Nghenghiep: 'Nghenghiep',
  id_DMDantoc: 'id_DMDantoc',
  Dantoc: 'Dantoc',
  id_DMTongiao: 'id_DMTongiao',
  Tongiao: 'Tongiao',
  Trangthai: 'Trangthai',
  Cogiadinh: 'Cogiadinh',
  Ngaygiotaohoso: 'Ngaygiotaohoso',
  id_Nhanvien: 'id_Nhanvien',
  DCNuocngoai: 'DCNuocngoai',
  id_ChiNhanh: 'id_ChiNhanh',
  id_BenhnhanMoi: 'id_BenhnhanMoi',
  id_BenhnhanMe: 'id_BenhnhanMe',
  MahosoIVF: 'MahosoIVF',
  BNLH_Ten: 'BNLH_Ten',
  BNLH_DiaChi: 'BNLH_DiaChi',
  BNLH_SoDienThoai: 'BNLH_SoDienThoai',
  BNLH_QuanHe: 'BNLH_QuanHe',
  BNTT_Para: 'BNTT_Para',
  BNTT_TienSuBanThan: 'BNTT_TienSuBanThan',
  BNTT_TienSuGD: 'BNTT_TienSuGD',
  BNTT_SanhTaiBV: 'BNTT_SanhTaiBV',
  BNTT_DuocSinhTaiBV: 'BNTT_DuocSinhTaiBV',
  BNTT_MaTiemngua: 'BNTT_MaTiemngua',
  BNTT_ChoTrung: 'BNTT_ChoTrung',
  BNTT_NhanTrung_TenVo: 'BNTT_NhanTrung_TenVo',
  BNTT_NhanTrung_NamsinhVo: 'BNTT_NhanTrung_NamsinhVo',
  BNTT_NhanTrung_TenChong: 'BNTT_NhanTrung_TenChong',
  BNTT_NhanTrung_NamsinhChong: 'BNTT_NhanTrung_NamsinhChong',
  Sync_Version: 'Sync_Version',
  Sync_Date: 'Sync_Date',
  Sync_To_All: 'Sync_To_All',
  Sync_By_Branch: 'Sync_By_Branch'
};

exports.Prisma.PC_CustomerScalarFieldEnum = {
  pcId: 'pcId',
  name: 'name',
  birthday: 'birthday',
  phoneNumber: 'phoneNumber',
  gender: 'gender',
  idCardNo: 'idCardNo',
  email: 'email',
  careerCode: 'careerCode',
  nationalityCode: 'nationalityCode',
  ethnicCode: 'ethnicCode',
  countryCode: 'countryCode',
  cityCode: 'cityCode',
  districtCode: 'districtCode',
  wardCode: 'wardCode',
  homeAddress: 'homeAddress',
  managerId: 'managerId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.PC_HosoIVFScalarFieldEnum = {
  id_HosoIVF: 'id_HosoIVF',
  MasoHS: 'MasoHS',
  Namluutru: 'Namluutru',
  Sohientai: 'Sohientai',
  id_BN_Vo: 'id_BN_Vo',
  id_BN_Chong: 'id_BN_Chong',
  Trangthai: 'Trangthai',
  Ngaytao: 'Ngaytao',
  id_nhanvien: 'id_nhanvien',
  id_Khoaphong: 'id_Khoaphong',
  Phanloai: 'Phanloai',
  Ghichu: 'Ghichu',
  id_BSGuibenh: 'id_BSGuibenh',
  Hoten_BSGuibenh: 'Hoten_BSGuibenh',
  id_ChiNhanh: 'id_ChiNhanh',
  Sync_Version: 'Sync_Version',
  Sync_Date: 'Sync_Date',
  Sync_To_All: 'Sync_To_All',
  Sync_By_Branch: 'Sync_By_Branch'
};

exports.Prisma.PC_ModuleScalarFieldEnum = {
  id_Module: 'id_Module',
  enumModule: 'enumModule',
  TenModule: 'TenModule',
  Loai_Ungdung: 'Loai_Ungdung'
};

exports.Prisma.PC_Module_NhomTKScalarFieldEnum = {
  id_MDNhom: 'id_MDNhom',
  enum_Module: 'enum_Module',
  enum_NhomTK: 'enum_NhomTK',
  Mod_Xem: 'Mod_Xem',
  Mod_Them: 'Mod_Them',
  Mod_Sua: 'Mod_Sua',
  Mod_Xoa: 'Mod_Xoa',
  Mod_Xuat: 'Mod_Xuat',
  Ghichu: 'Ghichu',
  Loai_Ungdung: 'Loai_Ungdung'
};

exports.Prisma.PC_NhanvienScalarFieldEnum = {
  ID_Nhanvien: 'ID_Nhanvien',
  Hoten: 'Hoten',
  Ten: 'Ten',
  Ngaysinh: 'Ngaysinh',
  Namsinh: 'Namsinh',
  Gioitinh: 'Gioitinh',
  Dienthoai: 'Dienthoai',
  Email: 'Email',
  ID_NhomNV: 'ID_NhomNV',
  Ten_NhomNV: 'Ten_NhomNV',
  id_DMPhongban: 'id_DMPhongban',
  Phongban: 'Phongban',
  id_DMTonhom: 'id_DMTonhom',
  Tonhom: 'Tonhom',
  ID_Chinhanh: 'ID_Chinhanh',
  Diachi: 'Diachi',
  Trangthai: 'Trangthai',
  Ngayvaolam: 'Ngayvaolam',
  AnhProfile: 'AnhProfile',
  Sync_Version: 'Sync_Version',
  Sync_End: 'Sync_End'
};

exports.Prisma.PC_Nhanvien_MediaScalarFieldEnum = {
  id_Nhanvien: 'id_Nhanvien',
  AnhProfile: 'AnhProfile'
};

exports.Prisma.PC_NhomTaikhoanScalarFieldEnum = {
  id_NhomTK: 'id_NhomTK',
  enumNhom: 'enumNhom',
  TenNhom: 'TenNhom',
  Sudung: 'Sudung'
};

exports.Prisma.PC_PhienbanScalarFieldEnum = {
  ID_Phienban: 'ID_Phienban',
  Ten: 'Ten',
  Ngayphathanh: 'Ngayphathanh',
  Duongdan: 'Duongdan',
  Kichhoat: 'Kichhoat',
  Ghichu: 'Ghichu'
};

exports.Prisma.PC_TaikhoanScalarFieldEnum = {
  id_User: 'id_User',
  Password: 'Password',
  Name: 'Name',
  Email: 'Email',
  Device_IMEI: 'Device_IMEI',
  Device_OS: 'Device_OS',
  Device_Version: 'Device_Version',
  DateCreate: 'DateCreate',
  DaDoiPass: 'DaDoiPass',
  Active: 'Active',
  Disable: 'Disable',
  LastLogin: 'LastLogin',
  LastLogin_Web: 'LastLogin_Web',
  Login_App: 'Login_App',
  Login_Web: 'Login_Web',
  Avatar: 'Avatar',
  ID_ChiNhanh: 'ID_ChiNhanh'
};

exports.Prisma.PC_Taikhoan_BangluongScalarFieldEnum = {
  id: 'id',
  id_taikhoan: 'id_taikhoan',
  HotenNV: 'HotenNV',
  id_nhanvien_cap: 'id_nhanvien_cap',
  ngaycap: 'ngaycap',
  sdt_nhan_pass: 'sdt_nhan_pass',
  da_gui_sms: 'da_gui_sms',
  trangthai_sms: 'trangthai_sms',
  Pass_bill_luong: 'Pass_bill_luong'
};

exports.Prisma.PC_ThanhvienScalarFieldEnum = {
  id_TV: 'id_TV',
  enum_NhomTK: 'enum_NhomTK',
  id_User: 'id_User'
};

exports.Prisma.PC_TheCapphatScalarFieldEnum = {
  id_TheCapphat: 'id_TheCapphat',
  id_Benhnhan: 'id_Benhnhan',
  Hoten_Benhnhan: 'Hoten_Benhnhan',
  Ngaysinh: 'Ngaysinh',
  Ngaycapthe: 'Ngaycapthe',
  id_NVCap: 'id_NVCap',
  Hoten_NVCap: 'Hoten_NVCap',
  id_Dauthe: 'id_Dauthe',
  MaThe: 'MaThe',
  Diem_Congthem: 'Diem_Congthem',
  Lydo_Congdiem: 'Lydo_Congdiem',
  id_NVCongdiem: 'id_NVCongdiem',
  Trangthai: 'Trangthai',
  LydoKhoa: 'LydoKhoa',
  Ngayhethan: 'Ngayhethan',
  DoituongSudung: 'DoituongSudung',
  TTNguoiNhanThe: 'TTNguoiNhanThe',
  CongdongBau: 'CongdongBau',
  Nangcap_PCCARE: 'Nangcap_PCCARE',
  Ngaynang: 'Ngaynang',
  id_ChiNhanh: 'id_ChiNhanh',
  Sync_Version: 'Sync_Version',
  Sync_Date: 'Sync_Date',
  Sync_To_All: 'Sync_To_All',
  Sync_By_Branch: 'Sync_By_Branch'
};

exports.Prisma.Tbl_PhishingScalarFieldEnum = {
  id: 'id',
  userid: 'userid',
  username: 'username',
  phone: 'phone',
  email: 'email',
  description: 'description',
  branchID: 'branchID',
  branchName: 'branchName',
  deptID: 'deptID',
  deptName: 'deptName'
};

exports.Prisma.USER_PORTALScalarFieldEnum = {
  PID: 'PID',
  Name: 'Name'
};

exports.Prisma.WS_DMChinhanhScalarFieldEnum = {
  ID_ChiNhanh: 'ID_ChiNhanh',
  RSA_Public_Key: 'RSA_Public_Key',
  Url_WS: 'Url_WS',
  Ten_ChiNhanh: 'Ten_ChiNhanh',
  Sudung: 'Sudung',
  Ghichu: 'Ghichu',
  Url_Webnoibo: 'Url_Webnoibo'
};

exports.Prisma.WS_DMDonviScalarFieldEnum = {
  id_DMDonvi: 'id_DMDonvi',
  Ten_Donvi: 'Ten_Donvi',
  id_Khoaphong: 'id_Khoaphong',
  id_ChiNhanh: 'id_ChiNhanh',
  Sudung: 'Sudung'
};

exports.Prisma.WS_DMKhoaPhongScalarFieldEnum = {
  id_Khoaphong: 'id_Khoaphong',
  Ten: 'Ten',
  id_KPCha: 'id_KPCha',
  ID_ChiNhanh: 'ID_ChiNhanh',
  Ghichu: 'Ghichu',
  Sudung: 'Sudung',
  VanHanh: 'VanHanh'
};

exports.Prisma.WS_DMNhomTochucScalarFieldEnum = {
  id_DMNhomTochuc: 'id_DMNhomTochuc',
  id_DMChinhanh: 'id_DMChinhanh',
  Ten: 'Ten',
  Ghichu: 'Ghichu',
  Sudung: 'Sudung'
};

exports.Prisma.WS_LogScalarFieldEnum = {
  id_Log: 'id_Log',
  id_TaiKhoan: 'id_TaiKhoan',
  Taikhoan: 'Taikhoan',
  Ngaygio: 'Ngaygio',
  ResponseCode: 'ResponseCode',
  UserHostName: 'UserHostName',
  UserHostAddress: 'UserHostAddress',
  QueryString: 'QueryString',
  HttpMethod: 'HttpMethod',
  ClientBrowser: 'ClientBrowser'
};

exports.Prisma.WS_TaikhoanScalarFieldEnum = {
  id_TaiKhoan: 'id_TaiKhoan',
  Taikhoan: 'Taikhoan',
  Matkhau: 'Matkhau',
  ID_ChiNhanh: 'ID_ChiNhanh',
  NgaygioTao: 'NgaygioTao',
  NgaygioHetHan: 'NgaygioHetHan',
  SuDung: 'SuDung',
  GhiChu: 'GhiChu'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  CashierData: 'CashierData',
  DrugRevenueData: 'DrugRevenueData',
  PC_Bangluong: 'PC_Bangluong',
  PC_Bantin: 'PC_Bantin',
  PC_Benhnhan: 'PC_Benhnhan',
  PC_Customer: 'PC_Customer',
  PC_HosoIVF: 'PC_HosoIVF',
  PC_Module: 'PC_Module',
  PC_Module_NhomTK: 'PC_Module_NhomTK',
  PC_Nhanvien: 'PC_Nhanvien',
  PC_Nhanvien_Media: 'PC_Nhanvien_Media',
  PC_NhomTaikhoan: 'PC_NhomTaikhoan',
  PC_Phienban: 'PC_Phienban',
  PC_Taikhoan: 'PC_Taikhoan',
  PC_Taikhoan_Bangluong: 'PC_Taikhoan_Bangluong',
  PC_Thanhvien: 'PC_Thanhvien',
  PC_TheCapphat: 'PC_TheCapphat',
  tbl_Phishing: 'tbl_Phishing',
  USER_PORTAL: 'USER_PORTAL',
  WS_DMChinhanh: 'WS_DMChinhanh',
  WS_DMDonvi: 'WS_DMDonvi',
  WS_DMKhoaPhong: 'WS_DMKhoaPhong',
  WS_DMNhomTochuc: 'WS_DMNhomTochuc',
  WS_Log: 'WS_Log',
  WS_Taikhoan: 'WS_Taikhoan'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\Coding\\nextjs\\patient-survey\\prisma\\doctors\\generated\\db2",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\Coding\\nextjs\\patient-survey\\prisma\\doctors\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_2",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"./generated/db2\"\n  binaryTargets = [\"native\", \"debian-openssl-1.1.x\"]\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL_2\")\n}\n\nmodel CashierData {\n  Id            String    @id(map: \"PK_CashierData\") @db.NVarChar(100)\n  IdChiNhanh    String?   @db.NVarChar(50)\n  ChiNhanh      String?   @db.NVarChar(50)\n  IdPhieuThu    String?   @db.NVarChar(50)\n  IdNhanVien    String?   @db.NVarChar(50)\n  HoTenNhanVien String?   @db.NVarChar(200)\n  NgayThu       DateTime? @db.DateTime\n  IdBenhNhan    String?   @db.NVarChar(50)\n  HoTenBenhNhan String?   @db.NVarChar(200)\n  NamSinh       String?   @db.NVarChar(50)\n  TinhThanh     String?   @db.NVarChar(100)\n  IdTiepNhan    Int?\n  DoiTuong      String?   @db.NVarChar(50)\n  LoaiTiepNhan  String?   @db.NVarChar(50)\n  KhamBenhVe    Boolean?\n  LoaiPhieu     String?   @db.NVarChar(50)\n  IdPCD         String?   @db.NVarChar(50)\n  TienTamUng    Float?\n  TUConLai      Float?\n  DenTu         String?   @db.NVarChar(50)\n  ChuyenKhoa    String?   @db.NVarChar(50)\n  IdChiTiet     Int?\n  IdDichVu      String?   @db.NVarChar(50)\n  TenDichVu     String?   @db.NVarChar(200)\n  PhanLoai      String?   @db.NVarChar(50)\n  LoaiHang      String?   @db.NVarChar(50)\n  CoBHYT        Boolean?\n  SoLuong       Float?\n  DonVi         String?   @db.NVarChar(50)\n  DonGia        Float?\n  GiaBHYT       Float?\n  ThanhTien     Float?\n  BHYTChi       Float?\n  ThanhTienBHYT Float?\n  TongTien      Float?\n  ChenhLech     Float?\n  GiamGia       Float?\n  TienGiam      Float?\n  ThanhToan     Float?\n  TienGuiMau    Float?\n\n  @@index([IdChiNhanh], map: \"IdChiNhanh_Asc\")\n  @@index([IdChiTiet(sort: Desc)], map: \"IdChiTiet_Desc\")\n}\n\nmodel DrugRevenueData {\n  Id            String    @id(map: \"PK__DrugReve__3214EC07C552FDEE\") @db.NVarChar(100)\n  IdChiNhanh    String?   @db.NVarChar(50)\n  ChiNhanh      String?   @db.NVarChar(50)\n  IdXuatKho     String?   @db.NVarChar(50)\n  IdToaThuoc    String?   @db.NVarChar(50)\n  IdNhanVien    String?   @db.NVarChar(50)\n  HoTenNhanVien String?   @db.NVarChar(100)\n  IdPhongKham   String?   @db.NVarChar(50)\n  TenPhongKham  String?   @db.NVarChar(100)\n  IdBenhNhan    String?   @db.NVarChar(50)\n  HoTenBenhNhan String?   @db.NVarChar(100)\n  DoiTuong      String?   @db.NVarChar(100)\n  NgayXuat      DateTime? @db.DateTime\n  LoaiPhieu     String?   @db.NVarChar(100)\n  MaNghiepVu    String?   @db.NVarChar(50)\n  IdKho         String?   @db.NVarChar(50)\n  TenKho        String?   @db.NVarChar(100)\n  TongTien      Float?\n  ChietKhau     Float?\n  TienTruocThue Float?\n  ThanhTien     Float?\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel NhanSuNghiViec {\n  IdNhanVien String? @db.NVarChar(50)\n\n  @@ignore\n}\n\nmodel PC_Bangluong {\n  id_bangluong       Int       @id(map: \"pk_PC_Bangluong\") @default(autoincrement())\n  id_chinhanh        String?   @db.NVarChar(2)\n  id_nhanvien        String?   @db.NVarChar(15)\n  nam_luong          Int?\n  thang_luong        Int?\n  chitiet_luong      Bytes?    @db.Image\n  luong_sanpham      Bytes?    @db.Image\n  id_nhanvien_upload String?   @db.NVarChar(15)\n  ngay_upload        DateTime? @db.DateTime\n}\n\nmodel PC_Bantin {\n  id_Bantin       Int       @id(map: \"pk_PC_Bantin\") @default(autoincrement())\n  Tieude          String?   @db.NVarChar(120)\n  Tomtat          String?   @db.NVarChar(999)\n  Noidung         String?   @db.NVarChar(Max)\n  Url_Images      String?   @db.NVarChar(500)\n  id_Chinhanh     String?   @db.NVarChar(2)\n  id_KP_Banhanh   String?   @db.NVarChar(20)\n  Ten_KP_Banhanh  String?   @db.NVarChar(120)\n  id_To_Banhanh   String?   @db.NVarChar(20)\n  Ten_To_Banhanh  String?   @db.NVarChar(120)\n  id_NV_Them      String?   @db.NVarChar(50)\n  Ngaydang        DateTime? @db.DateTime\n  Ngay_Hethan     DateTime? @db.DateTime\n  Hienthi_Home    Boolean?\n  Sudung          Boolean?\n  Luotxem         Int?\n  Ghim_Bantin     Boolean?\n  Bantin_Tapdoan  Boolean?\n  id_DMPhanloai   Int?\n  TenPhanloai     String?   @db.NVarChar(100)\n  id_DMPhanloaiCT Int?\n  TenChitiet      String?   @db.NVarChar(200)\n  Url_Video       String?   @db.NVarChar(500)\n\n  @@index([Ngaydang(sort: Desc), id_DMPhanloai(sort: Desc)], map: \"Datetime_Desc\")\n}\n\nmodel PC_Benhnhan {\n  id_Benhnhan                 String    @id(map: \"pk_PC_Benhnhan\") @db.NVarChar(12)\n  Hoten                       String?   @db.NVarChar(500)\n  Ten                         String?   @db.NVarChar(50)\n  Hotenkhongdau               String?   @db.NVarChar(100)\n  Ngaythangnamsinh            String?   @db.NVarChar(10)\n  Namsinh                     String?   @db.NVarChar(4)\n  Gioitinh                    String?   @db.NVarChar(10)\n  Noilamviec                  String?   @db.NVarChar(500)\n  SoCMND                      String?   @db.NVarChar(20)\n  Email                       String?   @db.NVarChar(50)\n  Dienthoai_didong            String?   @db.NVarChar(12)\n  Tamtru_diachi               String?   @db.NVarChar(200)\n  Tamtru_xaphuong             String?   @db.NVarChar(100)\n  Tamtru_idXaphuong           String?   @db.NVarChar(20)\n  Tamtru_quanhuyen            String?   @db.NVarChar(100)\n  Tamtru_idQuanhuyen          String?   @db.NVarChar(20)\n  Tamtru_tinhthanh            String?   @db.NVarChar(100)\n  Tamtru_idTinhthanh          String?   @db.NVarChar(20)\n  id_DMQuoctich               String?   @db.NVarChar(20)\n  Quoctich                    String?   @db.NVarChar(100)\n  id_DMNghenghiep             String?   @db.NVarChar(20)\n  Nghenghiep                  String?   @db.NVarChar(100)\n  id_DMDantoc                 String?   @db.NVarChar(20)\n  Dantoc                      String?   @db.NVarChar(100)\n  id_DMTongiao                String?   @db.NVarChar(20)\n  Tongiao                     String?   @db.NVarChar(100)\n  Trangthai                   String?   @db.NVarChar(50)\n  Cogiadinh                   Boolean?\n  Ngaygiotaohoso              DateTime? @db.DateTime\n  id_Nhanvien                 String?   @db.NVarChar(20)\n  DCNuocngoai                 Boolean?\n  id_ChiNhanh                 String?   @db.NVarChar(2)\n  id_BenhnhanMoi              String?   @db.NVarChar(15)\n  id_BenhnhanMe               String?   @db.NVarChar(20)\n  MahosoIVF                   String?   @db.NVarChar(20)\n  BNLH_Ten                    String?   @db.NVarChar(100)\n  BNLH_DiaChi                 String?   @db.NVarChar(500)\n  BNLH_SoDienThoai            String?   @db.NVarChar(100)\n  BNLH_QuanHe                 String?   @db.NVarChar(50)\n  BNTT_Para                   String?   @db.NVarChar(5)\n  BNTT_TienSuBanThan          String?   @db.NVarChar(500)\n  BNTT_TienSuGD               String?   @db.NVarChar(500)\n  BNTT_SanhTaiBV              Boolean?\n  BNTT_DuocSinhTaiBV          Boolean?\n  BNTT_MaTiemngua             String?   @db.NVarChar(20)\n  BNTT_ChoTrung               Boolean?\n  BNTT_NhanTrung_TenVo        String?   @db.NVarChar(100)\n  BNTT_NhanTrung_NamsinhVo    String?   @db.NVarChar(4)\n  BNTT_NhanTrung_TenChong     String?   @db.NVarChar(100)\n  BNTT_NhanTrung_NamsinhChong String?   @db.NVarChar(4)\n  Sync_Version                Int?\n  Sync_Date                   DateTime? @db.DateTime\n  Sync_To_All                 Boolean?\n  Sync_By_Branch              String?   @db.NVarChar(2)\n}\n\nmodel PC_Customer {\n  pcId            String    @id(map: \"pk_PC_Customer\") @db.NVarChar(15)\n  name            String?   @db.NVarChar(200)\n  birthday        String?   @db.NVarChar(15)\n  phoneNumber     String?   @db.NVarChar(15)\n  gender          String?   @db.NVarChar(10)\n  idCardNo        String?   @db.NVarChar(20)\n  email           String?   @db.NVarChar(50)\n  careerCode      String?   @db.NVarChar(20)\n  nationalityCode String?   @db.NVarChar(20)\n  ethnicCode      String?   @db.NVarChar(20)\n  countryCode     String?   @db.NVarChar(10)\n  cityCode        String?   @db.NVarChar(10)\n  districtCode    String?   @db.NVarChar(10)\n  wardCode        String?   @db.NVarChar(10)\n  homeAddress     String?   @db.NVarChar(300)\n  managerId       String?   @db.NVarChar(15)\n  status          String?   @db.NVarChar(50)\n  createdAt       DateTime? @db.DateTime\n  updatedAt       DateTime? @db.DateTime\n  deletedAt       DateTime? @db.DateTime\n}\n\nmodel PC_HosoIVF {\n  id_HosoIVF      Int       @id(map: \"pk_PC_HosoIVF\") @default(autoincrement())\n  MasoHS          String?   @db.NVarChar(50)\n  Namluutru       Int?\n  Sohientai       Int?\n  id_BN_Vo        String?   @db.NVarChar(30)\n  id_BN_Chong     String?   @db.NVarChar(30)\n  Trangthai       String?   @db.NVarChar(100)\n  Ngaytao         DateTime? @db.DateTime\n  id_nhanvien     String?   @db.NVarChar(20)\n  id_Khoaphong    String?   @db.NVarChar(150)\n  Phanloai        String?   @db.NVarChar(100)\n  Ghichu          String?   @db.NVarChar(500)\n  id_BSGuibenh    String?   @db.NVarChar(30)\n  Hoten_BSGuibenh String?   @db.NVarChar(150)\n  id_ChiNhanh     String?   @db.NVarChar(2)\n  Sync_Version    Int?\n  Sync_Date       DateTime? @db.DateTime\n  Sync_To_All     Boolean?\n  Sync_By_Branch  String?   @db.NVarChar(2)\n}\n\nmodel PC_Module {\n  id_Module    Int     @id(map: \"pk_PC_Module\") @default(autoincrement())\n  enumModule   String? @db.NVarChar(50)\n  TenModule    String? @db.NVarChar(100)\n  Loai_Ungdung String? @db.NVarChar(20)\n}\n\nmodel PC_Module_NhomTK {\n  id_MDNhom    Int      @id(map: \"pk_PC_Module_NhomTK\") @default(autoincrement())\n  enum_Module  String?  @db.NVarChar(100)\n  enum_NhomTK  String?  @db.NVarChar(100)\n  Mod_Xem      Boolean?\n  Mod_Them     Boolean?\n  Mod_Sua      Boolean?\n  Mod_Xoa      Boolean?\n  Mod_Xuat     Boolean?\n  Ghichu       String?  @db.NVarChar(200)\n  Loai_Ungdung String?  @db.NVarChar(20)\n}\n\nmodel PC_Nhanvien {\n  ID_Nhanvien   String    @id(map: \"pk_PC_Nhanvien\") @db.NVarChar(50)\n  Hoten         String?   @db.NVarChar(100)\n  Ten           String?   @db.NVarChar(20)\n  Ngaysinh      String?   @db.NVarChar(10)\n  Namsinh       String?   @db.NVarChar(4)\n  Gioitinh      String?   @db.NVarChar(4)\n  Dienthoai     String?   @db.NVarChar(50)\n  Email         String?   @db.NVarChar(100)\n  ID_NhomNV     String?   @db.NVarChar(20)\n  Ten_NhomNV    String?   @db.NVarChar(80)\n  id_DMPhongban String?   @db.NVarChar(20)\n  Phongban      String?   @db.NVarChar(150)\n  id_DMTonhom   String?   @db.NVarChar(20)\n  Tonhom        String?   @db.NVarChar(150)\n  ID_Chinhanh   String?   @db.NVarChar(2)\n  Diachi        String?   @db.NVarChar(500)\n  Trangthai     String?   @db.NVarChar(100)\n  Ngayvaolam    DateTime? @db.DateTime\n  AnhProfile    String?   @db.NVarChar(500)\n  Sync_Version  Int?\n  Sync_End      Boolean?\n}\n\nmodel PC_Nhanvien_Media {\n  id_Nhanvien String @id(map: \"pk_PC_Nhanvien_Media\") @db.NVarChar(20)\n  AnhProfile  Bytes? @db.Image\n}\n\nmodel PC_NhomTaikhoan {\n  id_NhomTK Int      @id(map: \"pk_PC_NhomTaikhoan\") @default(autoincrement())\n  enumNhom  String?  @db.NVarChar(50)\n  TenNhom   String?  @db.NVarChar(80)\n  Sudung    Boolean?\n}\n\nmodel PC_Phienban {\n  ID_Phienban  String    @id(map: \"pk_PC_Phienban\") @db.NVarChar(20)\n  Ten          String?   @db.NVarChar(150)\n  Ngayphathanh DateTime? @db.DateTime\n  Duongdan     String?   @db.NVarChar(200)\n  Kichhoat     Boolean?\n  Ghichu       String?   @db.NVarChar(150)\n}\n\nmodel PC_Taikhoan {\n  id_User        String    @id(map: \"pk_PC_Taikhoan\") @db.NVarChar(50)\n  Password       String?   @db.NVarChar(150)\n  Name           String?   @db.NVarChar(100)\n  Email          String?   @db.NVarChar(120)\n  Device_IMEI    String?   @db.NVarChar(150)\n  Device_OS      String?   @db.NVarChar(50)\n  Device_Version String?   @db.NVarChar(10)\n  DateCreate     DateTime? @db.DateTime\n  DaDoiPass      Boolean?\n  Active         Boolean?\n  Disable        Boolean?\n  LastLogin      DateTime? @db.DateTime\n  LastLogin_Web  DateTime? @db.DateTime\n  Login_App      Boolean?\n  Login_Web      Boolean?\n  Avatar         String?   @db.VarChar(300)\n  ID_ChiNhanh    String?   @db.NVarChar(2)\n}\n\nmodel PC_Taikhoan_Bangluong {\n  id              Int       @id(map: \"pk_PC_Taikhoan_Bangluong\") @default(autoincrement())\n  id_taikhoan     String?   @db.NVarChar(15)\n  HotenNV         String?   @db.NVarChar(120)\n  id_nhanvien_cap String?   @db.NVarChar(15)\n  ngaycap         DateTime? @db.DateTime\n  sdt_nhan_pass   String?   @db.NVarChar(10)\n  da_gui_sms      Boolean?\n  trangthai_sms   String?   @db.NVarChar(300)\n  Pass_bill_luong String?   @db.NVarChar(4000)\n}\n\nmodel PC_Thanhvien {\n  id_TV       Int     @id(map: \"pk_PC_Thanhvien\") @default(autoincrement())\n  enum_NhomTK String? @db.NVarChar(100)\n  id_User     String? @db.NVarChar(50)\n}\n\nmodel PC_TheCapphat {\n  id_TheCapphat  Int       @id(map: \"pk_PC_TheCapphat\") @default(autoincrement())\n  id_Benhnhan    String?   @db.NVarChar(20)\n  Hoten_Benhnhan String?   @db.NVarChar(100)\n  Ngaysinh       String?   @db.NVarChar(12)\n  Ngaycapthe     DateTime? @db.DateTime\n  id_NVCap       String?   @db.NVarChar(20)\n  Hoten_NVCap    String?   @db.NVarChar(100)\n  id_Dauthe      String?   @db.NVarChar(5)\n  MaThe          String?   @db.NVarChar(20)\n  Diem_Congthem  Int?\n  Lydo_Congdiem  String?   @db.NVarChar(150)\n  id_NVCongdiem  String?   @db.NVarChar(20)\n  Trangthai      String?   @db.NVarChar(100)\n  LydoKhoa       String?   @db.NVarChar(30)\n  Ngayhethan     DateTime? @db.DateTime\n  DoituongSudung String?   @db.NVarChar(100)\n  TTNguoiNhanThe String?   @db.NVarChar(200)\n  CongdongBau    String?   @db.NVarChar(10)\n  Nangcap_PCCARE Boolean?\n  Ngaynang       DateTime? @db.DateTime\n  id_ChiNhanh    String?   @db.NVarChar(2)\n  Sync_Version   Int?\n  Sync_Date      DateTime? @db.DateTime\n  Sync_To_All    Boolean?\n  Sync_By_Branch String?   @db.NVarChar(2)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel PC_TiemNgua {\n  id            Int      @default(autoincrement())\n  thang_canduoi Int?\n  thang_cantren Int?\n  thang_tiem    String?  @db.NVarChar(300)\n  thang_tiem_en String?  @db.NVarChar(300)\n  vaccine_vi    String?  @db.NVarChar(Max)\n  vaccine_en    String?  @db.NVarChar(Max)\n  sudung        Boolean?\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel PC_TiemNgua_ChiTiet {\n  id         String   @db.VarChar(200)\n  tieu_de    String?  @db.NVarChar(500)\n  mota_vi    String?  @db.NVarChar(Max)\n  tieu_de_en String?  @db.NVarChar(Max)\n  mota_en    String?  @db.NVarChar(Max)\n  sudung     Boolean?\n\n  @@ignore\n}\n\nmodel tbl_Phishing {\n  id          Int     @id(map: \"PK_tbl_Phishing\") @default(autoincrement())\n  userid      String? @db.NVarChar(50)\n  username    String? @db.NVarChar(500)\n  phone       String? @db.NVarChar(50)\n  email       String? @db.NVarChar(100)\n  description String? @db.NVarChar(250)\n  branchID    String? @db.NVarChar(5)\n  branchName  String? @db.NVarChar(50)\n  deptID      String? @db.NVarChar(50)\n  deptName    String? @db.NVarChar(500)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel tbl_user {\n  pid String? @db.NVarChar(50)\n\n  @@ignore\n}\n\nmodel USER_PORTAL {\n  PID  String  @id(map: \"PK_USER_PORTAL\") @db.NVarChar(50)\n  Name String? @db.NVarChar(150)\n}\n\nmodel WS_DMChinhanh {\n  ID_ChiNhanh    String   @id(map: \"pk_WS_DMChinhanh\") @db.NVarChar(2)\n  RSA_Public_Key String?  @db.NVarChar(500)\n  Url_WS         String?  @db.NVarChar(500)\n  Ten_ChiNhanh   String?  @db.NVarChar(200)\n  Sudung         Boolean?\n  Ghichu         String?  @db.NVarChar(200)\n  Url_Webnoibo   String?  @db.NVarChar(500)\n}\n\nmodel WS_DMDonvi {\n  id_DMDonvi   String   @id(map: \"pk_WS_DMDonvi\") @db.NVarChar(15)\n  Ten_Donvi    String?  @db.NVarChar(80)\n  id_Khoaphong String?  @db.NVarChar(15)\n  id_ChiNhanh  String?  @db.NVarChar(2)\n  Sudung       Boolean?\n}\n\nmodel WS_DMKhoaPhong {\n  id_Khoaphong String   @db.NVarChar(15)\n  Ten          String?  @db.NVarChar(80)\n  id_KPCha     String?  @db.NVarChar(15)\n  ID_ChiNhanh  String   @db.NVarChar(2)\n  Ghichu       String?  @db.NVarChar(120)\n  Sudung       Boolean?\n  VanHanh      Boolean?\n\n  @@id([id_Khoaphong, ID_ChiNhanh], map: \"pk_WS_DMKhoaPhong\")\n}\n\nmodel WS_DMNhomTochuc {\n  id_DMNhomTochuc String   @db.NVarChar(15)\n  id_DMChinhanh   String   @db.NVarChar(15)\n  Ten             String?  @db.NVarChar(150)\n  Ghichu          String?  @db.NVarChar(150)\n  Sudung          Boolean?\n\n  @@id([id_DMNhomTochuc, id_DMChinhanh], map: \"pk_WS_DMNhomTochuc\")\n}\n\nmodel WS_Log {\n  id_Log          Int       @id(map: \"pk_WS_Log\") @default(autoincrement())\n  id_TaiKhoan     Int?\n  Taikhoan        String?   @db.NVarChar(200)\n  Ngaygio         DateTime? @db.DateTime\n  ResponseCode    String?   @db.NVarChar(200)\n  UserHostName    String?   @db.NVarChar(500)\n  UserHostAddress String?   @db.NVarChar(500)\n  QueryString     String?   @db.NVarChar(999)\n  HttpMethod      String?   @db.NVarChar(30)\n  ClientBrowser   String?   @db.NVarChar(100)\n\n  @@index([Ngaygio(sort: Desc)], map: \"ngaygio_desc\")\n}\n\nmodel WS_Taikhoan {\n  id_TaiKhoan   Int       @id(map: \"pk_WS_Taikhoan\") @default(autoincrement())\n  Taikhoan      String?   @db.NVarChar(200)\n  Matkhau       String?   @db.NVarChar(500)\n  ID_ChiNhanh   String?   @db.NVarChar(2)\n  NgaygioTao    DateTime? @db.DateTime\n  NgaygioHetHan DateTime? @db.DateTime\n  SuDung        Boolean?\n  GhiChu        String?   @db.NVarChar(300)\n}\n",
  "inlineSchemaHash": "7a1b632085b228b3d60da564385cfce89b54f39796ae4d30f15a0d3898a52065",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"CashierData\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdPhieuThu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdNhanVien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HoTenNhanVien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NgayThu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdBenhNhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HoTenBenhNhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NamSinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TinhThanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdTiepNhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DoiTuong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoaiTiepNhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KhamBenhVe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoaiPhieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdPCD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TienTamUng\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TUConLai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DenTu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChuyenKhoa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdChiTiet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdDichVu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenDichVu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PhanLoai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoaiHang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CoBHYT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SoLuong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DonVi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DonGia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GiaBHYT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ThanhTien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BHYTChi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ThanhTienBHYT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TongTien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChenhLech\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GiamGia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TienGiam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ThanhToan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TienGuiMau\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DrugRevenueData\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdXuatKho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdToaThuoc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdNhanVien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HoTenNhanVien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdPhongKham\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenPhongKham\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdBenhNhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HoTenBenhNhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DoiTuong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NgayXuat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoaiPhieu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaNghiepVu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdKho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenKho\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TongTien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChietKhau\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TienTruocThue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ThanhTien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Bangluong\":{\"dbName\":null,\"fields\":[{\"name\":\"id_bangluong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_chinhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_nhanvien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nam_luong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thang_luong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chitiet_luong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"luong_sanpham\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_nhanvien_upload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ngay_upload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Bantin\":{\"dbName\":null,\"fields\":[{\"name\":\"id_Bantin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tieude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tomtat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Noidung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Url_Images\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Chinhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_KP_Banhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten_KP_Banhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_To_Banhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten_To_Banhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_NV_Them\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaydang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngay_Hethan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hienthi_Home\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sudung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Luotxem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghim_Bantin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bantin_Tapdoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMPhanloai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenPhanloai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMPhanloaiCT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenChitiet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Url_Video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Benhnhan\":{\"dbName\":null,\"fields\":[{\"name\":\"id_Benhnhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hoten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hotenkhongdau\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaythangnamsinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Namsinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gioitinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Noilamviec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SoCMND\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dienthoai_didong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tamtru_diachi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tamtru_xaphuong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tamtru_idXaphuong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tamtru_quanhuyen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tamtru_idQuanhuyen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tamtru_tinhthanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tamtru_idTinhthanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMQuoctich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quoctich\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMNghenghiep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nghenghiep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMDantoc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dantoc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMTongiao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tongiao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Trangthai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cogiadinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaygiotaohoso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Nhanvien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DCNuocngoai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_BenhnhanMoi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_BenhnhanMe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MahosoIVF\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNLH_Ten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNLH_DiaChi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNLH_SoDienThoai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNLH_QuanHe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_Para\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_TienSuBanThan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_TienSuGD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_SanhTaiBV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_DuocSinhTaiBV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_MaTiemngua\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_ChoTrung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_NhanTrung_TenVo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_NhanTrung_NamsinhVo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_NhanTrung_TenChong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BNTT_NhanTrung_NamsinhChong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_Version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_To_All\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_By_Branch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Customer\":{\"dbName\":null,\"fields\":[{\"name\":\"pcId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idCardNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"careerCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nationalityCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ethnicCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countryCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cityCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"districtCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wardCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"managerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_HosoIVF\":{\"dbName\":null,\"fields\":[{\"name\":\"id_HosoIVF\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MasoHS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Namluutru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sohientai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_BN_Vo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_BN_Chong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Trangthai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaytao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_nhanvien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Khoaphong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phanloai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghichu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_BSGuibenh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hoten_BSGuibenh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_Version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_To_All\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_By_Branch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Module\":{\"dbName\":null,\"fields\":[{\"name\":\"id_Module\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enumModule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenModule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Loai_Ungdung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Module_NhomTK\":{\"dbName\":null,\"fields\":[{\"name\":\"id_MDNhom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enum_Module\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enum_NhomTK\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mod_Xem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mod_Them\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mod_Sua\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mod_Xoa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mod_Xuat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghichu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Loai_Ungdung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Nhanvien\":{\"dbName\":null,\"fields\":[{\"name\":\"ID_Nhanvien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hoten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaysinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Namsinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Gioitinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dienthoai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_NhomNV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten_NhomNV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMPhongban\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phongban\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMTonhom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tonhom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Chinhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Diachi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Trangthai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngayvaolam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AnhProfile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_Version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_End\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Nhanvien_Media\":{\"dbName\":null,\"fields\":[{\"name\":\"id_Nhanvien\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AnhProfile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_NhomTaikhoan\":{\"dbName\":null,\"fields\":[{\"name\":\"id_NhomTK\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enumNhom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenNhom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sudung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Phienban\":{\"dbName\":null,\"fields\":[{\"name\":\"ID_Phienban\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngayphathanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Duongdan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Kichhoat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghichu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Taikhoan\":{\"dbName\":null,\"fields\":[{\"name\":\"id_User\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Device_IMEI\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Device_OS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Device_Version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DateCreate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DaDoiPass\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Disable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastLogin_Web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Login_App\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Login_Web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Taikhoan_Bangluong\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_taikhoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HotenNV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_nhanvien_cap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ngaycap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sdt_nhan_pass\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"da_gui_sms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trangthai_sms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pass_bill_luong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_Thanhvien\":{\"dbName\":null,\"fields\":[{\"name\":\"id_TV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enum_NhomTK\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_User\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PC_TheCapphat\":{\"dbName\":null,\"fields\":[{\"name\":\"id_TheCapphat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Benhnhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hoten_Benhnhan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaysinh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaycapthe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_NVCap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Hoten_NVCap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Dauthe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MaThe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Diem_Congthem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lydo_Congdiem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_NVCongdiem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Trangthai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LydoKhoa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngayhethan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DoituongSudung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TTNguoiNhanThe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CongdongBau\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nangcap_PCCARE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaynang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_Version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_To_All\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sync_By_Branch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_Phishing\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deptName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"USER_PORTAL\":{\"dbName\":null,\"fields\":[{\"name\":\"PID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WS_DMChinhanh\":{\"dbName\":null,\"fields\":[{\"name\":\"ID_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RSA_Public_Key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Url_WS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sudung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghichu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Url_Webnoibo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WS_DMDonvi\":{\"dbName\":null,\"fields\":[{\"name\":\"id_DMDonvi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten_Donvi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_Khoaphong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sudung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WS_DMKhoaPhong\":{\"dbName\":null,\"fields\":[{\"name\":\"id_Khoaphong\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_KPCha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghichu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sudung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VanHanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_Khoaphong\",\"ID_ChiNhanh\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WS_DMNhomTochuc\":{\"dbName\":null,\"fields\":[{\"name\":\"id_DMNhomTochuc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_DMChinhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ten\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ghichu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sudung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_DMNhomTochuc\",\"id_DMChinhanh\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WS_Log\":{\"dbName\":null,\"fields\":[{\"name\":\"id_Log\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_TaiKhoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Taikhoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ngaygio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ResponseCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserHostName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserHostAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QueryString\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HttpMethod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClientBrowser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WS_Taikhoan\":{\"dbName\":null,\"fields\":[{\"name\":\"id_TaiKhoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Taikhoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Matkhau\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_ChiNhanh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NgaygioTao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NgaygioHetHan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SuDung\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GhiChu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_2: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_2'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_2 || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

