
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
